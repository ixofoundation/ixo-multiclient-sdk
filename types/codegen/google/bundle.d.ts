import * as _141 from "./api/http";
import * as _142 from "./protobuf/any";
import * as _143 from "./protobuf/descriptor";
import * as _144 from "./protobuf/duration";
import * as _145 from "./protobuf/empty";
import * as _146 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _141.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Http;
            fromJSON(object: any): _141.Http;
            toJSON(message: _141.Http): unknown;
            fromPartial(object: Partial<_141.Http>): _141.Http;
        };
        HttpRule: {
            encode(message: _141.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.HttpRule;
            fromJSON(object: any): _141.HttpRule;
            toJSON(message: _141.HttpRule): unknown;
            fromPartial(object: Partial<_141.HttpRule>): _141.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _141.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CustomHttpPattern;
            fromJSON(object: any): _141.CustomHttpPattern;
            toJSON(message: _141.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_141.CustomHttpPattern>): _141.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _146.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Timestamp;
            fromJSON(object: any): _146.Timestamp;
            toJSON(message: _146.Timestamp): unknown;
            fromPartial(object: Partial<_146.Timestamp>): _146.Timestamp;
        };
        Empty: {
            encode(_: _145.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Empty;
            fromJSON(_: any): _145.Empty;
            toJSON(_: _145.Empty): unknown;
            fromPartial(_: Partial<_145.Empty>): _145.Empty;
        };
        Duration: {
            encode(message: _144.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Duration;
            fromJSON(object: any): _144.Duration;
            toJSON(message: _144.Duration): unknown;
            fromPartial(object: Partial<_144.Duration>): _144.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _143.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _143.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _143.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _143.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _143.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _143.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _143.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _143.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _143.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _143.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _143.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _143.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _143.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _143.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _143.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _143.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _143.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _143.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _143.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _143.FieldOptions_CType;
        FieldOptions_JSType: typeof _143.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _143.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _143.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _143.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _143.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FileDescriptorSet;
            fromJSON(object: any): _143.FileDescriptorSet;
            toJSON(message: _143.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_143.FileDescriptorSet>): _143.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _143.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FileDescriptorProto;
            fromJSON(object: any): _143.FileDescriptorProto;
            toJSON(message: _143.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_143.FileDescriptorProto>): _143.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _143.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DescriptorProto;
            fromJSON(object: any): _143.DescriptorProto;
            toJSON(message: _143.DescriptorProto): unknown;
            fromPartial(object: Partial<_143.DescriptorProto>): _143.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _143.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _143.DescriptorProto_ExtensionRange;
            toJSON(message: _143.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_143.DescriptorProto_ExtensionRange>): _143.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _143.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.DescriptorProto_ReservedRange;
            fromJSON(object: any): _143.DescriptorProto_ReservedRange;
            toJSON(message: _143.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_143.DescriptorProto_ReservedRange>): _143.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _143.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ExtensionRangeOptions;
            fromJSON(object: any): _143.ExtensionRangeOptions;
            toJSON(message: _143.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_143.ExtensionRangeOptions>): _143.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _143.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FieldDescriptorProto;
            fromJSON(object: any): _143.FieldDescriptorProto;
            toJSON(message: _143.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_143.FieldDescriptorProto>): _143.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _143.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.OneofDescriptorProto;
            fromJSON(object: any): _143.OneofDescriptorProto;
            toJSON(message: _143.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_143.OneofDescriptorProto>): _143.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _143.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumDescriptorProto;
            fromJSON(object: any): _143.EnumDescriptorProto;
            toJSON(message: _143.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_143.EnumDescriptorProto>): _143.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _143.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _143.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _143.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_143.EnumDescriptorProto_EnumReservedRange>): _143.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _143.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumValueDescriptorProto;
            fromJSON(object: any): _143.EnumValueDescriptorProto;
            toJSON(message: _143.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_143.EnumValueDescriptorProto>): _143.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _143.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ServiceDescriptorProto;
            fromJSON(object: any): _143.ServiceDescriptorProto;
            toJSON(message: _143.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_143.ServiceDescriptorProto>): _143.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _143.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MethodDescriptorProto;
            fromJSON(object: any): _143.MethodDescriptorProto;
            toJSON(message: _143.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_143.MethodDescriptorProto>): _143.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _143.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FileOptions;
            fromJSON(object: any): _143.FileOptions;
            toJSON(message: _143.FileOptions): unknown;
            fromPartial(object: Partial<_143.FileOptions>): _143.FileOptions;
        };
        MessageOptions: {
            encode(message: _143.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MessageOptions;
            fromJSON(object: any): _143.MessageOptions;
            toJSON(message: _143.MessageOptions): unknown;
            fromPartial(object: Partial<_143.MessageOptions>): _143.MessageOptions;
        };
        FieldOptions: {
            encode(message: _143.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.FieldOptions;
            fromJSON(object: any): _143.FieldOptions;
            toJSON(message: _143.FieldOptions): unknown;
            fromPartial(object: Partial<_143.FieldOptions>): _143.FieldOptions;
        };
        OneofOptions: {
            encode(message: _143.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.OneofOptions;
            fromJSON(object: any): _143.OneofOptions;
            toJSON(message: _143.OneofOptions): unknown;
            fromPartial(object: Partial<_143.OneofOptions>): _143.OneofOptions;
        };
        EnumOptions: {
            encode(message: _143.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumOptions;
            fromJSON(object: any): _143.EnumOptions;
            toJSON(message: _143.EnumOptions): unknown;
            fromPartial(object: Partial<_143.EnumOptions>): _143.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _143.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.EnumValueOptions;
            fromJSON(object: any): _143.EnumValueOptions;
            toJSON(message: _143.EnumValueOptions): unknown;
            fromPartial(object: Partial<_143.EnumValueOptions>): _143.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _143.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ServiceOptions;
            fromJSON(object: any): _143.ServiceOptions;
            toJSON(message: _143.ServiceOptions): unknown;
            fromPartial(object: Partial<_143.ServiceOptions>): _143.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _143.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.MethodOptions;
            fromJSON(object: any): _143.MethodOptions;
            toJSON(message: _143.MethodOptions): unknown;
            fromPartial(object: Partial<_143.MethodOptions>): _143.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _143.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.UninterpretedOption;
            fromJSON(object: any): _143.UninterpretedOption;
            toJSON(message: _143.UninterpretedOption): unknown;
            fromPartial(object: Partial<_143.UninterpretedOption>): _143.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _143.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.UninterpretedOption_NamePart;
            fromJSON(object: any): _143.UninterpretedOption_NamePart;
            toJSON(message: _143.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_143.UninterpretedOption_NamePart>): _143.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _143.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SourceCodeInfo;
            fromJSON(object: any): _143.SourceCodeInfo;
            toJSON(message: _143.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_143.SourceCodeInfo>): _143.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _143.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SourceCodeInfo_Location;
            fromJSON(object: any): _143.SourceCodeInfo_Location;
            toJSON(message: _143.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_143.SourceCodeInfo_Location>): _143.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _143.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GeneratedCodeInfo;
            fromJSON(object: any): _143.GeneratedCodeInfo;
            toJSON(message: _143.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_143.GeneratedCodeInfo>): _143.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _143.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _143.GeneratedCodeInfo_Annotation;
            toJSON(message: _143.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_143.GeneratedCodeInfo_Annotation>): _143.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _142.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Any;
            fromJSON(object: any): _142.Any;
            toJSON(message: _142.Any): unknown;
            fromPartial(object: Partial<_142.Any>): _142.Any;
        };
    };
}
