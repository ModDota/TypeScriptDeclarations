/// <reference types="lua-types/core/coroutine" />
/// <reference types="lua-types/core/debug" />
/// <reference types="lua-types/core/global" />
/// <reference types="lua-types/core/io" />
/// <reference types="lua-types/core/math" />
/// <reference types="lua-types/core/metatable" />
/// <reference types="lua-types/core/modules" />
// os is not defined
/// <reference types="lua-types/core/string" />
/// <reference types="lua-types/core/table" />
/// <reference types="lua-types/special/jit" />
/// <reference types="./modifier" />
/// <reference types="./enums.generated" />
/// <reference types="./events.generated" />
/// <reference types="./methods.generated" />
/// <reference types="./modifier-properties.generated" />

type __BindThisType<T extends object> = {
  [K in keyof T]: T[K] extends (...args: infer Args) => infer R
    ? (this: T, ...args: Args) => R
    : T[K]
};

type __InstanceGlobalType<T extends object> = Pick<
  __BindThisType<T>,
  Exclude<keyof T, '__instance__'>
>;

type __NumberLike = number & { [K in Exclude<keyof number, 'toString'>]: never };

declare interface CDOTA_BaseNPC {
  /**
   * @deprecated Left for compatibility with CBaseEntity interface. Invalid at the runtime.
   */
  Kill(): DotaTeam;
}

declare interface CDOTA_PlayerResource {
  /**
   * Get the team number of this entity.
   *
   * @deprecated Left for compatibility with CBaseEntity interface. Invalid at the runtime.
   */
  GetTeam(): DotaTeam;
}

declare interface CEntityInstance {
  IsNull(): boolean;
}

declare interface CCustomGameEventManager {
  /**
   * Register a callback to be called when a particular custom event arrives.
   * Returns a listener ID that can be used to unregister later.
   */
  RegisterListener<T extends object>(
    eventName: string,
    listener: (
      this: void,
      playerId: PlayerID,
      event: Omit<T, 'PlayerID'> & { PlayerID: PlayerID },
    ) => void,
  ): CustomGameEventListenerID;
}

declare type ProjectileID = number & { readonly __tag__: 'ProjectileID' };
declare type ParticleID = number & { readonly __tag__: 'ParticleID' };
declare type EventListenerID = number & { readonly __tag__: 'EventListenerID' };
declare type CustomGameEventListenerID = number & { readonly __tag__: 'CustomGameEventListenerID' };
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
declare function DeepPrintTable(this: void, table?: object | null): void;
declare function Dynamic_Wrap<
  T extends object,
  K extends {
    [P in keyof T]: T[P] extends (this: infer This, ...args: any[]) => any
      ? {} extends This // Include properties with not specified `this`
        ? P
        : This extends T // Include properties with `this` specified as `T`
        ? P
        : never
      : never
  }[keyof T]
>(this: void, context: T, name: K): T[K];
