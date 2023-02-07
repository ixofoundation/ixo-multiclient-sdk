import { UpdateProjectStatusDoc, UpdateProjectStatusDocSDKType, CreateAgentDoc, CreateAgentDocSDKType, UpdateAgentDoc, UpdateAgentDocSDKType, CreateClaimDoc, CreateClaimDocSDKType, CreateEvaluationDoc, CreateEvaluationDocSDKType, WithdrawFundsDoc, WithdrawFundsDocSDKType } from "./project";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateProject defines a message for creating a project. */
export interface MsgCreateProject {
    txHash: string;
    senderDid: string;
    projectDid: string;
    pubKey: string;
    data: Uint8Array;
    projectAddress: string;
}
/** MsgCreateProject defines a message for creating a project. */
export interface MsgCreateProjectSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    pub_key: string;
    data: Uint8Array;
    project_address: string;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseSDKType {
}
/**
 * MsgUpdateProjectStatus defines a message for updating a project's current
 * status.
 */
export interface MsgUpdateProjectStatus {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data?: UpdateProjectStatusDoc;
    projectAddress: string;
}
/**
 * MsgUpdateProjectStatus defines a message for updating a project's current
 * status.
 */
export interface MsgUpdateProjectStatusSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data?: UpdateProjectStatusDocSDKType;
    project_address: string;
}
/**
 * MsgUpdateProjectStatusResponse defines the Msg/UpdateProjectStatus response
 * type.
 */
export interface MsgUpdateProjectStatusResponse {
}
/**
 * MsgUpdateProjectStatusResponse defines the Msg/UpdateProjectStatus response
 * type.
 */
export interface MsgUpdateProjectStatusResponseSDKType {
}
/** MsgCreateAgent defines a message for creating an agent on a project. */
export interface MsgCreateAgent {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data?: CreateAgentDoc;
    projectAddress: string;
}
/** MsgCreateAgent defines a message for creating an agent on a project. */
export interface MsgCreateAgentSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data?: CreateAgentDocSDKType;
    project_address: string;
}
/** MsgCreateAgentResponse defines the Msg/CreateAgent response type. */
export interface MsgCreateAgentResponse {
}
/** MsgCreateAgentResponse defines the Msg/CreateAgent response type. */
export interface MsgCreateAgentResponseSDKType {
}
/** MsgUpdateAgent defines a message for updating an agent on a project. */
export interface MsgUpdateAgent {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data?: UpdateAgentDoc;
    projectAddress: string;
}
/** MsgUpdateAgent defines a message for updating an agent on a project. */
export interface MsgUpdateAgentSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data?: UpdateAgentDocSDKType;
    project_address: string;
}
/** MsgUpdateAgentResponse defines the Msg/UpdateAgent response type. */
export interface MsgUpdateAgentResponse {
}
/** MsgUpdateAgentResponse defines the Msg/UpdateAgent response type. */
export interface MsgUpdateAgentResponseSDKType {
}
/** MsgCreateClaim defines a message for creating a claim on a project. */
export interface MsgCreateClaim {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data?: CreateClaimDoc;
    projectAddress: string;
}
/** MsgCreateClaim defines a message for creating a claim on a project. */
export interface MsgCreateClaimSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data?: CreateClaimDocSDKType;
    project_address: string;
}
/** MsgCreateClaimResponse defines the Msg/CreateClaim response type. */
export interface MsgCreateClaimResponse {
}
/** MsgCreateClaimResponse defines the Msg/CreateClaim response type. */
export interface MsgCreateClaimResponseSDKType {
}
/**
 * MsgCreateEvaluation defines a message for creating an evaluation for a
 * specific claim on a project.
 */
export interface MsgCreateEvaluation {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data?: CreateEvaluationDoc;
    projectAddress: string;
}
/**
 * MsgCreateEvaluation defines a message for creating an evaluation for a
 * specific claim on a project.
 */
export interface MsgCreateEvaluationSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data?: CreateEvaluationDocSDKType;
    project_address: string;
}
/** MsgCreateEvaluationResponse defines the Msg/CreateEvaluation response type. */
export interface MsgCreateEvaluationResponse {
}
/** MsgCreateEvaluationResponse defines the Msg/CreateEvaluation response type. */
export interface MsgCreateEvaluationResponseSDKType {
}
/**
 * MsgWithdrawFunds defines a message for project agents to withdraw their funds
 * from a project.
 */
export interface MsgWithdrawFunds {
    senderDid: string;
    data?: WithdrawFundsDoc;
    senderAddress: string;
}
/**
 * MsgWithdrawFunds defines a message for project agents to withdraw their funds
 * from a project.
 */
