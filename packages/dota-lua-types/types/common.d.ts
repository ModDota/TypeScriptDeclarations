/** @noSelfInFile */

/// <reference types="lua-types/jit" />
/// <reference types="./json" />
/// <reference types="./modifier" />
/// <reference types="./api.generated" />
/// <reference types="./events.generated" />
/// <reference types="./modifier-properties.generated" />

type NetworkedData<T> = T extends string | number
    ? T
    : T extends boolean
    ? 0 | 1
    : T extends (infer U)[]
    ? { [key: number]: NetworkedData<U> }
    : T extends Function // eslint-disable-line @typescript-eslint/ban-types
    ? undefined
    : T extends object
    ? { [K in keyof T]: NetworkedData<T[K]> }
    : never;

type __NumberLike = number & Record<Exclude<keyof number, 'toString'>, never>;

type DotaConstructor<T extends object> = {
    [P in keyof T]: P extends '__kind__'
        ? 'constructor'
        : T[P] extends (...args: infer TArgs) => infer TReturn
        ? <TThis extends T>(this: TThis, ...args: TArgs) => TReturn
        : T[P];
};

declare interface CDOTA_BaseNPC {
    /**
     * @deprecated Added for compatibility with CBaseEntity interface. Invalid at the runtime.
     */
    Kill(): DOTATeam_t;
}

declare interface CDOTA_PlayerResource {
    /**
     * @deprecated Added for compatibility with CBaseEntity interface. Invalid at the runtime.
     */
    GetTeam(): DOTATeam_t;
}

declare interface CLogicRelay {
    /**
     * @deprecated Added for compatibility with CBaseEntity interface. Invalid at the runtime.
     */
    Trigger(): void;
}

declare type ProjectileID = number & { readonly __tag__: 'ProjectileID' };
declare type ParticleID = number & { readonly __tag__: 'ParticleID' };
declare type EventListenerID = number & { readonly __tag__: 'EventListenerID' };
declare type CustomGameEventListenerID = number & { readonly __tag__: 'CustomGameEventListenerID' };
declare type CombatAnalyzerQueryID = number & { readonly __tag__: 'CombatAnalyzerQueryID' };
declare type EntityIndex = number & { readonly __tag__: 'EntityIndex' };
declare type PlayerID =
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23;

// Not dumped
declare const vec3_origin: Vector;
declare const vec3_invalid: Vector;

// Declared in core addon scripts
declare function DeepPrintTable(table?: object | null): void;
declare function Dynamic_Wrap<
    T extends object,
    K extends {
        [P in keyof T]: ((...args: any[]) => any) extends T[P] // At least one of union's values is a function
            ? [T[P]] extends [((this: infer TThis, ...args: any[]) => any) | null | undefined] // Box type to make it not distributive
                ? {} extends TThis // Has no specified `this`
                    ? P
                    : TThis extends T // Has `this` specified as `T`
                    ? P
                    : never
                : never
            : never;
    }[keyof T]
>(context: T, name: K): T[K];

declare interface CDOTA_Ability_Lua {
    /**
     * Called immediately after ability entity is created.
     */
    Spawn?(): void;
}

declare interface CDOTA_Item_Lua {
    /**
     * Called immediately after ability entity is created.
     */
    Spawn?(): void;
}
