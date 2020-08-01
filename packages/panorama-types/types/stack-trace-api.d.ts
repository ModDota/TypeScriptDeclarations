/* eslint-disable @typescript-eslint/ban-types */

// Based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/dd1cb53154e0beec1b45068aca2d8f26d6c3ebdf/types/node/globals.d.ts

interface ErrorConstructor {
    /** Create .stack property on a target object */
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;

    /**
     * Optional override for formatting stack traces
     *
     * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
     */
    prepareStackTrace?: (err: Error, stackTraces: ErrorCallSite[]) => any;

    stackTraceLimit: number;
}

interface ErrorCallSite {
    /**
     * Value of "this"
     */
    getThis(): any;

    /**
     * Type of "this" as a string.
     * This is the name of the function stored in the constructor field of
     * "this", if available.  Otherwise the object's [[Class]] internal
     * property.
     */
    getTypeName(): string | null;

    /**
     * Current function
     */
    getFunction(): Function | undefined;

    /**
     * Name of the current function, typically its name property.
     * If a name property is not available an attempt will be made to try
     * to infer a name from the function's context.
     */
    getFunctionName(): string | null;

    /**
     * Name of the property [of "this" or one of its prototypes] that holds
     * the current function
     */
    getMethodName(): string | null;

    /**
     * Name of the script [if this function was defined in a script]
     */
    getFileName(): string | null;

    /**
     * Current line number [if this function was defined in a script]
     */
    getLineNumber(): number | null;

    /**
     * Current column number [if this function was defined in a script]
     */
    getColumnNumber(): number | null;

    /**
     * A call site object representing the location where eval was called
     * [if this function was created using a call to eval]
     */
    getEvalOrigin(): string | undefined;

    /**
     * Is this a toplevel invocation, that is, is "this" the global object?
     */
    isToplevel(): boolean;

    /**
     * Does this call take place in code defined by a call to eval?
     */
    isEval(): boolean;

    /**
     * Is this call in native V8 code?
     */
    isNative(): boolean;

    /**
     * Is this a constructor call?
     */
    isConstructor(): boolean;
}
