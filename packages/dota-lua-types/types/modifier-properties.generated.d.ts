/** @noSelfInFile */
// @validateApiUsageDefault server

declare interface CDOTA_Modifier_Lua {
    OnAbilityEndChannel?(event: ModifierAbilityEvent): void;
    OnAbilityExecuted?(event: ModifierAbilityEvent): void;
    OnAbilityFullyCast?(event: ModifierAbilityEvent): void;
    OnAbilityStart?(event: ModifierAbilityEvent): void;
    OnAttack?(event: ModifierAttackEvent): void;
    OnAttacked?(event: ModifierAttackEvent): void;
    /**
     * Happens even if attack can't be issued.
     */
    OnAttackAllied?(event: ModifierAttackEvent): void;
    OnAttackCancelled?(event: ModifierAttackEvent): void;
    OnAttackFail?(event: ModifierAttackEvent): void;
    OnAttackFinished?(event: ModifierAttackEvent): void;
    OnAttackLanded?(event: ModifierAttackEvent): void;
    OnAttackRecord?(event: ModifierAttackEvent): void;
    OnAttackRecordDestroy?(event: ModifierAttackEvent): void;
    OnAttackStart?(event: ModifierAttackEvent): void;
    /**
     * Not working.
     */
    OnBreakInvisibility?(): void;
    OnBuildingKilled?(event: ModifierAttackEvent): void;
    OnDamageCalculated?(event: ModifierAttackEvent): void;
    OnDeath?(event: ModifierAttackEvent): void;
    OnDamagePrevented?(): void;
    /**
     * Not working.
     */
    OnDominated?(event: ModifierUnitEvent): void;
    OnHealthGained?(event: ModifierUnitEvent): void;
    OnHealReceived?(event: ModifierUnitEvent): void;
    OnHeroKilled?(event: ModifierAttackEvent): void;
    OnManaGained?(event: ModifierUnitEvent): void;
    OnModelChanged?(event: ModifierUnitEvent): void;
    /**
     * Not working.
     */
    OnModifierAdded?(): void;
    OnOrder?(event: ModifierUnitEvent): void;
    OnProcessCleave?(): void;
    OnProjectileDodge?(event: ModifierAttackEvent): void;
    OnProjectileObstructionHit?(): void;
    OnRespawn?(event: ModifierUnitEvent): void;
    OnSetLocation?(event: ModifierUnitEvent): void;
    /**
     * Not working.
     */
    OnSpellTargetReady?(): void;
    OnSpentMana?(event: ModifierAbilityEvent): void;
    OnStateChanged?(event: ModifierUnitEvent): void;
    OnTakeDamage?(event: ModifierAttackEvent): void;
    OnTakeDamageKillCredit?(event: ModifierAttackEvent): void;
    OnTeleported?(event: ModifierUnitEvent): void;
    OnTeleporting?(event: ModifierUnitEvent): void;
    OnUnitMoved?(event: ModifierUnitEvent): void;
    GetModifierAbilityLayout?(): number;
    GetAbsoluteNoDamageMagical?(event: ModifierAttackEvent): 0 | 1;
    GetAbsoluteNoDamagePhysical?(event: ModifierAttackEvent): 0 | 1;
    GetAbsoluteNoDamagePure?(event: ModifierAttackEvent): 0 | 1;
    GetAbsorbSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * Not working.
     */
    GetAlwaysAllowAttack?(): 0 | 1;
    GetAllowEtherealAttack?(): void;
    GetModifierAttackSpeedBaseOverride?(): number;
    GetModifierAttackSpeedBonus_Constant?(): number;
    GetModifierAttackSpeedReductionPercentage?(): void;
    GetModifierAttackPointConstant?(): number;
    /**
     * Not working.
     */
    GetModifierAttackRangeOverride?(): number;
    GetModifierAttackRangeBonus?(): number;
    GetModifierAttackRangeBonusPercentage?(): void;
    /**
     * Not working.
     */
    GetModifierAttackRangeBonusUnique?(): number;
    GetModifierAvoidDamage?(event: ModifierAttackEvent): number;
    GetModifierAvoidSpell?(event: ModifierAttackEvent): 0 | 1;
    GetModifierBaseAttack_BonusDamage?(): number;
    GetModifierBaseDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierBaseDamageOutgoing_PercentageUnique?(event: ModifierAttackEvent): number;
    GetModifierBaseAttackTimeConstant?(): number;
    GetModifierBaseAttackTimeConstant_Adjust?(): void;
    GetModifierBaseRegen?(): number;
    GetBonusDayVision?(): number;
    GetBonusNightVision?(): number;
    /**
     * Not working.
     */
    GetBonusNightVisionUnique?(): number;
    GetBonusVisionPercentage?(): number;
    BotAttackScoreBonus?(): void;
    /**
     * Not working.
     */
    GetModifierCanAttackTrees?(): 0 | 1;
    GetModifierPercentageCasttime?(event: ModifierAbilityEvent): number;
    GetModifierCastRangeBonus?(event: ModifierAbilityEvent): number;
    GetModifierCastRangeBonusStacking?(event: ModifierAbilityEvent): number;
    /**
     * Not working.
     */
    GetModifierCastRangeBonusTarget?(event: ModifierAbilityEvent): number;
    GetModifierChangeAbilityValue?(): void;
    GetModifierPercentageCooldown?(event: ModifierAbilityEvent): number;
    GetModifierPercentageCooldownOngoing?(): void;
    GetModifierCooldownReduction_Constant?(event: ModifierAbilityEvent): number;
    GetModifierDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    GetModifierDamageOutgoing_Percentage_Illusion?(event: ModifierAttackEvent): number;
    GetModifierDamageOutgoing_Percentage_Illusion_Amplify?(): void;
    GetModifierConstantDeathGoldCost?(): number;
    GetDisableAutoAttack?(): 0 | 1;
    GetDisableHealing?(): 0 | 1;
    GetModifierDisableTurning?(): 0 | 1;
    /**
     * Not working.
     */
    GetModifierDodgeProjectile?(): 0 | 1;
    GetModifierNoVisionOfAttacker?(): void;
    GetModifierEvasion_Constant?(event: ModifierAttackEvent): number;
    GetModifierPercentageExpRateBoost?(): number;
    GetModifierExtraHealthBonus?(): number;
    GetModifierExtraHealthPercentage?(): number;
    GetModifierExtraManaBonus?(): number;
    GetModifierExtraManaPercentage?(): void;
    GetModifierExtraStrengthBonus?(): number;
    GetModifierFixedAttackRate?(): number;
    GetFixedDayVision?(): number;
    GetFixedNightVision?(): number;
    GetForceDrawOnMinimap?(): 0 | 1;
    GetModifierHealthBonus?(): number;
    GetModifierConstantHealthRegen?(): number;
    GetModifierHealthRegenPercentage?(): number;
    /**
     * Not working.
     */
    GetModifierHealthRegenPercentageUnique?(): number;
    GetModifierHealAmplify_PercentageSource?(): void;
    GetModifierHealAmplify_PercentageTarget?(): void;
    GetModifierHPRegenAmplify_Percentage?(): number;
    /**
     * Not working.
     */
    GetModifierIgnoreCastAngle?(): 0 | 1;
    /**
     * Not working.
     */
    GetModifierIgnoreCooldown?(): 0 | 1;
    GetModifierIgnoreMovespeedLimit?(): 0 | 1;
    /**
     * Not working.
     */
    GetModifierIgnorePhysicalArmor?(event: ModifierAttackEvent): number;
    GetModifierIllusionLabel?(): 0 | 1;
    GetModifierIncomingDamage_Percentage?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierIncomingPhysicalDamageConstant?(event: ModifierAttackEvent): number;
    GetModifierIncomingPhysicalDamage_Percentage?(event: ModifierAttackEvent): number;
    GetModifierIncomingSpellDamageConstant?(event: ModifierAttackEvent): number;
    GetModifierInvisibilityAttackBehaviorException?(): void;
    GetModifierInvisibilityLevel?(): number;
    GetIsIllusion?(): 0 | 1;
    /**
     * Always applies scepter when this property is active
     */
    GetModifierScepter?(): void;
    GetModifierLifestealRegenAmplify_Percentage?(): void;
    GetUnitLifetimeFraction?(): number;
    /**
     * Not working.
     */
    GetModifierMagical_ConstantBlock?(event: ModifierAttackEvent): number;
    GetModifierMagicalResistanceBaseReduction?(): void;
    GetModifierMagicalResistanceBonus?(event: ModifierAttackEvent): number;
    GetModifierMagicalResistanceBonusIllusions?(): void;
    GetModifierMagicalResistanceDecrepifyUnique?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierMagicalResistanceDirectModification?(event: ModifierAttackEvent): number;
    GetModifierPercentageManacost?(event: ModifierAbilityEvent): number;
    /**
     * Not working.
     */
    GetModifierPercentageManacostStacking?(): number;
    GetModifierManacostReduction_Constant?(): void;
    GetModifierManaBonus?(): number;
    GetModifierManaDrainAmplify_Percentage?(): void;
    GetModifierConstantManaRegen?(): number;
    GetModifierConstantManaRegenUnique?(): number;
    GetModifierTotalPercentageManaRegen?(): number;
    /**
     * Not working.
     */
    GetModifierMaxAttackRange?(): number;
    GetMinHealth?(): number;
    GetModifierMiss_Percentage?(): number;
    GetModifierModelChange?(): string;
    GetModifierModelScale?(): number;
    GetModifierMoveSpeed_Absolute?(): number;
    GetModifierMoveSpeed_AbsoluteMax?(): void;
    GetModifierMoveSpeed_AbsoluteMin?(): number;
    GetModifierMoveSpeedOverride?(): number;
    /**
     * Not working.
     */
    GetModifierMoveSpeedBonus_Constant?(): number;
    GetModifierMoveSpeedBonus_Constant_Unique?(): void;
    /**
     * Not working.
     */
    GetModifierMoveSpeedBonus_Constant_Unique_2?(): number;
    GetModifierMoveSpeedBonus_Percentage?(): number;
    GetModifierMoveSpeedBonus_Percentage_Unique?(): number;
    GetModifierMoveSpeedBonus_Percentage_Unique_2?(): number;
    GetModifierMoveSpeedBonus_Special_Boots?(): number;
    GetModifierMoveSpeedBonus_Special_Boots_2?(): number;
    GetModifierMoveSpeed_Limit?(): number;
    GetModifierMoveSpeedReductionPercentage?(): void;
    GetModifierMPRegenAmplify_Percentage?(): number;
    /**
     * Total amplify value is clamped to 0.
     */
    GetModifierMPRestoreAmplify_Percentage?(): number;
    /**
     * Not working.
     */
    GetModifierNegativeEvasion_Constant?(): number;
    GetModifierOverrideAbilitySpecial?(): void;
    GetModifierOverrideAbilitySpecialValue?(): void;
    GetOverrideAnimation?(): GameActivity_t;
    GetOverrideAnimationRate?(): number;
    GetOverrideAnimationWeight?(): number;
    /**
     * Not working.
     */
    GetModifierOverrideAttackDamage?(): number;
    GetOverrideAttackMagical?(): 0 | 1;
    GetModifierPersistentInvisibility?(): number;
    /**
     * Values above 100% are ignored.
     */
    GetModifierPhysicalArmorBase_Percentage?(): number;
    GetModifierPhysicalArmorBonus?(event: ModifierAttackEvent): number;
    GetModifierPhysicalArmorBonusUnique?(event: ModifierAttackEvent): number;
    GetModifierPhysicalArmorBonusUniqueActive?(event: ModifierAttackEvent): number;
    GetModifierPhysicalArmorTotal_Percentage?(): void;
    GetModifierPhysical_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierPhysical_ConstantBlockSpecial?(): number;
    GetModifierPreAttack_BonusDamage?(): number;
    GetModifierPreAttack_BonusDamagePostCrit?(event: ModifierAttackEvent): number;
    GetModifierPreAttack_BonusDamage_Proc?(): number;
    GetModifierPreAttack_BonusDamage_Target?(): void;
    GetModifierPreAttack_CriticalStrike?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierPreAttack_Target_CriticalStrike?(): number;
    PreserveParticlesOnModelChanged?(): 0 | 1;
    GetModifierPreAttack?(event: ModifierAttackEvent): number;
    GetModifierProcAttack_BonusDamage_Magical?(event: ModifierAttackEvent): number;
    GetModifierProcAttack_BonusDamage_Physical?(event: ModifierAttackEvent): number;
    GetModifierProcAttack_BonusDamage_Pure?(event: ModifierAttackEvent): number;
    GetModifierProcAttack_Feedback?(event: ModifierAttackEvent): number;
    GetModifierProjectileName?(): string;
    GetModifierProjectileSpeedBonus?(): number;
    GetModifierProjectileSpeedBonusPercentage?(): void;
    GetModifierProvidesFOWVision?(): 0 | 1;
    GetModifierRadarCooldownReduction?(): void;
    GetReflectSpell?(event: ModifierAbilityEvent): 0 | 1;
    ReincarnateTime?(): number;
    GetModifierConstantRespawnTime?(): number;
    GetModifierPercentageRespawnTime?(): number;
    GetModifierStackingRespawnTime?(): number;
    GetModifierSpellsRequireHP?(): number;
    GetModifierSpellAmplify_Percentage?(event: ModifierAttackEvent): number;
    /**
     * Not working.
     */
    GetModifierSpellAmplify_PercentageUnique?(): number;
    GetModifierSpellLifestealRegenAmplify_Percentage?(): void;
    GetModifierBonusStats_Agility?(): number;
    GetModifierBonusStats_Agility_Percentage?(): void;
    GetModifierBonusStats_Intellect?(): number;
    GetModifierBonusStats_Intellect_Percentage?(): void;
    GetModifierBonusStats_Strength?(): number;
    GetModifierBonusStats_Strength_Percentage?(): void;
    GetModifierStatusResistance?(): number;
    GetModifierStatusResistanceCaster?(event: ModifierUnitEvent): number;
    GetModifierStatusResistanceStacking?(): number;
    GetModifierStrongIllusion?(): void;
    GetModifierSuperIllusion?(): 0 | 1;
    GetModifierSuperIllusionWithUltimate?(): 0 | 1;
    GetSuppressCleave?(): void;
    GetSuppressTeleport?(): void;
    GetModifierTempestDouble?(): 0 | 1;
    OnTooltip?(): number;
    OnTooltip2?(): number;
    GetModifierTotalDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    GetModifierTotal_ConstantBlock?(event: ModifierAttackEvent): number;
    GetModifierPhysical_ConstantBlockUnavoidablePreArmor?(event: ModifierAttackEvent): number;
    GetActivityTranslationModifiers?(): string;
    GetAttackSound?(): string;
    GetTriggerCosmeticAndEndAttack?(): void;
    GetModifierTurnRate_Override?(): number;
    GetModifierTurnRate_Percentage?(): number;
    GetModifierUnitDisllowUpgrading?(): 0 | 1;
    /**
     * Not working.
     */
    GetModifierUnitStatsNeedsRefresh?(): 0 | 1;
    GetVisualZDelta?(): number;
}
