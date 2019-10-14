interface CDOTA_PanoramaScript_GameEvents {
    /**
     * Subscribe to a game event
     */
    Subscribe(pEventName: string, funcVal: (data: object) => void): number;

    /**
     * Unsubscribe from a game event
     */
    Unsubscribe(nCallbackHandle: number): void;

    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer(pEventName: string, eventData: object): void;

    /**
     * Send a custom game event to the server, which will send it to all clients
     */
    SendCustomGameEventToAllClients(pEventName: string, eventData: object): void;

    /**
     * Send a custom game event to the server, which will send it to all clients
     */
    SendCustomGameEventToClient(pEventName: string, playerIndex: number, eventData: object): void;

    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide(pEventName: string, eventData: object): void;
}

/**
 * The type of `Game.CustomUIConfig()`.
 *
 * If you need to declare that a given property exists in `Game.CustomUIConfig()`,
 * this type may be augmented via interface merging.
 */
interface CustomUIConfig {}

type MouseEvent = 'pressed' | 'doublepressed' | 'released' | 'wheeled';

/**
 * 0 - Left
 * 1 - Right
 * 2 - Middle
 * 3 - Mouse 4
 * 4 - Mouse 5
 * 5 - Scroll up
 * 6 - Scroll down
 */
type MouseButton = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 1 - Up
 * -1 - Down
 */
type MouseScrollDirection = 1 | -1;

interface MouseEntity {
    entityIndex: EntityID;
    accurateCollision: boolean;
}

interface CDOTA_PanoramaScript_GameUI {
    /**
     * Control whether the default UI is enabled
     */
    SetDefaultUIEnabled(nElementType: number, bVisible: boolean): void;

    /**
     * Get the current UI configuration
     */
    CustomUIConfig(): CustomUIConfig;

    /**
     * Create a minimap ping at the given location
     */
    PingMinimapAtLocation(vec3: [number, number, number]): void;

    /**
     * Install a mouse input filter
     */
    SetMouseCallback(callbackFn: (event: MouseEvent, value: MouseButton | MouseScrollDirection) => boolean): void;

    EnableAliMode(bEnable: boolean, nPort: number, offsetVal: number, flScale: number): void;

    /**
     * Get the current mouse position.
     */
    GetCursorPosition(): [number, number];

    /**
     * Return the entity index of the entity under the given screen position.
     */
    FindScreenEntities(screenPos: [number, number]): MouseEntity[];

    /**
     * Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition(screenPos: [number, number]): [number, number, number] | null;

    /**
     * Install a mouse input filter
     */
    WasMousePressed(nButtonNum: MouseButton): boolean;

    /**
     * Install a mouse input filter
     */
    WasMouseDoublePressed(nButtonNum: MouseButton): boolean;

    /**
     * Install a mouse input filter
     */
    IsMouseDown(nButtonNum: MouseButton): boolean;

    /**
     * Is the shift button pressed?
     */
    IsShiftDown(): boolean;

    /**
     * Is the alt button pressed?
     */
    IsAltDown(): boolean;

    /**
     * Is the control button pressed?
     */
    IsControlDown(): boolean;

    /**
     * Get the current UI click interaction mode.
     */
    GetClickBehaviors(): CLICK_BEHAVIORS;

    /**
     * Select a unit, adding it to the group or replacing the current selection.
     */
    SelectUnit(nEntityIndex: number, bAddToGroup: boolean): void;

    /**
     * Set the minimum camera pitch angle.
     */
    SetCameraPitchMin(flPitchMin: number): void;

    /**
     * Set the maximum camera pitch angle.
     */
    SetCameraPitchMax(flPitchMax: number): void;

    /**
     * Set the camera's yaw.
     */
    SetCameraYaw(flCameraYaw: number): void;

    /**
     * Offset the camera's look at point.
     */
    SetCameraLookAtPositionHeightOffset(flCameraLookAtHeightOffset: number): void;

    /**
     * Set the camera distance from the look at point.
     */
    SetCameraDistance(flDistance: number): void;

    /**
     * Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderBottomInsetOverride(nInset: number): void;

    /**
     * Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderTopInsetOverride(nInset: number): void;

    /**
     * Set the camera target for the local player, or -1 to clear.
     */
    SetCameraTarget(nTargetEntIndex: number): void;

    /**
     * Set the camera target as position for the local player over specified lerp.
     */
    SetCameraTargetPosition(vec3: [number, number, number], flLerp: number): void;
}

interface TableValue {
    key: string;
    value: any;
}

interface CDOTA_PanoramaScript_CustomNetTables {
    /**
     * Get a key from a custom net table
     */
    GetTableValue(pTableName: string, pKeyName: string): any;

    /**
     * Get all values from a custom net table
     */
    GetAllTableValues(pTableName: string): TableValue[];

    /**
     * Register a callback when a particular custom net table changes
     */
    SubscribeNetTableListener(tableName: string, callback: (table_name: string, key: string, value: any) => void): void;

    /**
     * Unsubscribe from a game event
     */
    UnsubscribeNetTableListener(nCallbackHandle: number): void;
}

