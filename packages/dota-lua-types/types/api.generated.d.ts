/** @noSelfInFile */
// @validateApiUsageDefault server

/** @both */
declare const CBaseAnimatingActivity: DotaConstructor<CBaseAnimatingActivity>;

declare interface CBaseAnimatingActivity extends CBaseModelEntity {
    /**
     * Returns the duration in seconds of the active sequence.
     */
    ActiveSequenceDuration(): number;
    /**
     * Get the cycle of the animation.
     */
    GetCycle(): number;
    /**
     * Returns the name of the active sequence.
     */
    GetSequence(): string;
    /**
     * Ask whether the main sequence is done playing.
     */
    IsSequenceFinished(): boolean;
    /**
     * Sets the active sequence by name, resetting the current cycle.
     */
    ResetSequence(sequenceName: string): void;
    /**
     * Returns the duration in seconds of the given sequence name.
     */
    SequenceDuration(sequenceName: string): number;
    /**
     * Set the cycle of the animation.
     */
    SetCycle(cycle: number): void;
    /**
     * Set the specified pose parameter to the specified value.
     */
    SetPoseParameter(name: string, value: number): number;
    /**
     * Sets the active sequence by name, keeping the current cycle.
     */
    SetSequence(sequenceName: string): void;
    /**
     * Stop the current animation by setting playback rate to 0.0.
     */
    StopAnimation(): void;
    __kind__: 'instance';
}

/** @both */
declare const CBaseAnimGraph: DotaConstructor<CBaseAnimGraph>;

declare interface CBaseAnimGraph extends CBaseModelEntity {
    /**
     * Get the value of the given animGraph parameter.
     */
    GetGraphParameter(param: string): object;
    /**
     * Pass the desired look target in world space to the graph.
     */
    SetGraphLookTarget(value: Vector): void;
    /**
     * Set the specific param value, type is inferred from the type in script.
     */
    SetGraphParameter(param: string, svArg: object): void;
    /**
     * Set the specific param on or off.
     */
    SetGraphParameterBool(name: string, value: boolean): void;
    /**
     * Pass the enum (int) value to the specified param.
     */
    SetGraphParameterEnum(name: string, value: number): void;
    /**
     * Pass the float value to the specified param.
     */
    SetGraphParameterFloat(name: string, value: number): void;
    /**
     * Pass the int value to the specified param.
     */
    SetGraphParameterInt(name: string, value: number): void;
    /**
     * Pass the vector value to the specified param in the graph.
     */
    SetGraphParameterVector(name: string, value: Vector): void;
    __kind__: 'instance';
}

declare const CBaseCombatCharacter: DotaConstructor<CBaseCombatCharacter>;

/** @client */
declare const C_BaseCombatCharacter: typeof CBaseCombatCharacter;

declare interface CBaseCombatCharacter extends CBaseFlex {
    __kind__: 'instance';
}

declare const CBaseEntity: DotaConstructor<CBaseEntity>;

/** @client */
declare const C_BaseEntity: typeof CBaseEntity;

declare interface CBaseEntity extends CEntityInstance {
    /**
     * Adds the render effect flag.
     */
    AddEffects(flags: EntityEffects): void;
    /**
     * Apply a Velocity Impulse.
     */
    ApplyAbsVelocityImpulse(vecImpulse: Vector): void;
    /**
     * Apply an Ang Velocity Impulse.
     */
    ApplyLocalAngularVelocityImpulse(angImpulse: Vector): void;
    /**
     * Get float value for an entity attribute.
     */
    Attribute_GetFloatValue(name: string, defaultValue: number): number;
    /**
     * Get int value for an entity attribute.
     */
    Attribute_GetIntValue(name: string, defaultValue: number): number;
    /**
     * Set float value for an entity attribute.
     */
    Attribute_SetFloatValue(name: string, value: number): void;
    /**
     * Set int value for an entity attribute.
     */
    Attribute_SetIntValue(name: string, value: number): void;
    /**
     * Delete an entity attribute.
     */
    DeleteAttribute(name: string): void;
    /**
     * Plays a sound from this entity.
     */
    EmitSound(soundname: string): void;
    /**
     * Plays/modifies a sound from this entity. changes sound if nPitch and/or flVol
     * or flSoundTime is > 0.
     */
    EmitSoundParams(soundName: string, pitch: number, volume: number, delay: number): void;
    /**
     * Get the qangles that this entity is looking at.
     */
    EyeAngles(): QAngle;
    /**
     * Get vector to eye position - absolute coords.
     */
    EyePosition(): Vector;
    FirstMoveChild(): CBaseEntity;
    FollowEntity(entity: CBaseEntity, boneMerge: boolean): void;
    /**
     * HEntity to follow, string BoneOrAttachName.
     */
    FollowEntityMerge(ent: object, boneOrAttachName: string): void;
    /**
     * Returns a table containing the criteria that would be used for response queries
     * on this entity. This is the same as the table that is passed to response rule
     * script function callbacks.
     */
    GatherCriteria(result: object): void;
    /** @both */
    GetAbsOrigin(): Vector;
    GetAbsScale(): number;
    GetAngles(): QAngle;
    /**
     * Get entity pitch, yaw, roll as a vector.
     */
    GetAnglesAsVector(): Vector;
    /**
     * Get the local angular velocity - returns a vector of pitch,yaw,roll.
     */
    GetAngularVelocity(): Vector;
    /**
     * Get Base? velocity.
     */
    GetBaseVelocity(): Vector;
    /**
     * Get a vector containing max bounds, centered on object.
     */
    GetBoundingMaxs(): Vector;
    /**
     * Get a vector containing min bounds, centered on object.
     */
    GetBoundingMins(): Vector;
    /**
     * Get a table containing the 'Mins' & 'Maxs' vector bounds, centered on object.
     */
    GetBounds(): EntityBounds;
    /**
     * Get vector to center of object - absolute coords.
     */
    GetCenter(): Vector;
    /**
     * Get the entities parented to this entity.
     */
    GetChildren(): CBaseEntity[];
    /**
     * Looks up a context and returns it if available. May return string, float, or
     * null (if the context isn't found).
     */
    GetContext(name: string): string | number | undefined;
    /**
     * Get the forward vector of the entity.
     */
    GetForwardVector(): Vector;
    /**
     * Get the health of this entity.
     *
     * @both
     */
    GetHealth(): number;
    /**
     * Get the left vector of the entity.
     */
    GetLeftVector(): Vector;
    /**
     * Get entity local pitch, yaw, roll as a QAngle.
     */
    GetLocalAngles(): QAngle;
    /**
     * Maybe local angvel.
     */
    GetLocalAngularVelocity(): QAngle;
    /**
     * Get entity local origin as a Vector.
     */
    GetLocalOrigin(): Vector;
    GetLocalScale(): number;
    /**
     * Get Entity relative velocity.
     */
    GetLocalVelocity(): Vector;
    /**
     * Get the mass of an entity. (returns 0 if it doesn't have a physics object).
     */
    GetMass(): number;
    /**
     * Get the maximum health of this entity.
     *
     * @both
     */
    GetMaxHealth(): number;
    /**
     * Returns the name of the model.
     */
    GetModelName(): string;
    /**
     * If in hierarchy, retrieves the entity's parent.
     */
    GetMoveParent(): CBaseEntity;
    GetOrigin(): Vector;
    /**
     * Gets this entity's owner.
     */
    GetOwner(): CBaseEntity;
    /**
     * Get the owner entity, if there is one.
     */
    GetOwnerEntity(): CBaseEntity;
    /**
     * Get the right vector of the entity. WARNING: This produces a left-handed
     * coordinate system. Use GetLeftVector instead (which is aligned with the y axis
     * of the entity).
     */
    GetRightVector(): Vector;
    /**
     * If in hierarchy, walks up the hierarchy to find the root parent.
     */
    GetRootMoveParent(): CBaseEntity;
    /**
     * Returns float duration of the sound. Takes soundname and optional
     * actormodelname.
     */
    GetSoundDuration(soundname: string, actormodel: string): number;
    /**
     * Returns the spawn group handle of this entity.
     */
    GetSpawnGroupHandle(): SpawnGroupHandle;
    /**
     * Get the team number of this entity.
     */
    GetTeam(): DOTATeam_t;
    /**
     * Get the team number of this entity.
     *
     * @both
     */
    GetTeamNumber(): DOTATeam_t;
    /**
     * Get the up vector of the entity.
     */
    GetUpVector(): Vector;
    GetVelocity(): Vector;
    /**
     * See if an entity has a particular attribute.
     */
    HasAttribute(name: string): boolean;
    /**
     * Is this entity alive?
     */
    IsAlive(): boolean;
    /**
     * Is this entity an CDOTA_BaseNPC?
     *
     * @both
     */
    IsBaseNPC(): this is CDOTA_BaseNPC;
    /**
     * Is this entity a Dota NPC?
     */
    IsDOTANPC(): boolean;
    /** @both */
    IsInstance<T extends CBaseEntity>(classOrClassName: DotaConstructor<T>): this is T;
    /**
     * Is this entity an CAI_BaseNPC?
     */
    IsNPC(): boolean;
    /**
     * Back compat: Is this entity a player pawn *or* controller?
     */
    IsPlayer(): this is CDOTAPlayerController;
    /**
     * Is this entity a player controller?
     */
    IsPlayerController(): boolean;
    /**
     * Is this entity a player pawn?
     */
    IsPlayerPawn(): boolean;
    Kill(): void;
    NextMovePeer(): CBaseEntity;
    /**
     * Takes duration, value for a temporary override.
     */
    OverrideFriction(duration: number, friction: number): void;
    /**
     * Precache a sound for later playing.
     */
    PrecacheScriptSound(soundname: string): void;
    /**
     * Removes the render effect flag.
     */
    RemoveEffects(flags: EntityEffects): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAbsAngles(pitch: number, yaw: number, roll: number): void;
    SetAbsOrigin(origin: Vector): void;
    SetAbsScale(scale: number): void;
    /**
     * Set entity pitch, yaw, roll by component.
     */
    SetAngles(pitch: number, yaw: number, roll: number): void;
    /**
     * Set the local angular velocity.
     */
    SetAngularVelocity(pitchVel: number, yawVel: number, rollVel: number): void;
    /**
     * Set the position of the constraint.
     */
    SetConstraint(pos: Vector): void;
    /**
     * Store any key/value pair in this entity's dialog contexts. Value must be a
     * string. Will last for duration (set 0 to mean 'forever').
     */
    SetContext(name: string, value: string, duration: number): void;
    /**
     * Store any key/value pair in this entity's dialog contexts. Value must be a
     * number (int or float). Will last for duration (set 0 to mean 'forever').
     */
    SetContextNum(name: string, value: number, duration: number): void;
    /**
     * Set a think function on this entity.
     *
     * @both
     */
    SetContextThink(
        contextName: string,
        thinkFunc: ((this: this) => number | undefined) | undefined,
        interval: number,
    ): void;
    /**
     * Set the name of an entity.
     */
    SetEntityName(name: string): void;
    /**
     * Set the orientation of the entity to have this forward vector.
     */
    SetForwardVector(v: Vector): void;
    /**
     * Set PLAYER friction, ignored for objects.
     */
    SetFriction(friction: number): void;
    /**
     * Set PLAYER gravity, ignored for objects.
     */
    SetGravity(gravity: number): void;
    /**
     * Set the health of this entity.
     */
    SetHealth(health: number): void;
    /**
     * Set entity local pitch, yaw, roll by component.
     */
    SetLocalAngles(pitch: number, yaw: number, roll: number): void;
    /**
     * Set entity local origin from a Vector.
     */
    SetLocalOrigin(origin: Vector): void;
    SetLocalScale(scale: number): void;
    /**
     * Set the mass of an entity. (does nothing if it doesn't have a physics object).
     */
    SetMass(mass: number): void;
    /**
     * Set the maximum health of this entity.
     */
    SetMaxHealth(amt: number): void;
    SetOrigin(v: Vector): void;
    /**
     * Sets this entity's owner. This entity will be returned by GetOwner() and
     * GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID() will be automatically
     * inferred from this entity.
     */
    SetOwner(owner: CBaseEntity): void;
    /**
     * Set the parent for this entity.
     */
    SetParent(parent: CBaseEntity, attachmentname: string): void;
    SetTeam(teamNum: DOTATeam_t): void;
    /**
     * Set a think function on this entity. Uses `CBaseEntity:SetContextThink`
     * internally.
     *
     * Note: optional parameters can be given in any order.
     *
     * @param functionName If `context` is provided, think function would perform a
     *                     dynamic lookup on `context` table. Otherwise searches for
     *                     that function name in caller scope.
     * @param contextName Defaults to `functionName` if it's a string.
     * @param initialDelay Defaults to 0 (next game frame).
     * @both
     */
    SetThink(
        functionName: ((entity: CBaseEntity) => number | undefined) | string,
        context: object | undefined,
        contextName: string | undefined,
        initialDelay: number | undefined,
    ): void;
    SetVelocity(vecVelocity: Vector): void;
    /**
     * Stops a named sound playing from this entity.
     */
    StopSound(soundname: string): void;
    /**
     * Stops thinker created with `CBaseEntity.SetThink`.
     *
     * Alias for `CBaseEntity:SetContextThink(contextName, nil, 0)`.
     *
     * @both
     */
    StopThink(contextName: string): void;
    /**
     * Apply damage to this entity. Use CreateDamageInfo() to create a damageinfo
     * object.
     */
    TakeDamage(damageInfo: CTakeDamageInfo): number;
    /**
     * Returns the input Vector transformed from entity to world space.
     */
    TransformPointEntityToWorld(point: Vector): Vector;
    /**
     * Returns the input Vector transformed from world to entity space.
     */
    TransformPointWorldToEntity(point: Vector): Vector;
    /**
     * Fires off this entity's OnTrigger responses.
     */
    Trigger(): void;
    /**
     * Validates the private script scope and creates it if one doesn't exist.
     */
    ValidatePrivateScriptScope(): void;
    __kind__: 'instance';
}

declare const CBaseFlex: DotaConstructor<CBaseFlex>;

/** @client */
declare const C_BaseFlex: typeof CBaseFlex;

declare interface CBaseFlex extends CBaseAnimatingActivity {
    /**
     * Returns the instance of the oldest active scene entity (if any).
     */
    GetCurrentScene(): CSceneEntity | undefined;
    /**
     * Returns the instance of the scene entity at the specified index.
     */
    GetSceneByIndex(index: number): CSceneEntity | undefined;
    /**
     * Play specified vcd file.
     */
    ScriptPlayScene(scene: string, delay: number): number;
    __kind__: 'instance';
}

declare const CBaseModelEntity: DotaConstructor<CBaseModelEntity>;

/** @client */
declare const C_BaseModelEntity: typeof CBaseModelEntity;

declare interface CBaseModelEntity extends CBaseEntity {
    /**
     * Get the attachment id's angles as a p,y,r vector.
     */
    GetAttachmentAngles(attachment: number): Vector;
    /**
     * Get the attachment id's forward vector.
     */
    GetAttachmentForward(attachment: number): Vector;
    /**
     * Get the attachment id's origin vector.
     */
    GetAttachmentOrigin(attachment: number): Vector;
    /**
     * Get the material group hash of this entity.
     */
    GetMaterialGroupHash(): number;
    /**
     * Get the mesh group mask of this entity.
     */
    GetMaterialGroupMask(): Uint64;
    /**
     * Get scale of entity's model.
     */
    GetModelScale(): number;
    /**
     * Get the alpha modulation of this entity.
     *
     * @both
     */
    GetRenderAlpha(): number;
    /**
     * Get the render color of the entity.
     */
    GetRenderColor(): Vector;
    /**
     * Get the named attachment id.
     */
    ScriptLookupAttachment(attachmentName: string): number;
    /**
     * Sets a bodygroup.
     */
    SetBodygroup(group: number, value: number): void;
    /**
     * Sets a bodygroup by name.
     */
    SetBodygroupByName(name: string, value: number): void;
    /**
     * Sets the light group of the entity.
     */
    SetLightGroup(lightGroup: string): void;
    /**
     * Set the material group of this entity.
     */
    SetMaterialGroup(materialGroup: string): void;
    /**
     * Set the material group hash of this entity.
     */
    SetMaterialGroupHash(hash: number): void;
    /**
     * Set the mesh group mask of this entity.
     */
    SetMaterialGroupMask(meshGroupMask: Uint64): void;
    SetModel(modelName: string): void;
    /**
     * Set scale of entity's model.
     */
    SetModelScale(scale: number): void;
    /**
     * Set the alpha modulation of this entity.
     */
    SetRenderAlpha(alpha: number): void;
    /**
     * Sets the render color of the entity.
     */
    SetRenderColor(r: number, g: number, b: number): void;
    /**
     * Sets the render mode of the entity.
     */
    SetRenderMode(mode: number): void;
    /**
     * Set a single mesh group for this entity.
     */
    SetSingleMeshGroup(meshGroupName: string): void;
    SetSize(mins: Vector, maxs: Vector): void;
    SetSkin(skin: number): void;
    __kind__: 'instance';
}

declare const CBasePlayerController: DotaConstructor<CBasePlayerController>;

declare interface CBasePlayerController extends CBaseEntity {
    /**
     * Returns the pawn for this controller.
     */
    GetPawn(): object;
    __kind__: 'instance';
}

declare const CBasePlayerPawn: DotaConstructor<CBasePlayerPawn>;

declare interface CBasePlayerPawn extends CBaseCombatCharacter {
    /**
     * Returns the controller for this pawn.
     */
    GetController(): object;
    /**
     * Returns an array of all the equipped weapons.
     */
    GetEquippedWeapons(): object;
    /**
     * Gets the number of weapons currently equipped.
     */
    GetWeaponCount(): number;
    /**
     * Returns true if the player is in noclip mode.
     */
    IsNoclipping(): boolean;
    __kind__: 'instance';
}

declare const CBaseTrigger: DotaConstructor<CBaseTrigger>;

