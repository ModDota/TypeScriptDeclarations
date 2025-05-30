/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SteamUGCQuery = SteamUgcQuery;

declare enum SteamUgcQuery {
    RANKED_BY_VOTE = 0,
    RANKED_BY_PUBLICATION_DATE = 1,
    ACCEPTED_FOR_GAME_RANKED_BY_ACCEPTANCE_DATE = 2,
    RANKED_BY_TREND = 3,
    FAVORITED_BY_FRIENDS_RANKED_BY_PUBLICATION_DATE = 4,
    CREATED_BY_FRIENDS_RANKED_BY_PUBLICATION_DATE = 5,
    RANKED_BY_NUM_TIMES_REPORTED = 6,
    CREATED_BY_FOLLOWED_USERS_RANKED_BY_PUBLICATION_DATE = 7,
    NOT_YET_RATED = 8,
    RANKED_BY_TOTAL_VOTES_ASC = 9,
    RANKED_BY_VOTES_UP = 10,
    RANKED_BY_TEXT_SEARCH = 11,
    RANKED_BY_TOTAL_UNIQUE_SUBSCRIPTIONS = 12,
    RANKED_BY_PLAYTIME_TREND = 13,
    RANKED_BY_TOTAL_PLAYTIME = 14,
    RANKED_BY_AVERAGE_PLAYTIME_TREND = 15,
    RANKED_BY_LIFETIME_AVERAGE_PLAYTIME = 16,
    RANKED_BY_PLAYTIME_SESSIONS_TREND = 17,
    RANKED_BY_LIFETIME_PLAYTIME_SESSIONS = 18,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SteamUGCMatchingUGCType = SteamUgcMatchingUgcType;

declare enum SteamUgcMatchingUgcType {
    ITEMS = 0,
    ITEMS_MTX = 1,
    ITEMS_READY_TO_USE = 2,
    COLLECTIONS = 3,
    ARTWORK = 4,
    VIDEOS = 5,
    SCREENSHOTS = 6,
    ALL_GUIDES = 7,
    WEB_GUIDES = 8,
    INTEGRATED_GUIDES = 9,
    USABLE_IN_GAME = 10,
    CONTROLLER_BINDINGS = 11,
    GAME_MANAGED_ITEMS = 12,
    ALL = -1,
}

declare enum SteamUniverse {
    INVALID = 0,
    INTERNAL = 3,
    DEV = 4,
    BETA = 2,
    PUBLIC = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameState = GameState;

declare enum GameState {
    INIT = 0,
    WAIT_FOR_PLAYERS_TO_LOAD = 1,
    HERO_SELECTION = 4,
    STRATEGY_TIME = 5,
    PRE_GAME = 8,
    GAME_IN_PROGRESS = 10,
    POST_GAME = 11,
    DISCONNECT = 12,
    TEAM_SHOWCASE = 6,
    CUSTOM_GAME_SETUP = 2,
    WAIT_FOR_MAP_TO_LOAD = 7,
    SCENARIO_SETUP = 9,
    PLAYER_DRAFT = 3,
    LAST = 0,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GC_TEAM = GcTeam;

declare enum GcTeam {
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

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameMode = GameMode;

declare enum GameMode {
    NONE = 0,
    AP = 1,
    CM = 2,
    RD = 3,
    SD = 4,
    AR = 5,
    INTRO = 6,
    HW = 7,
    REVERSE_CM = 8,
    XMAS = 9,
    TUTORIAL = 10,
    MO = 11,
    LP = 12,
    POOL_1 = 13,
    FH = 14,
    CUSTOM = 15,
    CD = 16,
    BD = 17,
    ABILITY_DRAFT = 18,
    EVENT = 19,
    ARDM = 20,
    '1_V_1_MID' = 21,
    ALL_DRAFT = 22,
    TURBO = 23,
    MUTATION = 24,
    COACHES_CHALLENGE = 25,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAConnectionState_t = ConnectionState;

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
type dotaunitorder_t = UnitOrder;

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
    MOVE_RELATIVE = 39,
    CAST_TOGGLE_ALT = 40,
    CONSUME_ITEM = 41,
    SET_ITEM_MARK_FOR_SELL = 42,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_OVERHEAD_ALERT = OverheadAlert;

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

declare const DOTA_HEROPICK_STATE_COUNT: 62;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_HeroPickState = HeroPickState;

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
    SCENARIO_PICK = 61,
}

declare const DOTA_TEAM_FIRST: 2;

declare const DOTA_TEAM_COUNT: 15;

declare const DOTA_TEAM_CUSTOM_MIN: 6;

declare const DOTA_TEAM_CUSTOM_MAX: 13;

declare const DOTA_TEAM_CUSTOM_COUNT: 8;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTATeam_t = DotaTeam;

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
    DRAFT_POOL = 14,
}

declare const DOTA_RUNE_COUNT: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_RUNES = RuneType;

declare enum RuneType {
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
type DOTA_UNIT_TARGET_TEAM = UnitTargetTeam;

declare enum UnitTargetTeam {
    NONE = 0,
    FRIENDLY = 1,
    ENEMY = 2,
    CUSTOM = 4,
    BOTH = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TYPE = UnitTargetType;

declare enum UnitTargetType {
    NONE = 0,
    HERO = 1,
    CREEP = 2,
    BUILDING = 4,
    COURIER = 16,
    OTHER = 32,
    TREE = 64,
    CUSTOM = 128,
    SELF = 256,
    BASIC = 18,
    ALL = 55,
    HEROES_AND_CREEPS = 19,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_FLAGS = UnitTargetFlags;

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
    CAN_BE_SEEN = 384,
}

/**
 * Max number of players connected to the server including spectators.
 */
declare const DOTA_MAX_PLAYERS: 64;

/**
 * Max number of players per team.
 */
declare const DOTA_MAX_TEAM: 24;

/**
 * Max number of player teams supported.
 */
declare const DOTA_MAX_PLAYER_TEAMS: 10;

/**
 * Max number of non-spectator players supported.
 */
declare const DOTA_MAX_TEAM_PLAYERS: 24;

/**
 * How many spectators can watch.
 */
declare const DOTA_MAX_SPECTATOR_TEAM_SIZE: 40;

/**
 * Max number of viewers in a spectator lobby.
 */
declare const DOTA_MAX_SPECTATOR_LOBBY_SIZE: 15;

/**
 * Default number of players per team.
 */
declare const DOTA_DEFAULT_MAX_TEAM: 5;

/**
 * Default number of non-spectator players supported.
 */
declare const DOTA_DEFAULT_MAX_TEAM_PLAYERS: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAInventoryFlags_t = InventoryFlags;

declare enum InventoryFlags {
    ALLOW_NONE = 0,
    ALLOW_MAIN = 1,
    ALLOW_STASH = 2,
    ALLOW_DROP_ON_GROUND = 4,
    ALLOW_DROP_AT_FOUNTAIN = 8,
    LIMIT_DROP_ON_GROUND = 16,
    ALL_ACCESS = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyGold_Reason = ModifyGoldReason;

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
    COURIER_KILLED_BY_THIS_PLAYER = 21,
}

declare const DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitAttackCapability_t = UnitAttackCapability;

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

declare enum UnitMoveCapability {
    NONE = 0,
    GROUND = 1,
    FLY = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EShareAbility = ItemShareability;

declare enum ItemShareability {
    FULLY_SHAREABLE = 0,
    PARTIALLY_SHAREABLE = 1,
    NOT_SHAREABLE = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMusicStatus_t = MusicStatus;

declare enum MusicStatus {
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
type DOTA_ABILITY_BEHAVIOR = AbilityBehavior;

declare enum AbilityBehavior {
    NONE = 0,
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
    LAST_RESORT_POINT = 2147483648,
    CAN_SELF_CAST = 4294967296,
    SHOW_IN_GUIDES = 8589934592,
    UNLOCKED_BY_EFFECT_INDEX = 17179869184,
    SUPPRESS_ASSOCIATED_CONSUMABLE = 34359738368,
    FREE_DRAW_TARGETING = 68719476736,
    IGNORE_SILENCE = 137438953472,
    OVERSHOOT = 274877906944,
    IGNORE_MUTED = 549755813888,
    ALT_CASTABLE = 1099511627776,
    SKIP_FOR_KEYBINDS = 4398046511104,
    INNATE_UI = 8796093022208,
    UNSWAPPABLE = 17592186044416,
    DONT_PROC_OTHER_ABILITIES = 35184372088832,
    IGNORE_INVISIBLE = 70368744177664,
    AFFECTED_BY_MUTE = 140737488355328,
    IS_FAKE_ITEM = 281474976710656,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DAMAGE_TYPES = DamageTypes;

declare enum DamageTypes {
    NONE = 0,
    PHYSICAL = 1,
    MAGICAL = 2,
    PURE = 4,
    HP_REMOVAL = 8,
    ABILITY_DEFINED = 16,
    ALL = 7,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ABILITY_TYPES = AbilityTypes;

declare enum AbilityTypes {
    BASIC = 0,
    ULTIMATE = 1,
    ATTRIBUTES = 2,
    HIDDEN = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type SPELL_IMMUNITY_TYPES = SpellImmunityTypes;

declare enum SpellImmunityTypes {
    NONE = 0,
    ALLIES_YES = 1,
    ALLIES_NO = 2,
    ENEMIES_YES = 3,
    ENEMIES_NO = 4,
    ALLIES_YES_ENEMIES_NO = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTADamageFlag_t = DamageFlag;

declare enum DamageFlag {
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
    NO_REFLECTION = 1048576,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyXP_Reason = ModifyXpReason;

declare enum ModifyXpReason {
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

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type GameActivity_t = GameActivity;

declare enum GameActivity {
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
    DOTA_SHADOW_VAULT = 1765,
    DOTA_KEZ_KATANA_ULT_START = 1766,
    DOTA_KEZ_KATANA_ULT_CHAIN_A = 1767,
    DOTA_KEZ_KATANA_ULT_CHAIN_B = 1768,
    DOTA_KEZ_KATANA_ULT_END = 1769,
    DOTA_KEZ_KATANA_IMPALE = 1770,
    DOTA_KEZ_KATANA_IMPALE_FAST = 1771,
    DOTA_UNICYCLE = 1772,
    DOTA_UNICYCLE_END = 1773,
    DOTA_MVP_SCREEN = 1776,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMinimapEvent_t = MinimapEventType;

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

declare const DOTA_PLAYER_LOADOUT_START: 70;

declare const DOTA_PLAYER_LOADOUT_END: 100;

declare const DOTA_LOADOUT_TYPE_COUNT: 102;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASlotType_t = LoadoutType;

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
    TYPE_HERO_BASE = 16,
    TYPE_BODY_HEAD = 17,
    TYPE_MOUNT = 18,
    TYPE_SUMMON = 19,
    TYPE_SHAPESHIFT = 20,
    TYPE_TAUNT = 21,
    TYPE_HERO_EFFIGY = 22,
    TYPE_AMBIENT_EFFECTS = 23,
    TYPE_ABILITY_ATTACK = 24,
    TYPE_ABILITY_1 = 25,
    TYPE_ABILITY_2 = 26,
    TYPE_ABILITY_3 = 27,
    TYPE_ABILITY_4 = 28,
    TYPE_ABILITY_ULTIMATE = 29,
    TYPE_ABILITY_EFFECTS_1 = 30,
    TYPE_ABILITY_EFFECTS_2 = 31,
    TYPE_ABILITY_EFFECTS_3 = 32,
    TYPE_ABILITY_EFFECTS_4 = 33,
    TYPE_ABILITY_EFFECTS_5 = 34,
    TYPE_ABILITY_EFFECTS_6 = 35,
    TYPE_ABILITY_EFFECTS_7 = 36,
    TYPE_ABILITY_EFFECTS_8 = 37,
    TYPE_ABILITY_EFFECTS_9 = 38,
    TYPE_VOICE = 39,
    TYPE_WEAPON_PERSONA_1 = 40,
    TYPE_OFFHAND_WEAPON_PERSONA_1 = 41,
    TYPE_WEAPON_2_PERSONA_1 = 42,
    TYPE_OFFHAND_WEAPON_2_PERSONA_1 = 43,
    TYPE_HEAD_PERSONA_1 = 44,
    TYPE_SHOULDER_PERSONA_1 = 45,
    TYPE_ARMS_PERSONA_1 = 46,
    TYPE_ARMOR_PERSONA_1 = 47,
    TYPE_BELT_PERSONA_1 = 48,
    TYPE_NECK_PERSONA_1 = 49,
    TYPE_BACK_PERSONA_1 = 50,
    TYPE_LEGS_PERSONA_1 = 51,
    TYPE_GLOVES_PERSONA_1 = 52,
    TYPE_TAIL_PERSONA_1 = 53,
    TYPE_MISC_PERSONA_1 = 54,
    TYPE_BODY_HEAD_PERSONA_1 = 55,
    TYPE_MOUNT_PERSONA_1 = 56,
    TYPE_SUMMON_PERSONA_1 = 57,
    TYPE_SHAPESHIFT_PERSONA_1 = 58,
    TYPE_TAUNT_PERSONA_1 = 59,
    TYPE_HERO_EFFIGY_PERSONA_1 = 60,
    TYPE_AMBIENT_EFFECTS_PERSONA_1 = 61,
    TYPE_ABILITY_ATTACK_PERSONA_1 = 62,
    TYPE_ABILITY_1_PERSONA_1 = 63,
    TYPE_ABILITY_2_PERSONA_1 = 64,
    TYPE_ABILITY_3_PERSONA_1 = 65,
    TYPE_ABILITY_4_PERSONA_1 = 66,
    TYPE_ABILITY_ULTIMATE_PERSONA_1 = 67,
    TYPE_VOICE_PERSONA_1 = 68,
    PERSONA_1_START = 40,
    PERSONA_1_END = 68,
    TYPE_PERSONA_SELECTOR = 69,
    TYPE_COURIER = 70,
    TYPE_ANNOUNCER = 71,
    TYPE_MEGA_KILLS = 72,
    TYPE_MUSIC = 73,
    TYPE_WARD = 74,
    TYPE_HUD_SKIN = 75,
    TYPE_LOADING_SCREEN = 76,
    TYPE_WEATHER = 77,
    TYPE_HEROIC_STATUE = 78,
    TYPE_MULTIKILL_BANNER = 79,
    TYPE_CURSOR_PACK = 80,
    TYPE_TELEPORT_EFFECT = 81,
    TYPE_BLINK_EFFECT = 82,
    TYPE_EMBLEM = 83,
    TYPE_TERRAIN = 84,
    TYPE_RADIANT_CREEPS = 85,
    TYPE_DIRE_CREEPS = 86,
    TYPE_RADIANT_TOWER = 87,
    TYPE_DIRE_TOWER = 88,
    TYPE_VERSUS_SCREEN = 89,
    TYPE_STREAK_EFFECT = 90,
    TYPE_KILL_EFFECT = 91,
    TYPE_DEATH_EFFECT = 92,
    TYPE_HEAD_EFFECT = 93,
    TYPE_MAP_EFFECT = 94,
    TYPE_COURIER_EFFECT = 95,
    TYPE_RADIANT_SIEGE_CREEPS = 96,
    TYPE_DIRE_SIEGE_CREEPS = 97,
    TYPE_ROSHAN = 98,
    TYPE_TORMENTOR = 99,
    TYPE_ANCIENT = 100,
    TYPE_NONE = 101,
}

declare const MODIFIER_FUNCTION_LAST: 379;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierfunction = ModifierFunction;

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
     * Method Name: `GetModifierMoveSpeed_MinOverride`
     */
    MOVESPEED_MIN_OVERRIDE = 18,
    /**
     * Method Name: `GetModifierMoveSpeed_MaxOverride`
     */
    MOVESPEED_MAX_OVERRIDE = 19,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage`
     */
    MOVESPEED_BONUS_PERCENTAGE = 20,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Percentage_Unique`
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 21,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots`
     */
    MOVESPEED_BONUS_UNIQUE = 22,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Special_Boots_2`
     */
    MOVESPEED_BONUS_UNIQUE_2 = 23,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 24,
    /**
     * Method Name: `GetModifierMoveSpeedBonus_Constant_Unique_2`
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 25,
    /**
     * Method Name: `GetModifierMoveSpeed_Absolute`
     */
    MOVESPEED_ABSOLUTE = 26,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMin`
     */
    MOVESPEED_ABSOLUTE_MIN = 27,
    /**
     * Method Name: `GetModifierMoveSpeed_AbsoluteMax`
     */
    MOVESPEED_ABSOLUTE_MAX = 28,
    /**
     * Method Name: `GetModifierIgnoreMovespeedLimit`
     */
    IGNORE_MOVESPEED_LIMIT = 29,
    /**
     * Method Name: `GetModifierMoveSpeed_Limit`
     */
    MOVESPEED_LIMIT = 30,
    /**
     * Method Name: `GetModifierAttackSpeedBaseOverride`
     */
    ATTACKSPEED_BASE_OVERRIDE = 31,
    /**
     * Method Name: `GetModifierFixedAttackRate`
     */
    FIXED_ATTACK_RATE = 32,
    /**
     * Method Name: `GetModifierAttackSpeedBonus_Constant`
     */
    ATTACKSPEED_BONUS_CONSTANT = 33,
    /**
     * Method Name: `GetModifierAttackSpeed_Limit`
     */
    IGNORE_ATTACKSPEED_LIMIT = 34,
    /**
     * Method Name: `GetModifierCooldownReduction_Constant`
     */
    COOLDOWN_REDUCTION_CONSTANT = 35,
    /**
     * Method Name: `GetModifierManacostReduction_Constant`
     */
    MANACOST_REDUCTION_CONSTANT = 36,
    /**
     * Method Name: `GetModifierHealthcostReduction_Constant`
     */
    HEALTHCOST_REDUCTION_CONSTANT = 37,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant`
     */
    BASE_ATTACK_TIME_CONSTANT = 38,
    /**
     * Method Name: `GetModifierBaseAttackTimeConstant_Adjust`
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 39,
    /**
     * Method Name: `GetModifierBaseAttackTimePercentage`
     */
    BASE_ATTACK_TIME_PERCENTAGE = 40,
    /**
     * Method Name: `GetModifierAttackPointConstant`
     */
    ATTACK_POINT_CONSTANT = 41,
    /**
     * Method Name: `GetModifierBonusDamageOutgoing_Percentage`
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 42,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage`
     */
    DAMAGEOUTGOING_PERCENTAGE = 43,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 44,
    /**
     * Method Name: `GetModifierDamageOutgoing_Percentage_Illusion_Amplify`
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 45,
    /**
     * Method Name: `GetModifierTotalDamageOutgoing_Percentage`
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 46,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageCreep`
     */
    SPELL_AMPLIFY_PERCENTAGE_CREEP = 47,
    /**
     * Method Name: `GetModifierSpellAmplify_Percentage`
     */
    SPELL_AMPLIFY_PERCENTAGE = 48,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageUnique`
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 49,
    /**
     * Method Name: `GetModifierSpellAmplify_PercentageTarget`
     */
    SPELL_AMPLIFY_PERCENTAGE_TARGET = 50,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageSource`
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 51,
    /**
     * Method Name: `GetModifierHealAmplify_PercentageTarget`
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 52,
    /**
     * Method Name: `GetModifierHPRegen_CanBeNegative`
     */
    HP_REGEN_CAN_BE_NEGATIVE = 53,
    /**
     * Method Name: `GetModifierHPRegenAmplify_Percentage`
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 54,
    /**
     * Method Name: `GetModifierLifestealRegenAmplify_Percentage`
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 55,
    /**
     * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage`
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 56,
    /**
     * Method Name: `GetModifierSpellLifestealRegenAmplify_Percentage_Unique`
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE_UNIQUE = 57,
    /**
     * Method Name: `GetModifierMPRegenAmplify_Percentage`
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 58,
    /**
     * Method Name: `GetModifierMPRegenAmplify_Percentage_Unique`
     */
    MP_REGEN_AMPLIFY_PERCENTAGE_UNIQUE = 59,
    /**
     * Method Name: `GetModifierManaDrainAmplify_Percentage`
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 60,
    /**
     * Total amplify value is clamped to 0.
     *
     *
     *
     * Method Name: `GetModifierMPRestoreAmplify_Percentage`.
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 61,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_Percentage`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 62,
    /**
     * Method Name: `GetModifierBaseDamageOutgoing_PercentageUnique`
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 63,
    /**
     * Method Name: `GetModifierIncomingDamage_Percentage`
     */
    INCOMING_DAMAGE_PERCENTAGE = 64,
    /**
     * Method Name: `GetModifierIncomingPhysicalDamage_Percentage`
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 65,
    /**
     * This property controls 'physical' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingPhysicalDamageConstant`.
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 66,
    /**
     * This property controls 'spell' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingSpellDamageConstant`.
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 67,
    /**
     * Method Name: `GetModifierEvasion_Constant`
     */
    EVASION_CONSTANT = 68,
    /**
     * Method Name: `GetModifierNegativeEvasion_Constant`
     */
    NEGATIVE_EVASION_CONSTANT = 69,
    /**
     * Method Name: `GetModifierStatusResistance`
     */
    STATUS_RESISTANCE = 70,
    /**
     * Method Name: `GetModifierStatusResistanceStacking`
     */
    STATUS_RESISTANCE_STACKING = 71,
    /**
     * Method Name: `GetModifierStatusResistanceCaster`
     */
    STATUS_RESISTANCE_CASTER = 72,
    /**
     * Method Name: `GetModifierAvoidDamage`
     */
    AVOID_DAMAGE = 73,
    /**
     * Method Name: `GetModifierAvoidSpell`
     */
    AVOID_SPELL = 74,
    /**
     * Method Name: `GetModifierMiss_Percentage`
     */
    MISS_PERCENTAGE = 75,
    /**
     * Values above 100% are ignored.
     *
     *
     *
     * Method Name: `GetModifierPhysicalArmorBase_Percentage`.
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 76,
    /**
     * Method Name: `GetModifierPhysicalArmorTotal_Percentage`
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 77,
    /**
     * Method Name: `GetModifierPhysicalArmorBonus`
     */
    PHYSICAL_ARMOR_BONUS = 78,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUnique`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 79,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusUniqueActive`
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 80,
    /**
     * Method Name: `GetModifierPhysicalArmorBonusPost`
     */
    PHYSICAL_ARMOR_BONUS_POST = 81,
    /**
     * Method Name: `GetModifierMinPhysicalArmor`
     */
    MIN_PHYSICAL_ARMOR = 82,
    /**
     * Method Name: `GetModifierIgnorePhysicalArmor`
     */
    IGNORE_PHYSICAL_ARMOR = 83,
    /**
     * Method Name: `GetModifierMagicalResistanceBaseReduction`
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 84,
    /**
     * Method Name: `GetModifierMagicalResistanceDirectModification`
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 85,
    /**
     * Method Name: `GetModifierMagicalResistanceBonus`
     */
    MAGICAL_RESISTANCE_BONUS = 86,
    /**
     * Method Name: `GetModifierMagicalResistanceBonusIllusions`
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 87,
    /**
     * Method Name: `GetModifierMagicalResistanceBonusUnique`
     */
    MAGICAL_RESISTANCE_BONUS_UNIQUE = 88,
    /**
     * Method Name: `GetModifierMagicalResistanceDecrepifyUnique`
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 89,
    /**
     * Method Name: `GetModifierBaseRegen`
     */
    BASE_MANA_REGEN = 90,
    /**
     * Method Name: `GetModifierConstantManaRegen`
     */
    MANA_REGEN_CONSTANT = 91,
    /**
     * Method Name: `GetModifierConstantManaRegenUnique`
     */
    MANA_REGEN_CONSTANT_UNIQUE = 92,
    /**
     * Method Name: `GetModifierTotalPercentageManaRegen`
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 93,
    /**
     * Method Name: `GetModifierConstantHealthRegen`
     */
    HEALTH_REGEN_CONSTANT = 94,
    /**
     * Method Name: `GetModifierHealthRegenPercentage`
     */
    HEALTH_REGEN_PERCENTAGE = 95,
    /**
     * Method Name: `GetModifierHealthRegenPercentageUnique`
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 96,
    /**
     * Method Name: `GetModifierHealthBonus`
     */
    HEALTH_BONUS = 97,
    /**
     * Method Name: `GetModifierManaBonus`
     */
    MANA_BONUS = 98,
    /**
     * Method Name: `GetModifierExtraStrengthBonus`
     */
    EXTRA_STRENGTH_BONUS = 99,
    /**
     * Method Name: `GetModifierExtraHealthBonus`
     */
    EXTRA_HEALTH_BONUS = 100,
    /**
     * Method Name: `GetModifierExtraManaBonus`
     */
    EXTRA_MANA_BONUS = 101,
    /**
     * Method Name: `GetModifierExtraManaBonusPercentage`
     */
    EXTRA_MANA_BONUS_PERCENTAGE = 102,
    /**
     * Method Name: `GetModifierExtraHealthPercentage`
     */
    EXTRA_HEALTH_PERCENTAGE = 103,
    /**
     * Method Name: `GetModifierExtraManaPercentage`
     */
    EXTRA_MANA_PERCENTAGE = 104,
    /**
     * Method Name: `GetModifierBonusStats_Strength`
     */
    STATS_STRENGTH_BONUS = 105,
    /**
     * Method Name: `GetModifierBonusStats_Agility`
     */
    STATS_AGILITY_BONUS = 106,
    /**
     * Method Name: `GetModifierBonusStats_Intellect`
     */
    STATS_INTELLECT_BONUS = 107,
    /**
     * Method Name: `GetModifierBonusStats_Strength_Percentage`
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 108,
    /**
     * Method Name: `GetModifierBonusStats_Agility_Percentage`
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 109,
    /**
     * Method Name: `GetModifierBonusStats_Intellect_Percentage`
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 110,
    /**
     * Method Name: `GetModifierCastRangeBonus`
     */
    CAST_RANGE_BONUS = 111,
    /**
     * Method Name: `GetModifierCastRangeBonusPercentage`
     */
    CAST_RANGE_BONUS_PERCENTAGE = 112,
    /**
     * Method Name: `GetModifierCastRangeBonusTarget`
     */
    CAST_RANGE_BONUS_TARGET = 113,
    /**
     * Method Name: `GetModifierCastRangeBonusStacking`
     */
    CAST_RANGE_BONUS_STACKING = 114,
    /**
     * Method Name: `GetModifierAttackRangeOverride`
     */
    ATTACK_RANGE_BASE_OVERRIDE = 115,
    /**
     * Method Name: `GetModifierAttackRangeBonus`
     */
    ATTACK_RANGE_BONUS = 116,
    /**
     * Method Name: `GetModifierAttackRangeBonusUnique`
     */
    ATTACK_RANGE_BONUS_UNIQUE = 117,
    /**
     * Method Name: `GetModifierAttackRangeBonusPercentage`
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 118,
    /**
     * Method Name: `GetModifierMaxAttackRange`
     */
    MAX_ATTACK_RANGE = 119,
    /**
     * Method Name: `GetModifierProjectileSpeedBonus`
     */
    PROJECTILE_SPEED_BONUS = 120,
    /**
     * Method Name: `GetModifierProjectileSpeedBonusPercentage`
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 121,
    /**
     * Method Name: `GetModifierProjectileName`
     */
    PROJECTILE_NAME = 122,
    /**
     * Method Name: `ReincarnateTime`
     */
    REINCARNATION = 123,
    /**
     * Method Name: `ReincarnateSuppressFX`
     */
    REINCARNATION_SUPPRESS_FX = 124,
    /**
     * Method Name: `GetModifierConstantRespawnTime`
     */
    RESPAWNTIME = 125,
    /**
     * Method Name: `GetModifierPercentageRespawnTime`
     */
    RESPAWNTIME_PERCENTAGE = 126,
    /**
     * Method Name: `GetModifierStackingRespawnTime`
     */
    RESPAWNTIME_STACKING = 127,
    /**
     * Method Name: `GetModifierPercentageCooldown`
     */
    COOLDOWN_PERCENTAGE = 128,
    /**
     * Method Name: `GetModifierPercentageCooldownOngoing`
     */
    COOLDOWN_PERCENTAGE_ONGOING = 129,
    /**
     * Method Name: `GetModifierPercentageCasttime`
     */
    CASTTIME_PERCENTAGE = 130,
    /**
     * Method Name: `GetModifierPercentageAttackAnimTime`
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 131,
    /**
     * Method Name: `GetModifierPercentageManacost`
     */
    MANACOST_PERCENTAGE = 132,
    /**
     * Method Name: `GetModifierPercentageManacostStacking`
     */
    MANACOST_PERCENTAGE_STACKING = 133,
    /**
     * Method Name: `GetModifierPercentageHealthcost`
     */
    HEALTHCOST_PERCENTAGE = 134,
    /**
     * Method Name: `GetModifierPercentageHealthcostStacking`
     */
    HEALTHCOST_PERCENTAGE_STACKING = 135,
    /**
     * Method Name: `GetModifierConstantDeathGoldCost`
     */
    DEATHGOLDCOST = 136,
    /**
     * Method Name: `GetModifierPercentageDeathGoldCost`
     */
    PERCENTAGE_DEATHGOLDCOST = 137,
    /**
     * Method Name: `GetModifierPercentageExpRateBoost`
     */
    EXP_RATE_BOOST = 138,
    /**
     * Method Name: `GetModifierPercentageGoldRateBoost`
     */
    GOLD_RATE_BOOST = 139,
    /**
     * Method Name: `GetModifierPreAttack_CriticalStrike`
     */
    PREATTACK_CRITICALSTRIKE = 140,
    /**
     * Method Name: `GetModifierPreAttack_Target_CriticalStrike`
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 141,
    /**
     * Method Name: `GetModifierMagical_ConstantBlock`
     */
    MAGICAL_CONSTANT_BLOCK = 142,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlock`
     */
    PHYSICAL_CONSTANT_BLOCK = 143,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockSpecial`
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 144,
    /**
     * Method Name: `GetModifierInnateDamageBlockPctOverride`
     */
    INNATE_DAMAGE_BLOCK_PCT_OVERRIDE = 145,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockUnavoidablePreArmor`
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 146,
    /**
     * Method Name: `GetModifierTotal_ConstantBlock`
     */
    TOTAL_CONSTANT_BLOCK = 147,
    /**
     * Method Name: `GetOverrideAnimation`
     */
    OVERRIDE_ANIMATION = 148,
    /**
     * Method Name: `GetOverrideAnimationRate`
     */
    OVERRIDE_ANIMATION_RATE = 149,
    /**
     * Method Name: `GetAbsorbSpell`
     */
    ABSORB_SPELL = 150,
    /**
     * Method Name: `GetReflectSpell`
     */
    REFLECT_SPELL = 151,
    /**
     * Method Name: `GetDisableAutoAttack`
     */
    DISABLE_AUTOATTACK = 152,
    /**
     * Method Name: `GetBonusDayVision`
     */
    BONUS_DAY_VISION = 153,
    /**
     * Method Name: `GetBonusDayVisionPercentage`
     */
    BONUS_DAY_VISION_PERCENTAGE = 154,
    /**
     * Method Name: `GetBonusNightVision`
     */
    BONUS_NIGHT_VISION = 155,
    /**
     * Method Name: `GetBonusNightVisionUnique`
     */
    BONUS_NIGHT_VISION_UNIQUE = 156,
    /**
     * Method Name: `GetBonusVisionPercentage`
     */
    BONUS_VISION_PERCENTAGE = 157,
    /**
     * Method Name: `GetFixedDayVision`
     */
    FIXED_DAY_VISION = 158,
    /**
     * Method Name: `GetFixedNightVision`
     */
    FIXED_NIGHT_VISION = 159,
    /**
     * Method Name: `GetMinHealth`
     */
    MIN_HEALTH = 160,
    /**
     * Method Name: `GetMinMana`
     */
    MIN_MANA = 161,
    /**
     * Method Name: `GetAbsoluteNoDamagePhysical`
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 162,
    /**
     * Method Name: `GetAbsoluteNoDamageMagical`
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 163,
    /**
     * Method Name: `GetAbsoluteNoDamagePure`
     */
    ABSOLUTE_NO_DAMAGE_PURE = 164,
    /**
     * Method Name: `GetIsIllusion`
     */
    IS_ILLUSION = 165,
    /**
     * Method Name: `GetModifierIllusionLabel`
     */
    ILLUSION_LABEL = 166,
    /**
     * Method Name: `GetModifierStrongIllusion`
     */
    STRONG_ILLUSION = 167,
    /**
     * Method Name: `GetModifierSuperIllusion`
     */
    SUPER_ILLUSION = 168,
    /**
     * Method Name: `GetModifierSuperIllusionWithUltimate`
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 169,
    /**
     * Method Name: `GetModifierXPDuringDeath`
     */
    XP_DURING_DEATH = 170,
    /**
     * Method Name: `GetModifierTurnRate_Percentage`
     */
    TURN_RATE_PERCENTAGE = 171,
    /**
     * Method Name: `GetModifierTurnRate_Override`
     */
    TURN_RATE_OVERRIDE = 172,
    /**
     * Method Name: `GetDisableHealing`
     */
    DISABLE_HEALING = 173,
    /**
     * Method Name: `GetDisableManaGain`
     */
    DISABLE_MANA_GAIN = 174,
    /**
     * Method Name: `GetAlwaysAllowAttack`
     */
    ALWAYS_ALLOW_ATTACK = 175,
    /**
     * Method Name: `GetAllowEtherealAttack`
     */
    ALWAYS_ETHEREAL_ATTACK = 176,
    /**
     * Method Name: `GetOverrideAttackMagical`
     */
    OVERRIDE_ATTACK_MAGICAL = 177,
    /**
     * Method Name: `GetModifierUnitStatsNeedsRefresh`
     */
    UNIT_STATS_NEEDS_REFRESH = 178,
    BOUNTY_CREEP_MULTIPLIER = 179,
    BOUNTY_OTHER_MULTIPLIER = 180,
    /**
     * Method Name: `GetModifierUnitDisllowUpgrading`
     */
    UNIT_DISALLOW_UPGRADING = 181,
    /**
     * Method Name: `GetModifierDodgeProjectile`
     */
    DODGE_PROJECTILE = 182,
    /**
     * Method Name: `GetTriggerCosmeticAndEndAttack`
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 183,
    /**
     * Method Name: `GetModifierMaxDebuffDuration`
     */
    MAX_DEBUFF_DURATION = 184,
    /**
     * Method Name: `GetPrimaryStatDamageMultiplier`
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 185,
    /**
     * Method Name: `GetModifierPreAttack_DeadlyBlow`
     */
    PREATTACK_DEADLY_BLOW = 186,
    /**
     * Method Name: `GetAlwaysAutoAttackWhileHoldPosition`
     */
    ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 187,
    /**
     * Method Name: `GetPhysicalArmorPiercingPercentageTarget`
     */
    PHYSICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 188,
    /**
     * Method Name: `GetMagicalArmorPiercingPercentageTarget`
     */
    MAGICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 189,
    /**
     * Method Name: `GetCriticalStrikeBonus`
     */
    CRITICAL_STRIKE_BONUS = 190,
    /**
     * Method Name: `GetConvertAttackPhysicalToPure`
     */
    CONVERT_ATTACK_PHYSICAL_TO_PURE = 191,
    /**
     * Method Name: `OnSpellTargetReady`
     */
    ON_SPELL_TARGET_READY = 192,
    /**
     * Method Name: `OnAttackRecord`
     */
    ON_ATTACK_RECORD = 193,
    /**
     * Method Name: `OnAttackStart`
     */
    ON_ATTACK_START = 194,
    /**
     * Method Name: `OnAttack`
     */
    ON_ATTACK = 195,
    /**
     * Method Name: `OnAttackLanded`
     */
    ON_ATTACK_LANDED = 196,
    /**
     * Method Name: `OnAttackFail`
     */
    ON_ATTACK_FAIL = 197,
    /**
     * Happens even if attack can't be issued.
     *
     *
     *
     * Method Name: `OnAttackAllied`.
     */
    ON_ATTACK_ALLIED = 198,
    /**
     * Method Name: `OnProjectileDodge`
     */
    ON_PROJECTILE_DODGE = 199,
    /**
     * Method Name: `OnOrder`
     */
    ON_ORDER = 200,
    /**
     * Method Name: `OnUnitMoved`
     */
    ON_UNIT_MOVED = 201,
    /**
     * Method Name: `OnAbilityStart`
     */
    ON_ABILITY_START = 202,
    /**
     * Method Name: `OnAbilityExecuted`
     */
    ON_ABILITY_EXECUTED = 203,
    /**
     * Method Name: `OnAbilityFullyCast`
     */
    ON_ABILITY_FULLY_CAST = 204,
    /**
     * Method Name: `OnBreakInvisibility`
     */
    ON_BREAK_INVISIBILITY = 205,
    /**
     * Method Name: `OnAbilityEndChannel`
     */
    ON_ABILITY_END_CHANNEL = 206,
    ON_PROCESS_UPGRADE = 207,
    ON_REFRESH = 208,
    /**
     * Method Name: `OnTakeDamage`
     */
    ON_TAKEDAMAGE = 209,
    /**
     * Method Name: `OnDamagePrevented`
     */
    ON_DEATH_PREVENTED = 210,
    /**
     * Method Name: `OnStateChanged`
     */
    ON_STATE_CHANGED = 211,
    ON_ORB_EFFECT = 212,
    /**
     * Method Name: `OnProcessCleave`
     */
    ON_PROCESS_CLEAVE = 213,
    /**
     * Method Name: `OnDamageCalculated`
     */
    ON_DAMAGE_CALCULATED = 214,
    /**
     * Method Name: `OnMagicDamageCalculated`
     */
    ON_MAGIC_DAMAGE_CALCULATED = 215,
    /**
     * Method Name: `OnAttacked`
     */
    ON_ATTACKED = 216,
    /**
     * Method Name: `OnDeath`
     */
    ON_DEATH = 217,
    /**
     * Method Name: `OnDeathCompleted`
     */
    ON_DEATH_COMPLETED = 218,
    /**
     * Method Name: `OnRespawn`
     */
    ON_RESPAWN = 219,
    /**
     * Method Name: `OnSpentMana`
     */
    ON_SPENT_MANA = 220,
    /**
     * Method Name: `OnSpentHealth`
     */
    ON_SPENT_HEALTH = 221,
    /**
     * Method Name: `OnTeleporting`
     */
    ON_TELEPORTING = 222,
    /**
     * Method Name: `OnTeleported`
     */
    ON_TELEPORTED = 223,
    /**
     * Method Name: `OnSetLocation`
     */
    ON_SET_LOCATION = 224,
    /**
     * Method Name: `OnHealthGained`
     */
    ON_HEALTH_GAINED = 225,
    /**
     * Method Name: `OnManaGained`
     */
    ON_MANA_GAINED = 226,
    /**
     * Method Name: `OnTakeDamageKillCredit`
     */
    ON_TAKEDAMAGE_KILLCREDIT = 227,
    /**
     * Method Name: `OnHeroKilled`
     */
    ON_HERO_KILLED = 228,
    /**
     * Method Name: `OnHealReceived`
     */
    ON_HEAL_RECEIVED = 229,
    /**
     * Method Name: `OnBuildingKilled`
     */
    ON_BUILDING_KILLED = 230,
    /**
     * Method Name: `OnModelChanged`
     */
    ON_MODEL_CHANGED = 231,
    /**
     * Method Name: `OnModifierAdded`
     */
    ON_MODIFIER_ADDED = 232,
    /**
     * Method Name: `OnModifierRemoved`
     */
    ON_MODIFIER_REMOVED = 233,
    /**
     * Method Name: `OnTooltip`
     */
    TOOLTIP = 234,
    /**
     * Method Name: `GetModifierModelChange`
     */
    MODEL_CHANGE = 235,
    /**
     * Method Name: `GetModifierModelScale`
     */
    MODEL_SCALE = 236,
    /**
     * Method Name: `GetModifierModelScaleAnimateTime`
     */
    MODEL_SCALE_ANIMATE_TIME = 237,
    /**
     * Method Name: `GetModifierModelScaleUseInOutEase`
     */
    MODEL_SCALE_USE_IN_OUT_EASE = 238,
    /**
     * Method Name: `GetModifierModelScaleConstant`
     */
    MODEL_SCALE_CONSTANT = 239,
    /**
     * Applies scepter when this property is active
     *
     *
     *
     * Method Name: `GetModifierScepter`.
     */
    IS_SCEPTER = 240,
    /**
     * Applies shard when this property is active
     *
     *
     *
     * Method Name: `GetModifierShard`.
     */
    IS_SHARD = 241,
    /**
     * Method Name: `GetModifierRadarCooldownReduction`
     */
    RADAR_COOLDOWN_REDUCTION = 242,
    /**
     * Method Name: `GetActivityTranslationModifiers`
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 243,
    /**
     * Method Name: `GetAttackSound`
     */
    TRANSLATE_ATTACK_SOUND = 244,
    /**
     * Method Name: `GetUnitLifetimeFraction`
     */
    LIFETIME_FRACTION = 245,
    /**
     * Method Name: `GetModifierProvidesFOWVision`
     */
    PROVIDES_FOW_POSITION = 246,
    /**
     * Method Name: `GetModifierSpellsRequireHP`
     */
    SPELLS_REQUIRE_HP = 247,
    /**
     * Method Name: `GetModifierConvertManaCostToHealthCost`
     */
    CONVERT_MANA_COST_TO_HEALTH_COST = 248,
    /**
     * Method Name: `GetForceDrawOnMinimap`
     */
    FORCE_DRAW_MINIMAP = 249,
    /**
     * Method Name: `GetModifierDisableTurning`
     */
    DISABLE_TURNING = 250,
    /**
     * Method Name: `GetModifierIgnoreCastAngle`
     */
    IGNORE_CAST_ANGLE = 251,
    /**
     * Method Name: `GetModifierChangeAbilityValue`
     */
    CHANGE_ABILITY_VALUE = 252,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecial`
     */
    OVERRIDE_ABILITY_SPECIAL = 253,
    /**
     * Method Name: `GetModifierOverrideAbilitySpecialValue`
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 254,
    /**
     * Method Name: `GetModifierAbilityLayout`
     */
    ABILITY_LAYOUT = 255,
    /**
     * Method Name: `OnDominated`
     */
    ON_DOMINATED = 256,
    /**
     * Method Name: `OnKill`
     */
    ON_KILL = 257,
    /**
     * Method Name: `OnAssist`
     */
    ON_ASSIST = 258,
    /**
     * Method Name: `GetModifierTempestDouble`
     */
    TEMPEST_DOUBLE = 259,
    /**
     * Method Name: `PreserveParticlesOnModelChanged`
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 260,
    /**
     * Method Name: `OnAttackFinished`
     */
    ON_ATTACK_FINISHED = 261,
    /**
     * Method Name: `GetModifierIgnoreCooldown`
     */
    IGNORE_COOLDOWN = 262,
    /**
     * Method Name: `GetModifierCanAttackTrees`
     */
    CAN_ATTACK_TREES = 263,
    /**
     * Method Name: `GetVisualZDelta`
     */
    VISUAL_Z_DELTA = 264,
    /**
     * Method Name: `GetVisualZSpeedBaseOverride`
     */
    VISUAL_Z_SPEED_BASE_OVERRIDE = 265,
    INCOMING_DAMAGE_ILLUSION = 266,
    /**
     * Method Name: `GetModifierNoVisionOfAttacker`
     */
    DONT_GIVE_VISION_OF_ATTACKER = 267,
    /**
     * Method Name: `OnTooltip2`
     */
    TOOLTIP2 = 268,
    /**
     * Method Name: `OnAttackRecordDestroy`
     */
    ON_ATTACK_RECORD_DESTROY = 269,
    /**
     * Method Name: `OnProjectileObstructionHit`
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 270,
    /**
     * Method Name: `GetSuppressTeleport`
     */
    SUPPRESS_TELEPORT = 271,
    /**
     * Method Name: `OnAttackCancelled`
     */
    ON_ATTACK_CANCELLED = 272,
    /**
     * Method Name: `GetSuppressCleave`
     */
    SUPPRESS_CLEAVE = 273,
    /**
     * Method Name: `BotAttackScoreBonus`
     */
    BOT_ATTACK_SCORE_BONUS = 274,
    /**
     * Method Name: `GetModifierAttackSpeedReductionPercentage`
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 275,
    /**
     * Method Name: `GetModifierMoveSpeedReductionPercentage`
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 276,
    ATTACK_WHILE_MOVING_TARGET = 277,
    /**
     * Method Name: `GetModifierAttackSpeedPercentage`
     */
    ATTACKSPEED_PERCENTAGE = 278,
    /**
     * Method Name: `OnAttemptProjectileDodge`
     */
    ON_ATTEMPT_PROJECTILE_DODGE = 279,
    /**
     * Method Name: `OnPreDebuffApplied`
     */
    ON_PREDEBUFF_APPLIED = 280,
    /**
     * Method Name: `GetModifierPercentageCooldownStacking`
     */
    COOLDOWN_PERCENTAGE_STACKING = 281,
    /**
     * Method Name: `GetModifierSpellRedirectTarget`
     */
    SPELL_REDIRECT_TARGET = 282,
    /**
     * Method Name: `GetModifierTurnRateConstant`
     */
    TURN_RATE_CONSTANT = 283,
    /**
     * Method Name: `GetModifierIsPackRat`
     */
    PACK_RAT = 284,
    /**
     * Method Name: `GetModifierPhysicalDamageOutgoing_Percentage`
     */
    PHYSICALDAMAGEOUTGOING_PERCENTAGE = 285,
    /**
     * Method Name: `GetModifierKnockbackAmplification_Percentage`
     */
    KNOCKBACK_AMPLIFICATION_PERCENTAGE = 286,
    /**
     * Return value is a count of pips.
     *
     *
     *
     * Method Name: `GetModifierHealthBarPips`.
     */
    HEALTHBAR_PIPS = 287,
    /**
     * This property controls 'universal' shield, if defined both on client and
     * server. Return value on client should be current shield health, as a positive
     * integer, on server - amount of damage blocked.
     *
     *
     *
     * Method Name: `GetModifierIncomingDamageConstant`.
     */
    INCOMING_DAMAGE_CONSTANT = 288,
    /**
     * Method Name: `OnSpellAppliedSuccessfully`
     */
    SPELL_APPLIED_SUCCESSFULLY = 289,
    /**
     * Method Name: `GetModifierAvoidDamageAfterReductions`
     */
    AVOID_DAMAGE_AFTER_REDUCTIONS = 290,
    /**
     * Method Name: `GetModifierPropetyFailAttack`
     */
    FAIL_ATTACK = 291,
    /**
     * Method Name: `GetModifierPrereduceIncomingDamage_Mult`
     */
    PREREDUCE_INCOMING_DAMAGE_MULT = 292,
    /**
     * Method Name: `GetModifierSuppressFullscreenDeathFX`
     */
    SUPPRESS_FULLSCREEN_DEATH_FX = 293,
    /**
     * Method Name: `MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST`
     */
    INCOMING_DAMAGE_CONSTANT_POST = 294,
    /**
     * Method Name: `GetModifierDamageOutgoing_PercentageMultiplicative`
     */
    DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE = 295,
    /**
     * Method Name: `GetModifierTickGold_Multiplier`
     */
    TICK_GOLD_MULTIPLIER = 296,
    /**
     * Method Name: `GEtModifierSlowResistance_Unique`
     */
    SLOW_RESISTANCE_UNIQUE = 297,
    /**
     * Method Name: `GetModifierSlowResistance_Stacking`
     */
    SLOW_RESISTANCE_STACKING = 298,
    /**
     * Method Name: `GetModifierSlowResistanceAppliesToAttacks`
     */
    SLOW_RESISTANCE_APPLIES_TO_ATTACKS = 299,
    /**
     * Method Name: `GetModifierAoEBonusPercentage`
     */
    AOE_BONUS_PERCENTAGE = 300,
    /**
     * Method Name: `GetModifierProjectileSpeed`
     */
    PROJECTILE_SPEED = 301,
    /**
     * Method Name: `GetModifierProjectileSpeedTarget`
     */
    PROJECTILE_SPEED_TARGET = 302,
    /**
     * Method Name: `GetModifierBecomeStrength`
     */
    BECOME_STRENGTH = 303,
    /**
     * Method Name: `GetModifierBecomeAgility`
     */
    BECOME_AGILITY = 304,
    /**
     * Method Name: `GetModifierBecomeIntelligence`
     */
    BECOME_INTELLIGENCE = 305,
    /**
     * Method Name: `GetModifierBecomeUniversal`
     */
    BECOME_UNIVERSAL = 306,
    /**
     * Method Name: `OnForceProcMagicStick`
     */
    ON_FORCE_PROC_MAGIC_STICK = 307,
    /**
     * Method Name: `OnDamageHPLoss`
     */
    ON_DAMAGE_HPLOSS = 308,
    /**
     * Method Name: `GetModifierShareXPRune`
     */
    SHARE_XPRUNE = 309,
    /**
     * Method Name: `GetModifierXPFountainCountdownTimeOverride`
     */
    XP_FOUNTAIN_COUNTDOWN_TIME_OVERRIDE = 310,
    /**
     * Method Name: `GetModifierNoFreeTPScrollOnDeath`
     */
    NO_FREE_TP_SCROLL_ON_DEATH = 311,
    /**
     * Method Name: `GetModifierHasBonusNeutralItemChoice`
     */
    HAS_BONUS_NEUTRAL_ITEM_CHOICE = 312,
    /**
     * Method Name: `GetModifierPreserveNeutralItemPassives`
     */
    PRESERVE_NEUTRAL_ITEM_PASSIVES = 313,
    /**
     * Method Name: `GetModifierForceMaxHealth`
     */
    FORCE_MAX_HEALTH = 314,
    /**
     * Method Name: `GetModifierForceMaxMana`
     */
    FORCE_MAX_MANA = 315,
    /**
     * Method Name: `GetModifierAoEBonusConstant`
     */
    AOE_BONUS_CONSTANT = 316,
    /**
     * Method Name: `GetModifierAoEBonusConstantStacking`
     */
    AOE_BONUS_CONSTANT_STACKING = 317,
    /**
     * Method Name: `OnTakeDamagePostUnavoidableBlock`
     */
    ON_TAKEDAMAGE_POST_UNAVOIDABLE_BLOCK = 318,
    /**
     * Method Name: `OnMuteDamageAbilities`
     */
    ON_MUTE_DAMAGE_ABILITIES = 319,
    /**
     * Method Name: `GetSuppressCrit`
     */
    SUPPRESS_CRIT = 320,
    /**
     * Method Name: `GetModifierAbilityPoints`
     */
    ABILITY_POINTS = 321,
    /**
     * Method Name: `GetModifierBuybackPenaltyPercent`
     */
    BUYBACK_PENALTY_PERCENT = 322,
    /**
     * Method Name: `GetModifierItemSellbackCost`
     */
    ITEM_SELLBACK_COST = 323,
    /**
     * Method Name: `GetModifierDisassembleAnything`
     */
    DISASSEMBLE_ANYTHING = 324,
    /**
     * Method Name: `GetModifierFixedManaRegen`
     */
    FIXED_MANA_REGEN = 325,
    /**
     * Method Name: `GetModifierBonusUphillMissChance`
     */
    BONUS_UPHILL_MISS_CHANCE = 326,
    /**
     * Method Name: `GetModifierCreepDenyPercent`
     */
    CREEP_DENY_PERCENT = 327,
    /**
     * Method Name: `GetModifierAttackSpeedAbsoluteMax`
     */
    ATTACKSPEED_ABSOLUTE_MAX = 328,
    /**
     * Method Name: `GetModifierFoWTeam`
     */
    FOW_TEAM = 329,
    /**
     * Method Name: `OnHeroBeginDying`
     */
    ON_HERO_BEGIN_DYING = 330,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BONUS_LOTUS_HEAL = 331,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_HP_REGEN_PER_STR_BONUS_PERCENTAGE = 332,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_ARMOR_PER_AGI_BONUS_PERCENTAGE = 333,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_MP_REGEN_PER_INT_BONUS_PERCENTAGE = 334,
    /**
     * Method Name: `GetModifierBonusLotusHeal`
     */
    BASE_MRES_PER_INT_BONUS_PERCENTAGE = 335,
    /**
     * Method Name: `OnDayStarted`
     */
    ON_DAY_STARTED = 336,
    /**
     * Method Name: `OnNightStarted`
     */
    ON_NIGHT_STARTED = 337,
    /**
     * Method Name: `GetModifierCreateBonusIllusionChance`
     */
    CREATE_BONUS_ILLUSION_CHANCE = 338,
    /**
     * Method Name: `GetModifierCreateBonusIllusionCount`
     */
    CREATE_BONUS_ILLUSION_COUNT = 339,
    /**
     * Method Name: `GetModofierPropertyPseudoRandomBonus`
     */
    PSEUDORANDOM_BONUS = 340,
    /**
     * Method Name: `GetModifierAttackHeightBonus`
     */
    ATTACK_HEIGHT_BONUS = 341,
    /**
     * Method Name: `GetSkipAttackRegulator`
     */
    SKIP_ATTACK_REGULATOR = 342,
    /**
     * Method Name: `GetModifierMiss_Percentage_Target`
     */
    MISS_PERCENTAGE_TARGET = 343,
    /**
     * Method Name: `GetModifierAdditionalNutralItemDrops`
     */
    ADDITIONAL_NEUTRAL_ITEM_DROPS = 344,
    /**
     * Method Name: `GetModifierKillStreakBonusGoldPercentage`
     */
    KILL_STREAK_BONUS_GOLD_PERCENTAGE = 345,
    /**
     * Method Name: `GetModifierHPRegenMultiplierPreAmplification`
     */
    HP_REGEN_MULTIPLIER_PRE_AMPLIFICATION = 346,
    /**
     * Method Name: `GetModifierHeroFacetOverride`
     */
    HEROFACET_OVERRIDE = 347,
    /**
     * Method Name: `OnTreeCutDown`
     */
    ON_TREE_CUT_DOWN = 348,
    /**
     * Method Name: `OnCleaveAttackLanded`
     */
    ON_CLEAVE_ATTACK_LANDED = 349,
    /**
     * Method Name: `MinAttributeLevel`
     */
    MIN_ATTRIBUTE_LEVEL = 350,
    /**
     * Method Name: `GetTierTokenReroll`
     */
    TIER_TOKEN_REROLL = 351,
    /**
     * Method Name: `GetVisionDegreeRestriction`
     */
    VISION_DEGREES_RESTRICTION = 352,
    /**
     * Method Name: `GetModifierTotal_ConstantBlockStacking`
     */
    TOTAL_CONSTANT_BLOCK_STACKING = 353,
    /**
     * Method Name: `GetModifierInventorySlotRestricted`
     */
    INVENTORY_SLOT_RESTRICTED = 354,
    /**
     * Method Name: `OnTierTokenRerolled`
     */
    ON_TIER_TOKEN_REROLLED = 355,
    /**
     * Method Name: `GetRedirectSpell`
     */
    REDIRECT_SPELL = 356,
    /**
     * Method Name: `GetBaseAttackPostBonus`
     */
    BASEATTACK_POSTBONUS = 357,
    /**
     * Method Name: `OnFoWTeamChanged`
     */
    ON_FOW_TEAM_CHANGED = 358,
    /**
     * Method Name: `GetSuppressAttackProcs`
     */
    SUPPRESS_ATTACK_PROCS = 359,
    /**
     * Method Name: `OnAbilityToggled`
     */
    ON_ABILITY_TOGGLED = 360,
    /**
     * Method Name: `GetModifierAvoidAttackProcs`
     */
    AVOID_ATTACK_PROCS = 361,
    /**
     * Method Name: `OnRuneSpawn`
     */
    ON_RUNE_SPAWN = 362,
    /**
     * Method Name: `GetModifierProperty_PhysicalLifesteal`
     */
    PHYSICAL_LIFESTEAL = 363,
    /**
     * Method Name: `GetModifierProperty_MagicalLifesteal`
     */
    MAGICAL_LIFESTEAL = 364,
    /**
     * Method Name: `OnPureDamageCalculated`
     */
    ON_PURE_DAMAGE_CALCULATED = 365,
    /**
     * Method Name: `GetModifierNeutralTrinketOptions`
     */
    NEUTRAL_TRINKET_OPTIONS = 366,
    /**
     * Method Name: `GetModifierNeutralEnhancementOptions`
     */
    NEUTRAL_ENHANCEMENT_OPTIONS = 367,
    /**
     * Method Name: `GetModifierMoveSpeedMax_BonusConstant`
     */
    MOVESPEED_MAX_BONUS_CONSTANT = 368,
    /**
     * Method Name: `GetModifierMoveSpeedPostMultiplierBonus_Constant `
     */
    MOVESPEED_POST_MULTIPLIER_BONUS_CONSTANT = 369,
    /**
     * Method Name: `GetModifierPropertyForbidIllusions`
     */
    FORBID_ILLUSIONS = 370,
    /**
     * Method Name: `GetModifierPropertyManacostOverride`
     */
    MANACOST_OVERRIDE = 371,
    /**
     * Method Name: `GetModifierPropertyRestorationAmplification`
     */
    RESTORATION_AMPLIFICATION = 372,
    /**
     * Method Name: `GetModifierPropertyRestorationAmplificationUnique`
     */
    RESTORATION_AMPLIFICATION_UNIQUE = 373,
    /**
     * Method Name: `GetModifierPropertyHealingAmplificationUnique`
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE_UNIQUE = 374,
    /**
     * Method Name: `GetSuppressIncomingCrit`
     */
    SUPPRESS_INCOMING_CRIT = 375,
    /**
     * Method Name: `GetModifierPropertyUpgradeNeutralArtifacts`
     */
    UPGRADE_NEUTRAL_ARTIFACTS = 376,
    /**
     * Method Name: `GetModifierPropertyConsumableUseSpeed`
     */
    CONSUMABLE_USE_SPEED = 377,
    FORCE_NETWORK_TRANSMIT = 378,
    INVALID = 65535,
}

declare const MODIFIER_STATE_LAST: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierstate = ModifierState;

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
    ALLOW_PATHING_THROUGH_BASE_BLOCKER = 57,
    IGNORING_MOVE_ORDERS = 58,
    ATTACKS_ARE_MELEE = 59,
    CAN_USE_BACKPACK_ITEMS = 60,
    CASTS_IGNORE_CHANNELING = 61,
    ATTACKS_DONT_REVEAL = 62,
    NEUTRALS_DONT_ATTACK = 63,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAModifierAttribute_t = ModifierAttribute;

declare enum ModifierAttribute {
    NONE = 0,
    PERMANENT = 1,
    MULTIPLE = 2,
    IGNORE_INVULNERABLE = 4,
    AURA_PRIORITY = 8,
    IGNORE_DODGE = 16,
}

declare enum Attributes {
    STRENGTH = 0,
    AGILITY = 1,
    INTELLECT = 2,
    ALL = 3,
    MAX = 4,
    INVALID = -1,
}

declare const MAX_PATTACH_TYPES: 16;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment_t = ParticleAttachment;

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
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_MOTION_CONTROLLER_PRIORITY = MotionControllerPriority;

declare enum MotionControllerPriority {
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
type DOTASpeechType_t = SpeechType;

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

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAAbilitySpeakTrigger_t = AbilitySpeakTrigger;

declare enum AbilitySpeakTrigger {
    START_ACTION_PHASE = 0,
    CAST = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaCustomUIType_t = CustomUiType;

declare enum CustomUiType {
    HUD = 0,
    HERO_SELECTION = 1,
    PREGAME_STRATEGY = 2,
    GAME_INFO = 3,
    GAME_SETUP = 4,
    FLYOUT_SCOREBOARD = 5,
    HUD_TOP_BAR = 6,
    END_SCREEN = 7,
    COUNT = 8,
    INVALID = -1,
}

declare const DOTA_DEFAULT_UI_ELEMENT_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaDefaultUIElement_t = DefaultUiElement;

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

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type PlayerUltimateStateOrTime_t = PlayerUltimateStateOrTime;

declare enum PlayerUltimateStateOrTime {
    READY = 0,
    NO_MANA = -1,
    NOT_LEVELED = -2,
    HIDDEN = -3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type PlayerOrderIssuer_t = PlayerOrderIssuer;

declare enum PlayerOrderIssuer {
    SELECTED_UNITS = 0,
    CURRENT_UNIT_ONLY = 1,
    HERO_ONLY = 2,
    PASSED_UNIT_ONLY = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type OrderQueueBehavior_t = OrderQueueBehavior;

declare enum OrderQueueBehavior {
    DEFAULT = 0,
    NEVER = 1,
    ALWAYS = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type CLICK_BEHAVIORS = ClickBehaviors;

declare enum ClickBehaviors {
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

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult_t = AbilityLearnResult;

declare enum AbilityLearnResult {
    CAN_BE_UPGRADED = 0,
    CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    CANNOT_BE_UPGRADED_AT_MAX = 2,
    CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    NOT_LEARNABLE = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAKeybindCommand_t = KeybindCommand;

declare enum KeybindCommand {
    KEYBIND_NONE = 0,
    KEYBIND_FIRST = 1,
    KEYBIND_CAMERA_UP = 1,
    KEYBIND_CAMERA_DOWN = 2,
    KEYBIND_CAMERA_LEFT = 3,
    KEYBIND_CAMERA_RIGHT = 4,
    KEYBIND_CAMERA_GRIP = 5,
    KEYBIND_CAMERA_YAW_GRIP = 6,
    KEYBIND_CAMERA_SAVED_POSITION_1 = 7,
    KEYBIND_CAMERA_SAVED_POSITION_2 = 8,
    KEYBIND_CAMERA_SAVED_POSITION_3 = 9,
    KEYBIND_CAMERA_SAVED_POSITION_4 = 10,
    KEYBIND_CAMERA_SAVED_POSITION_5 = 11,
    KEYBIND_CAMERA_SAVED_POSITION_6 = 12,
    KEYBIND_CAMERA_SAVED_POSITION_7 = 13,
    KEYBIND_CAMERA_SAVED_POSITION_8 = 14,
    KEYBIND_CAMERA_SAVED_POSITION_9 = 15,
    KEYBIND_CAMERA_SAVED_POSITION_10 = 16,
    KEYBIND_HERO_ATTACK = 17,
    KEYBIND_HERO_MOVE = 18,
    KEYBIND_HERO_MOVE_DIRECTION = 19,
    KEYBIND_PATROL = 20,
    KEYBIND_HERO_STOP = 21,
    KEYBIND_HERO_HOLD = 22,
    KEYBIND_HERO_SELECT = 23,
    KEYBIND_COURIER_SELECT = 24,
    KEYBIND_COURIER_DELIVER = 25,
    KEYBIND_COURIER_BURST = 26,
    KEYBIND_COURIER_SHIELD = 27,
    KEYBIND_PAUSE = 28,
    SELECT_ALL = 29,
    SELECT_ALL_OTHERS = 30,
    RECENT_EVENT = 31,
    KEYBIND_CHAT_TEAM = 32,
    KEYBIND_CHAT_GLOBAL = 33,
    KEYBIND_CHAT_TEAM_2 = 34,
    KEYBIND_CHAT_GLOBAL_2 = 35,
    KEYBIND_CHAT_VOICE_PARTY = 36,
    KEYBIND_CHAT_VOICE_TEAM = 37,
    KEYBIND_CHAT_WHEEL = 38,
    KEYBIND_CHAT_WHEEL_2 = 39,
    KEYBIND_CHAT_WHEEL_CARE = 40,
    KEYBIND_CHAT_WHEEL_BACK = 41,
    KEYBIND_CHAT_WHEEL_NEED_WARDS = 42,
    KEYBIND_CHAT_WHEEL_STUN = 43,
    KEYBIND_CHAT_WHEEL_HELP = 44,
    KEYBIND_CHAT_WHEEL_GET_PUSH = 45,
    KEYBIND_CHAT_WHEEL_GOOD_JOB = 46,
    KEYBIND_CHAT_WHEEL_MISSING = 47,
    KEYBIND_CHAT_WHEEL_MISSING_TOP = 48,
    KEYBIND_CHAT_WHEEL_MISSING_MIDDLE = 49,
    KEYBIND_CHAT_WHEEL_MISSING_BOTTOM = 50,
    KEYBIND_HERO_CHAT_WHEEL = 51,
    KEYBIND_SPRAY_WHEEL = 52,
    KEYBIND_ABILITY_PRIMARY_1 = 53,
    KEYBIND_ABILITY_PRIMARY_2 = 54,
    KEYBIND_ABILITY_PRIMARY_3 = 55,
    KEYBIND_ABILITY_SECONDARY_1 = 56,
    KEYBIND_ABILITY_SECONDARY_2 = 57,
    KEYBIND_ABILITY_ULTIMATE = 58,
    KEYBIND_TALENT_UPGRADE_LEFT = 59,
    KEYBIND_TALENT_UPGRADE_RIGHT = 60,
    KEYBIND_TALENT_UPGRADE_ATTRIBUTE = 61,
    KEYBIND_ABILITY_PRIMARY_1_QUICKCAST = 62,
    KEYBIND_ABILITY_PRIMARY_2_QUICKCAST = 63,
    KEYBIND_ABILITY_PRIMARY_3_QUICKCAST = 64,
    KEYBIND_ABILITY_SECONDARY_1_QUICKCAST = 65,
    KEYBIND_ABILITY_SECONDARY_2_QUICKCAST = 66,
    KEYBIND_ABILITY_ULTIMATE_QUICKCAST = 67,
    KEYBIND_ABILITY_PRIMARY_1_EXPLICIT_AUTOCAST = 68,
    KEYBIND_ABILITY_PRIMARY_2_EXPLICIT_AUTOCAST = 69,
    KEYBIND_ABILITY_PRIMARY_3_EXPLICIT_AUTOCAST = 70,
    KEYBIND_ABILITY_SECONDARY_1_EXPLICIT_AUTOCAST = 71,
    KEYBIND_ABILITY_SECONDARY_2_EXPLICIT_AUTOCAST = 72,
    KEYBIND_ABILITY_ULTIMATE_EXPLICIT_AUTOCAST = 73,
    KEYBIND_ABILITY_PRIMARY_1_QUICKCAST_AUTOCAST = 74,
    KEYBIND_ABILITY_PRIMARY_2_QUICKCAST_AUTOCAST = 75,
    KEYBIND_ABILITY_PRIMARY_3_QUICKCAST_AUTOCAST = 76,
    KEYBIND_ABILITY_SECONDARY_1_QUICKCAST_AUTOCAST = 77,
    KEYBIND_ABILITY_SECONDARY_2_QUICKCAST_AUTOCAST = 78,
    KEYBIND_ABILITY_ULTIMATE_QUICKCAST_AUTOCAST = 79,
    KEYBIND_ABILITY_PRIMARY_1_AUTOMATIC_AUTOCAST = 80,
    KEYBIND_ABILITY_PRIMARY_2_AUTOMATIC_AUTOCAST = 81,
    KEYBIND_ABILITY_PRIMARY_3_AUTOMATIC_AUTOCAST = 82,
    KEYBIND_ABILITY_SECONDARY_1_AUTOMATIC_AUTOCAST = 83,
    KEYBIND_ABILITY_SECONDARY_2_AUTOMATIC_AUTOCAST = 84,
    KEYBIND_ABILITY_ULTIMATE_AUTOMATIC_AUTOCAST = 85,
    KEYBIND_INVENTORY_1 = 86,
    KEYBIND_INVENTORY_2 = 87,
    KEYBIND_INVENTORY_3 = 88,
    KEYBIND_INVENTORY_4 = 89,
    KEYBIND_INVENTORY_5 = 90,
    KEYBIND_INVENTORY_6 = 91,
    KEYBIND_INVENTORYTP = 92,
    KEYBIND_INVENTORYNEUTRAL = 93,
    KEYBIND_INVENTORY_1_QUICKCAST = 94,
    KEYBIND_INVENTORY_2_QUICKCAST = 95,
    KEYBIND_INVENTORY_3_QUICKCAST = 96,
    KEYBIND_INVENTORY_4_QUICKCAST = 97,
    KEYBIND_INVENTORY_5_QUICKCAST = 98,
    KEYBIND_INVENTORY_6_QUICKCAST = 99,
    KEYBIND_INVENTORYTP_QUICKCAST = 100,
    KEYBIND_INVENTORYNEUTRAL_QUICKCAST = 101,
    KEYBIND_INVENTORY_1_AUTOCAST = 102,
    KEYBIND_INVENTORY_2_AUTOCAST = 103,
    KEYBIND_INVENTORY_3_AUTOCAST = 104,
    KEYBIND_INVENTORY_4_AUTOCAST = 105,
    KEYBIND_INVENTORY_5_AUTOCAST = 106,
    KEYBIND_INVENTORY_6_AUTOCAST = 107,
    KEYBIND_INVENTORYTP_AUTOCAST = 108,
    KEYBIND_INVENTORYNEUTRAL_AUTOCAST = 109,
    KEYBIND_INVENTORY_1_QUICKAUTOCAST = 110,
    KEYBIND_INVENTORY_2_QUICKAUTOCAST = 111,
    KEYBIND_INVENTORY_3_QUICKAUTOCAST = 112,
    KEYBIND_INVENTORY_4_QUICKAUTOCAST = 113,
    KEYBIND_INVENTORY_5_QUICKAUTOCAST = 114,
    KEYBIND_INVENTORY_6_QUICKAUTOCAST = 115,
    KEYBIND_INVENTORYTP_QUICKAUTOCAST = 116,
    KEYBIND_INVENTORYNEUTRAL_QUICKAUTOCAST = 117,
    KEYBIND_CONTROL_GROUP_1 = 118,
    KEYBIND_CONTROL_GROUP_2 = 119,
    KEYBIND_CONTROL_GROUP_3 = 120,
    KEYBIND_CONTROL_GROUP_4 = 121,
    KEYBIND_CONTROL_GROUP_5 = 122,
    KEYBIND_CONTROL_GROUP_6 = 123,
    KEYBIND_CONTROL_GROUP_7 = 124,
    KEYBIND_CONTROL_GROUP_8 = 125,
    KEYBIND_CONTROL_GROUP_9 = 126,
    KEYBIND_CONTROL_GROUP_10 = 127,
    KEYBIND_CONTROL_GROUPCYCLE = 128,
    KEYBIND_SELECT_ALLY_1 = 129,
    KEYBIND_SELECT_ALLY_2 = 130,
    KEYBIND_SELECT_ALLY_3 = 131,
    KEYBIND_SELECT_ALLY_4 = 132,
    KEYBIND_SELECT_ALLY_5 = 133,
    KEYBIND_SHOP_TOGGLE = 134,
    KEYBIND_SCOREBOARD_TOGGLE = 135,
    KEYBIND_COMBATLOG_TOGGLE = 136,
    KEYBIND_SCREENSHOT = 137,
    KEYBIND_ESCAPE = 138,
    KEYBIND_CONSOLE = 139,
    KEYBIND_DEATH_SUMMARY = 140,
    KEYBIND_LEARN_ABILITIES = 141,
    KEYBIND_LEARN_STATS = 142,
    KEYBIND_ACTIVATE_GLYPH = 143,
    KEYBIND_ACTIVATE_RADAR = 144,
    KEYBIND_PURCHASE_QUICKBUY = 145,
    KEYBIND_PURCHASE_STICKY = 146,
    KEYBIND_GRAB_STASH_ITEMS = 147,
    KEYBIND_TOGGLE_AUTOATTACK = 148,
    KEYBIND_TOGGLE_OVERLAYMAP = 149,
    KEYBIND_OVERLAYMAP_INPUTKEY = 150,
    KEYBIND_FILTER_ENEMY = 151,
    KEYBIND_FILTER_ALLY = 152,
    KEYBIND_FILTER_HERO = 153,
    KEYBIND_FILTER_NONHERO = 154,
    KEYBIND_TAUNT = 155,
    KEYBIND_SHOP_CONSUMABLES = 156,
    KEYBIND_SHOP_ATTRIBUTES = 157,
    KEYBIND_SHOP_ARMAMENTS = 158,
    KEYBIND_SHOP_ARCANE = 159,
    KEYBIND_SHOP_BASICS = 160,
    KEYBIND_SHOP_SUPPORT = 161,
    KEYBIND_SHOP_CASTER = 162,
    KEYBIND_SHOP_WEAPONS = 163,
    KEYBIND_SHOP_ARMOR = 164,
    KEYBIND_SHOP_ARTIFACTS = 165,
    KEYBIND_SHOP_SIDE_PAGE_1 = 166,
    KEYBIND_SHOP_SIDE_PAGE_2 = 167,
    KEYBIND_SHOP_SECRET = 168,
    KEYBIND_SHOP_SEARCHBOX = 169,
    KEYBIND_SHOP_SLOT_1 = 170,
    KEYBIND_SHOP_SLOT_2 = 171,
    KEYBIND_SHOP_SLOT_3 = 172,
    KEYBIND_SHOP_SLOT_4 = 173,
    KEYBIND_SHOP_SLOT_5 = 174,
    KEYBIND_SHOP_SLOT_6 = 175,
    KEYBIND_SHOP_SLOT_7 = 176,
    KEYBIND_SHOP_SLOT_8 = 177,
    KEYBIND_SHOP_SLOT_9 = 178,
    KEYBIND_SHOP_SLOT_10 = 179,
    KEYBIND_SHOP_SLOT_11 = 180,
    KEYBIND_SHOP_SLOT_12 = 181,
    KEYBIND_SHOP_SLOT_13 = 182,
    KEYBIND_SHOP_SLOT_14 = 183,
    KEYBIND_SPEC_CAMERA_UP = 184,
    KEYBIND_SPEC_CAMERA_DOWN = 185,
    KEYBIND_SPEC_CAMERA_LEFT = 186,
    KEYBIND_SPEC_CAMERA_RIGHT = 187,
    KEYBIND_SPEC_CAMERA_GRIP = 188,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_1 = 189,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_2 = 190,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_3 = 191,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_4 = 192,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_5 = 193,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_6 = 194,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_7 = 195,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_8 = 196,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_9 = 197,
    KEYBIND_SPEC_CAMERA_SAVED_POSITION_10 = 198,
    KEYBIND_SPEC_UNIT_SELECT = 199,
    KEYBIND_SPEC_HERO_SELECT = 200,
    KEYBIND_SPEC_PAUSE = 201,
    KEYBIND_SPEC_CHAT = 202,
    KEYBIND_SPEC_SCOREBOARD = 203,
    KEYBIND_SPEC_INCREASE_REPLAY_SPEED = 204,
    KEYBIND_SPEC_DECREASE_REPLAY_SPEED = 205,
    KEYBIND_SPEC_STATS_ITEM = 206,
    KEYBIND_SPEC_STATS_GOLD = 207,
    KEYBIND_SPEC_STATS_XP = 208,
    KEYBIND_SPEC_STATS_FANTASY = 209,
    KEYBIND_SPEC_STATS_WINCHANCE = 210,
    KEYBIND_SPEC_FOW_TOGGLEBOTH = 211,
    KEYBIND_SPEC_FOW_TOGGLERADIENT = 212,
    KEYBIND_SPEC_FOW_TOGGLEDIRE = 213,
    KEYBIND_SPEC_OPEN_BROADCASTER_MENU = 214,
    KEYBIND_SPEC_DROPDOWN_KDA = 215,
    KEYBIND_SPEC_DROPDOWN_LASTHITS_DENIES = 216,
    KEYBIND_SPEC_DROPDOWN_LEVEL = 217,
    KEYBIND_SPEC_DROPDOWN_HEROFACET = 218,
    KEYBIND_SPEC_DROPDOWN_XP_PER_MIN = 219,
    KEYBIND_SPEC_DROPDOWN_GOLD = 220,
    KEYBIND_SPEC_DROPDOWN_TOTALGOLD = 221,
    KEYBIND_SPEC_DROPDOWN_GOLD_PER_MIN = 222,
    KEYBIND_SPEC_DROPDOWN_BUYBACK = 223,
    KEYBIND_SPEC_DROPDOWN_NETWORTH = 224,
    KEYBIND_SPEC_DROPDOWN_FANTASY = 225,
    KEYBIND_SPEC_DROPDOWN_SORT = 226,
    KEYBIND_SPEC_DROPDOWN_CLOSE = 227,
    KEYBIND_SPEC_FOCUS_PLAYER_1 = 228,
    KEYBIND_SPEC_FOCUS_PLAYER_2 = 229,
    KEYBIND_SPEC_FOCUS_PLAYER_3 = 230,
    KEYBIND_SPEC_FOCUS_PLAYER_4 = 231,
    KEYBIND_SPEC_FOCUS_PLAYER_5 = 232,
    KEYBIND_SPEC_FOCUS_PLAYER_6 = 233,
    KEYBIND_SPEC_FOCUS_PLAYER_7 = 234,
    KEYBIND_SPEC_FOCUS_PLAYER_8 = 235,
    KEYBIND_SPEC_FOCUS_PLAYER_9 = 236,
    KEYBIND_SPEC_FOCUS_PLAYER_10 = 237,
    KEYBIND_SPEC_COACH_VIEWTOGGLE = 238,
    KEYBIND_INSPECTHEROINWORLD = 239,
    KEYBIND_CAMERA_ZOOM_IN = 240,
    KEYBIND_CAMERA_ZOOM_OUT = 241,
    KEYBIND_CONTROL_GROUPCYCLEPREV = 242,
    KEYBIND_DOTA_ALT = 243,
    KEYBIND_DOTA_ALTERNATIVE_CAST_SWITCH = 244,
    KEYBIND_COUNT = 245,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_SHOP_TYPE = ShopType;

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
