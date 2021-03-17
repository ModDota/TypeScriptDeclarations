declare const DOTA_ITEM_INVENTORY_SIZE: 9;

declare const DOTA_ITEM_MAX: 19;

declare const DOTA_ITEM_STASH_MAX: 15;

declare const DOTA_ITEM_STASH_MIN: 9;

declare const DOTA_ITEM_STASH_SIZE: 6;

declare const DOTA_MAX_ABILITIES: 32;

declare const FIND_UNITS_EVERYWHERE: -1;

declare const SPAWN_GROUP_HANDLE_INVALID: 0;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ABILITY_TYPES = AbilityTypes;

/**
 * @compileMembersOnly
 */
declare enum AbilityTypes {
    BASIC = 0,
    ULTIMATE = 1,
    ATTRIBUTES = 2,
    HIDDEN = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult_t = AbilityLearnResult;

/**
 * @compileMembersOnly
 */
declare enum AbilityLearnResult {
    CAN_BE_UPGRADED = 0,
    CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    CANNOT_BE_UPGRADED_AT_MAX = 2,
    CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    NOT_LEARNABLE = 4,
}

/**
 * @compileMembersOnly
 */
declare enum ActivateType {
    INITIAL_CREATION = 0,
    DATAUPDATE_CREATION = 1,
    ONRESTORE = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type attackfail = AttackRecord;

/**
 * @compileMembersOnly
 */
declare enum AttackRecord {
    FAIL_NO = 0,
    FAIL_TERRAIN_MISS = 1,
    FAIL_SOURCE_MISS = 2,
    FAIL_TARGET_EVADED = 3,
    FAIL_TARGET_INVULNERABLE = 4,
    FAIL_TARGET_OUT_OF_RANGE = 5,
    CANNOT_FAIL = 6,
    FAIL_BLOCKED_BY_OBSTRUCTION = 7,
}

/**
 * @compileMembersOnly
 */
declare enum AttributeDerivedStats {
    STRENGTH_DAMAGE = 0,
    STRENGTH_HP = 1,
    STRENGTH_HP_REGEN = 2,
    AGILITY_DAMAGE = 3,
    AGILITY_ARMOR = 4,
    AGILITY_ATTACK_SPEED = 5,
    INTELLIGENCE_DAMAGE = 6,
    INTELLIGENCE_MANA = 7,
    INTELLIGENCE_MANA_REGEN = 8,
}

/**
 * @compileMembersOnly
 */
declare enum Attributes {
    INVALID = -1,
    STRENGTH = 0,
    AGILITY = 1,
    INTELLECT = 2,
    MAX = 3,
}

/**
 * @compileMembersOnly
 */
declare enum ConVarFlags {
    NONE = 0,
    /**
     * If this is set, the convar will become anonymous and won't show up in the
     * 'find' results.
     */
    UNREGISTERED = 1,
    DEVELOPMENTONLY = 2,
    HIDDEN = 16,
    /**
     * Makes the ConVar value hidden from all clients (for example sv_password).
     *
     * Reported as "prot" by cvarlist.
     */
    PROTECTED = 32,
    /**
     * Executing the command or changing the ConVar is only allowed in singleplayer.
     *
     * Reported as "sp" by cvarlist.
     */
    SPONLY = 64,
    /**
     * Save the ConVar value into config.cfg.
     *
     * Reported as "a" by cvarlist, except Lua ConVars.
     */
    ARCHIVE = 128,
    /**
     * For serverside ConVars, notifies all players with blue chat text when the value
     * gets changed.
     *
     * Reported as "nf" by cvarlist.
     */
    NOTIFY = 256,
    /**
     * For clientside commands, sends the value to the server.
     *
     * Reported as "user" by cvarlist.
     */
    USERINFO = 512,
    /**
     * Forces the ConVar to only have printable characters (no control characters).
     *
     * Reported as "print" by cvarlist.
     */
    PRINTABLEONLY = 1024,
    /**
     * Don't log the ConVar changes to console/log files/users.
     *
     * Reported as "log" by cvarlist.
     */
    UNLOGGED = 2048,
    /**
     * Tells the engine to never print this variable as a string since it contains
     * control sequences.
     *
     * Reported as "numeric" by cvarlist.
     */
    NEVER_AS_STRING = 4096,
    /**
     * For serverside ConVars, it will send its value to all clients. The ConVar with
     * the same name must also exist on the client!
     *
     * Reported as "rep" by cvarlist.
     */
    REPLICATED = 8192,
    /**
     * Requires sv_cheats to be enabled to change the ConVar or run the command.
     *
     * Reported as "cheat" by cvarlist.
     */
    CHEAT = 16384,
    SS = 32768,
    /**
     * Force the ConVar to be recorded by demo recordings.
     *
     * Reported as "demo" by cvarlist.
     */
    DEMO = 65536,
    /**
     * Opposite of FCVAR_DEMO, ensures the ConVar is not recorded in demos.
     *
     * Reported as "norecord" by cvarlist.
     */
    DONTRECORD = 131072,
    /**
     * Makes the ConVar not changeable while connected to a server or in singleplayer.
     */
    NOT_CONNECTED = 4194304,
    VCONSOLE_SET_FOCUS = 1073741824,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DAMAGE_TYPES = DamageTypes;

/**
 * @compileMembersOnly
 */
declare enum DamageTypes {
    NONE = 0,
    PHYSICAL = 1,
    MAGICAL = 2,
    PURE = 4,
    ALL = 7,
    HP_REMOVAL = 8,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DamageCategory_t = DamageCategory;

/**
 * @compileMembersOnly
 */
declare enum DamageCategory {
    SPELL = 0,
    ATTACK = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_ABILITY_BEHAVIOR = AbilityBehavior;

/**
 * @compileMembersOnly
 */
declare enum AbilityBehavior {
    LAST_RESORT_POINT = -2147483648,
    CAN_SELF_CAST = 0,
    FREE_DRAW_TARGETING = 0,
    IGNORE_SILENCE = 0,
    NONE = 0,
    SHOW_IN_GUIDES = 0,
    SUPPRESS_ASSOCIATED_CONSUMABLE = 0,
    UNLOCKED_BY_EFFECT_INDEX = 0,
    HIDDEN = 1,
    PASSIVE = 2,
    NO_TARGET = 4,
    UNIT_TARGET = 8,
    POINT = 16,
    AOE = 32,
    NOT_LEARNABLE = 64,
    CHANNELLED = 128,
    ITEM = 256,
    TOGGLE = 512,
    DIRECTIONAL = 1024,
    IMMEDIATE = 2048,
    AUTOCAST = 4096,
    OPTIONAL_UNIT_TARGET = 8192,
    OPTIONAL_POINT = 16384,
    OPTIONAL_NO_TARGET = 32768,
    AURA = 65536,
    ATTACK = 131072,
    DONT_RESUME_MOVEMENT = 262144,
    ROOT_DISABLES = 524288,
    UNRESTRICTED = 1048576,
    IGNORE_PSEUDO_QUEUE = 2097152,
    IGNORE_CHANNEL = 4194304,
    DONT_CANCEL_MOVEMENT = 8388608,
    DONT_ALERT_TARGET = 16777216,
    DONT_RESUME_ATTACK = 33554432,
    NORMAL_WHEN_STOLEN = 67108864,
    IGNORE_BACKSWING = 134217728,
    RUNE_TARGET = 268435456,
    DONT_CANCEL_CHANNEL = 536870912,
    VECTOR_TARGETING = 1073741824,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameState = GameState;

/**
 * @compileMembersOnly
 */
declare enum GameState {
    INIT = 0,
    WAIT_FOR_PLAYERS_TO_LOAD = 1,
    CUSTOM_GAME_SETUP = 2,
    HERO_SELECTION = 3,
    STRATEGY_TIME = 4,
    TEAM_SHOWCASE = 5,
    WAIT_FOR_MAP_TO_LOAD = 6,
    PRE_GAME = 7,
    GAME_IN_PROGRESS = 8,
    POST_GAME = 9,
    DISCONNECT = 10,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GC_TEAM = GcTeam;

/**
 * @compileMembersOnly
 */
declare enum GcTeam {
    GOOD_GUYS = 0,
    BAD_GUYS = 1,
    BROADCASTER = 2,
    SPECTATOR = 3,
    PLAYER_POOL = 4,
    NOTEAM = 5,
}

declare const DOTA_HEROPICK_STATE_COUNT: 61;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_HeroPickState = HeroPickState;

/**
 * @compileMembersOnly
 */
declare enum HeroPickState {
    NONE = 0,
    AP_SELECT = 1,
    SD_SELECT = 2,
    INTRO_SELECT_UNUSED = 3,
    RD_SELECT_UNUSED = 4,
    CM_INTRO = 5,
    CM_CAPTAINPICK = 6,
    CM_BAN1 = 7,
    CM_BAN2 = 8,
    CM_BAN3 = 9,
    CM_BAN4 = 10,
    CM_BAN5 = 11,
    CM_BAN6 = 12,
    CM_BAN7 = 13,
    CM_BAN8 = 14,
    CM_BAN9 = 15,
    CM_BAN10 = 16,
    CM_BAN11 = 17,
    CM_BAN12 = 18,
    CM_BAN13 = 19,
    CM_BAN14 = 20,
    CM_SELECT1 = 21,
    CM_SELECT2 = 22,
    CM_SELECT3 = 23,
    CM_SELECT4 = 24,
    CM_SELECT5 = 25,
    CM_SELECT6 = 26,
    CM_SELECT7 = 27,
    CM_SELECT8 = 28,
    CM_SELECT9 = 29,
    CM_SELECT10 = 30,
    CM_PICK = 31,
    AR_SELECT = 32,
    MO_SELECT = 33,
    FH_SELECT = 34,
    CD_INTRO = 35,
    CD_CAPTAINPICK = 36,
    CD_BAN1 = 37,
    CD_BAN2 = 38,
    CD_BAN3 = 39,
    CD_BAN4 = 40,
    CD_BAN5 = 41,
    CD_BAN6 = 42,
    CD_SELECT1 = 43,
    CD_SELECT2 = 44,
    CD_SELECT3 = 45,
    CD_SELECT4 = 46,
    CD_SELECT5 = 47,
    CD_SELECT6 = 48,
    CD_SELECT7 = 49,
    CD_SELECT8 = 50,
    CD_SELECT9 = 51,
    CD_SELECT10 = 52,
    CD_PICK = 53,
    BD_SELECT = 54,
    ABILITY_DRAFT_SELECT = 55,
    ARDM_SELECT = 56,
    ALL_DRAFT_SELECT = 57,
    CUSTOMGAME_SELECT = 58,
    SELECT_PENALTY = 59,
    CUSTOM_PICK_RULES = 60,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_MOTION_CONTROLLER_PRIORITY = MotionControllerPriority;

/**
 * @compileMembersOnly
 */
declare enum MotionControllerPriority {
    LOWEST = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    HIGHEST = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_OVERHEAD_ALERT = OverheadAlert;

/**
 * @compileMembersOnly
 */
declare enum OverheadAlert {
    GOLD = 0,
    DENY = 1,
    CRITICAL = 2,
    XP = 3,
    BONUS_SPELL_DAMAGE = 4,
    MISS = 5,
    DAMAGE = 6,
    EVADE = 7,
    BLOCK = 8,
    BONUS_POISON_DAMAGE = 9,
    HEAL = 10,
    MANA_ADD = 11,
    MANA_LOSS = 12,
    LAST_HIT_EARLY = 13,
    LAST_HIT_CLOSE = 14,
    LAST_HIT_MISS = 15,
    MAGICAL_BLOCK = 16,
    INCOMING_DAMAGE = 17,
    OUTGOING_DAMAGE = 18,
    DISABLE_RESIST = 19,
    DEATH = 20,
    BLOCKED = 21,
    ITEM_RECEIVED = 22,
    SHARD = 23,
}

declare const DOTA_RUNE_COUNT: 8;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_RUNES = RuneType;

/**
 * @compileMembersOnly
 */
declare enum RuneType {
    INVALID = -1,
    DOUBLEDAMAGE = 0,
    HASTE = 1,
    ILLUSION = 2,
    INVISIBILITY = 3,
    REGENERATION = 4,
    BOUNTY = 5,
    ARCANE = 6,
    XP = 7,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_SHOP_TYPE = ShopType;

/**
 * @compileMembersOnly
 */
declare enum ShopType {
    HOME = 0,
    SIDE = 1,
    SECRET = 2,
    GROUND = 3,
    SIDE_2 = 4,
    SECRET_2 = 5,
    CUSTOM = 6,
    NEUTRALS = 7,
    NONE = 8,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_FLAGS = UnitTargetFlags;

/**
 * @compileMembersOnly
 */
declare enum UnitTargetFlags {
    NONE = 0,
    RANGED_ONLY = 2,
    MELEE_ONLY = 4,
    DEAD = 8,
    MAGIC_IMMUNE_ENEMIES = 16,
    NOT_MAGIC_IMMUNE_ALLIES = 32,
    INVULNERABLE = 64,
    FOW_VISIBLE = 128,
    NO_INVIS = 256,
    NOT_ANCIENTS = 512,
    PLAYER_CONTROLLED = 1024,
    NOT_DOMINATED = 2048,
    NOT_SUMMONED = 4096,
    NOT_ILLUSIONS = 8192,
    NOT_ATTACK_IMMUNE = 16384,
    MANA_ONLY = 32768,
    CHECK_DISABLE_HELP = 65536,
    NOT_CREEP_HERO = 131072,
    OUT_OF_WORLD = 262144,
    NOT_NIGHTMARED = 524288,
    PREFER_ENEMIES = 1048576,
    RESPECT_OBSTRUCTIONS = 2097152,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TEAM = UnitTargetTeam;

/**
 * @compileMembersOnly
 */
declare enum UnitTargetTeam {
    NONE = 0,
    FRIENDLY = 1,
    ENEMY = 2,
    BOTH = 3,
    CUSTOM = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TYPE = UnitTargetType;

/**
 * @compileMembersOnly
 */
declare enum UnitTargetType {
    NONE = 0,
    HERO = 1,
    CREEP = 2,
    BUILDING = 4,
    COURIER = 16,
    BASIC = 18,
    OTHER = 32,
    ALL = 55,
    TREE = 64,
    CUSTOM = 128,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAAbilitySpeakTrigger_t = AbilitySpeakTrigger;

/**
 * @compileMembersOnly
 */
declare enum AbilitySpeakTrigger {
    START_ACTION_PHASE = 0,
    CAST = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAConnectionState_t = ConnectionState;

/**
 * @compileMembersOnly
 */
declare enum ConnectionState {
    UNKNOWN = 0,
    NOT_YET_CONNECTED = 1,
    CONNECTED = 2,
    DISCONNECTED = 3,
    ABANDONED = 4,
    LOADING = 5,
    FAILED = 6,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTADamageFlag_t = DamageFlag;

/**
 * @compileMembersOnly
 */
declare enum DamageFlag {
    NONE = 0,
    IGNORES_MAGIC_ARMOR = 1,
    IGNORES_PHYSICAL_ARMOR = 2,
    BYPASSES_INVULNERABILITY = 4,
    BYPASSES_BLOCK = 8,
    REFLECTION = 16,
    HPLOSS = 32,
    NO_DIRECTOR_EVENT = 64,
    NON_LETHAL = 128,
    USE_COMBAT_PROFICIENCY = 256,
    NO_DAMAGE_MULTIPLIERS = 512,
    NO_SPELL_AMPLIFICATION = 1024,
    DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
    NO_SPELL_LIFESTEAL = 4096,
    PROPERTY_FIRE = 8192,
    IGNORES_BASE_PHYSICAL_ARMOR = 16384,
}

declare const DOTA_DEFAULT_UI_ELEMENT_COUNT: 29;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaDefaultUIElement_t = DefaultUiElement;

/**
 * @compileMembersOnly
 */
declare enum DefaultUiElement {
    INVALID = -1,
    TOP_TIMEOFDAY = 0,
    TOP_HEROES = 1,
    FLYOUT_SCOREBOARD = 2,
    ACTION_PANEL = 3,
    ACTION_MINIMAP = 4,
    INVENTORY_PANEL = 5,
    INVENTORY_SHOP = 6,
    INVENTORY_ITEMS = 7,
    INVENTORY_QUICKBUY = 8,
    INVENTORY_COURIER = 9,
    INVENTORY_PROTECT = 10,
    INVENTORY_GOLD = 11,
    SHOP_SUGGESTEDITEMS = 12,
    SHOP_COMMONITEMS = 13,
    HERO_SELECTION_TEAMS = 14,
    HERO_SELECTION_GAME_NAME = 15,
    HERO_SELECTION_CLOCK = 16,
    TOP_MENU_BUTTONS = 17,
    TOP_BAR_BACKGROUND = 18,
    TOP_BAR_RADIANT_TEAM = 19,
    TOP_BAR_DIRE_TEAM = 20,
    TOP_BAR_SCORE = 21,
    ENDGAME = 22,
    ENDGAME_CHAT = 23,
    QUICK_STATS = 24,
    PREGAME_STRATEGYUI = 25,
    KILLCAM = 26,
    TOP_BAR = 27,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 28,
}

declare const DOTA_HUD_VISIBILITY_COUNT: 29;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAHUDVisibility_t = HudVisibility;

/**
 * @compileMembersOnly
 */
declare enum HudVisibility {
    VISIBILITY_INVALID = -1,
    VISIBILITY_TOP_TIMEOFDAY = 0,
    VISIBILITY_TOP_HEROES = 1,
    VISIBILITY_TOP_SCOREBOARD = 2,
    VISIBILITY_ACTION_PANEL = 3,
    VISIBILITY_ACTION_MINIMAP = 4,
    VISIBILITY_INVENTORY_PANEL = 5,
    VISIBILITY_INVENTORY_SHOP = 6,
    VISIBILITY_INVENTORY_ITEMS = 7,
    VISIBILITY_INVENTORY_QUICKBUY = 8,
    VISIBILITY_INVENTORY_COURIER = 9,
    VISIBILITY_INVENTORY_PROTECT = 10,
    VISIBILITY_INVENTORY_GOLD = 11,
    VISIBILITY_SHOP_SUGGESTEDITEMS = 12,
    VISIBILITY_SHOP_COMMONITEMS = 13,
    VISIBILITY_HERO_SELECTION_TEAMS = 14,
    VISIBILITY_HERO_SELECTION_GAME_NAME = 15,
    VISIBILITY_HERO_SELECTION_CLOCK = 16,
    VISIBILITY_TOP_MENU_BUTTONS = 17,
    VISIBILITY_TOP_BAR_BACKGROUND = 18,
    VISIBILITY_TOP_BAR_RADIANT_TEAM = 19,
    VISIBILITY_TOP_BAR_DIRE_TEAM = 20,
    VISIBILITY_TOP_BAR_SCORE = 21,
    VISIBILITY_ENDGAME = 22,
    VISIBILITY_ENDGAME_CHAT = 23,
    VISIBILITY_QUICK_STATS = 24,
    VISIBILITY_PREGAME_STRATEGYUI = 25,
    VISIBILITY_KILLCAM = 26,
    VISIBILITY_TOP_BAR = 27,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 28,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAInventoryFlags_t = InventoryFlags;

/**
 * @compileMembersOnly
 */
declare enum InventoryFlags {
    ALLOW_NONE = 0,
    ALLOW_MAIN = 1,
    ALLOW_STASH = 2,
    ALL_ACCESS = 3,
    ALLOW_DROP_ON_GROUND = 4,
    ALLOW_DROP_AT_FOUNTAIN = 8,
    LIMIT_DROP_ON_GROUND = 16,
}

/**
 * Default number of players per team.
 */
declare const DOTA_DEFAULT_MAX_TEAM: 5;

/**
 * Default number of non-spectator players supported.
 */
declare const DOTA_DEFAULT_MAX_TEAM_PLAYERS: 10;

/**
 * Max number of player teams supported.
 */
declare const DOTA_MAX_PLAYER_TEAMS: 10;

/**
 * Max number of viewers in a spectator lobby.
 */
declare const DOTA_MAX_SPECTATOR_LOBBY_SIZE: 15;

/**
 * Max number of players per team.
 */
declare const DOTA_MAX_TEAM: 24;

/**
 * Max number of non-spectator players supported.
 */
declare const DOTA_MAX_TEAM_PLAYERS: 24;

/**
 * How many spectators can watch.
 */
declare const DOTA_MAX_SPECTATOR_TEAM_SIZE: 40;

/**
 * Max number of players connected to the server including spectators.
 */
declare const DOTA_MAX_PLAYERS: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMinimapEvent_t = MinimapEventType;

/**
 * @compileMembersOnly
 */
declare enum MinimapEventType {
    ANCIENT_UNDER_ATTACK = 2,
    BASE_UNDER_ATTACK = 4,
    BASE_GLYPHED = 8,
    TEAMMATE_UNDER_ATTACK = 16,
    TEAMMATE_TELEPORTING = 32,
    TEAMMATE_DIED = 64,
    TUTORIAL_TASK_ACTIVE = 128,
    TUTORIAL_TASK_FINISHED = 256,
    HINT_LOCATION = 512,
    ENEMY_TELEPORTING = 1024,
    CANCEL_TELEPORTING = 2048,
    RADAR = 4096,
    RADAR_TARGET = 8192,
    MOVE_TO_TARGET = 16384,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAModifierAttribute_t = ModifierAttribute;

/**
 * @compileMembersOnly
 */
declare enum ModifierAttribute {
    NONE = 0,
    PERMANENT = 1,
    MULTIPLE = 2,
    IGNORE_INVULNERABLE = 4,
    AURA_PRIORITY = 8,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMusicStatus_t = MusicStatus;

/**
 * @compileMembersOnly
 */
declare enum MusicStatus {
    NONE = 0,
    EXPLORATION = 1,
    BATTLE = 2,
    PRE_GAME_EXPLORATION = 3,
    DEAD = 4,
    LAST = 5,
}

declare const DOTA_PROJECTILE_ATTACHMENT_LAST: 6;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAProjectileAttachment_t = ProjectileAttachment;

/**
 * @compileMembersOnly
 */
declare enum ProjectileAttachment {
    NONE = 0,
    ATTACK_1 = 1,
    ATTACK_2 = 2,
    HITLOCATION = 3,
    ATTACK_3 = 4,
    ATTACK_4 = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAScriptInventorySlot_t = InventorySlot;

/**
 * @compileMembersOnly
 */
declare enum InventorySlot {
    SLOT_1 = 0,
    SLOT_2 = 1,
    SLOT_3 = 2,
    SLOT_4 = 3,
    SLOT_5 = 4,
    SLOT_6 = 5,
    SLOT_7 = 6,
    SLOT_8 = 7,
    SLOT_9 = 8,
    STASH_1 = 9,
    STASH_2 = 10,
    STASH_3 = 11,
    STASH_4 = 12,
    STASH_5 = 13,
    STASH_6 = 14,
    TP_SCROLL = 15,
    NEUTRAL_SLOT = 16,
    TRANSIENT_ITEM = 17,
    TRANSIENT_RECIPE = 18,
    TRANSIENT_CAST_ITEM = 20,
}

declare const DOTA_PLAYER_LOADOUT_START: 58;

declare const DOTA_PLAYER_LOADOUT_END: 83;

declare const DOTA_LOADOUT_TYPE_COUNT: 85;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASlotType_t = LoadoutType;

/**
 * @compileMembersOnly
 */
declare enum LoadoutType {
    TYPE_INVALID = -1,
    TYPE_WEAPON = 0,
    TYPE_OFFHAND_WEAPON = 1,
    TYPE_WEAPON_2 = 2,
    TYPE_OFFHAND_WEAPON_2 = 3,
    TYPE_HEAD = 4,
    TYPE_SHOULDER = 5,
    TYPE_ARMS = 6,
    TYPE_ARMOR = 7,
    TYPE_BELT = 8,
    TYPE_NECK = 9,
    TYPE_BACK = 10,
    TYPE_GLOVES = 11,
    TYPE_LEGS = 12,
    TYPE_TAIL = 13,
    TYPE_MISC = 14,
    TYPE_COSTUME = 15,
    TYPE_BODY_HEAD = 16,
    TYPE_MOUNT = 17,
    TYPE_SUMMON = 18,
    TYPE_SHAPESHIFT = 19,
    TYPE_TAUNT = 20,
    TYPE_AMBIENT_EFFECTS = 21,
    TYPE_ABILITY_ATTACK = 22,
    TYPE_ABILITY_1 = 23,
    TYPE_ABILITY_2 = 24,
    TYPE_ABILITY_3 = 25,
    TYPE_ABILITY_4 = 26,
    TYPE_ABILITY_ULTIMATE = 27,
    TYPE_VOICE = 28,
    PERSONA_1_START = 29,
    TYPE_WEAPON_PERSONA_1 = 29,
    TYPE_OFFHAND_WEAPON_PERSONA_1 = 30,
    TYPE_WEAPON_2_PERSONA_1 = 31,
    TYPE_OFFHAND_WEAPON_2_PERSONA_1 = 32,
    TYPE_HEAD_PERSONA_1 = 33,
    TYPE_SHOULDER_PERSONA_1 = 34,
    TYPE_ARMS_PERSONA_1 = 35,
    TYPE_ARMOR_PERSONA_1 = 36,
    TYPE_BELT_PERSONA_1 = 37,
    TYPE_NECK_PERSONA_1 = 38,
    TYPE_BACK_PERSONA_1 = 39,
    TYPE_LEGS_PERSONA_1 = 40,
    TYPE_GLOVES_PERSONA_1 = 41,
    TYPE_TAIL_PERSONA_1 = 42,
    TYPE_MISC_PERSONA_1 = 43,
    TYPE_BODY_HEAD_PERSONA_1 = 44,
    TYPE_MOUNT_PERSONA_1 = 45,
    TYPE_SUMMON_PERSONA_1 = 46,
    TYPE_SHAPESHIFT_PERSONA_1 = 47,
    TYPE_TAUNT_PERSONA_1 = 48,
    TYPE_AMBIENT_EFFECTS_PERSONA_1 = 49,
    TYPE_ABILITY_ATTACK_PERSONA_1 = 50,
    TYPE_ABILITY_1_PERSONA_1 = 51,
    TYPE_ABILITY_2_PERSONA_1 = 52,
    TYPE_ABILITY_3_PERSONA_1 = 53,
    TYPE_ABILITY_4_PERSONA_1 = 54,
    TYPE_ABILITY_ULTIMATE_PERSONA_1 = 55,
    PERSONA_1_END = 56,
    TYPE_VOICE_PERSONA_1 = 56,
    TYPE_PERSONA_SELECTOR = 57,
    TYPE_COURIER = 58,
    TYPE_ANNOUNCER = 59,
    TYPE_MEGA_KILLS = 60,
    TYPE_MUSIC = 61,
    TYPE_WARD = 62,
    TYPE_HUD_SKIN = 63,
    TYPE_LOADING_SCREEN = 64,
    TYPE_WEATHER = 65,
    TYPE_HEROIC_STATUE = 66,
    TYPE_MULTIKILL_BANNER = 67,
    TYPE_CURSOR_PACK = 68,
    TYPE_TELEPORT_EFFECT = 69,
    TYPE_BLINK_EFFECT = 70,
    TYPE_EMBLEM = 71,
    TYPE_TERRAIN = 72,
    TYPE_RADIANT_CREEPS = 73,
    TYPE_DIRE_CREEPS = 74,
    TYPE_RADIANT_TOWER = 75,
    TYPE_DIRE_TOWER = 76,
    TYPE_VERSUS_SCREEN = 77,
    TYPE_STREAK_EFFECT = 78,
    TYPE_KILL_EFFECT = 79,
    TYPE_DEATH_EFFECT = 80,
    TYPE_HEAD_EFFECT = 81,
    TYPE_MAP_EFFECT = 82,
    TYPE_COURIER_EFFECT = 83,
    TYPE_NONE = 84,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASpeechType_t = SpeechType;

/**
 * @compileMembersOnly
 */
declare enum SpeechType {
    USER_INVALID = 0,
    USER_SINGLE = 1,
    USER_TEAM = 2,
    USER_TEAM_NEARBY = 3,
    USER_NEARBY = 4,
    USER_ALL = 5,
    GOOD_TEAM = 6,
    BAD_TEAM = 7,
    SPECTATOR = 8,
    USER_TEAM_NOSPECTATOR = 9,
    RECIPIENT_TYPE_MAX = 10,
}

declare const DOTA_TEAM_FIRST: 2;

declare const DOTA_TEAM_CUSTOM_MIN: 6;

declare const DOTA_TEAM_CUSTOM_COUNT: 8;

declare const DOTA_TEAM_CUSTOM_MAX: 13;

declare const DOTA_TEAM_COUNT: 14;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTATeam_t = DotaTeam;

/**
 * @compileMembersOnly
 */
declare enum DotaTeam {
    GOODGUYS = 2,
    BADGUYS = 3,
    NEUTRALS = 4,
    NOTEAM = 5,
    CUSTOM_1 = 6,
    CUSTOM_2 = 7,
    CUSTOM_3 = 8,
    CUSTOM_4 = 9,
    CUSTOM_5 = 10,
    CUSTOM_6 = 11,
    CUSTOM_7 = 12,
    CUSTOM_8 = 13,
}

declare const DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitAttackCapability_t = UnitAttackCapability;

/**
 * @compileMembersOnly
 */
declare enum UnitAttackCapability {
    NO_ATTACK = 0,
    MELEE_ATTACK = 1,
    RANGED_ATTACK = 2,
    RANGED_ATTACK_DIRECTIONAL = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitMoveCapability_t = UnitMoveCapability;

/**
 * @compileMembersOnly
 */
declare enum UnitMoveCapability {
    NONE = 0,
    GROUND = 1,
    FLY = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type dotaunitorder_t = UnitOrder;

/**
 * @compileMembersOnly
 */
declare enum UnitOrder {
    NONE = 0,
    MOVE_TO_POSITION = 1,
    MOVE_TO_TARGET = 2,
    ATTACK_MOVE = 3,
    ATTACK_TARGET = 4,
    CAST_POSITION = 5,
    CAST_TARGET = 6,
    CAST_TARGET_TREE = 7,
    CAST_NO_TARGET = 8,
    CAST_TOGGLE = 9,
    HOLD_POSITION = 10,
    TRAIN_ABILITY = 11,
    DROP_ITEM = 12,
    GIVE_ITEM = 13,
    PICKUP_ITEM = 14,
    PICKUP_RUNE = 15,
    PURCHASE_ITEM = 16,
    SELL_ITEM = 17,
    DISASSEMBLE_ITEM = 18,
    MOVE_ITEM = 19,
    CAST_TOGGLE_AUTO = 20,
    STOP = 21,
    TAUNT = 22,
    BUYBACK = 23,
    GLYPH = 24,
    EJECT_ITEM_FROM_STASH = 25,
    CAST_RUNE = 26,
    PING_ABILITY = 27,
    MOVE_TO_DIRECTION = 28,
    PATROL = 29,
    VECTOR_TARGET_POSITION = 30,
    RADAR = 31,
    SET_ITEM_COMBINE_LOCK = 32,
    CONTINUE = 33,
    VECTOR_TARGET_CANCELED = 34,
    CAST_RIVER_PAINT = 35,
    PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
    DROP_ITEM_AT_FOUNTAIN = 37,
    TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyGold_Reason = ModifyGoldReason;

/**
 * @compileMembersOnly
 */
declare enum ModifyGoldReason {
    UNSPECIFIED = 0,
    DEATH = 1,
    BUYBACK = 2,
    PURCHASE_CONSUMABLE = 3,
    PURCHASE_ITEM = 4,
    ABANDONED_REDISTRIBUTE = 5,
    SELL_ITEM = 6,
    ABILITY_COST = 7,
    CHEAT_COMMAND = 8,
    SELECTION_PENALTY = 9,
    GAME_TICK = 10,
    BUILDING = 11,
    HERO_KILL = 12,
    CREEP_KILL = 13,
    NEUTRAL_KILL = 14,
    ROSHAN_KILL = 15,
    COURIER_KILL = 16,
    BOUNTY_RUNE = 17,
    SHARED_GOLD = 18,
    ABILITY_GOLD = 19,
    WARD_KILL = 20,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyXP_Reason = ModifyXpReason;

/**
 * @compileMembersOnly
 */
declare enum ModifyXpReason {
    UNSPECIFIED = 0,
    HERO_KILL = 1,
    CREEP_KILL = 2,
    ROSHAN_KILL = 3,
    TOME_OF_KNOWLEDGE = 4,
    OUTPOST = 5,
    MAX = 6,
}

/**
 * @compileMembersOnly
 */
declare enum EntityEffects {
    EF_NODRAW = 32,
}

/**
 * @compileMembersOnly
 */
declare enum EntityThinkPhase {
    RESIM = 0,
    RESENSING = 1,
    OSTSENSING = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EShareAbility = ItemShareability;

/**
 * @compileMembersOnly
 */
declare enum ItemShareability {
    FULLY_SHAREABLE = 0,
    PARTIALLY_SHAREABLE = 1,
    NOT_SHAREABLE = 2,
}

/**
 * @compileMembersOnly
 */
declare enum FindOrder {
    ANY = 0,
    CLOSEST = 1,
    FARTHEST = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type GameActivity_t = GameActivity;

/**
 * @compileMembersOnly
 */
declare enum GameActivity {
    RESET = 0,
    IDLE = 1,
    TRANSITION = 2,
    COVER = 3,
    COVER_MED = 4,
    COVER_LOW = 5,
    WALK = 6,
    WALK_AIM = 7,
    WALK_CROUCH = 8,
    WALK_CROUCH_AIM = 9,
    RUN = 10,
    RUN_AIM = 11,
    RUN_CROUCH = 12,
    RUN_CROUCH_AIM = 13,
    RUN_PROTECTED = 14,
    SCRIPT_CUSTOM_MOVE = 15,
    RANGE_ATTACK_1 = 16,
    RANGE_ATTACK_2 = 17,
    RANGE_ATTACK_1_LOW = 18,
    RANGE_ATTACK_2_LOW = 19,
    DIESIMPLE = 20,
    DIEBACKWARD = 21,
    DIEFORWARD = 22,
    DIEVIOLENT = 23,
    DIERAGDOLL = 24,
    FLY = 25,
    HOVER = 26,
    GLIDE = 27,
    SWIM = 28,
    JUMP = 29,
    HOP = 30,
    LEAP = 31,
    LAND = 32,
    CLIMB_UP = 33,
    CLIMB_DOWN = 34,
    CLIMB_DISMOUNT = 35,
    SHIPLADDER_UP = 36,
    SHIPLADDER_DOWN = 37,
    STRAFE_LEFT = 38,
    STRAFE_RIGHT = 39,
    ROLL_LEFT = 40,
    ROLL_RIGHT = 41,
    TURN_LEFT = 42,
    TURN_RIGHT = 43,
    CROUCH = 44,
    CROUCHIDLE = 45,
    STAND = 46,
    USE = 47,
    ALIEN_BURROW_IDLE = 48,
    ALIEN_BURROW_OUT = 49,
    SIGNAL_1 = 50,
    SIGNAL_2 = 51,
    SIGNAL_3 = 52,
    SIGNAL_ADVANCE = 53,
    SIGNAL_FORWARD = 54,
    SIGNAL_GROUP = 55,
    SIGNAL_HALT = 56,
    SIGNAL_LEFT = 57,
    SIGNAL_RIGHT = 58,
    SIGNAL_TAKECOVER = 59,
    LOOKBACK_RIGHT = 60,
    LOOKBACK_LEFT = 61,
    COWER = 62,
    SMALL_FLINCH = 63,
    BIG_FLINCH = 64,
    MELEE_ATTACK_1 = 65,
    MELEE_ATTACK_2 = 66,
    RELOAD = 67,
    RELOAD_START = 68,
    RELOAD_FINISH = 69,
    RELOAD_LOW = 70,
    ARM = 71,
    DISARM = 72,
    DROP_WEAPON = 73,
    DROP_WEAPON_SHOTGUN = 74,
    PICKUP_GROUND = 75,
    PICKUP_RACK = 76,
    IDLE_ANGRY = 77,
    IDLE_RELAXED = 78,
    IDLE_STIMULATED = 79,
    IDLE_AGITATED = 80,
    IDLE_STEALTH = 81,
    IDLE_HURT = 82,
    WALK_RELAXED = 83,
    WALK_STIMULATED = 84,
    WALK_AGITATED = 85,
    WALK_STEALTH = 86,
    RUN_RELAXED = 87,
    RUN_STIMULATED = 88,
    RUN_AGITATED = 89,
    RUN_STEALTH = 90,
    IDLE_AIM_RELAXED = 91,
    IDLE_AIM_STIMULATED = 92,
    IDLE_AIM_AGITATED = 93,
    IDLE_AIM_STEALTH = 94,
    WALK_AIM_RELAXED = 95,
    WALK_AIM_STIMULATED = 96,
    WALK_AIM_AGITATED = 97,
    WALK_AIM_STEALTH = 98,
    RUN_AIM_RELAXED = 99,
    RUN_AIM_STIMULATED = 100,
    RUN_AIM_AGITATED = 101,
    RUN_AIM_STEALTH = 102,
    CROUCHIDLE_STIMULATED = 103,
    CROUCHIDLE_AIM_STIMULATED = 104,
    CROUCHIDLE_AGITATED = 105,
    WALK_HURT = 106,
    RUN_HURT = 107,
    SPECIAL_ATTACK_1 = 108,
    SPECIAL_ATTACK_2 = 109,
    COMBAT_IDLE = 110,
    WALK_SCARED = 111,
    RUN_SCARED = 112,
    VICTORY_DANCE = 113,
    DIE_HEADSHOT = 114,
    DIE_CHESTSHOT = 115,
    DIE_GUTSHOT = 116,
    DIE_BACKSHOT = 117,
    FLINCH_HEAD = 118,
    FLINCH_CHEST = 119,
    FLINCH_STOMACH = 120,
    FLINCH_LEFTARM = 121,
    FLINCH_RIGHTARM = 122,
    FLINCH_LEFTLEG = 123,
    FLINCH_RIGHTLEG = 124,
    FLINCH_PHYSICS = 125,
    FLINCH_HEAD_BACK = 126,
    FLINCH_CHEST_BACK = 127,
    FLINCH_STOMACH_BACK = 128,
    FLINCH_CROUCH_FRONT = 129,
    FLINCH_CROUCH_BACK = 130,
    FLINCH_CROUCH_LEFT = 131,
    FLINCH_CROUCH_RIGHT = 132,
    IDLE_ON_FIRE = 133,
    WALK_ON_FIRE = 134,
    RUN_ON_FIRE = 135,
    '180_LEFT' = 137,
    '180_RIGHT' = 138,
    '90_LEFT' = 139,
    '90_RIGHT' = 140,
    STEP_LEFT = 141,
    STEP_RIGHT = 142,
    STEP_BACK = 143,
    STEP_FORE = 144,
    GESTURE_RANGE_ATTACK_1 = 145,
    GESTURE_RANGE_ATTACK_2 = 146,
    GESTURE_MELEE_ATTACK_1 = 147,
    GESTURE_MELEE_ATTACK_2 = 148,
    GESTURE_RANGE_ATTACK_1_LOW = 149,
    GESTURE_RANGE_ATTACK_2_LOW = 150,
    MELEE_ATTACK_SWING_GESTURE = 151,
    GESTURE_SMALL_FLINCH = 152,
    GESTURE_BIG_FLINCH = 153,
    GESTURE_FLINCH_BLAST = 154,
    GESTURE_FLINCH_BLAST_SHOTGUN = 155,
    GESTURE_FLINCH_BLAST_DAMAGED = 156,
    GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN = 157,
    GESTURE_FLINCH_HEAD = 158,
    GESTURE_FLINCH_CHEST = 159,
    GESTURE_FLINCH_STOMACH = 160,
    GESTURE_FLINCH_LEFTARM = 161,
    GESTURE_FLINCH_RIGHTARM = 162,
    GESTURE_FLINCH_LEFTLEG = 163,
    GESTURE_FLINCH_RIGHTLEG = 164,
    GESTURE_TURN_LEFT = 165,
    GESTURE_TURN_RIGHT = 166,
    GESTURE_TURN_LEFT_45 = 167,
    GESTURE_TURN_RIGHT_45 = 168,
    GESTURE_TURN_LEFT_90 = 169,
    GESTURE_TURN_RIGHT_90 = 170,
    GESTURE_TURN_LEFT_45_FLAT = 171,
    GESTURE_TURN_RIGHT_45_FLAT = 172,
    GESTURE_TURN_LEFT_90_FLAT = 173,
    GESTURE_TURN_RIGHT_90_FLAT = 174,
    BARNACLE_HIT = 175,
    BARNACLE_PULL = 176,
    BARNACLE_CHOMP = 177,
    BARNACLE_CHEW = 178,
    DO_NOT_DISTURB = 179,
    SPECIFIC_SEQUENCE = 180,
    VM_DEPLOY = 181,
    VM_RELOAD_EMPTY = 182,
    VM_DRAW = 183,
    VM_HOLSTER = 184,
    VM_IDLE = 185,
    VM_FIDGET = 186,
    VM_PULLBACK = 187,
    VM_PULLBACK_HIGH = 188,
    VM_PULLBACK_LOW = 189,
    VM_THROW = 190,
    VM_DROP = 191,
    VM_PULLPIN = 192,
    VM_PRIMARYATTACK = 193,
    VM_SECONDARYATTACK = 194,
    VM_RELOAD = 195,
    VM_DRYFIRE = 196,
    VM_HITLEFT = 197,
    VM_HITLEFT_2 = 198,
    VM_HITRIGHT = 199,
    VM_HITRIGHT_2 = 200,
    VM_HITCENTER = 201,
    VM_HITCENTER_2 = 202,
    VM_MISSLEFT = 203,
    VM_MISSLEFT_2 = 204,
    VM_MISSRIGHT = 205,
    VM_MISSRIGHT_2 = 206,
    VM_MISSCENTER = 207,
    VM_MISSCENTER_2 = 208,
    VM_HAULBACK = 209,
    VM_SWINGHARD = 210,
    VM_SWINGMISS = 211,
    VM_SWINGHIT = 212,
    VM_IDLE_TO_LOWERED = 213,
    VM_IDLE_LOWERED = 214,
    VM_LOWERED_TO_IDLE = 215,
    VM_RECOIL_1 = 216,
    VM_RECOIL_2 = 217,
    VM_RECOIL_3 = 218,
    VM_PICKUP = 219,
    VM_RELEASE = 220,
    VM_MAUL_LOOP = 221,
    VM_ATTACH_SILENCER = 222,
    VM_DETACH_SILENCER = 223,
    SLAM_STICKWALL_IDLE = 224,
    SLAM_STICKWALL_ND_IDLE = 225,
    SLAM_STICKWALL_ATTACH = 226,
    SLAM_STICKWALL_ATTACH_2 = 227,
    SLAM_STICKWALL_ND_ATTACH = 228,
    SLAM_STICKWALL_ND_ATTACH_2 = 229,
    SLAM_STICKWALL_DETONATE = 230,
    SLAM_STICKWALL_DETONATOR_HOLSTER = 231,
    SLAM_STICKWALL_DRAW = 232,
    SLAM_STICKWALL_ND_DRAW = 233,
    SLAM_STICKWALL_TO_THROW = 234,
    SLAM_STICKWALL_TO_THROW_ND = 235,
    SLAM_STICKWALL_TO_TRIPMINE_ND = 236,
    SLAM_THROW_IDLE = 237,
    SLAM_THROW_ND_IDLE = 238,
    SLAM_THROW_THROW = 239,
    SLAM_THROW_THROW_2 = 240,
    SLAM_THROW_THROW_ND = 241,
    SLAM_THROW_THROW_ND_2 = 242,
    SLAM_THROW_DRAW = 243,
    SLAM_THROW_ND_DRAW = 244,
    SLAM_THROW_TO_STICKWALL = 245,
    SLAM_THROW_TO_STICKWALL_ND = 246,
    SLAM_THROW_DETONATE = 247,
    SLAM_THROW_DETONATOR_HOLSTER = 248,
    SLAM_THROW_TO_TRIPMINE_ND = 249,
    SLAM_TRIPMINE_IDLE = 250,
    SLAM_TRIPMINE_DRAW = 251,
    SLAM_TRIPMINE_ATTACH = 252,
    SLAM_TRIPMINE_ATTACH_2 = 253,
    SLAM_TRIPMINE_TO_STICKWALL_ND = 254,
    SLAM_TRIPMINE_TO_THROW_ND = 255,
    SLAM_DETONATOR_IDLE = 256,
    SLAM_DETONATOR_DRAW = 257,
    SLAM_DETONATOR_DETONATE = 258,
    SLAM_DETONATOR_HOLSTER = 259,
    SLAM_DETONATOR_STICKWALL_DRAW = 260,
    SLAM_DETONATOR_THROW_DRAW = 261,
    SHOTGUN_RELOAD_START = 262,
    SHOTGUN_RELOAD_FINISH = 263,
    SHOTGUN_PUMP = 264,
    SMG_2_IDLE_2 = 265,
    SMG_2_FIRE_2 = 266,
    SMG_2_DRAW_2 = 267,
    SMG_2_RELOAD_2 = 268,
    SMG_2_DRYFIRE_2 = 269,
    SMG_2_TOAUTO = 270,
    SMG_2_TOBURST = 271,
    PHYSCANNON_UPGRADE = 272,
    RANGE_ATTACK_AR_1 = 273,
    RANGE_ATTACK_AR_2 = 274,
    RANGE_ATTACK_AR_2_LOW = 275,
    RANGE_ATTACK_AR_2_GRENADE = 276,
    RANGE_ATTACK_HMG_1 = 277,
    RANGE_ATTACK_ML = 278,
    RANGE_ATTACK_SMG_1 = 279,
    RANGE_ATTACK_SMG_1_LOW = 280,
    RANGE_ATTACK_SMG_2 = 281,
    RANGE_ATTACK_SHOTGUN = 282,
    RANGE_ATTACK_SHOTGUN_LOW = 283,
    RANGE_ATTACK_PISTOL = 284,
    RANGE_ATTACK_PISTOL_LOW = 285,
    RANGE_ATTACK_SLAM = 286,
    RANGE_ATTACK_TRIPWIRE = 287,
    RANGE_ATTACK_THROW = 288,
    RANGE_ATTACK_SNIPER_RIFLE = 289,
    RANGE_ATTACK_RPG = 290,
    MELEE_ATTACK_SWING = 291,
    RANGE_AIM_LOW = 292,
    RANGE_AIM_SMG_1_LOW = 293,
    RANGE_AIM_PISTOL_LOW = 294,
    RANGE_AIM_AR_2_LOW = 295,
    COVER_PISTOL_LOW = 296,
    COVER_SMG_1_LOW = 297,
    GESTURE_RANGE_ATTACK_AR_1 = 298,
    GESTURE_RANGE_ATTACK_AR_2 = 299,
    GESTURE_RANGE_ATTACK_AR_2_GRENADE = 300,
    GESTURE_RANGE_ATTACK_HMG_1 = 301,
    GESTURE_RANGE_ATTACK_ML = 302,
    GESTURE_RANGE_ATTACK_SMG_1 = 303,
    GESTURE_RANGE_ATTACK_SMG_1_LOW = 304,
    GESTURE_RANGE_ATTACK_SMG_2 = 305,
    GESTURE_RANGE_ATTACK_SHOTGUN = 306,
    GESTURE_RANGE_ATTACK_PISTOL = 307,
    GESTURE_RANGE_ATTACK_PISTOL_LOW = 308,
    GESTURE_RANGE_ATTACK_SLAM = 309,
    GESTURE_RANGE_ATTACK_TRIPWIRE = 310,
    GESTURE_RANGE_ATTACK_THROW = 311,
    GESTURE_RANGE_ATTACK_SNIPER_RIFLE = 312,
    GESTURE_MELEE_ATTACK_SWING = 313,
    IDLE_RIFLE = 314,
    IDLE_SMG_1 = 315,
    IDLE_ANGRY_SMG_1 = 316,
    IDLE_PISTOL = 317,
    IDLE_ANGRY_PISTOL = 318,
    IDLE_ANGRY_SHOTGUN = 319,
    IDLE_STEALTH_PISTOL = 320,
    IDLE_PACKAGE = 321,
    WALK_PACKAGE = 322,
    IDLE_SUITCASE = 323,
    WALK_SUITCASE = 324,
    IDLE_SMG_1_RELAXED = 325,
    IDLE_SMG_1_STIMULATED = 326,
    WALK_RIFLE_RELAXED = 327,
    RUN_RIFLE_RELAXED = 328,
    WALK_RIFLE_STIMULATED = 329,
    RUN_RIFLE_STIMULATED = 330,
    IDLE_AIM_RIFLE_STIMULATED = 331,
    WALK_AIM_RIFLE_STIMULATED = 332,
    RUN_AIM_RIFLE_STIMULATED = 333,
    IDLE_SHOTGUN_RELAXED = 334,
    IDLE_SHOTGUN_STIMULATED = 335,
    IDLE_SHOTGUN_AGITATED = 336,
    WALK_ANGRY = 337,
    POLICE_HARASS_1 = 338,
    POLICE_HARASS_2 = 339,
    IDLE_MANNEDGUN = 340,
    IDLE_MELEE = 341,
    IDLE_ANGRY_MELEE = 342,
    IDLE_RPG_RELAXED = 343,
    IDLE_RPG = 344,
    IDLE_ANGRY_RPG = 345,
    COVER_LOW_RPG = 346,
    WALK_RPG = 347,
    RUN_RPG = 348,
    WALK_CROUCH_RPG = 349,
    RUN_CROUCH_RPG = 350,
    WALK_RPG_RELAXED = 351,
    RUN_RPG_RELAXED = 352,
    WALK_RIFLE = 353,
    WALK_AIM_RIFLE = 354,
    WALK_CROUCH_RIFLE = 355,
    WALK_CROUCH_AIM_RIFLE = 356,
    RUN_RIFLE = 357,
    RUN_AIM_RIFLE = 358,
    RUN_CROUCH_RIFLE = 359,
    RUN_CROUCH_AIM_RIFLE = 360,
    RUN_STEALTH_PISTOL = 361,
    WALK_AIM_SHOTGUN = 362,
    RUN_AIM_SHOTGUN = 363,
    WALK_PISTOL = 364,
    RUN_PISTOL = 365,
    WALK_AIM_PISTOL = 366,
    RUN_AIM_PISTOL = 367,
    WALK_STEALTH_PISTOL = 368,
    WALK_AIM_STEALTH_PISTOL = 369,
    RUN_AIM_STEALTH_PISTOL = 370,
    RELOAD_PISTOL = 371,
    RELOAD_PISTOL_LOW = 372,
    RELOAD_SMG_1 = 373,
    RELOAD_SMG_1_LOW = 374,
    RELOAD_SHOTGUN = 375,
    RELOAD_SHOTGUN_LOW = 376,
    GESTURE_RELOAD = 377,
    GESTURE_RELOAD_PISTOL = 378,
    GESTURE_RELOAD_SMG_1 = 379,
    GESTURE_RELOAD_SHOTGUN = 380,
    BUSY_LEAN_LEFT = 381,
    BUSY_LEAN_LEFT_ENTRY = 382,
    BUSY_LEAN_LEFT_EXIT = 383,
    BUSY_LEAN_BACK = 384,
    BUSY_LEAN_BACK_ENTRY = 385,
    BUSY_LEAN_BACK_EXIT = 386,
    BUSY_SIT_GROUND = 387,
    BUSY_SIT_GROUND_ENTRY = 388,
    BUSY_SIT_GROUND_EXIT = 389,
    BUSY_SIT_CHAIR = 390,
    BUSY_SIT_CHAIR_ENTRY = 391,
    BUSY_SIT_CHAIR_EXIT = 392,
    BUSY_STAND = 393,
    BUSY_QUEUE = 394,
    DUCK_DODGE = 395,
    DIE_BARNACLE_SWALLOW = 396,
    GESTURE_BARNACLE_STRANGLE = 397,
    PHYSCANNON_DETACH = 398,
    PHYSCANNON_ANIMATE = 399,
    PHYSCANNON_ANIMATE_PRE = 400,
    PHYSCANNON_ANIMATE_POST = 401,
    DIE_FRONTSIDE = 402,
    DIE_RIGHTSIDE = 403,
    DIE_BACKSIDE = 404,
    DIE_LEFTSIDE = 405,
    DIE_CROUCH_FRONTSIDE = 406,
    DIE_CROUCH_RIGHTSIDE = 407,
    DIE_CROUCH_BACKSIDE = 408,
    DIE_CROUCH_LEFTSIDE = 409,
    DIE_INCAP = 410,
    DIE_STANDING = 411,
    OPEN_DOOR = 412,
    DI_ALYX_ZOMBIE_MELEE = 413,
    DI_ALYX_ZOMBIE_TORSO_MELEE = 414,
    DI_ALYX_HEADCRAB_MELEE = 415,
    DI_ALYX_ANTLION = 416,
    DI_ALYX_ZOMBIE_SHOTGUN_64 = 417,
    DI_ALYX_ZOMBIE_SHOTGUN_26 = 418,
    READINESS_RELAXED_TO_STIMULATED = 419,
    READINESS_RELAXED_TO_STIMULATED_WALK = 420,
    READINESS_AGITATED_TO_STIMULATED = 421,
    READINESS_STIMULATED_TO_RELAXED = 422,
    READINESS_PISTOL_RELAXED_TO_STIMULATED = 423,
    READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK = 424,
    READINESS_PISTOL_AGITATED_TO_STIMULATED = 425,
    READINESS_PISTOL_STIMULATED_TO_RELAXED = 426,
    IDLE_CARRY = 427,
    WALK_CARRY = 428,
    STARTDYING = 429,
    DYINGLOOP = 430,
    DYINGTODEAD = 431,
    RIDE_MANNED_GUN = 432,
    VM_SPRINT_ENTER = 433,
    VM_SPRINT_IDLE = 434,
    VM_SPRINT_LEAVE = 435,
    FIRE_START = 436,
    FIRE_LOOP = 437,
    FIRE_END = 438,
    CROUCHING_GRENADEIDLE = 439,
    CROUCHING_GRENADEREADY = 440,
    CROUCHING_PRIMARYATTACK = 441,
    OVERLAY_GRENADEIDLE = 442,
    OVERLAY_GRENADEREADY = 443,
    OVERLAY_PRIMARYATTACK = 444,
    OVERLAY_SHIELD_UP = 445,
    OVERLAY_SHIELD_DOWN = 446,
    OVERLAY_SHIELD_UP_IDLE = 447,
    OVERLAY_SHIELD_ATTACK = 448,
    OVERLAY_SHIELD_KNOCKBACK = 449,
    SHIELD_UP = 450,
    SHIELD_DOWN = 451,
    SHIELD_UP_IDLE = 452,
    SHIELD_ATTACK = 453,
    SHIELD_KNOCKBACK = 454,
    CROUCHING_SHIELD_UP = 455,
    CROUCHING_SHIELD_DOWN = 456,
    CROUCHING_SHIELD_UP_IDLE = 457,
    CROUCHING_SHIELD_ATTACK = 458,
    CROUCHING_SHIELD_KNOCKBACK = 459,
    TURNRIGHT_45 = 460,
    TURNLEFT_45 = 461,
    TURN = 462,
    OBJ_ASSEMBLING = 463,
    OBJ_DISMANTLING = 464,
    OBJ_STARTUP = 465,
    OBJ_RUNNING = 466,
    OBJ_IDLE = 467,
    OBJ_PLACING = 468,
    OBJ_DETERIORATING = 469,
    OBJ_UPGRADING = 470,
    DEPLOY = 471,
    DEPLOY_IDLE = 472,
    UNDEPLOY = 473,
    CROSSBOW_DRAW_UNLOADED = 474,
    GAUSS_SPINUP = 475,
    GAUSS_SPINCYCLE = 476,
    VM_PRIMARYATTACK_SILENCED = 477,
    VM_RELOAD_SILENCED = 478,
    VM_DRYFIRE_SILENCED = 479,
    VM_IDLE_SILENCED = 480,
    VM_DRAW_SILENCED = 481,
    VM_IDLE_EMPTY_LEFT = 482,
    VM_DRYFIRE_LEFT = 483,
    VM_IS_DRAW = 484,
    VM_IS_HOLSTER = 485,
    VM_IS_IDLE = 486,
    VM_IS_PRIMARYATTACK = 487,
    PLAYER_IDLE_FIRE = 488,
    PLAYER_CROUCH_FIRE = 489,
    PLAYER_CROUCH_WALK_FIRE = 490,
    PLAYER_WALK_FIRE = 491,
    PLAYER_RUN_FIRE = 492,
    IDLETORUN = 493,
    RUNTOIDLE = 494,
    VM_DRAW_DEPLOYED = 495,
    HL_2_MP_IDLE_MELEE = 496,
    HL_2_MP_RUN_MELEE = 497,
    HL_2_MP_IDLE_CROUCH_MELEE = 498,
    HL_2_MP_WALK_CROUCH_MELEE = 499,
    HL_2_MP_GESTURE_RANGE_ATTACK_MELEE = 500,
    HL_2_MP_GESTURE_RELOAD_MELEE = 501,
    HL_2_MP_JUMP_MELEE = 502,
    MP_STAND_IDLE = 503,
    MP_CROUCH_IDLE = 504,
    MP_CROUCH_DEPLOYED_IDLE = 505,
    MP_CROUCH_DEPLOYED = 506,
    MP_DEPLOYED_IDLE = 507,
    MP_RUN = 508,
    MP_WALK = 509,
    MP_AIRWALK = 510,
    MP_CROUCHWALK = 511,
    MP_SPRINT = 512,
    MP_JUMP = 513,
    MP_JUMP_START = 514,
    MP_JUMP_FLOAT = 515,
    MP_JUMP_LAND = 516,
    MP_DOUBLEJUMP = 517,
    MP_SWIM = 518,
    MP_DEPLOYED = 519,
    MP_SWIM_DEPLOYED = 520,
    MP_VCD = 521,
    MP_ATTACK_STAND_PRIMARYFIRE = 522,
    MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED = 523,
    MP_ATTACK_STAND_SECONDARYFIRE = 524,
    MP_ATTACK_STAND_GRENADE = 525,
    MP_ATTACK_CROUCH_PRIMARYFIRE = 526,
    MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED = 527,
    MP_ATTACK_CROUCH_SECONDARYFIRE = 528,
    MP_ATTACK_CROUCH_GRENADE = 529,
    MP_ATTACK_SWIM_PRIMARYFIRE = 530,
    MP_ATTACK_SWIM_SECONDARYFIRE = 531,
    MP_ATTACK_SWIM_GRENADE = 532,
    MP_ATTACK_AIRWALK_PRIMARYFIRE = 533,
    MP_ATTACK_AIRWALK_SECONDARYFIRE = 534,
    MP_ATTACK_AIRWALK_GRENADE = 535,
    MP_RELOAD_STAND = 536,
    MP_RELOAD_STAND_LOOP = 537,
    MP_RELOAD_STAND_END = 538,
    MP_RELOAD_CROUCH = 539,
    MP_RELOAD_CROUCH_LOOP = 540,
    MP_RELOAD_CROUCH_END = 541,
    MP_RELOAD_SWIM = 542,
    MP_RELOAD_SWIM_LOOP = 543,
    MP_RELOAD_SWIM_END = 544,
    MP_RELOAD_AIRWALK = 545,
    MP_RELOAD_AIRWALK_LOOP = 546,
    MP_RELOAD_AIRWALK_END = 547,
    MP_ATTACK_STAND_PREFIRE = 548,
    MP_ATTACK_STAND_POSTFIRE = 549,
    MP_ATTACK_STAND_STARTFIRE = 550,
    MP_ATTACK_CROUCH_PREFIRE = 551,
    MP_ATTACK_CROUCH_POSTFIRE = 552,
    MP_ATTACK_SWIM_PREFIRE = 553,
    MP_ATTACK_SWIM_POSTFIRE = 554,
    MP_STAND_PRIMARY = 555,
    MP_CROUCH_PRIMARY = 556,
    MP_RUN_PRIMARY = 557,
    MP_WALK_PRIMARY = 558,
    MP_AIRWALK_PRIMARY = 559,
    MP_CROUCHWALK_PRIMARY = 560,
    MP_JUMP_PRIMARY = 561,
    MP_JUMP_START_PRIMARY = 562,
    MP_JUMP_FLOAT_PRIMARY = 563,
    MP_JUMP_LAND_PRIMARY = 564,
    MP_SWIM_PRIMARY = 565,
    MP_DEPLOYED_PRIMARY = 566,
    MP_SWIM_DEPLOYED_PRIMARY = 567,
    MP_ATTACK_STAND_PRIMARY = 568,
    MP_ATTACK_STAND_PRIMARY_DEPLOYED = 569,
    MP_ATTACK_CROUCH_PRIMARY = 570,
    MP_ATTACK_CROUCH_PRIMARY_DEPLOYED = 571,
    MP_ATTACK_SWIM_PRIMARY = 572,
    MP_ATTACK_AIRWALK_PRIMARY = 573,
    MP_RELOAD_STAND_PRIMARY = 574,
    MP_RELOAD_STAND_PRIMARY_LOOP = 575,
    MP_RELOAD_STAND_PRIMARY_END = 576,
    MP_RELOAD_CROUCH_PRIMARY = 577,
    MP_RELOAD_CROUCH_PRIMARY_LOOP = 578,
    MP_RELOAD_CROUCH_PRIMARY_END = 579,
    MP_RELOAD_SWIM_PRIMARY = 580,
    MP_RELOAD_SWIM_PRIMARY_LOOP = 581,
    MP_RELOAD_SWIM_PRIMARY_END = 582,
    MP_RELOAD_AIRWALK_PRIMARY = 583,
    MP_RELOAD_AIRWALK_PRIMARY_LOOP = 584,
    MP_RELOAD_AIRWALK_PRIMARY_END = 585,
    MP_ATTACK_STAND_GRENADE_PRIMARY = 586,
    MP_ATTACK_CROUCH_GRENADE_PRIMARY = 587,
    MP_ATTACK_SWIM_GRENADE_PRIMARY = 588,
    MP_ATTACK_AIRWALK_GRENADE_PRIMARY = 589,
    MP_STAND_SECONDARY = 590,
    MP_CROUCH_SECONDARY = 591,
    MP_RUN_SECONDARY = 592,
    MP_WALK_SECONDARY = 593,
    MP_AIRWALK_SECONDARY = 594,
    MP_CROUCHWALK_SECONDARY = 595,
    MP_JUMP_SECONDARY = 596,
    MP_JUMP_START_SECONDARY = 597,
    MP_JUMP_FLOAT_SECONDARY = 598,
    MP_JUMP_LAND_SECONDARY = 599,
    MP_SWIM_SECONDARY = 600,
    MP_ATTACK_STAND_SECONDARY = 601,
    MP_ATTACK_CROUCH_SECONDARY = 602,
    MP_ATTACK_SWIM_SECONDARY = 603,
    MP_ATTACK_AIRWALK_SECONDARY = 604,
    MP_RELOAD_STAND_SECONDARY = 605,
    MP_RELOAD_STAND_SECONDARY_LOOP = 606,
    MP_RELOAD_STAND_SECONDARY_END = 607,
    MP_RELOAD_CROUCH_SECONDARY = 608,
    MP_RELOAD_CROUCH_SECONDARY_LOOP = 609,
    MP_RELOAD_CROUCH_SECONDARY_END = 610,
    MP_RELOAD_SWIM_SECONDARY = 611,
    MP_RELOAD_SWIM_SECONDARY_LOOP = 612,
    MP_RELOAD_SWIM_SECONDARY_END = 613,
    MP_RELOAD_AIRWALK_SECONDARY = 614,
    MP_RELOAD_AIRWALK_SECONDARY_LOOP = 615,
    MP_RELOAD_AIRWALK_SECONDARY_END = 616,
    MP_ATTACK_STAND_GRENADE_SECONDARY = 617,
    MP_ATTACK_CROUCH_GRENADE_SECONDARY = 618,
    MP_ATTACK_SWIM_GRENADE_SECONDARY = 619,
    MP_ATTACK_AIRWALK_GRENADE_SECONDARY = 620,
    MP_STAND_MELEE = 621,
    MP_CROUCH_MELEE = 622,
    MP_RUN_MELEE = 623,
    MP_WALK_MELEE = 624,
    MP_AIRWALK_MELEE = 625,
    MP_CROUCHWALK_MELEE = 626,
    MP_JUMP_MELEE = 627,
    MP_JUMP_START_MELEE = 628,
    MP_JUMP_FLOAT_MELEE = 629,
    MP_JUMP_LAND_MELEE = 630,
    MP_SWIM_MELEE = 631,
    MP_ATTACK_STAND_MELEE = 632,
    MP_ATTACK_STAND_MELEE_SECONDARY = 633,
    MP_ATTACK_CROUCH_MELEE = 634,
    MP_ATTACK_CROUCH_MELEE_SECONDARY = 635,
    MP_ATTACK_SWIM_MELEE = 636,
    MP_ATTACK_AIRWALK_MELEE = 637,
    MP_ATTACK_STAND_GRENADE_MELEE = 638,
    MP_ATTACK_CROUCH_GRENADE_MELEE = 639,
    MP_ATTACK_SWIM_GRENADE_MELEE = 640,
    MP_ATTACK_AIRWALK_GRENADE_MELEE = 641,
    MP_STAND_ITEM_1 = 642,
    MP_CROUCH_ITEM_1 = 643,
    MP_RUN_ITEM_1 = 644,
    MP_WALK_ITEM_1 = 645,
    MP_AIRWALK_ITEM_1 = 646,
    MP_CROUCHWALK_ITEM_1 = 647,
    MP_JUMP_ITEM_1 = 648,
    MP_JUMP_START_ITEM_1 = 649,
    MP_JUMP_FLOAT_ITEM_1 = 650,
    MP_JUMP_LAND_ITEM_1 = 651,
    MP_SWIM_ITEM_1 = 652,
    MP_ATTACK_STAND_ITEM_1 = 653,
    MP_ATTACK_STAND_ITEM_1_SECONDARY = 654,
    MP_ATTACK_CROUCH_ITEM_1 = 655,
    MP_ATTACK_CROUCH_ITEM_1_SECONDARY = 656,
    MP_ATTACK_SWIM_ITEM_1 = 657,
    MP_ATTACK_AIRWALK_ITEM_1 = 658,
    MP_STAND_ITEM_2 = 659,
    MP_CROUCH_ITEM_2 = 660,
    MP_RUN_ITEM_2 = 661,
    MP_WALK_ITEM_2 = 662,
    MP_AIRWALK_ITEM_2 = 663,
    MP_CROUCHWALK_ITEM_2 = 664,
    MP_JUMP_ITEM_2 = 665,
    MP_JUMP_START_ITEM_2 = 666,
    MP_JUMP_FLOAT_ITEM_2 = 667,
    MP_JUMP_LAND_ITEM_2 = 668,
    MP_SWIM_ITEM_2 = 669,
    MP_ATTACK_STAND_ITEM_2 = 670,
    MP_ATTACK_STAND_ITEM_2_SECONDARY = 671,
    MP_ATTACK_CROUCH_ITEM_2 = 672,
    MP_ATTACK_CROUCH_ITEM_2_SECONDARY = 673,
    MP_ATTACK_SWIM_ITEM_2 = 674,
    MP_ATTACK_AIRWALK_ITEM_2 = 675,
    MP_GESTURE_FLINCH = 676,
    MP_GESTURE_FLINCH_PRIMARY = 677,
    MP_GESTURE_FLINCH_SECONDARY = 678,
    MP_GESTURE_FLINCH_MELEE = 679,
    MP_GESTURE_FLINCH_ITEM_1 = 680,
    MP_GESTURE_FLINCH_ITEM_2 = 681,
    MP_GESTURE_FLINCH_HEAD = 682,
    MP_GESTURE_FLINCH_CHEST = 683,
    MP_GESTURE_FLINCH_STOMACH = 684,
    MP_GESTURE_FLINCH_LEFTARM = 685,
    MP_GESTURE_FLINCH_RIGHTARM = 686,
    MP_GESTURE_FLINCH_LEFTLEG = 687,
    MP_GESTURE_FLINCH_RIGHTLEG = 688,
    MP_GRENADE_1_DRAW = 689,
    MP_GRENADE_1_IDLE = 690,
    MP_GRENADE_1_ATTACK = 691,
    MP_GRENADE_2_DRAW = 692,
    MP_GRENADE_2_IDLE = 693,
    MP_GRENADE_2_ATTACK = 694,
    MP_PRIMARY_GRENADE_1_DRAW = 695,
    MP_PRIMARY_GRENADE_1_IDLE = 696,
    MP_PRIMARY_GRENADE_1_ATTACK = 697,
    MP_PRIMARY_GRENADE_2_DRAW = 698,
    MP_PRIMARY_GRENADE_2_IDLE = 699,
    MP_PRIMARY_GRENADE_2_ATTACK = 700,
    MP_SECONDARY_GRENADE_1_DRAW = 701,
    MP_SECONDARY_GRENADE_1_IDLE = 702,
    MP_SECONDARY_GRENADE_1_ATTACK = 703,
    MP_SECONDARY_GRENADE_2_DRAW = 704,
    MP_SECONDARY_GRENADE_2_IDLE = 705,
    MP_SECONDARY_GRENADE_2_ATTACK = 706,
    MP_MELEE_GRENADE_1_DRAW = 707,
    MP_MELEE_GRENADE_1_IDLE = 708,
    MP_MELEE_GRENADE_1_ATTACK = 709,
    MP_MELEE_GRENADE_2_DRAW = 710,
    MP_MELEE_GRENADE_2_IDLE = 711,
    MP_MELEE_GRENADE_2_ATTACK = 712,
    MP_ITEM_1_GRENADE_1_DRAW = 713,
    MP_ITEM_1_GRENADE_1_IDLE = 714,
    MP_ITEM_1_GRENADE_1_ATTACK = 715,
    MP_ITEM_1_GRENADE_2_DRAW = 716,
    MP_ITEM_1_GRENADE_2_IDLE = 717,
    MP_ITEM_1_GRENADE_2_ATTACK = 718,
    MP_ITEM_2_GRENADE_1_DRAW = 719,
    MP_ITEM_2_GRENADE_1_IDLE = 720,
    MP_ITEM_2_GRENADE_1_ATTACK = 721,
    MP_ITEM_2_GRENADE_2_DRAW = 722,
    MP_ITEM_2_GRENADE_2_IDLE = 723,
    MP_ITEM_2_GRENADE_2_ATTACK = 724,
    MP_STAND_BUILDING = 725,
    MP_CROUCH_BUILDING = 726,
    MP_RUN_BUILDING = 727,
    MP_WALK_BUILDING = 728,
    MP_AIRWALK_BUILDING = 729,
    MP_CROUCHWALK_BUILDING = 730,
    MP_JUMP_BUILDING = 731,
    MP_JUMP_START_BUILDING = 732,
    MP_JUMP_FLOAT_BUILDING = 733,
    MP_JUMP_LAND_BUILDING = 734,
    MP_SWIM_BUILDING = 735,
    MP_ATTACK_STAND_BUILDING = 736,
    MP_ATTACK_CROUCH_BUILDING = 737,
    MP_ATTACK_SWIM_BUILDING = 738,
    MP_ATTACK_AIRWALK_BUILDING = 739,
    MP_ATTACK_STAND_GRENADE_BUILDING = 740,
    MP_ATTACK_CROUCH_GRENADE_BUILDING = 741,
    MP_ATTACK_SWIM_GRENADE_BUILDING = 742,
    MP_ATTACK_AIRWALK_GRENADE_BUILDING = 743,
    MP_STAND_PDA = 744,
    MP_CROUCH_PDA = 745,
    MP_RUN_PDA = 746,
    MP_WALK_PDA = 747,
    MP_AIRWALK_PDA = 748,
    MP_CROUCHWALK_PDA = 749,
    MP_JUMP_PDA = 750,
    MP_JUMP_START_PDA = 751,
    MP_JUMP_FLOAT_PDA = 752,
    MP_JUMP_LAND_PDA = 753,
    MP_SWIM_PDA = 754,
    MP_ATTACK_STAND_PDA = 755,
    MP_ATTACK_SWIM_PDA = 756,
    MP_GESTURE_VC_HANDMOUTH = 757,
    MP_GESTURE_VC_FINGERPOINT = 758,
    MP_GESTURE_VC_FISTPUMP = 759,
    MP_GESTURE_VC_THUMBSUP = 760,
    MP_GESTURE_VC_NODYES = 761,
    MP_GESTURE_VC_NODNO = 762,
    MP_GESTURE_VC_HANDMOUTH_PRIMARY = 763,
    MP_GESTURE_VC_FINGERPOINT_PRIMARY = 764,
    MP_GESTURE_VC_FISTPUMP_PRIMARY = 765,
    MP_GESTURE_VC_THUMBSUP_PRIMARY = 766,
    MP_GESTURE_VC_NODYES_PRIMARY = 767,
    MP_GESTURE_VC_NODNO_PRIMARY = 768,
    MP_GESTURE_VC_HANDMOUTH_SECONDARY = 769,
    MP_GESTURE_VC_FINGERPOINT_SECONDARY = 770,
    MP_GESTURE_VC_FISTPUMP_SECONDARY = 771,
    MP_GESTURE_VC_THUMBSUP_SECONDARY = 772,
    MP_GESTURE_VC_NODYES_SECONDARY = 773,
    MP_GESTURE_VC_NODNO_SECONDARY = 774,
    MP_GESTURE_VC_HANDMOUTH_MELEE = 775,
    MP_GESTURE_VC_FINGERPOINT_MELEE = 776,
    MP_GESTURE_VC_FISTPUMP_MELEE = 777,
    MP_GESTURE_VC_THUMBSUP_MELEE = 778,
    MP_GESTURE_VC_NODYES_MELEE = 779,
    MP_GESTURE_VC_NODNO_MELEE = 780,
    MP_GESTURE_VC_HANDMOUTH_ITEM_1 = 781,
    MP_GESTURE_VC_FINGERPOINT_ITEM_1 = 782,
    MP_GESTURE_VC_FISTPUMP_ITEM_1 = 783,
    MP_GESTURE_VC_THUMBSUP_ITEM_1 = 784,
    MP_GESTURE_VC_NODYES_ITEM_1 = 785,
    MP_GESTURE_VC_NODNO_ITEM_1 = 786,
    MP_GESTURE_VC_HANDMOUTH_ITEM_2 = 787,
    MP_GESTURE_VC_FINGERPOINT_ITEM_2 = 788,
    MP_GESTURE_VC_FISTPUMP_ITEM_2 = 789,
    MP_GESTURE_VC_THUMBSUP_ITEM_2 = 790,
    MP_GESTURE_VC_NODYES_ITEM_2 = 791,
    MP_GESTURE_VC_NODNO_ITEM_2 = 792,
    MP_GESTURE_VC_HANDMOUTH_BUILDING = 793,
    MP_GESTURE_VC_FINGERPOINT_BUILDING = 794,
    MP_GESTURE_VC_FISTPUMP_BUILDING = 795,
    MP_GESTURE_VC_THUMBSUP_BUILDING = 796,
    MP_GESTURE_VC_NODYES_BUILDING = 797,
    MP_GESTURE_VC_NODNO_BUILDING = 798,
    MP_GESTURE_VC_HANDMOUTH_PDA = 799,
    MP_GESTURE_VC_FINGERPOINT_PDA = 800,
    MP_GESTURE_VC_FISTPUMP_PDA = 801,
    MP_GESTURE_VC_THUMBSUP_PDA = 802,
    MP_GESTURE_VC_NODYES_PDA = 803,
    MP_GESTURE_VC_NODNO_PDA = 804,
    VM_UNUSABLE = 805,
    VM_UNUSABLE_TO_USABLE = 806,
    VM_USABLE_TO_UNUSABLE = 807,
    PRIMARY_VM_DRAW = 808,
    PRIMARY_VM_HOLSTER = 809,
    PRIMARY_VM_IDLE = 810,
    PRIMARY_VM_PULLBACK = 811,
    PRIMARY_VM_PRIMARYATTACK = 812,
    PRIMARY_VM_SECONDARYATTACK = 813,
    PRIMARY_VM_RELOAD = 814,
    PRIMARY_VM_DRYFIRE = 815,
    PRIMARY_VM_IDLE_TO_LOWERED = 816,
    PRIMARY_VM_IDLE_LOWERED = 817,
    PRIMARY_VM_LOWERED_TO_IDLE = 818,
    SECONDARY_VM_DRAW = 819,
    SECONDARY_VM_HOLSTER = 820,
    SECONDARY_VM_IDLE = 821,
    SECONDARY_VM_PULLBACK = 822,
    SECONDARY_VM_PRIMARYATTACK = 823,
    SECONDARY_VM_SECONDARYATTACK = 824,
    SECONDARY_VM_RELOAD = 825,
    SECONDARY_VM_DRYFIRE = 826,
    SECONDARY_VM_IDLE_TO_LOWERED = 827,
    SECONDARY_VM_IDLE_LOWERED = 828,
    SECONDARY_VM_LOWERED_TO_IDLE = 829,
    MELEE_VM_DRAW = 830,
    MELEE_VM_HOLSTER = 831,
    MELEE_VM_IDLE = 832,
    MELEE_VM_PULLBACK = 833,
    MELEE_VM_PRIMARYATTACK = 834,
    MELEE_VM_SECONDARYATTACK = 835,
    MELEE_VM_RELOAD = 836,
    MELEE_VM_DRYFIRE = 837,
    MELEE_VM_IDLE_TO_LOWERED = 838,
    MELEE_VM_IDLE_LOWERED = 839,
    MELEE_VM_LOWERED_TO_IDLE = 840,
    PDA_VM_DRAW = 841,
    PDA_VM_HOLSTER = 842,
    PDA_VM_IDLE = 843,
    PDA_VM_PULLBACK = 844,
    PDA_VM_PRIMARYATTACK = 845,
    PDA_VM_SECONDARYATTACK = 846,
    PDA_VM_RELOAD = 847,
    PDA_VM_DRYFIRE = 848,
    PDA_VM_IDLE_TO_LOWERED = 849,
    PDA_VM_IDLE_LOWERED = 850,
    PDA_VM_LOWERED_TO_IDLE = 851,
    ITEM_1_VM_DRAW = 852,
    ITEM_1_VM_HOLSTER = 853,
    ITEM_1_VM_IDLE = 854,
    ITEM_1_VM_PULLBACK = 855,
    ITEM_1_VM_PRIMARYATTACK = 856,
    ITEM_1_VM_SECONDARYATTACK = 857,
    ITEM_1_VM_RELOAD = 858,
    ITEM_1_VM_DRYFIRE = 859,
    ITEM_1_VM_IDLE_TO_LOWERED = 860,
    ITEM_1_VM_IDLE_LOWERED = 861,
    ITEM_1_VM_LOWERED_TO_IDLE = 862,
    ITEM_2_VM_DRAW = 863,
    ITEM_2_VM_HOLSTER = 864,
    ITEM_2_VM_IDLE = 865,
    ITEM_2_VM_PULLBACK = 866,
    ITEM_2_VM_PRIMARYATTACK = 867,
    ITEM_2_VM_SECONDARYATTACK = 868,
    ITEM_2_VM_RELOAD = 869,
    ITEM_2_VM_DRYFIRE = 870,
    ITEM_2_VM_IDLE_TO_LOWERED = 871,
    ITEM_2_VM_IDLE_LOWERED = 872,
    ITEM_2_VM_LOWERED_TO_IDLE = 873,
    RELOAD_SUCCEED = 874,
    RELOAD_FAIL = 875,
    WALK_AIM_AUTOGUN = 876,
    RUN_AIM_AUTOGUN = 877,
    IDLE_AUTOGUN = 878,
    IDLE_AIM_AUTOGUN = 879,
    RELOAD_AUTOGUN = 880,
    CROUCH_IDLE_AUTOGUN = 881,
    RANGE_ATTACK_AUTOGUN = 882,
    JUMP_AUTOGUN = 883,
    IDLE_AIM_PISTOL = 884,
    WALK_AIM_DUAL = 885,
    RUN_AIM_DUAL = 886,
    IDLE_DUAL = 887,
    IDLE_AIM_DUAL = 888,
    RELOAD_DUAL = 889,
    CROUCH_IDLE_DUAL = 890,
    RANGE_ATTACK_DUAL = 891,
    JUMP_DUAL = 892,
    IDLE_AIM_SHOTGUN = 893,
    CROUCH_IDLE_SHOTGUN = 894,
    IDLE_AIM_RIFLE = 895,
    CROUCH_IDLE_RIFLE = 896,
    RANGE_ATTACK_RIFLE = 897,
    SLEEP = 898,
    WAKE = 899,
    FLICK_LEFT = 900,
    FLICK_LEFT_MIDDLE = 901,
    FLICK_RIGHT_MIDDLE = 902,
    FLICK_RIGHT = 903,
    SPINAROUND = 904,
    PREP_TO_FIRE = 905,
    FIRE = 906,
    FIRE_RECOVER = 907,
    SPRAY = 908,
    PREP_EXPLODE = 909,
    EXPLODE = 910,
    SCRIPT_CUSTOM_0 = 911,
    SCRIPT_CUSTOM_1 = 912,
    SCRIPT_CUSTOM_2 = 913,
    SCRIPT_CUSTOM_3 = 914,
    SCRIPT_CUSTOM_4 = 915,
    SCRIPT_CUSTOM_5 = 916,
    SCRIPT_CUSTOM_6 = 917,
    SCRIPT_CUSTOM_7 = 918,
    SCRIPT_CUSTOM_8 = 919,
    SCRIPT_CUSTOM_9 = 920,
    SCRIPT_CUSTOM_10 = 921,
    SCRIPT_CUSTOM_11 = 922,
    SCRIPT_CUSTOM_12 = 923,
    SCRIPT_CUSTOM_13 = 924,
    SCRIPT_CUSTOM_14 = 925,
    SCRIPT_CUSTOM_15 = 926,
    SCRIPT_CUSTOM_16 = 927,
    SCRIPT_CUSTOM_17 = 928,
    SCRIPT_CUSTOM_18 = 929,
    SCRIPT_CUSTOM_19 = 930,
    SCRIPT_CUSTOM_20 = 931,
    SCRIPT_CUSTOM_21 = 932,
    SCRIPT_CUSTOM_22 = 933,
    SCRIPT_CUSTOM_23 = 934,
    SCRIPT_CUSTOM_24 = 935,
    SCRIPT_CUSTOM_25 = 936,
    SCRIPT_CUSTOM_26 = 937,
    SCRIPT_CUSTOM_27 = 938,
    SCRIPT_CUSTOM_28 = 939,
    SCRIPT_CUSTOM_29 = 940,
    SCRIPT_CUSTOM_30 = 941,
    SCRIPT_CUSTOM_31 = 942,
    VR_PISTOL_LAST_SHOT = 943,
    VR_PISTOL_SLIDE_RELEASE = 944,
    VR_PISTOL_CLIP_OUT_CHAMBERED = 945,
    VR_PISTOL_CLIP_OUT_SLIDE_BACK = 946,
    VR_PISTOL_CLIP_IN_CHAMBERED = 947,
    VR_PISTOL_CLIP_IN_SLIDE_BACK = 948,
    VR_PISTOL_IDLE_SLIDE_BACK = 949,
    VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY = 950,
    RAGDOLL_RECOVERY_FRONT = 951,
    RAGDOLL_RECOVERY_BACK = 952,
    RAGDOLL_RECOVERY_LEFT = 953,
    RAGDOLL_RECOVERY_RIGHT = 954,
    GRABBITYGLOVES_GRAB = 955,
    GRABBITYGLOVES_RELEASE = 956,
    GRABBITYGLOVES_GRAB_IDLE = 957,
    GRABBITYGLOVES_ACTIVE = 958,
    GRABBITYGLOVES_ACTIVE_IDLE = 959,
    GRABBITYGLOVES_DEACTIVATE = 960,
    GRABBITYGLOVES_PULL = 961,
    HEADCRAB_SMOKE_BOMB = 962,
    HEADCRAB_SPIT = 963,
    ZOMBIE_TRIP = 964,
    ZOMBIE_LUNGE = 965,
    NEUTRAL_REF_POSE = 966,
    ANTLION_SCUTTLE_FORWARD = 967,
    ANTLION_SCUTTLE_BACK = 968,
    ANTLION_SCUTTLE_LEFT = 969,
    ANTLION_SCUTTLE_RIGHT = 970,
    VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK = 971,
    VR_SHOTGUN_IDLE = 972,
    VR_SHOTGUN_OPEN_CHAMBER = 973,
    VR_SHOTGUN_RELOAD_1 = 974,
    VR_SHOTGUN_RELOAD_2 = 975,
    VR_SHOTGUN_RELOAD_3 = 976,
    VR_SHOTGUN_CLOSE_CHAMBER = 977,
    VR_SHOTGUN_TRIGGER_SQUEEZE = 978,
    VR_SHOTGUN_SHOOT = 979,
    VR_SHOTGUN_SLIDE_BACK = 980,
    VR_SHOTGUN_SLIDE_FORWARD = 981,
    VR_PISTOL_LONG_CLIP_IN_CHAMBERED = 982,
    VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK = 983,
    VR_PISTOL_BURST_TOGGLE = 984,
    VR_PISTOL_LOW_KICK = 985,
    VR_PISTOL_BURST_ATTACK = 986,
    VR_SHOTGUN_GRENADE_TWIST = 987,
    DIE_STAND = 988,
    DIE_STAND_HEADSHOT = 989,
    DIE_CROUCH = 990,
    DIE_CROUCH_HEADSHOT = 991,
    CSGO_NULL = 992,
    CSGO_DEFUSE = 993,
    CSGO_DEFUSE_WITH_KIT = 994,
    CSGO_FLASHBANG_REACTION = 995,
    CSGO_FIRE_PRIMARY = 996,
    CSGO_FIRE_PRIMARY_OPT_1 = 997,
    CSGO_FIRE_PRIMARY_OPT_2 = 998,
    CSGO_FIRE_SECONDARY = 999,
    CSGO_FIRE_SECONDARY_OPT_1 = 1000,
    CSGO_FIRE_SECONDARY_OPT_2 = 1001,
    CSGO_RELOAD = 1002,
    CSGO_RELOAD_START = 1003,
    CSGO_RELOAD_LOOP = 1004,
    CSGO_RELOAD_END = 1005,
    CSGO_OPERATE = 1006,
    CSGO_DEPLOY = 1007,
    CSGO_CATCH = 1008,
    CSGO_SILENCER_DETACH = 1009,
    CSGO_SILENCER_ATTACH = 1010,
    CSGO_TWITCH = 1011,
    CSGO_TWITCH_BUYZONE = 1012,
    CSGO_PLANT_BOMB = 1013,
    CSGO_IDLE_TURN_BALANCEADJUST = 1014,
    CSGO_IDLE_ADJUST_STOPPEDMOVING = 1015,
    CSGO_ALIVE_LOOP = 1016,
    CSGO_FLINCH = 1017,
    CSGO_FLINCH_HEAD = 1018,
    CSGO_FLINCH_MOLOTOV = 1019,
    CSGO_JUMP = 1020,
    CSGO_FALL = 1021,
    CSGO_CLIMB_LADDER = 1022,
    CSGO_LAND_LIGHT = 1023,
    CSGO_LAND_HEAVY = 1024,
    CSGO_EXIT_LADDER_TOP = 1025,
    CSGO_EXIT_LADDER_BOTTOM = 1026,
    CSGO_PARACHUTE = 1027,
    CSGO_TAUNT = 1028,
    DOTA_IDLE = 1500,
    DOTA_IDLE_RARE = 1501,
    DOTA_RUN = 1502,
    DOTA_ATTACK = 1503,
    DOTA_ATTACK_2 = 1504,
    DOTA_ATTACK_EVENT = 1505,
    DOTA_DIE = 1506,
    DOTA_FLINCH = 1507,
    DOTA_FLAIL = 1508,
    DOTA_DISABLED = 1509,
    DOTA_CAST_ABILITY_1 = 1510,
    DOTA_CAST_ABILITY_2 = 1511,
    DOTA_CAST_ABILITY_3 = 1512,
    DOTA_CAST_ABILITY_4 = 1513,
    DOTA_CAST_ABILITY_5 = 1514,
    DOTA_CAST_ABILITY_6 = 1515,
    DOTA_OVERRIDE_ABILITY_1 = 1516,
    DOTA_OVERRIDE_ABILITY_2 = 1517,
    DOTA_OVERRIDE_ABILITY_3 = 1518,
    DOTA_OVERRIDE_ABILITY_4 = 1519,
    DOTA_CHANNEL_ABILITY_1 = 1520,
    DOTA_CHANNEL_ABILITY_2 = 1521,
    DOTA_CHANNEL_ABILITY_3 = 1522,
    DOTA_CHANNEL_ABILITY_4 = 1523,
    DOTA_CHANNEL_ABILITY_5 = 1524,
    DOTA_CHANNEL_ABILITY_6 = 1525,
    DOTA_CHANNEL_END_ABILITY_1 = 1526,
    DOTA_CHANNEL_END_ABILITY_2 = 1527,
    DOTA_CHANNEL_END_ABILITY_3 = 1528,
    DOTA_CHANNEL_END_ABILITY_4 = 1529,
    DOTA_CHANNEL_END_ABILITY_5 = 1530,
    DOTA_CHANNEL_END_ABILITY_6 = 1531,
    DOTA_CONSTANT_LAYER = 1532,
    DOTA_CAPTURE = 1533,
    DOTA_SPAWN = 1534,
    DOTA_KILLTAUNT = 1535,
    DOTA_TAUNT = 1536,
    DOTA_THIRST = 1537,
    DOTA_CAST_DRAGONBREATH = 1538,
    DOTA_ECHO_SLAM = 1539,
    DOTA_CAST_ABILITY_1_END = 1540,
    DOTA_CAST_ABILITY_2_END = 1541,
    DOTA_CAST_ABILITY_3_END = 1542,
    DOTA_CAST_ABILITY_4_END = 1543,
    MIRANA_LEAP_END = 1544,
    WAVEFORM_START = 1545,
    WAVEFORM_END = 1546,
    DOTA_CAST_ABILITY_ROT = 1547,
    DOTA_DIE_SPECIAL = 1548,
    DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
    DOTA_RATTLETRAP_POWERCOGS = 1550,
    DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
    DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
    DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
    STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
    DOTA_TINKER_REARM_1 = 1555,
    DOTA_TINKER_REARM_2 = 1556,
    DOTA_TINKER_REARM_3 = 1557,
    TINY_AVALANCHE = 1558,
    TINY_TOSS = 1559,
    TINY_GROWL = 1560,
    DOTA_WEAVERBUG_ATTACH = 1561,
    DOTA_CAST_WILD_AXES_END = 1562,
    DOTA_CAST_LIFE_BREAK_START = 1563,
    DOTA_CAST_LIFE_BREAK_END = 1564,
    DOTA_NIGHTSTALKER_TRANSITION = 1565,
    DOTA_LIFESTEALER_RAGE = 1566,
    DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
    DOTA_SAND_KING_BURROW_IN = 1568,
    DOTA_SAND_KING_BURROW_OUT = 1569,
    DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
    DOTA_WHEEL_LAYER = 1571,
    DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
    DOTA_ALCHEMIST_CONCOCTION = 1573,
    DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
    DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
    DOTA_LIFESTEALER_INFEST = 1576,
    DOTA_LIFESTEALER_INFEST_END = 1577,
    DOTA_LASSO_LOOP = 1578,
    DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
    DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
    DOTA_CAST_COLD_SNAP = 1581,
    DOTA_CAST_GHOST_WALK = 1582,
    DOTA_CAST_TORNADO = 1583,
    DOTA_CAST_EMP = 1584,
    DOTA_CAST_ALACRITY = 1585,
    DOTA_CAST_CHAOS_METEOR = 1586,
    DOTA_CAST_SUN_STRIKE = 1587,
    DOTA_CAST_FORGE_SPIRIT = 1588,
    DOTA_CAST_ICE_WALL = 1589,
    DOTA_CAST_DEAFENING_BLAST = 1590,
    DOTA_VICTORY = 1591,
    DOTA_DEFEAT = 1592,
    DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
    DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
    DOTA_TELEPORT = 1595,
    DOTA_TELEPORT_END = 1596,
    DOTA_CAST_REFRACTION = 1597,
    DOTA_CAST_ABILITY_7 = 1598,
    DOTA_CANCEL_SIREN_SONG = 1599,
    DOTA_CHANNEL_ABILITY_7 = 1600,
    DOTA_LOADOUT = 1601,
    DOTA_FORCESTAFF_END = 1602,
    DOTA_POOF_END = 1603,
    DOTA_SLARK_POUNCE = 1604,
    DOTA_MAGNUS_SKEWER_START = 1605,
    DOTA_MAGNUS_SKEWER_END = 1606,
    DOTA_MEDUSA_STONE_GAZE = 1607,
    DOTA_RELAX_START = 1608,
    DOTA_RELAX_LOOP = 1609,
    DOTA_RELAX_END = 1610,
    DOTA_CENTAUR_STAMPEDE = 1611,
    DOTA_BELLYACHE_START = 1612,
    DOTA_BELLYACHE_LOOP = 1613,
    DOTA_BELLYACHE_END = 1614,
    DOTA_ROQUELAIRE_LAND = 1615,
    DOTA_ROQUELAIRE_LAND_IDLE = 1616,
    DOTA_GREEVIL_CAST = 1617,
    DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
    DOTA_GREEVIL_HOOK_START = 1619,
    DOTA_GREEVIL_HOOK_END = 1620,
    DOTA_GREEVIL_BLINK_BONE = 1621,
    DOTA_IDLE_SLEEPING = 1622,
    DOTA_INTRO = 1623,
    DOTA_GESTURE_POINT = 1624,
    DOTA_GESTURE_ACCENT = 1625,
    DOTA_SLEEPING_END = 1626,
    DOTA_AMBUSH = 1627,
    DOTA_ITEM_LOOK = 1628,
    DOTA_STARTLE = 1629,
    DOTA_FRUSTRATION = 1630,
    DOTA_TELEPORT_REACT = 1631,
    DOTA_TELEPORT_END_REACT = 1632,
    DOTA_SHRUG = 1633,
    DOTA_RELAX_LOOP_END = 1634,
    DOTA_PRESENT_ITEM = 1635,
    DOTA_IDLE_IMPATIENT = 1636,
    DOTA_SHARPEN_WEAPON = 1637,
    DOTA_SHARPEN_WEAPON_OUT = 1638,
    DOTA_IDLE_SLEEPING_END = 1639,
    DOTA_BRIDGE_DESTROY = 1640,
    DOTA_TAUNT_SNIPER = 1641,
    DOTA_DEATH_BY_SNIPER = 1642,
    DOTA_LOOK_AROUND = 1643,
    DOTA_CAGED_CREEP_RAGE = 1644,
    DOTA_CAGED_CREEP_RAGE_OUT = 1645,
    DOTA_CAGED_CREEP_SMASH = 1646,
    DOTA_CAGED_CREEP_SMASH_OUT = 1647,
    DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
    DOTA_INTRO_LOOP = 1649,
    DOTA_BRIDGE_THREAT = 1650,
    DOTA_DAGON = 1651,
    DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
    DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
    DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
    DOTA_NIAN_PIN_START = 1655,
    DOTA_NIAN_PIN_LOOP = 1656,
    DOTA_NIAN_PIN_END = 1657,
    DOTA_LEAP_STUN = 1658,
    DOTA_LEAP_SWIPE = 1659,
    DOTA_NIAN_INTRO_LEAP = 1660,
    DOTA_AREA_DENY = 1661,
    DOTA_NIAN_PIN_TO_STUN = 1662,
    DOTA_RAZE_1 = 1663,
    DOTA_RAZE_2 = 1664,
    DOTA_RAZE_3 = 1665,
    DOTA_UNDYING_DECAY = 1666,
    DOTA_UNDYING_SOUL_RIP = 1667,
    DOTA_UNDYING_TOMBSTONE = 1668,
    DOTA_WHIRLING_AXES_RANGED = 1669,
    DOTA_SHALLOW_GRAVE = 1670,
    DOTA_COLD_FEET = 1671,
    DOTA_ICE_VORTEX = 1672,
    DOTA_CHILLING_TOUCH = 1673,
    DOTA_ENFEEBLE = 1674,
    DOTA_FATAL_BONDS = 1675,
    DOTA_MIDNIGHT_PULSE = 1676,
    DOTA_ANCESTRAL_SPIRIT = 1677,
    DOTA_THUNDER_STRIKE = 1678,
    DOTA_KINETIC_FIELD = 1679,
    DOTA_STATIC_STORM = 1680,
    DOTA_MINI_TAUNT = 1681,
    DOTA_ARCTIC_BURN_END = 1682,
    DOTA_LOADOUT_RARE = 1683,
    DOTA_SWIM = 1684,
    DOTA_FLEE = 1685,
    DOTA_TROT = 1686,
    DOTA_SHAKE = 1687,
    DOTA_SWIM_IDLE = 1688,
    DOTA_WAIT_IDLE = 1689,
    DOTA_GREET = 1690,
    DOTA_TELEPORT_COOP_START = 1691,
    DOTA_TELEPORT_COOP_WAIT = 1692,
    DOTA_TELEPORT_COOP_END = 1693,
    DOTA_TELEPORT_COOP_EXIT = 1694,
    DOTA_SHOPKEEPER_PET_INTERACT = 1695,
    DOTA_ITEM_PICKUP = 1696,
    DOTA_ITEM_DROP = 1697,
    DOTA_CAPTURE_PET = 1698,
    DOTA_PET_WARD_OBSERVER = 1699,
    DOTA_PET_WARD_SENTRY = 1700,
    DOTA_PET_LEVEL = 1701,
    DOTA_CAST_BURROW_END = 1702,
    DOTA_LIFESTEALER_ASSIMILATE = 1703,
    DOTA_LIFESTEALER_EJECT = 1704,
    DOTA_ATTACK_EVENT_BASH = 1705,
    DOTA_CAPTURE_RARE = 1706,
    DOTA_AW_MAGNETIC_FIELD = 1707,
    DOTA_CAST_GHOST_SHIP = 1708,
    DOTA_FXANIM = 1709,
    DOTA_VICTORY_START = 1710,
    DOTA_DEFEAT_START = 1711,
    DOTA_DP_SPIRIT_SIPHON = 1712,
    DOTA_TRICKS_END = 1713,
    DOTA_ES_STONE_CALLER = 1714,
    DOTA_MK_STRIKE = 1715,
    DOTA_VERSUS = 1716,
    DOTA_CAPTURE_CARD = 1717,
    DOTA_MK_SPRING_SOAR = 1718,
    DOTA_MK_SPRING_END = 1719,
    DOTA_MK_TREE_SOAR = 1720,
    DOTA_MK_TREE_END = 1721,
    DOTA_MK_FUR_ARMY = 1722,
    DOTA_MK_SPRING_CAST = 1723,
    DOTA_NECRO_GHOST_SHROUD = 1724,
    DOTA_OVERRIDE_ARCANA = 1725,
    DOTA_SLIDE = 1726,
    DOTA_SLIDE_LOOP = 1727,
    DOTA_GENERIC_CHANNEL_1 = 1728,
    DOTA_GS_SOUL_CHAIN = 1729,
    DOTA_GS_INK_CREATURE = 1730,
    DOTA_TRANSITION = 1731,
    DOTA_BLINK_DAGGER = 1732,
    DOTA_BLINK_DAGGER_END = 1733,
    DOTA_CUSTOM_TOWER_ATTACK = 1734,
    DOTA_CUSTOM_TOWER_IDLE = 1735,
    DOTA_CUSTOM_TOWER_DIE = 1736,
    DOTA_CAST_COLD_SNAP_ORB = 1737,
    DOTA_CAST_GHOST_WALK_ORB = 1738,
    DOTA_CAST_TORNADO_ORB = 1739,
    DOTA_CAST_EMP_ORB = 1740,
    DOTA_CAST_ALACRITY_ORB = 1741,
    DOTA_CAST_CHAOS_METEOR_ORB = 1742,
    DOTA_CAST_SUN_STRIKE_ORB = 1743,
    DOTA_CAST_FORGE_SPIRIT_ORB = 1744,
    DOTA_CAST_ICE_WALL_ORB = 1745,
    DOTA_CAST_DEAFENING_BLAST_ORB = 1746,
    DOTA_NOTICE = 1747,
    DOTA_CAST_ABILITY_2_ALLY = 1748,
    DOTA_SHUFFLE_L = 1749,
    DOTA_SHUFFLE_R = 1750,
    DOTA_OVERRIDE_LOADOUT = 1751,
    DOTA_TAUNT_SPECIAL = 1752,
    DOTA_DISABLED_END = 1755,
    DOTA_RUN_ALT = 1756,
    DOTA_CYCLONE = 1757,
    DOTA_IMPALE = 1758,
    DOTA_TORRENT = 1759,
    DOTA_RELAX_IN = 1760,
    DOTA_RELAX_OUT = 1761,
    DOTA_CAST_FENCE = 1762,
    DOTA_RADIANT_CREEP_HAMMER = 1764,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type LuaModifierType = LuaModifierMotionType;

/**
 * @compileMembersOnly
 */
declare enum LuaModifierMotionType {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
    INVALID = 4,
}

declare const MODIFIER_FUNCTION_LAST: 238;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierfunction = ModifierFunction;

/**
 * @compileMembersOnly
 */
declare enum ModifierFunction {
    /**
     * Method Name: `GetModifierPreAttack_BonusDamage`
     */ PREATTACK_BONUS_DAMAGE = 0,
    /**
     * Method Name: `GetModifierPreAttack_BonusDamage_Target`
     */
    PREATTACK_BONUS_DAMAGE_TARGET = 1,
    /**
     * Method Name: `GetModifierPreAttack_BonusDamage_Proc`
     */
    PREATTACK_BONUS_DAMAGE_PROC = 2,
    /**
     * Method Name: `GetModifierPreAttack_BonusDamagePostCrit`
     */
    PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
    /**
     * Method Name: `GetModifierBaseAttack_BonusDamage`
     */
    BASEATTACK_BONUSDAMAGE = 4,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Physical`
     */
    PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Magical`
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL = 6,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Pure`
     */
    PROCATTACK_BONUS_DAMAGE_PURE = 7,
    /**
     * Method Name: `GetModifierProcAttack_Feedback`
     */
    PROCATTACK_FEEDBACK = 8,
    /**
     * Method Name: `GetModifierOverrideAttackDamage`
     */
    OVERRIDE_ATTACK_DAMAGE = 9,
    /**
     * Method Name: `GetModifierPreAttack`
     */
    PRE_ATTACK = 10,
    /**
     * Method Name: `GetModifierInvisibilityLevel`
     */
    INVISIBILITY_LEVEL = 11,
    /**
     * Method Name: `GetModifierInvisibilityAttackBehaviorException`
     */
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 12,
    /**
     * Method Name: `GetModifierPersistentInvisibility`
     */
    PERSISTENT_INVISIBILITY = 13,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant`
     */
    MOVESPEED_BONUS_CONSTANT = 14,
    /**
     * Method Name: `GetModifierMoveSpeedOverride`
     */
    MOVESPEED_BASE_OVERRIDE = 15,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage`
     */
    MOVESPEED_BONUS_PERCENTAGE = 16,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique`
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 17,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique_2`
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2 = 18,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots`
     */
    MOVESPEED_BONUS_UNIQUE = 19,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots_2`
     */
    MOVESPEED_BONUS_UNIQUE_2 = 20,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 21,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique_2`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 22,
    /**
     * Method Name: `GetModifierMoveSpeed_Absolute`
     */
    MOVESPEED_ABSOLUTE = 23,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMin`
     */
    MOVESPEED_ABSOLUTE_MIN = 24,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMax`
     */
    MOVESPEED_ABSOLUTE_MAX = 25,
    /**
     * Method Name: `GetModifierIgnoreMovespeedLimit`
     */
    IGNORE_MOVESPEED_LIMIT = 26,
    /**
     * Method Name: `GetModifierMoveSpeed_Limit`
     */
    MOVESPEED_LIMIT = 27,
    /**
     * Method Name: `GetModifierAttackSpeedBaseOverride`
     */
    ATTACKSPEED_BASE_OVERRIDE = 28,
    /**
     * Method Name: `GetModifierFixedAttackRate`
     */
    FIXED_ATTACK_RATE = 29,
    /**
     * Method Name: `GetModifierAttackSpeedBonus_Constant`
     */
    ATTACKSPEED_BONUS_CONSTANT = 30,
    /**
     * Method Name: `GetModifierCooldownReduction_Constant`
     */
    COOLDOWN_REDUCTION_CONSTANT = 31,
    /**
     * Method Name: `GetModifierManacostReduction_Constant`
     */
    MANACOST_REDUCTION_CONSTANT = 32,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant`
     */
    BASE_ATTACK_TIME_CONSTANT = 33,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant_Adjust`
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 34,
    /**
     * Method Name: `GetModifierAttackPointConstant`
     */
    ATTACK_POINT_CONSTANT = 35,
    /**
     * Method Name: `GetModifierBonusDamageOutgoing_Percentage`
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 36,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage`
     */
    DAMAGEOUTGOING_PERCENTAGE = 37,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 38,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion_Amplify`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 39,
    /**
     * Method Name: `GetModifierTotalDamageOutgoing_Percentage`
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 40,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageCreep`
     */
    SPELL_AMPLIFY_PERCENTAGE_CREEP = 41,
    /**
     * Method Name: `GetModifierSpellAmplify_Percentage`
     */
    SPELL_AMPLIFY_PERCENTAGE = 42,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageUnique`
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 43,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageSource`
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 44,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageTarget`
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 45,
    /**
     * Method Name: `GetModifierHPRegenAmplify_Percentage`
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 46,
    /**
     * Method Name: `GetModifierLifestealRegenAmplify_Percentage`
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 47,
    /**
     * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage`
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 48,
    /**
     * Method Name: `GetModifierMPRegenAmplify_Percentage`
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 49,
    /**
     * Method Name: `GetModifierManaDrainAmplify_Percentage`
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 50,
    /**
     * Total amplify value is clamped to 0.
     *
     *
     *
     * Method Name: `GetModifierMPRestoreAmplify_Percentage`.
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 51,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_Percentage`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 52,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_PercentageUnique`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 53,
    /**
     * Method Name: `GetModifierIncomingDamage_Percentage`
     */
    INCOMING_DAMAGE_PERCENTAGE = 54,
    /**
     * Method Name: `GetModifierIncomingPhysicalDamage_Percentage`
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 55,
    /**
     * Method Name: `GetModifierIncomingPhysicalDamageConstant`
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 56,
    /**
     * Method Name: `GetModifierIncomingSpellDamageConstant`
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 57,
    /**
     * Method Name: `GetModifierEvasion_Constant`
     */
    EVASION_CONSTANT = 58,
    /**
     * Method Name: `GetModifierNegativeEvasion_Constant`
     */
    NEGATIVE_EVASION_CONSTANT = 59,
    /**
     * Method Name: `GetModifierStatusResistance`
     */
    STATUS_RESISTANCE = 60,
    /**
     * Method Name: `GetModifierStatusResistanceStacking`
     */
    STATUS_RESISTANCE_STACKING = 61,
    /**
     * Method Name: `GetModifierStatusResistanceCaster`
     */
    STATUS_RESISTANCE_CASTER = 62,
    /**
     * Method Name: `GetModifierAvoidDamage`
     */
    AVOID_DAMAGE = 63,
    /**
     * Method Name: `GetModifierAvoidSpell`
     */
    AVOID_SPELL = 64,
    /**
     * Method Name: `GetModifierMiss_Percentage`
     */
    MISS_PERCENTAGE = 65,
    /**
     * Values above 100% are ignored.
     *
     *
     *
     * Method Name: `GetModifierPhysicalArmorBase_Percentage`.
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 66,
    /**
     * Method Name: `GetModifierPhysicalArmorTotal_Percentage`
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 67,
    /**
     * Method Name: `GetModifierPhysicalArmorBonus`
     */
    PHYSICAL_ARMOR_BONUS = 68,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUnique`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 69,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUniqueActive`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 70,
    /**
     * Method Name: `GetModifierIgnorePhysicalArmor`
     */
    IGNORE_PHYSICAL_ARMOR = 71,
    /**
     * Method Name: `GetModifierMagicalResistanceBaseReduction`
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 72,
    /**
     * Method Name: `GetModifierMagicalResistanceDirectModification`
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 73,
    /**
     * Method Name: `GetModifierMagicalResistanceBonus`
     */
    MAGICAL_RESISTANCE_BONUS = 74,
    /**
     * Method Name: `GetModifierMagicalResistanceBonusIllusions`
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 75,
    /**
     * Method Name: `GetModifierMagicalResistanceDecrepifyUnique`
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 76,
    /**
     * Method Name: `GetModifierBaseRegen`
     */
    BASE_MANA_REGEN = 77,
    /**
     * Method Name: `GetModifierConstantManaRegen`
     */
    MANA_REGEN_CONSTANT = 78,
    /**
     * Method Name: `GetModifierConstantManaRegenUnique`
     */
    MANA_REGEN_CONSTANT_UNIQUE = 79,
    /**
     * Method Name: `GetModifierTotalPercentageManaRegen`
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 80,
    /**
     * Method Name: `GetModifierConstantHealthRegen`
     */
    HEALTH_REGEN_CONSTANT = 81,
    /**
     * Method Name: `GetModifierHealthRegenPercentage`
     */
    HEALTH_REGEN_PERCENTAGE = 82,
    /**
     * Method Name: `GetModifierHealthRegenPercentageUnique`
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 83,
    /**
     * Method Name: `GetModifierHealthBonus`
     */
    HEALTH_BONUS = 84,
    /**
     * Method Name: `GetModifierManaBonus`
     */
    MANA_BONUS = 85,
    /**
     * Method Name: `GetModifierExtraStrengthBonus`
     */
    EXTRA_STRENGTH_BONUS = 86,
    /**
     * Method Name: `GetModifierExtraHealthBonus`
     */
    EXTRA_HEALTH_BONUS = 87,
    /**
     * Method Name: `GetModifierExtraManaBonus`
     */
    EXTRA_MANA_BONUS = 88,
    /**
     * Method Name: `GetModifierExtraHealthPercentage`
     */
    EXTRA_HEALTH_PERCENTAGE = 89,
    /**
     * Method Name: `GetModifierExtraManaPercentage`
     */
    EXTRA_MANA_PERCENTAGE = 90,
    /**
     * Method Name: `GetModifierBonusStats_Strength`
     */
    STATS_STRENGTH_BONUS = 91,
    /**
     * Method Name: `GetModifierBonusStats_Agility`
     */
    STATS_AGILITY_BONUS = 92,
    /**
     * Method Name: `GetModifierBonusStats_Intellect`
     */
    STATS_INTELLECT_BONUS = 93,
    /**
     * Method Name: `GetModifierBonusStats_Strength_Percentage`
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 94,
    /**
     * Method Name: `GetModifierBonusStats_Agility_Percentage`
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 95,
    /**
     * Method Name: `GetModifierBonusStats_Intellect_Percentage`
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 96,
    /**
     * Method Name: `GetModifierCastRangeBonus`
     */
    CAST_RANGE_BONUS = 97,
    /**
     * Method Name: `GetModifierCastRangeBonusTarget`
     */
    CAST_RANGE_BONUS_TARGET = 98,
    /**
     * Method Name: `GetModifierCastRangeBonusStacking`
     */
    CAST_RANGE_BONUS_STACKING = 99,
    /**
     * Method Name: `GetModifierAttackRangeOverride`
     */
    ATTACK_RANGE_BASE_OVERRIDE = 100,
    /**
     * Method Name: `GetModifierAttackRangeBonus`
     */
    ATTACK_RANGE_BONUS = 101,
    /**
     * Method Name: `GetModifierAttackRangeBonusUnique`
     */
    ATTACK_RANGE_BONUS_UNIQUE = 102,
    /**
     * Method Name: `GetModifierAttackRangeBonusPercentage`
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 103,
    /**
     * Method Name: `GetModifierMaxAttackRange`
     */
    MAX_ATTACK_RANGE = 104,
    /**
     * Method Name: `GetModifierProjectileSpeedBonus`
     */
    PROJECTILE_SPEED_BONUS = 105,
    /**
     * Method Name: `GetModifierProjectileSpeedBonusPercentage`
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 106,
    /**
     * Method Name: `GetModifierProjectileName`
     */
    PROJECTILE_NAME = 107,
    /**
     * Method Name: `ReincarnateTime`
     */
    REINCARNATION = 108,
    /**
     * Method Name: `GetModifierConstantRespawnTime`
     */
    RESPAWNTIME = 109,
    /**
     * Method Name: `GetModifierPercentageRespawnTime`
     */
    RESPAWNTIME_PERCENTAGE = 110,
    /**
     * Method Name: `GetModifierStackingRespawnTime`
     */
    RESPAWNTIME_STACKING = 111,
    /**
     * Method Name: `GetModifierPercentageCooldown`
     */
    COOLDOWN_PERCENTAGE = 112,
    /**
     * Method Name: `GetModifierPercentageCooldownOngoing`
     */
    COOLDOWN_PERCENTAGE_ONGOING = 113,
    /**
     * Method Name: `GetModifierPercentageCasttime`
     */
    CASTTIME_PERCENTAGE = 114,
    /**
     * Method Name: `GetModifierPercentageAttackAnimTime`
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 115,
    /**
     * Method Name: `GetModifierPercentageManacost`
     */
    MANACOST_PERCENTAGE = 116,
    /**
     * Method Name: `GetModifierPercentageManacostStacking`
     */
    MANACOST_PERCENTAGE_STACKING = 117,
    /**
     * Method Name: `GetModifierConstantDeathGoldCost`
     */
    DEATHGOLDCOST = 118,
    /**
     * Method Name: `GetModifierPercentageExpRateBoost`
     */
    EXP_RATE_BOOST = 119,
    /**
     * Method Name: `GetModifierPreAttack_CriticalStrike`
     */
    PREATTACK_CRITICALSTRIKE = 120,
    /**
     * Method Name: `GetModifierPreAttack_Target_CriticalStrike`
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 121,
    /**
     * Method Name: `GetModifierMagical_ConstantBlock`
     */
    MAGICAL_CONSTANT_BLOCK = 122,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlock`
     */
    PHYSICAL_CONSTANT_BLOCK = 123,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockSpecial`
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 124,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockUnavoidablePreArmor`
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 125,
    /**
     * Method Name: `GetModifierTotal_ConstantBlock`
     */
    TOTAL_CONSTANT_BLOCK = 126,
    /**
     * Method Name: `GetOverrideAnimation`
     */
    OVERRIDE_ANIMATION = 127,
    /**
     * Method Name: `GetOverrideAnimationWeight`
     */
    OVERRIDE_ANIMATION_WEIGHT = 128,
    /**
     * Method Name: `GetOverrideAnimationRate`
     */
    OVERRIDE_ANIMATION_RATE = 129,
    /**
     * Method Name: `GetAbsorbSpell`
     */
    ABSORB_SPELL = 130,
    /**
     * Method Name: `GetReflectSpell`
     */
    REFLECT_SPELL = 131,
    /**
     * Method Name: `GetDisableAutoAttack`
     */
    DISABLE_AUTOATTACK = 132,
    /**
     * Method Name: `GetBonusDayVision`
     */
    BONUS_DAY_VISION = 133,
    /**
     * Method Name: `GetBonusNightVision`
     */
    BONUS_NIGHT_VISION = 134,
    /**
     * Method Name: `GetBonusNightVisionUnique`
     */
    BONUS_NIGHT_VISION_UNIQUE = 135,
    /**
     * Method Name: `GetBonusVisionPercentage`
     */
    BONUS_VISION_PERCENTAGE = 136,
    /**
     * Method Name: `GetFixedDayVision`
     */
    FIXED_DAY_VISION = 137,
    /**
     * Method Name: `GetFixedNightVision`
     */
    FIXED_NIGHT_VISION = 138,
    /**
     * Method Name: `GetMinHealth`
     */
    MIN_HEALTH = 139,
    /**
     * Method Name: `GetAbsoluteNoDamagePhysical`
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 140,
    /**
     * Method Name: `GetAbsoluteNoDamageMagical`
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 141,
    /**
     * Method Name: `GetAbsoluteNoDamagePure`
     */
    ABSOLUTE_NO_DAMAGE_PURE = 142,
    /**
     * Method Name: `GetIsIllusion`
     */
    IS_ILLUSION = 143,
    /**
     * Method Name: `GetModifierIllusionLabel`
     */
    ILLUSION_LABEL = 144,
    /**
     * Method Name: `GetModifierStrongIllusion`
     */
    STRONG_ILLUSION = 145,
    /**
     * Method Name: `GetModifierSuperIllusion`
     */
    SUPER_ILLUSION = 146,
    /**
     * Method Name: `GetModifierSuperIllusionWithUltimate`
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 147,
    /**
     * Method Name: `GetModifierXPDuringDeath`
     */
    XP_DURING_DEATH = 148,
    /**
     * Method Name: `GetModifierTurnRate_Percentage`
     */
    TURN_RATE_PERCENTAGE = 149,
    /**
     * Method Name: `GetModifierTurnRate_Override`
     */
    TURN_RATE_OVERRIDE = 150,
    /**
     * Method Name: `GetDisableHealing`
     */
    DISABLE_HEALING = 151,
    /**
     * Method Name: `GetAlwaysAllowAttack`
     */
    ALWAYS_ALLOW_ATTACK = 152,
    /**
     * Method Name: `GetAllowEtherealAttack`
     */
    ALWAYS_ETHEREAL_ATTACK = 153,
    /**
     * Method Name: `GetOverrideAttackMagical`
     */
    OVERRIDE_ATTACK_MAGICAL = 154,
    /**
     * Method Name: `GetModifierUnitStatsNeedsRefresh`
     */
    UNIT_STATS_NEEDS_REFRESH = 155,
    BOUNTY_CREEP_MULTIPLIER = 156,
    BOUNTY_OTHER_MULTIPLIER = 157,
    /**
     * Method Name: `GetModifierUnitDisllowUpgrading`
     */
    UNIT_DISALLOW_UPGRADING = 158,
    /**
     * Method Name: `GetModifierDodgeProjectile`
     */
    DODGE_PROJECTILE = 159,
    /**
     * Method Name: `GetTriggerCosmeticAndEndAttack`
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 160,
    /**
     * Method Name: `GetModifierMaxDebuffDuration`
     */
    MAX_DEBUFF_DURATION = 161,
    /**
     * Method Name: `GetPrimaryStatDamageMultiplier`
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 162,
    /**
     * Method Name: `OnSpellTargetReady`
     */
    ON_SPELL_TARGET_READY = 163,
    /**
     * Method Name: `OnAttackRecord`
     */
    ON_ATTACK_RECORD = 164,
    /**
     * Method Name: `OnAttackStart`
     */
    ON_ATTACK_START = 165,
    /**
     * Method Name: `OnAttack`
     */
    ON_ATTACK = 166,
    /**
     * Method Name: `OnAttackLanded`
     */
    ON_ATTACK_LANDED = 167,
    /**
     * Method Name: `OnAttackFail`
     */
    ON_ATTACK_FAIL = 168,
    /**
     * Happens even if attack can't be issued.
     *
     *
     *
     * Method Name: `OnAttackAllied`.
     */
    ON_ATTACK_ALLIED = 169,
    /**
     * Method Name: `OnProjectileDodge`
     */
    ON_PROJECTILE_DODGE = 170,
    /**
     * Method Name: `OnOrder`
     */
    ON_ORDER = 171,
    /**
     * Method Name: `OnUnitMoved`
     */
    ON_UNIT_MOVED = 172,
    /**
     * Method Name: `OnAbilityStart`
     */
    ON_ABILITY_START = 173,
    /**
     * Method Name: `OnAbilityExecuted`
     */
    ON_ABILITY_EXECUTED = 174,
    /**
     * Method Name: `OnAbilityFullyCast`
     */
    ON_ABILITY_FULLY_CAST = 175,
    /**
     * Method Name: `OnBreakInvisibility`
     */
    ON_BREAK_INVISIBILITY = 176,
    /**
     * Method Name: `OnAbilityEndChannel`
     */
    ON_ABILITY_END_CHANNEL = 177,
    ON_PROCESS_UPGRADE = 178,
    ON_REFRESH = 179,
    /**
     * Method Name: `OnTakeDamage`
     */
    ON_TAKEDAMAGE = 180,
    /**
     * Method Name: `OnDamagePrevented`
     */
    ON_DEATH_PREVENTED = 181,
    /**
     * Method Name: `OnStateChanged`
     */
    ON_STATE_CHANGED = 182,
    ON_ORB_EFFECT = 183,
    /**
     * Method Name: `OnProcessCleave`
     */
    ON_PROCESS_CLEAVE = 184,
    /**
     * Method Name: `OnDamageCalculated`
     */
    ON_DAMAGE_CALCULATED = 185,
    /**
     * Method Name: `OnAttacked`
     */
    ON_ATTACKED = 186,
    /**
     * Method Name: `OnDeath`
     */
    ON_DEATH = 187,
    /**
     * Method Name: `OnRespawn`
     */
    ON_RESPAWN = 188,
    /**
     * Method Name: `OnSpentMana`
     */
    ON_SPENT_MANA = 189,
    /**
     * Method Name: `OnTeleporting`
     */
    ON_TELEPORTING = 190,
    /**
     * Method Name: `OnTeleported`
     */
    ON_TELEPORTED = 191,
    /**
     * Method Name: `OnSetLocation`
     */
    ON_SET_LOCATION = 192,
    /**
     * Method Name: `OnHealthGained`
     */
    ON_HEALTH_GAINED = 193,
    /**
     * Method Name: `OnManaGained`
     */
    ON_MANA_GAINED = 194,
    /**
     * Method Name: `OnTakeDamageKillCredit`
     */
    ON_TAKEDAMAGE_KILLCREDIT = 195,
    /**
     * Method Name: `OnHeroKilled`
     */
    ON_HERO_KILLED = 196,
    /**
     * Method Name: `OnHealReceived`
     */
    ON_HEAL_RECEIVED = 197,
    /**
     * Method Name: `OnBuildingKilled`
     */
    ON_BUILDING_KILLED = 198,
    /**
     * Method Name: `OnModelChanged`
     */
    ON_MODEL_CHANGED = 199,
    /**
     * Method Name: `OnModifierAdded`
     */
    ON_MODIFIER_ADDED = 200,
    /**
     * Method Name: `OnTooltip`
     */
    TOOLTIP = 201,
    /**
     * Method Name: `GetModifierModelChange`
     */
    MODEL_CHANGE = 202,
    /**
     * Method Name: `GetModifierModelScale`
     */
    MODEL_SCALE = 203,
    /**
     * Always applies scepter when this property is active
     *
     *
     *
     * Method Name: `GetModifierScepter`.
     */
    IS_SCEPTER = 204,
    /**
     * Method Name: `GetModifierShard`
     */
    IS_SHARD = 205,
    /**
     * Method Name: `GetModifierRadarCooldownReduction`
     */
    RADAR_COOLDOWN_REDUCTION = 206,
    /**
     * Method Name: `GetActivityTranslationModifiers`
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 207,
    /**
     * Method Name: `GetAttackSound`
     */
    TRANSLATE_ATTACK_SOUND = 208,
    /**
     * Method Name: `GetUnitLifetimeFraction`
     */
    LIFETIME_FRACTION = 209,
    /**
     * Method Name: `GetModifierProvidesFOWVision`
     */
    PROVIDES_FOW_POSITION = 210,
    /**
     * Method Name: `GetModifierSpellsRequireHP`
     */
    SPELLS_REQUIRE_HP = 211,
    /**
     * Method Name: `GetForceDrawOnMinimap`
     */
    FORCE_DRAW_MINIMAP = 212,
    /**
     * Method Name: `GetModifierDisableTurning`
     */
    DISABLE_TURNING = 213,
    /**
     * Method Name: `GetModifierIgnoreCastAngle`
     */
    IGNORE_CAST_ANGLE = 214,
    /**
     * Method Name: `GetModifierChangeAbilityValue`
     */
    CHANGE_ABILITY_VALUE = 215,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecial`
     */
    OVERRIDE_ABILITY_SPECIAL = 216,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecialValue`
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 217,
    /**
     * Method Name: `GetModifierAbilityLayout`
     */
    ABILITY_LAYOUT = 218,
    /**
     * Method Name: `OnDominated`
     */
    ON_DOMINATED = 219,
    /**
     * Method Name: `GetModifierTempestDouble`
     */
    TEMPEST_DOUBLE = 220,
    /**
     * Method Name: `PreserveParticlesOnModelChanged`
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 221,
    /**
     * Method Name: `OnAttackFinished`
     */
    ON_ATTACK_FINISHED = 222,
    /**
     * Method Name: `GetModifierIgnoreCooldown`
     */
    IGNORE_COOLDOWN = 223,
    /**
     * Method Name: `GetModifierCanAttackTrees`
     */
    CAN_ATTACK_TREES = 224,
    /**
     * Method Name: `GetVisualZDelta`
     */
    VISUAL_Z_DELTA = 225,
    INCOMING_DAMAGE_ILLUSION = 226,
    /**
     * Method Name: `GetModifierNoVisionOfAttacker`
     */
    DONT_GIVE_VISION_OF_ATTACKER = 227,
    /**
     * Method Name: `OnTooltip2`
     */
    TOOLTIP2 = 228,
    /**
     * Method Name: `OnAttackRecordDestroy`
     */
    ON_ATTACK_RECORD_DESTROY = 229,
    /**
     * Method Name: `OnProjectileObstructionHit`
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 230,
    /**
     * Method Name: `GetSuppressTeleport`
     */
    SUPPRESS_TELEPORT = 231,
    /**
     * Method Name: `OnAttackCancelled`
     */
    ON_ATTACK_CANCELLED = 232,
    /**
     * Method Name: `GetSuppressCleave`
     */
    SUPPRESS_CLEAVE = 233,
    /**
     * Method Name: `BotAttackScoreBonus`
     */
    BOT_ATTACK_SCORE_BONUS = 234,
    /**
     * Method Name: `GetModifierAttackSpeedReductionPercentage`
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 235,
    /**
     * Method Name: `GetModifierMoveSpeedReductionPercentage`
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 236,
    ATTACK_WHILE_MOVING_TARGET = 237,
    INVALID = 255,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierpriority = ModifierPriority;

/**
 * @compileMembersOnly
 */
declare enum ModifierPriority {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    ULTRA = 3,
    SUPER_ULTRA = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierremove = ModifierRemove;

/**
 * @compileMembersOnly
 */
declare enum ModifierRemove {
    ALL = 0,
    ENEMY = 1,
    ALLY = 2,
}

declare const MODIFIER_STATE_LAST: 48;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierstate = ModifierState;

/**
 * @compileMembersOnly
 */
declare enum ModifierState {
    ROOTED = 0,
    DISARMED = 1,
    ATTACK_IMMUNE = 2,
    SILENCED = 3,
    MUTED = 4,
    STUNNED = 5,
    HEXED = 6,
    INVISIBLE = 7,
    INVULNERABLE = 8,
    MAGIC_IMMUNE = 9,
    PROVIDES_VISION = 10,
    NIGHTMARED = 11,
    BLOCK_DISABLED = 12,
    EVADE_DISABLED = 13,
    UNSELECTABLE = 14,
    CANNOT_TARGET_ENEMIES = 15,
    CANNOT_MISS = 16,
    SPECIALLY_DENIABLE = 17,
    FROZEN = 18,
    COMMAND_RESTRICTED = 19,
    NOT_ON_MINIMAP = 20,
    LOW_ATTACK_PRIORITY = 21,
    NO_HEALTH_BAR = 22,
    FLYING = 23,
    NO_UNIT_COLLISION = 24,
    NO_TEAM_MOVE_TO = 25,
    NO_TEAM_SELECT = 26,
    PASSIVES_DISABLED = 27,
    DOMINATED = 28,
    BLIND = 29,
    OUT_OF_GAME = 30,
    FAKE_ALLY = 31,
    FLYING_FOR_PATHING_PURPOSES_ONLY = 32,
    TRUESIGHT_IMMUNE = 33,
    UNTARGETABLE = 34,
    IGNORING_MOVE_AND_ATTACK_ORDERS = 35,
    ALLOW_PATHING_THROUGH_TREES = 36,
    NOT_ON_MINIMAP_FOR_ENEMIES = 37,
    UNSLOWABLE = 38,
    TETHERED = 39,
    IGNORING_STOP_ORDERS = 40,
    FEARED = 41,
    TAUNTED = 42,
    CANNOT_BE_MOTION_CONTROLLED = 43,
    FORCED_FLYING_VISION = 44,
    ATTACK_ALLIES = 45,
    ALLOW_PATHING_THROUGH_CLIFFS = 46,
    ALLOW_PATHING_THROUGH_FISSURE = 47,
}

declare const MAX_PATTACH_TYPES: 16;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment_t = ParticleAttachment;

/**
 * @compileMembersOnly
 */
declare enum ParticleAttachment {
    INVALID = -1,
    ABSORIGIN = 0,
    ABSORIGIN_FOLLOW = 1,
    CUSTOMORIGIN = 2,
    CUSTOMORIGIN_FOLLOW = 3,
    POINT = 4,
    POINT_FOLLOW = 5,
    EYES_FOLLOW = 6,
    OVERHEAD_FOLLOW = 7,
    WORLDORIGIN = 8,
    ROOTBONE_FOLLOW = 9,
    RENDERORIGIN_FOLLOW = 10,
    MAIN_VIEW = 11,
    WATERWAKE = 12,
    CENTER_FOLLOW = 13,
    CUSTOM_GAME_STATE_1 = 14,
    HEALTHBAR = 15,
}

/**
 * @compileMembersOnly
 */
declare enum PseudoRandom {
    NONE = 0,
    CUSTOM_GAME_1 = 72,
    CUSTOM_GAME_2 = 73,
    CUSTOM_GAME_3 = 74,
    CUSTOM_GAME_4 = 75,
    CUSTOM_GAME_5 = 76,
    CUSTOM_GAME_6 = 77,
    CUSTOM_GAME_7 = 78,
    CUSTOM_GAME_8 = 79,
    CUSTOM_GAME_9 = 80,
}

declare const QUEST_NUM_TEXT_REPLACE_VALUES: 4;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type quest_text_replace_values_t = QuestTextReplaceValue;

/**
 * @compileMembersOnly
 */
declare enum QuestTextReplaceValue {
    CURRENT_VALUE = 0,
    TARGET_VALUE = 1,
    ROUND = 2,
    REWARD = 3,
}

/**
 * @compileMembersOnly
 */
declare enum ShowGenericPopupType {
    TINT_SCREEN = 1,
    SHOW_NO_OTHER_DIALOGS = 2,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Animation_Events#Server_events
 */
declare enum SourceEngineAnimationEvent {
    EMPTY = 0,
    CL_PLAYSOUND = 1,
    CL_PLAYSOUND_ATTACHMENT = 2,
    CL_PLAYSOUND_POSITION = 3,
    SV_PLAYSOUND = 4,
    CL_STOPSOUND = 5,
    CL_PLAYSOUND_LOOPING = 6,
    CLIENT_EFFECT_ATTACH = 7,
    CL_CREATE_PARTICLE_EFFECT = 8,
    CL_STOP_PARTICLE_EFFECT = 9,
    CL_ADD_PARTICLE_EFFECT_CP = 10,
    CL_CREATE_PARTICLE_EFFECT_CFG = 11,
    CL_SUPPRESS_EVENTS_WITH_TAG = 12,
    START_SCRIPTED_EFFECT = 13,
    STOP_SCRIPTED_EFFECT = 14,
    MUZZLEFLASH = 15,
    SV_DUSTTRAIL = 16,
    FOOTSTEP = 17,
    CL_FOOTSTEP_LEFT = 18,
    CL_FOOTSTEP_RIGHT = 19,
    CL_MFOOTSTEP_LEFT = 20,
    CL_MFOOTSTEP_RIGHT = 21,
    CL_MFOOTSTEP_LEFT_LOUD = 22,
    CL_MFOOTSTEP_RIGHT_LOUD = 23,
    RAGDOLL = 24,
    CL_ENABLE_BODYGROUP = 25,
    CL_DISABLE_BODYGROUP = 26,
    CL_BODYGROUP_SET_VALUE = 27,
    SV_BODYGROUP_SET_VALUE = 28,
    CL_BODYGROUP_SET_VALUE_CMODEL_WPN = 29,
    WPN_PRIMARYATTACK = 30,
    WPN_PLAYWPNSOUND = 31,
    WPN_SECONDARYATTACK = 32,
    CL_SPEECH = 33,
    FIRE_INPUT = 34,
    IK_SET_LOCK_ROTATION_ALPHA = 35,
    IK_ALLOW_PLANE_TILT_NORMAL_UPDATES = 36,
    IK_SET_MASTER_BLEND_AMOUNT = 37,
    IK_SET_CHAIN_BLEND_AMOUNT = 38,
    CL_CLOTH_ATTR = 39,
    CL_CLOTH_GROUND_OFFSET = 40,
    CL_CLOTH_STIFFEN = 41,
    CL_CLOTH_EFFECT = 42,
    CL_CREATE_ANIM_SCOPE_PROP = 43,
    HAPTIC_PULSE = 44,
    CL_DOTA_PLAY_STATUS_EFFECT = 45,
    CL_DOTA_STOP_STATUS_EFFECT = 46,
    CL_DOTA_NPC_CREATE_PARTICLE_EFFECT = 47,
    CL_DOTA_RUBICK_ARCANA_CREATE_PARTICLE_EFFECT = 48,
    DOTA_PET_ITEM_PICKUP = 49,
    DOTA_PET_ITEM_DROP = 50,
    DOTA_SUPPRESS_CONSTANT_LAYER = 51,
    DOTA_PLAY_SOUND_ATTACK_SPECIAL = 52,
    DOTA_CREATE_CLINKZ_ATTACK = 53,
    DOTA_PLAY_SOUND_ATTACK_BACKSTAB = 54,
    DOTA_DIE_PHANTOM_DEATH_PARTICLES = 55,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Damage_types
 */
declare enum SourceEngineDamageTypes {
    /**
     * Generic damage.
     */ GENERIC = 0,
    /**
     * Caused by physics interaction. Ignored by airboat drivers.
     */
    CRUSH = 1,
    /**
     * Bullet damage.
     */
    BULLET = 2,
    /**
     * Sharp objects, such as Manhacks or other NPCs attacks.
     */
    SLASH = 4,
    /**
     * Damage from fire.
     */
    BURN = 8,
    /**
     * Hit by a vehicle. This will need to be set for passengers of some vehicle to
     * receive damage.
     */
    VEHICLE = 16,
    /**
     * Fall damage.
     */
    FALL = 32,
    /**
     * Explosion damage. Will be ignored by most vehicle passengers.
     */
    BLAST = 64,
    /**
     * Crowbar damage.
     */
    CLUB = 128,
    /**
     * Electrical damage, shows smoke at the damage position.
     */
    SHOCK = 256,
    /**
     * Sonic damage,used by the Gargantua and Houndeye NPCs.
     */
    SONIC = 512,
    /**
     * Laser.
     */
    ENERGYBEAM = 1024,
    /**
     * Prevent a physics force.
     */
    PREVENT_PHYSICS_FORCE = 2048,
    /**
     * Never creates gibs. Used by the crossbow.
     */
    NEVERGIB = 4096,
    /**
     * Always create gibs.
     */
    ALWAYSGIB = 8192,
    /**
     * Drown damage.
     */
    DROWN = 16384,
    /**
     * Same as DMG_POISON.
     */
    PARALYZE = 32768,
    /**
     * Neurotoxin damage.
     */
    NERVEGAS = 65536,
    /**
     * Poison damage.
     */
    POISON = 131072,
    /**
     * Radiation. Will be ignored by most vehicle passengers.
     */
    RADIATION = 262144,
    /**
     * Damage applied to the player to restore health after drowning.
     */
    DROWNRECOVER = 524288,
    /**
     * Toxic chemicals or acid burns.
     */
    ACID = 1048576,
    /**
     * In an oven.
     */
    SLOWBURN = 2097152,
    /**
     * Don't create a ragdoll on death.
     */
    REMOVENORAGDOLL = 4194304,
    /**
     * Damage done by the gravity gun.
     */
    PHYSGUN = 8388608,
    /**
     * Plasma.
     */
    PLASMA = 16777216,
}

/**
 * @compileMembersOnly
 *
 * https://developer.valvesoftware.com/wiki/Weapon_script#SoundData
 */
declare enum SourceEngineSoundData {
    EMPTY = 0,
    SINGLE_SHOT = 1,
    SINGLE_SHOT_NPC = 2,
    DOUBLE_SHOT = 3,
    DOUBLE_SHOT_NPC = 4,
    BURST = 5,
    RELOAD = 6,
    RELOAD_NPC = 7,
    MELEE_MISS = 8,
    MELEE_HIT = 9,
    MELEE_HIT_WORLD = 10,
    SPECIAL_1 = 12,
    SPECIAL_2 = 13,
    SPECIAL_3 = 14,
    TAUNT = 15,
    FASTRELOAD = 16,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type subquest_text_replace_values_t = SubquestTextReplaceValue;

/**
 * @compileMembersOnly
 */
declare enum SubquestTextReplaceValue {
    TEXT_REPLACE_CURRENT_VALUE = 0,
    TEXT_REPLACE_TARGET_VALUE = 1,
    NUM_TEXT_REPLACES = 2,
}

/**
 * @compileMembersOnly
 */
declare enum UnitFilterResult {
    SUCCESS = 0,
    FAIL_FRIENDLY = 1,
    FAIL_ENEMY = 2,
    FAIL_HERO = 3,
    FAIL_CONSIDERED_HERO = 4,
    FAIL_CREEP = 5,
    FAIL_BUILDING = 6,
    FAIL_COURIER = 7,
    FAIL_OTHER = 8,
    FAIL_ANCIENT = 9,
    FAIL_ILLUSION = 10,
    FAIL_SUMMONED = 11,
    FAIL_DOMINATED = 12,
    FAIL_MELEE = 13,
    FAIL_RANGED = 14,
    FAIL_DEAD = 15,
    FAIL_MAGIC_IMMUNE_ALLY = 16,
    FAIL_MAGIC_IMMUNE_ENEMY = 17,
    FAIL_INVULNERABLE = 18,
    FAIL_IN_FOW = 19,
    FAIL_INVISIBLE = 20,
    FAIL_NOT_PLAYER_CONTROLLED = 21,
    FAIL_ATTACK_IMMUNE = 22,
    FAIL_CUSTOM = 23,
    FAIL_INVALID_LOCATION = 24,
    FAIL_DISABLE_HELP = 25,
    FAIL_OUT_OF_WORLD = 26,
    FAIL_NIGHTMARED = 27,
    FAIL_OBSTRUCTED = 28,
}
