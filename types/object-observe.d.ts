type ObserveEventType = ObserveChange<any>['type'];
type ObserveChange<T extends object> =
    | {
          type: 'add' | 'reconfigure' | 'setPrototype' | 'preventExtensions';
          object: T;
          name: string;
      }
    | {
          type: 'update' | 'delete';
          oldValue: any;
          object: T;
          name: string;
      };

interface ObjectNotifier<T extends object> {
    notify<TChange extends ObserveChange<T>>(change: TChange extends any ? Omit<TChange, 'object'> : never): void;
    performChange(changeType: string, changeFn: () => object): void;
}

interface ObjectConstructor {
    observe<T extends object>(
        obj: T,
        callback: (changes: ObserveChange<T>[]) => void,
        acceptList?: ObserveEventType[],
    ): T;
    unobserve<T extends object>(obj: T, callback: (changes: ObserveChange<T>[]) => void): T;
    getNotifier<T extends object>(obj: T): ObjectNotifier<T>;
    deliverChangeRecords(callback: (changes: ObserveChange<any>[]) => void): void;
}
