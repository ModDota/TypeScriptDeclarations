/// <reference types="./api" />
/// <reference types="./enums" />
/// <reference types="./object-observe" />
/// <reference types="./panels" />

type EntityIndex = number & { _entityIndex: never };
type AbilityEntityIndex = EntityIndex & { _abilityEntityIndex: never };
type ItemEntityIndex = AbilityEntityIndex & { _itemEntityIndex: never };
type BuffID = number & { readonly __tag__: 'BuffID' };
type ParticleID = number & { readonly __tag__: 'ParticleID' };
type ScheduleID = number & { readonly __tag__: 'ScheduleID' };
type HeroID = number & { readonly __tag__: 'HeroID' };
type PlayerID =
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