export interface MsgWithdrawFundsSDKType {
    sender_did: string;
    data?: WithdrawFundsDocSDKType;
    sender_address: string;
}
/** MsgWithdrawFundsResponse defines the Msg/WithdrawFunds response type. */
export interface MsgWithdrawFundsResponse {
}
/** MsgWithdrawFundsResponse defines the Msg/WithdrawFunds response type. */
export interface MsgWithdrawFundsResponseSDKType {
}
/** MsgUpdateProjectDoc defines a message for updating a project's data. */
export interface MsgUpdateProjectDoc {
    txHash: string;
    senderDid: string;
    projectDid: string;
    data: Uint8Array;
    projectAddress: string;
}
/** MsgUpdateProjectDoc defines a message for updating a project's data. */
export interface MsgUpdateProjectDocSDKType {
    tx_hash: string;
    sender_did: string;
    project_did: string;
    data: Uint8Array;
    project_address: string;
}
/** MsgUpdateProjectDocResponse defines the Msg/UpdateProjectDoc response type. */
export interface MsgUpdateProjectDocResponse {
}
/** MsgUpdateProjectDocResponse defines the Msg/UpdateProjectDoc response type. */
export interface MsgUpdateProjectDocResponseSDKType {
}
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject;
    fromJSON(object: any): MsgCreateProject;
    toJSON(message: MsgCreateProject): unknown;
    fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(_: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(_: any): MsgCreateProjectResponse;
    toJSON(_: MsgCreateProjectResponse): unknown;
    fromPartial(_: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgUpdateProjectStatus: {
    encode(message: MsgUpdateProjectStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatus;
    fromJSON(object: any): MsgUpdateProjectStatus;
    toJSON(message: MsgUpdateProjectStatus): unknown;
    fromPartial(object: Partial<MsgUpdateProjectStatus>): MsgUpdateProjectStatus;
};
export declare const MsgUpdateProjectStatusResponse: {
    encode(_: MsgUpdateProjectStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectStatusResponse;
    fromJSON(_: any): MsgUpdateProjectStatusResponse;
    toJSON(_: MsgUpdateProjectStatusResponse): unknown;
    fromPartial(_: Partial<MsgUpdateProjectStatusResponse>): MsgUpdateProjectStatusResponse;
};
export declare const MsgCreateAgent: {
    encode(message: MsgCreateAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgent;
    fromJSON(object: any): MsgCreateAgent;
    toJSON(message: MsgCreateAgent): unknown;
    fromPartial(object: Partial<MsgCreateAgent>): MsgCreateAgent;
};
export declare const MsgCreateAgentResponse: {
    encode(_: MsgCreateAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAgentResponse;
    fromJSON(_: any): MsgCreateAgentResponse;
    toJSON(_: MsgCreateAgentResponse): unknown;
    fromPartial(_: Partial<MsgCreateAgentResponse>): MsgCreateAgentResponse;
};
export declare const MsgUpdateAgent: {
    encode(message: MsgUpdateAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgent;
    fromJSON(object: any): MsgUpdateAgent;
    toJSON(message: MsgUpdateAgent): unknown;
    fromPartial(object: Partial<MsgUpdateAgent>): MsgUpdateAgent;
};
export declare const MsgUpdateAgentResponse: {
    encode(_: MsgUpdateAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAgentResponse;
    fromJSON(_: any): MsgUpdateAgentResponse;
    toJSON(_: MsgUpdateAgentResponse): unknown;
    fromPartial(_: Partial<MsgUpdateAgentResponse>): MsgUpdateAgentResponse;
};
export declare const MsgCreateClaim: {
    encode(message: MsgCreateClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaim;
    fromJSON(object: any): MsgCreateClaim;
    toJSON(message: MsgCreateClaim): unknown;
    fromPartial(object: Partial<MsgCreateClaim>): MsgCreateClaim;
};
export declare const MsgCreateClaimResponse: {
    encode(_: MsgCreateClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClaimResponse;
    fromJSON(_: any): MsgCreateClaimResponse;
    toJSON(_: MsgCreateClaimResponse): unknown;
    fromPartial(_: Partial<MsgCreateClaimResponse>): MsgCreateClaimResponse;
};
export declare const MsgCreateEvaluation: {
    encode(message: MsgCreateEvaluation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluation;
    fromJSON(object: any): MsgCreateEvaluation;
    toJSON(message: MsgCreateEvaluation): unknown;
    fromPartial(object: Partial<MsgCreateEvaluation>): MsgCreateEvaluation;
};
export declare const MsgCreateEvaluationResponse: {
    encode(_: MsgCreateEvaluationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateEvaluationResponse;
    fromJSON(_: any): MsgCreateEvaluationResponse;
    toJSON(_: MsgCreateEvaluationResponse): unknown;
    fromPartial(_: Partial<MsgCreateEvaluationResponse>): MsgCreateEvaluationResponse;
};
export declare const MsgWithdrawFunds: {
    encode(message: MsgWithdrawFunds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFunds;
    fromJSON(object: any): MsgWithdrawFunds;
    toJSON(message: MsgWithdrawFunds): unknown;
    fromPartial(object: Partial<MsgWithdrawFunds>): MsgWithdrawFunds;
};
export declare const MsgWithdrawFundsResponse: {
    encode(_: MsgWithdrawFundsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawFundsResponse;
    fromJSON(_: any): MsgWithdrawFundsResponse;
    toJSON(_: MsgWithdrawFundsResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawFundsResponse>): MsgWithdrawFundsResponse;
};
export declare const MsgUpdateProjectDoc: {
    encode(message: MsgUpdateProjectDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDoc;
    fromJSON(object: any): MsgUpdateProjectDoc;
    toJSON(message: MsgUpdateProjectDoc): unknown;
    fromPartial(object: Partial<MsgUpdateProjectDoc>): MsgUpdateProjectDoc;
};
export declare const MsgUpdateProjectDocResponse: {
    encode(_: MsgUpdateProjectDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectDocResponse;
    fromJSON(_: any): MsgUpdateProjectDocResponse;
    toJSON(_: MsgUpdateProjectDocResponse): unknown;
    fromPartial(_: Partial<MsgUpdateProjectDocResponse>): MsgUpdateProjectDocResponse;
};
