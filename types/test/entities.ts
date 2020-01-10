const hero = HeroList.GetHero(0);
assertType<CDOTA_BaseNPC_Hero | undefined>(hero);
if (IsValidEntity(hero)) {
    assertType<CDOTA_BaseNPC_Hero>(hero);
}

const mayBeEntity = undefined as any;
if (IsValidEntity(mayBeEntity)) {
    assertType<CBaseEntity>(mayBeEntity);
}

export {};
