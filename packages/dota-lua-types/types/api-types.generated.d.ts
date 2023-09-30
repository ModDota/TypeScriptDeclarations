/** @noSelfInFile */
// @validateApiUsageDefault server

declare type CombatAnalyzerQueryID = number & {
    readonly __tag__: 'CombatAnalyzerQueryID';
};

declare type CustomGameEventListenerID = number & {
    readonly __tag__: 'CustomGameEventListenerID';
};

declare type EntityIndex = number & {
    readonly __tag__: 'EntityIndex';
};

declare type EventListenerID = number & {
    readonly __tag__: 'EventListenerID';
};

declare type ParticleID = number & {
    readonly __tag__: 'ParticleID';
};

declare type PlayerID =
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23;

declare type ProjectileID = number & {
    readonly __tag__: 'ProjectileID';
};

declare type SpawnGroupHandle = number & {
    readonly __tag__: 'SpawnGroupHandle';
};

declare type ViewerID = number & {
    readonly __tag__: 'ViewerID';
};

declare interface LocalTime {
    Minutes: number;
    Seconds: number;
    Hours: number;
}

declare interface CScriptHTTPResponse {
    Body: string;
    Request: CScriptHTTPRequest;
    StatusCode: number;
}

declare interface ApplyDamageOptions {
    victim: CDOTA_BaseNPC;
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_flags?: DOTADamageFlag_t;
    ability?: CDOTABaseAbility;
}

declare interface CreateIllusionsModifierKeys {
    outgoing_damage?: number;
    incoming_damage?: number;
    bounty_base?: number;
    bounty_growth?: number;
    outgoing_damage_structure?: number;
    outgoing_damage_roshan?: number;
}

declare interface EntityBounds {
    Mins: Vector;
    Maxs: Vector;
}

declare interface CombatAnalyzerQueryResult {
    query_id: CombatAnalyzerQueryID;
}

declare interface ExecuteOrderOptions {
    UnitIndex: EntityIndex;
    OrderType: dotaunitorder_t;
    /**
     * Only used when targeting units.
     */
    TargetIndex?: EntityIndex;
    /**
     * Only used when casting abilities.
     */
    AbilityIndex?: EntityIndex;
    /**
     * Only used when targeting the ground.
     */
    Position?: Vector;
    /**
     * Used for queueing up abilities.
     */
    Queue?: boolean;
}

declare interface TraceCollideableInputs {
    startpos: Vector;
    endpos: Vector;
    ent: CBaseEntity;
    mins?: unknown;
    maxs?: unknown;
}

declare interface TraceCollideableOutputs extends TraceCollideableInputs {
    hit: boolean;
    pos: Vector;
    normal: Vector;
    fraction: number;
}

declare interface TraceHullInputs {
    startpos: Vector;
    endpos: Vector;
    min: unknown;
    max: unknown;
    mask?: unknown;
    ignore?: unknown;
}

declare interface TraceHullOutputs extends TraceHullInputs {
    hit: boolean;
    startsolid: boolean;
    pos: Vector;
    normal: Vector;
    fraction: number;
    enthit?: CBaseEntity;
}

declare interface TraceLineInputs {
    startpos: Vector;
    endpos: Vector;
    mask?: unknown;
    ignore?: unknown;
}

declare interface TraceLineOutputs extends TraceLineInputs {
    hit: boolean;
    startsolid: boolean;
    pos: Vector;
    normal: Vector;
    fraction: number;
    enthit?: CBaseEntity;
}

declare interface CreateBaseProjectileOptions {
    EffectName?: string;
    Ability?: CDOTABaseAbility;
    Source?: CDOTA_BaseNPC;
    bProvidesVision?: boolean;
    iVisionRadius?: number;
    iVisionTeamNumber?: DOTATeam_t;
    /**
     * Extra data associated with projectile instance, that is passed to
     * `OnProjectileThink_ExtraData` and `OnProjectileHit_ExtraData`.
     */
    ExtraData?: object;
}

declare interface CreateLinearProjectileOptions extends CreateBaseProjectileOptions {
    vSpawnOrigin?: Vector;
    vVelocity?: Vector;
    /**
     * Velocity change per second.
     */
    vAcceleration?: Vector;
    fMaxSpeed?: number;
    fDistance?: number;
    fStartRadius?: number;
    fEndRadius?: number;
    fExpireTime?: number;
    iUnitTargetTeam?: DOTA_UNIT_TARGET_TEAM;
    iUnitTargetFlags?: DOTA_UNIT_TARGET_FLAGS;
    iUnitTargetType?: DOTA_UNIT_TARGET_TYPE;
    bIgnoreSource?: boolean;
    bHasFrontalCone?: boolean;
    /**
     * @default false
     */
    bDrawsOnMinimap?: boolean;
    /**
     * Makes it invisible for all teams.
     */
    bVisibleToEnemies?: boolean;
}