interface CScriptBindingPR_Particles {
    /**
     * Create a particle from a file with an attachment and an owning entity.
     */
    CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owningEntity: EntityID): ParticleID;

    /**
     * Release the index of a particle, will make the particle in-accessible from script. This allows another particle
     * to reuse the freed particle index.
     */
    ReleaseParticleIndex(particle: ParticleID): void;

    /**
     * Destroy a particle. Setting the immediate boolean to true will prevent the endcap from playing.
     */
    DestroyParticleEffect(particle: ParticleID, immediate: boolean): void;

    /**
     * Set a particle's control point to a vector value.
     */
    SetParticleControl(particle: ParticleID, controlPoint: number, value: [number, number, number]): void;

    /**
     * Set a particle's forward control point to a vector value.
     */
    SetParticleControlForward(particle: ParticleID, controlPoint: number, value: [number, number, number]): void;

    /**
     * Unknown use, any info welcome.
     */
    SetParticleAlwaysSimulate(particle: ParticleID): void;

    /**
     * Set a particle's control point to an entity's attachment. Most common example is:
     * Particles.SetPerticleControlEnt(particle, controlPoint, entity, ParticleAttachment_t.PATTACH_POINT_FOLLOW, "attach_hitloc", [0,0,0], true);
     */
    SetParticleControlEnt(
        particle: ParticleID,
        controlPoint: number,
        entity: EntityID,
        particleAttach: ParticleAttachment_t,
        attachmentName: string,
        offset: [number, number, number],
        unknown: boolean,
    ): void;
}

interface CScriptBindingPR_Buffs {
    /**
     * Returns the name of the modifier.
     */
    GetName(nEntityIndex: EntityID, nBuffIndex: BuffID): string;

    /**
     * Returns the classname of the modifier.
     */
    GetClass(nEntityIndex: EntityID, nBuffIndex: BuffID): string;

    /**
     * Returns the modifier icon texture.
     */
    GetTexture(nEntityIndex: EntityID, nBuffIndex: BuffID): string;

