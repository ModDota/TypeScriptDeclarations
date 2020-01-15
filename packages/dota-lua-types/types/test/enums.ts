const hero = HeroList.GetHero(0)!;
hero.ModifyGold(100, true, EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified);

for (let rune: DOTA_RUNES = 0; rune < DOTA_RUNES.DOTA_RUNE_COUNT; rune++) {
    GameRules.GetGameModeEntity().SetRuneEnabled(rune, false);
}

export {};
