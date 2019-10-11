type AbilityId = number;
type BuffId = number;
type EntityId = number;
type ItemId = number;
type ParticleId = number;
type ScheduleId = number;

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

// Define string dictionary for CustomUIConfig to return
interface StringDictionary {
    [key: string]: any;
}

declare const enum MouseButton {
    LEFT = 0,
    RIGHT = 1,
    MIDDLE = 2
}

declare const enum WheelScroll {
    UP = 1,
    DOWN = -1
}

interface MouseEntity {
    entityIndex: EntityId;
    accurateCollision: boolean;
}

type MouseEvent =
    "pressed" | "doublepressed" | "released" | "wheeled";

interface CDOTA_PanoramaScript_GameUI {
    /**
     * Control whether the default UI is enabled
     */
    SetDefaultUIEnabled(nElementType: number, bVisible: boolean): void;

    /**
     * Get the current UI configuration
     */
    CustomUIConfig(): StringDictionary;

    /**
     * Create a minimap ping at the given location
     */
    PingMinimapAtLocation(vec3: [number, number, number]): void;

    /**
     * Install a mouse input filter
     */
    SetMouseCallback(callbackFn: (event: MouseEvent, value: MouseButton | WheelScroll) => boolean): void;

    /**
     *
     */
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
    CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owningEntity: EntityId): ParticleId;

    /**
     * Release the index of a particle, will make the particle in-accessible from script. This allows another particle
     * to reuse the freed particle index.
     */
    ReleaseParticleIndex(particle: ParticleId): void;

    /**
     * Destroy a particle. Setting the immediate boolean to true will prevent the endcap from playing.
     */
    DestroyParticleEffect(particle: ParticleId, immediate: boolean): void;

    /**
     * Set a particle's control point to a vector value.
     */
    SetParticleControl(particle: ParticleId, controlPoint: number, value: [number, number, number]): void;

    /**
     * Set a particle's forward control point to a vector value.
     */
    SetParticleControlForward(particle: ParticleId, controlPoint: number, value: [number, number, number]): void;

    /**
     * Unknown use, any info welcome.
     */
    SetParticleAlwaysSimulate(particle: ParticleId): void;

    /**
     * Set a particle's control point to an entity's attachment. Most common example is:
     * Particles.SetPerticleControlEnt(particle, controlPoint, entity, ParticleAttachment_t.PATTACH_POINT_FOLLOW, "attach_hitloc", [0,0,0], true);
     */
    SetParticleControlEnt(particle: ParticleId, controlPoint: number, entity: EntityId, particleAttach: ParticleAttachment_t, attachmentName: string, offset: [number, number, number],
                          unknown: boolean): void;
}

interface CScriptBindingPR_Buffs {
    /**
     * Returns the name of the modifier.
     */
    GetName(nEntityIndex: EntityId, nBuffIndex: BuffId): string;

    /**
     * Returns the classname of the modifier.
     */
    GetClass(nEntityIndex: EntityId, nBuffIndex: BuffId): string;

    /**
     * Returns the modifier icon texture.
     */
    GetTexture(nEntityIndex: EntityId, nBuffIndex: BuffId): string;

