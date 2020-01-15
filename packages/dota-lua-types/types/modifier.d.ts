declare interface CDOTA_Modifier_Lua {
    /**
     * Return a list of modifier functions this modifier implements.
     */
    DeclareFunctions?(): modifierfunction[];

    /**
     * Return a map of enabled/disabled states.
     */
    CheckState?(): Partial<Record<modifierstate, boolean>>;
}

declare interface ModifierAttackEvent {
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_category: DamageCategory_t;
    damage_flags: DOTADamageFlag_t;
    inflictor?: CDOTABaseAbility;
    original_damage: number;
    ranged_attack: boolean;
    target: CDOTA_BaseNPC;
}

declare interface ModifierUnitEvent {
    new_pos: Vector;
    order_type: dotaunitorder_t;
    unit: CDOTA_BaseNPC;
}

declare interface ModifierAbilityEvent extends ModifierUnitEvent {
    ability: CDOTABaseAbility;
    target?: CDOTA_BaseNPC;
}
