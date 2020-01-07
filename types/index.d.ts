/// <reference types="lua-types/jit" />
/// <reference types="./api.generated" />
/// <reference types="./enums.generated" />
/// <reference types="./events.generated" />
/// <reference types="./modifier" />
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

type DotaConstructor<T extends object> = Omit<__BindThisType<T>, '__instance__'> & {
    __dota_constructor__: never;
};

type __BindThisType<T extends object> = {
    [K in keyof T]: T[K] extends (...args: infer TArgs) => infer TReturn ? (this: T, ...args: TArgs) => TReturn : T[K];
};

declare interface CDOTA_BaseNPC {
    /**
     * @deprecated Left for compatibility with CBaseEntity interface. Invalid at the runtime.
     */
    Kill(): DotaTeam;
}

declare interface CDOTA_PlayerResource {
    /**
     * @deprecated Left for compatibility with CBaseEntity interface. Invalid at the runtime.
     */
    GetTeam(): DotaTeam;
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
declare function DeepPrintTable(this: void, table?: object | null): void;
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
>(this: void, context: T, name: K): T[K];

declare namespace json {
    type DecodeSuccess = [any, number];
    type DecodeFailure = [undefined, number, string];

    interface EncodeOptions {
        /**
         * When indent is set, the created string will contain newlines and
         * indentations. Otherwise it will be one long line.
         */
        indent?: boolean;

        /**
         * An array to specify the ordering of keys in the encoded output. If an
         * object has keys which are not in this array they are written after the
         * sorted keys.
         */
        keyorder?: (keyof any)[];

        /**
         * The initial level of indentation used when indent is set. For each level
         * two spaces are added.
         * @default 0
         */
        level?: number;
    }
}

declare const json: {
    readonly version: string;
    readonly null: unique symbol;

    /** @tupleReturn */
    decode(
        this: void,
        string: string,
        position?: number,
        nullValue?: any,
        objectMeta?: LuaMetatable<object>,
        arrayMeta?: LuaMetatable<any[]>,
    ): json.DecodeSuccess | json.DecodeFailure;

    encode(this: void, object: any, options?: json.EncodeOptions): string;
};
