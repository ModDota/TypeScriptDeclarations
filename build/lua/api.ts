import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import { emit, getFunction, getType, withDescription } from './utils';

const declarationOverrides: Record<string, string> = {
  ListenToGameEvent: `
    /**
     * Register as a listener for a game event from script.
     *
     * @both
     */
    declare function ListenToGameEvent<TName extends keyof GameEventDeclarations>(
        eventName: TName,
        listener: (event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
        context: undefined,
    ): EventListenerID;
    declare function ListenToGameEvent<TName extends keyof GameEventDeclarations, TContext extends {}>(
        eventName: TName,
        listener: (this: TContext, event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
        context: TContext,
    ): EventListenerID;
  `,
  FireGameEvent: `
    /**
     * Fire a game event.
     *
     * @both
     */
    declare function FireGameEvent<TName extends keyof GameEventDeclarations>(
        eventName: TName,
        eventData: GameEventDeclarations[TName],
    ): void;
  `,
  FireGameEventLocal: `
    /**
     * Fire a game event without broadcasting to the client.
     *
     * @both
     */
    declare function FireGameEventLocal<TName extends keyof GameEventDeclarations>(
        eventName: TName,
        eventData: GameEventDeclarations[TName],
    ): void;
  `,
  Dynamic_Wrap: `
    declare function Dynamic_Wrap<
        T extends object,
        K extends {
            [P in keyof T]: ((...args: any[]) => any) extends T[P] // At least one of union's values is a function
                ? [T[P]] extends [((this: infer TThis, ...args: any[]) => any) | null | undefined] // Box type to make it not distributive
                    ? {} extends TThis // Has no specified this
                        ? P
                        : TThis extends T // Has this specified as T
                        ? P
                        : never
                    : never
                : never;
        }[keyof T]
    >(context: T, name: K): T[K];
  `,
};

const precedingDeclarations: Record<string, string> = {
  ListenToGameEvent: `
    declare interface GameEventProvidedProperties {
        game_event_listener: EventListenerID;
        game_event_name: string;
        splitscreenplayer: number;
    }
  `,

  CCustomGameEventManager: `
    /**
      * The type used for validation of custom events.
      *
      * This type may be augmented via interface merging.
      */
    interface CustomGameEventDeclarations {}

    declare namespace CCustomGameEventManager {
        type InferEventType<T extends string | object, TUntyped> = T extends string
            ? T extends keyof CustomGameEventDeclarations
                ? CustomGameEventDeclarations[T]
                : TUntyped
            : T;
    }
  `,

  CCustomNetTableManager: `
    /**
      * The type used for validation of custom net tables.
      *
      * This type may be augmented via interface merging.
      */
    interface CustomNetTableDeclarations {}
  `,
};

export const generatedApi = emit(
  api.flatMap((declaration) => {
    const typeName = declaration.name;

    const declarations: (dom.TopLevelDeclaration | string)[] = [];
    if (typeName in precedingDeclarations) {
      declarations.push(precedingDeclarations[typeName]);
    }

    if (typeName in declarationOverrides) {
      declarations.push(declarationOverrides[typeName]);
      return declarations;
    }

    if (declaration.kind === 'function') {
      declarations.push(
        ...getFunction((p, r) => dom.create.function(typeName, p, r), typeName, declaration),
      );

      return declarations;
    }

    const mainDeclarationMembers = [...declaration.members].flatMap<dom.ObjectTypeMember>(
      (member) => {
        const fullName = `${typeName}.${member.name}`;

        switch (member.kind) {
          case 'field':
            return withDescription(
              dom.create.property(member.name, getType(member.types, true)),
              member.description,
            );

          case 'function':
            return getFunction(
              (parameters, returnType) =>
                dom.create.method(
                  member.name,
                  parameters,
                  returnType,
                  member.abstract ? dom.DeclarationFlags.Optional : dom.DeclarationFlags.None,
                ),
              fullName,
              member,
              undefined,
              member.abstract,
            );
        }
      },
    );

    mainDeclarationMembers.push(
      dom.create.property('__kind__', dom.type.stringLiteral('instance')),
    );

    const constructorTypes = dom.create.intersection([]);
    if (typeName !== declaration.instance) {
      constructorTypes.members.push(dom.create.namedTypeReference(`DotaConstructor<${typeName}>`));
    }

    if (declaration.call != null) {
      constructorTypes.members.push(
        ...getFunction(dom.create.functionType, typeName, declaration.call),
      );
    }

    if (declaration.instance != null) {
      const typeNameReference = dom.create.namedTypeReference(typeName);
      if (typeName === declaration.instance) {
        constructorTypes.members.push(typeNameReference);
      } else {
        declarations.push(dom.create.const(declaration.instance, typeNameReference));
      }
    }

    declarations.push(
      withDescription(
        dom.create.const(typeName, constructorTypes),
        declaration.clientName === typeName ? '@both' : undefined,
      ),
    );

    if (declaration.clientName != null && declaration.clientName !== typeName) {
      declarations.push(
        withDescription(
          dom.create.const(
            declaration.clientName,
            dom.create.typeof(dom.create.namedTypeReference(typeName)),
          ),
          '@client',
        ),
      );
    }

    const extendedType =
      declaration.extend != null ? dom.create.interface(declaration.extend) : undefined;

    let mainTypeDeclaration: dom.ModuleMember;
    const hasOverloadedOperators = declaration.members.some((m) => m.name === '__add');
    if (hasOverloadedOperators) {
      mainTypeDeclaration = dom.create.alias(
        typeName,
        dom.create.intersection([
          dom.create.namedTypeReference('__NumberLike'),
          ...(extendedType ? [extendedType] : []),
          dom.create.objectType(mainDeclarationMembers),
        ]),
      );
    } else {
      mainTypeDeclaration = dom.create.interface(typeName);
      mainTypeDeclaration.members = mainDeclarationMembers;
      if (extendedType) {
        mainTypeDeclaration.baseTypes = [extendedType];
      }
    }

    declarations.push(withDescription(mainTypeDeclaration, declaration.description));
    return declarations;
  }),
);
