const hero = HeroList.GetHero(0)!;

CDOTA_BaseNPC.GetAttackSpeed.call(hero, true);
// @ts-ignore TODO: Expect error
CDOTA_BaseNPC.GetAttackSpeed();
// @ts-ignore TODO: Expect error
CDOTA_BaseNPC.GetAttackSpeed.call(undefined);

declare function takesConstructor(unit: typeof CDOTA_BaseNPC): void;
takesConstructor(CDOTA_BaseNPC);
takesConstructor(CDOTA_BaseNPC_Hero);
// @ts-ignore TODO: Expect error
takesConstructor(CBaseFlex);
// @ts-ignore TODO: Expect error
takesConstructor(hero);

declare function takesInstance(unit: CDOTA_BaseNPC): void;
takesInstance(hero);
// @ts-ignore TODO: Expect error
takesInstance(CDOTA_BaseNPC);

export {};
