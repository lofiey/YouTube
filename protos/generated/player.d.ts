// @generated by protobuf-ts 2.8.2 with parameter long_type_string,output_javascript_es2015
// @generated from protobuf file "player.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/player
 *
 * @generated from protobuf message Player
 */
export interface Player {
    /**
     * ResponseContext responseContext = 7 [json_name = "responseContext"];
     *
     * @generated from protobuf field: Player.Captions captions = 10;
     */
    captions?: Player_Captions;
}
/**
 * @generated from protobuf message Player.Captions
 */
export interface Player_Captions {
    /**
     * @generated from protobuf field: Player.Captions.PlayerCaptionsTracklistRenderer playerCaptionsTracklistRenderer = 51621377;
     */
    playerCaptionsTracklistRenderer?: Player_Captions_PlayerCaptionsTracklistRenderer;
}
/**
 * @generated from protobuf message Player.Captions.PlayerCaptionsTracklistRenderer
 */
export interface Player_Captions_PlayerCaptionsTracklistRenderer {
    /**
     * @generated from protobuf field: repeated Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks captionTracks = 1;
     */
    captionTracks: Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks[];
    /**
     * @generated from protobuf field: repeated Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks audioTracks = 2;
     */
    audioTracks: Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks[];
    /**
     * @generated from protobuf field: repeated Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages translationLanguages = 3;
     */
    translationLanguages: Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages[];
    /**
     * @generated from protobuf field: int32 defaultAudioTrackIndex = 4;
     */
    defaultAudioTrackIndex: number;
    /**
     * @generated from protobuf field: int32 defaultCaptionTrackIndex = 6 [json_name = "defaultAudioTrackIndex"];
     */
    defaultCaptionTrackIndex: number;
}
/**
 * @generated from protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks
 */
export interface Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks {
    /**
     * @generated from protobuf field: string baseUrl = 1;
     */
    baseUrl: string;
    /**
     * @generated from protobuf field: repeated Name name = 2;
     */
    name: Name[];
    /**
     * @generated from protobuf field: string vssId = 3;
     */
    vssId: string;
    /**
     * @generated from protobuf field: string languageCode = 4;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: optional string kind = 5;
     */
    kind?: string;
    /**
     * @generated from protobuf field: optional bool rtl = 6;
     */
    rtl?: boolean;
    /**
     * @generated from protobuf field: bool isTranslatable = 7;
     */
    isTranslatable: boolean;
}
/**
 * @generated from protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks
 */
export interface Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks {
    /**
     * @generated from protobuf field: repeated int32 captionTrackIndices = 2;
     */
    captionTrackIndices: number[];
    /**
     * @generated from protobuf field: optional int32 defaultCaptionTrackIndex = 3;
     */
    defaultCaptionTrackIndex?: number;
    /**
     * @generated from protobuf field: optional int32 forcedCaptionTrackIndex = 4;
     */
    forcedCaptionTrackIndex?: number;
    /**
     * @generated from protobuf field: optional int32 visibility = 5;
     */
    visibility?: number;
    /**
     * @generated from protobuf field: optional bool hasDefaultTrack = 6;
     */
    hasDefaultTrack?: boolean;
    /**
     * @generated from protobuf field: optional bool hasForcedTrack = 7;
     */
    hasForcedTrack?: boolean;
    /**
     * @generated from protobuf field: optional string audioTrackId = 8;
     */
    audioTrackId?: string;
    /**
     * @generated from protobuf field: optional int32 captionsInitialState = 11;
     */
    captionsInitialState?: number;
}
/**
 * @generated from protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages
 */
export interface Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages {
    /**
     * @generated from protobuf field: string languageCode = 1;
     */
    languageCode: string;
    /**
     * @generated from protobuf field: Name languageName = 2;
     */
    languageName?: Name;
}
/**
 * @generated from protobuf message Name
 */
export interface Name {
    /**
     * @generated from protobuf field: repeated Name.Runs runs = 1;
     */
    runs: Name_Runs[];
}
/**
 * @generated from protobuf message Name.Runs
 */
export interface Name_Runs {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
}
declare class Player$Type extends MessageType<Player> {
    constructor();
    create(value?: PartialMessage<Player>): Player;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player): Player;
    internalBinaryWrite(message: Player, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player
 */
export declare const Player: Player$Type;
declare class Player_Captions$Type extends MessageType<Player_Captions> {
    constructor();
    create(value?: PartialMessage<Player_Captions>): Player_Captions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Captions): Player_Captions;
    internalBinaryWrite(message: Player_Captions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Captions
 */
export declare const Player_Captions: Player_Captions$Type;
declare class Player_Captions_PlayerCaptionsTracklistRenderer$Type extends MessageType<Player_Captions_PlayerCaptionsTracklistRenderer> {
    constructor();
    create(value?: PartialMessage<Player_Captions_PlayerCaptionsTracklistRenderer>): Player_Captions_PlayerCaptionsTracklistRenderer;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Captions_PlayerCaptionsTracklistRenderer): Player_Captions_PlayerCaptionsTracklistRenderer;
    internalBinaryWrite(message: Player_Captions_PlayerCaptionsTracklistRenderer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer
 */
export declare const Player_Captions_PlayerCaptionsTracklistRenderer: Player_Captions_PlayerCaptionsTracklistRenderer$Type;
declare class Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks$Type extends MessageType<Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks> {
    constructor();
    create(value?: PartialMessage<Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks>): Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks): Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks;
    internalBinaryWrite(message: Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks
 */
export declare const Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks: Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks$Type;
declare class Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks$Type extends MessageType<Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks> {
    constructor();
    create(value?: PartialMessage<Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks>): Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks): Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks;
    internalBinaryWrite(message: Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks
 */
export declare const Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks: Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks$Type;
declare class Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages$Type extends MessageType<Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages> {
    constructor();
    create(value?: PartialMessage<Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages>): Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages): Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages;
    internalBinaryWrite(message: Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages
 */
export declare const Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages: Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages$Type;
declare class Name$Type extends MessageType<Name> {
    constructor();
    create(value?: PartialMessage<Name>): Name;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Name): Name;
    internalBinaryWrite(message: Name, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Name
 */
export declare const Name: Name$Type;
declare class Name_Runs$Type extends MessageType<Name_Runs> {
    constructor();
    create(value?: PartialMessage<Name_Runs>): Name_Runs;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Name_Runs): Name_Runs;
    internalBinaryWrite(message: Name_Runs, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Name.Runs
 */
export declare const Name_Runs: Name_Runs$Type;
export {};
