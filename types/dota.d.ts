/// <reference path="enum.generated.d.ts" />

declare var PlayerResource: CDOTA_PlayerResource;

type QAngle = number;
type ProjectileID = number;
type ParticleID = number;
type EventListenerID = number;
type CCustomGameEventListener = number;
type table = { [key: string]: any };
// see: https://github.com/Microsoft/TypeScript/issues/15480
type PlayerID =
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

declare enum DOTAConnectionState_t {
  DOTA_CONNECTION_STATE_UNKNOWN = 0,
  DOTA_CONNECTION_STATE_NOT_YET_CONNECTED = 1,
  DOTA_CONNECTION_STATE_CONNECTED = 2,
  DOTA_CONNECTION_STATE_DISCONNECTED = 3,
  DOTA_CONNECTION_STATE_ABANDONED = 4,
  DOTA_CONNECTION_STATE_LOADING = 5,
  DOTA_CONNECTION_STATE_FAILED = 6,
}

interface CScriptHTTPResponse {
  Body: string;
  Request: CScriptHTTPResponse;
  StatusCode: number;
}

// TODO:
type Quaternion = any;
type ehandle = any;
type utlstringtoken = any;
type variant = any;
type vector2d = any;

interface CDOTA_PlayerResource {
  /**
   * Get the team number of this entity.
   *
   * Left for compatibility with CBaseEntity interface. Don't use.
   */
  GetTeam(): DOTATeam_t;
}

/**
 * Turn an entity index integer to an HScript representing that entity's script instance.
 */
declare function EntIndexToHScript<T extends CBaseEntity>(entIndex: number): T;
