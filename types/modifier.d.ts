declare interface CDOTA_Modifier_Lua {
  /**
   * Return a list of modifier functions this modifier implements.
   */
  DeclareFunctions?(): (ModifierProperty | ModifierEvent)[];

  /**
   * Return a map of enabled/disabled states.
   */
  CheckState?(): Partial<Record<ModifierState, boolean>>;
}

declare interface ModifierAttackEvent {
  attacker: CDOTA_BaseNPC;
  damage: number;
  damage_type: DamageTypes;
  damage_category: DamageCategory;
  damage_flags: DamageFlag;
  inflictor?: CDOTABaseAbility;
  original_damage: number;
  ranged_attack: boolean;
  target: CDOTA_BaseNPC;
}

declare interface ModifierUnitEvent {
  new_pos: Vector;
  order_type: UnitOrder;
  unit: CDOTA_BaseNPC;
}

declare interface ModifierAbilityEvent extends ModifierUnitEvent {
  ability: CDOTABaseAbility;
  target?: CDOTA_BaseNPC;
}
