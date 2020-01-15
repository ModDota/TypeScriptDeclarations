const hero = HeroList.GetHero(0)!;
hero.ModifyGold(100, true, ModifyGoldReason.UNSPECIFIED);

for (let rune: RuneType = 0; rune < DOTA_RUNE_COUNT; rune++) {
  GameRules.GetGameModeEntity().SetRuneEnabled(rune, false);
}
