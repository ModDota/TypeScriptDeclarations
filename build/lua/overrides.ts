import assert from 'assert';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { CallableDeclaration, withDescription } from './utils';

export const overrides: Record<string, ApiOverride> = {
  DOTA_SpawnMapAtPosition: { callback: 'optional' },
  'CDOTABaseGameMode.ListenForQueryFailed': { callback: 'required' },
  'CDOTABaseGameMode.ListenForQueryProgressChanged': { callback: 'required' },
  'CDOTABaseGameMode.ListenForQuerySucceeded': { callback: 'required' },
  'CDOTABaseGameMode.SetAbilityTuningValueFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetBountyRunePickupFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetDamageFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetExecuteOrderFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetHealingFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetItemAddedToInventoryFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetModifierGainedFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetModifyExperienceFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetModifyGoldFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetRuneSpawnFilter': { callback: 'required' },
  'CDOTABaseGameMode.SetTrackingProjectileFilter': { callback: 'required' },

  'CDOTABaseAbility.GetBehavior': {
    return: 'DOTA_ABILITY_BEHAVIOR | Uint64',
    description:
      'Always returns Uint64 at runtime, DOTA_ABILITY_BEHAVIOR is referenced only for compatibility.',
  },
  'CDOTA_Ability_Lua.GetBehavior': { return: 'DOTA_ABILITY_BEHAVIOR | Uint64' },
  'CDOTA_Item_Lua.GetBehavior': { return: 'DOTA_ABILITY_BEHAVIOR | Uint64' },

  'CDOTA_Ability_Lua.CastFilterResultTarget': { return: 'UnitFilterResult | undefined' },
  'ParticleManager.SetParticleControlEnt': {
    args: {
      particle: 'ParticleID',
      controlPoint: 'number',
      unit: 'CDOTA_BaseNPC',
      particleAttach: 'ParticleAttachment_t',
      attachment: 'string | undefined',
      offset: 'Vector',
      lockOrientation: 'boolean',
    },
  },

  'CDOTA_Modifier_Lua.CheckState': {
    return: 'Partial<Record<modifierstate, boolean>> | undefined',
  },

  'CDOTA_Modifier_Lua.GetActivityTranslationModifiers': { return: 'string | undefined' },
  'CDOTA_Modifier_Lua.GetModifierPreAttack_CriticalStrike': { return: 'number | undefined' },

  ListenToGameEvent: {
    callback: 'optional',
    generics: [{ name: 'TName', extend: 'keyof GameEventDeclarations' }],
    args: {
      eventName: 'TName',
      listener: { args: { event: 'GameEventProvidedProperties & GameEventDeclarations[TName]' } },
    },
  },

  Dynamic_Wrap: {
    generics: [
      { name: 'T', extend: 'object' },
      {
        name: 'K',
        extend: `{
            [P in keyof T]: ((...args: any[]) => any) extends T[P] // At least one of union's values is a function
                ? [T[P]] extends [((this: infer TThis, ...args: any[]) => any) | null | undefined] // Box type to make it not distributive
                    ? {} extends TThis // Has no specified this
                        ? P
                        : TThis extends T // Has this specified as T
                        ? P
                        : never
                    : never
                : never;
        }[keyof T]`,
      },
    ],
    args: {
      context: 'T',
      name: 'K',
    },
    return: 'T[K]',
  },

  'CBaseEntity.IsInstance': {
    generics: [{ name: 'T', extend: 'CBaseEntity' }],
    args: { classOrClassName: 'DotaConstructor<T>' },
    return: 'this is T',
  },

  'CBaseEntity.SetContextThink': {
    args: { thinkFunc: { args: { '<this': 'this', entity: null } } },
  },

  'CCustomGameEventManager.RegisterListener': {
    generics: [{ name: 'T', extend: 'string | object' }],
    args: {
      eventName: '(T extends string ? T : string) | keyof CustomGameEventDeclarations',
      listener: {
        args: {
          event:
            'NetworkedData<CCustomGameEventManager.InferEventType<T, object> & { PlayerID: PlayerID }>',
        },
      },
    },
  },
};

for (const name of ['QueueConcept', 'QueueTeamConcept', 'QueueTeamConceptNoSpectators']) {
  overrides[`CDOTA_BaseNPC.${name}`] = {
    callback: 'optional',
    generics: [{ name: 'TCallbackInfo' }],
    args: {
      completionCallbackFn: { args: { callbackInfo: 'TCallbackInfo' } },
      callbackInfo: 'TCallbackInfo',
    },
  };
}