    /**
     * Returns the total duration of the modifier.
     */
    GetDuration(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns the time at which the modifier will expire.
     */
    GetDieTime(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns the time until the modifier expires.
     */
    GetRemainingTime(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns the time elapsed since the creation of the modifier.
     */
    GetElapsedTime(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns the time at which the modifier was created.
     */
    GetCreationTime(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetStackCount(nEntityIndex: EntityId, nBuffIndex: BuffId): number;

    /**
     * Returns true if the modifier is a debuff (red icon), false otherwise.
     */
    IsDebuff(nEntityIndex: EntityId, nBuffIndex: BuffId): boolean;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    IsHidden(nEntityIndex: EntityId, nBuffIndex: BuffId): boolean;

    /**
     * Returns the entity that created the modifier (possibly on another entity).
     */
    GetCaster(nEntityIndex: EntityId, nBuffIndex: BuffId): EntityId;

    /**
     * Returns the entity to which the modifier is applied.
     */
    GetParent(nEntityIndex: EntityId, nBuffIndex: BuffId): EntityId;

    /**
     * Returns the ability associated with the modifier.
     */
    GetAbility(nEntityIndex: EntityId, nBuffIndex: BuffId): AbilityId;
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
    GetPlayerHeroEntityIndex(iPlayerID: number): EntityId;

    /**
     * Get the entities this player has selected.
     */
    GetSelectedEntities(iPlayerID: number): EntityId[];

    /**
     * Get the entities this player is querying.
     */
    GetQueryUnit(iPlayerID: number): EntityId;

    /**
     * Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit(): EntityId;

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

    /**
     *
     */
    GetClaimedDenies(iPlayerID: number): number;

    /**
     *
     */
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

    /**
     *
     */
    GetLastBuybackTime(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitMultikill(iPlayerID: number): number;

    /**
     * The number of last hits credited to a player.
     */
    GetLastHits(iPlayerID: number): number;

    /**
     *
     */
    GetLastHitStreak(iPlayerID: number): number;

    /**
     * The current level of a player.
     */
    GetLevel(iPlayerID: number): number;

    /**
     *
     */
    GetMisses(iPlayerID: number): number;

    /**
     *
     */
    GetNearbyCreepDeaths(iPlayerID: number): number;

    /**
     * Total reliable gold for this player.
     */
    GetReliableGold(iPlayerID: number): number;

    /**
     *
     */
    GetRespawnSeconds(iPlayerID: number): number;

    /**
     *
     */
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

    /**
     * .
     */
    PlayerPortraitClicked(nClickedPlayerID: number, bHoldingCtrl: boolean, bHoldingAlt: boolean): void;

    /**
     * .
     */
    BuffClicked(nEntity: EntityId, nBuffSerial: number, bAlert: boolean): void;
}

interface CScriptBindingPR_Entities {
    /**
     * Get the world origin of the entity.
     */
    GetAbsOrigin(nEntityIndex: EntityId): [number, number, number];

    /**
     * Get the forward vector of the entity.
     */
    GetForward(nEntityIndex: EntityId): [number, number, number];

    /**
     * Get the right vector of the entity.
     */
    GetRight(nEntityIndex: EntityId): [number, number, number];

    /**
     * Get the up vector of the entity.
     */
    GetUp(nEntityIndex: EntityId): [number, number, number];

    /**
     * Get all the building entities.
     */
    GetAllBuildingEntities(): EntityId[];

    /**
     * Get all the hero entities.
     */
    GetAllHeroEntities(): EntityId[];

    /**
     * Get all the entities with a given name.
     */
    GetAllEntitiesByName(pszName: string): EntityId[];

    /**
     * Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname(pszName: string): EntityId[];

    /**
     * Get all the creature entities.
     */
    GetAllCreatureEntities(): EntityId[];

    /**
     * Get all the entities.
     */
    GetAllEntities(): EntityId[];

    /**
     * Get the ID of the player owning the given entity.
     */
    GetPlayerOwnerID(nEntityIndex: EntityId): number;

    /**
     *
     */
    CanBeDominated(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasAttackCapability(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasCastableAbilities(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasFlyingVision(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasFlyMovementCapability(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasGroundMovementCapability(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasMovementCapability(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasScepter(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasUpgradeableAbilities(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    HasUpgradeableAbilitiesThatArentMaxed(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsAlive(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsAncient(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsAttackImmune(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsBarracks(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsBlind(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsBoss(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsRoshan(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsBuilding(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsCommandRestricted(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsConsideredHero(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsControllableByAnyPlayer(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsCourier(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsCreature(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsCreep(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsCreepHero(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsDeniable(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsDominated(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsEnemy(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsEvadeDisabled(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsFort(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsFrozen(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsGeneratedByEconItem(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsHallofFame(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsDisarmed(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsHero(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsHexed(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsIllusion(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsInRangeOfFountain(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsInventoryEnabled(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsInvisible(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsInvulnerable(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsLaneCreep(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsLowAttackPriority(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsMagicImmune(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsNeutralUnitType(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsNightmared(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsOther(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsOutOfGame(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsOwnedByAnyPlayer(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsPhantom(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsRangedAttacker(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsRealHero(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsRooted(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsSelectable(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsShop(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsSilenced(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsSpeciallyDeniable(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsStunned(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsSummoned(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsTower(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsUnselectable(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsWard(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsZombie(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NoHealthBar(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NoTeamMoveTo(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NoTeamSelect(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NotOnMinimap(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NotOnMinimapForEnemies(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    NoUnitCollision(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    PassivesDisabled(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    ProvidesVision(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    UsesHeroAbilityNumbers(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    IsMoving(nEntityIndex: EntityId): boolean;

    /**
     *
     */
    GetAbilityCount(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetCombatClassAttack(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetCombatClassDefend(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetCurrentVisionRange(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetDamageBonus(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetDamageMax(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetDamageMin(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetDayTimeVisionRange(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetHealth(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetHealthPercent(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetHealthThinkRegen(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetLevel(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetMaxHealth(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetNightTimeVisionRange(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetStates(nEntityIndex: EntityId): modifierstate[];

    /**
     *
     */
    GetTotalPurchasedUpgradeGoldCost(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetTeamNumber(nEntityIndex: EntityId): DOTATeam_t;

    /**
     *
     */
    GetAttackRange(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetAttackSpeed(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetAttacksPerSecond(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetBaseAttackTime(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetBaseMagicalResistanceValue(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetBaseMoveSpeed(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetBonusPhysicalArmor(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetCollisionPadding(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetEffectiveInvisibilityLevel(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetHasteFactor(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetHullRadius(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetIdealSpeed(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetIncreasedAttackSpeed(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetMana(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetManaThinkRegen(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetMaxMana(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetMagicalArmorValue(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetPaddedCollisionRadius(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetPercentInvisible(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetPhysicalArmorValue(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetProjectileCollisionSize(nEntityIndex: EntityId): number;

    /**
     * Returns the radius of the bounding ring of the unit.
     */
    GetRingRadius(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetSecondsPerAttack(nEntityIndex: EntityId): number;

    /**
     *
     */
    ManaFraction(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetClassname(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetDisplayedUnitName(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetSelectionGroup(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetSoundSet(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetUnitLabel(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetUnitName(nEntityIndex: EntityId): string;

    /**
     *
     */
    GetTotalDamageTaken(nEntityIndex: EntityId): number;

    /**
     *
     */
    IsControllableByPlayer(nEntityIndex: EntityId, nPlayerIndex: number): boolean;

    /**
     *
     */
    GetChosenTarget(nEntityIndex: EntityId): number;

    /**
     *
     */
    HasItemInInventory(nEntityIndex: EntityId, pItemName: string): boolean;

    /**
     *
     */
    GetRangeToUnit(nEntityIndex: EntityId, nEntityIndex2: EntityId): number;

    /**
     *
     */
    IsEntityInRange(nEntityIndex: EntityId, nEntityIndex2: EntityId, flRange: number): boolean;

    /**
     *
     */
    GetMoveSpeedModifier(nEntityIndex: EntityId, flBaseSpeed: number): number;

    /**
     *
     */
    CanAcceptTargetToAttack(nEntityIndex: EntityId, nEntityIndex2: EntityId): boolean;

    /**
     *
     */
    InState(nEntityIndex: EntityId, nState: modifierstate): boolean;

    /**
     *
     */
    GetArmorForDamageType(nEntityIndex: EntityId, iDamageType: DAMAGE_TYPES): number;

    /**
     *
     */
    GetArmorReductionForDamageType(nEntityIndex: EntityId, iDamageType: DAMAGE_TYPES): number;

    /**
     *
     */
    IsInRangeOfShop(nEntityIndex: EntityId, iShopType: number, bSpecific: boolean): boolean;

    /**
     *
     */
    GetNumItemsInStash(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetNumItemsInInventory(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetItemInSlot(nEntityIndex: EntityId, nSlotIndex: number): ItemId;

    /**
     *
     */
    GetAbility(nEntityIndex: EntityId, nSlotIndex: number): AbilityId;

    /**
     *
     */
    GetAbilityByName(nEntityIndex: EntityId, pszAbilityName: string): AbilityId;

    /**
     *
     */
    GetNumBuffs(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetBuff(nEntityIndex: EntityId, nBufIndex: number): BuffId;

    /**
     *
     */
    GetAbilityPoints(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetCurrentXP(nEntityIndex: EntityId): number;

    /**
     *
     */
    GetNeededXPToLevel(nEntityIndex: EntityId): number;

    /**
     * Get the currently selected entities
     */
    GetSelectionEntities(): EntityId[];

    /**
     * Is this a valid entity index?
     */
    IsValidEntity(nEntityIndex: EntityId): boolean;

    /**
     * Is this entity an item container in the world?
     */
    IsItemPhysical(nEntityIndex: EntityId): boolean;

    /**
     * Get the item contained in this physical item container.
     */
    GetContainedItem(nEntityIndex: EntityId): ItemId;
}

interface CScriptBindingPR_Abilities {
    /**
     *
     */
    GetAbilityName(nEntityIndex: AbilityId): string;

    /**
     *
     */
    GetAbilityTextureName(nEntityIndex: AbilityId): string;

    /**
     *
     */
    GetAssociatedPrimaryAbilities(nEntityIndex: AbilityId): AbilityId[];

    /**
     *
     */
    GetAssociatedSecondaryAbilities(nEntityIndex: AbilityId): AbilityId[];

    /**
     *
     */
    GetHotkeyOverride(nEntityIndex: AbilityId): string;

    /**
     *
     */
    GetIntrinsicModifierName(nEntityIndex: AbilityId): string;

    /**
     *
     */
    GetSharedCooldownName(nEntityIndex: AbilityId): string;

    /**
     *
     */
    AbilityReady(nEntityIndex: AbilityId): number;

    /**
     * Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded(nEntityIndex: AbilityId): AbilityLearnResult_t;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    GetAbilityDamage(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetAbilityDamageType(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetAbilityTargetFlags(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetAbilityTargetTeam(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetAbilityTargetType(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetAbilityType(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetBehavior(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCastRange(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetChannelledManaCostPerSecond(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetEffectiveLevel(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetHeroLevelRequiredToUpgrade(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetLevel(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetManaCost(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetMaxLevel(nEntityIndex: AbilityId): number;

    /**
     *
     */
    AttemptToUpgrade(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    CanLearn(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    GetAutoCastState(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    GetToggleState(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    HasScepterUpgradeTooltip(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsActivated(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsActivatedChanging(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsAttributeBonus(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsAutocast(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsCooldownReady(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsDisplayedAbility(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsHidden(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsHiddenWhenStolen(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsInAbilityPhase(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsItem(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsMarkedAsDirty(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsOnCastbar(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsOnLearnbar(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsOwnersGoldEnough(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsOwnersGoldEnoughForUpgrade(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsOwnersManaEnough(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsPassive(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsSharedWithTeammates(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsStealable(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsStolen(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    IsToggle(nEntityIndex: AbilityId): boolean;

    /**
     *
     */
    GetAOERadius(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetBackswingTime(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCastPoint(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetChannelStartTime(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetChannelTime(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCooldown(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCooldownLength(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCooldownTime(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetCooldownTimeRemaining(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetDuration(nEntityIndex: AbilityId): number;

    /**
     *
     */
    GetUpgradeBlend(nEntityIndex: AbilityId): number;

    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): AbilityId;

    /**
     *
     */
    GetCaster(nAbilityIndex: AbilityId): EntityId;

    /**
     *
     */
    GetCustomValueFor(nAbilityIndex: AbilityId, pszAbilityVarName: string): number;

    /**
     *
     */
    GetLevelSpecialValueFor(nAbilityIndex: AbilityId, szName: string, nLevel: number): number;

    /**
     *
     */
    GetSpecialValueFor(nAbilityIndex: AbilityId, szName: string): number;

    /**
     *
     */
    IsCosmetic(nAbilityIndex: AbilityId, nTargetEntityIndex: EntityId): boolean;

    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility(nAbilityEntIndex: AbilityId, nCasterEntIndex: EntityId, bIsQuickCast: boolean): boolean;

    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder(nAbilityEntIndex: AbilityId, nCasterEntIndex: EntityId): void;

    /**
     * Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility(nAbilityIndex: AbilityId): void;

    /**
     * Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind(nAbilityEntIndex: AbilityId): string;
}

interface CScriptBindingPR_Items {
    /**
     *
     */
    ShouldDisplayCharges(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    AlwaysDisplayCharges(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    ShowSecondaryCharges(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    CanBeSoldByLocalPlayer(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    CanDoubleTapCast(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    ForceHideCharges(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsAlertableItem(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsCastOnPickup(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsDisassemblable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsDroppable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsInnatelyDisassemblable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsKillable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsMuted(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsPermanent(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsPurchasable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsRecipe(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsRecipeGenerated(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsSellable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    IsStackable(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    ProRatesChargesWhenSelling(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    RequiresCharges(nEntityIndex: ItemId): boolean;

    /**
     *
     */
    CanBeExecuted(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetCost(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetCurrentCharges(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetSecondaryCharges(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetDisplayedCharges(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetInitialCharges(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetItemColor(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetShareability(nEntityIndex: ItemId): EShareAbility;

    /**
     *
     */
    GetAbilityTextureSF(nEntityIndex: ItemId): string;

    /**
     *
     */
    GetAssembledTime(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetPurchaseTime(nEntityIndex: ItemId): number;

    /**
     *
     */
    GetPurchaser(nItemID: ItemId): EntityId;

    /**
     * Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem(nItem: ItemId): boolean;

    /**
     * Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash(nItem: ItemId): boolean;

    /**
     * Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies(nItem: ItemId): boolean;

    /**
     * Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash(nItem: ItemId): boolean;

    /**
     * Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem(nItem: ItemId): boolean;
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
    OrderType?: dotaunitorder_t;
    TargetIndex?: number;
    Position?: [number, number, number];
    AbilityIndex?: number;
    OrderIssuer?: any; // TODO: OrderIssuer_t - not in enums, EntityId?
    UnitIndex?: number;
    QueueBehavior?: OrderQueueBehavior_t;
    ShowEffects?: boolean;
}

interface CScriptBindingPR_Game {
    /**
     *
     */
    Time(): number;

    /**
     *
     */
    GetGameTime(): number;

    /**
     *
     */
    GetDOTATime(bIncludePreGame: boolean, bIncludeNegativeTime: boolean): number;

    /**
     *
     */
    IsGamePaused(): boolean;

    /**
     *
     */
    IsInToolsMode(): boolean;

    /**
     * Return the team id of the winning team.
     */
    GetGameWinner(): number;

    /**
     *
     */
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

    /**
     *
     */
    GetNianFightTimeLeft(): number;

    /**
     *
     */
    GetState(): DOTA_GameState;

    /**
     *
     */
    GameStateIs(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsBefore(nState: DOTA_GameState): boolean;

    /**
     *
     */
    GameStateIsAfter(nState: DOTA_GameState): boolean;

    /**
     *
     */
    AddCommand(pszCommandName: string, callback: (data: object) => void, pszDescription: string, nFlags: number): void;

    /**
     *
     */
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
    GetPlayerItems(nPlayerID: number): ItemId[];

    /**
     * Get info about the given player
     */
    GetPlayerInfo(nPlayerID: number): PlayerInfo;

    /**
     * Get player IDs for the given team
     */
    GetPlayerIDsOnTeam(nTeam: DOTATeam_t): number[];

    /**
     *
     */
    ServerCmd(pMsg: string): void;

    /**
     *
     */
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
    DropItemAtCursor(nControlledUnitEnt: EntityId, nItemEnt: ItemId): void;

    /**
     *
     */
    EnterAbilityLearnMode(): void;

    /**
     *
     */
    EndAbilityLearnMode(): void;

    /**
     *
     */
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
    Schedule(time: number, callback: () => void): ScheduleId;
    CancelScheduled(scheduledEvent: ScheduleId): void;
    DispatchEvent(event: string, panelID?: string, ...args: any[]): void;
    DispatchEvent(event: string, panel: Panel, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panelID?: string, ...args: any[]): void;
    DispatchEventAsync(delay: number, event: string, panel: Panel, ...args: any[]): void;
    Localize(token: string, parent?: Panel): string;
    RegisterEventHandler(event: string, parent: Panel, handler: () => void): number;
    Each<T>(list: T[], callback: (item: T, index: number) => void): void;
    Each<T>(map: {[key: string]: T}, callback: (value: T, key: string) => void): void;
    Each<T>(map: {[key: number]: T}, callback: (value: T, key: number) => void): void;
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
    success?(response: any, result: "success", statusText: string): void;
    error?(data: AsyncWebRequestResponse, result: "error", statusText: string): void;
    complete?(data: AsyncWebRequestResponse, result: "success" | "error"): void;
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
