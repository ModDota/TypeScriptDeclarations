/** @noSelf */
declare namespace json {
    const version: string;

    type DecodeSuccess = LuaMultiReturn<[any, number]>;
    type DecodeFailure = LuaMultiReturn<[undefined, number, string]>;

    function decode(
        string: string,
        position?: number,
        nullValue?: any,
        objectMeta?: LuaMetatable<object>,
        arrayMeta?: LuaMetatable<any[]>,
    ): DecodeSuccess | DecodeFailure;

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

    function encode(object: any, options?: EncodeOptions): string;
}

declare namespace json {
    const _null: unique symbol;
    export { _null as null };
}