    /**
     * Returns the total duration of the modifier.
     */
    GetDuration(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns the time at which the modifier will expire.
     */
    GetDieTime(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns the time until the modifier expires.
     */
    GetRemainingTime(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns the time elapsed since the creation of the modifier.
     */
    GetElapsedTime(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns the time at which the modifier was created.
     */
    GetCreationTime(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetStackCount(nEntityIndex: EntityID, nBuffIndex: BuffID): number;

    /**
     * Returns true if the modifier is a debuff (red icon), false otherwise.
     */
    IsDebuff(nEntityIndex: EntityID, nBuffIndex: BuffID): boolean;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    IsHidden(nEntityIndex: EntityID, nBuffIndex: BuffID): boolean;

    /**
     * Returns the entity that created the modifier (possibly on another entity).
     */
    GetCaster(nEntityIndex: EntityID, nBuffIndex: BuffID): EntityID;

    /**
     * Returns the entity to which the modifier is applied.
     */
    GetParent(nEntityIndex: EntityID, nBuffIndex: BuffID): EntityID;

    /**
     * Returns the ability associated with the modifier.
     */
    GetAbility(nEntityIndex: EntityID, nBuffIndex: BuffID): AbilityID;
}

interface CScriptBindingPR_Players {
    /**
     * Get the maximum number of players in the game.
     */
    GetMaxPlayers(): number;

    /**
     * Get the maximum number of players on teams.
     */
    GetMaxTeamPlayers(): number;

    /**
     * Get the local player ID.
     */
    GetLocalPlayer(): number;

    /**
     * Is the nth player a valid player?
     */
    IsValidPlayerID(iPlayerID: number): boolean;

    /**
     * Return the name of a player.
     */
    GetPlayerName(iPlayerID: number): string;

    /**
     * Get the entity index of the hero controlled by this player.
     */
    GetPlayerHeroEntityIndex(iPlayerID: number): EntityID;

    /**
     * Get the entities this player has selected.
     */
    GetSelectedEntities(iPlayerID: number): EntityID[];

    /**
     * Get the entities this player is querying.
     */
    GetQueryUnit(iPlayerID: number): EntityID;

    /**
     * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit(): EntityID;

    /**
     * Can the player buy back?
     */
    CanPlayerBuyback(iPlayerID: number): boolean;

    /**
     * Does this player have a custom game ticket?
     */
    HasCustomGameTicketForPlayerID(iPlayerID: number): boolean;

    /**
     * The number of assists credited to a player.
     */
    GetAssists(iPlayerID: number): number;

    GetClaimedDenies(iPlayerID: number): number;

    GetClaimedMisses(iPlayerID: number): number;

    /**
     * The number of deaths a player has suffered.
     */
    GetDeaths(iPlayerID: number): number;

    /**
     * The number of denies credited to a player.
     */
    GetDenies(iPlayerID: number): number;

    /**
     * The amount of gold a player has.
     */
    GetGold(iPlayerID: number): number;

    /**
     * The number of kills credited to a player.
     */
    GetKills(iPlayerID: number): number;

    GetLastBuybackTime(iPlayerID: number): number;

    GetLastHitMultikill(iPlayerID: number): number;

    /**
     * The number of last hits credited to a player.
     */
    GetLastHits(iPlayerID: number): number;

    GetLastHitStreak(iPlayerID: number): number;

    /**
     * The current level of a player.
     */
    GetLevel(iPlayerID: number): number;

    GetMisses(iPlayerID: number): number;

    GetNearbyCreepDeaths(iPlayerID: number): number;

    /**
     * Total reliable gold for this player.
     */
    GetReliableGold(iPlayerID: number): number;

    GetRespawnSeconds(iPlayerID: number): number;

    GetStreak(iPlayerID: number): number;

    /**
     * Total gold earned in this game by this player.
     */
    GetTotalEarnedGold(iPlayerID: number): number;

    /**
     * Total xp earned in this game by this player.
     */
    GetTotalEarnedXP(iPlayerID: number): number;

    /**
     * Total unreliable gold for this player.
     */
    GetUnreliableGold(iPlayerID: number): number;

    /**
     * Get the team this player is on.
     */
    GetTeam(iPlayerID: number): DOTATeam_t;

    /**
     * Average gold earned per minute for this player.
     */
    GetGoldPerMin(iPlayerID: number): number;

    /**
     * Average xp earned per minute for this player.
     */
    GetXPPerMin(iPlayerID: number): number;

    /**
     * Return the name of the hero a player is controlling.
     */
    GetPlayerSelectedHero(iPlayerID: number): string;

    /**
     * Get the player color.
     */
    GetPlayerColor(iPlayerID: number): number;

    /**
     * Is this player a spectator.
     */
    IsSpectator(iPlayerID: number): boolean;

    PlayerPortraitClicked(nClickedPlayerID: number, bHoldingCtrl: boolean, bHoldingAlt: boolean): void;

    BuffClicked(nEntity: EntityID, nBuffSerial: number, bAlert: boolean): void;
}

interface CScriptBindingPR_Entities {
    /**
     * Get the world origin of the entity.
     */
    GetAbsOrigin(nEntityIndex: EntityID): [number, number, number];

    /**
     * Get the forward vector of the entity.
     */
    GetForward(nEntityIndex: EntityID): [number, number, number];

    /**
     * Get the right vector of the entity.
     */
    GetRight(nEntityIndex: EntityID): [number, number, number];

    /**
     * Get the up vector of the entity.
     */
    GetUp(nEntityIndex: EntityID): [number, number, number];

    /**
     * Get all the building entities.
     */
    GetAllBuildingEntities(): EntityID[];

    /**
     * Get all the hero entities.
     */
    GetAllHeroEntities(): EntityID[];

    /**
     * Get all the entities with a given name.
     */
    GetAllEntitiesByName(pszName: string): EntityID[];

    /**
     * Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname(pszName: string): EntityID[];

    /**
     * Get all the creature entities.
     */
    GetAllCreatureEntities(): EntityID[];

    /**
     * Get all the entities.
     */
    GetAllEntities(): EntityID[];

    /**
     * Get the ID of the player owning the given entity.
     */
    GetPlayerOwnerID(nEntityIndex: EntityID): number;

    CanBeDominated(nEntityIndex: EntityID): boolean;

    HasAttackCapability(nEntityIndex: EntityID): boolean;

    HasCastableAbilities(nEntityIndex: EntityID): boolean;

    HasFlyingVision(nEntityIndex: EntityID): boolean;

    HasFlyMovementCapability(nEntityIndex: EntityID): boolean;

    HasGroundMovementCapability(nEntityIndex: EntityID): boolean;

    HasMovementCapability(nEntityIndex: EntityID): boolean;

    HasScepter(nEntityIndex: EntityID): boolean;

    HasUpgradeableAbilities(nEntityIndex: EntityID): boolean;

    HasUpgradeableAbilitiesThatArentMaxed(nEntityIndex: EntityID): boolean;

    IsAlive(nEntityIndex: EntityID): boolean;

    IsAncient(nEntityIndex: EntityID): boolean;

    IsAttackImmune(nEntityIndex: EntityID): boolean;

    IsBarracks(nEntityIndex: EntityID): boolean;

    IsBlind(nEntityIndex: EntityID): boolean;

    IsBoss(nEntityIndex: EntityID): boolean;

    IsRoshan(nEntityIndex: EntityID): boolean;

    IsBuilding(nEntityIndex: EntityID): boolean;

    IsCommandRestricted(nEntityIndex: EntityID): boolean;

    IsConsideredHero(nEntityIndex: EntityID): boolean;

    IsControllableByAnyPlayer(nEntityIndex: EntityID): boolean;

    IsCourier(nEntityIndex: EntityID): boolean;

    IsCreature(nEntityIndex: EntityID): boolean;

    IsCreep(nEntityIndex: EntityID): boolean;

    IsCreepHero(nEntityIndex: EntityID): boolean;

    IsDeniable(nEntityIndex: EntityID): boolean;

    IsDominated(nEntityIndex: EntityID): boolean;

    IsEnemy(nEntityIndex: EntityID): boolean;

    IsEvadeDisabled(nEntityIndex: EntityID): boolean;

    IsFort(nEntityIndex: EntityID): boolean;

    IsFrozen(nEntityIndex: EntityID): boolean;

    IsGeneratedByEconItem(nEntityIndex: EntityID): boolean;

    IsHallofFame(nEntityIndex: EntityID): boolean;

    IsDisarmed(nEntityIndex: EntityID): boolean;

    IsHero(nEntityIndex: EntityID): boolean;

    IsHexed(nEntityIndex: EntityID): boolean;

    IsIllusion(nEntityIndex: EntityID): boolean;

    IsInRangeOfFountain(nEntityIndex: EntityID): boolean;

    IsInventoryEnabled(nEntityIndex: EntityID): boolean;

    IsInvisible(nEntityIndex: EntityID): boolean;

    IsInvulnerable(nEntityIndex: EntityID): boolean;

    IsLaneCreep(nEntityIndex: EntityID): boolean;

    IsLowAttackPriority(nEntityIndex: EntityID): boolean;

    IsMagicImmune(nEntityIndex: EntityID): boolean;

    IsMuted(nEntityIndex: EntityID): boolean;

    IsNeutralUnitType(nEntityIndex: EntityID): boolean;

    IsNightmared(nEntityIndex: EntityID): boolean;

    IsOther(nEntityIndex: EntityID): boolean;

    IsOutOfGame(nEntityIndex: EntityID): boolean;

    IsOwnedByAnyPlayer(nEntityIndex: EntityID): boolean;

    IsPhantom(nEntityIndex: EntityID): boolean;

    IsRangedAttacker(nEntityIndex: EntityID): boolean;

    IsRealHero(nEntityIndex: EntityID): boolean;

    IsRooted(nEntityIndex: EntityID): boolean;

    IsSelectable(nEntityIndex: EntityID): boolean;

    IsShop(nEntityIndex: EntityID): boolean;

    IsSilenced(nEntityIndex: EntityID): boolean;

    IsSpeciallyDeniable(nEntityIndex: EntityID): boolean;

    IsStunned(nEntityIndex: EntityID): boolean;

    IsSummoned(nEntityIndex: EntityID): boolean;

    IsTower(nEntityIndex: EntityID): boolean;

    IsUnselectable(nEntityIndex: EntityID): boolean;

    IsWard(nEntityIndex: EntityID): boolean;

    IsZombie(nEntityIndex: EntityID): boolean;

    NoHealthBar(nEntityIndex: EntityID): boolean;

    NoTeamMoveTo(nEntityIndex: EntityID): boolean;

    NoTeamSelect(nEntityIndex: EntityID): boolean;

    NotOnMinimap(nEntityIndex: EntityID): boolean;

    NotOnMinimapForEnemies(nEntityIndex: EntityID): boolean;

    NoUnitCollision(nEntityIndex: EntityID): boolean;

    PassivesDisabled(nEntityIndex: EntityID): boolean;

    ProvidesVision(nEntityIndex: EntityID): boolean;

    UsesHeroAbilityNumbers(nEntityIndex: EntityID): boolean;

    IsMoving(nEntityIndex: EntityID): boolean;

    GetAbilityCount(nEntityIndex: EntityID): number;

    GetCombatClassAttack(nEntityIndex: EntityID): number;

    GetCombatClassDefend(nEntityIndex: EntityID): number;

    GetCurrentVisionRange(nEntityIndex: EntityID): number;

    GetDamageBonus(nEntityIndex: EntityID): number;

    GetDamageMax(nEntityIndex: EntityID): number;

    GetDamageMin(nEntityIndex: EntityID): number;

    GetDayTimeVisionRange(nEntityIndex: EntityID): number;

    GetHealth(nEntityIndex: EntityID): number;

    GetHealthPercent(nEntityIndex: EntityID): number;

    GetHealthThinkRegen(nEntityIndex: EntityID): number;

    GetLevel(nEntityIndex: EntityID): number;

    GetMaxHealth(nEntityIndex: EntityID): number;

    GetNightTimeVisionRange(nEntityIndex: EntityID): number;

    GetStates(nEntityIndex: EntityID): modifierstate[];

    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: EntityID): number;

    GetTeamNumber(nEntityIndex: EntityID): DOTATeam_t;

    GetAttackRange(nEntityIndex: EntityID): number;

    GetAttackSpeed(nEntityIndex: EntityID): number;

    GetAttacksPerSecond(nEntityIndex: EntityID): number;

    GetBaseAttackTime(nEntityIndex: EntityID): number;

    GetBaseMagicalResistanceValue(nEntityIndex: EntityID): number;

    GetBaseMoveSpeed(nEntityIndex: EntityID): number;

    GetBonusPhysicalArmor(nEntityIndex: EntityID): number;

    GetCollisionPadding(nEntityIndex: EntityID): number;

    GetEffectiveInvisibilityLevel(nEntityIndex: EntityID): number;

    GetHasteFactor(nEntityIndex: EntityID): number;

    GetHullRadius(nEntityIndex: EntityID): number;

    GetIdealSpeed(nEntityIndex: EntityID): number;

    GetIncreasedAttackSpeed(nEntityIndex: EntityID): number;

    GetMana(nEntityIndex: EntityID): number;

    GetManaThinkRegen(nEntityIndex: EntityID): number;

    GetMaxMana(nEntityIndex: EntityID): number;

    GetMagicalArmorValue(nEntityIndex: EntityID): number;

    GetPaddedCollisionRadius(nEntityIndex: EntityID): number;

    GetPercentInvisible(nEntityIndex: EntityID): number;

    GetPhysicalArmorValue(nEntityIndex: EntityID): number;

    GetProjectileCollisionSize(nEntityIndex: EntityID): number;

    /**
     * Returns the radius of the bounding ring of the unit.
     */
    GetRingRadius(nEntityIndex: EntityID): number;

    GetSecondsPerAttack(nEntityIndex: EntityID): number;

    ManaFraction(nEntityIndex: EntityID): number;

    GetClassname(nEntityIndex: EntityID): string;

    GetDisplayedUnitName(nEntityIndex: EntityID): string;

    GetSelectionGroup(nEntityIndex: EntityID): string;

    GetSoundSet(nEntityIndex: EntityID): string;

    GetUnitLabel(nEntityIndex: EntityID): string;

    GetUnitName(nEntityIndex: EntityID): string;

    GetTotalDamageTaken(nEntityIndex: EntityID): number;

    IsControllableByPlayer(nEntityIndex: EntityID, nPlayerIndex: number): boolean;

    GetChosenTarget(nEntityIndex: EntityID): number;

    HasItemInInventory(nEntityIndex: EntityID, pItemName: string): boolean;

    GetRangeToUnit(nEntityIndex: EntityID, nEntityIndex2: EntityID): number;

    IsEntityInRange(nEntityIndex: EntityID, nEntityIndex2: EntityID, flRange: number): boolean;

    GetMoveSpeedModifier(nEntityIndex: EntityID, flBaseSpeed: number): number;

    CanAcceptTargetToAttack(nEntityIndex: EntityID, nEntityIndex2: EntityID): boolean;

    InState(nEntityIndex: EntityID, nState: modifierstate): boolean;

    GetArmorForDamageType(nEntityIndex: EntityID, iDamageType: DAMAGE_TYPES): number;

    GetArmorReductionForDamageType(nEntityIndex: EntityID, iDamageType: DAMAGE_TYPES): number;

    IsInRangeOfShop(nEntityIndex: EntityID, iShopType: number, bSpecific: boolean): boolean;

    GetNumItemsInStash(nEntityIndex: EntityID): number;

    GetNumItemsInInventory(nEntityIndex: EntityID): number;

    GetItemInSlot(nEntityIndex: EntityID, nSlotIndex: number): ItemID;

    GetAbility(nEntityIndex: EntityID, nSlotIndex: number): AbilityID;

    GetAbilityByName(nEntityIndex: EntityID, pszAbilityName: string): AbilityID;

    GetNumBuffs(nEntityIndex: EntityID): number;

    GetBuff(nEntityIndex: EntityID, nBufIndex: number): BuffID;

    GetAbilityPoints(nEntityIndex: EntityID): number;

    GetCurrentXP(nEntityIndex: EntityID): number;

    GetNeededXPToLevel(nEntityIndex: EntityID): number;

    /**
     * Get the currently selected entities
     */
    GetSelectionEntities(): EntityID[];

    /**
     * Is this a valid entity index?
     */
    IsValidEntity(nEntityIndex: EntityID): boolean;

    /**
     * Is this entity an item container in the world?
     */
    IsItemPhysical(nEntityIndex: EntityID): boolean;

    /**
     * Get the item contained in this physical item container.
     */
    GetContainedItem(nEntityIndex: EntityID): ItemID;
}

interface CScriptBindingPR_Abilities {
    GetAbilityName(nEntityIndex: AbilityID): string;

    GetAbilityTextureName(nEntityIndex: AbilityID): string;

    GetAssociatedPrimaryAbilities(nEntityIndex: AbilityID): AbilityID[];

    GetAssociatedSecondaryAbilities(nEntityIndex: AbilityID): AbilityID[];

    GetHotkeyOverride(nEntityIndex: AbilityID): string;

    GetIntrinsicModifierName(nEntityIndex: AbilityID): string;

    GetSharedCooldownName(nEntityIndex: AbilityID): string;

    AbilityReady(nEntityIndex: AbilityID): number;

    /**
     * Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded(nEntityIndex: AbilityID): AbilityLearnResult_t;

    CanBeExecuted(nEntityIndex: AbilityID): boolean;

    GetAbilityDamage(nEntityIndex: AbilityID): number;

    GetAbilityDamageType(nEntityIndex: AbilityID): number;

    GetAbilityTargetFlags(nEntityIndex: AbilityID): number;

    GetAbilityTargetTeam(nEntityIndex: AbilityID): number;

    GetAbilityTargetType(nEntityIndex: AbilityID): number;

    GetAbilityType(nEntityIndex: AbilityID): number;

    GetBehavior(nEntityIndex: AbilityID): number;

    GetCastRange(nEntityIndex: AbilityID): number;

    GetChannelledManaCostPerSecond(nEntityIndex: AbilityID): number;

    GetCurrentCharges(nEntityIndex: AbilityID): number;

    GetEffectiveLevel(nEntityIndex: AbilityID): number;

    GetHeroLevelRequiredToUpgrade(nEntityIndex: AbilityID): number;

    GetLevel(nEntityIndex: AbilityID): number;

    GetManaCost(nEntityIndex: AbilityID): number;

    GetMaxLevel(nEntityIndex: AbilityID): number;

    AttemptToUpgrade(nEntityIndex: AbilityID): boolean;

    CanLearn(nEntityIndex: AbilityID): boolean;

    GetAutoCastState(nEntityIndex: AbilityID): boolean;

    GetToggleState(nEntityIndex: AbilityID): boolean;

    HasScepterUpgradeTooltip(nEntityIndex: AbilityID): boolean;

    IsActivated(nEntityIndex: AbilityID): boolean;

    IsActivatedChanging(nEntityIndex: AbilityID): boolean;

    IsAttributeBonus(nEntityIndex: AbilityID): boolean;

    IsAutocast(nEntityIndex: AbilityID): boolean;

    IsCooldownReady(nEntityIndex: AbilityID): boolean;

    IsDisplayedAbility(nEntityIndex: AbilityID): boolean;

    IsHidden(nEntityIndex: AbilityID): boolean;

    IsHiddenWhenStolen(nEntityIndex: AbilityID): boolean;

    IsInAbilityPhase(nEntityIndex: AbilityID): boolean;

    IsItem(nEntityIndex: AbilityID): boolean;

    IsMarkedAsDirty(nEntityIndex: AbilityID): boolean;

    IsMuted(nEntityIndex: AbilityID): boolean;

    IsOnCastbar(nEntityIndex: AbilityID): boolean;

    IsOnLearnbar(nEntityIndex: AbilityID): boolean;

    IsOwnersGoldEnough(nEntityIndex: AbilityID): boolean;

    IsOwnersGoldEnoughForUpgrade(nEntityIndex: AbilityID): boolean;

    IsOwnersManaEnough(nEntityIndex: AbilityID): boolean;

    IsPassive(nEntityIndex: AbilityID): boolean;

    IsRecipe(nEntityIndex: AbilityID): boolean;

    IsSharedWithTeammates(nEntityIndex: AbilityID): boolean;

    IsStealable(nEntityIndex: AbilityID): boolean;

    IsStolen(nEntityIndex: AbilityID): boolean;

    IsToggle(nEntityIndex: AbilityID): boolean;

    GetAOERadius(nEntityIndex: AbilityID): number;

    GetBackswingTime(nEntityIndex: AbilityID): number;

    GetCastPoint(nEntityIndex: AbilityID): number;

    GetChannelStartTime(nEntityIndex: AbilityID): number;

    GetChannelTime(nEntityIndex: AbilityID): number;

    GetCooldown(nEntityIndex: AbilityID): number;

    GetCooldownLength(nEntityIndex: AbilityID): number;

    GetCooldownTime(nEntityIndex: AbilityID): number;

    GetCooldownTimeRemaining(nEntityIndex: AbilityID): number;

    GetDuration(nEntityIndex: AbilityID): number;

    GetUpgradeBlend(nEntityIndex: AbilityID): number;

    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): AbilityID;

    GetCaster(nAbilityIndex: AbilityID): EntityID;

    GetCustomValueFor(nAbilityIndex: AbilityID, pszAbilityVarName: string): number;

    GetLevelSpecialValueFor(nAbilityIndex: AbilityID, szName: string, nLevel: number): number;

    GetSpecialValueFor(nAbilityIndex: AbilityID, szName: string): number;

    IsCosmetic(nAbilityIndex: AbilityID, nTargetEntityIndex: EntityID): boolean;

    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility(nAbilityEntIndex: AbilityID, nCasterEntIndex: EntityID, bIsQuickCast: boolean): boolean;

    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder(nAbilityEntIndex: AbilityID, nCasterEntIndex: EntityID): void;

    /**
     * Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility(nAbilityIndex: AbilityID): void;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind(nAbilityEntIndex: AbilityID): string;
}

interface CScriptBindingPR_Items {
    ShouldDisplayCharges(nEntityIndex: ItemID): boolean;

    AlwaysDisplayCharges(nEntityIndex: ItemID): boolean;

    ShowSecondaryCharges(nEntityIndex: ItemID): boolean;

    CanBeSoldByLocalPlayer(nEntityIndex: ItemID): boolean;

    CanDoubleTapCast(nEntityIndex: ItemID): boolean;

    ForceHideCharges(nEntityIndex: ItemID): boolean;

    IsAlertableItem(nEntityIndex: ItemID): boolean;

    IsCastOnPickup(nEntityIndex: ItemID): boolean;

    IsDisassemblable(nEntityIndex: ItemID): boolean;

    IsDroppable(nEntityIndex: ItemID): boolean;

    IsInnatelyDisassemblable(nEntityIndex: ItemID): boolean;

    IsKillable(nEntityIndex: ItemID): boolean;

    IsMuted(nEntityIndex: ItemID): boolean;

    IsPermanent(nEntityIndex: ItemID): boolean;

    IsPurchasable(nEntityIndex: ItemID): boolean;

    IsRecipe(nEntityIndex: ItemID): boolean;

    IsRecipeGenerated(nEntityIndex: ItemID): boolean;

    IsSellable(nEntityIndex: ItemID): boolean;

    IsStackable(nEntityIndex: ItemID): boolean;

    ProRatesChargesWhenSelling(nEntityIndex: ItemID): boolean;

    RequiresCharges(nEntityIndex: ItemID): boolean;

    CanBeExecuted(nEntityIndex: ItemID): number;

    GetCost(nEntityIndex: ItemID): number;

    GetCurrentCharges(nEntityIndex: ItemID): number;

    GetSecondaryCharges(nEntityIndex: ItemID): number;

    GetDisplayedCharges(nEntityIndex: ItemID): number;

    GetInitialCharges(nEntityIndex: ItemID): number;

    GetItemColor(nEntityIndex: ItemID): number;

    GetShareability(nEntityIndex: ItemID): EShareAbility;

    GetAbilityTextureSF(nEntityIndex: ItemID): string;

    GetAssembledTime(nEntityIndex: ItemID): number;

    GetPurchaseTime(nEntityIndex: ItemID): number;

    GetPurchaser(nItemID: ItemID): EntityID;

    /**
     * Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem(nItem: ItemID): boolean;

    /**
     * Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash(nItem: ItemID): boolean;

    /**
     * Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies(nItem: ItemID): boolean;

    /**
     * Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash(nItem: ItemID): boolean;

    /**
     * Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem(nItem: ItemID): boolean;
}

interface TeamDetails {
    team_id: DOTATeam_t;
    team_name: string;
    team_max_players: number;
    team_score: number;
    team_num_players: number;
}

interface PlayerInfo {
    player_id: number;
    player_name: string;
    player_connection_state: DOTAConnectionState_t;
    player_steamid: string;
    player_kills: number;
    player_deaths: number;
    player_assists: number;
    player_selected_hero_id: number;
    player_selected_hero: string;
    player_selected_hero_entity_index: number;
    possible_hero_selection: string;
    player_level: number;
    player_respawn_seconds: number;
    player_gold: number;
    player_team_id: DOTATeam_t;
    player_is_local: boolean;
    player_has_host_privileges: boolean;
}

interface MapInfo {
    map_name: string;
    map_display_name: string;
}

interface PrepareUnitOrdersArgument {
    OrderType: dotaunitorder_t;
    TargetIndex?: number;
    Position?: [number, number, number];
    AbilityIndex?: number;
    OrderIssuer?: PlayerOrderIssuer_t;
    UnitIndex?: number;
    QueueBehavior?: OrderQueueBehavior_t;
    ShowEffects?: boolean;
}

interface CScriptBindingPR_Game {
    Time(): number;

    GetGameTime(): number;

    GetDOTATime(bIncludePreGame: boolean, bIncludeNegativeTime: boolean): number;

    IsGamePaused(): boolean;

    IsInToolsMode(): boolean;

    /**
     * Return the team id of the winning team.
     */
    GetGameWinner(): number;

    GetStateTransitionTime(): number;

    /**
     * Get the difficulty setting of the game.
     */
    GetCustomGameDifficulty(): number;

    /**
     * Returns true if the user has enabled flipped HUD
     */
    IsHUDFlipped(): boolean;

    /**
     * Returns the width of the display.
     */
    GetScreenWidth(): number;

    /**
     * Returns the height of the display.
     */
    GetScreenHeight(): number;

    /**
     * Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenX(x: number, y: number, z: number): number;

    /**
     * Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY(x: number, y: number, z: number): number;

    /**
     * Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld(nX: number, nY: number): [number, number, number];

    /**
     * Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility(iSlot: number): string;

    GetNianFightTimeLeft(): number;

    GetState(): DOTA_GameState;

    GameStateIs(nState: DOTA_GameState): boolean;

    GameStateIsBefore(nState: DOTA_GameState): boolean;

    GameStateIsAfter(nState: DOTA_GameState): boolean;

    AddCommand(pszCommandName: string, callback: (data: object) => void, pszDescription: string, nFlags: number): void;

    GetLocalPlayerID(): number;

    /**
     * Assign the local player to the specified team
     */
    PlayerJoinTeam(nTeamID: DOTATeam_t): void;

    /**
     * Assign the currently unassigned players to teams
     */
    AutoAssignPlayersToTeams(): void;

    /**
     * Shuffle the team assignments of all of the players currently assigned to a team.
     */
    ShufflePlayerTeamAssignments(): void;

    /**
     * Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
     */
    SetRemainingSetupTime(flSeconds: number): void;

    /**
     * Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
     */
    SetAutoLaunchDelay(flSeconds: number): void;

    /**
     * Enable or disable automatically starting the game once all players are assigned to a team
     */
    SetAutoLaunchEnabled(bEnable: boolean): void;

    /**
     * Return true of false indicating if automatically starting the game is enabled.
     */
    GetAutoLaunchEnabled(): boolean;

    /**
     * Lock the team selection preventing players from swiching teams.
     */
    SetTeamSelectionLocked(bLockTeams: boolean): void;

    /**
     * Returns true or false to indicate if team selection is locked
     */
    GetTeamSelectionLocked(): boolean;

    /**
     * Get all team IDs
     */
    GetAllTeamIDs(): DOTATeam_t[];

    /**
     * Get all player IDs
     */
    GetAllPlayerIDs(): number[];

    /**
     * Get unassigned player IDs
     */
    GetUnassignedPlayerIDs(): number[];

    /**
     * Get info about the player hero ultimate ability
     */
    GetPlayerUltimateStateOrTime(nPlayerID: number): number;

    /**
     * Whether the local player has muted text and voice chat for the specified player id
     */
    IsPlayerMuted(nPlayerID: number): boolean;

    /**
     * Set whether the local player has muted text and voice chat for the specified player id
     */
    SetPlayerMuted(nPlayerID: number, bMuted: boolean): void;

    /**
     * Get detailed information for the given team
     */
    GetTeamDetails(nTeam: number): TeamDetails;

    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo(): PlayerInfo;

    /**
     * Get info about the player items.
     */
    GetPlayerItems(nPlayerID: number): ItemID[];

    /**
     * Get info about the given player
     */
    GetPlayerInfo(nPlayerID: number): PlayerInfo;

    /**
     * Get player IDs for the given team
     */
    GetPlayerIDsOnTeam(nTeam: DOTATeam_t): number[];

    ServerCmd(pMsg: string): void;

    FinishGame(): void;

    /**
     * Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound(pSoundEventName: string): number;

    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound(nHandle: number): void;

    /**
     * Return information about the current map.
     */
    GetMapInfo(): MapInfo;

    /**
     * Orders from the local player.
     */
    PrepareUnitOrders(args: PrepareUnitOrdersArgument): void;

    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor(nControlledUnitEnt: EntityID, nItemEnt: ItemID): void;

    EnterAbilityLearnMode(): void;

    EndAbilityLearnMode(): void;

    IsInAbilityLearnMode(): boolean;

    /**
     * Registers a keybind that can be listened to with Game.AddCommand
     */
    CreateCustomKeyBind(keyName: string, commandName: string): void;
}

interface CPanoramaScript_SteamUGC {
    /**
     * Subscribe to a piece of UGC
     */
    SubscribeItem(pPublishedFileID: string, funcVal: any): void;

    /**
     * Unsubscribe to a piece of UGC
     */
    UnsubscribeItem(pPublishedFileID: string, funcVal: any): void;

    /**
     * Get a key from a custom net table
     */
    GetSubscriptionInfo(pPublishedFileID: string): any;

    /**
     * Vote on a piece of UGC
     */
    SetUserItemVote(pPublishedFileID: string, bVoteUp: boolean, funcVal: any): any;

    /**
     * Get the user's vote on a peice of UGC
     */
    GetUserItemVote(pPublishedFileID: string, funcVal: any): any;

    /**
     * Add an item to the user's favorites list
     */
    AddToFavorites(pPublishedFileID: string, funcVal: any): any;

    /**
     * Remove an item from the user's favorites list
     */
    RemoveFromFavorites(pPublishedFileID: string, funcVal: any): any;

    /**
     * Create a request to query Steam for all UGC
     */
    CreateQueryAllUGCRequest(eQueryType: number, eMatchingeMatchingUGCTypeFileType: number, unPage: number): any;

    /**
     * Creqte a request to query Steam for specific UGC
     */
    CreateQueryUGCDetailsRequest(pPublishedFileIDs: string[]): any;

    /**
     * Adds a required tag to the query
     */
    AddRequiredTagToQuery(handle: number, pchTag: string): any;

    /**
     * Adds an excluded tag to the query
     */
    AddExcludedTagToQuery(handle: number, pchTag: string): any;

    /**
     * Adds a required tag to the query
     */
    ConfigureQuery(handle: number, jsObject: any): any;

    /**
     * Sends the prepared query
     */
    SendUGCQuery(handle: number, funcVal: any): any;

    /**
     * Register a callback to be called when the item is downloaded
     */
    RegisterDownloadItemResultCallback(pPublishedFileID: string, funcVal: any): any;
}

interface CPanoramaScript_SteamFriends {
    /**
     * Requests the user's persona name
     */
    RequestPersoneName(pchSteamID: string, funcVal: any): any;

    /**
     * Sets the avatar image on the image panel
     */
    SetLargeAvatarImage(...unknown: any[]): any;
}

interface CPanoramaScript_SteamUtils {
    /**
     * Returns the connected universe
     */
    GetConnectedUniverse(): any;

    /**
     * Returns the appid of the current app
     */
    GetAppID(): any;
}

interface CPanoramaScript_VRUtils {
    /**
     * Get application properties for a VR app with the specifiied appID
     */
    GetVRAppPropertyData(nAppID: number): any;

    /**
     * Launches a Steam Application using OpenVR.
     */
    LaunchSteamApp(nAppID: number): any;
}

interface DollarStatic {
    (selector: string): Panel;
    CreatePanel(type: string, root: Panel, id: string): Panel;
    CreatePanel(type: string, root: Panel, id: string): PanelBase;
    Msg(...args: any[]): void;
    GetContextPanel(): Panel;
    Schedule(time: number, callback: () => void): ScheduleID;
    CancelScheduled(scheduledEvent: ScheduleID): void;
    DispatchEvent(event: string, panelID?: string, ...args: any[]): void;
    DispatchEvent(event: string, panel: Panel, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panelID?: string, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panel: Panel, ...args: any[]): void;
    Localize(token: string, parent?: Panel): string;
    RegisterEventHandler(event: string, parent: Panel, handler: () => void): number;
    Each<T>(list: T[], callback: (item: T, index: number) => void): void;
    Each<T>(map: { [key: string]: T }, callback: (value: T, key: string) => void): void;
    Each<T>(map: { [key: number]: T }, callback: (value: T, key: number) => void): void;
    AsyncWebRequest(url: string, data: AsyncWebRequestData): void;
}

interface AsyncWebRequestResponse {
    statusText: string;
    responseText: string | null;
    status: number;
}

interface AsyncWebRequestData {
    type?: string;
    timeout?: number;
    headers?: object;
    data?: object;
    success?(response: any, result: 'success', statusText: string): void;
    error?(data: AsyncWebRequestResponse, result: 'error', statusText: string): void;
    complete?(data: AsyncWebRequestResponse, result: 'success' | 'error'): void;
}

declare var GameEvents: CDOTA_PanoramaScript_GameEvents;
declare var GameUI: CDOTA_PanoramaScript_GameUI;
declare var CustomNetTables: CDOTA_PanoramaScript_CustomNetTables;
declare var Particles: CScriptBindingPR_Particles;
declare var Buffs: CScriptBindingPR_Buffs;
declare var Players: CScriptBindingPR_Players;
declare var Entities: CScriptBindingPR_Entities;
declare var Abilities: CScriptBindingPR_Abilities;
declare var Items: CScriptBindingPR_Items;
declare var Game: CScriptBindingPR_Game;
declare var SteamUGC: CPanoramaScript_SteamUGC;
declare var SteamFriends: CPanoramaScript_SteamFriends;
declare var SteamUtils: CPanoramaScript_SteamUtils;
declare var VRUtils: CPanoramaScript_VRUtils;
declare var $: DollarStatic;
declare var panorama: DollarStatic;
