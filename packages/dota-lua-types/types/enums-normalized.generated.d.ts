declare const DOTA_ITEM_INVENTORY_SIZE: 9;

declare const DOTA_ITEM_MAX: 19;

declare const DOTA_ITEM_STASH_MAX: 15;

declare const DOTA_ITEM_STASH_MIN: 9;

declare const DOTA_ITEM_STASH_SIZE: 6;

declare const DOTA_MAX_ABILITIES: 35;

declare const FIND_UNITS_EVERYWHERE: -1;

declare const SPAWN_GROUP_HANDLE_INVALID: 0;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ABILITY_TYPES = AbilityTypes;

declare const enum AbilityTypes {
    BASIC = 0,
    ULTIMATE = 1,
    ATTRIBUTES = 2,
    HIDDEN = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult_t = AbilityLearnResult;

declare const enum AbilityLearnResult {
    CAN_BE_UPGRADED = 0,
    CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    CANNOT_BE_UPGRADED_AT_MAX = 2,
    CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    NOT_LEARNABLE = 4,
}

declare const enum ActivateType {
    INITIAL_CREATION = 0,
    DATAUPDATE_CREATION = 1,
    ONRESTORE = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type attackfail = AttackRecord;

declare const enum AttackRecord {
    FAIL_NO = 0,
    FAIL_TERRAIN_MISS = 1,
    FAIL_SOURCE_MISS = 2,
    FAIL_TARGET_EVADED = 3,
    FAIL_TARGET_INVULNERABLE = 4,
    FAIL_TARGET_OUT_OF_RANGE = 5,
    CANNOT_FAIL = 6,
    FAIL_BLOCKED_BY_OBSTRUCTION = 7,
}

declare const enum AttributeDerivedStats {
    STRENGTH_DAMAGE = 0,
    STRENGTH_HP = 1,
    STRENGTH_HP_REGEN = 2,
    AGILITY_DAMAGE = 3,
    AGILITY_ARMOR = 4,
    AGILITY_ATTACK_SPEED = 5,
    INTELLIGENCE_DAMAGE = 6,
    INTELLIGENCE_MANA = 7,
    INTELLIGENCE_MANA_REGEN = 8,
    INTELLIGENCE_MAGIC_RESIST = 9,
    ALL_DAMAGE = 10,
}

declare const enum Attributes {
    INVALID = -1,
    STRENGTH = 0,
    AGILITY = 1,
    INTELLECT = 2,
    ALL = 3,
    MAX = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type CLICK_BEHAVIORS = ClickBehaviors;

declare const enum ClickBehaviors {
    NONE = 0,
    MOVE = 1,
    ATTACK = 2,
    CAST = 3,
    DROP_ITEM = 4,
    DROP_SHOP_ITEM = 5,
    DRAG = 6,
    LEARN_ABILITY = 7,
    PATROL = 8,
    VECTOR_CAST = 9,
    UNUSED = 10,
    RADAR = 11,
    LAST = 12,
}

declare const enum ConVarFlags {
    NONE = 0,
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
     * Don't log the ConVar changes to console/log files/users.
     *
     * Reported as "log" by cvarlist.
     */
    UNLOGGED = 2048,
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
    PER_USER = 32768,
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
    VCONSOLE_SET_FOCUS = 134217728,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DAMAGE_TYPES = DamageTypes;

declare const enum DamageTypes {
    NONE = 0,
    PHYSICAL = 1,
    MAGICAL = 2,
    PURE = 4,
    ALL = 7,
    HP_REMOVAL = 8,
    ABILITY_DEFINED = 22,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DamageCategory_t = DamageCategory;

declare const enum DamageCategory {
    SPELL = 0,
    ATTACK = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_ABILITY_BEHAVIOR = AbilityBehavior;

declare const enum AbilityBehavior {
    LAST_RESORT_POINT = -2147483648,
    ALT_CASTABLE = 0,
    CAN_SELF_CAST = 0,
    DONT_PROC_OTHER_ABILITIES = 0,
    FREE_DRAW_TARGETING = 0,
    IGNORE_MUTED = 0,
    IGNORE_SILENCE = 0,
    INNATE_UI = 0,
    NONE = 0,
    OVERSHOOT = 0,
    SHOW_IN_GUIDES = 0,
    SKIP_FOR_KEYBINDS = 0,
    SUPPRESS_ASSOCIATED_CONSUMABLE = 0,
    UNLOCKED_BY_EFFECT_INDEX = 0,
    UNSWAPPABLE = 0,
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

declare const enum GameState {
    INIT = 0,
    WAIT_FOR_PLAYERS_TO_LOAD = 1,
    CUSTOM_GAME_SETUP = 2,
    PLAYER_DRAFT = 3,
    HERO_SELECTION = 4,
    STRATEGY_TIME = 5,
    TEAM_SHOWCASE = 6,
    WAIT_FOR_MAP_TO_LOAD = 7,
    PRE_GAME = 8,
    SCENARIO_SETUP = 9,
    GAME_IN_PROGRESS = 10,
    POST_GAME = 11,
    DISCONNECT = 12,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GC_TEAM = GcTeam;

declare const enum GcTeam {
    GOOD_GUYS = 0,
    BAD_GUYS = 1,
    BROADCASTER = 2,
    SPECTATOR = 3,
    PLAYER_POOL = 4,
    NOTEAM = 5,
    CUSTOM_1 = 6,
    CUSTOM_2 = 7,
    CUSTOM_3 = 8,
    CUSTOM_4 = 9,
    CUSTOM_5 = 10,
    CUSTOM_6 = 11,
    CUSTOM_7 = 12,
    CUSTOM_8 = 13,
    NEUTRALS = 14,
}

declare const DOTA_HEROPICK_STATE_COUNT: 62;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_HeroPickState = HeroPickState;

declare const enum HeroPickState {
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
    SCENARIO_PICK = 61,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_INVALID_ORDERS = InvalidOrders;

declare const enum InvalidOrders {
    ORDER_SUCCESS = -1,
    INVALID_ORDER_NOT_CONTROLLABLE_BY_PLAYER = 0,
    INVALID_ORDER_UNIT_IS_NOT_NPC = 1,
    INVALID_ORDER_BAD_ABILITY_ENTITY = 2,
    INVALID_ORDER_UNRECOGNIZED_ORDER = 3,
    INVALID_ORDER_ABILITY_REQUIRED = 4,
    INVALID_ORDER_NPC_TARGET_REQUIRED = 5,
    INVALID_ORDER_TARGET_TREE_INDEX_NOT_A_TREE = 6,
    INVALID_ORDER_TARGET_ENTITY_INDEX_OUT_OF_RANGE = 7,
    INVALID_ORDER_ABILITY_NOT_AN_ITEM = 8,
    INVALID_ORDER_PHYSICAL_ITEM_TARGET_REQUIRED = 9,
    INVALID_ORDER_RUNE_TARGET_REQUIRED = 10,
    INVALID_ORDER_ABILITY_NOT_OWNED_BY_UNIT = 11,
    INVALID_ORDER_ABILITY_CANT_BE_UPGRADED = 12,
    INVALID_ORDER_NO_POINTS_FOR_ABILITY_UPGRADE = 13,
    INVALID_ORDER_NOT_ENOUGH_MANA = 14,
    INVALID_ORDER_ABILITY_IN_COOLDOWN = 15,
    INVALID_ORDER_ABILITY_NOT_LEARNED = 16,
    INVALID_ORDER_CANT_CAST_PASSIVE_ABILITY = 17,
    INVALID_ORDER_PHANTOM_TARGET = 18,
    INVALID_ORDER_DEAD_TARGET = 19,
    INVALID_ORDER_UNIT_IS_DEAD = 20,
    INVALID_ORDER_TARGET_MAGIC_IMMUNE_ENEMY = 21,
    INVALID_ORDER_TARGET_INVULNERABLE = 22,
    INVALID_ORDER_TARGET_ATTACK_IMMUNE = 23,
    INVALID_ORDER_UNIT_SILENCED = 24,
    INVALID_ORDER_ABILITY_CANT_BE_TOGGLED = 25,
    INVALID_ORDER_TARGET_CANT_BE_SEEN = 26,
    INVALID_ORDER_TARGET_INVISIBLE = 27,
    INVALID_ORDER_HERO_CANT_BE_DENIED = 28,
    INVALID_ORDER_CANT_CAST_ON_TEAMMATE = 29,
    INVALID_ORDER_CANT_CAST_ON_ENEMY = 30,
    INVALID_ORDER_UNIT_CANT_MOVE = 31,
    INVALID_ORDER_CANT_CAST_ON_ATTACK_IMMUNE = 32,
    INVALID_ORDER_PURCHASE_INVALID_ITEM = 33,
    INVALID_ORDER_ITEM_NOT_IN_INVENTORY = 34,
    INVALID_ORDER_ITEM_NOT_IN_UNIT_INVENTORY = 35,
    INVALID_ORDER_TARGET_UNSELECTABLE = 36,
    INVALID_ORDER_ITEM_NOT_IN_ACTIVE_INVENTORY = 37,
    INVALID_ORDER_UNIT_CANT_PICK_UP_RUNES = 38,
    INVALID_ORDER_UNIT_CANT_MANIPULATE_ITEMS = 39,
    INVALID_ORDER_UNIT_IS_ILLUSION = 40,
    INVALID_ORDER_UNIT_CANT_ATTACK = 41,
    INVALID_ORDER_ITEM_CANT_BE_DROPPED = 42,
    INVALID_ORDER_TARGET_TREE_NOT_ACTIVE = 43,
    INVALID_ORDER_ABILITY_CANT_AUTO_CAST = 44,
    INVALID_ORDER_TARGET_POSITION_OFF_MAP = 45,
    INVALID_ORDER_UNIT_CANT_MOVE_TARGET_OUT_OF_RANGE = 46,
    INVALID_ORDER_CANT_CAST_ON_HERO = 47,
    INVALID_ORDER_CANT_CAST_ON_OTHER = 48,
    INVALID_ORDER_CANT_CAST_ON_BUILDING = 49,
    INVALID_ORDER_CANT_CAST_ON_ANCIENT = 50,
    INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_STASH = 51,
    INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_SLOT = 52,
    INVALID_ORDER_CANT_CAST_ON_MECHANICAL = 53,
    INVALID_ORDER_CANT_ACCEPT_ATTACK_TARGET = 54,
    INVALID_ORDER_CANT_CAST_NO_CHARGES = 55,
    INVALID_ORDER_CANT_CAST_ON_CREEP = 56,
    INVALID_ORDER_TARGET_CANT_TAKE_ITEMS = 57,
    INVALID_ORDER_CANT_GIVE_ITEM_TO_ENEMY = 58,
    INVALID_ORDER_CANT_CAST_ON_COURIER = 59,
    INVALID_ORDER_ABILITY_IS_HIDDEN = 60,
    INVALID_ORDER_ITEM_IN_COOLDOWN = 61,
    INVALID_ORDER_SECRET_SHOP_NOT_IN_RANGE = 62,
    INVALID_ORDER_NOT_ENOUGH_GOLD = 63,
    INVALID_ORDER_PURCHASE_AUTOCOMBINE_RECIPE = 64,
    INVALID_ORDER_CANT_DENY_HEALTH_TOO_HIGH = 65,
    INVALID_ORDER_SIDE_SHOP_NOT_IN_RANGE = 66,
    INVALID_ORDER_HOME_SHOP_NOT_IN_RANGE = 67,
    INVALID_ORDER_CANT_PICK_UP_ITEM = 68,
    INVALID_ORDER_CANT_SELL_NO_SHOP_IN_RANGE = 69,
    INVALID_ORDER_CANT_SELL_ITEM = 70,
    INVALID_ORDER_CANT_SELL_ITEM_WHILE_DEAD = 71,
    INVALID_ORDER_TARGET_CANT_BE_DENIED = 72,
    INVALID_ORDER_ABILITY_DISABLED_BY_ROOT = 73,
    INVALID_ORDER_UNIT_COMMAND_RESTRICTED = 74,
    INVALID_ORDER_UNIT_MUTED = 75,
    INVALID_ORDER_CANT_CAST_ON_SUMMONED = 76,
    INVALID_ORDER_TARGET_MAGIC_IMMUNE_ALLY = 77,
    INVALID_ORDER_CANT_PURCHASE_DISALLOWED_ITEM = 78,
    INVALID_ORDER_CANT_CAST_ON_DOMINATED = 79,
    INVALID_ORDER_CAST_CUSTOM = 80,
    INVALID_ORDER_ITEM_NOT_DISASSEMBLABLE = 81,
    INVALID_ORDER_ITEM_OUT_OF_STOCK = 82,
    INVALID_ORDER_ABILITY_CANT_BE_UPGRADED_AT_MAX = 83,
    INVALID_ORDER_ABILITY_INACTIVE = 84,
    INVALID_ORDER_ITEM_NOT_IN_MAIN_INVENTORY = 85,
    INVALID_ORDER_CANT_GLYPH = 86,
    INVALID_ORDER_CANT_DRAG_CHANNELING_ITEM = 87,
    INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_A_HERO = 88,
    INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_DEAD = 89,
    INVALID_ORDER_CANT_BUYBACK_NOT_ENOUGH_GOLD = 90,
    INVALID_ORDER_CANT_BUYBACK_IN_COOLDOWN = 91,
    INVALID_ORDER_CANT_DISASSEMBLE_STASH_OUT_OF_RANGE = 92,
    INVALID_ORDER_CANT_EJECT_ITEM_NOT_IN_STASH = 93,
    INVALID_ORDER_GAME_IS_PAUSED = 94,
    INVALID_ORDER_CANT_CAST_ON_CONSIDERED_HERO = 95,
    INVALID_ORDER_CANT_SHOP_AUTO_BUY_ENABLED = 96,
    INVALID_ORDER_ONLY_DELIBERATE_CHANNELING_CANCEL = 97,
    INVALID_ORDER_CANT_BUYBACK_REAPERS_SCYTHE = 98,
    INVALID_ORDER_CANT_BUYBACK_DISABLED_BY_GAME_MODE = 99,
    INVALID_ORDER_CANT_ABILITY_PING_BAD_TEAM = 100,
    INVALID_ORDER_ABILITY_NOT_POSITIONED = 101,
    INVALID_ORDER_ABILITY_NOT_TARGETTED = 102,
    INVALID_ORDER_ABILITY_REQUIRES_TARGET = 103,
    INVALID_ORDER_CANT_RADAR = 104,
    INVALID_ORDER_NO_COURIER = 105,
    INVALID_ORDER_CUSTOM_SHOP_NOT_IN_RANGE = 106,
    INVALID_ORDER_CANT_CAST_RIVER_PAINT = 107,
    INVALID_ORDER_UNIT_OBSTRUCTED = 108,
    INVALID_ORDER_CANT_CAST_DRAG_REQUIRED = 109,
    INVALID_ORDER_ABILITY_DISABLED_BY_TETHER = 110,
    INVALID_ORDER_ABILITY_NOT_UNLOCKED = 111,
    INVALID_ORDER_CANT_FOUNTAIN_DROP_UNIT_NOT_DEAD = 112,
    INVALID_ORDER_ITEM_NOT_IN_NEUTRAL_ITEM_STASH = 113,
    INVALID_ORDER_ITEM_ALREADY_PURCHASED = 114,
    INVALID_ORDER_BEYOND_PHYSICAL_ITEM_LIMIT = 115,
    INVALID_ORDER_ABILITY_PING_DEAD_ALLY = 116,
    INVALID_ORDER_CANT_LOCKCOMBINE_NEUTRAL_ITEMS = 117,
    INVALID_ORDER_ABILITY_CANT_ALT_CAST = 118,
    INVALID_ORDER_ITEM_CANNOT_BE_CONSUMED = 119,
    INVALID_ORDER_CANT_BUYBACK_CEASELESS_DIRGE = 120,
    INVALID_ORDER_COUNT = 121,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_MOTION_CONTROLLER_PRIORITY = MotionControllerPriority;

declare const enum MotionControllerPriority {
    LOWEST = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    HIGHEST = 4,
    ULTRA = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_OVERHEAD_ALERT = OverheadAlert;

declare const enum OverheadAlert {
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
    DEADLY_BLOW = 24,
    FORCE_MISS = 25,
}

declare const DOTA_RUNE_COUNT: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_RUNES = RuneType;

declare const enum RuneType {
    INVALID = -1,
    DOUBLEDAMAGE = 0,
    HASTE = 1,
    ILLUSION = 2,
    INVISIBILITY = 3,
    REGENERATION = 4,
    BOUNTY = 5,
    ARCANE = 6,
    WATER = 7,
    XP = 8,
    SHIELD = 9,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_SHOP_TYPE = ShopType;

declare const enum ShopType {
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

declare const enum UnitTargetFlags {
    NONE = 0,
    RANGED_ONLY = 2,
    MELEE_ONLY = 4,
    DEAD = 8,
    MAGIC_IMMUNE_ENEMIES = 16,
    NOT_MAGIC_IMMUNE_ALLIES = 32,
    INVULNERABLE = 64,
    FOW_VISIBLE = 128,
    NO_INVIS = 256,
    CAN_BE_SEEN = 384,
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

declare const enum UnitTargetTeam {
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

declare const enum UnitTargetType {
    NONE = 0,
    HERO = 1,
    CREEP = 2,
    BUILDING = 4,
    COURIER = 16,
    BASIC = 18,
    HEROES_AND_CREEPS = 19,
    OTHER = 32,
    ALL = 55,
    TREE = 64,
    CUSTOM = 128,
    SELF = 256,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAAbilitySpeakTrigger_t = AbilitySpeakTrigger;

declare const enum AbilitySpeakTrigger {
    START_ACTION_PHASE = 0,
    CAST = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAConnectionState_t = ConnectionState;

declare const enum ConnectionState {
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
type DOTACustomCameraEventFlags_t = CustomCameraEventFlags;

declare const enum CustomCameraEventFlags {
    ZOOM = 1,
    POSITION = 2,
    POSITION_PLAYER_HERO = 4,
    PITCH = 8,
    YAW = 16,
    LOCK = 32,
    UNLOCK = 64,
    RESET_DEFAULT = 128,
    SPECIFIC_PLAYER = 256,
    FADE_OUT = 512,
    FADE_IN = 1024,
    LETTERBOX_ON = 2048,
    LETTERBOX_OFF = 4096,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTADamageFlag_t = DamageFlag;

declare const enum DamageFlag {
    NONE = 0,
    IGNORES_MAGIC_ARMOR = 1,
    IGNORES_PHYSICAL_ARMOR = 2,
    BYPASSES_INVULNERABILITY = 4,
    BYPASSES_PHYSICAL_BLOCK = 8,
    REFLECTION = 16,
    HPLOSS = 32,
    NO_DIRECTOR_EVENT = 64,
    NON_LETHAL = 128,
    NO_DAMAGE_MULTIPLIERS = 512,
    NO_SPELL_AMPLIFICATION = 1024,
    DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
    NO_SPELL_LIFESTEAL = 4096,
    PROPERTY_FIRE = 8192,
    IGNORES_BASE_PHYSICAL_ARMOR = 16384,
    SECONDARY_PROJECTILE_ATTACK = 32768,
    FORCE_SPELL_AMPLIFICATION = 65536,
    MAGIC_AUTO_ATTACK = 131072,
    ATTACK_MODIFIER = 262144,
    BYPASSES_ALL_BLOCK = 524288,
}

declare const DOTA_DEFAULT_UI_ELEMENT_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaDefaultUIElement_t = DefaultUiElement;

declare const enum DefaultUiElement {
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
    HERO_SELECTION_HEADER = 17,
    TOP_MENU_BUTTONS = 18,
    TOP_BAR_BACKGROUND = 19,
    TOP_BAR_RADIANT_TEAM = 20,
    TOP_BAR_DIRE_TEAM = 21,
    TOP_BAR_SCORE = 22,
    ENDGAME = 23,
    ENDGAME_CHAT = 24,
    QUICK_STATS = 25,
    PREGAME_STRATEGYUI = 26,
    KILLCAM = 27,
    FIGHT_RECAP = 28,
    TOP_BAR = 29,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    AGHANIMS_STATUS = 31,
}

declare const DOTA_HUD_VISIBILITY_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAHUDVisibility_t = HudVisibility;

declare const enum HudVisibility {
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
    VISIBILITY_HERO_SELECTION_HEADER = 17,
    VISIBILITY_TOP_MENU_BUTTONS = 18,
    VISIBILITY_TOP_BAR_BACKGROUND = 19,
    VISIBILITY_TOP_BAR_RADIANT_TEAM = 20,
    VISIBILITY_TOP_BAR_DIRE_TEAM = 21,
    VISIBILITY_TOP_BAR_SCORE = 22,
    VISIBILITY_ENDGAME = 23,
    VISIBILITY_ENDGAME_CHAT = 24,
    VISIBILITY_QUICK_STATS = 25,
    VISIBILITY_PREGAME_STRATEGYUI = 26,
    VISIBILITY_KILLCAM = 27,
    VISIBILITY_FIGHT_RECAP = 28,
    VISIBILITY_TOP_BAR = 29,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    VISIBILITY_AGHANIMS_STATUS = 31,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAInventoryFlags_t = InventoryFlags;

declare const enum InventoryFlags {
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

declare const enum MinimapEventType {
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

declare const enum ModifierAttribute {
    NONE = 0,
    PERMANENT = 1,
    MULTIPLE = 2,
    IGNORE_INVULNERABLE = 4,
    AURA_PRIORITY = 8,
    IGNORE_DODGE = 16,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMusicStatus_t = MusicStatus;

declare const enum MusicStatus {
    NONE = 0,
    EXPLORATION = 1,
    BATTLE = 2,
    PRE_GAME_EXPLORATION = 3,
    DEAD = 4,
    LAST = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAPostGameColumn_t = PostGameColumn;

declare const enum PostGameColumn {
    LEVEL = 0,
    ITEMS = 1,
    KILLS = 2,
    DEATHS = 3,
    ASSISTS = 4,
    NET_WORTH = 5,
    LAST_HITS = 6,
    DENIES = 7,
    DAMAGE = 8,
    HEALING = 9,
    MAX = 10,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAPostGameLayout_t = PostGameLayout;

declare const enum PostGameLayout {
    DOUBLE_COLUMN = 0,
    SINGLE_COLUMN = 1,
    MAX = 2,
}

declare const DOTA_PROJECTILE_ATTACHMENT_LAST: 6;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAProjectileAttachment_t = ProjectileAttachment;

declare const enum ProjectileAttachment {
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

declare const enum InventorySlot {
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

declare const DOTA_PLAYER_LOADOUT_START: 68;

declare const DOTA_PLAYER_LOADOUT_END: 98;

declare const DOTA_LOADOUT_TYPE_COUNT: 100;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASlotType_t = LoadoutType;

declare const enum LoadoutType {
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
    TYPE_HERO_BASE = 16,
    TYPE_BODY_HEAD = 17,
    TYPE_MOUNT = 18,
    TYPE_SUMMON = 19,
    TYPE_SHAPESHIFT = 20,
    TYPE_TAUNT = 21,
    TYPE_AMBIENT_EFFECTS = 22,
    TYPE_ABILITY_ATTACK = 23,
    TYPE_ABILITY_1 = 24,
    TYPE_ABILITY_2 = 25,
    TYPE_ABILITY_3 = 26,
    TYPE_ABILITY_4 = 27,
    TYPE_ABILITY_ULTIMATE = 28,
    TYPE_ABILITY_EFFECTS_1 = 29,
    TYPE_ABILITY_EFFECTS_2 = 30,
    TYPE_ABILITY_EFFECTS_3 = 31,
    TYPE_ABILITY_EFFECTS_4 = 32,
    TYPE_ABILITY_EFFECTS_5 = 33,
    TYPE_ABILITY_EFFECTS_6 = 34,
    TYPE_ABILITY_EFFECTS_7 = 35,
    TYPE_ABILITY_EFFECTS_8 = 36,
    TYPE_ABILITY_EFFECTS_9 = 37,
    TYPE_VOICE = 38,
    PERSONA_1_START = 39,
    TYPE_WEAPON_PERSONA_1 = 39,
    TYPE_OFFHAND_WEAPON_PERSONA_1 = 40,
    TYPE_WEAPON_2_PERSONA_1 = 41,
    TYPE_OFFHAND_WEAPON_2_PERSONA_1 = 42,
    TYPE_HEAD_PERSONA_1 = 43,
    TYPE_SHOULDER_PERSONA_1 = 44,
    TYPE_ARMS_PERSONA_1 = 45,
    TYPE_ARMOR_PERSONA_1 = 46,
    TYPE_BELT_PERSONA_1 = 47,
    TYPE_NECK_PERSONA_1 = 48,
    TYPE_BACK_PERSONA_1 = 49,
    TYPE_LEGS_PERSONA_1 = 50,
    TYPE_GLOVES_PERSONA_1 = 51,
    TYPE_TAIL_PERSONA_1 = 52,
    TYPE_MISC_PERSONA_1 = 53,
    TYPE_BODY_HEAD_PERSONA_1 = 54,
    TYPE_MOUNT_PERSONA_1 = 55,
    TYPE_SUMMON_PERSONA_1 = 56,
    TYPE_SHAPESHIFT_PERSONA_1 = 57,
    TYPE_TAUNT_PERSONA_1 = 58,
    TYPE_AMBIENT_EFFECTS_PERSONA_1 = 59,
    TYPE_ABILITY_ATTACK_PERSONA_1 = 60,
    TYPE_ABILITY_1_PERSONA_1 = 61,
    TYPE_ABILITY_2_PERSONA_1 = 62,
    TYPE_ABILITY_3_PERSONA_1 = 63,
    TYPE_ABILITY_4_PERSONA_1 = 64,
    TYPE_ABILITY_ULTIMATE_PERSONA_1 = 65,
    PERSONA_1_END = 66,
    TYPE_VOICE_PERSONA_1 = 66,
    TYPE_PERSONA_SELECTOR = 67,
    TYPE_COURIER = 68,
    TYPE_ANNOUNCER = 69,
    TYPE_MEGA_KILLS = 70,
    TYPE_MUSIC = 71,
    TYPE_WARD = 72,
    TYPE_HUD_SKIN = 73,
    TYPE_LOADING_SCREEN = 74,
    TYPE_WEATHER = 75,
    TYPE_HEROIC_STATUE = 76,
    TYPE_MULTIKILL_BANNER = 77,
    TYPE_CURSOR_PACK = 78,
    TYPE_TELEPORT_EFFECT = 79,
    TYPE_BLINK_EFFECT = 80,
    TYPE_EMBLEM = 81,
    TYPE_TERRAIN = 82,
    TYPE_RADIANT_CREEPS = 83,
    TYPE_DIRE_CREEPS = 84,
    TYPE_RADIANT_TOWER = 85,
    TYPE_DIRE_TOWER = 86,
    TYPE_VERSUS_SCREEN = 87,
    TYPE_STREAK_EFFECT = 88,
    TYPE_KILL_EFFECT = 89,
    TYPE_DEATH_EFFECT = 90,
    TYPE_HEAD_EFFECT = 91,
    TYPE_MAP_EFFECT = 92,
    TYPE_COURIER_EFFECT = 93,
    TYPE_RADIANT_SIEGE_CREEPS = 94,
    TYPE_DIRE_SIEGE_CREEPS = 95,
    TYPE_ROSHAN = 96,
    TYPE_TORMENTOR = 97,
    TYPE_ANCIENT = 98,
    TYPE_NONE = 99,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASpeechType_t = SpeechType;

declare const enum SpeechType {
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

declare const DOTA_TEAM_COUNT: 15;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTATeam_t = DotaTeam;

declare const enum DotaTeam {
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
    DRAFT_POOL = 14,
}

declare const DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitAttackCapability_t = UnitAttackCapability;

declare const enum UnitAttackCapability {
    NO_ATTACK = 0,
    MELEE_ATTACK = 1,
    RANGED_ATTACK = 2,
    RANGED_ATTACK_DIRECTIONAL = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitMoveCapability_t = UnitMoveCapability;

declare const enum UnitMoveCapability {
    NONE = 0,
    GROUND = 1,
    FLY = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type dotaunitorder_t = UnitOrder;

declare const enum UnitOrder {
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
    MOVE_RELATIVE = 39,
    CAST_TOGGLE_ALT = 40,
    CONSUME_ITEM = 41,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyGold_Reason = ModifyGoldReason;

declare const enum ModifyGoldReason {
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
    COURIER_KILLED_BY_THIS_PLAYER = 21,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyXP_Reason = ModifyXpReason;

declare const enum ModifyXpReason {
    UNSPECIFIED = 0,
    HERO_KILL = 1,
    CREEP_KILL = 2,
    ROSHAN_KILL = 3,
    TOME_OF_KNOWLEDGE = 4,
    OUTPOST = 5,
    CATCH_UP = 6,
    HERO_ABILITY = 7,
    MAX = 8,
}

declare const enum EntityEffects {
    EF_NODRAW = 32,
}

declare const enum EntityThinkPhase {
    RESIM = 0,
    RESENSING = 1,
    OSTSENSING = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EShareAbility = ItemShareability;

declare const enum ItemShareability {
    FULLY_SHAREABLE = 0,
    PARTIALLY_SHAREABLE = 1,
    NOT_SHAREABLE = 2,
}

declare const enum FindOrder {
    ANY = 0,
    CLOSEST = 1,
    FARTHEST = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type GameActivity_t = GameActivity;

declare const enum GameActivity {
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
    DOTA_TELEPORT_START = 1753,
    DOTA_GENERIC_CHANNEL_1_START = 1754,
    DOTA_CUSTOM_TOWER_IDLE_RARE = 1755,
    DOTA_CUSTOM_TOWER_TAUNT = 1756,
    DOTA_CUSTOM_TOWER_HIGH_FIVE = 1757,
    DOTA_ATTACK_SPECIAL = 1758,
    DOTA_TRANSITION_IDLE = 1759,
    DOTA_PIERCE_THE_VEIL = 1760,
    DOTA_RUN_RARE = 1761,
    DOTA_VIPER_DIVE = 1762,
    DOTA_VIPER_DIVE_END = 1763,
    DOTA_MK_STRIKE_END = 1764,
    DOTA_RUN_STATUE = 1765,
    DOTA_CAST_1_STATUE = 1766,
    DOTA_CAST_2_STATUE = 1767,
    DOTA_STUN_STATUE = 1768,
    DOTA_FLAIL_STATUE = 1769,
    DOTA_SPAWN_STATUE = 1770,
    DOTA_TELEPORT_END_STATUE = 1771,
    DOTA_ATTACK_STATUE = 1772,
    DOTA_FORCESTAFF_STATUE = 1773,
    DOTA_TELEPORT_STATUE = 1774,
    DOTA_VICTORY_STATUE = 1775,
    DOTA_DISABLED_END = 1776,
    DOTA_CYCLONE = 1778,
    DOTA_IMPALE = 1779,
    DOTA_TORRENT = 1780,
    DOTA_VOODOO_REST = 1781,
    DOTA_RUN_ALT = 1782,
    DOTA_RADIANT_CREEP_HAMMER = 1787,
    DOTA_RELAX_IN = 1788,
    DOTA_RELAX_OUT = 1789,
    DOTA_CAST_FENCE = 1790,
    DOTA_SPWN = 1791,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type LuaModifierType = LuaModifierMotionType;

declare const enum LuaModifierMotionType {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
    INVALID = 4,
}

declare const MODIFIER_FUNCTION_LAST: 347;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierfunction = ModifierFunction;

declare const enum ModifierFunction {
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
     * Method Name: `GetModifierProcAttack_ConvertPhysicalToMagical`
     */
    PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Magical`
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Pure`
     */
    PROCATTACK_BONUS_DAMAGE_PURE = 8,
    /**
     * Method Name: `GetModifierProcAttack_BonusDamage_Magical_Target`
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
    /**
     * Method Name: `GetModifierProcAttack_Feedback`
     */
    PROCATTACK_FEEDBACK = 10,
    /**
     * Method Name: `GetModifierOverrideAttackDamage`
     */
    OVERRIDE_ATTACK_DAMAGE = 11,
    /**
     * Method Name: `GetModifierPreAttack`
     */
    PRE_ATTACK = 12,
    /**
     * Method Name: `GetModifierInvisibilityLevel`
     */
    INVISIBILITY_LEVEL = 13,
    /**
     * Method Name: `GetModifierInvisibilityAttackBehaviorException`
     */
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
    /**
     * Method Name: `GetModifierPersistentInvisibility`
     */
    PERSISTENT_INVISIBILITY = 15,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant`
     */
    MOVESPEED_BONUS_CONSTANT = 16,
    /**
     * Method Name: `GetModifierMoveSpeedOverride`
     */
    MOVESPEED_BASE_OVERRIDE = 17,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage`
     */
    MOVESPEED_BONUS_PERCENTAGE = 18,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique`
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 19,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots`
     */
    MOVESPEED_BONUS_UNIQUE = 20,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots_2`
     */
    MOVESPEED_BONUS_UNIQUE_2 = 21,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 22,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique_2`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 23,
    /**
     * Method Name: `GetModifierMoveSpeed_Absolute`
     */
    MOVESPEED_ABSOLUTE = 24,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMin`
     */
    MOVESPEED_ABSOLUTE_MIN = 25,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMax`
     */
    MOVESPEED_ABSOLUTE_MAX = 26,
    /**
     * Method Name: `GetModifierIgnoreMovespeedLimit`
     */
    IGNORE_MOVESPEED_LIMIT = 27,
    /**
     * Method Name: `GetModifierMoveSpeed_Limit`
     */
    MOVESPEED_LIMIT = 28,
    /**
     * Method Name: `GetModifierAttackSpeedBaseOverride`
     */
    ATTACKSPEED_BASE_OVERRIDE = 29,
    /**
     * Method Name: `GetModifierFixedAttackRate`
     */
    FIXED_ATTACK_RATE = 30,
    /**
     * Method Name: `GetModifierAttackSpeedBonus_Constant`
     */
    ATTACKSPEED_BONUS_CONSTANT = 31,
    /**
     * Method Name: `GetModifierAttackSpeed_Limit`
     */
    IGNORE_ATTACKSPEED_LIMIT = 32,
    /**
     * Method Name: `GetModifierCooldownReduction_Constant`
     */
    COOLDOWN_REDUCTION_CONSTANT = 33,
    /**
     * Method Name: `GetModifierManacostReduction_Constant`
     */
    MANACOST_REDUCTION_CONSTANT = 34,
    /**
     * Method Name: `GetModifierHealthcostReduction_Constant`
     */
    HEALTHCOST_REDUCTION_CONSTANT = 35,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant`
     */
    BASE_ATTACK_TIME_CONSTANT = 36,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant_Adjust`
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 37,
    /**
     * Method Name: `GetModifierBaseAttackTimePercentage`
     */
    BASE_ATTACK_TIME_PERCENTAGE = 38,
    /**
     * Method Name: `GetModifierAttackPointConstant`
     */
    ATTACK_POINT_CONSTANT = 39,
    /**
     * Method Name: `GetModifierBonusDamageOutgoing_Percentage`
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 40,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage`
     */
    DAMAGEOUTGOING_PERCENTAGE = 41,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 42,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion_Amplify`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 43,
    /**
     * Method Name: `GetModifierTotalDamageOutgoing_Percentage`
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 44,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageCreep`
     */
    SPELL_AMPLIFY_PERCENTAGE_CREEP = 45,
    /**
     * Method Name: `GetModifierSpellAmplify_Percentage`
     */
    SPELL_AMPLIFY_PERCENTAGE = 46,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageUnique`
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 47,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageTarget`
     */
    SPELL_AMPLIFY_PERCENTAGE_TARGET = 48,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageSource`
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 49,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageTarget`
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 50,
    /**
     * Method Name: `GetModifierHPRegen_CanBeNegative`
     */
    HP_REGEN_CAN_BE_NEGATIVE = 51,
    /**
     * Method Name: `GetModifierHPRegenAmplify_Percentage`
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 52,
    /**
     * Method Name: `GetModifierLifestealRegenAmplify_Percentage`
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
    /**
     * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage`
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 54,
    /**
     * Method Name: `GetModifierMPRegenAmplify_Percentage`
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 55,
    /**
     * Method Name: `GetModifierManaDrainAmplify_Percentage`
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 56,
    /**
     * Total amplify value is clamped to 0.
     *
     *
     *
     * Method Name: `GetModifierMPRestoreAmplify_Percentage`.
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 57,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_Percentage`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 58,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_PercentageUnique`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 59,
    /**
     * Method Name: `GetModifierIncomingDamage_Percentage`
     */
    INCOMING_DAMAGE_PERCENTAGE = 60,
    /**
     * Method Name: `GetModifierIncomingPhysicalDamage_Percentage`
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 61,
    /**
     * This property controls 'physical' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingPhysicalDamageConstant`.
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 62,
    /**
     * This property controls 'spell' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingSpellDamageConstant`.
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 63,
    /**
     * Method Name: `GetModifierEvasion_Constant`
     */
    EVASION_CONSTANT = 64,
    /**
     * Method Name: `GetModifierNegativeEvasion_Constant`
     */
    NEGATIVE_EVASION_CONSTANT = 65,
    /**
     * Method Name: `GetModifierStatusResistance`
     */
    STATUS_RESISTANCE = 66,
    /**
     * Method Name: `GetModifierStatusResistanceStacking`
     */
    STATUS_RESISTANCE_STACKING = 67,
    /**
     * Method Name: `GetModifierStatusResistanceCaster`
     */
    STATUS_RESISTANCE_CASTER = 68,
    /**
     * Method Name: `GetModifierAvoidDamage`
     */
    AVOID_DAMAGE = 69,
    /**
     * Method Name: `GetModifierAvoidSpell`
     */
    AVOID_SPELL = 70,
    /**
     * Method Name: `GetModifierMiss_Percentage`
     */
    MISS_PERCENTAGE = 71,
    /**
     * Values above 100% are ignored.
     *
     *
     *
     * Method Name: `GetModifierPhysicalArmorBase_Percentage`.
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 72,
    /**
     * Method Name: `GetModifierPhysicalArmorTotal_Percentage`
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 73,
    /**
     * Method Name: `GetModifierPhysicalArmorBonus`
     */
    PHYSICAL_ARMOR_BONUS = 74,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUnique`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 75,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUniqueActive`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 76,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusPost`
     */
    PHYSICAL_ARMOR_BONUS_POST = 77,
    /**
     * Method Name: `GetModifierMinPhysicalArmor`
     */
    MIN_PHYSICAL_ARMOR = 78,
    /**
     * Method Name: `GetModifierIgnorePhysicalArmor`
     */
    IGNORE_PHYSICAL_ARMOR = 79,
    /**
     * Method Name: `GetModifierMagicalResistanceBaseReduction`
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 80,
    /**
     * Method Name: `GetModifierMagicalResistanceDirectModification`
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 81,
    /**
     * Method Name: `GetModifierMagicalResistanceBonus`
     */
    MAGICAL_RESISTANCE_BONUS = 82,
    /**
     * Method Name: `GetModifierMagicalResistanceBonusIllusions`
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 83,
    /**
     * Method Name: `GetModifierMagicalResistanceBonusUnique`
     */
    MAGICAL_RESISTANCE_BONUS_UNIQUE = 84,
    /**
     * Method Name: `GetModifierMagicalResistanceDecrepifyUnique`
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 85,
    /**
     * Method Name: `GetModifierBaseRegen`
     */
    BASE_MANA_REGEN = 86,
    /**
     * Method Name: `GetModifierConstantManaRegen`
     */
    MANA_REGEN_CONSTANT = 87,
    /**
     * Method Name: `GetModifierConstantManaRegenUnique`
     */
    MANA_REGEN_CONSTANT_UNIQUE = 88,
    /**
     * Method Name: `GetModifierTotalPercentageManaRegen`
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 89,
    /**
     * Method Name: `GetModifierConstantHealthRegen`
     */
    HEALTH_REGEN_CONSTANT = 90,
    /**
     * Method Name: `GetModifierHealthRegenPercentage`
     */
    HEALTH_REGEN_PERCENTAGE = 91,
    /**
     * Method Name: `GetModifierHealthRegenPercentageUnique`
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 92,
    /**
     * Method Name: `GetModifierHealthBonus`
     */
    HEALTH_BONUS = 93,
    /**
     * Method Name: `GetModifierManaBonus`
     */
    MANA_BONUS = 94,
    /**
     * Method Name: `GetModifierExtraStrengthBonus`
     */
    EXTRA_STRENGTH_BONUS = 95,
    /**
     * Method Name: `GetModifierExtraHealthBonus`
     */
    EXTRA_HEALTH_BONUS = 96,
    /**
     * Method Name: `GetModifierExtraManaBonus`
     */
    EXTRA_MANA_BONUS = 97,
    /**
     * Method Name: `GetModifierExtraManaBonusPercentage`
     */
    EXTRA_MANA_BONUS_PERCENTAGE = 98,
    /**
     * Method Name: `GetModifierExtraHealthPercentage`
     */
    EXTRA_HEALTH_PERCENTAGE = 99,
    /**
     * Method Name: `GetModifierExtraManaPercentage`
     */
    EXTRA_MANA_PERCENTAGE = 100,
    /**
     * Method Name: `GetModifierBonusStats_Strength`
     */
    STATS_STRENGTH_BONUS = 101,
    /**
     * Method Name: `GetModifierBonusStats_Agility`
     */
    STATS_AGILITY_BONUS = 102,
    /**
     * Method Name: `GetModifierBonusStats_Intellect`
     */
    STATS_INTELLECT_BONUS = 103,
    /**
     * Method Name: `GetModifierBonusStats_Strength_Percentage`
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 104,
    /**
     * Method Name: `GetModifierBonusStats_Agility_Percentage`
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 105,
    /**
     * Method Name: `GetModifierBonusStats_Intellect_Percentage`
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 106,
    /**
     * Method Name: `GetModifierCastRangeBonus`
     */
    CAST_RANGE_BONUS = 107,
    /**
     * Method Name: `GetModifierCastRangeBonusPercentage`
     */
    CAST_RANGE_BONUS_PERCENTAGE = 108,
    /**
     * Method Name: `GetModifierCastRangeBonusTarget`
     */
    CAST_RANGE_BONUS_TARGET = 109,
    /**
     * Method Name: `GetModifierCastRangeBonusStacking`
     */
    CAST_RANGE_BONUS_STACKING = 110,
    /**
     * Method Name: `GetModifierAttackRangeOverride`
     */
    ATTACK_RANGE_BASE_OVERRIDE = 111,
    /**
     * Method Name: `GetModifierAttackRangeBonus`
     */
    ATTACK_RANGE_BONUS = 112,
    /**
     * Method Name: `GetModifierAttackRangeBonusUnique`
     */
    ATTACK_RANGE_BONUS_UNIQUE = 113,
    /**
     * Method Name: `GetModifierAttackRangeBonusPercentage`
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 114,
    /**
     * Method Name: `GetModifierMaxAttackRange`
     */
    MAX_ATTACK_RANGE = 115,
    /**
     * Method Name: `GetModifierProjectileSpeedBonus`
     */
    PROJECTILE_SPEED_BONUS = 116,
    /**
     * Method Name: `GetModifierProjectileSpeedBonusPercentage`
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 117,
    /**
     * Method Name: `GetModifierProjectileName`
     */
    PROJECTILE_NAME = 118,
    /**
     * Method Name: `ReincarnateTime`
     */
    REINCARNATION = 119,
    /**
     * Method Name: `ReincarnateSuppressFX`
     */
    REINCARNATION_SUPPRESS_FX = 120,
    /**
     * Method Name: `GetModifierConstantRespawnTime`
     */
    RESPAWNTIME = 121,
    /**
     * Method Name: `GetModifierPercentageRespawnTime`
     */
    RESPAWNTIME_PERCENTAGE = 122,
    /**
     * Method Name: `GetModifierStackingRespawnTime`
     */
    RESPAWNTIME_STACKING = 123,
    /**
     * Method Name: `GetModifierPercentageCooldown`
     */
    COOLDOWN_PERCENTAGE = 124,
    /**
     * Method Name: `GetModifierPercentageCooldownOngoing`
     */
    COOLDOWN_PERCENTAGE_ONGOING = 125,
    /**
     * Method Name: `GetModifierPercentageCasttime`
     */
    CASTTIME_PERCENTAGE = 126,
    /**
     * Method Name: `GetModifierPercentageAttackAnimTime`
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 127,
    /**
     * Method Name: `GetModifierPercentageManacost`
     */
    MANACOST_PERCENTAGE = 128,
    /**
     * Method Name: `GetModifierPercentageManacostStacking`
     */
    MANACOST_PERCENTAGE_STACKING = 129,
    /**
     * Method Name: `GetModifierPercentageHealthcost`
     */
    HEALTHCOST_PERCENTAGE = 130,
    /**
     * Method Name: `GetModifierPercentageHealthcostStacking`
     */
    HEALTHCOST_PERCENTAGE_STACKING = 131,
    /**
     * Method Name: `GetModifierConstantDeathGoldCost`
     */
    DEATHGOLDCOST = 132,
    /**
     * Method Name: `GetModifierPercentageDeathGoldCost`
     */
    PERCENTAGE_DEATHGOLDCOST = 133,
    /**
     * Method Name: `GetModifierPercentageExpRateBoost`
     */
    EXP_RATE_BOOST = 134,
    /**
     * Method Name: `GetModifierPercentageGoldRateBoost`
     */
    GOLD_RATE_BOOST = 135,
    /**
     * Method Name: `GetModifierPreAttack_CriticalStrike`
     */
    PREATTACK_CRITICALSTRIKE = 136,
    /**
     * Method Name: `GetModifierPreAttack_Target_CriticalStrike`
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 137,
    /**
     * Method Name: `GetModifierMagical_ConstantBlock`
     */
    MAGICAL_CONSTANT_BLOCK = 138,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlock`
     */
    PHYSICAL_CONSTANT_BLOCK = 139,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockSpecial`
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 140,
    /**
     * Method Name: `GetModifierInnateDamageBlockPctOverride`
     */
    INNATE_DAMAGE_BLOCK_PCT_OVERRIDE = 141,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockUnavoidablePreArmor`
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 142,
    /**
     * Method Name: `GetModifierTotal_ConstantBlock`
     */
    TOTAL_CONSTANT_BLOCK = 143,
    /**
     * Method Name: `GetOverrideAnimation`
     */
    OVERRIDE_ANIMATION = 144,
    /**
     * Method Name: `GetOverrideAnimationRate`
     */
    OVERRIDE_ANIMATION_RATE = 145,
    /**
     * Method Name: `GetAbsorbSpell`
     */
    ABSORB_SPELL = 146,
    /**
     * Method Name: `GetReflectSpell`
     */
    REFLECT_SPELL = 147,
    /**
     * Method Name: `GetDisableAutoAttack`
     */
    DISABLE_AUTOATTACK = 148,
    /**
     * Method Name: `GetBonusDayVision`
     */
    BONUS_DAY_VISION = 149,
    /**
     * Method Name: `GetBonusDayVisionPercentage`
     */
    BONUS_DAY_VISION_PERCENTAGE = 150,
    /**
     * Method Name: `GetBonusNightVision`
     */
    BONUS_NIGHT_VISION = 151,
    /**
     * Method Name: `GetBonusNightVisionUnique`
     */
    BONUS_NIGHT_VISION_UNIQUE = 152,
    /**
     * Method Name: `GetBonusVisionPercentage`
     */
    BONUS_VISION_PERCENTAGE = 153,
    /**
     * Method Name: `GetFixedDayVision`
     */
    FIXED_DAY_VISION = 154,
    /**
     * Method Name: `GetFixedNightVision`
     */
    FIXED_NIGHT_VISION = 155,
    /**
     * Method Name: `GetMinHealth`
     */
    MIN_HEALTH = 156,
    /**
     * Method Name: `GetAbsoluteNoDamagePhysical`
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 157,
    /**
     * Method Name: `GetAbsoluteNoDamageMagical`
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 158,
    /**
     * Method Name: `GetAbsoluteNoDamagePure`
     */
    ABSOLUTE_NO_DAMAGE_PURE = 159,
    /**
     * Method Name: `GetIsIllusion`
     */
    IS_ILLUSION = 160,
    /**
     * Method Name: `GetModifierIllusionLabel`
     */
    ILLUSION_LABEL = 161,
    /**
     * Method Name: `GetModifierStrongIllusion`
     */
    STRONG_ILLUSION = 162,
    /**
     * Method Name: `GetModifierSuperIllusion`
     */
    SUPER_ILLUSION = 163,
    /**
     * Method Name: `GetModifierSuperIllusionWithUltimate`
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 164,
    /**
     * Method Name: `GetModifierXPDuringDeath`
     */
    XP_DURING_DEATH = 165,
    /**
     * Method Name: `GetModifierTurnRate_Percentage`
     */
    TURN_RATE_PERCENTAGE = 166,
    /**
     * Method Name: `GetModifierTurnRate_Override`
     */
    TURN_RATE_OVERRIDE = 167,
    /**
     * Method Name: `GetDisableHealing`
     */
    DISABLE_HEALING = 168,
    /**
     * Method Name: `GetDisableManaGain`
     */
    DISABLE_MANA_GAIN = 169,
    /**
     * Method Name: `GetAlwaysAllowAttack`
     */
    ALWAYS_ALLOW_ATTACK = 170,
    /**
     * Method Name: `GetAllowEtherealAttack`
     */
    ALWAYS_ETHEREAL_ATTACK = 171,
    /**
     * Method Name: `GetOverrideAttackMagical`
     */
    OVERRIDE_ATTACK_MAGICAL = 172,
    /**
     * Method Name: `GetModifierUnitStatsNeedsRefresh`
     */
    UNIT_STATS_NEEDS_REFRESH = 173,
    BOUNTY_CREEP_MULTIPLIER = 174,
    BOUNTY_OTHER_MULTIPLIER = 175,
    /**
     * Method Name: `GetModifierUnitDisllowUpgrading`
     */
    UNIT_DISALLOW_UPGRADING = 176,
    /**
     * Method Name: `GetModifierDodgeProjectile`
     */
    DODGE_PROJECTILE = 177,
    /**
     * Method Name: `GetTriggerCosmeticAndEndAttack`
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 178,
    /**
     * Method Name: `GetModifierMaxDebuffDuration`
     */
    MAX_DEBUFF_DURATION = 179,
    /**
     * Method Name: `GetPrimaryStatDamageMultiplier`
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 180,
    /**
     * Method Name: `GetModifierPreAttack_DeadlyBlow`
     */
    PREATTACK_DEADLY_BLOW = 181,
    /**
     * Method Name: `GetAlwaysAutoAttackWhileHoldPosition`
     */
    ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 182,
    /**
     * Method Name: `GetPhysicalArmorPiercingPercentageTarget`
     */
    PHYSICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 183,
    /**
     * Method Name: `GetMagicalArmorPiercingPercentageTarget`
     */
    MAGICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 184,
    /**
     * Method Name: `OnSpellTargetReady`
     */
    ON_SPELL_TARGET_READY = 185,
    /**
     * Method Name: `OnAttackRecord`
     */
    ON_ATTACK_RECORD = 186,
    /**
     * Method Name: `OnAttackStart`
     */
    ON_ATTACK_START = 187,
    /**
     * Method Name: `OnAttack`
     */
    ON_ATTACK = 188,
    /**
     * Method Name: `OnAttackLanded`
     */
    ON_ATTACK_LANDED = 189,
    /**
     * Method Name: `OnAttackFail`
     */
    ON_ATTACK_FAIL = 190,
    /**
     * Happens even if attack can't be issued.
     *
     *
     *
     * Method Name: `OnAttackAllied`.
     */
    ON_ATTACK_ALLIED = 191,
    /**
     * Method Name: `OnProjectileDodge`
     */
    ON_PROJECTILE_DODGE = 192,
    /**
     * Method Name: `OnOrder`
     */
    ON_ORDER = 193,
    /**
     * Method Name: `OnUnitMoved`
     */
    ON_UNIT_MOVED = 194,
    /**
     * Method Name: `OnAbilityStart`
     */
    ON_ABILITY_START = 195,
    /**
     * Method Name: `OnAbilityExecuted`
     */
    ON_ABILITY_EXECUTED = 196,
    /**
     * Method Name: `OnAbilityFullyCast`
     */
    ON_ABILITY_FULLY_CAST = 197,
    /**
     * Method Name: `OnBreakInvisibility`
     */
    ON_BREAK_INVISIBILITY = 198,
    /**
     * Method Name: `OnAbilityEndChannel`
     */
    ON_ABILITY_END_CHANNEL = 199,
    ON_PROCESS_UPGRADE = 200,
    ON_REFRESH = 201,
    /**
     * Method Name: `OnTakeDamage`
     */
    ON_TAKEDAMAGE = 202,
    /**
     * Method Name: `OnDamagePrevented`
     */
    ON_DEATH_PREVENTED = 203,
    /**
     * Method Name: `OnStateChanged`
     */
    ON_STATE_CHANGED = 204,
    ON_ORB_EFFECT = 205,
    /**
     * Method Name: `OnProcessCleave`
     */
    ON_PROCESS_CLEAVE = 206,
    /**
     * Method Name: `OnDamageCalculated`
     */
    ON_DAMAGE_CALCULATED = 207,
    /**
     * Method Name: `OnMagicDamageCalculated`
     */
    ON_MAGIC_DAMAGE_CALCULATED = 208,
    /**
     * Method Name: `OnAttacked`
     */
    ON_ATTACKED = 209,
    /**
     * Method Name: `OnDeath`
     */
    ON_DEATH = 210,
    /**
     * Method Name: `OnDeathCompleted`
     */
    ON_DEATH_COMPLETED = 211,
    /**
     * Method Name: `OnRespawn`
     */
    ON_RESPAWN = 212,
    /**
     * Method Name: `OnSpentMana`
     */
    ON_SPENT_MANA = 213,
    /**
     * Method Name: `OnSpentHealth`
     */
    ON_SPENT_HEALTH = 214,
    /**
     * Method Name: `OnTeleporting`
     */
    ON_TELEPORTING = 215,
    /**
     * Method Name: `OnTeleported`
     */
    ON_TELEPORTED = 216,
    /**
     * Method Name: `OnSetLocation`
     */
    ON_SET_LOCATION = 217,
    /**
     * Method Name: `OnHealthGained`
     */
    ON_HEALTH_GAINED = 218,
    /**
     * Method Name: `OnManaGained`
     */
    ON_MANA_GAINED = 219,
    /**
     * Method Name: `OnTakeDamageKillCredit`
     */
    ON_TAKEDAMAGE_KILLCREDIT = 220,
    /**
     * Method Name: `OnHeroKilled`
     */
    ON_HERO_KILLED = 221,
    /**
     * Method Name: `OnHealReceived`
     */
    ON_HEAL_RECEIVED = 222,
    /**
     * Method Name: `OnBuildingKilled`
     */
    ON_BUILDING_KILLED = 223,
    /**
     * Method Name: `OnModelChanged`
     */
    ON_MODEL_CHANGED = 224,
    /**
     * Method Name: `OnModifierAdded`
     */
    ON_MODIFIER_ADDED = 225,
    /**
     * Method Name: `OnModifierRemoved`
     */
    ON_MODIFIER_REMOVED = 226,
    /**
     * Method Name: `OnTooltip`
     */
    TOOLTIP = 227,
    /**
     * Method Name: `GetModifierModelChange`
     */
    MODEL_CHANGE = 228,
    /**
     * Method Name: `GetModifierModelScale`
     */
    MODEL_SCALE = 229,
    /**
     * Method Name: `GetModifierModelScaleAnimateTime`
     */
    MODEL_SCALE_ANIMATE_TIME = 230,
    /**
     * Method Name: `GetModifierModelScaleUseInOutEase`
     */
    MODEL_SCALE_USE_IN_OUT_EASE = 231,
    /**
     * Method Name: `GetModifierModelScaleConstant`
     */
    MODEL_SCALE_CONSTANT = 232,
    /**
     * Applies scepter when this property is active
     *
     *
     *
     * Method Name: `GetModifierScepter`.
     */
    IS_SCEPTER = 233,
    /**
     * Applies shard when this property is active
     *
     *
     *
     * Method Name: `GetModifierShard`.
     */
    IS_SHARD = 234,
    /**
     * Method Name: `GetModifierRadarCooldownReduction`
     */
    RADAR_COOLDOWN_REDUCTION = 235,
    /**
     * Method Name: `GetActivityTranslationModifiers`
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 236,
    /**
     * Method Name: `GetAttackSound`
     */
    TRANSLATE_ATTACK_SOUND = 237,
    /**
     * Method Name: `GetUnitLifetimeFraction`
     */
    LIFETIME_FRACTION = 238,
    /**
     * Method Name: `GetModifierProvidesFOWVision`
     */
    PROVIDES_FOW_POSITION = 239,
    /**
     * Method Name: `GetModifierSpellsRequireHP`
     */
    SPELLS_REQUIRE_HP = 240,
    /**
     * Method Name: `GetModifierConvertManaCostToHealthCost`
     */
    CONVERT_MANA_COST_TO_HEALTH_COST = 241,
    /**
     * Method Name: `GetForceDrawOnMinimap`
     */
    FORCE_DRAW_MINIMAP = 242,
    /**
     * Method Name: `GetModifierDisableTurning`
     */
    DISABLE_TURNING = 243,
    /**
     * Method Name: `GetModifierIgnoreCastAngle`
     */
    IGNORE_CAST_ANGLE = 244,
    /**
     * Method Name: `GetModifierChangeAbilityValue`
     */
    CHANGE_ABILITY_VALUE = 245,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecial`
     */
    OVERRIDE_ABILITY_SPECIAL = 246,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecialValue`
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 247,
    /**
     * Method Name: `GetModifierAbilityLayout`
     */
    ABILITY_LAYOUT = 248,
    /**
     * Method Name: `OnDominated`
     */
    ON_DOMINATED = 249,
    /**
     * Method Name: `OnKill`
     */
    ON_KILL = 250,
    /**
     * Method Name: `OnAssist`
     */
    ON_ASSIST = 251,
    /**
     * Method Name: `GetModifierTempestDouble`
     */
    TEMPEST_DOUBLE = 252,
    /**
     * Method Name: `PreserveParticlesOnModelChanged`
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 253,
    /**
     * Method Name: `OnAttackFinished`
     */
    ON_ATTACK_FINISHED = 254,
    /**
     * Method Name: `GetModifierIgnoreCooldown`
     */
    IGNORE_COOLDOWN = 255,
    /**
     * Method Name: `GetModifierCanAttackTrees`
     */
    CAN_ATTACK_TREES = 256,
    /**
     * Method Name: `GetVisualZDelta`
     */
    VISUAL_Z_DELTA = 257,
    /**
     * Method Name: `GetVisualZSpeedBaseOverride`
     */
    VISUAL_Z_SPEED_BASE_OVERRIDE = 258,
    INCOMING_DAMAGE_ILLUSION = 259,
    /**
     * Method Name: `GetModifierNoVisionOfAttacker`
     */
    DONT_GIVE_VISION_OF_ATTACKER = 260,
    /**
     * Method Name: `OnTooltip2`
     */
    TOOLTIP2 = 261,
    /**
     * Method Name: `OnAttackRecordDestroy`
     */
    ON_ATTACK_RECORD_DESTROY = 262,
    /**
     * Method Name: `OnProjectileObstructionHit`
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 263,
    /**
     * Method Name: `GetSuppressTeleport`
     */
    SUPPRESS_TELEPORT = 264,
    /**
     * Method Name: `OnAttackCancelled`
     */
    ON_ATTACK_CANCELLED = 265,
    /**
     * Method Name: `GetSuppressCleave`
     */
    SUPPRESS_CLEAVE = 266,
    /**
     * Method Name: `BotAttackScoreBonus`
     */
    BOT_ATTACK_SCORE_BONUS = 267,
    /**
     * Method Name: `GetModifierAttackSpeedReductionPercentage`
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 268,
    /**
     * Method Name: `GetModifierMoveSpeedReductionPercentage`
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 269,
    ATTACK_WHILE_MOVING_TARGET = 270,
    /**
     * Method Name: `GetModifierAttackSpeedPercentage`
     */
    ATTACKSPEED_PERCENTAGE = 271,
    /**
     * Method Name: `OnAttemptProjectileDodge`
     */
    ON_ATTEMPT_PROJECTILE_DODGE = 272,
    /**
     * Method Name: `OnPreDebuffApplied`
     */
    ON_PREDEBUFF_APPLIED = 273,
    /**
     * Method Name: `GetModifierPercentageCooldownStacking`
     */
    COOLDOWN_PERCENTAGE_STACKING = 274,
    /**
     * Method Name: `GetModifierSpellRedirectTarget`
     */
    SPELL_REDIRECT_TARGET = 275,
    /**
     * Method Name: `GetModifierTurnRateConstant`
     */
    TURN_RATE_CONSTANT = 276,
    /**
     * Method Name: `GetModifierIsPackRat`
     */
    PACK_RAT = 277,
    /**
     * Method Name: `GetModifierPhysicalDamageOutgoing_Percentage`
     */
    PHYSICALDAMAGEOUTGOING_PERCENTAGE = 278,
    /**
     * Method Name: `GetModifierKnockbackAmplification_Percentage`
     */
    KNOCKBACK_AMPLIFICATION_PERCENTAGE = 279,
    /**
     * Return value is a count of pips.
     *
     *
     *
     * Method Name: `GetModifierHealthBarPips`.
     */
    HEALTHBAR_PIPS = 280,
    /**
     * This property controls 'universal' shield, if defined both on client and
     * server. Return value on client should be current shield health, as a positive
     * integer, on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingDamageConstant`.
     */
    INCOMING_DAMAGE_CONSTANT = 281,
    /**
     * Method Name: `OnSpellAppliedSuccessfully`
     */
    SPELL_APPLIED_SUCCESSFULLY = 282,
    /**
     * Method Name: `GetModifierAvoidDamageAfterReductions`
     */
    AVOID_DAMAGE_AFTER_REDUCTIONS = 283,
    /**
     * Method Name: `GetModifierPropetyFailAttack`
     */
    FAIL_ATTACK = 284,
    /**
     * Method Name: `GetModifierPrereduceIncomingDamage_Mult`
     */
    PREREDUCE_INCOMING_DAMAGE_MULT = 285,
    /**
     * Method Name: `GetModifierSuppressFullscreenDeathFX`
     */
    SUPPRESS_FULLSCREEN_DEATH_FX = 286,
    /**
     * Method Name: `MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST`
     */
    INCOMING_DAMAGE_CONSTANT_POST = 287,
    /**
     * Method Name: `GetModifierDamageOutgoing_PercentageMultiplicative`
     */
    DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE = 288,
    /**
     * Method Name: `GetModifierTickGold_Multiplier`
     */
    TICK_GOLD_MULTIPLIER = 289,
    /**
     * Method Name: `GEtModifierSlowResistance_Unique`
     */
    SLOW_RESISTANCE_UNIQUE = 290,
    /**
     * Method Name: `GetModifierSlowResistance_Stacking`
     */
    SLOW_RESISTANCE_STACKING = 291,
    /**
     * Method Name: `GetModifierAoEBonusPercentage`
     */
    AOE_BONUS_PERCENTAGE = 292,
    /**
     * Method Name: `GetModifierProjectileSpeed`
     */
    PROJECTILE_SPEED = 293,
    /**
     * Method Name: `GetModifierProjectileSpeedTarget`
     */
    PROJECTILE_SPEED_TARGET = 294,
    /**
     * Method Name: `GetModifierBecomeStrength`
     */
    BECOME_STRENGTH = 295,
    /**
     * Method Name: `GetModifierBecomeAgility`
     */
    BECOME_AGILITY = 296,
    /**
     * Method Name: `GetModifierBecomeIntelligence`
     */
    BECOME_INTELLIGENCE = 297,
    /**
     * Method Name: `GetModifierBecomeUniversal`
     */
    BECOME_UNIVERSAL = 298,
    /**
     * Method Name: `OnForceProcMagicStick`
     */
    ON_FORCE_PROC_MAGIC_STICK = 299,
    /**
     * Method Name: `OnDamageHPLoss`
     */
    ON_DAMAGE_HPLOSS = 300,
    /**
     * Method Name: `GetModifierShareXPRune`
     */
    SHARE_XPRUNE = 301,
    /**
     * Method Name: `GetModifierNoFreeTPScrollOnDeath`
     */
    NO_FREE_TP_SCROLL_ON_DEATH = 302,
    /**
     * Method Name: `GetModifierHasBonusNeutralItemChoice`
     */
    HAS_BONUS_NEUTRAL_ITEM_CHOICE = 303,
    /**
     * Method Name: `GetModifierForceMaxHealth`
     */
    FORCE_MAX_HEALTH = 304,
    /**
     * Method Name: `GetModifierForceMaxMana`
     */
    FORCE_MAX_MANA = 305,
    /**
     * Method Name: `GetModifierAoEBonusConstant`
     */
    AOE_BONUS_CONSTANT = 306,
    /**
     * Method Name: `GetModifierAoEBonusConstantStacking`
     */
    AOE_BONUS_CONSTANT_STACKING = 307,
    /**
     * Method Name: `OnTakeDamagePostUnavoidableBlock`
     */
    ON_TAKEDAMAGE_POST_UNAVOIDABLE_BLOCK = 308,
    /**
     * Method Name: `OnMuteDamageAbilities`
     */
    ON_MUTE_DAMAGE_ABILITIES = 309,
    /**
     * Method Name: `GetSuppressCrit`
     */
    SUPPRESS_CRIT = 310,
    /**
     * Method Name: `GetModifierAbilityPoints`
     */
    ABILITY_POINTS = 311,
    /**
     * Method Name: `GetModifierBuybackPenaltyPercent`
     */
    BUYBACK_PENALTY_PERCENT = 312,
    /**
     * Method Name: `GetModifierItemSellbackCost`
     */
    ITEM_SELLBACK_COST = 313,
    /**
     * Method Name: `GetModifierDisassembleAnything`
     */
    DISASSEMBLE_ANYTHING = 314,
    /**
     * Method Name: `GetModifierFixedManaRegen`
     */
    FIXED_MANA_REGEN = 315,
    /**
     * Method Name: `GetModifierBonusUphillMissChance`
     */
    BONUS_UPHILL_MISS_CHANCE = 316,
    /**
     * Method Name: `GetModifierCreepDenyPercent`
     */
    CREEP_DENY_PERCENT = 317,
    /**
     * Method Name: `GetModifierAttackSpeedAbsoluteMax`
     */
    ATTACKSPEED_ABSOLUTE_MAX = 318,
    /**
     * Method Name: `GetModifierFoWTeam`
     */
    FOW_TEAM = 319,
    /**
     * Method Name: `OnHeroBeginDying`
     */
    ON_HERO_BEGIN_DYING = 320,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BONUS_LOTUS_HEAL = 321,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_HP_REGEN_PER_STR_BONUS_PERCENTAGE = 322,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_ARMOR_PER_AGI_BONUS_PERCENTAGE = 323,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_MP_REGEN_PER_INT_BONUS_PERCENTAGE = 324,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_MRES_PER_INT_BONUS_PERCENTAGE = 325,
    /**
     * Method Name: `OnDayStarted`
     */
    ON_DAY_STARTED = 326,
    /**
     * Method Name: `GetModifierCreateBonusIllusionChance`
     */
    CREATE_BONUS_ILLUSION_CHANCE = 327,
    /**
     * Method Name: `GetModifierCreateBonusIllusionCount`
     */
    CREATE_BONUS_ILLUSION_COUNT = 328,
    /**
     * Method Name: `GetModofierPropertyPseudoRandomBonus`
     */
    PSEUDORANDOM_BONUS = 329,
    /**
     * Method Name: `GetModifierAttackHeightBonus`
     */
    ATTACK_HEIGHT_BONUS = 330,
    /**
     * Method Name: `GetSkipAttackRegulator`
     */
    SKIP_ATTACK_REGULATOR = 331,
    /**
     * Method Name: `GetModifierMiss_Percentage_Target`
     */
    MISS_PERCENTAGE_TARGET = 332,
    /**
     * Method Name: `GetModifierAdditionalNutralItemDrops`
     */
    ADDITIONAL_NEUTRAL_ITEM_DROPS = 333,
    /**
     * Method Name: `GetModifierKillStreakBonusGoldPercentage`
     */
    KILL_STREAK_BONUS_GOLD_PERCENTAGE = 334,
    /**
     * Method Name: `GetModifierHPRegenMultiplierPreAmplification`
     */
    HP_REGEN_MULTIPLIER_PRE_AMPLIFICATION = 335,
    /**
     * Method Name: `GetModifierHeroFacetOverride`
     */
    HEROFACET_OVERRIDE = 336,
    /**
     * Method Name: `OnTreeCutDown`
     */
    ON_TREE_CUT_DOWN = 337,
    /**
     * Method Name: `OnCleaveAttackLanded`
     */
    ON_CLEAVE_ATTACK_LANDED = 338,
    /**
     * Method Name: `MinAttributeLevel`
     */
    MIN_ATTRIBUTE_LEVEL = 339,
    /**
     * Method Name: `GetTierTokenReroll`
     */
    TIER_TOKEN_REROLL = 340,
    /**
     * Method Name: `GetVisionDegreeRestriction`
     */
    VISION_DEGREES_RESTRICTION = 341,
    /**
     * Method Name: `GetModifierTotal_ConstantBlockStacking`
     */
    TOTAL_CONSTANT_BLOCK_STACKING = 342,
    /**
     * Method Name: `GetModifierInventorySlotRestricted`
     */
    INVENTORY_SLOT_RESTRICTED = 343,
    /**
     * Method Name: `OnTierTokenRerolled`
     */
    ON_TIER_TOKEN_REROLLED = 344,
    /**
     * Method Name: `GetRedirectSpell`
     */
    REDIRECT_SPELL = 345,
    /**
     * Method Name: `GetBaseAttackPostBonus`
     */
    BASEATTACK_POSTBONUS = 346,
    INVALID = 65535,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierpriority = ModifierPriority;

declare const enum ModifierPriority {
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

declare const enum ModifierRemove {
    ALL = 0,
    ENEMY = 1,
    ALLY = 2,
}

declare const MODIFIER_STATE_LAST: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierstate = ModifierState;

declare const enum ModifierState {
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
    CANNOT_TARGET_BUILDINGS = 16,
    CANNOT_MISS = 17,
    SPECIALLY_DENIABLE = 18,
    FROZEN = 19,
    COMMAND_RESTRICTED = 20,
    NOT_ON_MINIMAP = 21,
    LOW_ATTACK_PRIORITY = 22,
    NO_HEALTH_BAR = 23,
    NO_HEALTH_BAR_FOR_ENEMIES = 24,
    NO_HEALTH_BAR_FOR_OTHER_PLAYERS = 25,
    FLYING = 26,
    NO_UNIT_COLLISION = 27,
    NO_TEAM_MOVE_TO = 28,
    NO_TEAM_SELECT = 29,
    PASSIVES_DISABLED = 30,
    DOMINATED = 31,
    BLIND = 32,
    OUT_OF_GAME = 33,
    FAKE_ALLY = 34,
    FLYING_FOR_PATHING_PURPOSES_ONLY = 35,
    TRUESIGHT_IMMUNE = 36,
    UNTARGETABLE = 37,
    UNTARGETABLE_ALLIED = 38,
    UNTARGETABLE_ENEMY = 39,
    UNTARGETABLE_SELF = 40,
    IGNORING_MOVE_AND_ATTACK_ORDERS = 41,
    ALLOW_PATHING_THROUGH_TREES = 42,
    NOT_ON_MINIMAP_FOR_ENEMIES = 43,
    UNSLOWABLE = 44,
    TETHERED = 45,
    IGNORING_STOP_ORDERS = 46,
    FEARED = 47,
    TAUNTED = 48,
    CANNOT_BE_MOTION_CONTROLLED = 49,
    FORCED_FLYING_VISION = 50,
    ATTACK_ALLIES = 51,
    ALLOW_PATHING_THROUGH_CLIFFS = 52,
    ALLOW_PATHING_THROUGH_FISSURE = 53,
    SPECIALLY_UNDENIABLE = 54,
    ALLOW_PATHING_THROUGH_OBSTRUCTIONS = 55,
    DEBUFF_IMMUNE = 56,
    NO_INVISIBILITY_VISUALS = 57,
    ALLOW_PATHING_THROUGH_BASE_BLOCKER = 58,
    IGNORING_MOVE_ORDERS = 59,
    ATTACKS_ARE_MELEE = 60,
    CAN_USE_BACKPACK_ITEMS = 61,
    CASTS_IGNORE_CHANNELING = 62,
    ATTACKS_DONT_REVEAL = 63,
}

declare const MAX_PATTACH_TYPES: 16;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment_t = ParticleAttachment;

declare const enum ParticleAttachment {
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

declare const enum PseudoRandom {
    NONE = 0,
    MAGNUS_SHARD = 1,
    PHANTOMASSASSIN_CRIT = 2,
    PHANTOMASSASSIN_DAGGER = 3,
    PHANTOMLANCER_JUXTAPOSE = 4,
    TINY_CRAGGY = 5,
    COLD_REBUKE = 6,
    WOLF_CRIT = 7,
    AXE_HELIX = 8,
    AXE_HELIX_ATTACK = 9,
    LEGION_MOMENT = 10,
    SLARDAR_BASH = 11,
    OD_ESSENCE = 12,
    DROW_MARKSMANSHIP = 13,
    OGRE_MAGI_FIREBLAST = 14,
    OGRE_ITEM_MULTICAST = 15,
    SPIRITBREAKER_GREATERBASH = 16,
    LONE_DRUID_ENTANGLE = 17,
    FACELESS_BASH = 18,
    FACELESS_EVADE_SPELL = 19,
    FACELESS_EVADE_ATTACK = 20,
    FACELESS_VOID_BACKTRACK = 21,
    BREWMASTER_CRIT = 22,
    BREWMASTER_CINDER_BREW = 23,
    SNIPER_HEADSHOT = 24,
    ATOS = 25,
    JUGG_CRIT = 26,
    DAZZLE_SCEPTER = 27,
    CHAOS_CRIT = 28,
    LYCAN_CRIT = 29,
    TUSK_CRIT = 30,
    CM_FREEZING_FIELD = 31,
    GENERIC_BASHER = 32,
    SKELETONKING_CRIT = 33,
    SKELETONKING_CRIT_MORTAL = 34,
    ITEM_GREATERCRIT = 35,
    ITEM_LESSERCRIT = 36,
    ITEM_BASHER = 37,
    ITEM_SOLAR_CREST = 38,
    ITEM_JAVELIN_ACCURACY = 39,
    ITEM_TRIDENT = 40,
    ITEM_ABYSSAL = 41,
    ITEM_ABYSSAL_BLOCK = 42,
    ITEM_STOUT = 43,
    ITEM_VANGUARD = 44,
    ITEM_CRIMSON_GUARD = 45,
    ITEM_PMS = 46,
    ITEM_HALBRED_MAIM = 47,
    ITEM_SANGEYASHA_MAIM = 48,
    ITEM_SANGEKAYA_MAIM = 49,
    ITEM_SANGE_MAIM = 50,
    ITEM_BUTTERFLY = 51,
    ITEM_MAELSTROM = 52,
    ITEM_MJOLLNIR = 53,
    ITEM_MJOLLNIR_STATIC = 54,
    ITEM_MKB = 55,
    ITEM_SILVER_EDGE = 56,
    ITEM_NAGINATA = 57,
    TROLL_BASH = 58,
    RIKI_SMOKE_SCREEN = 59,
    CHAOS_DOUBLE_CRIT = 60,
    CHAOS_TRIPLE_CRIT = 61,
    GENERIC_EVASION = 62,
    GENERIC_HEIGHT_MISS = 63,
    GENERIC_MISS = 64,
    ARMADILLO_HEARTPIERCER = 65,
    MARS_SHIELD = 66,
    CHAOS_KNIGHT_INNATE_REFUND = 67,
    NEUTRAL_DROP_TIER_1 = 68,
    NEUTRAL_DROP_TIER_2 = 69,
    NEUTRAL_DROP_TIER_3 = 70,
    NEUTRAL_DROP_TIER_4 = 71,
    NEUTRAL_DROP_TIER_5 = 72,
    MARS_BULWARK = 73,
    MUERTA_GUNSLINGER = 74,
    TROLL_FERVOR_SHARD = 75,
    SNAPFIRE_GLANCING = 76,
    PANGOLIER_PARRY = 77,
    HOODWINK_REDIRECT = 78,
    CUSTOM_GENERIC = 79,
    CUSTOM_GAME_1 = 80,
    CUSTOM_GAME_2 = 81,
    CUSTOM_GAME_3 = 82,
    CUSTOM_GAME_4 = 83,
    CUSTOM_GAME_5 = 84,
    CUSTOM_GAME_6 = 85,
    CUSTOM_GAME_7 = 86,
    CUSTOM_GAME_8 = 87,
    CUSTOM_GAME_9 = 88,
}

declare const QUEST_NUM_TEXT_REPLACE_VALUES: 4;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type quest_text_replace_values_t = QuestTextReplaceValue;

declare const enum QuestTextReplaceValue {
    CURRENT_VALUE = 0,
    TARGET_VALUE = 1,
    ROUND = 2,
    REWARD = 3,
}

declare const enum ShowGenericPopupType {
    TINT_SCREEN = 1,
    SHOW_NO_OTHER_DIALOGS = 2,
}

/**
 *
 *
 * https://developer.valvesoftware.com/wiki/Animation_Events#Server_events
 */
declare const enum SourceEngineAnimationEvent {
    EMPTY = 0,
    CL_PLAYSOUND = 1,
    CL_PLAYSOUND_ATTACHMENT = 2,
    CL_PLAYSOUND_POSITION = 3,
    SV_PLAYSOUND = 4,
    CL_STOPSOUND = 5,
    CL_PLAYSOUND_LOOPING = 6,
    CL_CREATE_PARTICLE_EFFECT = 7,
    CL_STOP_PARTICLE_EFFECT = 8,
    CL_CREATE_PARTICLE_EFFECT_CFG = 9,
    SV_CREATE_PARTICLE_EFFECT_CFG = 10,
    SV_STOP_PARTICLE_EFFECT = 11,
    FOOTSTEP = 12,
    RAGDOLL = 13,
    CL_STOP_RAGDOLL_CONTROL = 14,
    CL_ENABLE_BODYGROUP = 15,
    CL_DISABLE_BODYGROUP = 16,
    BODYGROUP_SET_VALUE = 17,
    CL_BODYGROUP_SET_VALUE_CMODEL_WPN = 18,
    WEAPON_PERFORM_ATTACK = 19,
    FIRE_INPUT = 20,
    CL_CLOTH_ATTR = 21,
    CL_CLOTH_GROUND_OFFSET = 22,
    CL_CLOTH_STIFFEN = 23,
    CL_CLOTH_EFFECT = 24,
    CL_CREATE_ANIM_SCOPE_PROP = 25,
    SV_IKLOCK = 26,
    PULSE_GRAPH = 27,
    PULSE_GRAPH_LOOKAT = 28,
    PULSE_GRAPH_AIMAT = 29,
    PULSE_GRAPH_IKLOCKLEFTARM = 30,
    PULSE_GRAPH_IKLOCKRIGHTARM = 31,
    DISABLE_PLATFORM = 32,
    ENABLE_PLATFORM = 33,
    CL_SUPPRESS_EVENTS_WITH_TAG = 34,
    CL_HIDE_PARTICLE_EFFECT = 35,
    CL_SHOW_PARTICLE_EFFECT = 36,
    CL_ADD_PARTICLE_EFFECT_CP = 37,
    CL_SPEECH = 38,
    CL_PANORAMA_EVENT = 39,
    CL_DOTA_PLAY_STATUS_EFFECT = 40,
    CL_DOTA_STOP_STATUS_EFFECT = 41,
    CL_DOTA_NPC_CREATE_PARTICLE_EFFECT = 42,
    CL_DOTA_RUBICK_ARCANA_CREATE_PARTICLE_EFFECT = 43,
    DOTA_PET_ITEM_PICKUP = 44,
    DOTA_PET_ITEM_DROP = 45,
    DOTA_SUPPRESS_CONSTANT_LAYER = 46,
    DOTA_PLAY_SOUND_ATTACK_SPECIAL = 47,
    DOTA_CREATE_CLINKZ_ATTACK = 48,
    DOTA_PLAY_SOUND_ATTACK_BACKSTAB = 49,
    DOTA_DIE_PHANTOM_DEATH_PARTICLES = 50,
    DOTA_SWITCH_ATTACK_COMBO = 51,
    EF_NODRAW = 52,
    EF_DRAW = 53,
    DOTA_PLAY_SOUND_ATTACK = 54,
}

/**
 *
 *
 * https://developer.valvesoftware.com/wiki/Damage_types
 */
declare const enum SourceEngineDamageTypes {
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
 *
 *
 * https://developer.valvesoftware.com/wiki/Weapon_script#SoundData
 */
declare const enum SourceEngineSoundData {
    EMPTY = 0,
    SINGLE_SHOT = 2,
    DOUBLE_SHOT = 3,
    MELEE_MISS = 4,
    MELEE_HIT = 5,
    MELEE_HIT_WORLD = 6,
    SPECIAL_1 = 9,
    SPECIAL_2 = 10,
    SPECIAL_3 = 11,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type subquest_text_replace_values_t = SubquestTextReplaceValue;

declare const enum SubquestTextReplaceValue {
    TEXT_REPLACE_CURRENT_VALUE = 0,
    TEXT_REPLACE_TARGET_VALUE = 1,
    NUM_TEXT_REPLACES = 2,
}

declare const enum UnitFilterResult {
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
