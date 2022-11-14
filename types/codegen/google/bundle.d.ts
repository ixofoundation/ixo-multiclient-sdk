import * as _96 from "./api/http";
import * as _97 from "./protobuf/any";
import * as _98 from "./protobuf/descriptor";
import * as _99 from "./protobuf/duration";
import * as _100 from "./protobuf/empty";
import * as _101 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _96.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Http;
            fromJSON(object: any): _96.Http;
            toJSON(message: _96.Http): unknown;
            fromPartial(object: Partial<_96.Http>): _96.Http;
        };
        HttpRule: {
            encode(message: _96.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.HttpRule;
            fromJSON(object: any): _96.HttpRule;
            toJSON(message: _96.HttpRule): unknown;
            fromPartial(object: Partial<_96.HttpRule>): _96.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _96.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.CustomHttpPattern;
            fromJSON(object: any): _96.CustomHttpPattern;
            toJSON(message: _96.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_96.CustomHttpPattern>): _96.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _101.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Timestamp;
            fromJSON(object: any): _101.Timestamp;
            toJSON(message: _101.Timestamp): unknown;
            fromPartial(object: Partial<_101.Timestamp>): _101.Timestamp;
        };
        Empty: {
            encode(_: _100.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Empty;
            fromJSON(_: any): _100.Empty;
            toJSON(_: _100.Empty): unknown;
            fromPartial(_: Partial<_100.Empty>): _100.Empty;
        };
        Duration: {
            encode(message: _99.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Duration;
            fromJSON(object: any): _99.Duration;
            toJSON(message: _99.Duration): unknown;
            fromPartial(object: Partial<_99.Duration>): _99.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _98.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _98.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _98.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _98.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _98.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _98.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _98.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _98.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _98.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _98.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _98.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _98.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _98.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _98.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _98.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _98.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _98.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _98.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _98.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _98.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _98.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _98.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _98.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _98.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _98.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.FileDescriptorSet;
            fromJSON(object: any): _98.FileDescriptorSet;
            toJSON(message: _98.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_98.FileDescriptorSet>): _98.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _98.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.FileDescriptorProto;
            fromJSON(object: any): _98.FileDescriptorProto;
            toJSON(message: _98.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_98.FileDescriptorProto>): _98.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _98.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DescriptorProto;
            fromJSON(object: any): _98.DescriptorProto;
            toJSON(message: _98.DescriptorProto): unknown;
            fromPartial(object: Partial<_98.DescriptorProto>): _98.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _98.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _98.DescriptorProto_ExtensionRange;
            toJSON(message: _98.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_98.DescriptorProto_ExtensionRange>): _98.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _98.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DescriptorProto_ReservedRange;
            fromJSON(object: any): _98.DescriptorProto_ReservedRange;
            toJSON(message: _98.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_98.DescriptorProto_ReservedRange>): _98.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _98.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ExtensionRangeOptions;
            fromJSON(object: any): _98.ExtensionRangeOptions;
            toJSON(message: _98.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_98.ExtensionRangeOptions>): _98.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _98.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.FieldDescriptorProto;
            fromJSON(object: any): _98.FieldDescriptorProto;
            toJSON(message: _98.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_98.FieldDescriptorProto>): _98.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _98.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.OneofDescriptorProto;
            fromJSON(object: any): _98.OneofDescriptorProto;
            toJSON(message: _98.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_98.OneofDescriptorProto>): _98.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _98.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EnumDescriptorProto;
            fromJSON(object: any): _98.EnumDescriptorProto;
            toJSON(message: _98.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_98.EnumDescriptorProto>): _98.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _98.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _98.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _98.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_98.EnumDescriptorProto_EnumReservedRange>): _98.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _98.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EnumValueDescriptorProto;
            fromJSON(object: any): _98.EnumValueDescriptorProto;
            toJSON(message: _98.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_98.EnumValueDescriptorProto>): _98.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _98.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ServiceDescriptorProto;
            fromJSON(object: any): _98.ServiceDescriptorProto;
            toJSON(message: _98.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_98.ServiceDescriptorProto>): _98.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _98.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MethodDescriptorProto;
            fromJSON(object: any): _98.MethodDescriptorProto;
            toJSON(message: _98.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_98.MethodDescriptorProto>): _98.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _98.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.FileOptions;
            fromJSON(object: any): _98.FileOptions;
            toJSON(message: _98.FileOptions): unknown;
            fromPartial(object: Partial<_98.FileOptions>): _98.FileOptions;
        };
        MessageOptions: {
            encode(message: _98.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MessageOptions;
            fromJSON(object: any): _98.MessageOptions;
            toJSON(message: _98.MessageOptions): unknown;
            fromPartial(object: Partial<_98.MessageOptions>): _98.MessageOptions;
        };
        FieldOptions: {
            encode(message: _98.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.FieldOptions;
            fromJSON(object: any): _98.FieldOptions;
            toJSON(message: _98.FieldOptions): unknown;
            fromPartial(object: Partial<_98.FieldOptions>): _98.FieldOptions;
        };
        OneofOptions: {
            encode(message: _98.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.OneofOptions;
            fromJSON(object: any): _98.OneofOptions;
            toJSON(message: _98.OneofOptions): unknown;
            fromPartial(object: Partial<_98.OneofOptions>): _98.OneofOptions;
        };
        EnumOptions: {
            encode(message: _98.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EnumOptions;
            fromJSON(object: any): _98.EnumOptions;
            toJSON(message: _98.EnumOptions): unknown;
            fromPartial(object: Partial<_98.EnumOptions>): _98.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _98.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.EnumValueOptions;
            fromJSON(object: any): _98.EnumValueOptions;
            toJSON(message: _98.EnumValueOptions): unknown;
            fromPartial(object: Partial<_98.EnumValueOptions>): _98.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _98.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ServiceOptions;
            fromJSON(object: any): _98.ServiceOptions;
            toJSON(message: _98.ServiceOptions): unknown;
            fromPartial(object: Partial<_98.ServiceOptions>): _98.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _98.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MethodOptions;
            fromJSON(object: any): _98.MethodOptions;
            toJSON(message: _98.MethodOptions): unknown;
            fromPartial(object: Partial<_98.MethodOptions>): _98.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _98.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UninterpretedOption;
            fromJSON(object: any): _98.UninterpretedOption;
            toJSON(message: _98.UninterpretedOption): unknown;
            fromPartial(object: Partial<_98.UninterpretedOption>): _98.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _98.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.UninterpretedOption_NamePart;
            fromJSON(object: any): _98.UninterpretedOption_NamePart;
            toJSON(message: _98.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_98.UninterpretedOption_NamePart>): _98.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _98.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SourceCodeInfo;
            fromJSON(object: any): _98.SourceCodeInfo;
            toJSON(message: _98.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_98.SourceCodeInfo>): _98.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _98.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.SourceCodeInfo_Location;
            fromJSON(object: any): _98.SourceCodeInfo_Location;
            toJSON(message: _98.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_98.SourceCodeInfo_Location>): _98.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _98.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GeneratedCodeInfo;
            fromJSON(object: any): _98.GeneratedCodeInfo;
            toJSON(message: _98.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_98.GeneratedCodeInfo>): _98.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _98.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _98.GeneratedCodeInfo_Annotation;
            toJSON(message: _98.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_98.GeneratedCodeInfo_Annotation>): _98.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _97.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Any;
            fromJSON(object: any): _97.Any;
            toJSON(message: _97.Any): unknown;
            fromPartial(object: Partial<_97.Any>): _97.Any;
        };
    };
}
