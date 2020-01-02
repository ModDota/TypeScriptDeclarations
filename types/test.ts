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

export {};
