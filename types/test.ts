const assertType = <T>(value: T) => value;

GameEvents.Subscribe('npc_spawned', event => {
    assertType<EntityIndex>(event.entindex);
});

declare global {
    interface GameEventDeclarations {
        custom_event: { foo: string };
    }
}

GameEvents.Subscribe('custom_event', event => assertType<string>(event.foo));
GameEvents.SendEventClientSide('custom_event', { foo: 'bar' });

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