declare interface CreateTrackingProjectileOptions extends CreateBaseProjectileOptions {
    vSourceLoc?: Vector;
    Target?: CDOTA_BaseNPC;
    iMoveSpeed?: number;
    flExpireTime?: number;
    bDodgeable?: boolean;
    bIsAttack?: boolean;
    /**
     * When enabled replaces existing projectile from the ability. Does not destroy
     * the particle.
     *
     * @default false
     */
    bReplaceExisting?: boolean;
    bIgnoreObstructions?: boolean;
    bSuppressTargetCheck?: boolean;
    iSourceAttachment?: DOTAProjectileAttachment_t;
    /**
     * @default false
     */
    bDrawsOnMinimap?: boolean;
    /**
     * @default true
     */
    bVisibleToEnemies?: boolean;
}

declare interface AbilityTuningValueFilterEvent {
    entindex_caster_const: EntityIndex;
    entindex_ability_const: EntityIndex;
    value_name_const: string;
    value: number;
}

declare interface BountyRunePickupFilterEvent {
    player_id_const: PlayerID;
    xp_bounty: number;
    gold_bounty: number;
}

declare interface DamageFilterEvent {
    entindex_attacker_const: EntityIndex;
    entindex_victim_const: EntityIndex;
    entindex_inflictor_const?: EntityIndex;
    damagetype_const: DAMAGE_TYPES;
    damage: number;
}

declare interface ExecuteOrderFilterEvent {
    units: Record<string, EntityIndex>;
    entindex_target: EntityIndex;
    entindex_ability: EntityIndex;
    issuer_player_id_const: PlayerID;
    sequence_number_const: number;
    queue: 0 | 1;
    order_type: dotaunitorder_t;
    position_x: number;
    position_y: number;
    position_z: number;
    shop_item_name: string;
}

declare interface HealingFilterEvent {
    entindex_target_const: EntityIndex;
    entindex_inflictor_const?: EntityIndex;
    entindex_healer_const?: EntityIndex;
    heal: number;
}

declare interface ItemAddedToInventoryFilterEvent {
    inventory_parent_entindex_const: EntityIndex;
    item_parent_entindex_const: EntityIndex;
    item_entindex_const: EntityIndex;
    suggested_slot: -1 | DOTAScriptInventorySlot_t;
}

declare interface ModifierGainedFilterEvent {
    entindex_caster_const: EntityIndex;
    entindex_parent_const: EntityIndex;
    entindex_ability_const: EntityIndex;
    name_const: string;
    /**
     * -1 means forever. All other values less or equal to 0 would be equal to 1 frame.
     */
    duration: number;
}

declare interface ModifyExperienceFilterEvent {
    hero_entindex_const: EntityIndex;
    player_id_const: PlayerID;
    reason_const: EDOTA_ModifyXP_Reason;
    experience: number;
}

declare interface ModifyGoldFilterEvent {
    player_id_const: PlayerID;
    reason_const: EDOTA_ModifyGold_Reason;
    reliable: 0 | 1;
    gold: number;
}

declare interface RuneSpawnFilterEvent {
    spawner_entindex_const: EntityIndex;
    rune_type: DOTA_RUNES;
}

declare interface TrackingProjectileFilterEvent {
    entindex_source_const: EntityIndex;
    entindex_target_const: EntityIndex;
    entindex_ability_const: EntityIndex;
    is_attack: 0 | 1;
    dodgeable: 0 | 1;
    max_impact_time: number;
    move_speed: number;
    expire_time: number;
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
    no_attack_cooldown: boolean;
    record: number;
    fail_type: attackfail;
    report_max?: boolean;
}

declare interface ModifierInstanceEvent {
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_category: DamageCategory_t;
    damage_flags: DOTADamageFlag_t;
    inflictor?: CDOTABaseAbility;
    original_damage: number;
    ranged_attack: boolean;
    unit: CDOTA_BaseNPC;
    no_attack_cooldown: boolean;
    record: number;
    fail_type: attackfail;
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

declare interface ModifierOverrideAbilitySpecialEvent {
    ability: CDOTABaseAbility;
    ability_special_value: string;
    ability_special_level: number;
}

declare interface ModifierAddedEvent {
    unit: CDOTA_BaseNPC;
    added_buff: CDOTA_Buff;
}

declare interface ModifierHealEvent extends ModifierUnitEvent {
    gain: number;
}

declare interface SpawnEntityFromTableOptions {
    origin?: string | Vector;
    angles?: string | QAngle;
    scales?: string | Vector;
    targetname?: string;
    vscripts?: string;
}

declare interface CreateUnitFromTableOptions extends SpawnEntityFromTableOptions {
    MapUnitName: string;
    teamnumber?: DOTATeam_t;
    modelscale?: number;
    /**
     * targetname of path_corner or path_track
     */
    initial_waypoint?: string;
    EnableAutoStyles?: string;
    /**
     * RGB, example: "255 255 255"
     */
    rendercolor?: string;
    skin?: number;
    NeverMoveToClearSpace?: boolean;
}
