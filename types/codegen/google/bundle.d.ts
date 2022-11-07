import * as _95 from "./api/http";
import * as _96 from "./protobuf/any";
import * as _97 from "./protobuf/descriptor";
import * as _98 from "./protobuf/duration";
import * as _99 from "./protobuf/empty";
import * as _100 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _95.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Http;
            fromJSON(object: any): _95.Http;
            toJSON(message: _95.Http): unknown;
            fromPartial(object: Partial<_95.Http>): _95.Http;
        };
        HttpRule: {
            encode(message: _95.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.HttpRule;
            fromJSON(object: any): _95.HttpRule;
            toJSON(message: _95.HttpRule): unknown;
            fromPartial(object: Partial<_95.HttpRule>): _95.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _95.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CustomHttpPattern;
            fromJSON(object: any): _95.CustomHttpPattern;
            toJSON(message: _95.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_95.CustomHttpPattern>): _95.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _100.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Timestamp;
            fromJSON(object: any): _100.Timestamp;
            toJSON(message: _100.Timestamp): unknown;
            fromPartial(object: Partial<_100.Timestamp>): _100.Timestamp;
        };
        Empty: {
            encode(_: _99.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Empty;
            fromJSON(_: any): _99.Empty;
            toJSON(_: _99.Empty): unknown;
            fromPartial(_: Partial<_99.Empty>): _99.Empty;
        };
        Duration: {
            encode(message: _98.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Duration;
            fromJSON(object: any): _98.Duration;
            toJSON(message: _98.Duration): unknown;
            fromPartial(object: Partial<_98.Duration>): _98.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _97.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _97.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _97.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _97.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _97.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _97.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _97.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _97.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _97.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _97.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _97.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _97.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _97.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _97.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _97.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _97.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _97.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _97.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _97.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _97.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _97.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _97.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _97.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _97.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _97.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.FileDescriptorSet;
            fromJSON(object: any): _97.FileDescriptorSet;
            toJSON(message: _97.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_97.FileDescriptorSet>): _97.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _97.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.FileDescriptorProto;
            fromJSON(object: any): _97.FileDescriptorProto;
            toJSON(message: _97.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_97.FileDescriptorProto>): _97.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _97.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DescriptorProto;
            fromJSON(object: any): _97.DescriptorProto;
            toJSON(message: _97.DescriptorProto): unknown;
            fromPartial(object: Partial<_97.DescriptorProto>): _97.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _97.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _97.DescriptorProto_ExtensionRange;
            toJSON(message: _97.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_97.DescriptorProto_ExtensionRange>): _97.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _97.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DescriptorProto_ReservedRange;
            fromJSON(object: any): _97.DescriptorProto_ReservedRange;
            toJSON(message: _97.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_97.DescriptorProto_ReservedRange>): _97.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _97.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ExtensionRangeOptions;
            fromJSON(object: any): _97.ExtensionRangeOptions;
            toJSON(message: _97.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_97.ExtensionRangeOptions>): _97.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _97.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.FieldDescriptorProto;
            fromJSON(object: any): _97.FieldDescriptorProto;
            toJSON(message: _97.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_97.FieldDescriptorProto>): _97.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _97.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.OneofDescriptorProto;
            fromJSON(object: any): _97.OneofDescriptorProto;
            toJSON(message: _97.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_97.OneofDescriptorProto>): _97.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _97.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EnumDescriptorProto;
            fromJSON(object: any): _97.EnumDescriptorProto;
            toJSON(message: _97.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_97.EnumDescriptorProto>): _97.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _97.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _97.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _97.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_97.EnumDescriptorProto_EnumReservedRange>): _97.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _97.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EnumValueDescriptorProto;
            fromJSON(object: any): _97.EnumValueDescriptorProto;
            toJSON(message: _97.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_97.EnumValueDescriptorProto>): _97.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _97.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ServiceDescriptorProto;
            fromJSON(object: any): _97.ServiceDescriptorProto;
            toJSON(message: _97.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_97.ServiceDescriptorProto>): _97.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _97.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MethodDescriptorProto;
            fromJSON(object: any): _97.MethodDescriptorProto;
            toJSON(message: _97.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_97.MethodDescriptorProto>): _97.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _97.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.FileOptions;
            fromJSON(object: any): _97.FileOptions;
            toJSON(message: _97.FileOptions): unknown;
            fromPartial(object: Partial<_97.FileOptions>): _97.FileOptions;
        };
        MessageOptions: {
            encode(message: _97.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MessageOptions;
            fromJSON(object: any): _97.MessageOptions;
            toJSON(message: _97.MessageOptions): unknown;
            fromPartial(object: Partial<_97.MessageOptions>): _97.MessageOptions;
        };
        FieldOptions: {
            encode(message: _97.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.FieldOptions;
            fromJSON(object: any): _97.FieldOptions;
            toJSON(message: _97.FieldOptions): unknown;
            fromPartial(object: Partial<_97.FieldOptions>): _97.FieldOptions;
        };
        OneofOptions: {
            encode(message: _97.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.OneofOptions;
            fromJSON(object: any): _97.OneofOptions;
            toJSON(message: _97.OneofOptions): unknown;
            fromPartial(object: Partial<_97.OneofOptions>): _97.OneofOptions;
        };
        EnumOptions: {
            encode(message: _97.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EnumOptions;
            fromJSON(object: any): _97.EnumOptions;
            toJSON(message: _97.EnumOptions): unknown;
            fromPartial(object: Partial<_97.EnumOptions>): _97.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _97.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.EnumValueOptions;
            fromJSON(object: any): _97.EnumValueOptions;
            toJSON(message: _97.EnumValueOptions): unknown;
            fromPartial(object: Partial<_97.EnumValueOptions>): _97.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _97.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ServiceOptions;
            fromJSON(object: any): _97.ServiceOptions;
            toJSON(message: _97.ServiceOptions): unknown;
            fromPartial(object: Partial<_97.ServiceOptions>): _97.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _97.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MethodOptions;
            fromJSON(object: any): _97.MethodOptions;
            toJSON(message: _97.MethodOptions): unknown;
            fromPartial(object: Partial<_97.MethodOptions>): _97.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _97.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UninterpretedOption;
            fromJSON(object: any): _97.UninterpretedOption;
            toJSON(message: _97.UninterpretedOption): unknown;
            fromPartial(object: Partial<_97.UninterpretedOption>): _97.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _97.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.UninterpretedOption_NamePart;
            fromJSON(object: any): _97.UninterpretedOption_NamePart;
            toJSON(message: _97.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_97.UninterpretedOption_NamePart>): _97.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _97.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SourceCodeInfo;
            fromJSON(object: any): _97.SourceCodeInfo;
            toJSON(message: _97.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_97.SourceCodeInfo>): _97.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _97.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SourceCodeInfo_Location;
            fromJSON(object: any): _97.SourceCodeInfo_Location;
            toJSON(message: _97.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_97.SourceCodeInfo_Location>): _97.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _97.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GeneratedCodeInfo;
            fromJSON(object: any): _97.GeneratedCodeInfo;
            toJSON(message: _97.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_97.GeneratedCodeInfo>): _97.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _97.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _97.GeneratedCodeInfo_Annotation;
            toJSON(message: _97.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_97.GeneratedCodeInfo_Annotation>): _97.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _96.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Any;
            fromJSON(object: any): _96.Any;
            toJSON(message: _96.Any): unknown;
            fromPartial(object: Partial<_96.Any>): _96.Any;
        };
    };
}
