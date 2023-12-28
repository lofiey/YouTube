// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.response.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Browse$Type extends MessageType {
    constructor() {
        super("Browse", [
            { no: 1, name: "context", kind: "message", jsonName: "responseContext", T: () => Context },
            { no: 9, name: "n1F9", kind: "message", T: () => n1F9 },
            { no: 10, name: "n1F10", kind: "message", T: () => n1F10 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Browse
 */
export const Browse = new Browse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Context$Type extends MessageType {
    constructor() {
        super("Context", [
            { no: 6, name: "serviceTrackingParams", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Context_ServiceTrackingParams }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Context
 */
export const Context = new Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Context_ServiceTrackingParams$Type extends MessageType {
    constructor() {
        super("Context.ServiceTrackingParams", [
            { no: 2, name: "params", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Context.ServiceTrackingParams
 */
export const Context_ServiceTrackingParams = new Context_ServiceTrackingParams$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n1F9$Type extends MessageType {
    constructor() {
        super("n1F9", [
            { no: 49399797, name: "n2F49399797", kind: "message", T: () => n2F49399797 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n1F9
 */
export const n1F9 = new n1F9$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n1F10$Type extends MessageType {
    constructor() {
        super("n1F10", [
            { no: 49399797, name: "n2F49399797", kind: "message", T: () => n2F49399797 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n1F10
 */
export const n1F10 = new n1F10$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n2F49399797$Type extends MessageType {
    constructor() {
        super("n2F49399797", [
            { no: 1, name: "n3F1", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => n3F1 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n2F49399797
 */
export const n2F49399797 = new n2F49399797$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n3F1$Type extends MessageType {
    constructor() {
        super("n3F1", [
            { no: 50195462, name: "n4F50195462", kind: "message", T: () => n4F50195462 },
            { no: 221496734, name: "m4F221496734", kind: "message", T: () => n4F221496734 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n3F1
 */
export const n3F1 = new n3F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n4F50195462$Type extends MessageType {
    constructor() {
        super("n4F50195462", [
            { no: 1, name: "n5F1", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => n5F1 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n4F50195462
 */
export const n4F50195462 = new n4F50195462$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n4F221496734$Type extends MessageType {
    constructor() {
        super("n4F221496734", [
            { no: 3, name: "n5F3", kind: "message", T: () => n5F3 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n4F221496734
 */
export const n4F221496734 = new n4F221496734$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n5F1$Type extends MessageType {
    constructor() {
        super("n5F1", [
            { no: 153515154, name: "n6F153515154", kind: "message", T: () => n6F153515154 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n5F1
 */
export const n5F1 = new n5F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n5F3$Type extends MessageType {
    constructor() {
        super("n5F3", [
            { no: 1, name: "n6F1", kind: "message", T: () => n6F1 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n5F3
 */
export const n5F3 = new n5F3$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n6F1$Type extends MessageType {
    constructor() {
        super("n6F1", [
            { no: 1, name: "staticLyric", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n6F1
 */
export const n6F1 = new n6F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n6F153515154$Type extends MessageType {
    constructor() {
        super("n6F153515154", [
            { no: 172660663, name: "n7F172660663", kind: "message", T: () => n7F172660663 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n6F153515154
 */
export const n6F153515154 = new n6F153515154$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n7F172660663$Type extends MessageType {
    constructor() {
        super("n7F172660663", [
            { no: 1, name: "n8F1", kind: "message", T: () => n8F1 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n7F172660663
 */
export const n7F172660663 = new n7F172660663$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n8F1$Type extends MessageType {
    constructor() {
        super("n8F1", [
            { no: 168777401, name: "n9F168777401", kind: "message", T: () => n9F168777401 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n8F1
 */
export const n8F1 = new n8F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n9F168777401$Type extends MessageType {
    constructor() {
        super("n9F168777401", [
            { no: 5, name: "n10F5", kind: "message", T: () => n10F5 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n9F168777401
 */
export const n9F168777401 = new n9F168777401$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n10F5$Type extends MessageType {
    constructor() {
        super("n10F5", [
            { no: 465160965, name: "n11F465160965", kind: "message", T: () => n11F465160965 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n10F5
 */
export const n10F5 = new n10F5$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n11F465160965$Type extends MessageType {
    constructor() {
        super("n11F465160965", [
            { no: 4, name: "n12F4", kind: "message", T: () => n12F4 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n11F465160965
 */
export const n11F465160965 = new n11F465160965$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n12F4$Type extends MessageType {
    constructor() {
        super("n12F4", [
            { no: 1, name: "n13F1", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => n13F1 },
            { no: 2, name: "originText", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n12F4
 */
export const n12F4 = new n12F4$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n13F1$Type extends MessageType {
    constructor() {
        super("n13F1", [
            { no: 1, name: "f1", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n13F1
 */
export const n13F1 = new n13F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n11F172035250$Type extends MessageType {
    constructor() {
        super("n11F172035250", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n11F172035250
 */
export const n11F172035250 = new n11F172035250$Type();