/// <reference types="./api" />
/// <reference types="./enums" />
/// <reference types="./panels" />

type AbilityID = number & { readonly __tag__: 'AbilityID' };
type BuffID = number & { readonly __tag__: 'BuffID' };
type EntityID = number & { readonly __tag__: 'EntityID' };
type ItemID = number & { readonly __tag__: 'ItemID' };
type ParticleID = number & { readonly __tag__: 'ParticleID' };
type ScheduleID = number & { readonly __tag__: 'ScheduleID' };

type ObserveEventType = ObserveChange<any>['type'];

type ObserveChange<T> =
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

interface ObjectConstructor {
    getNotifier(obj: object): any;
    observe<T extends object>(
        obj: T,
        callback: (changes: ObserveChange<T>[]) => void,
        acceptList?: ObserveEventType[],
    ): T;
    unobserve<T extends object>(obj: T, callback: (changes: ObserveChange<T>[]) => void): T;
}
