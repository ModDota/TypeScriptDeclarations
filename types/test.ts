const assertType = <T>(value: T) => value;

GameEvents.Subscribe('npc_spawned', event => {
    assertType<EntityIndex>(event.entindex);
});

declare global {
    interface GameEventDeclarations {
        game_event: { foo: string };
    }
}

GameEvents.Subscribe('game_event', event => assertType<string>(event.foo));
GameEvents.SendEventClientSide('game_event', { foo: 'bar' });

declare global {
    interface CustomGameEventDeclarations {
        declared_event: { foo: string };
    }
}

GameEvents.Subscribe('declared_event', event => assertType<string>(event.foo));
GameEvents.Subscribe<{ foo: string }>('inline_event', event => assertType<string>(event.foo));
GameEvents.Subscribe('untyped_event', event => {
    assertType<object>(event);
    // @ts-ignore TODO: Expect error
    event.foo;
});

GameEvents.SendCustomGameEventToServer('declared_event', { foo: 'bar' });
GameEvents.SendCustomGameEventToServer<{ foo: 'bar' }>('inline_event', { foo: 'bar' });
// @ts-ignore TODO: Expect error
GameEvents.SendCustomGameEventToServer('untyped_event', {});

declare global {
    interface CustomNetTableDeclarations {
        custom_net_table: {
            foo: string;
            bar: number;
        };
    }
}

assertType<string>(CustomNetTables.GetTableValue('custom_net_table', 'foo'));
assertType<number>(CustomNetTables.GetTableValue('custom_net_table', 'bar'));

for (const pair of CustomNetTables.GetAllTableValues('custom_net_table')) {
    if (pair.key === 'foo') {
        assertType<string>(pair.value);
    } else {
        assertType<number>(pair.value);
    }
}

CustomNetTables.SubscribeNetTableListener('custom_net_table', (_tableName, key, value) => {
    assertType<'foo' | 'bar'>(key);
    assertType<string | number>(value);
});

export {};