declare interface CBaseTrigger extends CBaseEntity {
    /**
     * Disable's the trigger.
     */
    Disable(): void;
    /**
     * Enable the trigger.
     */
    Enable(): void;
    /**
     * Checks whether the passed entity is touching the trigger.
     */
    IsTouching(ent: CBaseEntity): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CBodyComponent: DotaConstructor<CBodyComponent>;

declare interface CBodyComponent {
    /**
     * Apply an impulse at a worldspace position to the physics.
     *
     * @both
     */
    AddImpulseAtPosition(arg1: Vector, arg2: Vector): void;
    /**
     * Add linear and angular velocity to the physics object.
     *
     * @both
     */
    AddVelocity(arg1: Vector, arg2: Vector): void;
    /**
     * Detach from its parent.
     *
     * @both
     */
    DetachFromParent(): void;
    /**
     * Is attached to parent.
     *
     * @both
     */
    IsAttachedToParent(): boolean;
    /** @both */
    SetAngularVelocity(arg1: Vector): void;
    /** @both */
    SetMaterialGroup(arg1: string): void;
    /** @both */
    SetVelocity(arg1: Vector): void;
    __kind__: 'instance';
}

/**
 * The type used for validation of custom events.
 *
 * This type may be augmented via interface merging.
 */
interface CustomGameEventDeclarations {}

declare namespace CCustomGameEventManager {
    type InferEventType<T extends string | object, TUntyped> = T extends string
        ? T extends keyof CustomGameEventDeclarations
            ? CustomGameEventDeclarations[T]
            : TUntyped
        : T;
}

declare const CustomGameEventManager: CCustomGameEventManager;

declare const CCustomGameEventManager: DotaConstructor<CCustomGameEventManager>;

declare interface CCustomGameEventManager {
    /**
     * Register a callback to be called when a particular custom event arrives.
     * Returns a listener ID that can be used to unregister later.
     */
    RegisterListener<T extends string | object>(
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        listener: (
            userId: EntityIndex,
            event: NetworkedData<CCustomGameEventManager.InferEventType<T, object> & { PlayerID: PlayerID }>,
        ) => void,
    ): CustomGameEventListenerID;
    Send_ServerToAllClients<T extends string | object>(
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    Send_ServerToPlayer<T extends string | object>(
        player: CDOTAPlayerController,
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    Send_ServerToTeam<T extends string | object>(
        team: DOTATeam_t,
        eventName: (T extends string ? T : string) | keyof CustomGameEventDeclarations,
        eventData: CCustomGameEventManager.InferEventType<T, never>,
    ): void;
    /**
     * Unregister a specific listener.
     */
    UnregisterListener(listenerId: CustomGameEventListenerID): void;
    __kind__: 'instance';
}

/**
 * The type used for validation of custom net tables.
 *
 * This type may be augmented via interface merging.
 */
interface CustomNetTableDeclarations {}

declare const CustomNetTables: CCustomNetTableManager;

/** @both */
declare const CCustomNetTableManager: DotaConstructor<CCustomNetTableManager>;

declare interface CCustomNetTableManager {
    /** @both */
    GetTableValue<
        TName extends keyof CustomNetTableDeclarations,
        T extends CustomNetTableDeclarations[TName],
        K extends keyof T,
    >(
        tableName: TName,
        keyName: K,
    ): NetworkedData<T[K]>;
    SetTableValue<
        TName extends keyof CustomNetTableDeclarations,
        T extends CustomNetTableDeclarations[TName],
        K extends keyof T,
    >(
        tableName: TName,
        keyName: K,
        value: T[K],
    ): boolean;
    __kind__: 'instance';
}

declare const debugoverlay: CDebugOverlayScriptHelper;

/** @both */
declare const CDebugOverlayScriptHelper: DotaConstructor<CDebugOverlayScriptHelper>;

declare interface CDebugOverlayScriptHelper {
    /**
     * Draws an axis. Specify origin + orientation in world space.
     *
     * @both
     */
    Axis(arg1: Vector, arg2: unknown, arg3: number, arg4: boolean, arg5: number): void;
    /**
     * Draws a world-space axis-aligned box. Specify bounds in world space.
     *
     * @both
     */
    Box(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws an oriented box at the origin. Specify bounds in local space.
     *
     * @both
     */
    BoxAngles(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: unknown,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a capsule. Specify base in world space.
     *
     * @both
     */
    Capsule(
        arg1: Vector,
        arg2: unknown,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a circle. Specify center in world space.
     *
     * @both
     */
    Circle(
        arg1: Vector,
        arg2: unknown,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a circle oriented to the screen. Specify center in world space.
     *
     * @both
     */
    CircleScreenOriented(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a wireframe cone. Specify endpoint and direction in world space.
     *
     * @both
     */
    Cone(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a screen-aligned cross. Specify origin in world space.
     *
     * @both
     */
    Cross(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a world-aligned cross. Specify origin in world space.
     *
     * @both
     */
    Cross3D(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws an oriented cross. Specify origin in world space.
     *
     * @both
     */
    Cross3DOriented(
        arg1: Vector,
        arg2: unknown,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a dashed line. Specify endpoints in world space.
     *
     * @both
     */
    DrawTickMarkedLine(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws the attachments of the entity.
     *
     * @both
     */
    EntityAttachments(arg1: number, arg2: number, arg3: number): void;
    /**
     * Draws the axis of the entity origin.
     *
     * @both
     */
    EntityAxis(arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    /**
     * Draws bounds of an entity.
     *
     * @both
     */
    EntityBounds(
        arg1: number,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: boolean,
        arg7: number,
    ): void;
    /**
     * Draws the skeleton of the entity.
     *
     * @both
     */
    EntitySkeleton(arg1: number, arg2: number): void;
    /**
     * Draws text on an entity.
     *
     * @both
     */
    EntityText(
        arg1: number,
        arg2: number,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
    ): void;
    /**
     * Draws a screen-space filled 2D rectangle. Coordinates are in pixels.
     *
     * @both
     */
    FilledRect2D(arg1: never, arg2: never, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Draws a horizontal arrow. Specify endpoints in world space.
     *
     * @both
     */
    HorzArrow(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a line between two points.
     *
     * @both
     */
    Line(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a line between two points in screenspace.
     *
     * @both
     */
    Line2D(arg1: never, arg2: never, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    /**
     * Pops the identifier used to group overlays. Overlays marked with this
     * identifier can be deleted in a big batch.
     *
     * @both
     */
    PopDebugOverlayScope(): void;
    /**
     * Pushes an identifier used to group overlays. Deletes all existing overlays
     * using this overlay id.
     *
     * @both
     */
    PushAndClearDebugOverlayScope(arg1: string): void;
    /**
     * Pushes an identifier used to group overlays. Overlays marked with this
     * identifier can be deleted in a big batch.
     *
     * @both
     */
    PushDebugOverlayScope(arg1: string): void;
    /**
     * Removes all overlays marked with a specific identifier, regardless of their
     * lifetime.
     *
     * @both
     */
    RemoveAllInScope(arg1: string): void;
    /**
     * Draws a solid cone. Specify endpoint and direction in world space.
     *
     * @both
     */
    SolidCone(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    /**
     * Draws a wireframe sphere. Specify center in world space.
     *
     * @both
     */
    Sphere(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: boolean,
        arg8: number,
    ): void;
    /**
     * Draws a swept box. Specify endpoints in world space and the bounds in local
     * space.
     *
     * @both
     */
    SweptBox(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: Vector,
        arg5: unknown,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: number,
        arg10: number,
    ): void;
    /**
     * Draws 2D text. Specify origin in world space.
     *
     * @both
     */
    Text(
        arg1: Vector,
        arg2: number,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: number,
    ): void;
    /**
     * Draws a screen-space texture. Coordinates are in pixels.
     *
     * @both
     */
    Texture(
        arg1: string,
        arg2: never,
        arg3: never,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: never,
        arg9: never,
        arg10: number,
    ): void;
    /**
     * Draws a filled triangle. Specify vertices in world space.
     *
     * @both
     */
    Triangle(
        arg1: Vector,
        arg2: Vector,
        arg3: Vector,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws 3D text. Specify origin + orientation in world space.
     *
     * @both
     */
    VectorText3D(
        arg1: Vector,
        arg2: unknown,
        arg3: string,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a vertical arrow. Specify endpoints in world space.
     *
     * @both
     */
    VertArrow(
        arg1: Vector,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: boolean,
        arg9: number,
    ): void;
    /**
     * Draws a arrow associated with a specific yaw. Specify endpoints in world space.
     *
     * @both
     */
    YawArrow(
        arg1: Vector,
        arg2: number,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
        arg9: boolean,
        arg10: number,
    ): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Aghanim_Spear: DotaConstructor<CDOTA_Ability_Aghanim_Spear>;

declare interface CDOTA_Ability_Aghanim_Spear extends CDOTABaseAbility {
    /**
     * Launch Spear to a target position from a source position.
     */
    LaunchSpear(target: Vector, start: Vector): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Animation_Attack: DotaConstructor<CDOTA_Ability_Animation_Attack>;

declare interface CDOTA_Ability_Animation_Attack extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Animation_TailSpin: DotaConstructor<CDOTA_Ability_Animation_TailSpin>;

declare interface CDOTA_Ability_Animation_TailSpin extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_DataDriven: DotaConstructor<CDOTA_Ability_DataDriven>;

declare interface CDOTA_Ability_DataDriven extends CDOTABaseAbility {
    /**
     * Applies a data driven modifier to the target.
     */
    ApplyDataDrivenModifier(
        caster: CDOTA_BaseNPC,
        target: CDOTA_BaseNPC,
        modifierName: string,
        modifierTable: object | undefined,
    ): CDOTA_Buff;
    /**
     * Applies a data driven thinker at the location.
     */
    ApplyDataDrivenThinker(
        caster: CDOTA_BaseNPC,
        location: Vector,
        modifierName: string,
        modifierTable: object | undefined,
    ): CDOTA_Buff;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Lua: DotaConstructor<CDOTA_Ability_Lua>;

/** @client */
declare const C_DOTA_Ability_Lua: typeof CDOTA_Ability_Lua;

declare interface CDOTA_Ability_Lua extends CDOTABaseAbility {
    /**
     * Determine whether an issued command with no target is valid.
     *
     * @both
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * Determine whether an issued command on a location is valid.
     *
     * @both
     */
    CastFilterResultLocation(location: Vector): UnitFilterResult;
    /**
     * Determine whether an issued command on a target is valid.
     *
     * @both
     */
    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult;
    /** @both */
    GetAbilityChargeRestoreTime(level: number): number;
    /**
     * Allows code overriding of the ability texture shown in the HUD.
     *
     * @client
     */
    GetAbilityTextureName(): string;
    /**
     * Controls the size of the AOE casting cursor.
     *
     * @both
     */
    GetAOERadius(): number;
    /**
     * Returns abilities that are stolen simultaneously, or otherwise related in
     * functionality.
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * Returns other abilities that are stolen simultaneously, or otherwise related in
     * functionality.  Generally hidden abilities.
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     *
     * @both
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * Return casting animation of this ability.
     */
    GetCastAnimation(): GameActivity_t;
    /**
     * Return cast point of this ability.
     *
     * @both
     */
    GetCastPoint(): number;
    /**
     * Return cast range of this ability.
     *
     * @both
     */
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number;
    /** @both */
    GetCastRangeBonus(target: object, pseudoCastRange: number): number;
    /**
     * Return channel animation of this ability.
     */
    GetChannelAnimation(): GameActivity_t;
    /**
     * Return health cost per second of channeling at the given level (-1 is current).
     *
     * @both
     */
    GetChannelledHealthCostPerSecond(level: number): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     *
     * @both
     */
    GetChannelledManaCostPerSecond(level: number): number;
    /**
     * Return the channel start time of this ability.
     *
     * @both
     */
    GetChannelStartTime(): number;
    /**
     * Return the channel time of this ability.
     *
     * @both
     */
    GetChannelTime(): number;
    /**
     * Return who hears speech when this spell is cast.
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     *
     * @both
     */
    GetCooldown(level: number): number;
    /**
     * Return the error string of a failed command with no target.
     *
     * @both
     */
    GetCustomCastError(): string;
    /**
     * Return the error string of a failed command on a location.
     *
     * @both
     */
    GetCustomCastErrorLocation(location: Vector): string;
    /**
     * Return the error string of a failed command on a target.
     *
     * @both
     */
    GetCustomCastErrorTarget(target: CDOTA_BaseNPC): string;
    /**
     * (DOTA_INVALID_ORDERS nReason) Return the error string of a failed order.
     *
     * @both
     */
    GetCustomHudErrorMessage(reason: number): string;
    /**
     * Return cast range of this ability, accounting for modifiers.
     *
     * @both
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    /**
     * Return gold cost at the given level (-1 is current).
     *
     * @both
     */
    GetGoldCost(level: number): number;
    /**
     * Return health cost at the given level (-1 is current).
     *
     * @both
     */
    GetHealthCost(level: number): number;
    /**
     * Returns the name of the modifier applied passively by this ability.
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     *
     * @both
     */
    GetManaCost(level: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Is this ability an Attribute Bonus.
     *
     * @both
     */
    IsAttributeBonus(): boolean;
    /**
     * Is this a cosmetic only ability?
     */
    IsCosmetic(entity: object): boolean;
    /**
     * Returns true if this ability can be used when not on the action panel.
     *
     * @both
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * Returns true if this ability is hidden when stolen by Spell Steal.
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns true if this ability is refreshed by Refresher Orb.
     */
    IsRefreshable(): boolean;
    /**
     * Returns true if this ability can be stolen by Spell Steal.
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * The ability was pinged.
     */
    OnAbilityPinged(playerId: PlayerID, ctrlHeld: boolean): void;
    OnAbilityUpgrade(upgradeAbility: object): void;
    /**
     * Channel finished.
     */
    OnChannelFinish(interrupted: boolean): void;
    /**
     * Channeling is taking place.
     */
    OnChannelThink(interval: number): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat
     * bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: object): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * Caster equipped item.
     */
    OnItemEquipped(item: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * Projectile has collided with a given target or reached its destination. If
     * 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector): boolean | void;
    /**
     * Projectile has collided with a given target or reached its destination. If
     * 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit_ExtraData(target: CDOTA_BaseNPC | undefined, location: Vector, extraData: object): boolean | void;
    /**
     * Projectile has collided with a given target or reached its destination. If
     * 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHitHandle(
        target: CDOTA_BaseNPC | undefined,
        location: Vector,
        projectileHandle: ProjectileID,
    ): boolean | void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink(location: Vector): void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink_ExtraData(location: Vector, extraData: object): void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThinkHandle(projectileHandle: ProjectileID): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * Special behavior when stolen by Spell Steal.
     */
    OnStolen(sourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    OtherAbilitiesAlwaysInterruptChanneling(): boolean;
    /**
     * Returns true if this ability will generate magic stick charges for nearby
     * enemies.
     */
    ProcsMagicStick(): boolean;
    /**
     * Does this ability need the caster to face the target before executing?
     */
    RequiresFacing(): boolean;
    /**
     * Returns true if this ability should return to the default toggle state when its
     * parent respawns.
     */
    ResetToggleOnRespawn(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
    /**
     * Called first when ability entity is created.
     *
     * @abstract
     * @both
     */
    Init?(): void;
    /** @abstract */
    Precache?(context: CScriptPrecacheContext): void;
    /**
     * Called when ability entity is created, after Init.
     *
     * @abstract
     * @both
     */
    Spawn?(): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Dive: DotaConstructor<CDOTA_Ability_Nian_Dive>;

declare interface CDOTA_Ability_Nian_Dive extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Leap: DotaConstructor<CDOTA_Ability_Nian_Leap>;

declare interface CDOTA_Ability_Nian_Leap extends CDOTABaseAbility {
    /**
     * Override playbackrate.
     */
    SetPlaybackRate(rate: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Ability_Nian_Roar: DotaConstructor<CDOTA_Ability_Nian_Roar>;

declare interface CDOTA_Ability_Nian_Roar extends CDOTABaseAbility {
    /**
     * Number of times Nian has used the roar.
     */
    GetCastCount(): number;
    __kind__: 'instance';
}

declare const CDOTA_AghsFort_Ability_ArcWardenBoss_TempestDouble: DotaConstructor<CDOTA_AghsFort_Ability_ArcWardenBoss_TempestDouble>;

/** @client */
declare const C_DOTA_AghsFort_Ability_ArcWardenBoss_TempestDouble: typeof CDOTA_AghsFort_Ability_ArcWardenBoss_TempestDouble;

declare interface CDOTA_AghsFort_Ability_ArcWardenBoss_TempestDouble extends CDOTABaseAbility {
    /**
     * Sets the number of doubles to spawn.
     *
     * @both
     */
    SetNumDoubles(doubles: number): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC: DotaConstructor<CDOTA_BaseNPC>;

/** @client */
declare const C_DOTA_BaseNPC: typeof CDOTA_BaseNPC;

declare interface CDOTA_BaseNPC extends CBaseFlex {
    /**
     * Add an ability to this unit by name.
     */
    AddAbility(abilityName: string): CDOTABaseAbility;
    /**
     * Add an activity modifier that affects future StartGesture calls.
     *
     * @param name The name of the activity modifier to add, e.g. 'haste'.
     */
    AddActivityModifier(name: string): void;
    /**
     * Add an item to this unit's inventory.
     */
    AddItem(item: CDOTA_Item): CDOTA_Item;
    /**
     * Add an item to this unit's inventory.
     */
    AddItemByName(itemName: string): CDOTA_Item;
    /**
     * Add a modifier to this unit.
     */
    AddNewModifier(
        caster: CDOTA_BaseNPC | undefined,
        ability: CDOTABaseAbility | undefined,
        modifierName: string,
        modifierTable: object | undefined,
    ): CDOTA_Buff;
    /**
     * Adds the no draw flag.
     */
    AddNoDraw(): void;
    /**
     * Add a speech bubble(1-4 live at a time) to this NPC.
     */
    AddSpeechBubble(bubble: number, speech: string, duration: number, unOffsetX: number, unOffsetY: number): void;
    AlertNearbyUnits(attacker: CDOTA_BaseNPC, ability: CDOTABaseAbility): void;
    AngerNearbyUnits(): void;
    AttackNoEarlierThan(time: number, timeDisparityTolerance: number): void;
    AttackReady(): boolean;
    BoundingRadius2D(): number;
    CalculateGenericBonuses(): void;
    CanBeSeenByAnyOpposingTeam(): boolean;
    /**
     * Check FoW to see if an entity is visible.
     */
    CanEntityBeSeenByMyTeam(entity: CDOTA_BaseNPC): boolean;
    /**
     * Query if this unit can sell items.
     */
    CanSellItems(): boolean;
    /**
     * Cast an ability immediately.
     */
    CastAbilityImmediately(ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability with no target.
     */
    CastAbilityNoTarget(ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability on a position.
     */
    CastAbilityOnPosition(position: Vector, ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Cast an ability on a target entity.
     */
    CastAbilityOnTarget(target: CDOTA_BaseNPC, ability: CDOTABaseAbility, playerIndex: number): void;
    /**
     * Toggle an ability.
     */
    CastAbilityToggle(ability: CDOTABaseAbility, playerIndex: number): void;
    ChangeTeam(teamNum: number): void;
    /**
     * Clear Activity modifiers.
     */
    ClearActivityModifiers(): void;
    DestroyAllSpeechBubbles(): void;
    /**
     * Disassemble the passed item in this unit's inventory.
     */
    DisassembleItem(item: CDOTA_Item): void;
    /**
     * Drop an item at a given point.
     */
    DropItemAtPosition(dest: Vector, item: CDOTA_Item): void;
    /**
     * Immediately drop a carried item at a given position.
     */
    DropItemAtPositionImmediate(item: CDOTA_Item, position: Vector): void;
    /**
     * Drops the selected item out of this unit's stash.
     */
    EjectItemFromStash(item: CDOTA_Item): void;
    /**
     * This unit will be set to face the target point.
     */
    FaceTowards(target: Vector): void;
    /**
     * Fade and remove the given gesture activity.
     */
    FadeGesture(activity: GameActivity_t): void;
    /**
     * Retrieve an ability by name from the unit.
     *
     * @both
     */
    FindAbilityByName(abilityName: string): CDOTABaseAbility | undefined;
    /**
     * Returns a table of all of the modifiers on the NPC.
     */
    FindAllModifiers(): CDOTA_Buff[];
    /**
     * Returns a table of all of the modifiers on the NPC with the passed name
     * (modifierName).
     */
    FindAllModifiersByName(modifierName: string): CDOTA_Buff[];
    /**
     * Get handle to first item in inventory, else nil.
     */
    FindItemInInventory(itemName: string): CDOTA_Item | undefined;
    /**
     * Return a handle to the modifier of the given name if found, else nil (string
     * Name ).
     */
    FindModifierByName(modifierName: string): CDOTA_Buff | undefined;
    /**
     * Return a handle to the modifier of the given name from the passed caster if
     * found, else nil.
     */
    FindModifierByNameAndCaster(modifierName: string, caster: CDOTA_BaseNPC): CDOTA_Buff | undefined;
    /**
     * Kill this unit immediately.
     */
    ForceKill(reincarnate: boolean): void;
    /**
     * Play an activity once, and then go back to idle.
     */
    ForcePlayActivityOnce(activity: GameActivity_t): void;
    /**
     * Retrieve an ability by index from the unit.
     */
    GetAbilityByIndex(index: number): CDOTABaseAbility | undefined;
    /** @both */
    GetAbilityCount(): number;
    /**
     * Gets the range at which this unit will auto-acquire.
     */
    GetAcquisitionRange(): number;
    /**
     * Combat involving this creature will have this weight added to the music
     * calcuations.
     */
    GetAdditionalBattleMusicWeight(): number;
    /**
     * Returns this unit's aggro target.
     */
    GetAggroTarget(): CDOTA_BaseNPC | undefined;
    GetAttackAnimationPoint(): number;
    GetAttackCapability(): DOTAUnitAttackCapability_t;
    /**
     * Returns a random integer between the minimum and maximum base damage of the
     * unit.
     */
    GetAttackDamage(): number;
    /**
     * Gets the attack range buffer.
     */
    GetAttackRangeBuffer(): number;
    /** @both */
    GetAttackSpeed(): number;
    /** @both */
    GetAttacksPerSecond(): number;
    GetAttackTarget(): CDOTA_BaseNPC | undefined;
    /**
     * Returns the average value of the minimum and maximum damage values.
     */
    GetAverageTrueAttackDamage(target: CDOTA_BaseNPC | undefined): number;
    GetBaseAttackRange(): number;
    /** @both */
    GetBaseAttackTime(): number;
    /**
     * Get the maximum attack damage of this unit.
     */
    GetBaseDamageMax(): number;
    /**
     * Get the minimum attack damage of this unit.
     */
    GetBaseDamageMin(): number;
    /**
     * Returns the vision range before modifiers.
     */
    GetBaseDayTimeVisionRange(): number;
    GetBaseHealthBarOffset(): number;
    GetBaseHealthRegen(): number;
    /**
     * Returns base magical armor value.
     *
     * @both
     */
    GetBaseMagicalResistanceValue(): number;
    /**
     * Gets the base max health value.
     */
    GetBaseMaxHealth(): number;
    /** @both */
    GetBaseMoveSpeed(): number;
    /**
     * Returns the vision range after modifiers.
     */
    GetBaseNightTimeVisionRange(): number;
    /**
     * This Mana regen is derived from constant bonuses like Basilius.
     */
    GetBonusManaRegen(): number;
    GetCastPoint(attack: boolean): number;
    /** @both */
    GetCastRangeBonus(): number;
    /**
     * Get clone source (Meepo Prime, if this is a Meepo).
     */
    GetCloneSource(): CDOTA_BaseNPC | undefined;
    /**
     * Returns the size of the collision padding around the hull.
     *
     * @both
     */
    GetCollisionPadding(): number;
    /** @both */
    GetCooldownReduction(): number;
    GetCreationTime(): number;
    /**
     * Get the ability this unit is currently casting.
     */
    GetCurrentActiveAbility(): CDOTABaseAbility | undefined;
    /**
     * Gets the current vision range.
     *
     * @both
     */
    GetCurrentVisionRange(): number;
    GetCursorCastTarget(): CDOTA_BaseNPC | undefined;
    GetCursorPosition(): Vector;
    GetCursorTargetingNothing(): boolean;
    /**
     * Get the maximum attack damage of this unit.
     *
     * @both
     */
    GetDamageMax(): number;
    /**
     * Get the minimum attack damage of this unit.
     *
     * @both
     */
    GetDamageMin(): number;
    /**
     * Returns the vision range after modifiers.
     *
     * @both
     */
    GetDayTimeVisionRange(): number;
    /**
     * Get the XP bounty on this unit.
     */
    GetDeathXP(): number;
    /**
     * Attack speed expressed as constant value.
     */
    GetDisplayAttackSpeed(): number;
    GetEvasion(): number;
    GetForceAttackTarget(): CDOTA_BaseNPC | undefined;
    /**
     * Get the gold bounty on this unit.
     */
    GetGoldBounty(): number;
    /** @both */
    GetHasteFactor(): number;
    /**
     * Returns integer amount of health missing from max.
     */
    GetHealthDeficit(): number;
    /**
     * Get the current health percent of the unit.
     *
     * @both
     */
    GetHealthPercent(): number;
    GetHealthRegen(): number;
    /**
     * Get the collision hull radius of this NPC.
     *
     * @both
     */
    GetHullRadius(): number;
    /**
     * Returns speed after all modifiers.
     *
     * @both
     */
    GetIdealSpeed(): number;
    /**
     * Returns speed after all modifiers, but excluding those that reduce speed.
     *
     * @both
     */
    GetIdealSpeedNoSlows(): number;
    /** @both */
    GetIncreasedAttackSpeed(): number;
    /**
     * Returns the initial waypoint goal for this NPC.
     */
    GetInitialGoalEntity(): CBaseEntity | undefined;
    /**
     * Get waypoint position for this NPC.
     */
    GetInitialGoalPosition(): Vector;
    /**
     * Returns nth item in inventory slot (index is zero based).
     */
    GetItemInSlot(slot: number): CDOTA_Item | undefined;
    GetLastAttackTime(): number;
    /**
     * Get the last time this NPC took damage.
     */
    GetLastDamageTime(): number;
    /**
     * Get the last game time that this unit switched to/from idle state.
     */
    GetLastIdleChangeTime(): number;
    /**
     * Returns the level of this unit.
     *
     * @both
     */
    GetLevel(): number;
    /**
     * Returns the player ID of the controlling player.
     */
    GetMainControllingPlayer(): number;
    /**
     * Get the mana on this unit.
     *
     * @both
     */
    GetMana(): number;
    /**
     * Get the percent of mana remaining.
     */
    GetManaPercent(): number;
    /** @both */
    GetManaRegen(): number;
    /**
     * Get the maximum gold bounty for this unit.
     */
    GetMaximumGoldBounty(): number;
    /**
     * Get the maximum mana of this unit.
     *
     * @both
     */
    GetMaxMana(): number;
    /**
     * Get the minimum gold bounty for this unit.
     */
    GetMinimumGoldBounty(): number;
    /** @both */
    GetModelRadius(): number;
    /**
     * How many modifiers does this unit have?
     */
    GetModifierCount(): number;
    /**
     * Get a modifier name by index.
     */
    GetModifierNameByIndex(index: number): string;
    /**
     * Gets the stack count of a given modifier.
     *
     * @both
     */
    GetModifierStackCount(modifierName: string, caster: CDOTA_BaseNPC): number;
    /** @both */
    GetMoveSpeedModifier(baseSpeed: number, returnUnslowed: boolean): number;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being
     * allowed to unkink their path.
     */
    GetMustReachEachGoalEntity(): boolean;
    /**
     * Get the name of this camp's neutral spawner.
     */
    GetNeutralSpawnerName(): string;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even
     * when it unphases.
     */
    GetNeverMoveToClearSpace(): boolean;
    /**
     * Returns the vision range after modifiers.
     *
     * @both
     */
    GetNightTimeVisionRange(): number;
    /** @both */
    GetOpposingTeamNumber(): DOTATeam_t;
    /**
     * Get the collision hull radius (including padding) of this NPC.
     *
     * @both
     */
    GetPaddedCollisionRadius(): number;
    /**
     * Returns base physical armor value.
     *
     * @both
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * Returns current physical armor value.
     *
     * @both
     */
    GetPhysicalArmorValue(ignoreBase: boolean): number;
    /**
     * Returns the player that owns this unit.
     */
    GetPlayerOwner(): CDOTAPlayerController;
    /**
     * Get the owner player ID for this unit.
     *
     * @both
     */
    GetPlayerOwnerID(): PlayerID;
    GetProjectileSpeed(): number;
    GetRangedProjectileName(): string;
    GetRangeToUnit(npc: CDOTA_BaseNPC): number;
    GetRemainingPathLength(): number;
    /** @both */
    GetSecondsPerAttack(): number;
    GetSpellAmplification(baseOnly: boolean): number;
    GetStatusResistance(): number;
    /**
     * Get how much gold has been spent on ability upgrades.
     *
     * @both
     */
    GetTotalPurchasedUpgradeGoldCost(): number;
    /** @both */
    GetUnitLabel(): string;
    /**
     * Get the name of this unit.
     *
     * @both
     */
    GetUnitName(): string;
    /**
     * Give mana to this unit, this can be used for mana gained by abilities or item
     * usage.
     */
    GiveMana(mana: number): void;
    /**
     * See whether this unit has an ability by name.
     */
    HasAbility(abilityName: string): boolean;
    HasAnyActiveAbilities(): boolean;
    /** @both */
    HasAttackCapability(): boolean;
    /** @both */
    HasFlyingVision(): boolean;
    /** @both */
    HasFlyMovementCapability(): boolean;
    /** @both */
    HasGroundMovementCapability(): boolean;
    /**
     * Does this unit have an inventory.
     */
    HasInventory(): boolean;
    /**
     * See whether this unit has an item by name.
     *
     * @both
     */
    HasItemInInventory(itemName: string): boolean;
    /**
     * Sees if this unit has a given modifier.
     *
     * @both
     */
    HasModifier(scriptName: string): boolean;
    /** @both */
    HasMovementCapability(): boolean;
    /** @both */
    HasScepter(): boolean;
    /**
     * Heal this unit.
     */
    Heal(amount: number, inflictor: CDOTABaseAbility | undefined): void;
    /**
     * Heal this unit (with more parameters).
     */
    HealWithParams(
        amount: number,
        inflictor: object,
        lifesteal: boolean,
        amplify: boolean,
        source: object,
        spellLifesteal: boolean,
    ): void;
    /**
     * Hold position.
     */
    Hold(): void;
    Interrupt(): void;
    InterruptChannel(): void;
    InterruptMotionControllers(findClearSpace: boolean): void;
    /**
     * Is this unit alive?
     */
    IsAlive(): boolean;
    /**
     * Is this unit an Ancient?
     *
     * @both
     */
    IsAncient(): boolean;
    /** @both */
    IsAttackImmune(): boolean;
    IsAttacking(): boolean;
    IsAttackingEntity(entity: CDOTA_BaseNPC): boolean;
    /**
     * Is this unit a Barracks?
     *
     * @both
     */
    IsBarracks(): this is CDOTA_BaseNPC_Building;
    /** @both */
    IsBlind(): boolean;
    IsBlockDisabled(): boolean;
    /**
     * Is this unit a boss?
     *
     * @both
     */
    IsBoss(): boolean;
    /**
     * Is this unit a Boss Creature? (used by custom games).
     */
    IsBossCreature(): boolean;
    /**
     * Is this unit a building?
     *
     * @both
     */
    IsBuilding(): this is CDOTA_BaseNPC_Building;
    /**
     * Is this unit currently channeling a spell?
     */
    IsChanneling(): boolean;
    /**
     * Is this unit a clone? (Meepo).
     */
    IsClone(): this is CDOTA_BaseNPC_Hero;
    /** @both */
    IsCommandRestricted(): boolean;
    /**
     * Is this unit a considered a hero for targeting purposes?
     *
     * @both
     */
    IsConsideredHero(): boolean;
    /**
     * Is this unit controlled by any non-bot player?
     *
     * @both
     */
    IsControllableByAnyPlayer(): boolean;
    /**
     * Is this unit a courier?
     *
     * @both
     */
    IsCourier(): this is CDOTA_Unit_Courier;
    /**
     * Is this a Creature type NPC?
     *
     * @both
     */
    IsCreature(): this is CDOTA_BaseNPC_Creature;
    /**
     * Is this unit a creep?
     *
     * @both
     */
    IsCreep(): boolean;
    /**
     * Is this unit a creep hero?
     *
     * @both
     */
    IsCreepHero(): boolean;
    IsCurrentlyHorizontalMotionControlled(): boolean;
    IsCurrentlyVerticalMotionControlled(): boolean;
    /** @both */
    IsDebuffImmune(): boolean;
    /** @both */
    IsDisarmed(): boolean;
    /** @both */
    IsDominated(): boolean;
    /** @both */
    IsEvadeDisabled(): boolean;
    /** @both */
    IsFeared(): boolean;
    /**
     * Is this unit an Ancient?
     *
     * @both
     */
    IsFort(): this is CDOTA_BaseNPC_Building;
    /** @both */
    IsFrozen(): boolean;
    /**
     * Is this a hero or hero illusion?
     *
     * @both
     */
    IsHero(): this is CDOTA_BaseNPC_Hero;
    /**
     * Is this a Hero Ward?
     */
    IsHeroWard(): boolean;
    /** @both */
    IsHexed(): boolean;
    /**
     * Is this creature currently idle?
     */
    IsIdle(): boolean;
    /** @both */
    IsIllusion(): boolean;
    /**
     * Ask whether this unit is in range of the specified shop.
     */
    IsInRangeOfShop(shopType: DOTA_SHOP_TYPE, physical: boolean): boolean;
    /**
     * Does this unit have an inventory.
     *
     * @client
     */
    IsInventoryEnabled(): boolean;
    /** @both */
    IsInvisible(): boolean;
    /** @both */
    IsInvulnerable(): boolean;
    /** @both */
    IsLowAttackPriority(): boolean;
    /** @both */
    IsMagicImmune(): boolean;
    IsMovementImpaired(): boolean;
    /**
     * Is this unit moving?
     *
     * @both
     */
    IsMoving(): boolean;
    /** @both */
    IsMuted(): boolean;
    /**
     * Is this a neutral?
     *
     * @both
     */
    IsNeutralUnitType(): boolean;
    /** @both */
    IsNightmared(): boolean;
    IsOpposingTeam(team: DOTATeam_t): boolean;
    /**
     * Is this unit a ward-type unit?
     *
     * @both
     */
    IsOther(): boolean;
    /** @both */
    IsOutOfGame(): boolean;
    /**
     * Is this unit owned by any non-bot player?
     *
     * @both
     */
    IsOwnedByAnyPlayer(): boolean;
    /**
     * Is this a phantom unit?
     *
     * @both
     */
    IsPhantom(): boolean;
    IsPhantomBlocker(): boolean;
    IsPhased(): boolean;
    IsPositionInRange(position: Vector, range: number): boolean;
    /**
     * Is this unit a ranged attacker?
     *
     * @both
     */
    IsRangedAttacker(): boolean;
    /**
     * Is this a real hero?
     *
     * @both
     */
    IsRealHero(): this is CDOTA_BaseNPC_Hero;
    IsReincarnating(): boolean;
    /** @both */
    IsRooted(): boolean;
    /**
     * Is this a shrine?
     */
    IsShrine(): this is CDOTA_BaseNPC_Building;
    /** @both */
    IsSilenced(): boolean;
    /** @both */
    IsSpeciallyDeniable(): boolean;
    /** @both */
    IsSpeciallyUndeniable(): boolean;
    /** @both */
    IsStrongIllusion(): boolean;
    /** @both */
    IsStunned(): boolean;
    /**
     * Is this unit summoned?
     *
     * @both
     */
    IsSummoned(): boolean;
    /** @both */
    IsTaunted(): boolean;
    IsTempestDouble(): this is CDOTA_BaseNPC_Hero;
    /**
     * Is this a tower?
     *
     * @both
     */
    IsTower(): this is CDOTA_BaseNPC_Building;
    IsUnableToMiss(): boolean;
    /** @both */
    IsUnselectable(): boolean;
    /** @client */
    IsUntargetable(): boolean;
    /** @both */
    IsUntargetableFrom(targettingSource: object): boolean;
    /**
     * Is this a Ward?
     */
    IsWard(): boolean;
    /**
     * Is this entity an Undying Zombie?
     */
    IsZombie(): boolean;
    /**
     * Kills this NPC, with the params Ability and Attacker.
     */
    Kill(ability: CDOTABaseAbility | undefined, attacker: CDOTA_BaseNPC | undefined): void;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    Kill(): never;
    MakeIllusion(): void;
    MakePhantomBlocker(): void;
    MakeVisibleDueToAttack(team: DOTATeam_t, radius: number): void;
    MakeVisibleToTeam(team: DOTATeam_t, duration: number): void;
    ManageModelChanges(): void;
    /**
     * Sets the health to a specific value, with optional flags or inflictors.
     */
    ModifyHealth(
        desiredHealthValue: number,
        ability: CDOTABaseAbility | undefined,
        lethal: boolean,
        additionalFlags: number,
    ): void;
    /**
     * Move to follow a unit.
     */
    MoveToNPC(npc: CDOTA_BaseNPC): void;
    /**
     * Give an item to another unit.
     */
    MoveToNPCToGiveItem(npc: CDOTA_BaseNPC, item: CDOTA_Item): void;
    /**
     * Issue a Move-To command.
     */
    MoveToPosition(dest: Vector): void;
    /**
     * Issue an Attack-Move-To command.
     */
    MoveToPositionAggressive(dest: Vector): void;
    /**
     * Move to a target to attack.
     */
    MoveToTargetToAttack(target: CDOTA_BaseNPC): void;
    /** @both */
    NoHealthBar(): boolean;
    /** @both */
    NoTeamMoveTo(): boolean;
    /** @both */
    NoTeamSelect(): boolean;
    NotifyWearablesOfModelChange(originalModel: boolean): void;
    /** @both */
    NotOnMinimap(): boolean;
    /** @both */
    NotOnMinimapForEnemies(): boolean;
    /** @both */
    NoUnitCollision(): boolean;
    /**
     * Tells the underlying AI to move in the given direction, skipping Dota orders.
     */
    OnCommandMoveToDirection(pos: Vector): void;
    /** @both */
    PassivesDisabled(): boolean;
    /**
     * Issue a Patrol-To command.
     */
    PatrolToPosition(dest: Vector): void;
    /**
     * Performs an attack on a target.
     */
    PerformAttack(
        target: CDOTA_BaseNPC,
        useCastAttackOrb: boolean,
        processProcs: boolean,
        skipCooldown: boolean,
        ignoreInvis: boolean,
        useProjectile: boolean,
        fakeAttack: boolean,
        neverMiss: boolean,
    ): void;
    /**
     * Pick up a dropped item.
     */
    PickupDroppedItem(item: CDOTA_Item): void;
    /**
     * Pick up a rune.
     */
    PickupRune(item: CDOTA_Item): void;
    /**
     * Play a VCD on the NPC.
     */
    PlayVCD(vcd: string): void;
    /** @both */
    ProvidesVision(): boolean;
    Purge(
        removePositiveBuffs: boolean,
        removeDebuffs: boolean,
        frameOnly: boolean,
        removeStuns: boolean,
        removeExceptions: boolean,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a delay.
     */
    QueueConcept<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueConcept<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a
     * delay, for the same team this speaker is on.
     */
    QueueTeamConcept<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueTeamConcept<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Queue a response system concept with the TLK_DOTA_CUSTOM concept, after a
     * delay, for the same team this speaker is on. Is not played for spectators.
     */
    QueueTeamConceptNoSpectators<TCallbackInfo>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: undefined,
        callbackInfo: TCallbackInfo,
    ): void;
    QueueTeamConceptNoSpectators<TCallbackInfo, TContext extends {}>(
        delay: number,
        criteriaTable: object,
        completionCallbackFn: (this: TContext, didActuallySpeak: boolean, callbackInfo: TCallbackInfo) => void,
        context: TContext,
        callbackInfo: TCallbackInfo,
    ): void;
    /**
     * Remove an ability from this unit by name.
     */
    RemoveAbility(abilityName: string): void;
    /**
     * Remove the passed ability from this unit.
     */
    RemoveAbilityByHandle(ability: CDOTABaseAbility): void;
    RemoveAbilityFromIndexByName(abilityName: string): void;
    /**
     * @param targets 0=all, 1=enemy, 2=ally
     */
    RemoveAllModifiers(targets: 0 | 1 | 2, now: boolean, permanent: boolean, death: boolean): void;
    /**
     * Removes all copies of a modifier.
     */
    RemoveAllModifiersOfName(scriptName: string): void;
    /**
     * Remove the given gesture activity.
     */
    RemoveGesture(activity: GameActivity_t): void;
    RemoveHorizontalMotionController(buff: CDOTA_Buff): void;
    /**
     * Removes the passed item from this unit's inventory and deletes it.
     */
    RemoveItem(item: CDOTA_Item): void;
    /**
     * Removes a modifier.
     */
    RemoveModifierByName(scriptName: string): void;
    /**
     * Removes a modifier that was cast by the given caster.
     */
    RemoveModifierByNameAndCaster(scriptName: string, caster: CDOTA_BaseNPC): void;
    /**
     * Remove the no draw flag.
     */
    RemoveNoDraw(): void;
    RemoveVerticalMotionController(buff: CDOTA_Buff): void;
    /**
     * Respawns the target unit if it can be respawned.
     */
    RespawnUnit(): void;
    /**
     * Gets this unit's attack range after all modifiers.
     *
     * @both
     */
    Script_GetAttackRange(): number;
    /**
     * Returns current magical armor value.
     *
     * @both
     */
    Script_GetMagicalArmorValue(useExperimentalFormula: boolean, inflictor: object): number;
    /** @both */
    Script_IsDeniable(): boolean;
    /**
     * Remove mana from this unit, this can be used for involuntary mana loss, not for
     * mana that is spent.
     */
    Script_ReduceMana(mana: number, ability: object): number;
    /**
     * Sells the passed item in this unit's inventory.
     */
    SellItem(item: CDOTA_Item): void;
    /**
     * Set the ability by index.
     */
    SetAbilityByIndex(ability: CDOTABaseAbility, index: number): void;
    SetAcquisitionRange(range: number): void;
    /**
     * Combat involving this creature will have this weight added to the music
     * calcuations.
     */
    SetAdditionalBattleMusicWeight(weight: number): void;
    /**
     * Set this unit's aggro target to a specified unit.
     */
    SetAggroTarget(aggroTarget: CDOTA_BaseNPC): void;
    SetAttackCapability(attackCapabilities: DOTAUnitAttackCapability_t): void;
    SetAttacking(attackTarget: CDOTA_BaseNPC | undefined): void;
    SetBaseAttackTime(baseAttackTime: number): void;
    /**
     * Sets the maximum base damage.
     */
    SetBaseDamageMax(max: number): void;
    /**
     * Sets the minimum base damage.
     */
    SetBaseDamageMin(min: number): void;
    SetBaseHealthRegen(healthRegen: number): void;
    /**
     * Sets base magical armor value.
     */
    SetBaseMagicalResistanceValue(magicalResistanceValue: number): void;
    SetBaseManaRegen(manaRegen: number): void;
    /**
     * Set a new base max health value.
     */
    SetBaseMaxHealth(baseMaxHealth: number): void;
    SetBaseMoveSpeed(moveSpeed: number): void;
    /**
     * Set whether or not this unit is allowed to sell items (bCanSellItems).
     */
    SetCanSellItems(canSell: boolean): void;
    /**
     * Set this unit controllable by the player with the passed ID.
     */
    SetControllableByPlayer(playerId: PlayerID, skipAdjustingPosition: boolean): void;
    SetCursorCastTarget(entity: CDOTA_BaseNPC | undefined): void;
    SetCursorPosition(location: Vector): void;
    SetCursorTargetingNothing(targetingNothing: boolean): void;
    SetCustomHealthLabel(label: string, r: number, g: number, b: number): void;
    /**
     * Set the base vision range.
     */
    SetDayTimeVisionRange(range: number): void;
    /**
     * Set the XP bounty on this unit.
     */
    SetDeathXP(xpBounty: number): void;
    SetFollowRange(followRange: number): void;
    SetForceAttackTarget(npc: CDOTA_BaseNPC | undefined): void;
    SetForceAttackTargetAlly(npc: CDOTA_BaseNPC | undefined): void;
    /**
     * Set if this unit has an inventory.
     */
    SetHasInventory(hasInventory: boolean): void;
    SetHealthBarOffsetOverride(offset: number): void;
    /**
     * Set the collision hull radius of this NPC.
     */
    SetHullRadius(hullRadius: number): void;
    SetIdleAcquire(idleAcquire: boolean): void;
    /**
     * Sets the initial waypoint goal for this NPC.
     */
    SetInitialGoalEntity(goal: CBaseEntity | undefined): void;
    /**
     * Set waypoint position for this NPC.
     */
    SetInitialGoalPosition(position: Vector): void;
    /**
     * Set the mana on this unit.
     */
    SetMana(mana: number): void;
    /**
     * Set the maximum gold bounty for this unit.
     */
    SetMaximumGoldBounty(goldBountyMax: number): void;
    /**
     * Set the maximum mana of this unit.
     */
    SetMaxMana(maxMana: number): void;
    /**
     * Set the minimum gold bounty for this unit.
     */
    SetMinimumGoldBounty(goldBountyMin: number): void;
    /**
     * Sets the stack count of a given modifier.
     */
    SetModifierStackCount(scriptName: string, caster: CDOTA_BaseNPC, stackCount: number): void;
    SetMoveCapability(moveCapabilities: DOTAUnitMoveCapability_t): void;
    /**
     * Set whether this NPC is required to reach each goal entity, rather than being
     * allowed to unkink their path.
     */
    SetMustReachEachGoalEntity(must: boolean): void;
    /**
     * If set to true, we will never attempt to move this unit to clear space, even
     * when it unphases.
     */
    SetNeverMoveToClearSpace(neverMoveToClearSpace: boolean): void;
    /**
     * Returns the vision range after modifiers.
     */
    SetNightTimeVisionRange(range: number): void;
    /**
     * Set the unit's origin.
     */
    SetOrigin(location: Vector): void;
    /**
     * Sets the original model of this entity, which it will tend to fall back to
     * anytime its state changes.
     */
    SetOriginalModel(modelName: string): void;
    /**
     * Sets base physical armor value.
     */
    SetPhysicalArmorBaseValue(physicalArmorValue: number): void;
    SetRangedProjectileName(projectileName: string): void;
    /**
     * Sets the client side map reveal radius for this unit.
     */
    SetRevealRadius(revealRadius: number): void;
    SetShouldComputeRemainingPathLength(compute: boolean): void;
    SetShouldDoFlyHeightVisual(shouldVisuallyFly: boolean): void;
    SetStolenScepter(stolenScepter: boolean): void;
    SetUnitCanRespawn(canRespawn: boolean): void;
    SetUnitName(name: string): void;
    ShouldIdleAcquire(): boolean;
    /**
     * Speak a response system concept with the TLK_DOTA_CUSTOM concept.
     */
    SpeakConcept(criteriaTable: object): void;
    /**
     * Spend mana from this unit, this can be used for spending mana from abilities or
     * item usage.
     */
    SpendMana(manaSpent: number, ability: CDOTABaseAbility): void;
    /**
     * Add the given gesture activity.
     */
    StartGesture(activity: GameActivity_t): void;
    /**
     * Add the given gesture activity faded according to its sequence settings.
     */
    StartGestureFadeWithSequenceSettings(activity: GameActivity_t): void;
    /**
     * Add the given gesture activity faded according to to the parameters.
     */
    StartGestureWithFade(activity: GameActivity_t, fadeIn: number, fadeOut: number): void;
    /**
     * Add the given gesture activity faded according to to the parameters and with a
     * playback rate override.
     */
    StartGestureWithFadeAndPlaybackRate(activity: number, fadeIn: number, fadeOut: number, rate: number): void;
    /**
     * Add the given gesture activity with a playback rate override.
     */
    StartGestureWithPlaybackRate(activity: GameActivity_t, rate: number): void;
    /**
     * Stop the current order.
     */
    Stop(): void;
    StopFacing(): void;
    /**
     * Swaps the slots of the two passed abilities and sets them enabled/disabled.
     */
    SwapAbilities(abilityName1: string, abilityName2: string, enable1: boolean, enable2: boolean): void;
    /**
     * Swap the contents of two item slots (slot1, slot2).
     */
    SwapItems(slot1: number, slot2: number): void;
    /**
     * Removed the passed item from this unit's inventory. Returns the passed item.
     */
    TakeItem(item: CDOTA_Item): CDOTA_Item;
    TimeUntilNextAttack(): number;
    TriggerModifierDodge(): boolean;
    TriggerSpellAbsorb(ability: CDOTABaseAbility): boolean;
    /**
     * Trigger the Lotus Orb-like effect.(hAbility).
     */
    TriggerSpellReflect(ability: CDOTABaseAbility): void;
    /**
     * Makes the first ability unhidden, and puts it where second ability currently
     * is. Will do nothing if the first ability is already unhidden and in a valid
     * slot.
     */
    UnHideAbilityToSlot(abilityName: string, replacedAbilityName: string): void;
    /**
     * Can the unit respawn?
     *
     * @both
     */
    UnitCanRespawn(): boolean;
    WasKilledPassively(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Building: DotaConstructor<CDOTA_BaseNPC_Building>;

declare interface CDOTA_BaseNPC_Building extends CDOTA_BaseNPC {
    /**
     * Get the invulnerability count for a building.
     */
    GetInvulnCount(): number;
    /**
     * Set the invulnerability counter of this building.
     */
    SetInvulnCount(invulnCount: number): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Creature: DotaConstructor<CDOTA_BaseNPC_Creature>;

declare interface CDOTA_BaseNPC_Creature extends CDOTA_BaseNPC {
    /**
     * Add the specified item drop to this creature.
     */
    AddItemDrop(dropData: object): void;
    /**
     * Level the creature up by the specified number of levels.
     */
    CreatureLevelUp(levels: number): void;
    /**
     * Set creature's current disable resistance.
     */
    GetDisableResistance(): number;
    /**
     * Set creature's current disable resistance from ultimates.
     */
    GetUltimateDisableResistance(): number;
    /**
     * Is this unit a champion?
     */
    IsChampion(): boolean;
    /**
     * Is this creature respawning?
     */
    IsReincarnating(): boolean;
    /**
     * Remove all item drops from this creature.
     */
    RemoveAllItemDrops(): void;
    /**
     * Does this creature aggro on the owner of the attacking unit when taking damage?
     */
    SetAggroOnOwnerOnDamage(aggro: boolean): void;
    /**
     * Set the armor gained per level on this creature.
     */
    SetArmorGain(armorGain: number): void;
    /**
     * Set the attack time gained per level on this creature.
     */
    SetAttackTimeGain(attackTimeGain: number): void;
    /**
     * Set the bounty gold gained per level on this creature.
     */
    SetBountyGain(bountyGain: number): void;
    /**
     * Flag this unit as a champion creature.
     */
    SetChampion(isChampion: boolean): void;
    /**
     * Set the damage gained per level on this creature.
     */
    SetDamageGain(damageGain: number): void;
    /**
     * Set creature's current disable resistance.
     */
    SetDisableResistance(disableResistance: number): void;
    /**
     * Set the disable resistance gained per level on this creature.
     */
    SetDisableResistanceGain(disableResistanceGain: number): void;
    /**
     * Set the hit points gained per level on this creature.
     */
    SetHPGain(hpGain: number): void;
    /**
     * Set the hit points regen gained per level on this creature.
     */
    SetHPRegenGain(hpRegenGain: number): void;
    /**
     * Set the magic resistance gained per level on this creature.
     */
    SetMagicResistanceGain(magicResistanceGain: number): void;
    /**
     * Set the mana points gained per level on this creature.
     */
    SetManaGain(manaGain: number): void;
    /**
     * Set the mana points regen gained per level on this creature.
     */
    SetManaRegenGain(manaRegenGain: number): void;
    /**
     * Set the move speed gained per level on this creature.
     */
    SetMoveSpeedGain(moveSpeedGain: number): void;
    /**
     * Set whether creatures require reaching their end path before becoming idle.
     */
    SetRequiresReachingEndPath(requiresReachingEndPath: boolean): void;
    /**
     * Set creature's current disable resistance from ultimates.
     */
    SetUltimateDisableResistance(ultDisableResistance: number): void;
    /**
     * Set the XP gained per level on this creature.
     */
    SetXPGain(xpGain: number): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Hero: DotaConstructor<CDOTA_BaseNPC_Hero>;

/** @client */
declare const C_DOTA_BaseNPC_Hero: typeof CDOTA_BaseNPC_Hero;

declare interface CDOTA_BaseNPC_Hero extends CDOTA_BaseNPC {
    AddExperience(
        xp: number,
        reason: EDOTA_ModifyXP_Reason,
        applyBotDifficultyScaling: boolean,
        incrementTotal: boolean,
    ): boolean;
    /**
     * Spend the gold and buyback with this hero.
     */
    Buyback(): void;
    /**
     * Recalculate all stats after the hero gains stats.
     */
    CalculateStatBonus(force: boolean): void;
    /**
     * Returns boolean value result of buyback gold limit time less than game time.
     */
    CanEarnGold(): boolean;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    ClearStreak(): void;
    /**
     * Gets the current unspent ability points.
     */
    GetAbilityPoints(): number;
    GetAdditionalOwnedUnits(): CDOTA_BaseNPC[];
    /** @both */
    GetAgility(): number;
    GetAgilityGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetAssists(): number;
    GetAttacker(index: number): number;
    GetBaseAgility(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMax(): number;
    /**
     * Hero damage is also affected by attributes.
     */
    GetBaseDamageMin(): number;
    GetBaseIntellect(): number;
    /**
     * Returns the base mana regen.
     */
    GetBaseManaRegen(): number;
    GetBaseStrength(): number;
    GetBonusDamageFromPrimaryStat(): number;
    /**
     * Return float value for the amount of time left on cooldown for this hero's
     * buyback.
     */
    GetBuybackCooldownTime(): number;
    /**
     * Return integer value for the gold cost of a buyback.
     */
    GetBuybackCost(returnOldValues: boolean): number;
    /**
     * Returns the amount of time gold gain is limited after buying back.
     */
    GetBuybackGoldLimitTime(): number;
    /**
     * Returns the amount of XP.
     */
    GetCurrentXP(): number;
    GetDeathGoldCost(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDeaths(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetDenies(): number;
    /**
     * Returns gold amount for the player owning this hero.
     */
    GetGold(): number;
    GetGoldBounty(): number;
    GetHeroID(): number;
    /**
     * Hero attack speed is also affected by agility.
     */
    GetIncreasedAttackSpeed(): number;
    /** @both */
    GetIntellect(): number;
    GetIntellectGain(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetKills(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetLastHits(): number;
    GetMostRecentDamageTime(): number;
    GetMultipleKillCount(): number;
    GetNumAttackers(): number;
    GetNumItemsInInventory(): number;
    GetNumItemsInStash(): number;
    /**
     * Hero armor is affected by attributes.
     */
    GetPhysicalArmorBaseValue(): number;
    /**
     * Returns player ID of the player owning this hero.
     */
    GetPlayerID(): PlayerID;
    GetPrimaryAttribute(): Attributes;
    GetPrimaryStatValue(): number;
    /**
     * If hero is under Replicate effect, returns original hero entity.
     */
    GetReplicatingOtherHero(): CDOTA_BaseNPC_Hero | undefined;
    /**
     * Is this hero prevented from respawning?
     */
    GetRespawnsDisabled(): boolean;
    GetRespawnTime(): number;
    /**
     * Value is stored in PlayerResource.
     */
    GetStreak(): number;
    /** @both */
    GetStrength(): number;
    GetStrengthGain(): number;
    GetTimeUntilRespawn(): number;
    /**
     * Get wearable entity in slot (slot).
     */
    GetTogglableWearable(slotType: DOTASlotType_t): CBaseFlex | undefined;
    HasAnyAvailableInventorySpace(): boolean;
    HasFlyingVision(): boolean;
    HasOwnerAbandoned(): boolean;
    HasRoomForItem(itemName: string, includeStashCombines: boolean, allowSelling: boolean): number;
    /**
     * Levels up the hero, true or false to play effects.
     */
    HeroLevelUp(playEffects: boolean): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementAssists(killerId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDeaths(killerId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementDenies(): void;
    /**
     * Passed ID is for the victim, killer ID is ID of the current hero.  Value is
     * stored in PlayerResource.
     */
    IncrementKills(victimId: PlayerID): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitMultikill(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHits(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementLastHitStreak(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementNearbyCreepDeaths(): void;
    /**
     * Value is stored in PlayerResource.
     */
    IncrementStreak(): void;
    IsBuybackDisabledByReapersScythe(): boolean;
    IsReincarnating(): boolean;
    IsStashEnabled(): boolean;
    KilledHero(hero: CDOTA_BaseNPC_Hero, inflictor: CDOTABaseAbility | undefined): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyAgility(newAgility: number): void;
    /**
     * Gives this hero some gold.
     */
    ModifyGold(goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    /**
     * Gives this hero some gold, using the gold filter if extra filtering is on.
     */
    ModifyGoldFiltered(goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyIntellect(newIntellect: number): void;
    /**
     * Adds passed value to base attribute value, then calls CalculateStatBonus.
     */
    ModifyStrength(newStrength: number): void;
    PerformTaunt(): void;
    RecordLastHit(): void;
    /**
     * Respawn this hero.
     */
    RespawnHero(buyBack: boolean, respawnPenalty: boolean): void;
    /**
     * Sets the current unspent ability points.
     */
    SetAbilityPoints(points: number): void;
    SetBaseAgility(agility: number): void;
    SetBaseIntellect(intellect: number): void;
    SetBaseStrength(strength: number): void;
    SetBotDifficulty(difficulty: number): void;
    /**
     * Sets the buyback cooldown time.
     */
    SetBuybackCooldownTime(time: number): void;
    SetBuyBackDisabledByReapersScythe(buybackDisabled: boolean): void;
    /**
     * Set the amount of time gold gain is limited after buying back.
     */
    SetBuybackGoldLimitTime(time: number): void;
    /**
     * Sets a custom experience value for this hero.  Note, GameRules boolean must be
     * set for this to work!
     */
    SetCustomDeathXP(value: number): void;
    /**
     * Sets the gold amount for the player owning this hero.
     */
    SetGold(gold: number, reliable: boolean): void;
    SetPlayerID(playerId: PlayerID): void;
    /**
     * Set this hero's primary attribute value.
     */
    SetPrimaryAttribute(primaryAttribute: Attributes): void;
    SetRespawnPosition(origin: Vector): void;
    /**
     * Prevent this hero from respawning.
     */
    SetRespawnsDisabled(disableRespawns: boolean): void;
    SetStashEnabled(enabled: boolean): void;
    SetTimeUntilRespawn(time: number): void;
    ShouldDoFlyHeightVisual(): boolean;
    SpendGold(cost: number, reason: EDOTA_ModifyGold_Reason): void;
    /**
     * This upgrades the passed ability if it exists and the hero has enough ability
     * points.
     */
    UpgradeAbility(ability: CDOTABaseAbility): void;
    WillReincarnate(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_MangoTree: DotaConstructor<CDOTA_BaseNPC_MangoTree>;

declare interface CDOTA_BaseNPC_MangoTree extends CDOTA_BaseNPC_Building {
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_NeutralItemStash: DotaConstructor<CDOTA_BaseNPC_NeutralItemStash>;

declare interface CDOTA_BaseNPC_NeutralItemStash extends CDOTA_BaseNPC_Building {
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Shop: DotaConstructor<CDOTA_BaseNPC_Shop>;

declare interface CDOTA_BaseNPC_Shop extends CDOTA_BaseNPC_Building {
    /**
     * Get the DOTA_SHOP_TYPE.
     */
    GetShopType(): DOTA_SHOP_TYPE;
    /**
     * Set the DOTA_SHOP_TYPE.
     */
    SetShopType(shopType: DOTA_SHOP_TYPE): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Trap_Ward: DotaConstructor<CDOTA_BaseNPC_Trap_Ward>;

declare interface CDOTA_BaseNPC_Trap_Ward extends CDOTA_BaseNPC_Creature {
    /**
     * Get the trap target for this entity.
     */
    GetTrapTarget(): Vector;
    /**
     * Set the animation sequence for this entity.
     */
    SetAnimation(animation: string): void;
    __kind__: 'instance';
}

declare const CDOTA_BaseNPC_Watch_Tower: DotaConstructor<CDOTA_BaseNPC_Watch_Tower>;

declare interface CDOTA_BaseNPC_Watch_Tower extends CDOTA_BaseNPC_Building {
    /**
     * The name of the ability used when triggering interaction on the outpost.
     */
    GetInteractAbilityName(): string;
    /**
     * The name of the ability used when triggering interaction on the outpost.
     */
    SetInteractAbilityName(interactAbilityName: string): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Buff: DotaConstructor<CDOTA_Buff>;

declare interface CDOTA_Buff {
    /** @both */
    AddParticle(
        index: number,
        destroyImmediately: boolean,
        statusEffect: boolean,
        priority: number,
        heroEffect: boolean,
        overheadEffect: boolean,
    ): void;
    /** @both */
    CheckStateToTable(table: object): void;
    /**
     * Decrease this modifier's stack count by 1.
     *
     * @both
     */
    DecrementStackCount(): void;
    /**
     * Run all associated destroy functions, then remove the modifier.
     *
     * @both
     */
    Destroy(): void;
    /** @both */
    DestroyOnExpire(): boolean;
    /**
     * Run all associated refresh functions on this modifier as if it was re-applied.
     *
     * @both
     */
    ForceRefresh(): void;
    /**
     * Get the ability that generated the modifier.
     *
     * @both
     */
    GetAbility(): CDOTABaseAbility | undefined;
    /**
     * Returns aura stickiness (default 0.5).
     *
     * @both
     */
    GetAuraDuration(): number;
    /**
     * Returns the owner of the aura modifier, that applied this modifier. Always
     * `nil` on the client.
     *
     * @both
     */
    GetAuraOwner(): CDOTA_BaseNPC | undefined;
    /**
     * Get the owner of the ability responsible for the modifier.
     *
     * @both
     */
    GetCaster(): CDOTA_BaseNPC | undefined;
    /** @both */
    GetClass(): string;
    /** @both */
    GetCreationTime(): number;
    /** @both */
    GetDieTime(): number;
    /** @both */
    GetDuration(): number;
    /** @both */
    GetElapsedTime(): number;
    /** @both */
    GetLastAppliedTime(): number;
    /** @both */
    GetName(): string;
    /**
     * Get the unit the modifier is parented to.
     *
     * @both
     */
    GetParent(): CDOTA_BaseNPC;
    /** @both */
    GetRemainingTime(): number;
    /** @both */
    GetSerialNumber(): number;
    /** @both */
    GetStackCount(): number;
    /** @both */
    HasFunction(func: modifierfunction): boolean;
    /**
     * Increase this modifier's stack count by 1.
     *
     * @both
     */
    IncrementStackCount(): void;
    /** @both */
    IsDebuff(): boolean;
    /** @both */
    IsHexDebuff(): boolean;
    /** @both */
    IsStunDebuff(): boolean;
    SendBuffRefreshToClients(): void;
    /** @both */
    SetDuration(duration: number, informClient: boolean): void;
    /** @both */
    SetOverheadEffectOffset(offset: number): boolean;
    /** @both */
    SetStackCount(count: number): void;
    /**
     * Start this modifier's think function (OnIntervalThink) with the given interval
     * (float).  To stop, call with -1.
     *
     * @both
     */
    StartIntervalThink(interval: number): void;
    __kind__: 'instance';
}

declare const CustomUI: CDOTA_CustomUIManager;

declare const CDOTA_CustomUIManager: DotaConstructor<CDOTA_CustomUIManager>;

declare interface CDOTA_CustomUIManager {
    /**
     * Create a new custom UI HUD element for the specified player(s).
     */
    DynamicHud_Create(playerId: PlayerID, elementId: string, layoutFileName: string, dialogVariables: object): void;
    /**
     * Destroy a custom hud element.
     */
    DynamicHud_Destroy(playerId: PlayerID, elementId: string): void;
    /**
     * Add or modify dialog variables for an existing custom hud element.
     */
    DynamicHud_SetDialogVariables(playerId: PlayerID, elementId: string, dialogVariables: object): void;
    /**
     * Toggle the visibility of an existing custom hud element.
     */
    DynamicHud_SetVisible(playerId: PlayerID, elementId: string, visible: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Item: DotaConstructor<CDOTA_Item>;

/** @client */
declare const C_DOTA_Item: typeof CDOTA_Item;

declare interface CDOTA_Item extends CDOTABaseAbility {
    CanBeUsedOutOfInventory(): boolean;
    /** @client */
    CanOnlyPlayerHeroPickup(): boolean;
    /**
     * Get the container for this item.
     */
    GetContainer(): CDOTA_Item_Physical | undefined;
    GetCost(): number;
    /**
     * Get the number of charges this item currently has.
     *
     * @both
     */
    GetCurrentCharges(): number;
    /**
     * Get the initial number of charges this item has.
     *
     * @both
     */
    GetInitialCharges(): number;
    /** @both */
    GetItemSlot(): -1 | DOTAScriptInventorySlot_t;
    /**
     * Gets whether item is unequipped or ready.
     */
    GetItemState(): number;
    /**
     * Get the parent for this item.
     */
    GetParent(): object;
    /**
     * Get the purchaser for this item.
     */
    GetPurchaser(): CDOTA_BaseNPC | undefined;
    /**
     * Get the purchase time of this item.
     */
    GetPurchaseTime(): number;
    /**
     * Get the number of secondary charges this item currently has.
     *
     * @both
     */
    GetSecondaryCharges(): number;
    /** @both */
    GetShareability(): EShareAbility;
    /**
     * Get the number of valueless charges this item currently has.
     */
    GetValuelessCharges(): number;
    /** @both */
    IsAlertableItem(): boolean;
    /** @both */
    IsCastOnPickup(): boolean;
    IsCombinable(): boolean;
    IsCombineLocked(): boolean;
    /** @both */
    IsDisassemblable(): boolean;
    /** @both */
    IsDroppable(): boolean;
    /** @both */
    IsInBackpack(): boolean;
    /** @both */
    IsItem(): boolean;
    /** @both */
    IsKillable(): boolean;
    /** @both */
    IsMuted(): boolean;
    IsNeutralDrop(): boolean;
    /**
     * Is this a permanent item?
     *
     * @both
     */
    IsPermanent(): boolean;
    /** @both */
    IsPurchasable(): boolean;
    /** @both */
    IsRecipe(): boolean;
    /** @both */
    IsRecipeGenerated(): boolean;
    /** @both */
    IsSellable(): boolean;
    /** @both */
    IsStackable(): boolean;
    LaunchLoot(autoUse: boolean, height: number, duration: number, endPoint: Vector, teleportOwner: object): void;
    LaunchLootInitialHeight(
        autoUse: boolean,
        initialHeight: number,
        launchHeight: number,
        duration: number,
        endPoint: Vector,
    ): void;
    LaunchLootRequiredHeight(
        autoUse: boolean,
        requiredHeight: number,
        height: number,
        duration: number,
        endPoint: Vector,
    ): void;
    /**
     * Modifies the number of valueless charges on this item.
     */
    ModifyNumValuelessCharges(charges: number): void;
    OnEquip(): void;
    OnUnequip(): void;
    /** @both */
    RequiresCharges(): boolean;
    SetCanBeUsedOutOfInventory(value: boolean): void;
    SetCastOnPickup(castOnPickUp: boolean): void;
    SetCombineLocked(combineLocked: boolean): void;
    /**
     * Set the number of charges on this item.
     */
    SetCurrentCharges(charges: number): void;
    SetDroppable(droppable: boolean): void;
    /**
     * Sets whether item is unequipped or ready.
     */
    SetItemState(state: number): void;
    SetOnlyPlayerHeroPickup(onlyPlayerHero: boolean): void;
    /**
     * Set the purchaser of record for this item.
     */
    SetPurchaser(purchaser: CDOTA_BaseNPC | undefined): void;
    /**
     * Set the purchase time of this item.
     */
    SetPurchaseTime(time: number): void;
    /**
     * Set the number of secondary charges on this item.
     */
    SetSecondaryCharges(charges: number): void;
    SetSellable(sellable: boolean): void;
    SetShareability(shareability: EShareAbility): void;
    SetStacksWithOtherOwners(stacksWithOtherOwners: boolean): void;
    SpendCharge(): void;
    StacksWithOtherOwners(): boolean;
    /**
     * Think this item.
     */
    Think(): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_BagOfGold: DotaConstructor<CDOTA_Item_BagOfGold>;

declare interface CDOTA_Item_BagOfGold extends CDOTA_Item {
    /**
     * Set the life time of this item.
     */
    SetLifeTime(time: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_DataDriven: DotaConstructor<CDOTA_Item_DataDriven>;

declare interface CDOTA_Item_DataDriven extends CDOTA_Item {
    /**
     * Applies a data driven modifier to the target.
     */
    ApplyDataDrivenModifier(
        caster: CDOTA_BaseNPC,
        target: CDOTA_BaseNPC,
        modifierName: string,
        modifierTable: object | undefined,
    ): void;
    /**
     * Applies a data driven thinker at the location.
     */
    ApplyDataDrivenThinker(
        caster: CDOTA_BaseNPC,
        location: Vector,
        modifierName: string,
        modifierTable: object | undefined,
    ): CDOTA_Buff;
    __kind__: 'instance';
}

declare const CDOTA_Item_EmptyBottle: DotaConstructor<CDOTA_Item_EmptyBottle>;

/** @client */
declare const C_DOTA_Item_EmptyBottle: typeof CDOTA_Item_EmptyBottle;

declare interface CDOTA_Item_EmptyBottle extends CDOTA_Item {
    /**
     * Clear the stored rune.
     */
    ClearStoredRune(): void;
    /**
     * Place a rune in the bottle.
     */
    OnRune(runeType: number): boolean;
    /**
     * Set the stored rune.
     */
    SetStoredRune(runeType: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_Lua: DotaConstructor<CDOTA_Item_Lua>;

/** @client */
declare const C_DOTA_Item_Lua: typeof CDOTA_Item_Lua;

declare interface CDOTA_Item_Lua extends CDOTA_Item {
    /**
     * Returns true if this item can be picked up by the target unit.
     *
     * @param unit Unit trying to pick up the item.
     */
    CanUnitPickUp(unit: CDOTA_BaseNPC): boolean;
    /**
     * Determine whether an issued command with no target is valid.
     *
     * @both
     */
    CastFilterResult(): UnitFilterResult;
    /**
     * Determine whether an issued command on a location is valid.
     *
     * @both
     */
    CastFilterResultLocation(location: Vector): UnitFilterResult;
    /**
     * Determine whether an issued command on a target is valid.
     *
     * @both
     */
    CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult;
    /**
     * Allows code overriding of the item texture shown in the HUD.
     *
     * @client
     */
    GetAbilityTextureName(): string;
    /**
     * Controls the size of the AOE casting cursor.
     *
     * @client
     */
    GetAOERadius(): number;
    /**
     * Returns abilities that are stolen simultaneously, or otherwise related in
     * functionality.
     */
    GetAssociatedPrimaryAbilities(): string;
    /**
     * Returns other abilities that are stolen simultaneously, or otherwise related in
     * functionality.  Generally hidden abilities.
     */
    GetAssociatedSecondaryAbilities(): string;
    /**
     * Return cast behavior type of this ability.
     *
     * @both
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * Return cast range of this ability.
     *
     * @both
     */
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number;
    /**
     * Return health cost per second of channeling at the given level (-1 is current).
     *
     * @both
     */
    GetChannelledHealthCostPerSecond(level: number): number;
    /**
     * Return mana cost at the given level per second while channeling (-1 is current).
     *
     * @both
     */
    GetChannelledManaCostPerSecond(level: number): number;
    /**
     * Return the channel start time of this ability.
     *
     * @both
     */
    GetChannelStartTime(): number;
    /**
     * Return the channel time of this ability.
     *
     * @both
     */
    GetChannelTime(): number;
    /**
     * Return who hears speech when this spell is cast.
     */
    GetConceptRecipientType(): number;
    /**
     * Return cooldown of this ability.
     *
     * @both
     */
    GetCooldown(level: number): number;
    /**
     * Return the error string of a failed command with no target.
     *
     * @both
     */
    GetCustomCastError(): string;
    /**
     * Return the error string of a failed command on a location.
     *
     * @both
     */
    GetCustomCastErrorLocation(location: Vector): string;
    /**
     * Return the error string of a failed command on a target.
     *
     * @both
     */
    GetCustomCastErrorTarget(target: CDOTA_BaseNPC): string;
    /**
     * (DOTA_INVALID_ORDERS nReason) Return the error string of a failed order.
     *
     * @both
     */
    GetCustomHudErrorMessage(reason: number): string;
    /**
     * Return cast range of this ability, taking modifiers into account.
     *
     * @both
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    /**
     * Return gold cost at the given level (-1 is current).
     *
     * @both
     */
    GetGoldCost(level: number): number;
    /**
     * Return health cost at the given level (-1 is current).
     *
     * @both
     */
    GetHealthCost(level: number): number;
    /**
     * Returns the name of the modifier applied passively by this ability.
     */
    GetIntrinsicModifierName(): string;
    /**
     * Return mana cost at the given level (-1 is current).
     *
     * @both
     */
    GetManaCost(level: number): number;
    /**
     * Return the animation rate of the cast animation.
     */
    GetPlaybackRateOverride(): number;
    /**
     * Returns true if this ability can be used when not on the action panel.
     */
    IsHiddenAbilityCastable(): boolean;
    /**
     * Returns true if this ability is hidden when stolen by Spell Steal.
     */
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns whether this item is muted or not.
     *
     * @both
     */
    IsMuted(): boolean;
    /**
     * Returns true if this ability is refreshed by Refresher Orb.
     */
    IsRefreshable(): boolean;
    /**
     * Returns true if this ability can be stolen by Spell Steal.
     */
    IsStealable(): boolean;
    /**
     * Cast time did not complete successfully.
     */
    OnAbilityPhaseInterrupted(): void;
    /**
     * Cast time begins (return true for successful cast).
     */
    OnAbilityPhaseStart(): boolean;
    /**
     * Channel finished.
     */
    OnChannelFinish(interrupted: boolean): void;
    /**
     * Channeling is taking place.
     */
    OnChannelThink(interval: number): void;
    /**
     * Runs when item's charge count changes.
     */
    OnChargeCountChanged(): void;
    /**
     * Caster (hero only) gained a level, skilled an ability, or received a new stat
     * bonus.
     */
    OnHeroCalculateStatBonus(): void;
    /**
     * A hero has died in the vicinity (ie Urn), takes table of params.
     */
    OnHeroDiedNearby(unit: CDOTA_BaseNPC, attacker: CDOTA_BaseNPC, event: object): void;
    /**
     * Caster gained a level.
     */
    OnHeroLevelUp(): void;
    /**
     * Caster inventory changed.
     */
    OnInventoryContentsChanged(): void;
    /**
     * Caster equipped item.
     */
    OnItemEquipped(item: CDOTA_Item): void;
    /**
     * Caster died.
     */
    OnOwnerDied(): void;
    /**
     * Caster respawned or spawned for the first time.
     */
    OnOwnerSpawned(): void;
    /**
     * Projectile has collided with a given target or reached its destination. If
     * 'true` is returned, projectile would be destroyed.
     */
    OnProjectileHit(target: CDOTA_BaseNPC | undefined, location: Vector): boolean | void;
    /**
     * Projectile is actively moving.
     */
    OnProjectileThink(location: Vector): void;
    /**
     * Cast time finished, spell effects begin.
     */
    OnSpellStart(): void;
    /**
     * Special behavior when stolen by Spell Steal.
     */
    OnStolen(sourceAbility: CDOTABaseAbility): void;
    /**
     * Ability is toggled on/off.
     */
    OnToggle(): void;
    /**
     * Special behavior when lost by Spell Steal.
     */
    OnUnStolen(): void;
    /**
     * Ability gained a level.
     */
    OnUpgrade(): void;
    /**
     * Returns true if this ability will generate magic stick charges for nearby
     * enemies.
     */
    ProcsMagicStick(): boolean;
    /**
     * Return the type of speech used.
     */
    SpeakTrigger(): number;
    /** @abstract */
    Precache?(context: CScriptPrecacheContext): void;
    /**
     * Called when ability entity is created, after Init.
     *
     * @abstract
     * @both
     */
    Spawn?(): void;
    __kind__: 'instance';
}

declare const CDOTA_Item_Physical: DotaConstructor<CDOTA_Item_Physical>;

declare interface CDOTA_Item_Physical extends CBaseAnimatingActivity {
    /**
     * Returned the contained item.
     */
    GetContainedItem(): CDOTA_Item;
    /**
     * Returns the game time when this item was created in the world.
     */
    GetCreationTime(): number;
    /**
     * Set the contained item.
     */
    SetContainedItem(item: CDOTA_Item): void;
    __kind__: 'instance';
}

declare const CDOTA_ItemSpawner: DotaConstructor<CDOTA_ItemSpawner>;

declare interface CDOTA_ItemSpawner extends CBaseEntity {
    /**
     * Returns the item name.
     */
    GetItemName(): string;
    __kind__: 'instance';
}

declare const CDOTA_MapTree: DotaConstructor<CDOTA_MapTree>;

declare interface CDOTA_MapTree extends CBaseEntity {
    /**
     * Cuts down this tree.
     */
    CutDown(teamNumberKnownTo: number): void;
    /**
     * Cuts down this tree.
     */
    CutDownRegrowAfter(regrowAfter: number, teamNumberKnownTo: number): void;
    /**
     * Grows back the tree if it was cut down.
     */
    GrowBack(): void;
    /**
     * Returns true if the tree is standing, false if it has been cut down.
     */
    IsStanding(): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua: DotaConstructor<CDOTA_Modifier_Lua>;

declare interface CDOTA_Modifier_Lua extends CDOTA_Buff {
    /**
     * True/false if this modifier is active on illusions.
     *
     * @both
     */
    AllowIllusionDuplicate(): boolean;
    /** @both */
    CanParentBeAutoAttacked(): boolean;
    /**
     * True/false if this buff is removed when the duration expires.
     *
     * @both
     */
    DestroyOnExpire(): boolean;
    /**
     * Return the types of attributes applied to this modifier.
     *
     * @both
     */
    GetAttributes(): DOTAModifierAttribute_t;
    /**
     * Returns aura stickiness.
     *
     * @both
     */
    GetAuraDuration(): number;
    /**
     * Return true/false if this entity should receive the aura under specific
     * conditions.
     *
     * @both
     */
    GetAuraEntityReject(entity: CDOTA_BaseNPC): boolean;
    /**
     * Return the range around the parent this aura tries to apply its buff.
     *
     * @both
     */
    GetAuraRadius(): number;
    /**
     * Return the unit flags this aura respects when placing buffs.
     *
     * @both
     */
    GetAuraSearchFlags(): DOTA_UNIT_TARGET_FLAGS;
    /**
     * Return the teams this aura applies its buff to.
     *
     * @both
     */
    GetAuraSearchTeam(): DOTA_UNIT_TARGET_TEAM;
    /**
     * Return the unit classifications this aura applies its buff to.
     *
     * @both
     */
    GetAuraSearchType(): DOTA_UNIT_TARGET_TYPE;
    /**
     * A Modifier that listens to MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE has to
     * have a GetCritDamage implementation so we can know when to evaluate it. Value
     * should be in 'times the original value format' e.g: 1.5 not 150.
     *
     * @both
     */
    GetCritDamage(): number;
    /**
     * Return the attach type of the particle system from GetEffectName.
     *
     * @both
     */
    GetEffectAttachType(): ParticleAttachment_t;
    /**
     * Return the name of the particle system that is created while this modifier is
     * active.
     *
     * @both
     */
    GetEffectName(): string;
    /**
     * Return the name of the hero effect particle system that is created while this
     * modifier is active.
     *
     * @both
     */
    GetHeroEffectName(): string;
    /**
     * The name of the secondary modifier that will be applied by this modifier (if it
     * is an aura).
     *
     * @both
     */
    GetModifierAura(): string;
    /**
     * Return the priority order this modifier will be applied over others.
     *
     * @both
     */
    GetPriority(): modifierpriority;
    /**
     * Return the name of the status effect particle system that is created while this
     * modifier is active.
     *
     * @both
     */
    GetStatusEffectName(): string;
    /**
     * Return the name of the buff icon to be shown for this modifier.
     *
     * @both
     */
    GetTexture(): string;
    /**
     * Relationship of this hero effect with those from other buffs (higher is more
     * likely to be shown).
     *
     * @both
     */
    HeroEffectPriority(): modifierpriority;
    /**
     * True/false if this modifier is an aura.
     *
     * @both
     */
    IsAura(): boolean;
    /**
     * True/false if this aura provides buffs when the parent is dead.
     *
     * @both
     */
    IsAuraActiveOnDeath(): boolean;
    /**
     * True/false if this modifier should be displayed as a debuff.
     *
     * @both
     */
    IsDebuff(): boolean;
    /**
     * True/false if this modifier should be displayed on the buff bar.
     *
     * @both
     */
    IsHidden(): boolean;
    /** @both */
    IsPermanent(): boolean;
    /**
     * True/false if this modifier can be purged.
     *
     * @both
     */
    IsPurgable(): boolean;
    /**
     * True/false if this modifier can be purged by strong dispels.
     *
     * @both
     */
    IsPurgeException(): boolean;
    /**
     * True/false if this modifier is considered a stun for purge reasons.
     *
     * @both
     */
    IsStunDebuff(): boolean;
    /**
     * Runs when the modifier is created.
     *
     * @both
     */
    OnCreated(params: object): void;
    /**
     * Runs when the modifier is destroyed (after unit loses modifier).
     *
     * @both
     */
    OnDestroy(): void;
    /**
     * Runs when the think interval occurs.
     *
     * @both
     */
    OnIntervalThink(): void;
    /**
     * Runs when the modifier is refreshed.
     *
     * @both
     */
    OnRefresh(params: object): void;
    /**
     * Runs when the modifier is destroyed (before unit loses modifier).
     *
     * @both
     */
    OnRemoved(): void;
    /**
     * Runs when stack count changes (param is old count).
     *
     * @both
     */
    OnStackCountChanged(stackCount: number): void;
    /**
     * True/false if this modifier is removed when the parent dies.
     *
     * @both
     */
    RemoveOnDeath(): boolean;
    /** @both */
    SetHasCustomTransmitterData(hasCustomData: boolean): void;
    /**
     * Apply the overhead offset to the attached effect.
     *
     * @both
     */
    ShouldUseOverheadOffset(): boolean;
    /**
     * Relationship of this status effect with those from other buffs (higher is more
     * likely to be shown).
     *
     * @both
     */
    StatusEffectPriority(): modifierpriority;
    /**
     * @abstract
     * @both
     */
    BotAttackScoreBonus?(): void;
    /**
     * Return a map of enabled/disabled states.
     *
     * @abstract
     * @both
     */
    CheckState?(): Partial<Record<modifierstate, boolean>>;
    /**
     * Return a list of modifier functions this modifier implements.
     *
     * @abstract
     * @both
     */
    DeclareFunctions?(): modifierfunction[];
    /**
     * @abstract
     * @both
     */
    GetAbsoluteNoDamageMagical?(event: ModifierAttackEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetAbsoluteNoDamagePhysical?(event: ModifierAttackEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetAbsoluteNoDamagePure?(event: ModifierAttackEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetAbsorbSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetActivityTranslationModifiers?(): string;
    /**
     * @abstract
     * @both
     */
    GetAllowEtherealAttack?(): void;
    /**
     * @abstract
     * @both
     */
    GetAlwaysAllowAttack?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetAlwaysAutoAttackWhileHoldPosition?(): void;
    /**
     * @abstract
     * @both
     */
    GetAttackSound?(): string;
    /**
     * @abstract
     * @both
     */
    GetBonusDayVision?(): number;
    /**
     * @abstract
     * @both
     */
    GetBonusNightVision?(): number;
    /**
     * @abstract
     * @both
     */
    GetBonusNightVisionUnique?(): number;
    /**
     * @abstract
     * @both
     */
    GetBonusVisionPercentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetDisableAutoAttack?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetDisableHealing?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetFixedDayVision?(): number;
    /**
     * @abstract
     * @both
     */
    GetFixedNightVision?(): number;
    /**
     * @abstract
     * @both
     */
    GetForceDrawOnMinimap?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetIsIllusion?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetMinHealth?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAbilityLayout?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackPointConstant?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonusPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackRangeBonusUnique?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackRangeOverride?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackSpeed_Limit?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackSpeedBaseOverride?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackSpeedBonus_Constant?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackSpeedPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierAttackSpeedReductionPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierAvoidDamage?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAvoidDamageAfterReductions?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierAvoidSpell?(event: ModifierAttackEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseAttack_BonusDamage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseAttackTimeConstant?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseAttackTimeConstant_Adjust?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseAttackTimePercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseDamageOutgoing_PercentageUnique?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBaseRegen?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusDamageOutgoing_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Agility?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Agility_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Intellect?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Intellect_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Strength?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierBonusStats_Strength_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierCanAttackTrees?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierCastRangeBonus?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierCastRangeBonusPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierCastRangeBonusStacking?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierCastRangeBonusTarget?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierChangeAbilityValue?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierConstantDeathGoldCost?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierConstantHealthRegen?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierConstantManaRegen?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierConstantManaRegenUnique?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierConstantRespawnTime?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierCooldownReduction_Constant?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_Percentage_Illusion?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_Percentage_Illusion_Amplify?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierDamageOutgoing_PercentageMultiplicative?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierDisableTurning?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierDodgeProjectile?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierEvasion_Constant?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraHealthBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraHealthPercentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraManaBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraManaBonusPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraManaPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierExtraStrengthBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierFixedAttackRate?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierHealAmplify_PercentageSource?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierHealAmplify_PercentageTarget?(): void;
    /**
     * Return value is a count of pips.
     *
     * @abstract
     * @both
     */
    GetModifierHealthBarPips?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierHealthBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierHealthcostReduction_Constant?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierHealthRegenPercentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierHealthRegenPercentageUnique?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierHPRegen_CanBeNegative?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierHPRegenAmplify_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierIgnoreCastAngle?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierIgnoreCooldown?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierIgnoreMovespeedLimit?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierIgnorePhysicalArmor?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierIllusionLabel?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierIncomingDamage_Percentage?(event: ModifierAttackEvent): number;
    /**
     * This property controls 'universal' shield, if defined both on client and
     * server. Return value on client should be current shield health, as a positive
     * integer, on server - amount of damage blocked.
     *
     * @abstract
     * @both
     */
    GetModifierIncomingDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierIncomingPhysicalDamage_Percentage?(event: ModifierAttackEvent): number;
    /**
     * This property controls 'physical' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     * @abstract
     * @both
     */
    GetModifierIncomingPhysicalDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * This property controls 'spell' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     * @abstract
     * @both
     */
    GetModifierIncomingSpellDamageConstant?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierInvisibilityAttackBehaviorException?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierInvisibilityLevel?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierIsRatPack?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierKnockbackAmplification_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierLifestealRegenAmplify_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMagical_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceBaseReduction?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceBonus?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceBonusIllusions?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceBonusUnique?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceDecrepifyUnique?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMagicalResistanceDirectModification?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierManaBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierManacostReduction_Constant?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierManaDrainAmplify_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMaxAttackRange?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMaxDebuffDuration?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMiss_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierModelChange?(): string;
    /**
     * @abstract
     * @both
     */
    GetModifierModelScale?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierModelScaleAnimateTime?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_Absolute?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_AbsoluteMax?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_AbsoluteMin?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeed_Limit?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant_Unique?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Constant_Unique_2?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Percentage_Unique?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Special_Boots?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedBonus_Special_Boots_2?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedOverride?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierMoveSpeedReductionPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierMPRegenAmplify_Percentage?(): number;
    /**
     * Total amplify value is clamped to 0.
     *
     * @abstract
     * @both
     */
    GetModifierMPRestoreAmplify_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierNegativeEvasion_Constant?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierNoVisionOfAttacker?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierOverrideAbilitySpecial?(event: ModifierOverrideAbilitySpecialEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierOverrideAbilitySpecialValue?(event: ModifierOverrideAbilitySpecialEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierOverrideAttackDamage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageAttackAnimTime?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageCasttime?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageCooldown?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageCooldownOngoing?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageCooldownStacking?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageExpRateBoost?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageGoldRateBoost?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageHealthcost?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageHealthcostStacking?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageManacost?(event: ModifierAbilityEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageManacostStacking?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPercentageRespawnTime?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPersistentInvisibility?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlockSpecial?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysical_ConstantBlockUnavoidablePreArmor?(event: ModifierAttackEvent): number;
    /**
     * Values above 100% are ignored.
     *
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBase_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonus?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonusPost?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonusUnique?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorBonusUniqueActive?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalArmorTotal_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPhysicalDamageOutgoing_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamage_Proc?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamage_Target?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_BonusDamagePostCrit?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_CriticalStrike?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_DeadlyBlow?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierPreAttack_Target_CriticalStrike?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Magical?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Magical_Target?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Physical?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_BonusDamage_Pure?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_ConvertPhysicalToMagical?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierProcAttack_Feedback?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProjectileName?(): string;
    /**
     * @abstract
     * @both
     */
    GetModifierProjectileSpeedBonus?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierProjectileSpeedBonusPercentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierProvidesFOWVision?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierRadarCooldownReduction?(): void;
    /**
     * Always applies scepter when this property is active
     *
     * @abstract
     * @both
     */
    GetModifierScepter?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierShard?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellAmplify_Percentage?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellAmplify_PercentageCreep?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellAmplify_PercentageUnique?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellLifestealRegenAmplify_Percentage?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellRedirectTarget?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierSpellsRequireHP?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierStackingRespawnTime?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierStatusResistance?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierStatusResistanceCaster?(event: ModifierUnitEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierStatusResistanceStacking?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierStrongIllusion?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierSuperIllusion?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierSuperIllusionWithUltimate?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierTempestDouble?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierTotal_ConstantBlock?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierTotalDamageOutgoing_Percentage?(event: ModifierAttackEvent): number;
    /**
     * @abstract
     * @both
     */
    GetModifierTotalPercentageManaRegen?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierTurnRate_Override?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierTurnRate_Percentage?(): number;
    /**
     * @abstract
     * @both
     */
    GetModifierTurnRateConstant?(): void;
    /**
     * @abstract
     * @both
     */
    GetModifierUnitDisllowUpgrading?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierUnitStatsNeedsRefresh?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetModifierXPDuringDeath?(): void;
    /**
     * @abstract
     * @both
     */
    GetOverrideAnimation?(): GameActivity_t;
    /**
     * @abstract
     * @both
     */
    GetOverrideAnimationRate?(): number;
    /**
     * @abstract
     * @both
     */
    GetOverrideAnimationWeight?(): number;
    /**
     * @abstract
     * @both
     */
    GetOverrideAttackMagical?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetPrimaryStatDamageMultiplier?(): void;
    /**
     * @abstract
     * @both
     */
    GetReflectSpell?(event: ModifierAbilityEvent): 0 | 1;
    /**
     * @abstract
     * @both
     */
    GetSuppressCleave?(): void;
    /**
     * @abstract
     * @both
     */
    GetSuppressTeleport?(): void;
    /**
     * @abstract
     * @both
     */
    GetTriggerCosmeticAndEndAttack?(): void;
    /**
     * @abstract
     * @both
     */
    GetUnitLifetimeFraction?(): number;
    /**
     * @abstract
     * @both
     */
    GetVisualZDelta?(): number;
    /**
     * @abstract
     * @both
     */
    GetVisualZSpeedBaseOverride?(): void;
    /**
     * @abstract
     * @both
     */
    OnAbilityEndChannel?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAbilityExecuted?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAbilityFullyCast?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAbilityStart?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAssist?(): void;
    /**
     * @abstract
     * @both
     */
    OnAttack?(event: ModifierAttackEvent): void;
    /**
     * Happens even if attack can't be issued.
     *
     * @abstract
     * @both
     */
    OnAttackAllied?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackCancelled?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttacked?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackFail?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackFinished?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackLanded?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackRecord?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackRecordDestroy?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttackStart?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnAttemptProjectileDodge?(): void;
    /**
     * @abstract
     * @both
     */
    OnBreakInvisibility?(): void;
    /**
     * @abstract
     * @both
     */
    OnBuildingKilled?(event: ModifierInstanceEvent): void;
    /**
     * @abstract
     * @both
     */
    OnDamageCalculated?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnDamagePrevented?(): void;
    /**
     * @abstract
     * @both
     */
    OnDeath?(event: ModifierInstanceEvent): void;
    /**
     * @abstract
     * @both
     */
    OnDeathCompleted?(): void;
    /**
     * @abstract
     * @both
     */
    OnDominated?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnHealReceived?(event: ModifierHealEvent): void;
    /**
     * @abstract
     * @both
     */
    OnHealthGained?(event: ModifierHealEvent): void;
    /**
     * @abstract
     * @both
     */
    OnHeroKilled?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnKill?(): void;
    /**
     * @abstract
     * @both
     */
    OnMagicDamageCalculated?(): void;
    /**
     * @abstract
     * @both
     */
    OnManaGained?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnModelChanged?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnModifierAdded?(event: ModifierAddedEvent): void;
    /**
     * @abstract
     * @both
     */
    OnOrder?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnPreDebuffApplied?(): void;
    /**
     * @abstract
     * @both
     */
    OnProcessCleave?(): void;
    /**
     * @abstract
     * @both
     */
    OnProjectileDodge?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnProjectileObstructionHit?(): void;
    /**
     * @abstract
     * @both
     */
    OnRespawn?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnSetLocation?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnSpellAppliedSuccessfully?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnSpellTargetReady?(): void;
    /**
     * @abstract
     * @both
     */
    OnSpentHealth?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnSpentMana?(event: ModifierAbilityEvent): void;
    /**
     * @abstract
     * @both
     */
    OnStateChanged?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnTakeDamage?(event: ModifierInstanceEvent): void;
    /**
     * @abstract
     * @both
     */
    OnTakeDamageKillCredit?(event: ModifierAttackEvent): void;
    /**
     * @abstract
     * @both
     */
    OnTeleported?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnTeleporting?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    OnTooltip?(): number;
    /**
     * @abstract
     * @both
     */
    OnTooltip2?(): number;
    /**
     * @abstract
     * @both
     */
    OnUnitMoved?(event: ModifierUnitEvent): void;
    /**
     * @abstract
     * @both
     */
    PreserveParticlesOnModelChanged?(): 0 | 1;
    /**
     * @abstract
     * @both
     */
    ReincarnateTime?(): number;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua_Horizontal_Motion: DotaConstructor<CDOTA_Modifier_Lua_Horizontal_Motion>;

declare interface CDOTA_Modifier_Lua_Horizontal_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if
     * successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua_Motion_Both: DotaConstructor<CDOTA_Modifier_Lua_Motion_Both>;

declare interface CDOTA_Modifier_Lua_Motion_Both extends CDOTA_Modifier_Lua {
    /**
     * Starts the horizontal motion controller effects for this buff.  Returns true if
     * successful.
     */
    ApplyHorizontalMotionController(): boolean;
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if
     * successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnHorizontalMotionInterrupted(): void;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateHorizontalMotion(me: CDOTA_BaseNPC, dt: number): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

/** @both */
declare const CDOTA_Modifier_Lua_Vertical_Motion: DotaConstructor<CDOTA_Modifier_Lua_Vertical_Motion>;

declare interface CDOTA_Modifier_Lua_Vertical_Motion extends CDOTA_Modifier_Lua {
    /**
     * Starts the vertical motion controller effects for this buff.  Returns true if
     * successful.
     */
    ApplyVerticalMotionController(): boolean;
    /**
     * Get the priority.
     */
    GetMotionPriority(): modifierpriority;
    /**
     * Called when the motion gets interrupted.
     */
    OnVerticalMotionInterrupted(): void;
    /**
     * Set the priority.
     */
    SetMotionPriority(motionPriority: modifierpriority): void;
    /**
     * Perform any motion from the given interval on the NPC.
     */
    UpdateVerticalMotion(me: CDOTA_BaseNPC, dt: number): void;
    __kind__: 'instance';
}

declare const CDOTA_NeutralSpawner: DotaConstructor<CDOTA_NeutralSpawner>;

declare interface CDOTA_NeutralSpawner extends CPointEntity {
    CreatePendingUnits(): void;
    SelectSpawnType(): void;
    SpawnNextBatch(ignoreBlockers: boolean): void;
    __kind__: 'instance';
}

declare const PlayerResource: CDOTA_PlayerResource;

declare const CDOTA_PlayerResource: DotaConstructor<CDOTA_PlayerResource>;

declare interface CDOTA_PlayerResource extends CBaseEntity {
    AddAegisPickup(playerId: PlayerID): void;
    AddCandyEvent(playerId: PlayerID, reason: number): void;
    AddClaimedFarm(playerId: PlayerID, farmValue: number, earnedValue: boolean): void;
    AddGoldSpentOnSupport(playerId: PlayerID, cost: number): void;
    AddNeutralItemToStash(playerId: PlayerID, teamNumber: DOTATeam_t, item: CDOTA_Item): void;
    AddRunePickup(playerId: PlayerID, runes: number): void;
    AreUnitsSharedWithPlayerID(unitOwnerPlayerId: PlayerID, otherPlayerId: PlayerID): boolean;
    CanRepick(playerId: PlayerID): boolean;
    ClearKillsMatrix(playerId: PlayerID): void;
    ClearLastHitMultikill(playerId: PlayerID): void;
    ClearLastHitStreak(playerId: PlayerID): void;
    ClearPlayer(playerId: PlayerID): void;
    ClearRawPlayerDamageMatrix(playerId: PlayerID): void;
    ClearStreak(playerId: PlayerID): void;
    GetAegisPickups(playerId: PlayerID): number;
    GetAssists(playerId: PlayerID): number;
    GetBroadcasterChannel(playerId: PlayerID): number;
    GetBroadcasterChannelSlot(playerId: PlayerID): number;
    GetClaimedDenies(playerId: PlayerID): number;
    GetClaimedFarm(playerId: PlayerID, onlyEarned: boolean): number;
    GetClaimedMisses(playerId: PlayerID): number;
    GetConnectionState(playerId: PlayerID): DOTAConnectionState_t;
    GetCreepDamageTaken(playerId: PlayerID, total: boolean): number;
    GetCustomBuybackCooldown(playerId: PlayerID): number;
    GetCustomBuybackCost(playerId: PlayerID): number;
    /**
     * Get the current custom team assignment for this player.
     */
    GetCustomTeamAssignment(playerId: PlayerID): number;
    GetDamageDoneToHero(playerId: PlayerID, victimId: PlayerID): number;
    GetDeaths(playerId: PlayerID): number;
    GetDenies(playerId: PlayerID): number;
    /**
     * (nPlayerID).
     */
    GetEventGameUpgrades(playerId: PlayerID): object;
    GetEventPointsForPlayerID(playerId: PlayerID): number;
    GetEventPremiumPoints(playerId: PlayerID): number;
    GetEventRanks(playerId: PlayerID): unknown;
    GetGold(playerId: PlayerID): number;
    GetGoldLostToDeath(playerId: PlayerID): number;
    GetGoldPerMin(playerId: PlayerID): number;
    GetGoldSpentOnBuybacks(playerId: PlayerID): number;
    GetGoldSpentOnConsumables(playerId: PlayerID): number;
    GetGoldSpentOnItems(playerId: PlayerID): number;
    GetGoldSpentOnSupport(playerId: PlayerID): number;
    GetHealing(playerId: PlayerID): number;
    GetHeroDamageTaken(playerId: PlayerID, total: boolean): number;
    GetKills(playerId: PlayerID): number;
    GetKillsDoneToHero(playerId: PlayerID, victimId: PlayerID): number;
    /**
     * (nPlayerID).
     */
    GetLabyrinthEventGameHeroUnlocks(playerId: PlayerID): object;
    GetLastHitMultikill(playerId: PlayerID): number;
    GetLastHits(playerId: PlayerID): number;
    GetLastHitStreak(playerId: PlayerID): number;
    GetLevel(playerId: PlayerID): number;
    GetLiveSpectatorTeam(playerId: PlayerID): DOTATeam_t | -1;
    GetMisses(playerId: PlayerID): number;
    GetNearbyCreepDeaths(playerId: PlayerID): number;
    GetNetworkedEventActionClaimCount(playerId: PlayerID, eventId: number, unActionId: number): number;
    GetNetworkedEventActionClaimCountByName(playerId: PlayerID, eventId: number, actionName: string): number;
    GetNetWorth(playerId: PlayerID): number;
    GetNthCourierForTeam(courierIndex: number, teamNumber: DOTATeam_t): CDOTA_Unit_Courier | undefined;
    GetNthPlayerIDOnTeam(teamNumber: DOTATeam_t, nthPlayer: number): PlayerID;
    /**
     * Players on a valid team (radiant, dire, or custom*) who haven't abandoned the
     * game.
     */
    GetNumConnectedHumanPlayers(): number;
    GetNumConsumablesPurchased(playerId: PlayerID): number;
    GetNumCouriersForTeam(teamNumber: DOTATeam_t): number;
    GetNumItemsPurchased(playerId: PlayerID): number;
    GetPartyID(playerId: PlayerID): Uint64;
    /**
     * Returns player entity for a player with specified id. Player entity represents
     * a single connection, so a different entity might be returned. When player is
     * disconnected nil would be returned.
     */
    GetPlayer(playerId: PlayerID): CDOTAPlayerController | undefined;
    /**
     * Includes spectators and players not assigned to a team.
     */
    GetPlayerCount(): number;
    GetPlayerCountForTeam(team: DOTATeam_t): number;
    GetPlayerLoadedCompletely(playerId: PlayerID): boolean;
    GetPlayerName(playerId: PlayerID): string;
    GetPreferredCourierForPlayer(playerId: PlayerID): object;
    GetRawPlayerDamage(playerId: PlayerID): number;
    GetReliableGold(playerId: PlayerID): number;
    GetRespawnSeconds(playerId: PlayerID): number;
    GetRoshanKills(playerId: PlayerID): number;
    GetRunePickups(playerId: PlayerID): number;
    GetSelectedHeroEntity(playerId: PlayerID): CDOTA_BaseNPC_Hero | undefined;
    GetSelectedHeroID(playerId: PlayerID): number;
    GetSelectedHeroName(playerId: PlayerID): string;
    GetSteamAccountID(playerId: PlayerID): number;
    /**
     * Get the 64 bit steam ID for a given player.
     */
    GetSteamID(playerId: PlayerID): Uint64;
    GetStreak(playerId: PlayerID): number;
    GetStuns(playerId: PlayerID): number;
    GetTeam(playerId: PlayerID): DOTATeam_t;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    GetTeam(): never;
    GetTeamKills(team: DOTATeam_t): number;
    /**
     * (Deprecated: use GetNumConnectedHumanPlayers) Players on a valid team (radiant,
     * dire, or custom*) who haven't abandoned the game.
     */
    GetTeamPlayerCount(): number;
    GetTimeOfLastConsumablePurchase(playerId: PlayerID): number;
    GetTimeOfLastDeath(playerId: PlayerID): number;
    GetTimeOfLastItemPurchase(playerId: PlayerID): number;
    GetTotalEarnedGold(playerId: PlayerID): number;
    GetTotalEarnedXP(playerId: PlayerID): number;
    GetTotalGoldSpent(playerId: PlayerID): number;
    GetTowerDamageTaken(playerId: PlayerID, total: boolean): number;
    GetTowerKills(playerId: PlayerID): number;
    GetUnitShareMaskForPlayer(playerId: PlayerID, otherPlayerId: PlayerID): number;
    GetUnreliableGold(playerId: PlayerID): number;
    GetXPPerMin(playerId: PlayerID): number;
    /**
     * Does this player have a custom game ticket for this game?
     */
    HasCustomGameTicketForPlayerID(playerId: PlayerID): boolean;
    HasRandomed(playerId: PlayerID): boolean;
    HasSelectedHero(playerId: PlayerID): boolean;
    HasSetNetworkedEventActionClaimCount(): boolean;
    HaveAllPlayersJoined(): boolean;
    IncrementAssists(playerId: PlayerID, victimId: PlayerID): void;
    IncrementClaimedDenies(playerId: PlayerID, value: number): void;
    IncrementClaimedMisses(playerId: PlayerID, value: number): void;
    IncrementDeaths(playerId: PlayerID, killerId: PlayerID): void;
    IncrementDenies(playerId: PlayerID, value: number): void;
    IncrementKills(playerId: PlayerID, victimId: PlayerID): void;
    IncrementLastHitMultikill(playerId: PlayerID, count: number): void;
    IncrementLastHits(playerId: PlayerID, count: number): void;
    IncrementLastHitStreak(playerId: PlayerID, count: number): void;
    IncrementMisses(playerId: PlayerID, value: number): void;
    IncrementNearbyCreepDeaths(playerId: PlayerID, creeps: number): void;
    IncrementStreak(playerId: PlayerID, count: number): void;
    IncrementTotalEarnedXP(playerId: PlayerID, xp: number, reason: EDOTA_ModifyXP_Reason): void;
    IsBroadcaster(playerId: PlayerID): boolean;
    IsDisableHelpSetForPlayerID(playerId: PlayerID, otherPlayerId: PlayerID): boolean;
    IsFakeClient(playerId: PlayerID): boolean;
    IsHeroSelected(heroname: string, ignoreUnrevealedPick: boolean): boolean;
    IsHeroSharedWithPlayerID(unitOwnerPlayerId: PlayerID, otherPlayerId: PlayerID): boolean;
    IsValidPlayer(playerId: number): playerId is PlayerID;
    IsValidPlayerID(playerId: number): playerId is PlayerID;
    IsValidTeamPlayer(playerId: number): playerId is PlayerID;
    IsValidTeamPlayerID(playerId: number): playerId is PlayerID;
    ModifyGold(playerId: PlayerID, goldChange: number, reliable: boolean, reason: EDOTA_ModifyGold_Reason): number;
    NumPlayers(): number;
    NumTeamPlayers(): number;
    /**
     * Increment or decrement consumable charges (nPlayerID, item_definition_index,
     * nChargeIncrementOrDecrement).
     */
    RecordConsumableAbilityChargeChange(
        playerId: PlayerID,
        itemDefinitionIndex: number,
        chargeIncrementOrDecrement: number,
    ): void;
    RecordEventActionGrant(
        playerId: PlayerID,
        event: number,
        unActionId: number,
        unAudit: number,
        unQuantity: number,
        unAuditData: number,
    ): void;
    RecordEventActionGrantForPrimaryEvent(
        playerId: PlayerID,
        actionName: string,
        unAudit: number,
        unQuantity: number,
        unAuditData: number,
    ): void;
    /**
     * Replaces the player's hero with a new one of the specified class, gold and XP.
     */
    ReplaceHeroWith(playerId: PlayerID, heroClass: string, gold: number, xp: number): CDOTA_BaseNPC_Hero;
    /**
     * Replaces the player's hero with a new one of the specified class, gold and XP,
     * without transferring items/abilities if same hero.
     */
    ReplaceHeroWithNoTransfer(playerId: PlayerID, heroClass: string, gold: number, xp: number): object;
    ResetBuybackCostTime(playerId: PlayerID): void;
    ResetTotalEarnedGold(playerId: PlayerID): void;
    SetBuybackCooldownTime(playerId: PlayerID, buybackCooldown: number): void;
    SetBuybackGoldLimitTime(playerId: PlayerID, buybackCooldown: number): void;
    /**
     * Force the given player's camera to follow the given entity.
     */
    SetCameraTarget(playerId: PlayerID, target: CBaseEntity | undefined): void;
    SetCanRepick(playerId: PlayerID, canRepick: boolean): void;
    /**
     * Set the buyback cooldown for this player.
     */
    SetCustomBuybackCooldown(playerId: PlayerID, cooldownTime: number): void;
    /**
     * Set the buyback cost for this player.
     */
    SetCustomBuybackCost(playerId: PlayerID, goldCost: number): void;
    SetCustomIntParam(playerId: PlayerID, param: number): void;
    /**
     * Set custom color for player.
     */
    SetCustomPlayerColor(playerId: PlayerID, r: number, g: number, b: number): void;
    /**
     * Set custom team assignment for this player.
     */
    SetCustomTeamAssignment(playerId: PlayerID, teamAssignment: DOTATeam_t): void;
    SetGold(playerId: PlayerID, gold: number, reliable: boolean): void;
    SetHasRandomed(playerId: PlayerID): void;
    SetLastBuybackTime(playerId: PlayerID, lastBuybackTime: number): void;
    /**
     * Set the forced selection entity for a player.
     */
    SetOverrideSelectionEntity(playerId: PlayerID, entity: CDOTA_BaseNPC): void;
    SetUnitShareMaskForPlayer(playerId: PlayerID, otherPlayerId: PlayerID, flag: number, state: boolean): void;
    SpendGold(playerId: PlayerID, cost: number, reason: EDOTA_ModifyGold_Reason): void;
    UpdateTeamSlot(playerId: PlayerID, teamNumber: DOTATeam_t, desiredSlot: number): void;
    WhoSelectedHero(heroFilename: string, ignoreUnrevealedPick: boolean): PlayerID;
    __kind__: 'instance';
}

declare const CDOTA_ShopTrigger: DotaConstructor<CDOTA_ShopTrigger>;

declare interface CDOTA_ShopTrigger extends CBaseTrigger {
    /**
     * Get the DOTA_SHOP_TYPE.
     */
    GetShopType(): DOTA_SHOP_TYPE;
    /**
     * Set the DOTA_SHOP_TYPE.
     */
    SetShopType(shopType: DOTA_SHOP_TYPE): void;
    __kind__: 'instance';
}

declare const CDOTA_SimpleObstruction: DotaConstructor<CDOTA_SimpleObstruction>;

declare interface CDOTA_SimpleObstruction extends CBaseEntity {
    /**
     * Returns whether the obstruction is currently active.
     */
    IsEnabled(): boolean;
    /**
     * Enable or disable the obstruction.
     */
    SetEnabled(enabled: boolean, force: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Courier: DotaConstructor<CDOTA_Unit_Courier>;

declare interface CDOTA_Unit_Courier extends CDOTA_BaseNPC {
    /**
     * Upgrade the courier ( int param ) times.
     */
    UpgradeCourier(level: number): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_CustomGameAnnouncer: DotaConstructor<CDOTA_Unit_CustomGameAnnouncer>;

declare interface CDOTA_Unit_CustomGameAnnouncer extends CDOTA_BaseNPC {
    /**
     * Determines whether response criteria is matched on server or client.
     */
    SetServerAuthoritative(isServerAuthoritative: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_CustomGameAnnouncerAghanim: DotaConstructor<CDOTA_Unit_CustomGameAnnouncerAghanim>;

declare interface CDOTA_Unit_CustomGameAnnouncerAghanim extends CDOTA_BaseNPC {
    /**
     * Set the animation sequence for this entity.
     */
    SetAnimation(animation: string): void;
    /**
     * Determines whether response criteria is matched on server or client.
     */
    SetServerAuthoritative(isServerAuthoritative: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Diretide_Portal: DotaConstructor<CDOTA_Unit_Diretide_Portal>;

declare interface CDOTA_Unit_Diretide_Portal extends CDOTA_BaseNPC_Building {
    GetPartnerPortal(): object;
    ResetPortal(): void;
    SetInvasionRuneType(runeType: number): void;
    SetPartnerPortal(portal: object): void;
    SetPortalActive(active: boolean): void;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Nian: DotaConstructor<CDOTA_Unit_Nian>;

declare interface CDOTA_Unit_Nian extends CDOTA_BaseNPC_Creature {
    /**
     * Is the Nian horn?
     */
    GetHorn(): object;
    /**
     * Is the Nian's tail broken?
     */
    GetTail(): object;
    /**
     * Is the Nian's horn broken?
     */
    IsHornAlive(): boolean;
    /**
     * Is the Nian's tail broken?
     */
    IsTailAlive(): boolean;
    __kind__: 'instance';
}

declare const CDOTA_Unit_Scout: DotaConstructor<CDOTA_Unit_Scout>;

declare interface CDOTA_Unit_Scout extends CDOTA_BaseNPC {
    __kind__: 'instance';
}

declare const CDOTABaseAbility: DotaConstructor<CDOTABaseAbility>;

/** @client */
declare const C_DOTABaseAbility: typeof CDOTABaseAbility;

declare interface CDOTABaseAbility extends CBaseEntity {
    CanAbilityBeUpgraded(): boolean;
    CastAbility(): boolean;
    ContinueCasting(): boolean;
    CreateVisibilityNode(location: Vector, radius: number, duration: number): void;
    DecrementModifierRefCount(): void;
    EnableAbilityChargesOnTalentUpgrade(ability: object, talentName: string): void;
    EndChannel(interrupted: boolean): void;
    /**
     * Clear the cooldown remaining on this ability.
     */
    EndCooldown(): void;
    GetAbilityChargeRestoreTime(level: number): number;
    GetAbilityDamage(): number;
    GetAbilityDamageType(): DAMAGE_TYPES;
    GetAbilityIndex(): number;
    /**
     * Gets the key values definition for this ability.
     */
    GetAbilityKeyValues(): object;
    /**
     * Returns the name of this ability.
     *
     * @both
     */
    GetAbilityName(): string;
    GetAbilityTargetFlags(): DOTA_UNIT_TARGET_FLAGS;
    GetAbilityTargetTeam(): DOTA_UNIT_TARGET_TEAM;
    GetAbilityTargetType(): DOTA_UNIT_TARGET_TYPE;
    GetAbilityType(): number;
    GetAnimationIgnoresModelScale(): boolean;
    GetAOERadius(): number;
    GetAssociatedPrimaryAbilities(): string;
    GetAssociatedSecondaryAbilities(): string;
    GetAutoCastState(): boolean;
    GetBackswingTime(): number;
    /**
     * Always returns Uint64 at runtime, DOTA_ABILITY_BEHAVIOR is referenced only for
     * compatibility.
     */
    GetBehavior(): DOTA_ABILITY_BEHAVIOR | Uint64;
    /**
     * Get ability behavior flags as an int for compatability.
     *
     * @both
     */
    GetBehaviorInt(): DOTA_ABILITY_BEHAVIOR;
    /**
     * Get the owner of this ability.
     *
     * @both
     */
    GetCaster(): CDOTA_BaseNPC;
    GetCastPoint(): number;
    /** @both */
    GetCastPointModifier(): number;
    /**
     * Gets the cast range of the ability.
     */
    GetCastRange(location: Vector | undefined, target: CDOTA_BaseNPC | undefined): number;
    GetChannelledHealthCostPerSecond(level: number): number;
    GetChannelledManaCostPerSecond(level: number): number;
    GetChannelStartTime(): number;
    GetChannelTime(): number;
    GetCloneSource(): CDOTA_BaseNPC | undefined;
    GetConceptRecipientType(): number;
    /**
     * Get the cooldown duration for this ability at a given level, not the amount of
     * cooldown actually left.
     */
    GetCooldown(level: number): number;
    GetCooldownTime(): number;
    GetCooldownTimeRemaining(): number;
    /**
     * The number of charges remaining on this ability.
     *
     * @both
     */
    GetCurrentAbilityCharges(): number;
    GetCursorPosition(): Vector;
    GetCursorTarget(): CDOTA_BaseNPC | undefined;
    GetCursorTargetingNothing(): boolean;
    GetDuration(): number;
    /**
     * Gets the cast range of the ability, taking modifiers into account.
     */
    GetEffectiveCastRange(location: Vector, target: object): number;
    GetEffectiveCooldown(level: number): number;
    GetEffectiveHealthCost(level: number): number;
    GetEffectiveManaCost(level: number): number;
    GetGoldCost(level: number): number;
    GetGoldCostForUpgrade(level: number): number;
    GetHealthCost(level: number): number;
    GetHeroLevelRequiredToUpgrade(): number;
    GetInitialAbilityCharges(level: number): number;
    GetIntrinsicModifierName(): string;
    /**
     * Get the current level of the ability.
     *
     * @both
     */
    GetLevel(): number;
    /**
     * Gets a value from this ability's special value block for passed level.
     *
     * @both
     */
    GetLevelSpecialValueFor(name: string, level: number): number;
    /**
     * Gets a value from this ability's special value block for passed level, ignoring
     * MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL.
     *
     * @both
     */
    GetLevelSpecialValueNoOverride(name: string, level: number): number;
    GetManaCost(level: number): number;
    GetMaxAbilityCharges(level: number): number;
    GetMaxLevel(): number;
    GetModifierValue(): number;
    GetModifierValueBonus(): number;
    GetPlaybackRateOverride(): number;
    GetSharedCooldownName(): string;
    /**
     * Gets a value from this ability's special value block for its current level.
     *
     * @both
     */
    GetSpecialValueFor(name: string): number;
    GetStolenActivityModifier(): string;
    /**
     * Whether or not this ability is toggled.
     *
     * @both
     */
    GetToggleState(): boolean;
    GetUpgradeRecommended(): boolean;
    HeroXPChange(xp: number): boolean;
    IncrementModifierRefCount(): void;
    IsActivated(): boolean;
    IsAttributeBonus(): boolean;
    /**
     * Returns whether the ability is currently channeling.
     */
    IsChanneling(): boolean;
    IsCooldownReady(): boolean;
    IsCosmetic(entity: CBaseEntity): boolean;
    /**
     * Returns whether the ability can be cast.
     */
    IsFullyCastable(): boolean;
    IsHidden(): boolean;
    IsHiddenAsSecondaryAbility(): boolean;
    IsHiddenWhenStolen(): boolean;
    /**
     * Returns whether the ability is currently casting.
     */
    IsInAbilityPhase(): boolean;
    /**
     * Whether or not this ability is an item.
     *
     * @both
     */
    IsItem(): this is CDOTA_Item;
    IsOwnersGoldEnough(issuerPlayerId: PlayerID): boolean;
    IsOwnersGoldEnoughForUpgrade(): boolean;
    IsOwnersManaEnough(): boolean;
    IsPassive(): boolean;
    IsRefreshable(): boolean;
    IsSharedWithTeammates(): boolean;
    IsStealable(): boolean;
    IsStolen(): boolean;
    IsToggle(): boolean;
    IsTrained(): boolean;
    /**
     * Mark the ability button for this ability as needing a refresh.
     */
    MarkAbilityButtonDirty(): void;
    NumModifiersUsingAbility(): number;
    OnAbilityPhaseInterrupted(): void;
    OnAbilityPhaseStart(): boolean;
    OnAbilityPinged(playerId: PlayerID, ctrlHeld: boolean): void;
    OnChannelFinish(interrupted: boolean): void;
    OnChannelThink(interval: number): void;
    OnHeroCalculateStatBonus(): void;
    OnHeroLevelUp(): void;
    OnOwnerDied(): void;
    OnOwnerSpawned(): void;
    OnSpellStart(): void;
    OnToggle(): void;
    OnUpgrade(): void;
    PayGoldCost(): void;
    PayGoldCostForUpgrade(): void;
    PayHealthCost(): void;
    PayManaCost(): void;
    PlaysDefaultAnimWhenStolen(): boolean;
    ProcsMagicStick(): boolean;
    RefCountsModifiers(): boolean;
    RefreshCharges(): void;
    RefreshIntrinsicModifier(): void;
    RefundHealthCost(): void;
    RefundManaCost(): void;
    RequiresFacing(): boolean;
    ResetToggleOnRespawn(): boolean;
    SetAbilityIndex(index: number): void;
    SetActivated(activated: boolean): void;
    SetChanneling(channeling: boolean): void;
    SetCurrentAbilityCharges(charges: number): void;
    SetFrozenCooldown(frozenCooldown: boolean): void;
    SetHidden(hidden: boolean): void;
    SetInAbilityPhase(inAbilityPhase: boolean): void;
    /**
     * Sets the level of this ability.
     */
    SetLevel(level: number): void;
    SetOverrideCastPoint(castPoint: number): void;
    SetRefCountsModifiers(refCounts: boolean): void;
    SetStealable(stealable: boolean): void;
    SetStolen(stolen: boolean): void;
    SetUpgradeRecommended(upgradeRecommended: boolean): void;
    ShouldUseResources(): boolean;
    SpeakAbilityConcept(concept: number): void;
    SpeakTrigger(): unknown;
    StartCooldown(cooldown: number): void;
    ToggleAbility(): void;
    ToggleAutoCast(): void;
    UpgradeAbility(supressSpeech: boolean): void;
    UseResources(mana: boolean, useHealth: boolean, gold: boolean, cooldown: boolean): void;
    __kind__: 'instance';
}

declare const CDOTABaseGameMode: DotaConstructor<CDOTABaseGameMode>;

declare interface CDOTABaseGameMode extends CBaseEntity {
    /**
     * Const char* pszAbilityName.
     */
    AddAbilityUpgradeToWhitelist(abilityName: string): void;
    /**
     * Add an item to purchase at a custom shop.
     */
    AddItemToCustomShop(itemName: string, shopName: string, category: string): void;
    /**
     * Begin tracking a sequence of events using the real time combat analyzer.
     */
    AddRealTimeCombatAnalyzerQuery(
        queryTable: object,
        player: CDOTAPlayerController,
        queryName: string,
    ): CombatAnalyzerQueryID;
    /**
     * Allocates an entity which can be used by custom games to control FoW occlusion
     * volumes.
     */
    AllocateFowBlockerRegion(
        minX: number,
        minY: number,
        maxX: number,
        maxY: number,
        gridSize: number,
    ): CFoWBlockerRegion;
    /**
     * Get if weather effects are disabled on the client.
     */
    AreWeatherEffectsDisabled(): boolean;
    /**
     * Clear the script filter that controls bounty rune pickup behavior.
     */
    ClearBountyRunePickupFilter(): void;
    /**
     * Clear the script filter that controls how a unit takes damage.
     */
    ClearDamageFilter(): void;
    /**
     * Clear the script filter that controls when a unit picks up an item.
     */
    ClearExecuteOrderFilter(): void;
    /**
     * Clear the script filter that controls how a unit heals.
     */
    ClearHealingFilter(): void;
    /**
     * Clear the script filter that controls the item added to inventory filter.
     */
    ClearItemAddedToInventoryFilter(): void;
    /**
     * Clear the script filter that controls the modifier filter.
     */
    ClearModifierGainedFilter(): void;
    /**
     * Clear the script filter that controls how hero experience is modified.
     */
    ClearModifyExperienceFilter(): void;
    /**
     * Clear the script filter that controls how hero gold is modified.
     */
    ClearModifyGoldFilter(): void;
    /**
     * Clear the script filter that controls what rune spawns.
     */
    ClearRuneSpawnFilter(): void;
    /**
     * Clear the script filter that controls when tracking projectiles are launched.
     */
    ClearTrackingProjectileFilter(): void;
    /**
     * Disable npc_dota_creature clumping behavior by default.
     */
    DisableClumpingBehaviorByDefault(disabled: boolean): void;
    /**
     * Use to disable hud flip for this mod.
     */
    DisableHudFlip(disable: boolean): void;
    /**
     * Bool bEnabled.
     */
    EnableAbilityUpgradeWhitelist(enabled: boolean): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is
     * selected.
     */
    GetAlwaysShowPlayerInventory(): boolean;
    /**
     * Get whether player names are always shown, regardless of client setting.
     */
    GetAlwaysShowPlayerNames(): boolean;
    /**
     * Are in-game announcers disabled?
     */
    GetAnnouncerDisabled(): boolean;
    /**
     * Is the announcer announcing the mode / saying Choose Your Hero on start of
     * custom games disabled?
     */
    GetAnnouncerGameModeAnnounceDisabled(): boolean;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    GetCameraDistanceOverride(): number;
    /**
     * Get current derived stat value constant.
     */
    GetCustomAttributeDerivedStatValue(derivedStatType: AttributeDerivedStats): number;
    /**
     * Get the current rate cooldown ticks down for items in the backpack.
     */
    GetCustomBackpackCooldownPercent(): number;
    /**
     * Get the current custom backpack swap cooldown.
     */
    GetCustomBackpackSwapCooldown(): number;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    GetCustomBuybackCooldownEnabled(): boolean;
    /**
     * Turns on capability to define custom buyback costs.
     */
    GetCustomBuybackCostEnabled(): boolean;
    /**
     * Get the topbar score display value for dire.
     */
    GetCustomDireScore(): number;
    /**
     * Get the current custom glyph cooldown.
     */
    GetCustomGlyphCooldown(): number;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    GetCustomHeroMaxLevel(): number;
    /**
     * Get the topbar score display value for radiant.
     */
    GetCustomRadiantScore(): number;
    /**
     * Get the current custom scan cooldown.
     */
    GetCustomScanCooldown(): number;
    /**
     * Get the rate at which the day/night cycle advances (1.0 = default).
     */
    GetDaynightCycleAdvanceRate(): number;
    /**
     * Get the Game Seed passed from the GC.
     */
    GetEventGameSeed(): number;
    /**
     * Get the Event Window Start Time passed from the GC.
     */
    GetEventWindowStartTime(): number;
    /**
     * Gets the fixed respawn time.
     */
    GetFixedRespawnTime(): number;
    /**
     * Turn the fog of war on or off.
     */
    GetFogOfWarDisabled(): boolean;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    GetGoldSoundDisabled(): boolean;
    /**
     * Returns the HUD element visibility.
     */
    GetHUDVisible(element: number): boolean;
    /**
     * Get the maximum attack speed for units.
     */
    GetMaximumAttackSpeed(): number;
    /**
     * Get the minimum attack speed for units.
     */
    GetMinimumAttackSpeed(): number;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    GetRecommendedItemsDisabled(): boolean;
    /**
     * Returns the scale applied to non-fixed respawn times.
     */
    GetRespawnTimeScale(): number;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off
     * the player must be at a shop to purchase items.
     */
    GetStashPurchasingDisabled(): boolean;
    /**
     * Hide the sticky item in the quickbuy.
     */
    GetStickyItemDisabled(): boolean;
    /**
     * Override the values of the team values on the top game bar.
     */
    GetTopBarTeamValuesOverride(): boolean;
    /**
     * Turning on/off the team values on the top game bar.
     */
    GetTopBarTeamValuesVisible(): boolean;
    /**
     * Gets whether tower backdoor protection is enabled or not.
     */
    GetTowerBackdoorProtectionEnabled(): boolean;
    /**
     * Are custom-defined XP values for hero level ups in use?
     */
    GetUseCustomHeroLevels(): boolean;
    /**
     * Gets the time from game start during which water runes spawn.
     */
    GetWaterRuneLastSpawnTime(): number;
    /**
     * Const char* pszAbilityName.
     */
    IsAbilityUpgradeWhitelisted(abilityName: string): boolean;
    /**
     * Enables or disables buyback completely.
     */
    IsBuybackEnabled(): boolean;
    /**
     * Is the day/night cycle disabled?
     */
    IsDaynightCycleDisabled(): boolean;
    /**
     * Set function and context for real time combat analyzer query failed.
     */
    ListenForQueryFailed<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Set function and context for real time combat analyzer query progress changed.
     */
    ListenForQueryProgressChanged<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Set function and context for real time combat analyzer query succeeded.
     */
    ListenForQuerySucceeded<TContext extends {}>(
        func: (this: TContext, result: CombatAnalyzerQueryResult) => void,
        context: TContext,
    ): void;
    /**
     * Const char* pszAbilityName.
     */
    RemoveAbilityUpgradeFromWhitelist(abilityName: string): void;
    /**
     * Remove an item to purchase at a custom shop.
     */
    RemoveItemFromCustomShop(itemName: string, shopName: string): void;
    /**
     * Stop tracking a combat analyzer query.
     */
    RemoveRealTimeCombatAnalyzerQuery(queryId: CombatAnalyzerQueryID): void;
    /**
     * Set a filter function to control the tuning values that abilities use. (Modify
     * the table and Return true to use new values, return false to use the old
     * values).
     */
    SetAbilityTuningValueFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: AbilityTuningValueFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * If set to true, neutral items will be dropped on killing neutral monsters.
     * Otherwise nothing will be dropped.
     */
    SetAllowNeutralItemDrops(enabled: boolean): void;
    /**
     * Show the player hero's inventory in the HUD, regardless of what unit is
     * selected.
     */
    SetAlwaysShowPlayerInventory(alwaysShow: boolean): void;
    /**
     * Set whether player names are always shown, regardless of client setting.
     */
    SetAlwaysShowPlayerNames(enabled: boolean): void;
    /**
     * Mutes the in-game announcer.
     */
    SetAnnouncerDisabled(disabled: boolean): void;
    /**
     * Disables the announcer announcing the mode / saying Choose Your Hero on start
     * of custom games.
     */
    SetAnnouncerGameModeAnnounceDisabled(disabled: boolean): void;
    /**
     * Set if the bots should try their best to push with a human player.
     */
    SetBotsAlwaysPushWithHuman(alwaysPush: boolean): void;
    /**
     * Set if bots should enable their late game behavior.
     */
    SetBotsInLateGame(lateGame: boolean): void;
    /**
     * Set the max tier of tower that bots want to push. (-1 to disable).
     */
    SetBotsMaxPushTier(maxTier: number): void;
    /**
     * Enables/Disables bots in custom games. Note: this will only work with default
     * heroes in the dota map.
     */
    SetBotThinkingEnabled(enabled: boolean): void;
    /**
     * Set a filter function to control the behavior when a bounty rune is picked up.
     * (Modify the table and Return true to use new values, return false to cancel the
     * event).
     */
    SetBountyRunePickupFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: BountyRunePickupFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set bounty rune spawn rate.
     */
    SetBountyRuneSpawnInterval(interval: number): void;
    /**
     * Enables or disables buyback completely.
     */
    SetBuybackEnabled(enabled: boolean): void;
    /**
     * Set a different camera distance; dota default is 1134.
     */
    SetCameraDistanceOverride(cameraDistanceOverride: number): void;
    /**
     * Set a different camera smooth count; dota default is 8.
     */
    SetCameraSmoothCountOverride(smoothCount: number): void;
    /**
     * Sets the camera Z range.
     */
    SetCameraZRange(minZ: number, maxZ: number): void;
    /**
     * Bool bAllow.
     */
    SetCanSellAnywhere(allow: boolean): void;
    /**
     * Modify derived stat value constants.
     */
    SetCustomAttributeDerivedStatValue(statType: AttributeDerivedStats, newValue: number): void;
    /**
     * Set the rate cooldown ticks down for items in the backpack.
     */
    SetCustomBackpackCooldownPercent(percent: number): void;
    /**
     * Set a custom cooldown for swapping items into the backpack.
     */
    SetCustomBackpackSwapCooldown(cooldown: number): void;
    /**
     * Turns on capability to define custom buyback cooldowns.
     */
    SetCustomBuybackCooldownEnabled(enabled: boolean): void;
    /**
     * Turns on capability to define custom buyback costs.
     */
    SetCustomBuybackCostEnabled(enabled: boolean): void;
    /**
     * Sets the topbar score display value for dire.
     */
    SetCustomDireScore(score: number): void;
    /**
     * Force all players to use the specified hero and disable the normal hero
     * selection process. Must be used before hero selection.
     */
    SetCustomGameForceHero(heroName: string): void;
    /**
     * Set a custom cooldown for team Glyph ability.
     */
    SetCustomGlyphCooldown(cooldown: number): void;
    /**
     * Allows definition of the max level heroes can achieve (default is 25).
     */
    SetCustomHeroMaxLevel(maxLevel: number): void;
    /**
     * Sets the topbar score display value for radiant.
     */
    SetCustomRadiantScore(score: number): void;
    /**
     * Set a custom cooldown for team Scan ability.
     */
    SetCustomScanCooldown(cooldown: number): void;
    /**
     * Set the effect used as a custom weather effect, when units are on non-default
     * terrain, in this mode.
     */
    SetCustomTerrainWeatherEffect(effectName: string): void;
    /**
     * Allows definition of a table of hero XP values.
     *
     * Requires `SetUseCustomHeroLevels` to be enabled.
     */
    SetCustomXPRequiredToReachNextLevel(table: Record<number, number>): void;
    /**
     * Set a filter function to control the behavior when a unit takes damage. (Modify
     * the table and Return true to use new values, return false to cancel the event).
     */
    SetDamageFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: DamageFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Sets the rate at which the day/night cycle advances (1.0 = default).
     */
    SetDaynightCycleAdvanceRate(rate: number): void;
    /**
     * Enable or disable the day/night cycle.
     */
    SetDaynightCycleDisabled(disable: boolean): void;
    /**
     * Specify whether the full screen death overlay effect plays when the selected
     * hero dies.
     */
    SetDeathOverlayDisabled(disabled: boolean): void;
    /**
     * Disables chat tips on death.
     */
    SetDeathTipsDisabled(disabled: boolean): void;
    /**
     * Sets the default sticky item in the quickbuy.
     */
    SetDefaultStickyItem(item: string): void;
    /**
     * Set drafting hero banning time.
     */
    SetDraftingBanningTimeOverride(value: number): void;
    /**
     * Set drafting hero pick time.
     */
    SetDraftingHeroPickSelectTimeOverride(value: number): void;
    /**
     * Set a filter function to control the behavior when a unit picks up an item.
     * (Modify the table and Return true to use new values, return false to cancel the
     * event).
     */
    SetExecuteOrderFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ExecuteOrderFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a fixed delay for all players to respawn after.
     */
    SetFixedRespawnTime(fixedRespawnTime: number): void;
    /**
     * Turn the fog of war on or off.
     */
    SetFogOfWarDisabled(disabled: boolean): void;
    /**
     * Specify a HUD skin that is forced on for this game mode.
     */
    SetForcedHUDSkin(value: string): void;
    /**
     * Prevent users from using the right click deny setting.
     */
    SetForceRightClickAttackDisabled(disabled: boolean): void;
    /**
     * Set the constant rate that the fountain will regen mana. (-1 for default).
     */
    SetFountainConstantManaRegen(constantManaRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen health. (-1 for default).
     */
    SetFountainPercentageHealthRegen(percentageHealthRegen: number): void;
    /**
     * Set the percentage rate that the fountain will regen mana. (-1 for default).
     */
    SetFountainPercentageManaRegen(percentageManaRegen: number): void;
    /**
     * If set to true, enable 7.23 free courier mode.
     */
    SetFreeCourierModeEnabled(enabled: boolean): void;
    /**
     * Allows clicks on friendly buildings to be handled normally.
     */
    SetFriendlyBuildingMoveToEnabled(enabled: boolean): void;
    /**
     * Bool bGive.
     */
    SetGiveFreeTPOnDeath(give: boolean): void;
    /**
     * Turn the sound when gold is acquired off/on.
     */
    SetGoldSoundDisabled(disabled: boolean): void;
    /**
     * Set a filter function to control the behavior when a unit heals. (Modify the
     * table and Return true to use new values, return false to cancel the event).
     */
    SetHealingFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: HealingFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Specify whether the default combat events will show in the HUD.
     */
    SetHudCombatEventsDisabled(disabled: boolean): void;
    /**
     * Set the HUD element visibility.
     */
    SetHUDVisible(hudElement: DOTAHUDVisibility_t, visible: boolean): void;
    /**
     * Set the amount blocked innately by melee heroes.
     */
    SetInnateMeleeDamageBlockAmount(amount: number): void;
    /**
     * Set the percent chance a melee hero will innately block damage.
     */
    SetInnateMeleeDamageBlockPercent(percent: number): void;
    /**
     * Set the amount innately blocked by melee heroes gained per level.
     */
    SetInnateMeleeDamageBlockPerLevelAmount(perLevelAmount: number): void;
    /**
     * Set a filter function to control what happens to items that are added to an
     * inventory, return false to cancel the event.
     */
    SetItemAddedToInventoryFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ItemAddedToInventoryFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set whether tombstones can be channeled to be removed by enemy heroes.
     */
    SetKillableTombstones(enabled: boolean): void;
    /**
     * Mutes the in-game killing spree announcer.
     */
    SetKillingSpreeAnnouncerDisabled(disabled: boolean): void;
    /**
     * Use to disable gold loss on death.
     */
    SetLoseGoldOnDeath(enabled: boolean): void;
    /**
     * Set the maximum attack speed for units.
     */
    SetMaximumAttackSpeed(maxSpeed: number): void;
    /**
     * Set the minimum attack speed for units.
     */
    SetMinimumAttackSpeed(minSpeed: number): void;
    /**
     * Set a filter function to control modifiers that are gained, return false to
     * destroy modifier.
     */
    SetModifierGainedFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifierGainedFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a filter function to control the behavior when a hero's experience is
     * modified. (Modify the table and Return true to use new values, return false to
     * cancel the event).
     */
    SetModifyExperienceFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifyExperienceFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Set a filter function to control the behavior when a hero's gold is modified.
     * (Modify the table and Return true to use new values, return false to cancel the
     * event).
     */
    SetModifyGoldFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: ModifyGoldFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * When enabled, undiscovered items in the neutral item stash are hidden.
     */
    SetNeutralItemHideUndiscoveredEnabled(enable: boolean): void;
    /**
     * Allow items to be sent to the neutral stash.
     */
    SetNeutralStashEnabled(enable: boolean): void;
    /**
     * When enabled, the all neutral items tab cannot be viewed.
     */
    SetNeutralStashTeamViewOnlyEnabled(enable: boolean): void;
    /**
     * Set an override for the default selection entity, instead of each player's hero.
     */
    SetOverrideSelectionEntity(overrideEntity: CDOTA_BaseNPC | undefined): void;
    /**
     * Set pausing enabled/disabled.
     */
    SetPauseEnabled(enabled: boolean): void;
    /**
     * Bool bFilter.
     */
    SetPlayerHeroAvailabilityFiltered(filter: boolean): void;
    /**
     * Set power rune spawn rate.
     */
    SetPowerRuneSpawnInterval(interval: number): void;
    /**
     * Disables bonus items for randoming a hero.
     */
    SetRandomHeroBonusItemGrantDisabled(disabled: boolean): void;
    /**
     * Turn the panel for showing recommended items at the shop off/on.
     */
    SetRecommendedItemsDisabled(disabled: boolean): void;
    /**
     * Make it so illusions are immediately removed upon death, rather than sticking
     * around for a few seconds.
     */
    SetRemoveIllusionsOnDeath(remove: boolean): void;
    /**
     * Sets the scale applied to non-fixed respawn times. 1 = default DOTA respawn
     * calculations.
     */
    SetRespawnTimeScale(value: number): void;
    /**
     * Set if a given type of rune is enabled.
     */
    SetRuneEnabled(rune: DOTA_RUNES, enabled: boolean): void;
    /**
     * Set a filter function to control what rune spawns. (Modify the table and Return
     * true to use new values, return false to cancel the event).
     */
    SetRuneSpawnFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: RuneSpawnFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Enable/disable gold penalty for late picking.
     */
    SetSelectionGoldPenaltyEnabled(enabled: boolean): void;
    /**
     * Allow items to be sent to the stash.
     */
    SetSendToStashEnabled(enable: boolean): void;
    /**
     * Turn purchasing items to the stash off/on. If purchasing to the stash is off
     * the player must be at a shop to purchase items.
     */
    SetStashPurchasingDisabled(disabled: boolean): void;
    /**
     * Hide the sticky item in the quickbuy.
     */
    SetStickyItemDisabled(disabled: boolean): void;
    /**
     * Set the team values on the top game bar.
     */
    SetTopBarTeamValue(team: DOTATeam_t, value: number): void;
    /**
     * Override the values of the team values on the top game bar.
     */
    SetTopBarTeamValuesOverride(override: boolean): void;
    /**
     * Turning on/off the team values on the top game bar.
     */
    SetTopBarTeamValuesVisible(visible: boolean): void;
    /**
     * Enables/Disables tower backdoor protection.
     */
    SetTowerBackdoorProtectionEnabled(enabled: boolean): void;
    /**
     * Sets the item which goes in the TP scroll slot.
     */
    SetTPScrollSlotItemOverride(itemName: string): void;
    /**
     * Set a filter function to control when tracking projectiles are launched.
     * (Modify the table and Return true to use new values, return false to cancel the
     * event).
     */
    SetTrackingProjectileFilter<TContext extends {}>(
        filterFunc: (this: TContext, event: TrackingProjectileFilterEvent) => boolean,
        context: TContext,
    ): void;
    /**
     * Enable or disable unseen fog of war. When enabled parts of the map the player
     * has never seen will be completely hidden by fog of war.
     */
    SetUnseenFogOfWarEnabled(enabled: boolean): void;
    /**
     * Turn on custom-defined XP values for hero level ups.  The table should be
     * defined before switching this on.
     */
    SetUseCustomHeroLevels(enabled: boolean): void;
    /**
     * If set to true, use current rune spawn rules.  Either setting respects custom
     * spawn intervals.
     */
    SetUseDefaultDOTARuneSpawnLogic(enabled: boolean): void;
    /**
     * Enables or disables turbo couriers.
     */
    SetUseTurboCouriers(enabled: boolean): void;
    /**
     * Sets the time from game start during which water runes spawn.
     */
    SetWaterRuneLastSpawnTime(value: number): void;
    /**
     * Set if weather effects are disabled.
     */
    SetWeatherEffectsDisabled(disable: boolean): void;
    /**
     * Set xp rune spawn rate.
     */
    SetXPRuneSpawnInterval(interval: number): void;
    ShouldGiveFreeTPOnDeath(): boolean;
    __kind__: 'instance';
}

declare const DOTAGameManager: CDOTAGameManager;

/** @both */
declare const CDOTAGameManager: DotaConstructor<CDOTAGameManager>;

declare interface CDOTAGameManager {
    /**
     * Get the hero unit.
     *
     * @both
     */
    GetHeroDataByName_Script(heroName: string): object;
    /**
     * Get the hero ID given the hero name.
     *
     * @both
     */
    GetHeroIDByName(heroName: string): number;
    /**
     * Get the hero name given a hero ID.
     *
     * @both
     */
    GetHeroNameByID(heroId: number): string;
    /**
     * Get the hero name given a unit name.
     *
     * @both
     */
    GetHeroNameForUnitName(unitName: string): string;
    /**
     * Get the hero unit name given the hero ID.
     *
     * @both
     */
    GetHeroUnitNameByID(heroId: number): string;
    __kind__: 'instance';
}

declare const GameRules: CDOTAGameRules;

/** @both */
declare const CDOTAGameRules: DotaConstructor<CDOTAGameRules>;

declare interface CDOTAGameRules {
    /**
     * Spawn a bot player of the passed hero name, player name, and team.
     *
     * @param entityScript Path to a script file executed in the context of spawned
     *                     hero entity.
     */
    AddBotPlayerWithEntityScript(
        heroName: string,
        playerName: string,
        team: DOTATeam_t,
        entityScript: string,
        arg5: boolean,
    ): CDOTA_BaseNPC_Hero | undefined;
    /**
     * Event-only.
     */
    AddEventMetadataLeaderboardEntry(
        nameSuffix: string,
        stars: number,
        maxStars: number,
        extraData1: number,
        extraData2: number,
        extraData3: number,
        extraData4: number,
        extraData5: number,
        extraData6: number,
    ): boolean;
    /**
     * Event-only.
     */
    AddEventMetadataLeaderboardEntryRawScore(
        nameSuffix: string,
        score: number,
        extraData1: number,
        extraData2: number,
        extraData3: number,
        extraData4: number,
        extraData5: number,
        extraData6: number,
    ): boolean;
    /**
     * Add the hero ID to the hero blacklist if it is not already present.
     */
    AddHeroIDToBlacklist(arg1: number): void;
    /**
     * Add the hero ID to the hero whitelist if it is not already present.
     */
    AddHeroIDToWhitelist(arg1: number): void;
    /**
     * Add the hero to the hero blacklist if it is not already present.
     */
    AddHeroToBlacklist(arg1: string): void;
    /**
     * Adds hero of given ID to available heroes of player of given ID.
     */
    AddHeroToPlayerAvailability(arg1: number, arg2: number): void;
    /**
     * Add the hero to the hero whitelist if it is not already present.
     */
    AddHeroToWhitelist(arg1: string): void;
    /**
     * Add an item to the whitelist.
     */
    AddItemToWhiteList(itemName: string): void;
    /**
     * Add a point on the minimap.
     */
    AddMinimapDebugPoint(
        arg1: number,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
    ): void;
    /**
     * Add a point on the minimap for a specific team.
     */
    AddMinimapDebugPointForTeam(
        arg1: number,
        arg2: Vector,
        arg3: number,
        arg4: number,
        arg5: number,
        arg6: number,
        arg7: number,
        arg8: number,
    ): void;
    /**
     * Begin night stalker night.
     */
    BeginNightstalkerNight(duration: number): void;
    /**
     * Begin temporary night.
     */
    BeginTemporaryNight(duration: number): void;
    /**
     * Fills all the teams with bots if cheat mode is enabled.
     */
    BotPopulate(): void;
    /**
     * Clears the hero blacklist.
     */
    ClearHeroBlacklist(): void;
    /**
     * Clears the hero whitelist.
     */
    ClearHeroWhitelist(): void;
    /**
     * Clears available heroes of player of given ID.
     */
    ClearPlayerHeroAvailability(arg1: number): void;
    /**
     * Clears the current river paint.
     */
    ClearRiverPaint(): void;
    /**
     * Kills the ancient, etc.
     */
    Defeated(): void;
    /**
     * True when we have waited some time after end of the game and not received
     * signout.
     */
    DidMatchSignoutTimeOut(): boolean;
    /**
     * Enabled (true) or disable (false) auto launch for custom game setup.
     */
    EnableCustomGameSetupAutoLaunch(enabled: boolean): void;
    /**
     * Sends a minimap ping to all players on the team.
     */
    ExecuteTeamPing(
        team: DOTATeam_t,
        xCoord: number,
        yCoord: number,
        entity: CBaseEntity | undefined,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    ): void;
    /**
     * Indicate that the custom game setup phase is complete, and advance to the game.
     */
    FinishCustomGameSetup(): void;
    /**
     * Spawn the next wave of creeps.
     */
    ForceCreepSpawn(): void;
    /**
     * Transition game state to DOTA_GAMERULES_STATE_GAME_IN_PROGRESS.
     */
    ForceGameStart(): void;
    /**
     * Get the announcer for a team.
     */
    GetAnnouncer(team: DOTATeam_t): CDOTA_BaseNPC | undefined;
    /**
     * Returns the hero unit names banned in this game, if any.
     *
     * @both
     */
    GetBannedHeroes(): string[];
    /**
     * Returns the hero unit IDs banned in this game, if any.
     *
     * @both
     */
    GetBannedHeroIDs(): object;
    /**
     * Returns the difficulty level of the custom game mode.
     *
     * @both
     */
    GetCustomGameDifficulty(): number;
    /**
     * Get whether a team is selectable during game setup.
     */
    GetCustomGameTeamMaxPlayers(team: DOTATeam_t): number;
    /**
     * Returns difficulty level of the custom game mode.
     *
     * @both
     */
    GetDifficulty(): number;
    /**
     * Returns the actual DOTA in-game clock time.
     *
     * @both
     */
    GetDOTATime(includePreGame: boolean, includeNegativeTime: boolean): number;
    /**
     * Gets the Xth dropped item.
     */
    GetDroppedItem(index: number): CDOTA_Item_Physical | undefined;
    /**
     * Returns the number of seconds elapsed since the last frame was renderered. This
     * time doesn't count up when the game is paused.
     *
     * @both
     */
    GetGameFrameTime(): number;
    /**
     * Get the game mode entity.
     */
    GetGameModeEntity(): CDOTABaseGameMode;
    /**
     * Get a string value from the game session config (map options).
     */
    GetGameSessionConfigValue(arg1: string, arg2: string): string;
    /**
     * Returns the number of seconds elapsed since map start. This time doesn't count
     * up when the game is paused.
     *
     * @both
     */
    GetGameTime(): number;
    /**
     * Get the time it takes to add a new item to stock.
     *
     * @both
     */
    GetIetmStockDuration(arg1: number, arg2: string, arg3: number): number;
    /**
     * Get the stock count of the item.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     * @both
     */
    GetItemStockCount(team: DOTATeam_t, itemName: string, playerId: PlayerID): number;
    /**
     * Get the time an item will be added to stock.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     * @both
     */
    GetItemStockTime(team: DOTATeam_t, itemName: string, playerId: PlayerID): number;
    /**
     * Have we received the post match signout message that includes reward
     * information.
     */
    GetMatchSignoutComplete(): boolean;
    /**
     * Gets the extra offset to initial neutral creep spawn delay.
     *
     * @both
     */
    GetNeutralInitialSpawnOffset(): number;
    /**
     * Gets next bounty rune spawn time.
     */
    GetNextBountyRuneSpawnTime(): number;
    /**
     * Gets next rune spawn time.
     */
    GetNextRuneSpawnTime(): number;
    /**
     * For New Bloom, get total damage taken by the Nian / Year Beast.
     */
    GetNianTotalDamageTaken(): number;
    /**
     * Gets the player's custom game account record, as it looked at the start of this
     * session.
     *
     * @deprecated Unreleased.
     */
    GetPlayerCustomGameAccountRecord(playerId: PlayerID): object;
    /**
     * Get time remaining between state changes.
     */
    GetStateTransitionTime(): number;
    /**
     * Get the time of day.
     */
    GetTimeOfDay(): number;
    /**
     * Get Weather Wind Direction Vector.
     *
     * @both
     */
    GetWeatherWindDirection(): Vector;
    /**
     * Increase an item's stock count, clamped to item max.
     *
     * @param count Negative values decrease stock count.
     * @param playerId Values other than -1 work only for items with
     *                 "PlayerSpecificCooldown" property.
     */
    IncreaseItemStock(team: DOTATeam_t, itemName: string, count: number, playerId: PlayerID): void;
    /**
     * Are cheats enabled on the server.
     *
     * @both
     */
    IsCheatMode(): boolean;
    /**
     * Is it day time?
     */
    IsDaytime(): boolean;
    /** @both */
    IsDev(): boolean;
    /**
     * Returns whether the game is paused.
     */
    IsGamePaused(): boolean;
    /**
     * Is the hero not blacklisted, and is it either whitelisted or the whitelist is
     * empty?
     *
     * @both
     */
    IsHeroEnabledViaLists(arg1: string): boolean;
    /**
     * Returns whether hero respawn is enabled.
     */
    IsHeroRespawnEnabled(): boolean;
    /**
     * Are we in the ban phase of hero pick?
     */
    IsInBanPhase(): boolean;
    /**
     * Query an item in the whitelist.
     */
    IsItemInWhiteList(itemName: string): boolean;
    /**
     * Is it night stalker night-time?
     */
    IsNightstalkerNight(): boolean;
    /**
     * Returns whether Dota Plus ability suggestions are enabled or disabled.
     */
    IsSuggestAbilitiesEnabled(): boolean;
    /**
     * Returns whether Dota Plus item suggestions are enabled or disabled.
     */
    IsSuggestItemsEnabled(): boolean;
    /**
     * Is it temporarily night-time?
     */
    IsTemporaryNight(): boolean;
    /**
     * Lock (true) or unlock (false) team assignemnt. If team assignment is locked
     * players cannot change teams.
     */
    LockCustomGameSetupTeamAssignment(locked: boolean): void;
    /**
     * Makes the specified team lose.
     */
    MakeTeamLose(team: DOTATeam_t): void;
    /**
     * Like ModifyGold, but will use the gold filter if SetFilterMoreGold has been set
     * true.
     */
    ModifyGoldFiltered(
        playerId: PlayerID,
        goldChange: number,
        reliable: boolean,
        reason: EDOTA_ModifyGold_Reason,
    ): number;
    /**
     * Returns the number of items currently dropped on the ground.
     */
    NumDroppedItems(): number;
    /**
     * Whether a player has custom game host privileges (shuffle teams, etc.).
     */
    PlayerHasCustomGameHostPrivileges(player: CDOTAPlayerController): boolean;
    /**
     * Updates custom hero, unit and ability KeyValues in memory with the latest
     * values from disk.
     */
    Playtesting_UpdateAddOnKeyValues(): void;
    /**
     * Prepare Dota lane style spawners with a given interval.
     */
    PrepareSpawners(arg1: number): void;
    /**
     * Removes a fake client.
     */
    RemoveFakeClient(playerId: PlayerID): void;
    /**
     * Remove the hero from the hero blacklist if present.
     */
    RemoveHeroFromBlacklist(arg1: string): void;
    /**
     * Remove the hero from the hero whitelist if present.
     */
    RemoveHeroFromWhitelist(arg1: string): void;
    /**
     * Remove the hero ID from the hero blacklist if present.
     */
    RemoveHeroIDFromBlacklist(arg1: number): void;
    /**
     * Remove the hero ID from the hero whitelist if present.
     */
    RemoveHeroIDFromWhitelist(arg1: number): void;
    /**
     * Remove an item from the whitelist.
     */
    RemoveItemFromWhiteList(itemName: string): void;
    /**
     * Restart after killing the ancient, etc.
     */
    ResetDefeated(): void;
    /**
     * Restart gametime from 0.
     */
    ResetGameTime(): void;
    /**
     * Resets the player of a given ID.
     */
    ResetPlayer(arg1: number): void;
    /**
     * Restart at custom game setup.
     */
    ResetToCustomGameSetup(): void;
    /**
     * Restart the game at hero selection.
     */
    ResetToHeroSelection(): void;
    /**
     * Get the MatchID for this game.
     */
    Script_GetMatchID(): Uint64;
    /**
     * Sends a message on behalf of a player.
     */
    SendCustomMessage(arg1: string, arg2: number, arg3: number): void;
    /**
     * Sends a message on behalf of a player to the specified team.
     */
    SendCustomMessageToTeam(arg1: string, arg2: number, arg3: number, arg4: number): void;
    /**
     * Allow Outposts granting XP.
     */
    SetAllowOutpostBonuses(arg1: boolean): void;
    /**
     * Scale the creep icons on the minimap.
     */
    SetCreepMinimapIconScale(scale: number): void;
    /**
     * Sets whether the regular Dota creeps spawn.
     */
    SetCreepSpawningEnabled(arg1: boolean): void;
    /**
     * Sets a callback to handle saving custom game account records (callback is
     * passed a Player ID and should return a flat simple table).
     *
     * @deprecated Unreleased.
     */
    SetCustomGameAccountRecordSaveFunction(arg1: object, arg2: object): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowBattleMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowHeroPickMusic(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the default music handling code for custom games.
     */
    SetCustomGameAllowMusicAtGameStart(allow: boolean): void;
    /**
     * Sets a flag to enable/disable the casting secondary abilities from units other
     * than the player's own hero.
     */
    SetCustomGameAllowSecondaryAbilitiesOnOtherUnits(arg1: boolean): void;
    /**
     * Set number of hero bans each team gets.
     */
    SetCustomGameBansPerTeam(arg1: number): void;
    /**
     * Set the difficulty level of the custom game mode.
     */
    SetCustomGameDifficulty(difficulty: number): void;
    /**
     * Sets the game end delay.
     */
    SetCustomGameEndDelay(delay: number): void;
    /**
     * Set the amount of time to wait for auto launch.
     */
    SetCustomGameSetupAutoLaunchDelay(delay: number): void;
    /**
     * Set the amount of remaining time, in seconds, for custom game setup. 0 = finish
     * immediately, -1 = wait forever.
     */
    SetCustomGameSetupRemainingTime(remainingTime: number): void;
    /**
     * Setup (pre-gameplay) phase timeout. 0 = instant, -1 = forever (until
     * FinishCustomGameSetup is called).
     */
    SetCustomGameSetupTimeout(timeout: number): void;
    /**
     * Set whether a team is selectable during game setup.
     */
    SetCustomGameTeamMaxPlayers(team: DOTATeam_t, maxPlayers: number): void;
    /**
     * Sets the victory message.
     */
    SetCustomVictoryMessage(message: string): void;
    /**
     * Sets the victory message duration.
     */
    SetCustomVictoryMessageDuration(duration: number): void;
    /**
     * Allow alternate hero grids to be used (DOTA+, etc).  True by default.
     */
    SetEnableAlternateHeroGrids(arg1: boolean): void;
    /**
     * Event-only.
     */
    SetEventMetadataCustomTable(metadataTable: object): boolean;
    /**
     * Event-only.
     */
    SetEventSignoutCustomTable(metadataTable: object): boolean;
    /**
     * Sets whether to filter more gold events than normal.
     */
    SetFilterMoreGold(arg1: boolean): void;
    /**
     * Sets whether First Blood has been triggered.
     */
    SetFirstBloodActive(active: boolean): void;
    /**
     * Makes the specified team win.
     */
    SetGameWinner(team: DOTATeam_t): void;
    /**
     * Set Glyph cooldown for team.
     */
    SetGlyphCooldown(team: DOTATeam_t, cooldown: number): void;
    /**
     * Set the auto gold increase per timed interval.
     */
    SetGoldPerTick(amount: number): void;
    /**
     * Set the time interval between auto gold increases.
     */
    SetGoldTickTime(time: number): void;
    /**
     * Scale the hero minimap icons on the minimap.
     */
    SetHeroMinimapIconScale(scale: number): void;
    /**
     * Control if the normal DOTA hero respawn rules apply.
     */
    SetHeroRespawnEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have to pick their hero.
     */
    SetHeroSelectionTime(selectionTime: number): void;
    /**
     * Sets amount of penalty time before randoming a hero.
     */
    SetHeroSelectPenaltyTime(arg1: number): void;
    /**
     * Should blacklisted heroes be hidden, or just dimmed, in hero picking?
     */
    SetHideBlacklistedHeroes(arg1: boolean): void;
    /**
     * Sets whether the multikill, streak, and first-blood banners appear at the top
     * of the screen.
     */
    SetHideKillMessageHeaders(hideHeaders: boolean): void;
    /**
     * Set whether custom and event games should ignore Lobby teams when assigning
     * players to teams. Defaults to true.
     */
    SetIgnoreLobbyTeamsInCustomGame(arg1: boolean): void;
    /**
     * Set the stock count of the item.
     *
     * @param playerId Used only for items with "PlayerSpecificCooldown"
     */
    SetItemStockCount(count: number, team: DOTATeam_t, itemName: string, playerId: PlayerID): void;
    /**
     * Sets the extra offset to initial neutral creep spawn delay.
     */
    SetNeutralInitialSpawnOffset(arg1: number): void;
    /**
     * Sets next bounty rune spawn time.
     */
    SetNextBountyRuneSpawnTime(arg1: number): void;
    /**
     * Sets next rune spawn time.
     */
    SetNextRuneSpawnTime(arg1: number): void;
    /**
     * Show this unit's health on the overlay health bar.
     */
    SetOverlayHealthBarUnit(unit: CDOTA_BaseNPC, style: number): void;
    /**
     * Set columns to show in post game.
     */
    SetPostGameColumns(arg1: object): boolean;
    /**
     * Configure post game to be single or double column layout.
     */
    SetPostGameLayout(arg1: number): void;
    /**
     * Set score value for each team. First element is for DOTA_TEAM_GOODGUYS.
     */
    SetPostGameTeamScores(arg1: object): boolean;
    /**
     * Sets the amount of time players have between the game ending and the server
     * disconnecting them.
     */
    SetPostGameTime(time: number): void;
    /**
     * Sets the amount of time players have between picking their hero and game start.
     */
    SetPreGameTime(time: number): void;
    /**
     * Paints the river for a duration.
     */
    SetRiverPaint(arg1: number, arg2: number): void;
    /**
     * Scale the rune icons on the minimap.
     */
    SetRuneMinimapIconScale(minimapRuneIconScale: number): void;
    /**
     * Sets the amount of time between rune spawns.
     */
    SetRuneSpawnTime(time: number): void;
    /**
     * Mark this game as safe to leave.
     */
    SetSafeToLeave(safeToLeave: boolean): void;
    /**
     * When true, players can repeatedly pick the same hero.
     */
    SetSameHeroSelectionEnabled(enabled: boolean): void;
    /**
     * Sets the amount of time players have between the strategy phase and entering
     * the pre-game phase.
     */
    SetShowcaseTime(time: number): void;
    /**
     * Set whether to speak a Spawn concept instead of a Respawn concept on respawn.
     */
    SetSpeechUseSpawnInsteadOfRespawnConcept(arg1: boolean): void;
    /**
     * Set the starting gold amount.
     */
    SetStartingGold(amount: number): void;
    /**
     * Sets the amount of time players have between the hero selection and entering
     * the showcase phase.
     */
    SetStrategyTime(time: number): void;
    /**
     * Sets Dota Plus ability suggestions enabled or disabled.
     */
    SetSuggestAbilitiesEnabled(arg1: boolean): void;
    /**
     * Sets Dota Plus ability item enabled or disabled.
     */
    SetSuggestItemsEnabled(arg1: boolean): void;
    /**
     * Set the time of day.
     */
    SetTimeOfDay(time: number): void;
    /**
     * Sets the tree regrow time in seconds.
     */
    SetTreeRegrowTime(time: number): void;
    /**
     * Heroes will use the basic NPC functionality for determining their bounty,
     * rather than DOTA specific formulas.
     */
    SetUseBaseGoldBountyOnHeroes(useBaseGoldBounties: boolean): void;
    /**
     * Allows heroes in the map to give a specific amount of XP (this value must be
     * set).
     */
    SetUseCustomHeroXPValues(useCustomXPValues: boolean): void;
    /**
     * When true, all items are available at as long as any shop is in range.
     */
    SetUseUniversalShopMode(useUniversalShopMode: boolean): void;
    /**
     * Set Weather Wind Direction Vector.
     */
    SetWeatherWindDirection(arg1: Vector): void;
    /**
     * Item whitelist functionality enable/disable.
     */
    SetWhiteListEnabled(whiteListEnabled: boolean): void;
    /**
     * Are blacklisted heroes hidden, or just dimmed, in hero picking?
     *
     * @both
     */
    ShouldHideBlacklistedHeroes(): boolean;
    /**
     * Spawn and release the next creep wave from Dota lane style spawners.
     */
    SpawnAndReleaseCreeps(): void;
    /**
     * Spawn and release the next set of neutral camps.
     */
    SpawnNeutralCreeps(): void;
    /**
     * Get the current Gamerules state.
     *
     * @both
     */
    State_Get(): DOTA_GameState;
    __kind__: 'instance';
}

declare const CDOTAPlayerController: DotaConstructor<CDOTAPlayerController>;

/** @client */
declare const C_DOTAPlayerController: typeof CDOTAPlayerController;

declare interface CDOTAPlayerController extends CBaseAnimatingActivity {
    /**
     * Attempt to spawn the appropriate couriers for this mode.
     */
    CheckForCourierSpawning(hero: CDOTA_BaseNPC_Hero): object;
    /** @client */
    GetActiveAbility(): object;
    /**
     * Get the player's hero.
     */
    GetAssignedHero(): CDOTA_BaseNPC_Hero;
    /** @client */
    GetClickBehaviors(): unknown;
    /**
     * Get the player's official PlayerID; notably is -1 when the player isn't yet on
     * a team.
     */
    GetPlayerID(): PlayerID;
    /** @client */
    GetQueryUnit(): object;
    /**
     * Randoms this player's hero.
     */
    MakeRandomHeroSelection(): void;
    /**
     * Sets this player's hero .
     */
    SetAssignedHeroEntity(hero: object): void;
    /**
     * Set the kill cam unit for this hero.
     */
    SetKillCamUnit(entity: CDOTA_BaseNPC): void;
    /**
     * Set the music status for this player, note this will only really apply if
     * dota_music_battle_enable is off.
     */
    SetMusicStatus(musicStatus: number, intensity: number): void;
    /**
     * Sets this player's hero selection.
     */
    SetSelectedHero(heroName: string): void;
    /** @client */
    ShouldDisplayInWorldUIElements(): boolean;
    /**
     * Spawn a courier for this player at the given position.
     */
    SpawnCourierAtPosition(location: Vector): CDOTA_Unit_Courier;
    __kind__: 'instance';
}

declare const CDotaQuest: DotaConstructor<CDotaQuest>;

declare interface CDotaQuest extends CBaseEntity {
    /**
     * Add a subquest to this quest.
     */
    AddSubquest(subquest: object): void;
    /**
     * Mark this quest complete.
     */
    CompleteQuest(): void;
    /**
     * Finds a subquest from this quest by index.
     */
    GetSubquest(index: number): object;
    /**
     * Finds a subquest from this quest by name.
     */
    GetSubquestByName(name: string): object;
    /**
     * Remove a subquest from this quest.
     */
    RemoveSubquest(subquest: object): void;
    /**
     * Set the text replace string for this quest.
     */
    SetTextReplaceString(string: string): void;
    /**
     * Set a quest value.
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
    __kind__: 'instance';
}

declare const CDotaSubquestBase: DotaConstructor<CDotaSubquestBase>;

declare interface CDotaSubquestBase extends CBaseEntity {
    /**
     * Mark this subquest complete.
     */
    CompleteSubquest(): void;
    /**
     * Set the text replace string for this subquest.
     */
    SetTextReplaceString(string: string): void;
    /**
     * Set a subquest value.
     */
    SetTextReplaceValue(valueSlot: number, value: number): void;
    __kind__: 'instance';
}

declare const Tutorial: CDOTATutorial;

declare const CDOTATutorial: DotaConstructor<CDOTATutorial>;

declare interface CDOTATutorial {
    /**
     * Add a computer controlled bot.
     */
    AddBot(heroName: string, arg2: string, arg3: string, arg4: boolean): boolean;
    /**
     * Add a quest to the quest log.
     */
    AddQuest(arg1: string, arg2: number, arg3: string, arg4: string): void;
    /**
     * Add an item to the shop whitelist.
     */
    AddShopWhitelistItem(itemName: string): void;
    /**
     * Complete a quest,.
     */
    CompleteQuest(arg1: string): void;
    /**
     * Add a task to move to a specific location.
     */
    CreateLocationTask(arg1: Vector): void;
    /**
     * Alert the player when a creep becomes agro to their hero.
     */
    EnableCreepAggroViz(arg1: boolean): void;
    /**
     * Enable the tip to alert players how to find their hero.
     */
    EnablePlayerOffscreenTip(arg1: boolean): void;
    /**
     * Alert the player when a tower becomes agro to their hero.
     */
    EnableTowerAggroViz(arg1: boolean): void;
    /**
     * End the tutorial.
     */
    FinishTutorial(): void;
    /**
     * Force the start of the game.
     */
    ForceGameStart(): void;
    /**
     * Is this item currently in the white list.
     */
    IsItemInWhiteList(itemName: string): boolean;
    /**
     * Remove an item from the shop whitelist.
     */
    RemoveShopWhitelistItem(itemName: string): void;
    /**
     * Select a hero for the local player.
     */
    SelectHero(heroName: string): void;
    /**
     * Select the team for the local player.
     */
    SelectPlayerTeam(arg1: string): void;
    /**
     * Set the current item guide.
     */
    SetItemGuide(arg1: string): void;
    /**
     * Set gold amount for the tutorial player.
     *
     * @param setNotModify When true sets gold amount, otherwise modifies it
     */
    SetOrModifyPlayerGold(goldAmount: number, setNotModify: boolean): void;
    /**
     * Set players quick buy item.
     */
    SetQuickBuy(itemName: string): void;
    /**
     * Set the shop open or closed.
     */
    SetShopOpen(open: boolean): void;
    /**
     * Set a tutorial convar.
     */
    SetTutorialConvar(arg1: string, arg2: string): void;
    /**
     * Set the UI to use a reduced version to focus attention to specific elements.
     */
    SetTutorialUI(arg1: number): void;
    /**
     * Set if we should whitelist shop items.
     */
    SetWhiteListEnabled(whiteListEnabled: boolean): void;
    /**
     * Initialize Tutorial Mode.
     */
    StartTutorialMode(): void;
    /**
     * Upgrade a specific ability for the local hero.
     */
    UpgradePlayerAbility(abilityName: string): void;
    __kind__: 'instance';
}

declare const CDotaTutorialNPCBlocker: DotaConstructor<CDotaTutorialNPCBlocker>;

declare interface CDotaTutorialNPCBlocker extends CBaseFlex {
    SetEnabled(enabled: boolean): void;
    SetOtherBlocker(blocker: object): void;
    __kind__: 'instance';
}

declare const VoteSystem: CDOTAVoteSystem;

declare const CDOTAVoteSystem: DotaConstructor<CDOTAVoteSystem>;

declare interface CDOTAVoteSystem {
    /**
     * Starts a vote, based upon a table of parameters.
     */
    StartVote(arg1: object): void;
    __kind__: 'instance';
}

declare const Entities: CEntities;

/** @both */
declare const CEntities: DotaConstructor<CEntities>;

declare interface CEntities {
    /**
     * Creates an entity by classname.
     */
    CreateByClassname(className: string): CBaseEntity;
    /**
     * Finds all entities by class name. Returns an array containing all the found
     * entities.
     */
    FindAllByClassname(className: string): CBaseEntity[];
    /**
     * Find entities by class name within a radius.
     */
    FindAllByClassnameWithin(className: string, location: Vector, radius: number): CBaseEntity[];
    /**
     * Find entities by model name.
     */
    FindAllByModel(modelName: string): CBaseEntity[];
    /**
     * Find all entities by name. Returns an array containing all the found entities
     * in it.
     */
    FindAllByName(name: string): CBaseEntity[];
    /**
     * Find entities by name within a radius.
     */
    FindAllByNameWithin(name: string, location: Vector, radius: number): CBaseEntity[];
    /**
     * Find entities by targetname.
     */
    FindAllByTarget(target: string): CBaseEntity[];
    /**
     * Find entities within a radius.
     */
    FindAllInSphere(location: Vector, radius: number): CBaseEntity[];
    /**
     * Find entities by class name. Pass 'null' to start an iteration, or reference to
     * a previously found entity to continue a search.
     */
    FindByClassname(previous: CBaseEntity | undefined, className: string): CBaseEntity | undefined;
    /**
     * Find entities by class name nearest to a point.
     */
    FindByClassnameNearest(className: string, location: Vector, radius: number): CBaseEntity | undefined;
    /**
     * Find entities by class name within a radius. Pass 'null' to start an iteration,
     * or reference to a previously found entity to continue a search.
     */
    FindByClassnameWithin(
        previous: CBaseEntity | undefined,
        className: string,
        location: Vector,
        radius: number,
    ): CBaseEntity | undefined;
    /**
     * Find entities by model name. Pass 'null' to start an iteration, or reference to
     * a previously found entity to continue a search.
     */
    FindByModel(previous: CBaseEntity | undefined, modelName: string): CBaseEntity | undefined;
    /**
     * Find entities by model name within a radius. Pass 'null' to start an iteration,
     * or reference to a previously found entity to continue a search.
     */
    FindByModelWithin(
        previous: CBaseEntity | undefined,
        modelName: string,
        location: Vector,
        radius: number,
    ): CBaseEntity | undefined;
    /**
     * Find entities by name. Pass 'null' to start an iteration, or reference to a
     * previously found entity to continue a search.
     */
    FindByName(previous: CBaseEntity | undefined, name: string): CBaseEntity | undefined;
    /**
     * Find entities by name nearest to a point.
     */
    FindByNameNearest(name: string, location: Vector, radius: number): CBaseEntity | undefined;
    /**
     * Find entities by name within a radius. Pass 'null' to start an iteration, or
     * reference to a previously found entity to continue a search.
     */
    FindByNameWithin(
        previous: CBaseEntity | undefined,
        name: string,
        location: Vector,
        radius: number,
    ): CBaseEntity | undefined;
    /**
     * Find entities by targetname. Pass 'null' to start an iteration, or reference to
     * a previously found entity to continue a search.
     */
    FindByTarget(previous: CBaseEntity | undefined, target: string): CBaseEntity | undefined;
    /**
     * Find entities within a radius. Pass 'null' to start an iteration, or reference
     * to a previously found entity to continue a search.
     */
    FindInSphere(previous: CBaseEntity | undefined, location: Vector, radius: number): CBaseEntity | undefined;
    /**
     * Begin an iteration over the list of entities.
     *
     * @both
     */
    First(): CBaseEntity;
    /**
     * Get the local player controller (backcompat).
     *
     * @both
     */
    GetLocalPlayer(): CDOTAPlayerController;
    /**
     * Get the local player controller.
     *
     * @both
     */
    GetLocalPlayerController(): object;
    /**
     * Get the local player pawn.
     *
     * @both
     */
    GetLocalPlayerPawn(): object;
    /**
     * Continue an iteration over the list of entities, providing reference to a
     * previously found entity.
     *
     * @both
     */
    Next(previous: CBaseEntity | undefined): CBaseEntity | undefined;
    __kind__: 'instance';
}

/** @both */
declare const CEntityInstance: DotaConstructor<CEntityInstance>;

declare interface CEntityInstance {
    /**
     * Adds an I/O connection that will call the named function on this entity when
     * the specified output fires.
     *
     * @both
     */
    ConnectOutput(arg1: string, arg2: string): void;
    /** @both */
    Destroy(): void;
    /**
     * Removes a connected script function from an I/O event on this entity.
     *
     * @both
     */
    DisconnectOutput(arg1: string, arg2: string): void;
    /**
     * Removes a connected script function from an I/O event on the passed entity.
     *
     * @both
     */
    DisconnectRedirectedOutput(arg1: string, arg2: string, arg3: object): void;
    /** @both */
    entindex(): EntityIndex;
    /**
     * Fire an entity output.
     *
     * @both
     */
    FireOutput(arg1: string, arg2: object, arg3: object, arg4: object, arg5: number): void;
    /** @both */
    GetClassname(): string;
    /**
     * Get the entity name w/help if not defined (i.e. classname/etc).
     *
     * @both
     */
    GetDebugName(): string;
    /**
     * Get the entity as an EHANDLE.
     *
     * @both
     */
    GetEntityHandle(): number;
    /** @both */
    GetEntityIndex(): EntityIndex;
    /**
     * Get Integer Attribute.
     *
     * @both
     */
    GetIntAttr(arg1: string): number;
    /** @both */
    GetName(): string;
    /**
     * Retrieve, creating if necessary, the private per-instance script-side data
     * associated with an entity.
     *
     * @both
     */
    GetOrCreatePrivateScriptScope(): object;
    /**
     * Retrieve, creating if necessary, the public script-side data associated with an
     * entity.
     *
     * @both
     */
    GetOrCreatePublicScriptScope(): object;
    /**
     * Retrieve the private per-instance script-side data associated with an entity.
     *
     * @both
     */
    GetPrivateScriptScope(): object;
    /**
     * Retrieve the public script-side data associated with an entity.
     *
     * @both
     */
    GetPublicScriptScope(): object;
    /**
     * Has underlying C++ entity object been deleted?
     *
     * @both
     */
    IsNull(): boolean;
    /**
     * Adds an I/O connection that will call the named function on the passed entity
     * when the specified output fires.
     *
     * @both
     */
    RedirectOutput(arg1: string, arg2: string, arg3: object): void;
    /**
     * Delete this entity.
     *
     * @both
     */
    RemoveSelf(): void;
    /**
     * Set Integer Attribute.
     *
     * @both
     */
    SetIntAttr(arg1: string, arg2: number): void;
    __kind__: 'instance';
}

declare const NativeFunctions: CEntityScriptFramework;

/** @both */
declare const CEntityScriptFramework: DotaConstructor<CEntityScriptFramework>;

declare interface CEntityScriptFramework {
    __kind__: 'instance';
}

declare const CEnvEntityMaker: DotaConstructor<CEnvEntityMaker>;

declare interface CEnvEntityMaker extends CBaseEntity {
    /**
     * Create an entity at the location of the maker.
     */
    SpawnEntity(): void;
    /**
     * Create an entity at the location of a specified entity instance.
     */
    SpawnEntityAtEntityOrigin(entity: object): void;
    /**
     * Create an entity at a specified location and orientaton, orientation is Euler
     * angle in degrees.
     */
    SpawnEntityAtLocation(vecAlternateOrigin: Vector, vecAlternateAngles: Vector): void;
    /**
     * Create an entity at the location of a named entity.
     */
    SpawnEntityAtNamedEntityOrigin(name: string): void;
    __kind__: 'instance';
}

declare const CEnvProjectedTexture: DotaConstructor<CEnvProjectedTexture>;

declare interface CEnvProjectedTexture extends CBaseEntity {
    /**
     * Set light maximum range.
     */
    SetFarRange(range: number): void;
    /**
     * Set light linear attenuation value.
     */
    SetLinearAttenuation(atten: number): void;
    /**
     * Set light minimum range.
     */
    SetNearRange(range: number): void;
    /**
     * Set light quadratic attenuation value.
     */
    SetQuadraticAttenuation(atten: number): void;
    /**
     * Turn on/off light volumetrics.
     */
    SetVolumetrics(on: boolean, intensity: number, noise: number, planes: number, planeOffset: number): void;
    __kind__: 'instance';
}

declare const CFoWBlockerRegion: DotaConstructor<CFoWBlockerRegion>;

declare interface CFoWBlockerRegion extends CBaseEntity {
    /**
     * Sets or clears a blocker rectangle.
     */
    AddRectangularBlocker(mins: Vector, maxs: Vector, clearRegion: boolean): void;
    /**
     * Sets or clears a blocker rectangle outline.
     */
    AddRectangularOutlineBlocker(mins: Vector, maxs: Vector, clearRegion: boolean): void;
    __kind__: 'instance';
}

declare const CInfoData: DotaConstructor<CInfoData>;

declare interface CInfoData extends CBaseEntity {
    /**
     * Query color data for this key.
     */
    QueryColor(tok: string, defaultValue: Vector): Vector;
    /**
     * Query float data for this key.
     */
    QueryFloat(tok: string, defaultValue: number): number;
    /**
     * Query int data for this key.
     */
    QueryInt(tok: string, defaultValue: number): number;
    /**
     * Query number data for this key.
     */
    QueryNumber(tok: string, defaultValue: number): number;
    /**
     * Query string data for this key.
     */
    QueryString(tok: string, defaultValue: string): string;
    /**
     * Query vector data for this key.
     */
    QueryVector(tok: string, defaultValue: Vector): Vector;
    __kind__: 'instance';
}

declare const CInfoPlayerStartDota: DotaConstructor<CInfoPlayerStartDota>;

declare interface CInfoPlayerStartDota extends CPointEntity {
    /**
     * Returns whether the object is currently active.
     */
    IsEnabled(): boolean;
    /**
     * Enable or disable the obstruction.
     */
    SetEnabled(enabled: boolean): void;
    __kind__: 'instance';
}

/** @both */
declare const CInfoWorldLayer: DotaConstructor<CInfoWorldLayer>;

declare interface CInfoWorldLayer extends CBaseEntity {
    /**
     * Hides this layer.
     *
     * @both
     */
    HideWorldLayer(): void;
    /**
     * Shows this layer.
     *
     * @both
     */
    ShowWorldLayer(): void;
    __kind__: 'instance';
}

/** @both */
declare const CLogicRelay: DotaConstructor<CLogicRelay>;

declare interface CLogicRelay extends CBaseEntity {
    /**
     * Triggers the logic_relay.
     *
     * @both
     */
    Trigger(activator: CBaseEntity | undefined, caller: CBaseEntity | undefined): void;
    /**
     * @deprecated Added for compatibility with CBaseEntity. Invalid at the runtime.
     */
    Trigger(): never;
    __kind__: 'instance';
}

declare const CLogicScript: DotaConstructor<CLogicScript>;

declare interface CLogicScript extends CBaseEntity {
    __kind__: 'instance';
}

declare const CMarkupVolumeTagged: DotaConstructor<CMarkupVolumeTagged>;

declare interface CMarkupVolumeTagged extends CBaseEntity {
    /**
     * Does this volume have the given tag.
     */
    HasTag(tagName: string): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CNativeOutputs: DotaConstructor<CNativeOutputs>;

declare interface CNativeOutputs {
    /**
     * Add an output.
     *
     * @both
     */
    AddOutput(arg1: string, arg2: string): void;
    /**
     * Initialize with number of outputs.
     *
     * @both
     */
    Init(arg1: number): void;
    __kind__: 'instance';
}

/** @both */
declare const Convars: Convars;

declare interface Convars {
    /**
     * Returns the convar as a boolean flag.
     *
     * @both
     */
    GetBool(name: string): boolean | undefined;
    /**
     * Returns the player who issued this console command.
     *
     * @both
     */
    GetCommandClient(): CDOTAPlayerController;
    /**
     * Returns the DOTA player who issued this console command.
     *
     * @both
     */
    GetDOTACommandClient(): CDOTAPlayerController;
    /**
     * Returns the convar as a float. May return null if no such convar.
     *
     * @both
     */
    GetFloat(name: string): number | undefined;
    /**
     * Returns the convar as an int. May return null if no such convar.
     *
     * @both
     */
    GetInt(name: string): number | undefined;
    /**
     * Returns the convar as a string. May return null if no such convar.
     *
     * @both
     */
    GetStr(name: string): string | undefined;
    /**
     * Register a console command.
     *
     * @both
     */
    RegisterCommand(
        name: string,
        callback: (name: string, ...args: string[]) => void,
        helpString: string,
        flags: ConVarFlags,
    ): void;
    /**
     * Register a new console variable.
     *
     * @both
     */
    RegisterConvar(name: string, defaultValue: string, helpString: string, flags: ConVarFlags): void;
    /**
     * Sets the value of the convar to the bool.
     *
     * @both
     */
    SetBool(name: string, value: boolean): void;
    /**
     * Sets the value of the convar to the float.
     *
     * @both
     */
    SetFloat(name: string, value: number): void;
    /**
     * Sets the value of the convar to the int.
     *
     * @both
     */
    SetInt(name: string, value: number): void;
    /**
     * Sets the value of the convar to the string.
     *
     * @both
     */
    SetStr(name: string, value: string): void;
    __kind__: 'instance';
}

declare const CParticleSystem: DotaConstructor<CParticleSystem>;

declare interface CParticleSystem extends CBaseModelEntity {
    __kind__: 'instance';
}

declare const CPhysicsProp: DotaConstructor<CPhysicsProp>;

declare interface CPhysicsProp extends CBaseAnimatingActivity {
    /**
     * Disable motion for the prop.
     */
    DisableMotion(): void;
    /**
     * Enable motion for the prop.
     */
    EnableMotion(): void;
    /**
     * Enable/disable dynamic vs dynamic continuous collision traces.
     */
    SetDynamicVsDynamicContinuous(isDynamicVsDynamicContinuousEnabled: boolean): void;
    __kind__: 'instance';
}

declare const CPointClientUIWorldPanel: DotaConstructor<CPointClientUIWorldPanel>;

declare interface CPointClientUIWorldPanel extends CBaseModelEntity {
    /**
     * Tells the panel to accept user input.
     */
    AcceptUserInput(): void;
    /**
     * Adds CSS class(es) to the panel.
     */
    AddCSSClasses(classes: string): void;
    /**
     * Tells the panel to ignore user input.
     */
    IgnoreUserInput(): void;
    /**
     * Returns whether this entity is grabbable.
     */
    IsGrabbable(): boolean;
    /**
     * Remove CSS class(es) from the panel.
     */
    RemoveCSSClasses(classes: string): void;
    __kind__: 'instance';
}

declare const CPointEntity: DotaConstructor<CPointEntity>;

/** @client */
declare const C_PointEntity: typeof CPointEntity;

declare interface CPointEntity extends CBaseEntity {
    __kind__: 'instance';
}

/** @both */
declare const CPointTemplate: DotaConstructor<CPointTemplate>;

declare interface CPointTemplate extends CBaseEntity {
    /**
     * Deletes any spawn groups that this point_template has spawned. Note: The
     * point_template will not be deleted by this.
     *
     * @both
     */
    DeleteCreatedSpawnGroups(): void;
    /**
     * Spawns all of the entities the point_template is pointing at.
     *
     * @both
     */
    ForceSpawn(): void;
    /**
     * Get the list of the most recent spawned entities.
     *
     * @both
     */
    GetSpawnedEntities(): object;
    /**
     * Set a callback for when the template spawns entities. The spawned entities will
     * be passed in as an array.
     *
     * @both
     */
    SetSpawnCallback(callbackFunc: object, callbackScope: object): void;
    __kind__: 'instance';
}

declare const CPointWorldText: DotaConstructor<CPointWorldText>;

/** @client */
declare const C_PointWorldText: typeof CPointWorldText;

declare interface CPointWorldText extends CBaseModelEntity {
    /**
     * Set the message on this entity.
     *
     * @both
     */
    SetMessage(message: string): void;
    __kind__: 'instance';
}

declare const CSceneEntity: DotaConstructor<CSceneEntity>;

declare interface CSceneEntity extends CBaseEntity {
    /**
     * Adds a team (by index) to the broadcast list.
     */
    AddBroadcastTeamTarget(arg1: number): void;
    /**
     * Cancel scene playback.
     */
    Cancel(): void;
    /**
     * Returns length of this scene in seconds.
     */
    EstimateLength(): number;
    /**
     * Get the camera.
     */
    FindCamera(): object;
    /**
     * Given an entity reference, such as !target, get actual entity from scene object.
     */
    FindNamedEntity(arg1: string): object;
    /**
     * If this scene is currently paused.
     */
    IsPaused(): boolean;
    /**
     * If this scene is currently playing.
     */
    IsPlayingBack(): boolean;
    /**
     * Given a dummy scene name and a vcd string, load the scene.
     */
    LoadSceneFromString(arg1: string, arg2: string): boolean;
    /**
     * Removes a team (by index) from the broadcast list.
     */
    RemoveBroadcastTeamTarget(arg1: number): void;
    /**
     * Start scene playback, takes activatorEntity as param.
     */
    Start(arg1: object): void;
    __kind__: 'instance';
}

declare const HeroList: CScriptHeroList;

declare const CScriptHeroList: DotaConstructor<CScriptHeroList>;

declare interface CScriptHeroList {
    /**
     * Returns all the heroes in the world.
     */
    GetAllHeroes(): CDOTA_BaseNPC_Hero[];
    /**
     * Get the Nth hero in the Hero List.
     */
    GetHero(nth: number): CDOTA_BaseNPC_Hero | undefined;
    /**
     * Returns the number of heroes in the world.
     */
    GetHeroCount(): number;
    __kind__: 'instance';
}

/** @both */
declare const CScriptHTTPRequest: DotaConstructor<CScriptHTTPRequest>;

/**
 * Note: Actual `CScriptHTTPRequest` global exists only after CreateHTTPRequest is
 * called.
 */
declare interface CScriptHTTPRequest {
    /**
     * Send a HTTP request.
     *
     * @both
     */
    Send(callback: (response: CScriptHTTPResponse) => void): boolean;
    /**
     * Set the total timeout on the request.
     *
     * @both
     */
    SetHTTPRequestAbsoluteTimeoutMS(milliseconds: number): boolean;
    /**
     * Set a POST or GET parameter on the request.
     *
     * @both
     */
    SetHTTPRequestGetOrPostParameter(name: string, value: string): boolean;
    /**
     * Set a header value on the request.
     *
     * @both
     */
    SetHTTPRequestHeaderValue(name: string, value: string): boolean;
    /**
     * Set the network timeout on the request - this timer is reset when any data is
     * received.
     *
     * @both
     */
    SetHTTPRequestNetworkActivityTimeout(seconds: number): boolean;
    /**
     * Set the literal body of a post - invalid after setting a post parameter.
     *
     * @both
     */
    SetHTTPRequestRawPostBody(contentType: string, body: string): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CScriptKeyValues: DotaConstructor<CScriptKeyValues>;

declare interface CScriptKeyValues {
    /**
     * Reads a spawn key.
     *
     * @both
     */
    GetValue(arg1: string): object;
    __kind__: 'instance';
}

declare const ParticleManager: CScriptParticleManager;

/** @both */
declare const CScriptParticleManager: DotaConstructor<CScriptParticleManager>;

declare interface CScriptParticleManager {
    /**
     * Creates a new particle effect.
     *
     * @both
     */
    CreateParticle(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
    ): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified player.
     *
     * @both
     */
    CreateParticleForPlayer(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
        player: CDOTAPlayerController,
    ): ParticleID;
    /**
     * Creates a new particle effect that only plays for the specified team.
     *
     * @both
     */
    CreateParticleForTeam(
        particleName: string,
        particleAttach: ParticleAttachment_t,
        owner: CBaseEntity | undefined,
        team: DOTATeam_t,
    ): ParticleID;
    /**
     * Destroy a particle, if bDestroyImmediately destroy it without playing end caps.
     *
     * @both
     */
    DestroyParticle(particle: ParticleID, immediate: boolean): void;
    /** @both */
    GetParticleReplacement(particleName: string, hero: CDOTA_BaseNPC_Hero | undefined): string;
    /**
     * Frees the specified particle index.
     *
     * @both
     */
    ReleaseParticleIndex(particle: ParticleID): void;
    /** @both */
    SetParticleAlwaysSimulate(particle: ParticleID): void;
    /**
     * Set the control point data for a control on a particle effect.
     *
     * @both
     */
    SetParticleControl(particle: ParticleID, controlPoint: number, value: Vector): void;
    /** @both */
    SetParticleControlEnt(
        particle: ParticleID,
        controlPoint: number,
        unit: CBaseEntity,
        particleAttach: ParticleAttachment_t,
        attachment: string,
        offset: Vector,
        lockOrientation: boolean,
    ): void;
    /** @both */
    SetParticleControlFallback(particle: ParticleID, controlPoint: number, vecPosition: Vector): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransformForward] (int nFXIndex, int nPoint,
     * vForward).
     *
     * @both
     */
    SetParticleControlForward(particle: ParticleID, controlPoint: number, arg3: Vector): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransform] (int nFXIndex, int nPoint,
     * vForward, vRight, vUp) - Set the orientation for a control on a particle effect
     * (NOTE: This is left handed -- bad!!).
     *
     * @both
     */
    SetParticleControlOrientation(
        particle: ParticleID,
        controlPoint: number,
        arg3: Vector,
        arg4: Vector,
        arg5: Vector,
    ): void;
    /**
     * [OBSOLETE - Use SetParticleControlTransform] (int nFXIndex, int nPoint, Vector
     * vecForward, Vector vecLeft, Vector vecUp) - Set the orientation for a control
     * on a particle effect.
     *
     * @both
     */
    SetParticleControlOrientationFLU(
        particle: ParticleID,
        controlPoint: number,
        arg3: Vector,
        arg4: Vector,
        arg5: Vector,
    ): void;
    /** @both */
    SetParticleControlTransform(fxIndex: number, point: number, origin: Vector, qAngles: QAngle): void;
    /** @both */
    SetParticleControlTransformForward(fxIndex: number, point: number, origin: Vector, forward: Vector): void;
    /** @both */
    SetParticleFoWProperties(particle: ParticleID, controlPoint: number, controlPoint2: number, radius: number): void;
    /** @both */
    SetParticleShouldCheckFoW(particle: ParticleID, checkFoW: boolean): boolean;
    __kind__: 'instance';
}

/** @both */
declare const CScriptPrecacheContext: DotaConstructor<CScriptPrecacheContext>;

declare interface CScriptPrecacheContext {
    /**
     * Precaches a specific resource.
     *
     * @both
     */
    AddResource(resource: string): void;
    /**
     * Reads a spawn key.
     *
     * @both
     */
    GetValue(key: string): object;
    __kind__: 'instance';
}

/** @both */
declare const CScriptUniformRandomStream: DotaConstructor<CScriptUniformRandomStream>;

declare interface CScriptUniformRandomStream {
    /** @both */
    RandomFloat(minVal: number, maxVal: number): number;
    /** @both */
    RandomFloatExp(minVal: number, maxVal: number, exponent: number): number;
    /** @both */
    RandomInt(minVal: number, maxVal: number): number;
    /** @both */
    RollPercentage(percentage: number): boolean;
    __kind__: 'instance';
}

declare const CTakeDamageInfo: DotaConstructor<CTakeDamageInfo>;

declare interface CTakeDamageInfo {
    AddDamage(addAmount: number): void;
    AddDamageType(bitsDamageType: number): void;
    GetAmmoType(): number;
    GetAttacker(): object;
    GetDamage(): number;
    GetDamageCustom(): number;
    GetDamageForce(): Vector;
    GetDamagePosition(): Vector;
    GetDamageType(): number;
    GetInflictor(): object;
    GetOriginalDamage(): number;
    GetReportedPosition(): Vector;
    HasDamageType(bitsToTest: number): boolean;
    ScaleDamage(scaleAmount: number): void;
    SetAmmoType(ammoType: number): void;
    SetAttacker(attacker: object): void;
    SetDamage(damage: number): void;
    SetDamageCustom(damageCustom: number): void;
    SetDamageForce(damageForce: Vector): void;
    SetDamagePosition(damagePosition: Vector): void;
    SetDamageType(bitsDamageType: number): void;
    SetOriginalDamage(originalDamage: number): void;
    SetReportedPosition(reportedPosition: Vector): void;
    __kind__: 'instance';
}

/** @both */
declare const GlobalSys: GlobalSys;

declare interface GlobalSys {
    /**
     * Returns true if the command line param was used, otherwise false.
     *
     * @both
     */
    CommandLineCheck(name: string): object;
    /**
     * Returns the command line param as a float.
     *
     * @both
     */
    CommandLineFloat(arg1: string, arg2: number): object;
    /**
     * Returns the command line param as an int.
     *
     * @both
     */
    CommandLineInt(arg1: string, arg2: number): object;
    /**
     * Returns the command line param as a string.
     *
     * @both
     */
    CommandLineStr(arg1: string, arg2: string): object;
    __kind__: 'instance';
}

declare const GridNav: GridNav;

declare interface GridNav {
    /**
     * Determine if it is possible to reach the specified end point from the specified
     * start point. bool.
     */
    CanFindPath(start: Vector, end: Vector): boolean;
    /**
     * Destroy all trees in the area(vPosition, flRadius, bFullCollision.
     */
    DestroyTreesAroundPoint(arg1: Vector, arg2: number, arg3: boolean): void;
    /**
     * Find a path between the two points an return the length of the path. If there
     * is not a path between the points the returned value will be -1.
     */
    FindPathLength(start: Vector, end: Vector): number;
    /**
     * Returns a table full of tree HSCRIPTS.
     */
    GetAllTreesAroundPoint(position: Vector, radius: number, fullCollision: boolean): CDOTA_MapTree[];
    /**
     * Get the X position of the center of a given X index.
     */
    GridPosToWorldCenterX(arg1: number): number;
    /**
     * Get the Y position of the center of a given Y index.
     */
    GridPosToWorldCenterY(arg1: number): number;
    /**
     * Checks whether the given position is blocked.
     */
    IsBlocked(arg1: Vector): boolean;
    /**
     * Checks whether there are any trees overlapping the given point.
     */
    IsNearbyTree(position: Vector, radius: number, checkFullTreeRadius: boolean): boolean;
    /**
     * Checks whether the given position is traversable.
     */
    IsTraversable(arg1: Vector): boolean;
    /**
     * Causes all trees in the map to regrow.
     */
    RegrowAllTrees(): void;
    /**
     * Get the X index of a given world X position.
     */
    WorldToGridPosX(arg1: number): number;
    /**
     * Get the Y index of a given world Y position.
     */
    WorldToGridPosY(arg1: number): number;
    __kind__: 'instance';
}

declare const ProjectileManager: ProjectileManager;

declare interface ProjectileManager {
    /**
     * Update speed.
     */
    ChangeTrackingProjectileSpeed(ability: CDOTABaseAbility, speed: number): void;
    /**
     * Creates a linear projectile and returns the projectile ID.
     */
    CreateLinearProjectile(options: CreateLinearProjectileOptions): ProjectileID;
    /**
     * Creates a tracking projectile.
     */
    CreateTrackingProjectile(options: CreateTrackingProjectileOptions): ProjectileID;
    /**
     * Destroys the linear projectile matching the argument ID.
     */
    DestroyLinearProjectile(projectile: ProjectileID): void;
    /**
     * Destroy a tracking projectile early.
     */
    DestroyTrackingProjectile(projectile: ProjectileID): void;
    /**
     * Returns current location of projectile.
     */
    GetLinearProjectileLocation(projectile: ProjectileID): Vector;
    /**
     * Returns current radius of projectile.
     */
    GetLinearProjectileRadius(projectile: ProjectileID): number;
    /**
     * Returns a vector representing the current velocity of the projectile.
     */
    GetLinearProjectileVelocity(projectile: ProjectileID): Vector;
    /**
     * Returns current location of projectile.
     */
    GetTrackingProjectileLocation(projectile: ProjectileID): Vector;
    /**
     * Is this a valid projectile?
     */
    IsValidProjectile(value: number): value is ProjectileID;
    /**
     * Makes the specified unit dodge projectiles.
     */
    ProjectileDodge(unit: CDOTA_BaseNPC): void;
    /**
     * Update velocity.
     */
    UpdateLinearProjectileDirection(projectile: ProjectileID, direction: Vector, speed: number): void;
    __kind__: 'instance';
}

/** @both */
declare const QAngle: DotaConstructor<QAngle> &
    ((x: number | undefined, y: number | undefined, z: number | undefined) => QAngle);

/**
 * QAngle class.
 */
declare type QAngle = __NumberLike & {
    /**
     * Pitch angle
     */
    x: number;
    /**
     * Yaw angle
     */
    y: number;
    /**
     * Roll angle
     */
    z: number;
    /**
     * Overloaded +. Adds angles together.
     *
     * @both
     */
    __add(b: QAngle): QAngle;
    /**
     * Overloaded ==. Tests for Equality.
     *
     * @both
     */
    __eq(b: QAngle): boolean;
    /**
     * Overloaded .. Converts the QAngles to strings.
     *
     * @both
     */
    __tostring(): string;
    /**
     * Returns the forward vector.
     *
     * @both
     */
    Forward(): Vector;
    /**
     * Returns the left vector.
     *
     * @both
     */
    Left(): Vector;
    /**
     * Returns the up vector.
     *
     * @both
     */
    Up(): Vector;
    __kind__: 'instance';
};

declare const SteamInfo: SteamInfo;

declare interface SteamInfo {
    /**
     * Is the script connected to the public Steam universe.
     */
    IsPublicUniverse(): boolean;
    __kind__: 'instance';
}

declare const Uint64: DotaConstructor<Uint64>;

/**
 * Integer with binary operations.
 */
declare interface Uint64 {
    __eq(b: Uint64): boolean;
    /**
     * Overloaded .. Converts Uint64s to strings.
     */
    __tostring(): string;
    /**
     * Performs bitwise AND between two integers.
     */
    BitwiseAnd(operand: Uint64): Uint64;
    /**
     * Performs bitwise OR between two integers.
     */
    BitwiseOr(operand: Uint64): Uint64;
    /**
     * Performs bitwise XOR between two integers.
     */
    BitwiseXor(operand: Uint64): Uint64;
    /**
     * Performs bitwise NOT.
     */
    BitwiseNot(): Uint64;
    /**
     * Sets the specified bit.
     */
    SetBit(bitvalue: number): void;
    /**
     * Clears the specified bit.
     */
    ClearBit(bitvalue: number): number;
    /**
     * Checks if bit is set.
     */
    IsBitSet(bitvalue: number): number | undefined;
    /**
     * Toggles the specified bit.
     */
    ToggleBit(bitvalue: number): number;
    /**
     * Returns a hexadecimal string representation of the integer.
     */
    ToHexString(): string;
    __kind__: 'instance';
}

/** @both */
declare const Vector: DotaConstructor<Vector> & ((x?: number, y?: number, z?: number) => Vector);

/**
 * 3D Vector class.
 */
declare type Vector = __NumberLike & {
    /**
     * X-axis
     */
    x: number;
    /**
     * Y-axis
     */
    y: number;
    /**
     * Z-axis
     */
    z: number;
    /**
     * Overloaded +. Adds vectors together.
     *
     * @both
     */
    __add(b: Vector): Vector;
    /**
     * Overloaded /. Divides vectors.
     *
     * @both
     */
    __div(b: Vector): Vector;
    /**
     * Overloaded ==. Tests for Equality.
     *
     * @both
     */
    __eq(b: Vector): boolean;
    /**
     * Overloaded # returns the length of the vector.
     *
     * @both
     */
    __len(): number;
    /**
     * Overloaded * returns the vectors multiplied together. Can also be used to
     * multiply with scalars.
     *
     * @both
     */
    __mul(b: Vector | number): Vector;
    /**
     * Overloaded -. Subtracts vectors.
     *
     * @both
     */
    __sub(b: Vector): Vector;
    /**
     * Overloaded .. Converts vectors to strings.
     *
     * @both
     */
    __tostring(): string;
    /**
     * Overloaded - operator. Reverses the vector.
     *
     * @both
     */
    __unm(): Vector;
    /**
     * Cross product of two vectors.
     *
     * @both
     */
    Cross(b: Vector): Vector;
    /**
     * Dot product of two vectors.
     *
     * @both
     */
    Dot(b: Vector): number;
    /**
     * Length of the Vector.
     *
     * @both
     */
    Length(): number;
    /**
     * Length of the Vector in the XY plane.
     *
     * @both
     */
    Length2D(): number;
    /**
     * Returns the vector normalized.
     *
     * @both
     */
    Normalized(): Vector;
    /**
     * Linearly interpolates between two vectors.
     *
     * This is most commonly used to find a point some fraction of the way along a
     * line between two endpoints.
     *
     * Same as `this + (b - this) * t`.
     *
     * @param t Interpolant
     * @both
     */
    Lerp(b: Vector, t: number): Vector;
    __kind__: 'instance';
};

/**
 * Add temporary vision for a given team.
 */
declare function AddFOWViewer(
    teamId: DOTATeam_t,
    location: Vector,
    radius: number,
    duration: number,
    obstructedVision: boolean,
): ViewerID;

/**
 * Returns the number of degrees difference between two yaw angles.
 *
 * @both
 */
declare function AngleDiff(arg1: number, arg2: number): number;

/**
 * Generate a vector given a QAngles.
 *
 * @both
 */
declare function AnglesToVector(arg1: QAngle): Vector;

/**
 * @deprecated AppendToLogFile is deprecated. Print to the console for logging
 *             instead.
 * @both
 */
declare function AppendToLogFile(arg1: string, arg2: string): void;

/**
 * Damage an npc.
 */
declare function ApplyDamage(options: ApplyDamageOptions): number;

/**
 * Constructs a quaternion representing a rotation by angle around the specified
 * vector axis.
 *
 * @both
 */
declare function AxisAngleToQuaternion(arg1: Vector, arg2: number): never;

/**
 * Compute the closest point on the OBB of an entity.
 *
 * @both
 */
declare function CalcClosestPointOnEntityOBB(arg1: object, arg2: Vector): Vector;

/**
 * Compute the distance between two entity OBB. A negative return value indicates
 * an input error. A return value of zero indicates that the OBBs are overlapping.
 *
 * @both
 */
declare function CalcDistanceBetweenEntityOBB(arg1: object, arg2: object): number;

/** @both */
declare function CalcDistanceToLineSegment2D(arg1: Vector, arg2: Vector, arg3: Vector): number;

/**
 * Create all I/O events for a particular entity.
 *
 * @both
 */
declare function CancelEntityIOEvents(arg1: number): void;

/**
 * Centers each players' camera on a unit.
 */
declare function CenterCameraOnUnit(playerId: PlayerID, unit: CBaseEntity | undefined): void;

declare function ClearTeamCustomHealthbarColor(team: DOTATeam_t): void;

/**
 * Allocate a damageinfo object, used as an argument to TakeDamage(). Call
 * DestroyDamageInfo( hInfo ) to free the object.
 */
declare function CreateDamageInfo(
    arg1: object,
    arg2: object,
    arg3: Vector,
    arg4: Vector,
    arg5: number,
    arg6: number,
): CTakeDamageInfo;

/**
 * Pass table - Inputs: entity, effect.
 *
 * @both
 */
declare function CreateEffect(arg1: object): boolean;

/**
 * Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given
 * player's controlled hero.
 */
declare function CreateHeroForPlayer(heroName: string, player: CDOTAPlayerController): CDOTA_BaseNPC_Hero;

/**
 * Create an HTTP request.
 *
 * @both
 */
declare function CreateHTTPRequest(method: string, url: string): CScriptHTTPRequest;

/**
 * Create an HTTP request.
 *
 * @both
 */
declare function CreateHTTPRequestScriptVM(method: string, url: string): CScriptHTTPRequest;

/**
 * Create illusions of the passed hero that belong to passed unit using passed
 * modifier data.
 */
declare function CreateIllusions(
    owner: CBaseEntity,
    heroToCopy: CDOTA_BaseNPC_Hero,
    modifierKeys: CreateIllusionsModifierKeys,
    numIllusions: number,
    padding: number,
    scramblePosition: boolean,
    findClearSpace: boolean,
): CDOTA_BaseNPC_Hero[];

/**
 * Create a DOTA item.
 */
declare function CreateItem(
    itemName: string,
    owner: CDOTAPlayerController | undefined,
    purchaser: CDOTAPlayerController | undefined,
): CDOTA_Item | undefined;

/**
 * Create a physical item at a given location, can start in air (but doesn't clear
 * a space).
 */
declare function CreateItemOnPositionForLaunch(location: Vector, item: CDOTA_Item | undefined): CDOTA_Item_Physical;

/**
 * Create a physical item at a given location.
 */
declare function CreateItemOnPositionSync(location: Vector, item: CDOTA_Item | undefined): CDOTA_Item_Physical;

/**
 * Create a modifier not associated with an NPC.
 */
declare function CreateModifierThinker(
    caster: CDOTA_BaseNPC | undefined,
    ability: CDOTABaseAbility | undefined,
    modifierName: string,
    paramTable: object | undefined,
    origin: Vector,
    teamNumber: DOTATeam_t,
    phantomBlocker: boolean,
): CDOTA_BaseNPC;

/**
 * Create a rune of the specified type.
 */
declare function CreateRune(location: Vector, runeType: DOTA_RUNES): CBaseAnimatingActivity;

/**
 * Create a scene entity to play the specified scene.
 */
declare function CreateSceneEntity(arg1: string): CBaseAnimatingActivity;

/**
 * Create a temporary tree, uses a default tree model.
 */
declare function CreateTempTree(location: Vector, duration: number): CBaseAnimatingActivity;

/**
 * Create a temporary tree, specifying the tree model name.
 */
declare function CreateTempTreeWithModel(location: Vector, duration: number, modelName: string): CBaseAnimatingActivity;

/**
 * Creates and returns an AABB trigger.
 */
declare function CreateTrigger(arg1: Vector, arg2: Vector, arg3: Vector): CBaseTrigger;

/**
 * Creates and returns an AABB trigger thats bigger than the radius provided.
 */
declare function CreateTriggerRadiusApproximate(vecOrigin: Vector, radius: number): CBaseTrigger;

/**
 * Creates a separate random number stream.
 *
 * @both
 */
declare function CreateUniformRandomStream(seed: number): CScriptUniformRandomStream;

/**
 * Creates a unit by its dota_npc_units.txt name.
 *
 * The spawned unit will not be controllable by default. You can use
 * unit.SetControllableByPlayer() to change this.
 *
 * Warning: mass synchronous unit spawning may be slow. Prefer
 * CreateUnitByNameAsync unless synchronous access is required.
 *
 * @param entityOwner This entity will be returned by GetOwner() and
 *                    GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID()
 *                    will be automatically inferred from this entity. Can be
 *                    changed after spawn using SetOwner(entity). When spawning
 *                    heroes, passing CDOTAPlayerController makes hero use owned
 *                    wearables.
 */
declare function CreateUnitByName(
    unitName: string,
    location: Vector,
    findClearSpace: boolean,
    npcOwner: CBaseEntity | undefined,
    entityOwner: CBaseEntity | undefined,
    team: DOTATeam_t,
): CDOTA_BaseNPC;

/**
 * Creates a unit by its dota_npc_units.txt name.
 *
 * The spawned unit will not be controllable by default. You can use
 * unit.SetControllableByPlayer() to change this.
 *
 * @param entityOwner This entity will be returned by GetOwner() and
 *                    GetOwnerEntity(). GetPlayerOwner() and GetPlayerOwnerID()
 *                    will be automatically inferred from this entity. Can be
 *                    changed after spawn using SetOwner(entity). When spawning
 *                    heroes, passing CDOTAPlayerController makes hero use owned
 *                    wearables.
 */
declare function CreateUnitByNameAsync(
    unitName: string,
    location: Vector,
    findClearSpace: boolean,
    npcOwner: CBaseEntity | undefined,
    entityOwner: CBaseEntity | undefined,
    team: DOTATeam_t,
    callback: (unit: CDOTA_BaseNPC) => void,
): SpawnGroupHandle;

/**
 * Creates a DOTA unit by its dota_npc_units.txt name from a table of entity key
 * values and a position to spawn at.
 */
declare function CreateUnitFromTable(options: CreateUnitFromTableOptions, location: Vector): CDOTA_BaseNPC;

/**
 * Cross product between two vectors.
 *
 * @both
 */
declare function CrossVectors(arg1: Vector, arg2: Vector): Vector;

/**
 * Gets the value of the given cvar, as a float.
 *
 * @both
 */
declare function cvar_getf(arg1: string): number;

/**
 * Sets the value of the given cvar, as a float.
 *
 * @both
 */
declare function cvar_setf(arg1: string, arg2: number): boolean;

/**
 * Breaks in the debugger.
 *
 * @both
 */
declare function DebugBreak(): void;

/**
 * Creates a test unit controllable by the specified player.
 */
declare function DebugCreateUnit(
    playerOwner: CDOTAPlayerController,
    unitName: string,
    team: DOTATeam_t,
    arg4: boolean,
    callback: (unit: CDOTA_BaseNPC) => void,
): number;

/**
 * Draw a debug overlay box.
 *
 * @both
 */
declare function DebugDrawBox(
    arg1: Vector,
    arg2: Vector,
    arg3: Vector,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
): void;

/**
 * Draw a debug forward box.
 *
 * @both
 */
declare function DebugDrawBoxDirection(
    cent: Vector,
    min: Vector,
    max: Vector,
    forward: Vector,
    rgb: Vector,
    a: number,
    duration: number,
): void;

/**
 * Draw a debug circle.
 *
 * @both
 */
declare function DebugDrawCircle(
    center: Vector,
    rgb: Vector,
    a: number,
    rad: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Try to clear all the debug overlay info.
 *
 * @both
 */
declare function DebugDrawClear(): void;

/**
 * Draw a debug overlay line.
 *
 * @both
 */
declare function DebugDrawLine(
    origin: Vector,
    target: Vector,
    r: number,
    g: number,
    b: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Draw a debug line using color vec.
 *
 * @both
 */
declare function DebugDrawLine_vCol(arg1: Vector, arg2: Vector, arg3: Vector, arg4: boolean, arg5: number): void;

/**
 * Draw text with a line offset.
 *
 * @both
 */
declare function DebugDrawScreenTextLine(
    x: number,
    y: number,
    lineOffset: number,
    text: string,
    r: number,
    g: number,
    b: number,
    a: number,
    duration: number,
): void;

/**
 * Draw a debug sphere.
 *
 * @both
 */
declare function DebugDrawSphere(
    center: Vector,
    rgb: Vector,
    a: number,
    rad: number,
    ztest: boolean,
    duration: number,
): void;

/**
 * Draw text in 3d.
 *
 * @both
 */
declare function DebugDrawText(origin: Vector, text: string, viewCheck: boolean, duration: number): void;

/**
 * Draw pretty debug text.
 *
 * @both
 */
declare function DebugScreenTextPretty(
    x: number,
    y: number,
    lineOffset: number,
    text: string,
    r: number,
    g: number,
    b: number,
    a: number,
    duration: number,
    font: string,
    size: number,
    bold: boolean,
): void;

/**
 * Print out a table (and subtables) to the console.
 *
 * @both
 */
declare function DeepPrintTable(table?: Record<any, any>): void;

/**
 * Free a damageinfo object that was created with CreateDamageInfo().
 */
declare function DestroyDamageInfo(damageInfo: CTakeDamageInfo): void;

/**
 * Kick a specific player from the game.
 */
declare function DisconnectClient(arg1: number, arg2: boolean): void;

declare function DoCleaveAttack(
    attacker: CDOTA_BaseNPC,
    target: CDOTA_BaseNPC,
    ability: CDOTABaseAbility | undefined,
    damage: number,
    startRadius: number,
    endRadius: number,
    distance: number,
    effectName: string,
): number;

/**
 * Generate and entity i/o event.
 */
declare function DoEntFire(arg1: string, arg2: string, arg3: string, arg4: number, arg5: object, arg6: object): void;

/**
 * Generate and entity i/o event.
 */
declare function DoEntFireByInstanceHandle(
    arg1: object,
    arg2: string,
    arg3: string,
    arg4: number,
    arg5: object,
    arg6: object,
): void;

/**
 * Execute a script (internal).
 *
 * @both
 */
declare function DoIncludeScript(arg1: string, arg2: object): boolean;

/**
 * Asserts the passed in value. Prints out a message and brings up the assert
 * dialog.
 *
 * @both
 */
declare function DoScriptAssert(arg1: boolean, arg2: string): void;

/**
 * Spawn a .vmap at the target location.
 *
 * @param mapName A map name without extension, relative to "maps" directory.
 * @param location The value of x and y must be multiple the grid size 64.
 *
 *                 To avoid GridNav conflicts, tiles on these coordinates on the
 *                 base map must be empty.
 * @param deferCompletion If true, to finish map loading you need to call
 *                        ManuallyTriggerSpawnGroupCompletion(spawnGroupHandle).
 * @param onReadyToSpawn Called only when deferCompletion is true.
 */
declare function DOTA_SpawnMapAtPosition(
    mapName: string,
    location: Vector,
    deferCompletion: boolean,
    onReadyToSpawn: (spawnGroupHandle: SpawnGroupHandle) => void,
    onSpawnComplete: (spawnGroupHandle: SpawnGroupHandle) => void,
    context: undefined,
): SpawnGroupHandle;

declare function DOTA_SpawnMapAtPosition<TContext extends {}>(
    mapName: string,
    location: Vector,
    deferCompletion: boolean,
    onReadyToSpawn: (this: TContext, spawnGroupHandle: SpawnGroupHandle) => void,
    onSpawnComplete: (this: TContext, spawnGroupHandle: SpawnGroupHandle) => void,
    context: TContext,
): SpawnGroupHandle;

declare function DotProduct(arg1: Vector, arg2: Vector): number;

/**
 * Generate a string guaranteed to be unique across the life of the script VM,
 * with an optional root string. Useful for adding data to tables when not sure
 * what keys are already in use in that table.
 *
 * @both
 */
declare function DoUniqueString(seed: string): string;

/**
 * Drop a neutral item for the team of the hero at the given tier.
 *
 * @param itemName Can be any item name, it does not have to be neutral.
 * @param tier Zero-based tier number.
 */
declare function DropNeutralItemAtPositionForHero(
    itemName: string,
    location: Vector,
    unit: CDOTA_BaseNPC,
    tier: number,
    arg5: boolean,
): CDOTA_Item_Physical;

/**
 * Drop a neutral item for the team of the hero at the given tier.
 */
declare function DropNeutralItemAtPositionForHeroWithOffset(
    arg1: string,
    arg2: Vector,
    arg3: object,
    arg4: number,
    arg5: boolean,
    arg6: Vector,
): object;

/**
 * A function to re-lookup a function by name every time.
 *
 * @both
 */
declare function Dynamic_Wrap<
    T extends object,
    K extends {
        [P in keyof T]: ((...args: any[]) => any) extends T[P] // At least one of union's values is a function
            ? [T[P]] extends [((this: infer TThis, ...args: any[]) => any) | null | undefined] // Box type to make it not distributive
                ? {} extends TThis // Has no specified this
                    ? P
                    : TThis extends T // Has this specified as T
                    ? P
                    : never
                : never
            : never;
    }[keyof T],
>(context: T, name: K): T[K];

/**
 * Emit an announcer sound for all players.
 */
declare function EmitAnnouncerSound(soundName: string): void;

/**
 * Emit an announcer sound for a player.
 */
declare function EmitAnnouncerSoundForPlayer(soundName: string, playerId: PlayerID): void;

/**
 * Emit an announcer sound for a team.
 */
declare function EmitAnnouncerSoundForTeam(soundName: string, team: DOTATeam_t): void;

/**
 * Emit an announcer sound for a team at a specific location.
 */
declare function EmitAnnouncerSoundForTeamOnLocation(soundName: string, team: DOTATeam_t, location: Vector): void;

/**
 * Play named sound for all players.
 */
declare function EmitGlobalSound(soundName: string): void;

/**
 * Play named sound on Entity.
 *
 * @both
 */
declare function EmitSoundOn(soundName: string, entity: CBaseEntity): void;

/**
 * Play named sound only on the client for the passed in player.
 *
 * @both
 */
declare function EmitSoundOnClient(soundName: string, arg2: object): void;

/**
 * Emit a sound on an entity for only a specific player.
 */
declare function EmitSoundOnEntityForPlayer(arg1: string, arg2: object, arg3: number): void;

/**
 * Emit a sound on a location from a unit, only for players allied with that unit.
 */
declare function EmitSoundOnLocationForAllies(location: Vector, soundName: string, caster: CBaseEntity): void;

/**
 * Emit a sound on a location for only a specific player.
 */
declare function EmitSoundOnLocationForPlayer(arg1: string, arg2: Vector, arg3: number): void;

/**
 * Emit a sound on a location from a unit.
 */
declare function EmitSoundOnLocationWithCaster(location: Vector, soundName: string, caster: CDOTA_BaseNPC): void;

/**
 * Turn an entity index integer to an HScript representing that entity's script
 * instance.
 *
 * @both
 */
declare function EntIndexToHScript(entityIndex: EntityIndex): CBaseEntity | undefined;

/**
 * Issue an order from a script table.
 */
declare function ExecuteOrderFromTable(order: ExecuteOrderOptions): void;

/**
 * Smooth curve decreasing slower as it approaches zero.
 *
 * @both
 */
declare function ExponentialDecay(arg1: number, arg2: number, arg3: number): number;

/**
 * Finds a clear random position around a given target unit, using the target
 * unit's padded collision radius.
 */
declare function FindClearRandomPositionAroundUnit(arg1: object, arg2: object, arg3: number): boolean;

/**
 * Place a unit somewhere not already occupied.
 */
declare function FindClearSpaceForUnit(unit: CDOTA_BaseNPC, location: Vector, arg3: boolean): boolean;

/**
 * Find a spawn point for the given team.
 */
declare function FindSpawnEntityForTeam(team: DOTATeam_t): CBaseEntity | undefined;

/**
 * Find units that intersect the given line with the given flags.
 */
declare function FindUnitsInLine(
    team: DOTATeam_t,
    startPos: Vector,
    endPos: Vector,
    cacheUnit: CBaseEntity | undefined,
    width: number,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
): CDOTA_BaseNPC[];

/**
 * Finds the units in a given radius with the given flags.
 */
declare function FindUnitsInRadius(
    team: DOTATeam_t,
    location: Vector,
    cacheUnit: CBaseEntity | undefined,
    radius: number,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
    order: FindOrder,
    canGrowCache: boolean,
): CDOTA_BaseNPC[];

/**
 * Fire Entity's Action Input w/no data.
 *
 * @both
 */
declare function FireEntityIOInputNameOnly(arg1: number, arg2: string): void;

/**
 * Fire Entity's Action Input with passed String - you own the memory.
 *
 * @both
 */
declare function FireEntityIOInputString(arg1: number, arg2: string, arg3: string): void;

/**
 * Fire Entity's Action Input with passed Vector - you own the memory.
 *
 * @both
 */
declare function FireEntityIOInputVec(arg1: number, arg2: string, arg3: Vector): void;

/**
 * Fire a game event.
 *
 * @both
 */
declare function FireGameEvent<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    eventData: GameEventDeclarations[TName],
): void;

/**
 * Fire a game event without broadcasting to the client.
 *
 * @both
 */
declare function FireGameEventLocal<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    eventData: GameEventDeclarations[TName],
): void;

/**
 * Get the time spent on the server in the last frame.
 *
 * @both
 */
declare function FrameTime(): number;

/**
 * Get ability data by ability name.
 *
 * @both
 */
declare function GetAbilityKeyValuesByName(arg1: string): object;

/**
 * Gets the ability texture name for an ability.
 *
 * @both
 */
declare function GetAbilityTextureNameForAbility(abilityName: string): string;

/**
 * Returns the currently active spawn group handle.
 *
 * @both
 */
declare function GetActiveSpawnGroupHandle(): SpawnGroupHandle;

/**
 * Returns a location for the unit that is not already occupied.
 */
declare function GetClearSpaceForUnit(arg1: object, arg2: Vector): Vector;

/**
 * @deprecated This function is unsafe. Prefer using `GetDedicatedServerKeyV2`
 *             instead.
 */
declare function GetDedicatedServerKey(version: string): string;

declare function GetDedicatedServerKeyV2(version: string): string;

declare function GetDedicatedServerKeyV3(version: string): string;

/**
 * Get the enity index for a tree id specified as the entindex_target of a
 * DOTA_UNIT_ORDER_CAST_TARGET_TREE.
 */
declare function GetEntityIndexForTreeId(treeId: number): EntityIndex;

/**
 * Returns the engines current frame count.
 *
 * @both
 */
declare function GetFrameCount(): number;

declare function GetGroundHeight(location: Vector, unitHull: CDOTA_BaseNPC | undefined): number;

/**
 * Returns the supplied position moved to the ground. Second parameter is an NPC
 * for measuring movement collision hull offset.
 */
declare function GetGroundPosition(location: Vector, unitHull: CDOTA_BaseNPC | undefined): Vector;

/**
 * Get the cost of an item by name.
 */
declare function GetItemCost(arg1: string): number;

declare function GetItemDefOwnedCount(arg1: number, arg2: number): number;

declare function GetItemDefQuantity(arg1: number, arg2: number): number;

/**
 * Get the local player on a listen server.
 *
 * @both
 */
declare function GetListenServerHost(): CDOTAPlayerController;

declare function GetLobbyEventGameDetails(): object;

/**
 * Get the local player ID.
 *
 * @client
 */
declare function GetLocalPlayerID(): PlayerID;

/**
 * Get the local player team.
 *
 * @client
 */
declare function GetLocalPlayerTeam(arg1: number): DOTATeam_t;

/**
 * Get the name of the map.
 *
 * @both
 */
declare function GetMapName(): string;

/**
 * Get the longest delay for all events attached to an output.
 *
 * @both
 */
declare function GetMaxOutputDelay(arg1: number, arg2: string): number;

/**
 * Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis
 * of rotation, multiplied by the degrees of rotation per second.
 *
 * @both
 */
declare function GetPhysAngularVelocity(arg1: object): Vector;

/**
 * Get Velocity for VPHYS or normal object.
 *
 * @both
 */
declare function GetPhysVelocity(arg1: object): Vector;

/**
 * Given the item tier and the team, roll for the name of a valid neutral item
 * drop, considering previous drops and consumables.
 */
declare function GetPotentialNeutralItemDrop(tier: number, team: DOTATeam_t): string;

/**
 * Get the current real world date.
 */
declare function GetSystemDate(): string;

/**
 * Get the current real world time.
 */
declare function GetSystemTime(): string;

/**
 * Get system time in milliseconds.
 */
declare function GetSystemTimeMS(): number;

declare function GetTargetAOELocation(
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): Vector;

declare function GetTargetLinearLocation(
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): Vector;

declare function GetTeamHeroKills(team: DOTATeam_t): number;

declare function GetTeamName(team: DOTATeam_t): string;

/**
 * Given and entity index of a tree, get the tree id for use for use with with
 * unit orders.
 */
declare function GetTreeIdForEntityIndex(entityIndex: EntityIndex): number;

/**
 * Get unit data by ability name.
 *
 * @both
 */
declare function GetUnitKeyValuesByName(arg1: string): object;

/**
 * Gets the world's maximum X position.
 */
declare function GetWorldMaxX(): number;

/**
 * Gets the world's maximum Y position.
 */
declare function GetWorldMaxY(): number;

/**
 * Gets the world's minimum X position.
 */
declare function GetWorldMinX(): number;

/**
 * Gets the world's minimum Y position.
 */
declare function GetWorldMinY(): number;

/**
 * Get amount of XP required to reach the next level.
 */
declare function GetXPNeededToReachNextLevel(level: number): number;

/**
 * Max out a hero's level and give them all appropriate abilities and talents.
 */
declare function HeroMaxLevel(arg1: object): void;

/**
 * @deprecated InitLogFile is deprecated. Print to the console for logging instead.
 * @both
 */
declare function InitLogFile(arg1: string, arg2: string): void;

/**
 * Returns true if this is lua running from the client.dll.
 *
 * @both
 */
declare function IsClient(): boolean;

/**
 * Returns true if this server is a dedicated server.
 *
 * @both
 */
declare function IsDedicatedServer(): boolean;

/**
 * Returns true if whatever alt is remapped to is pressed.
 *
 * @client
 */
declare function IsDotaAltPressed(): unknown;

/**
 * Returns true if whatever ctrl is remapped to is pressed.
 *
 * @client
 */
declare function IsDotaCtrlPressed(): unknown;

/**
 * Returns true if this is lua running within tools mode.
 *
 * @both
 */
declare function IsInToolsMode(): boolean;

/**
 * Ask fog of war if a location is visible to a certain team.
 */
declare function IsLocationVisible(team: DOTATeam_t, location: Vector): boolean;

/**
 * Is this entity a mango tree? (hEntity).
 */
declare function IsMangoTree(entity: CBaseEntity): entity is CBaseAnimatingActivity;

/**
 * Returns true if the entity is valid and marked for deletion.
 *
 * @both
 */
declare function IsMarkedForDeletion(entity: CBaseEntity): boolean;

/**
 * Returns true if this is lua running from the server.dll.
 *
 * @both
 */
declare function IsServer(): boolean;

/**
 * Returns true if the unit is in a valid position in the gridnav.
 */
declare function IsUnitInValidPosition(unit: CBaseEntity): boolean;

/**
 * Checks to see if the given hScript is a valid entity.
 *
 * @both
 */
declare function IsValidEntity(entity: object | undefined): entity is CBaseEntity;

/**
 * Lerp between two vectors by a float factor returning new vector.
 *
 * @both
 */
declare function LerpVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;

/**
 * Set the limit on the pathfinding search space.
 */
declare function LimitPathingSearchDepth(arg1: number): void;

/**
 * Link a lua-defined modifier with the associated class.
 *
 * @both
 */
declare function LinkLuaModifier(className: string, filePath: string, luaModifierType: LuaModifierType): void;

declare interface GameEventProvidedProperties {
    game_event_listener: EventListenerID;
    game_event_name: string;
    splitscreenplayer: number;
}

/**
 * Register as a listener for a game event from script.
 *
 * @both
 */
declare function ListenToGameEvent<TName extends keyof GameEventDeclarations>(
    eventName: TName,
    listener: (event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
    context: undefined,
): EventListenerID;

declare function ListenToGameEvent<TName extends keyof GameEventDeclarations, TContext extends {}>(
    eventName: TName,
    listener: (this: TContext, event: GameEventProvidedProperties & GameEventDeclarations[TName]) => void,
    context: TContext,
): EventListenerID;

/**
 * Creates a table from the specified keyvalues text file.
 *
 * @both
 */
declare function LoadKeyValues(filePath: string): object;

/**
 * Creates a table from the specified keyvalues string.
 *
 * @both
 */
declare function LoadKeyValuesFromString(kvString: string): object;

/**
 * Get the current local time.
 *
 * @both
 */
declare function LocalTime(): LocalTime;

/**
 * Checks to see if the given hScript is a valid entity.
 *
 * @both
 */
declare function MakeStringToken(arg1: string): number;

/**
 * Triggers the creation of entities in a manually-completed spawn group.
 *
 * @both
 */
declare function ManuallyTriggerSpawnGroupCompletion(handle: SpawnGroupHandle): void;

/**
 * Start a minimap event.
 */
declare function MinimapEvent(
    team: DOTATeam_t,
    entity: CBaseEntity,
    xCoord: number,
    yCoord: number,
    eventType: DOTAMinimapEvent_t,
    eventDuration: number,
): void;

/**
 * Print a message.
 *
 * @both
 */
declare function Msg(message: string): void;

/**
 * Pause or unpause the game.
 */
declare function PauseGame(paused: boolean): void;

/**
 * Get the current float time from the engine.
 *
 * @both
 */
declare function Plat_FloatTime(): number;

/**
 * Get a script instance of a player by index.
 *
 * @both
 */
declare function PlayerInstanceFromIndex(entityIndex: EntityIndex): CDOTAPlayerController | undefined;

/**
 * Precache an entity from KeyValues in table.
 *
 * @both
 */
declare function PrecacheEntityFromTable(arg1: string, arg2: object, context: CScriptPrecacheContext): void;

/**
 * Precache a list of entity KeyValues tables.
 *
 * @both
 */
declare function PrecacheEntityListFromTable(arg1: object, context: CScriptPrecacheContext): void;

/**
 * Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a
 * callback when it's finished.
 */
declare function PrecacheItemByNameAsync(itemName: string, callback: (precacheId: number) => void): void;

/**
 * Precaches a DOTA item by its dota_npc_items.txt name.
 */
declare function PrecacheItemByNameSync(itemName: string, context: CScriptPrecacheContext): void;

/**
 * Manually precache a single model.
 */
declare function PrecacheModel(modelName: string, context: CScriptPrecacheContext): void;

/**
 * Manually precache a single resource.
 */
declare function PrecacheResource(arg1: string, arg2: string, context: CScriptPrecacheContext): void;

/**
 * Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a
 * callback when it's finished.
 */
declare function PrecacheUnitByNameAsync(
    unitName: string,
    callback: (precacheId: number) => void,
    playerId?: PlayerID,
): void;

/**
 * Precaches a DOTA unit by its dota_npc_units.txt name.
 */
declare function PrecacheUnitByNameSync(unitName: string, context: CScriptPrecacheContext, playerId?: PlayerID): void;

/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableAsync(arg1: object, callback: (precacheId: number) => void): void;

/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableSync(arg1: object, context: CScriptPrecacheContext): void;

/**
 * Print a console message with a linked console command.
 *
 * @both
 */
declare function PrintLinkedConsoleMessage(message: string, tooltip: string): void;

/**
 * Spherical lerp of angle from->to based on time.
 *
 * @both
 */
declare function QSlerp(from_angle: QAngle, to_angle: QAngle, time: number): QAngle;

/**
 * Get a random float within a range.
 *
 * @both
 */
declare function RandomFloat(min: number, max: number): number;

/**
 * Get a random int within a range.
 *
 * @both
 */
declare function RandomInt(min: number, max: number): number;

/**
 * Get a random 2D vector of the given length.
 */
declare function RandomVector(length: number): Vector;

/**
 * Record in player resources that a new neutral item has been created, if it
 * hasn't already been, and show a toast.
 */
declare function RecordNeutralItemEarned(arg1: object, arg2: object, arg3: number): void;

/**
 * Register a custom animation script to run when a model loads.
 */
declare function RegisterCustomAnimationScriptForModel(arg1: string, arg2: string): void;

/**
 * Create a C proxy for a script-based spawn group filter.
 *
 * @both
 */
declare function RegisterSpawnGroupFilterProxy(arg1: string): void;

/**
 * Reloads the MotD file.
 *
 * @both
 */
declare function ReloadMOTD(): void;

/**
 * Remove temporary vision for a given team.
 */
declare function RemoveFOWViewer(teamId: DOTATeam_t, viewerId: ViewerID): void;

/**
 * Remove the C proxy for a script-based spawn group filter.
 *
 * @both
 */
declare function RemoveSpawnGroupFilterProxy(arg1: string): void;

/**
 * Check and fix units that have been assigned a position inside collision radius
 * of other NPCs.
 */
declare function ResolveNPCPositions(location: Vector, radius: number): void;

/**
 * Rolls a number from 1 to 100 and returns true if the roll is less than or equal
 * to the number specified.
 */
declare function RollPercentage(successPercentage: number): boolean;

/**
 * @param pseudoRandomId Any number can be specified. Using
 *                       DOTA_PSEUDO_RANDOM_NONE makes it act as a pure RNG.
 */
declare function RollPseudoRandomPercentage(chance: number, pseudoRandomId: PseudoRandom, unit: CDOTA_BaseNPC): boolean;

/**
 * Rotate a QAngle by another QAngle.
 *
 * @both
 */
declare function RotateOrientation(arg1: QAngle, arg2: QAngle): QAngle;

/**
 * Rotate a Vector around a point.
 *
 * @both
 */
declare function RotatePosition(arg1: Vector, arg2: QAngle, arg3: Vector): Vector;

/**
 * Rotates a quaternion by the specified angle around the specified vector axis.
 *
 * @both
 */
declare function RotateQuaternionByAxisAngle(arg1: never, arg2: Vector, arg3: number): never;

/**
 * Find the delta between two QAngles.
 *
 * @both
 */
declare function RotationDelta(arg1: QAngle, arg2: QAngle): QAngle;

/**
 * Converts delta QAngle to an angular velocity Vector.
 *
 * @both
 */
declare function RotationDeltaAsAngularVelocity(arg1: QAngle, arg2: QAngle): Vector;

/**
 * Have Entity say string, and teamOnly or not.
 */
declare function Say(entity: CBaseEntity | undefined, message: string, teamOnly: boolean): void;

/**
 * Start a screenshake.
 *
 * @param command SHAKE_START = 0, SHAKE_STOP = 1
 * @both
 */
declare function ScreenShake(
    center: Vector,
    amplitude: number,
    frequency: number,
    duration: number,
    radius: number,
    command: 0 | 1,
    airShake: boolean,
): void;

/**
 * RemapValClamped.
 */
declare function Script_RemapValClamped(arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;

declare function SendOverheadEventMessage(
    sendToPlayer: CDOTAPlayerController | undefined,
    messageType: DOTA_OVERHEAD_ALERT,
    targetEntity: CDOTA_BaseNPC,
    value: number,
    sourcePlayer: CDOTAPlayerController | undefined,
): void;

/**
 * Send a string to the console as a client command.
 *
 * @both
 */
declare function SendToConsole(arg1: string): void;

/**
 * Send a string to the console as a server command.
 */
declare function SendToServerConsole(arg1: string): void;

/**
 * Sets an opvar value for all players.
 *
 * @both
 */
declare function SetOpvarFloatAll(arg1: string, arg2: string, arg3: string, arg4: number): void;

/**
 * Sets an opvar value for a single player.
 *
 * @both
 */
declare function SetOpvarFloatPlayer(arg1: string, arg2: string, arg3: string, arg4: number, arg5: object): void;

/**
 * Set Angular Velocity for VPHYS or normal object, from a vector of the axis of
 * rotation, multiplied by the degrees of rotation per second.
 *
 * @both
 */
declare function SetPhysAngularVelocity(arg1: object, arg2: Vector): void;

/**
 * Set the current quest name.
 *
 * @both
 */
declare function SetQuestName(arg1: string): void;

/**
 * Set the current quest phase.
 *
 * @both
 */
declare function SetQuestPhase(arg1: number): void;

/**
 * Set rendering on/off for an ehandle.
 *
 * @deprecated Instantly crashes the game.
 * @both
 */
declare function SetRenderingEnabled(arg1: number, arg2: boolean): void;

declare function SetTeamCustomHealthbarColor(team: DOTATeam_t, r: number, g: number, b: number): void;

/**
 * Supports localized strings - %s1 = PlayerName, %s2 = Value, %s3 = TeamName.
 */
declare function ShowCustomHeaderMessage(message: string, playerId: PlayerID, value: number, time: number): void;

/**
 * Show a generic popup dialog for all players.
 */
declare function ShowGenericPopup(arg1: string, arg2: string, arg3: string, arg4: string, arg5: number): void;

/**
 * Show a generic popup dialog to a specific player.
 */
declare function ShowGenericPopupToPlayer(
    arg1: object,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: number,
): void;

/**
 * Print a hud message on all clients.
 */
declare function ShowMessage(arg1: string): void;

declare function SpawnDOTAShopTriggerRadiusApproximate(origin: Vector, radius: number): CDOTA_ShopTrigger;

/**
 * Spawn an effigy of the target unit.
 */
declare function SpawnEffigyOfUnitOrModel(
    arg1: string,
    arg2: number,
    arg3: Vector,
    arg4: Vector,
    arg5: number,
    arg6: number,
    arg7: number,
): object;

/**
 * Asynchronously spawns a single entity from a table.
 *
 * @both
 */
declare function SpawnEntityFromTableAsynchronous(arg1: string, arg2: object, arg3: object, arg4: object): void;

/**
 * Synchronously spawns a single entity from a table.
 *
 * @both
 */
declare function SpawnEntityFromTableSynchronous(baseclass: string, data: object): CBaseEntity;

/**
 * Hierarchically spawn an entity group from a set of spawn tables.
 *
 * @both
 */
declare function SpawnEntityGroupFromTable(arg1: object, arg2: boolean, arg3: object): boolean;

/**
 * Asynchronously spawn an entity group from a list of spawn tables. A callback
 * will be triggered when the spawning is complete.
 *
 * @both
 */
declare function SpawnEntityListFromTableAsynchronous(arg1: object, arg2: object): number;

/**
 * Synchronously spawn an entity group from a list of spawn tables.
 *
 * @both
 */
declare function SpawnEntityListFromTableSynchronous(arg1: object): object;

/**
 * Spawn a mango tree.
 */
declare function SpawnMangoTree(
    pos: Vector,
    team: number,
    duration: number,
    mangoInterval: number,
    initialMangoes: number,
): object;

/**
 * Very basic interpolation of v0 to v1 over t on [0,1].
 *
 * @both
 */
declare function SplineQuaternions(arg1: never, arg2: never, arg3: number): never;

/**
 * Very basic interpolation of v0 to v1 over t on [0,1].
 *
 * @both
 */
declare function SplineVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;

/**
 * Start a sound event.
 *
 * @both
 */
declare function StartSoundEvent(arg1: string, arg2: object): void;

/**
 * Start a sound event from position.
 *
 * @both
 */
declare function StartSoundEventFromPosition(soundName: string, position: Vector): void;

/**
 * Start a sound event from position with reliable delivery.
 *
 * @both
 */
declare function StartSoundEventFromPositionReliable(soundName: string, position: Vector): void;

/**
 * Start a sound event from position with optional delivery.
 *
 * @both
 */
declare function StartSoundEventFromPositionUnreliable(soundName: string, position: Vector): void;

/**
 * Start a sound event with reliable delivery.
 *
 * @both
 */
declare function StartSoundEventReliable(arg1: string, arg2: object): void;

/**
 * Start a sound event with optional delivery.
 *
 * @both
 */
declare function StartSoundEventUnreliable(arg1: string, arg2: object): void;

/**
 * Pass entity and effect name.
 *
 * @both
 */
declare function StopEffect(arg1: object, arg2: string): void;

/**
 * Stop named sound for all players.
 */
declare function StopGlobalSound(arg1: string): void;

/**
 * Stop listening to all game events within a specific context.
 *
 * @both
 */
declare function StopListeningToAllGameEvents(arg1: object): void;

/**
 * Stop listening to a particular game event.
 *
 * @both
 */
declare function StopListeningToGameEvent(listenerId: EventListenerID): boolean;

/**
 * Stops a sound event with optional delivery.
 *
 * @both
 */
declare function StopSoundEvent(arg1: string, arg2: object): void;

/**
 * Stop named sound on Entity.
 *
 * @both
 */
declare function StopSoundOn(arg1: string, arg2: object): void;

/**
 * Get the current server time.
 *
 * @both
 */
declare function Time(): number;

/** @both */
declare function TraceCollideable(query: TraceCollideableInputs): query is TraceCollideableOutputs;

/** @both */
declare function TraceHull(query: TraceHullInputs): query is TraceHullOutputs;

/** @both */
declare function TraceLine(query: TraceLineInputs): query is TraceLineOutputs;

/**
 * Check if a unit passes a set of filters.
 *
 * @both
 */
declare function UnitFilter(
    npc: CDOTA_BaseNPC,
    teamFilter: DOTA_UNIT_TARGET_TEAM,
    typeFilter: DOTA_UNIT_TARGET_TYPE,
    flagFilter: DOTA_UNIT_TARGET_FLAGS,
    team: DOTATeam_t,
): UnitFilterResult;

/**
 * Unload a spawn group by name.
 *
 * @both
 */
declare function UnloadSpawnGroup(arg1: string): void;

/**
 * Unload a spawn group by handle.
 *
 * @both
 */
declare function UnloadSpawnGroupByHandle(handle: SpawnGroupHandle): void;

declare function UpdateEventPoints(eventPointData: object): void;

/**
 * Turn a userid integer (typically, fields named 'userid' in game events) to an
 * HScript representing the associated player controller's script instance.
 *
 * @both
 */
declare function UserIDToControllerHScript(arg1: number): object;

/**
 * Sends colored text to one client.
 */
declare function UTIL_MessageText(
    arg1: number,
    arg2: string,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
): void;

/**
 * Sends colored text to one client. (Valid context keys: player_id, value,
 * team_id).
 */
declare function UTIL_MessageText_WithContext(
    arg1: number,
    arg2: string,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: object,
): void;

/**
 * Sends colored text to all clients.
 */
declare function UTIL_MessageTextAll(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;

/**
 * Sends colored text to all clients. (Valid context keys: player_id, value,
 * team_id).
 */
declare function UTIL_MessageTextAll_WithContext(
    arg1: string,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: object,
): void;

/**
 * Removes the specified entity.
 *
 * @both
 */
declare function UTIL_Remove(entity: CBaseEntity | undefined): void;

/**
 * Immediately removes the specified entity.
 *
 * @both
 */
declare function UTIL_RemoveImmediate(entity: CBaseEntity | undefined): void;

/**
 * Clear all message text on one client.
 */
declare function UTIL_ResetMessageText(arg1: number): void;

/**
 * Clear all message text from all clients.
 */
declare function UTIL_ResetMessageTextAll(): void;

declare function VectorAngles(arg1: Vector): QAngle;

/**
 * Get Qangles (with no roll) for a Vector.
 *
 * @both
 */
declare function VectorToAngles(arg1: Vector): QAngle;

/**
 * Print a warning.
 *
 * @both
 */
declare function Warning(message: string): void;
