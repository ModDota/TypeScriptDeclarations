Entities.GetArmorForDamageType(0 as EntityIndex, DamageTypes.ALL);

for (let team: DotaTeam = DOTA_TEAM_FIRST; team < DOTA_TEAM_COUNT - 1; team++) {
  Game.GetPlayerIDsOnTeam(team);
}
