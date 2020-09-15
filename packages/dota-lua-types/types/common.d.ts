/// <reference types="lua-types/jit" />
/// <reference path="json.d.ts" />
/// <reference path="api.generated.d.ts" />
/// <reference path="api-types.generated.d.ts" />
/// <reference path="events.generated.d.ts" />

declare const vec3_origin: Vector;
declare const vec3_invalid: Vector;

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

type DotaConstructor<T extends object> = {
    [P in keyof T]: P extends '__kind__'
        ? 'constructor'
        : T[P] extends (...args: infer TArgs) => infer TReturn
        ? <TThis extends T>(this: TThis, ...args: TArgs) => TReturn
        : T[P];
};

type __NumberLike = number & Record<Exclude<keyof number, 'toString'>, never>;
