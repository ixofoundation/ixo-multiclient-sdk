import * as _103 from "./api/http";
import * as _104 from "./protobuf/any";
import * as _105 from "./protobuf/descriptor";
import * as _106 from "./protobuf/duration";
import * as _107 from "./protobuf/empty";
import * as _108 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _103.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Http;
            fromJSON(object: any): _103.Http;
            toJSON(message: _103.Http): unknown;
            fromPartial(object: Partial<_103.Http>): _103.Http;
        };
        HttpRule: {
            encode(message: _103.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.HttpRule;
            fromJSON(object: any): _103.HttpRule;
            toJSON(message: _103.HttpRule): unknown;
            fromPartial(object: Partial<_103.HttpRule>): _103.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _103.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.CustomHttpPattern;
            fromJSON(object: any): _103.CustomHttpPattern;
            toJSON(message: _103.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_103.CustomHttpPattern>): _103.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _108.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Timestamp;
            fromJSON(object: any): _108.Timestamp;
            toJSON(message: _108.Timestamp): unknown;
            fromPartial(object: Partial<_108.Timestamp>): _108.Timestamp;
        };
        Empty: {
            encode(_: _107.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Empty;
            fromJSON(_: any): _107.Empty;
            toJSON(_: _107.Empty): unknown;
            fromPartial(_: Partial<_107.Empty>): _107.Empty;
        };
        Duration: {
            encode(message: _106.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Duration;
            fromJSON(object: any): _106.Duration;
            toJSON(message: _106.Duration): unknown;
            fromPartial(object: Partial<_106.Duration>): _106.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _105.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _105.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _105.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _105.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _105.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _105.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _105.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _105.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _105.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _105.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _105.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _105.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _105.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _105.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _105.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _105.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _105.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _105.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _105.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _105.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _105.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _105.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _105.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _105.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _105.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FileDescriptorSet;
            fromJSON(object: any): _105.FileDescriptorSet;
            toJSON(message: _105.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_105.FileDescriptorSet>): _105.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _105.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FileDescriptorProto;
            fromJSON(object: any): _105.FileDescriptorProto;
            toJSON(message: _105.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_105.FileDescriptorProto>): _105.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _105.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DescriptorProto;
            fromJSON(object: any): _105.DescriptorProto;
            toJSON(message: _105.DescriptorProto): unknown;
            fromPartial(object: Partial<_105.DescriptorProto>): _105.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _105.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _105.DescriptorProto_ExtensionRange;
            toJSON(message: _105.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_105.DescriptorProto_ExtensionRange>): _105.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _105.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DescriptorProto_ReservedRange;
            fromJSON(object: any): _105.DescriptorProto_ReservedRange;
            toJSON(message: _105.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_105.DescriptorProto_ReservedRange>): _105.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _105.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ExtensionRangeOptions;
            fromJSON(object: any): _105.ExtensionRangeOptions;
            toJSON(message: _105.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_105.ExtensionRangeOptions>): _105.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _105.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FieldDescriptorProto;
            fromJSON(object: any): _105.FieldDescriptorProto;
            toJSON(message: _105.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_105.FieldDescriptorProto>): _105.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _105.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.OneofDescriptorProto;
            fromJSON(object: any): _105.OneofDescriptorProto;
            toJSON(message: _105.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_105.OneofDescriptorProto>): _105.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _105.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EnumDescriptorProto;
            fromJSON(object: any): _105.EnumDescriptorProto;
            toJSON(message: _105.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_105.EnumDescriptorProto>): _105.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _105.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _105.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _105.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_105.EnumDescriptorProto_EnumReservedRange>): _105.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _105.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EnumValueDescriptorProto;
            fromJSON(object: any): _105.EnumValueDescriptorProto;
            toJSON(message: _105.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_105.EnumValueDescriptorProto>): _105.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _105.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ServiceDescriptorProto;
            fromJSON(object: any): _105.ServiceDescriptorProto;
            toJSON(message: _105.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_105.ServiceDescriptorProto>): _105.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _105.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MethodDescriptorProto;
            fromJSON(object: any): _105.MethodDescriptorProto;
            toJSON(message: _105.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_105.MethodDescriptorProto>): _105.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _105.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FileOptions;
            fromJSON(object: any): _105.FileOptions;
            toJSON(message: _105.FileOptions): unknown;
            fromPartial(object: Partial<_105.FileOptions>): _105.FileOptions;
        };
        MessageOptions: {
            encode(message: _105.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MessageOptions;
            fromJSON(object: any): _105.MessageOptions;
            toJSON(message: _105.MessageOptions): unknown;
            fromPartial(object: Partial<_105.MessageOptions>): _105.MessageOptions;
        };
        FieldOptions: {
            encode(message: _105.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.FieldOptions;
            fromJSON(object: any): _105.FieldOptions;
            toJSON(message: _105.FieldOptions): unknown;
            fromPartial(object: Partial<_105.FieldOptions>): _105.FieldOptions;
        };
        OneofOptions: {
            encode(message: _105.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.OneofOptions;
            fromJSON(object: any): _105.OneofOptions;
            toJSON(message: _105.OneofOptions): unknown;
            fromPartial(object: Partial<_105.OneofOptions>): _105.OneofOptions;
        };
        EnumOptions: {
            encode(message: _105.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EnumOptions;
            fromJSON(object: any): _105.EnumOptions;
            toJSON(message: _105.EnumOptions): unknown;
            fromPartial(object: Partial<_105.EnumOptions>): _105.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _105.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.EnumValueOptions;
            fromJSON(object: any): _105.EnumValueOptions;
            toJSON(message: _105.EnumValueOptions): unknown;
            fromPartial(object: Partial<_105.EnumValueOptions>): _105.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _105.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ServiceOptions;
            fromJSON(object: any): _105.ServiceOptions;
            toJSON(message: _105.ServiceOptions): unknown;
            fromPartial(object: Partial<_105.ServiceOptions>): _105.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _105.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MethodOptions;
            fromJSON(object: any): _105.MethodOptions;
            toJSON(message: _105.MethodOptions): unknown;
            fromPartial(object: Partial<_105.MethodOptions>): _105.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _105.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UninterpretedOption;
            fromJSON(object: any): _105.UninterpretedOption;
            toJSON(message: _105.UninterpretedOption): unknown;
            fromPartial(object: Partial<_105.UninterpretedOption>): _105.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _105.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.UninterpretedOption_NamePart;
            fromJSON(object: any): _105.UninterpretedOption_NamePart;
            toJSON(message: _105.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_105.UninterpretedOption_NamePart>): _105.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _105.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SourceCodeInfo;
            fromJSON(object: any): _105.SourceCodeInfo;
            toJSON(message: _105.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_105.SourceCodeInfo>): _105.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _105.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.SourceCodeInfo_Location;
            fromJSON(object: any): _105.SourceCodeInfo_Location;
            toJSON(message: _105.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_105.SourceCodeInfo_Location>): _105.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _105.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GeneratedCodeInfo;
            fromJSON(object: any): _105.GeneratedCodeInfo;
            toJSON(message: _105.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_105.GeneratedCodeInfo>): _105.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _105.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _105.GeneratedCodeInfo_Annotation;
            toJSON(message: _105.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_105.GeneratedCodeInfo_Annotation>): _105.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _104.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Any;
            fromJSON(object: any): _104.Any;
            toJSON(message: _104.Any): unknown;
            fromPartial(object: Partial<_104.Any>): _104.Any;
        };
    };
}
