// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "player.request.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/player
 *
 * @generated from protobuf message Player
 */
export interface Player {
    /**
     * @generated from protobuf field: Context context = 1;
     */
    context?: Context;
    /**
     * @generated from protobuf field: string videoId = 2;
     */
    videoId: string;
    /**
     * optional int32 startTimeSecs = 3;
     *
     * @generated from protobuf field: PlaybackContext playbackContext = 4;
     */
    playbackContext?: PlaybackContext;
}
/**
 * @generated from protobuf message Context
 */
export interface Context {
    /**
     * @generated from protobuf field: Client client = 1;
     */
    client?: Client;
    /**
     * @generated from protobuf field: AdSignalsInfo adSignalsInfo = 9;
     */
    adSignalsInfo?: AdSignalsInfo;
}
/**
 * @generated from protobuf message Client
 */
export interface Client {
    /**
     * @generated from protobuf field: optional string hl = 1;
     */
    hl?: string;
    /**
     * @generated from protobuf field: optional string gl = 2;
     */
    gl?: string;
    /**
     * @generated from protobuf field: string deviceMake = 12;
     */
    deviceMake: string;
    /**
     * @generated from protobuf field: string deviceModel = 13;
     */
    deviceModel: string;
    /**
     * string visitorData = 14;
     * string userAgent = 15;
     *
     * @generated from protobuf field: int32 clientName = 16;
     */
    clientName: number;
    /**
     * @generated from protobuf field: string clientVersion = 17;
     */
    clientVersion: string;
    /**
     * string browserVersion = 17;
     *
     * @generated from protobuf field: string osName = 18;
     */
    osName: string;
    /**
     * @generated from protobuf field: string osVersion = 19;
     */
    osVersion: string;
    /**
     * int32 screenWidthPoints = 37; //??
     * int32 screenHeightPoints = 38; //??
     * optional int32 screenPixelDensity = 41 //??
     * int32 screenWidthPoints = 55; //??
     * int32 screenHeightPoints = 56; //??
     * configInfo configInfo = 62;
     * optional int32 screenDensityFloat = 65; //??
     * optional int32 utcOffsetMinutes = 63;
     * userInterfaceThemType userInterfaceTheme = 78; //??
     *
     * @generated from protobuf field: string timeZone = 80;
     */
    timeZone: string;
}
/**
 * @generated from protobuf message PlaybackContext
 */
export interface PlaybackContext {
    /**
     * @generated from protobuf field: ContentPlaybackContext contentPlaybackContext = 1;
     */
    contentPlaybackContext?: ContentPlaybackContext;
}
/**
 * @generated from protobuf message ContentPlaybackContext
 */
export interface ContentPlaybackContext {
    /**
     * optional string currentUrl = 1; //??
     *
     * @generated from protobuf field: optional int32 id4 = 4;
     */
    id4?: number;
    /**
     * @generated from protobuf field: optional int32 id6 = 6;
     */
    id6?: number;
    /**
     * @generated from protobuf field: optional int32 id8 = 8;
     */
    id8?: number;
    /**
     * @generated from protobuf field: optional int32 id9 = 9;
     */
    id9?: number;
}
/**
 * @generated from protobuf message AdSignalsInfo
 */
export interface AdSignalsInfo {
    /**
     * @generated from protobuf field: map<string, string> params = 1;
     */
    params: {
        [key: string]: string;
    };
}
declare class Player$Type extends MessageType<Player> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Player
 */
export declare const Player: Player$Type;
declare class Context$Type extends MessageType<Context> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Context
 */
export declare const Context: Context$Type;
declare class Client$Type extends MessageType<Client> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Client
 */
export declare const Client: Client$Type;
declare class PlaybackContext$Type extends MessageType<PlaybackContext> {
    constructor();
}
/**
 * @generated MessageType for protobuf message PlaybackContext
 */
export declare const PlaybackContext: PlaybackContext$Type;
declare class ContentPlaybackContext$Type extends MessageType<ContentPlaybackContext> {
    constructor();
}
/**
 * @generated MessageType for protobuf message ContentPlaybackContext
 */
export declare const ContentPlaybackContext: ContentPlaybackContext$Type;
declare class AdSignalsInfo$Type extends MessageType<AdSignalsInfo> {
    constructor();
}
/**
 * @generated MessageType for protobuf message AdSignalsInfo
 */
export declare const AdSignalsInfo: AdSignalsInfo$Type;
export {};