// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * https://youtubei.googleapis.com/youtubei/v1/browse
 *
 * @generated from protobuf message Browse
 */
export interface Browse {
    /**
     * @generated from protobuf field: Context context = 1 [json_name = "responseContext"];
     */
    context?: Context;
    /**
     * @generated from protobuf field: n1F9 n1F9 = 9;
     */
    n1F9?: n1F9;
    /**
     * @generated from protobuf field: n1F10 n1F10 = 10;
     */
    n1F10?: n1F10;
}
/**
 * @generated from protobuf message Context
 */
export interface Context {
    /**
     * @generated from protobuf field: repeated Context.ServiceTrackingParams serviceTrackingParams = 6;
     */
    serviceTrackingParams: Context_ServiceTrackingParams[];
}
/**
 * @generated from protobuf message Context.ServiceTrackingParams
 */
export interface Context_ServiceTrackingParams {
    /**
     * serviceType service = 1;
     *
     * @generated from protobuf field: map<string, string> params = 2;
     */
    params: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message n1F9
 */
export interface n1F9 {
    /**
     * m2F58173949 m2F58173949 = 58173949;
     * n6F153515154 n6F153515154 = 153515154;
     *
     * @generated from protobuf field: n2F49399797 n2F49399797 = 49399797;
     */
    n2F49399797?: n2F49399797;
}
/**
 * @generated from protobuf message n1F10
 */
export interface n1F10 {
    /**
     * @generated from protobuf field: n2F49399797 n2F49399797 = 49399797;
     */
    n2F49399797?: n2F49399797;
}
/**
 *
 * message m2F58173949 { repeated m3F1 m3F1 = 1; }
 * message m3F1 { m4F58174010 m4F58174010 = 58174010; }
 * message m4F58174010 { n1F10 n1F10 = 4; }
 *
 * sectionListRenderer
 *
 * @generated from protobuf message n2F49399797
 */
export interface n2F49399797 {
    /**
     * @generated from protobuf field: repeated n3F1 n3F1 = 1;
     */
    n3F1: n3F1[];
}
/**
 * contents
 *
 * @generated from protobuf message n3F1
 */
export interface n3F1 {
    /**
     * @generated from protobuf field: n4F50195462 n4F50195462 = 50195462;
     */
    n4F50195462?: n4F50195462;
    /**
     * n4F51845067 n4F51845067 = 51845067;
     *
     * @generated from protobuf field: n4F221496734 m4F221496734 = 221496734;
     */
    m4F221496734?: n4F221496734;
}
/**
 * musicDescriptionShelfRenderer
 *
 * @generated from protobuf message n4F50195462
 */
export interface n4F50195462 {
    /**
     * @generated from protobuf field: repeated n5F1 n5F1 = 1;
     */
    n5F1: n5F1[];
}
/**
 * @generated from protobuf message n4F221496734
 */
export interface n4F221496734 {
    /**
     * @generated from protobuf field: n5F3 n5F3 = 3;
     */
    n5F3?: n5F3;
}
/**
 * contents
 *
 * @generated from protobuf message n5F1
 */
export interface n5F1 {
    /**
     * @generated from protobuf field: n6F153515154 n6F153515154 = 153515154;
     */
    n6F153515154?: n6F153515154;
}
/**
 * @generated from protobuf message n5F3
 */
export interface n5F3 {
    /**
     * @generated from protobuf field: n6F1 n6F1 = 1;
     */
    n6F1?: n6F1;
}
/**
 * Runs
 *
 * @generated from protobuf message n6F1
 */
export interface n6F1 {
    /**
     * @generated from protobuf field: string staticLyric = 1;
     */
    staticLyric: string;
}
/**
 * description?
 *
 * @generated from protobuf message n6F153515154
 */
export interface n6F153515154 {
    /**
     * @generated from protobuf field: n7F172660663 n7F172660663 = 172660663;
     */
    n7F172660663?: n7F172660663;
}
/**
 * @generated from protobuf message n7F172660663
 */
export interface n7F172660663 {
    /**
     * @generated from protobuf field: n8F1 n8F1 = 1;
     */
    n8F1?: n8F1;
}
/**
 * content?
 *
 * @generated from protobuf message n8F1
 */
export interface n8F1 {
    /**
     * @generated from protobuf field: n9F168777401 n9F168777401 = 168777401;
     */
    n9F168777401?: n9F168777401;
}
/**
 * @generated from protobuf message n9F168777401
 */
export interface n9F168777401 {
    /**
     * n10F3 n10F3 = 3;
     *
     * @generated from protobuf field: n10F5 n10F5 = 5;
     */
    n10F5?: n10F5;
}
/**
 * @generated from protobuf message n10F5
 */
export interface n10F5 {
    /**
     * @generated from protobuf field: n11F465160965 n11F465160965 = 465160965;
     */
    n11F465160965?: n11F465160965;
}
/**
 * @generated from protobuf message n11F465160965
 */
export interface n11F465160965 {
    /**
     * @generated from protobuf field: n12F4 n12F4 = 4;
     */
    n12F4?: n12F4;
}
/**
 * Name
 *
 * @generated from protobuf message n12F4
 */
export interface n12F4 {
    /**
     * @generated from protobuf field: repeated n13F1 n13F1 = 1;
     */
    n13F1: n13F1[];
    /**
     * @generated from protobuf field: string originText = 2;
     */
    originText: string;
}
/**
 * Runs
 *
 * @generated from protobuf message n13F1
 */
export interface n13F1 {
    /**
     * @generated from protobuf field: string f1 = 1;
     */
    f1: string;
}
/**
 * @generated from protobuf message n11F172035250
 */
export interface n11F172035250 {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
}
declare class Browse$Type extends MessageType<Browse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Browse
 */
export declare const Browse: Browse$Type;
declare class Context$Type extends MessageType<Context> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Context
 */
export declare const Context: Context$Type;
declare class Context_ServiceTrackingParams$Type extends MessageType<Context_ServiceTrackingParams> {
    constructor();
}
/**
 * @generated MessageType for protobuf message Context.ServiceTrackingParams
 */
export declare const Context_ServiceTrackingParams: Context_ServiceTrackingParams$Type;
declare class n1F9$Type extends MessageType<n1F9> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n1F9
 */
export declare const n1F9: n1F9$Type;
declare class n1F10$Type extends MessageType<n1F10> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n1F10
 */
export declare const n1F10: n1F10$Type;
declare class n2F49399797$Type extends MessageType<n2F49399797> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n2F49399797
 */
export declare const n2F49399797: n2F49399797$Type;
declare class n3F1$Type extends MessageType<n3F1> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n3F1
 */
export declare const n3F1: n3F1$Type;
declare class n4F50195462$Type extends MessageType<n4F50195462> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n4F50195462
 */
export declare const n4F50195462: n4F50195462$Type;
declare class n4F221496734$Type extends MessageType<n4F221496734> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n4F221496734
 */
export declare const n4F221496734: n4F221496734$Type;
declare class n5F1$Type extends MessageType<n5F1> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n5F1
 */
export declare const n5F1: n5F1$Type;
declare class n5F3$Type extends MessageType<n5F3> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n5F3
 */
export declare const n5F3: n5F3$Type;
declare class n6F1$Type extends MessageType<n6F1> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n6F1
 */
export declare const n6F1: n6F1$Type;
declare class n6F153515154$Type extends MessageType<n6F153515154> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n6F153515154
 */
export declare const n6F153515154: n6F153515154$Type;
declare class n7F172660663$Type extends MessageType<n7F172660663> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n7F172660663
 */
export declare const n7F172660663: n7F172660663$Type;
declare class n8F1$Type extends MessageType<n8F1> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n8F1
 */
export declare const n8F1: n8F1$Type;
declare class n9F168777401$Type extends MessageType<n9F168777401> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n9F168777401
 */
export declare const n9F168777401: n9F168777401$Type;
declare class n10F5$Type extends MessageType<n10F5> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n10F5
 */
export declare const n10F5: n10F5$Type;
declare class n11F465160965$Type extends MessageType<n11F465160965> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n11F465160965
 */
export declare const n11F465160965: n11F465160965$Type;
declare class n12F4$Type extends MessageType<n12F4> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n12F4
 */
export declare const n12F4: n12F4$Type;
declare class n13F1$Type extends MessageType<n13F1> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n13F1
 */
export declare const n13F1: n13F1$Type;
declare class n11F172035250$Type extends MessageType<n11F172035250> {
    constructor();
}
/**
 * @generated MessageType for protobuf message n11F172035250
 */
export declare const n11F172035250: n11F172035250$Type;
export {};