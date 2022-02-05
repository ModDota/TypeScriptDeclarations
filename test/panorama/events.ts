GameEvents.Subscribe('npc_spawned', (event) => {
  assertType<EntityIndex>(event.entindex);
});

declare global {
  interface GameEventDeclarations {
    game_event: { foo: string };
  }
}

GameEvents.Subscribe('game_event', (event) => assertType<string>(event.foo));
GameEvents.SendEventClientSide('game_event', { foo: 'bar' });

declare global {
  interface CustomGameEventDeclarations {
    declared_event: { foo: string };
  }
}

GameEvents.Subscribe('declared_event', (event) => assertType<string>(event.foo));
GameEvents.Subscribe<{ foo: string }>('inline_event', (event) => assertType<string>(event.foo));
GameEvents.Subscribe('untyped_event', (event) => {
  assertType<object>(event);
  // @ts-ignore TODO: Expect error
  event.foo;
});

GameEvents.Subscribe<{ array: string[]; boolean: boolean; symbol: symbol }>(
  'type_test',
  (event) => {
    assertType<Record<number, string>>(event.array);
    assertType<0 | 1>(event.boolean);
    assertType<never>(event.symbol);
  },
);

GameEvents.SendCustomGameEventToServer('declared_event', { foo: 'bar' });
GameEvents.SendCustomGameEventToServer<{ foo: 'bar' }>('inline_event', { foo: 'bar' });
// @ts-ignore TODO: Expect error
GameEvents.SendCustomGameEventToServer('untyped_event', {});

declare global {
  interface CustomNetTableDeclarations {
    custom_net_table: {
      foo: string;
      bar: boolean;
    };
  }
}

assertType<string | null>(CustomNetTables.GetTableValue('custom_net_table', 'foo'));
assertType<0 | 1 | null>(CustomNetTables.GetTableValue('custom_net_table', 'bar'));

for (const pair of CustomNetTables.GetAllTableValues('custom_net_table')) {
  if (pair.key === 'foo') {
    assertType<string>(pair.value);
  } else {
    assertType<0 | 1>(pair.value);
  }
}

CustomNetTables.SubscribeNetTableListener('custom_net_table', (_tableName, key, value) => {
  assertType<'foo' | 'bar'>(key);
  assertType<string | 0 | 1>(value);
});

export {};
