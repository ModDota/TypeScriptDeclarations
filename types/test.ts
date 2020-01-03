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
    custom_event: { foo: string };
  }
}

ListenToGameEvent('custom_event', event => assertType<string>(event.foo), undefined);
FireGameEvent('custom_event', { foo: 'bar' });
FireGameEventLocal('custom_event', { foo: 'bar' });

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
