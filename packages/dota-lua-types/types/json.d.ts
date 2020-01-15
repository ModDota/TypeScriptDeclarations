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
