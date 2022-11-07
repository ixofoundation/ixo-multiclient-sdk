import { Coin, CoinSDKType } from "../cosmos/coin";
import * as _m0 from "protobufjs/minimal";
/** UpdateProjectStatusDoc contains details required to update a project's status. */
export interface UpdateProjectStatusDoc {
    status: string;
    ethFundingTxnId: string;
}
/** UpdateProjectStatusDoc contains details required to update a project's status. */
export interface UpdateProjectStatusDocSDKType {
    status: string;
    eth_funding_txn_id: string;
}
/** CreateAgentDoc contains details required to create an agent. */
export interface CreateAgentDoc {
    agentDid: string;
    role: string;
}
/** CreateAgentDoc contains details required to create an agent. */
export interface CreateAgentDocSDKType {
    agent_did: string;
    role: string;
}
/** UpdateAgentDoc contains details required to update an agent. */
export interface UpdateAgentDoc {
    did: string;
    status: string;
    role: string;
}
/** UpdateAgentDoc contains details required to update an agent. */
export interface UpdateAgentDocSDKType {
    did: string;
    status: string;
    role: string;
}
/** CreateClaimDoc contains details required to create a claim on a project. */
export interface CreateClaimDoc {
    claimId: string;
    claimTemplateId: string;
}
/** CreateClaimDoc contains details required to create a claim on a project. */
export interface CreateClaimDocSDKType {
    claim_id: string;
    claim_template_id: string;
}
/** CreateEvaluationDoc contains details required to create an evaluation for a specific claim on a project. */
export interface CreateEvaluationDoc {
    claimId: string;
    status: string;
}
/** CreateEvaluationDoc contains details required to create an evaluation for a specific claim on a project. */
export interface CreateEvaluationDocSDKType {
    claim_id: string;
    status: string;
}
/** WithdrawFundsDoc contains details required to withdraw funds from a specific project. */
export interface WithdrawFundsDoc {
    projectDid: string;
    recipientDid: string;
    amount: string;
    isRefund: boolean;
}
/** WithdrawFundsDoc contains details required to withdraw funds from a specific project. */
export interface WithdrawFundsDocSDKType {
    project_did: string;
    recipient_did: string;
    amount: string;
    is_refund: boolean;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */
export interface ProjectDoc {
    txHash: string;
    projectDid: string;
    senderDid: string;
    pubKey: string;
    status: string;
    data: Uint8Array;
}
/** ProjectDoc defines a project (or entity) type with all of its parameters. */
export interface ProjectDocSDKType {
    tx_hash: string;
    project_did: string;
    sender_did: string;
    pub_key: string;
    status: string;
    data: Uint8Array;
}
/** WithdrawalInfoDoc contains details required to withdraw from a specific project. */
export interface WithdrawalInfoDoc {
    projectDid: string;
    recipientDid: string;
    amount?: Coin;
}
/** WithdrawalInfoDoc contains details required to withdraw from a specific project. */
export interface WithdrawalInfoDocSDKType {
    project_did: string;
    recipient_did: string;
    amount?: CoinSDKType;
}
/** Params defines the parameters for the project module. */
export interface Params {
    ixoDid: string;
    projectMinimumInitialFunding: Coin[];
    oracleFeePercentage: string;
    nodeFeePercentage: string;
}
/** Params defines the parameters for the project module. */
export interface ParamsSDKType {
    ixo_did: string;
    project_minimum_initial_funding: CoinSDKType[];
    oracle_fee_percentage: string;
    node_fee_percentage: string;
}
/** Claim contains details required to start a claim on a project. */
export interface Claim {
    id: string;
    templateId: string;
    claimerDid: string;
    status: string;
}
/** Claim contains details required to start a claim on a project. */
export interface ClaimSDKType {
    id: string;
    template_id: string;
    claimer_did: string;
    status: string;
}
export interface GenesisAccountMap_MapEntry {
    key: string;
    value: string;
}
export interface GenesisAccountMap_MapEntrySDKType {
    key: string;
    value: string;
}
/** GenesisAccountMap is a type used at genesis that maps a specific project's account names to the accounts' addresses. */
export interface GenesisAccountMap {
    map: {
        [key: string]: string;
    };
}
/** GenesisAccountMap is a type used at genesis that maps a specific project's account names to the accounts' addresses. */
export interface GenesisAccountMapSDKType {
    map: {
        [key: string]: string;
    };
}
export interface AccountMap_MapEntry {
    key: string;
    value: string;
}
export interface AccountMap_MapEntrySDKType {
    key: string;
    value: string;
}
/** AccountMap maps a specific project's account names to the accounts' addresses. */
export interface AccountMap {
    map: {
        [key: string]: string;
    };
}
/** AccountMap maps a specific project's account names to the accounts' addresses. */
export interface AccountMapSDKType {
    map: {
        [key: string]: string;
    };
}
/** WithdrawalInfoDocs contains a list of type WithdrawalInfoDoc. */
export interface WithdrawalInfoDocs {
    docsList: WithdrawalInfoDoc[];
}
/** WithdrawalInfoDocs contains a list of type WithdrawalInfoDoc. */
export interface WithdrawalInfoDocsSDKType {
    docs_list: WithdrawalInfoDocSDKType[];
}
/** Claims contains a list of type Claim. */
export interface Claims {
    claimsList: Claim[];
}
/** Claims contains a list of type Claim. */
export interface ClaimsSDKType {
    claims_list: ClaimSDKType[];
}
export declare const UpdateProjectStatusDoc: {
    encode(message: UpdateProjectStatusDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProjectStatusDoc;
    fromJSON(object: any): UpdateProjectStatusDoc;
    toJSON(message: UpdateProjectStatusDoc): unknown;
    fromPartial(object: Partial<UpdateProjectStatusDoc>): UpdateProjectStatusDoc;
};
export declare const CreateAgentDoc: {
    encode(message: CreateAgentDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentDoc;
    fromJSON(object: any): CreateAgentDoc;
    toJSON(message: CreateAgentDoc): unknown;
    fromPartial(object: Partial<CreateAgentDoc>): CreateAgentDoc;
};
export declare const UpdateAgentDoc: {
    encode(message: UpdateAgentDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentDoc;
    fromJSON(object: any): UpdateAgentDoc;
    toJSON(message: UpdateAgentDoc): unknown;
    fromPartial(object: Partial<UpdateAgentDoc>): UpdateAgentDoc;
};
export declare const CreateClaimDoc: {
    encode(message: CreateClaimDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateClaimDoc;
    fromJSON(object: any): CreateClaimDoc;
    toJSON(message: CreateClaimDoc): unknown;
    fromPartial(object: Partial<CreateClaimDoc>): CreateClaimDoc;
};
export declare const CreateEvaluationDoc: {
    encode(message: CreateEvaluationDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEvaluationDoc;
    fromJSON(object: any): CreateEvaluationDoc;
    toJSON(message: CreateEvaluationDoc): unknown;
    fromPartial(object: Partial<CreateEvaluationDoc>): CreateEvaluationDoc;
};
export declare const WithdrawFundsDoc: {
    encode(message: WithdrawFundsDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawFundsDoc;
    fromJSON(object: any): WithdrawFundsDoc;
    toJSON(message: WithdrawFundsDoc): unknown;
    fromPartial(object: Partial<WithdrawFundsDoc>): WithdrawFundsDoc;
};
export declare const ProjectDoc: {
    encode(message: ProjectDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDoc;
    fromJSON(object: any): ProjectDoc;
    toJSON(message: ProjectDoc): unknown;
    fromPartial(object: Partial<ProjectDoc>): ProjectDoc;
};
export declare const WithdrawalInfoDoc: {
    encode(message: WithdrawalInfoDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDoc;
    fromJSON(object: any): WithdrawalInfoDoc;
    toJSON(message: WithdrawalInfoDoc): unknown;
    fromPartial(object: Partial<WithdrawalInfoDoc>): WithdrawalInfoDoc;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: Partial<Claim>): Claim;
};
export declare const GenesisAccountMap_MapEntry: {
    encode(message: GenesisAccountMap_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap_MapEntry;
    fromJSON(object: any): GenesisAccountMap_MapEntry;
    toJSON(message: GenesisAccountMap_MapEntry): unknown;
    fromPartial(object: Partial<GenesisAccountMap_MapEntry>): GenesisAccountMap_MapEntry;
};
export declare const GenesisAccountMap: {
    encode(message: GenesisAccountMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccountMap;
    fromJSON(object: any): GenesisAccountMap;
    toJSON(message: GenesisAccountMap): unknown;
    fromPartial(object: Partial<GenesisAccountMap>): GenesisAccountMap;
};
export declare const AccountMap_MapEntry: {
    encode(message: AccountMap_MapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap_MapEntry;
    fromJSON(object: any): AccountMap_MapEntry;
    toJSON(message: AccountMap_MapEntry): unknown;
    fromPartial(object: Partial<AccountMap_MapEntry>): AccountMap_MapEntry;
};
export declare const AccountMap: {
    encode(message: AccountMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountMap;
    fromJSON(object: any): AccountMap;
    toJSON(message: AccountMap): unknown;
    fromPartial(object: Partial<AccountMap>): AccountMap;
};
export declare const WithdrawalInfoDocs: {
    encode(message: WithdrawalInfoDocs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalInfoDocs;
    fromJSON(object: any): WithdrawalInfoDocs;
    toJSON(message: WithdrawalInfoDocs): unknown;
    fromPartial(object: Partial<WithdrawalInfoDocs>): WithdrawalInfoDocs;
};
export declare const Claims: {
    encode(message: Claims, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claims;
    fromJSON(object: any): Claims;
    toJSON(message: Claims): unknown;
    fromPartial(object: Partial<Claims>): Claims;
};
