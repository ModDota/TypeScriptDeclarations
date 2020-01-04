const assertType = <T>(value: T) => value;

ListenToGameEvent(
  'npc_spawned',
  event => {
    assertType<EntityIndex>(event.entindex);
  },
  undefined,
);

class GameMode {
  public npcSpawned(this: this, event: NpcSpawnedEvent) {
    assertType<GameMode>(this);
    assertType<EntityIndex>(event.entindex);
  }
}

const gameMode = new GameMode();
ListenToGameEvent('npc_spawned', gameMode.npcSpawned, gameMode);

declare global {
  interface GameEventDeclarations {
    game_event: { foo: string };
  }
}

ListenToGameEvent('game_event', event => assertType<string>(event.foo), undefined);
FireGameEvent('game_event', { foo: 'bar' });
FireGameEventLocal('game_event', { foo: 'bar' });

declare global {
  interface CustomGameEventDeclarations {
    declared_event: { foo: string };
  }
}

CustomGameEventManager.RegisterListener('declared_event', (_, e) => assertType<string>(e.foo));
CustomGameEventManager.RegisterListener<{ foo: string }>('inline_event', (_, event) => {
  assertType<string>(event.foo);
});
CustomGameEventManager.RegisterListener('untyped_event', (_, event) => {
  assertType<object>(event);
  assertType<PlayerID>(event.PlayerID);
  // @ts-ignore TODO: Expect error
  event.foo;
});

CustomGameEventManager.RegisterListener('', (_, event) => {
  assertType<PlayerID>(event.PlayerID);
});

CustomGameEventManager.Send_ServerToAllClients('declared_event', { foo: 'bar' });
CustomGameEventManager.Send_ServerToAllClients<{ foo: 'bar' }>('inline_event', { foo: 'bar' });
// @ts-ignore TODO: Expect error
CustomGameEventManager.Send_ServerToAllClients('untyped_event', {});

declare global {
  interface CustomNetTableDeclarations {
    custom_net_table: {
      foo: string;
      bar: number;
    };
  }
}

CustomNetTables.SetTableValue('custom_net_table', 'foo', 'value');
assertType<string>(CustomNetTables.GetTableValue('custom_net_table', 'foo'));

CustomNetTables.SetTableValue('custom_net_table', 'bar', 100);
assertType<number>(CustomNetTables.GetTableValue('custom_net_table', 'bar'));

export {};