for (const name of ['FireGameEvent', 'FireGameEventLocal']) {
  overrides[name] = {
    generics: [{ name: 'TName', extend: 'keyof GameEventDeclarations' }],
    args: {
      eventName: 'TName',
      eventData: 'GameEventDeclarations[TName]',
    },
  };
}

for (const name of ['Send_ServerToAllClients', 'Send_ServerToPlayer', 'Send_ServerToTeam']) {
  overrides[`CCustomGameEventManager.${name}`] = {
    generics: [{ name: 'T', extend: 'string | object' }],
    args: {
      eventName: '(T extends string ? T : string) | keyof CustomGameEventDeclarations',
      eventData: 'CCustomGameEventManager.InferEventType<T, never>',
    },
  };
}

for (const name of ['GetTableValue', 'SetTableValue']) {
  overrides[`CCustomNetTableManager.${name}`] = {
    generics: [
      { name: 'TName', extend: 'keyof CustomNetTableDeclarations' },
      { name: 'T', extend: 'CustomNetTableDeclarations[TName]' },
      { name: 'K', extend: 'keyof T' },
    ],
    args: {
      tableName: 'TName',
      keyName: 'K',
      ...(name === 'SetTableValue' ? { value: 'T[K]' } : {}),
    },
    ...(name === 'GetTableValue' ? { return: 'NetworkedData<T[K]>' } : {}),
  };
}

interface ApiOverride extends FunctionOverride {
  callback?: 'required' | 'optional';
}

interface FunctionOverride {
  generics?: { name: string; extend?: string }[];
  args?: Record<string, ParameterOverride>;
  return?: string;
  description?: string;
}

type ParameterOverride = FunctionOverride | string | null;

export function applyApiOverride<T extends CallableDeclaration>(fn: T, override: ApiOverride): T[] {
  applyFunctionOverride(fn, override);

  switch (override.callback) {
    case undefined:
      return [fn];

    case 'required':
      addContextParameter(fn);
      return [fn];

    case 'optional': {
      const [withoutContext, withContext] = [_.cloneDeep(fn), _.cloneDeep(fn)];
      applyFunctionOverride(withoutContext, { args: { context: 'undefined' } });
      addContextParameter(withContext);
      withContext.jsDocComment = undefined;
      return [withoutContext, withContext];
    }
  }
}

function addContextParameter(fn: CallableDeclaration) {
  applyFunctionOverride(fn, {
    generics: [{ name: 'TContext', extend: '{}' }],
    args: { context: 'TContext' },
  });

  for (const type of fn.parameters.flatMap((p) => getFunctionTypes(p.type))) {
    type.parameters.unshift(
      dom.create.parameter('this', dom.create.namedTypeReference('TContext')),
    );
  }
}

function applyFunctionOverride(fn: CallableDeclaration, override: FunctionOverride) {
  fn.typeParameters.push(
    ...(override.generics ?? []).map(({ name, extend }) =>
      dom.create.typeParameter(
        name,
        extend !== undefined ? dom.create.interface(extend) : undefined,
      ),
    ),
  );

  for (const [name, arg] of Object.entries(override.args ?? {})) {
    let parameter: dom.Parameter;
    if (name.startsWith('<')) {
      parameter = dom.create.parameter(name.slice(1), dom.type.any);
      fn.parameters.unshift(parameter);
    } else if (name.startsWith('>')) {
      parameter = dom.create.parameter(name.slice(1), dom.type.any);
      fn.parameters.push(parameter);
    } else {
      parameter = fn.parameters.find((p) => p.name === name)!;
    }

    if (arg === null) {
      fn.parameters = fn.parameters.filter((p) => p !== parameter);
    } else if (typeof arg === 'string') {
      parameter.type = dom.create.namedTypeReference(arg);
    } else {
      const types = getFunctionTypes(parameter.type);
      assert(types.length > 0);
      types.forEach((t) => applyFunctionOverride(t, arg));
    }
  }

  if (override.return !== undefined) {
    fn.returnType = dom.create.namedTypeReference(override.return);
  }

  if (override.description !== undefined) {
    withDescription(fn, override.description);
  }
}

function getFunctionTypes(type: dom.Type) {
  if (typeof type !== 'object') return [];

  return (type.kind === 'union' ? type.members : [type]).filter(
    (m): m is dom.FunctionType => typeof m === 'object' && m.kind === 'function-type',
  );
}
