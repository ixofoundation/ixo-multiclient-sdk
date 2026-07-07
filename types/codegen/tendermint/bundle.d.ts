import * as _247 from "./abci/types";
import * as _248 from "./crypto/keys";
import * as _249 from "./crypto/proof";
import * as _250 from "./libs/bits/types";
import * as _251 from "./p2p/types";
import * as _252 from "./types/block";
import * as _253 from "./types/evidence";
import * as _254 from "./types/params";
import * as _255 from "./types/types";
import * as _256 from "./types/validator";
import * as _257 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _247.CheckTxType;
        checkTxTypeToJSON(object: _247.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _247.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _247.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _247.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _247.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _247.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _247.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _247.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _247.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _247.MisbehaviorType;
        misbehaviorTypeToJSON(object: _247.MisbehaviorType): string;
        CheckTxType: typeof _247.CheckTxType;
        CheckTxTypeSDKType: typeof _247.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _247.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _247.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _247.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _247.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _247.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _247.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _247.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _247.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _247.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _247.MisbehaviorType;
        Request: {
            encode(message: _247.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Request;
            fromJSON(object: any): _247.Request;
            toJSON(message: _247.Request): unknown;
            fromPartial(object: Partial<_247.Request>): _247.Request;
        };
        RequestEcho: {
            encode(message: _247.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestEcho;
            fromJSON(object: any): _247.RequestEcho;
            toJSON(message: _247.RequestEcho): unknown;
            fromPartial(object: Partial<_247.RequestEcho>): _247.RequestEcho;
        };
        RequestFlush: {
            encode(_: _247.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestFlush;
            fromJSON(_: any): _247.RequestFlush;
            toJSON(_: _247.RequestFlush): unknown;
            fromPartial(_: Partial<_247.RequestFlush>): _247.RequestFlush;
        };
        RequestInfo: {
            encode(message: _247.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestInfo;
            fromJSON(object: any): _247.RequestInfo;
            toJSON(message: _247.RequestInfo): unknown;
            fromPartial(object: Partial<_247.RequestInfo>): _247.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _247.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestInitChain;
            fromJSON(object: any): _247.RequestInitChain;
            toJSON(message: _247.RequestInitChain): unknown;
            fromPartial(object: Partial<_247.RequestInitChain>): _247.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _247.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestQuery;
            fromJSON(object: any): _247.RequestQuery;
            toJSON(message: _247.RequestQuery): unknown;
            fromPartial(object: Partial<_247.RequestQuery>): _247.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _247.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestCheckTx;
            fromJSON(object: any): _247.RequestCheckTx;
            toJSON(message: _247.RequestCheckTx): unknown;
            fromPartial(object: Partial<_247.RequestCheckTx>): _247.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _247.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestCommit;
            fromJSON(_: any): _247.RequestCommit;
            toJSON(_: _247.RequestCommit): unknown;
            fromPartial(_: Partial<_247.RequestCommit>): _247.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _247.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestListSnapshots;
            fromJSON(_: any): _247.RequestListSnapshots;
            toJSON(_: _247.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_247.RequestListSnapshots>): _247.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _247.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestOfferSnapshot;
            fromJSON(object: any): _247.RequestOfferSnapshot;
            toJSON(message: _247.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_247.RequestOfferSnapshot>): _247.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _247.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestLoadSnapshotChunk;
            fromJSON(object: any): _247.RequestLoadSnapshotChunk;
            toJSON(message: _247.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_247.RequestLoadSnapshotChunk>): _247.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _247.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestApplySnapshotChunk;
            fromJSON(object: any): _247.RequestApplySnapshotChunk;
            toJSON(message: _247.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_247.RequestApplySnapshotChunk>): _247.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _247.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestPrepareProposal;
            fromJSON(object: any): _247.RequestPrepareProposal;
            toJSON(message: _247.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_247.RequestPrepareProposal>): _247.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _247.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestProcessProposal;
            fromJSON(object: any): _247.RequestProcessProposal;
            toJSON(message: _247.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_247.RequestProcessProposal>): _247.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _247.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestExtendVote;
            fromJSON(object: any): _247.RequestExtendVote;
            toJSON(message: _247.RequestExtendVote): unknown;
            fromPartial(object: Partial<_247.RequestExtendVote>): _247.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _247.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestVerifyVoteExtension;
            fromJSON(object: any): _247.RequestVerifyVoteExtension;
            toJSON(message: _247.RequestVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_247.RequestVerifyVoteExtension>): _247.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _247.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.RequestFinalizeBlock;
            fromJSON(object: any): _247.RequestFinalizeBlock;
            toJSON(message: _247.RequestFinalizeBlock): unknown;
            fromPartial(object: Partial<_247.RequestFinalizeBlock>): _247.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _247.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Response;
            fromJSON(object: any): _247.Response;
            toJSON(message: _247.Response): unknown;
            fromPartial(object: Partial<_247.Response>): _247.Response;
        };
        ResponseException: {
            encode(message: _247.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseException;
            fromJSON(object: any): _247.ResponseException;
            toJSON(message: _247.ResponseException): unknown;
            fromPartial(object: Partial<_247.ResponseException>): _247.ResponseException;
        };
        ResponseEcho: {
            encode(message: _247.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseEcho;
            fromJSON(object: any): _247.ResponseEcho;
            toJSON(message: _247.ResponseEcho): unknown;
            fromPartial(object: Partial<_247.ResponseEcho>): _247.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _247.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseFlush;
            fromJSON(_: any): _247.ResponseFlush;
            toJSON(_: _247.ResponseFlush): unknown;
            fromPartial(_: Partial<_247.ResponseFlush>): _247.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _247.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseInfo;
            fromJSON(object: any): _247.ResponseInfo;
            toJSON(message: _247.ResponseInfo): unknown;
            fromPartial(object: Partial<_247.ResponseInfo>): _247.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _247.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseInitChain;
            fromJSON(object: any): _247.ResponseInitChain;
            toJSON(message: _247.ResponseInitChain): unknown;
            fromPartial(object: Partial<_247.ResponseInitChain>): _247.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _247.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseQuery;
            fromJSON(object: any): _247.ResponseQuery;
            toJSON(message: _247.ResponseQuery): unknown;
            fromPartial(object: Partial<_247.ResponseQuery>): _247.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _247.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseCheckTx;
            fromJSON(object: any): _247.ResponseCheckTx;
            toJSON(message: _247.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_247.ResponseCheckTx>): _247.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _247.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseCommit;
            fromJSON(object: any): _247.ResponseCommit;
            toJSON(message: _247.ResponseCommit): unknown;
            fromPartial(object: Partial<_247.ResponseCommit>): _247.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _247.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseListSnapshots;
            fromJSON(object: any): _247.ResponseListSnapshots;
            toJSON(message: _247.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_247.ResponseListSnapshots>): _247.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _247.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseOfferSnapshot;
            fromJSON(object: any): _247.ResponseOfferSnapshot;
            toJSON(message: _247.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_247.ResponseOfferSnapshot>): _247.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _247.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _247.ResponseLoadSnapshotChunk;
            toJSON(message: _247.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_247.ResponseLoadSnapshotChunk>): _247.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _247.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseApplySnapshotChunk;
            fromJSON(object: any): _247.ResponseApplySnapshotChunk;
            toJSON(message: _247.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_247.ResponseApplySnapshotChunk>): _247.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _247.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponsePrepareProposal;
            fromJSON(object: any): _247.ResponsePrepareProposal;
            toJSON(message: _247.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_247.ResponsePrepareProposal>): _247.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _247.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseProcessProposal;
            fromJSON(object: any): _247.ResponseProcessProposal;
            toJSON(message: _247.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_247.ResponseProcessProposal>): _247.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _247.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseExtendVote;
            fromJSON(object: any): _247.ResponseExtendVote;
            toJSON(message: _247.ResponseExtendVote): unknown;
            fromPartial(object: Partial<_247.ResponseExtendVote>): _247.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _247.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseVerifyVoteExtension;
            fromJSON(object: any): _247.ResponseVerifyVoteExtension;
            toJSON(message: _247.ResponseVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_247.ResponseVerifyVoteExtension>): _247.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _247.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ResponseFinalizeBlock;
            fromJSON(object: any): _247.ResponseFinalizeBlock;
            toJSON(message: _247.ResponseFinalizeBlock): unknown;
            fromPartial(object: Partial<_247.ResponseFinalizeBlock>): _247.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _247.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.CommitInfo;
            fromJSON(object: any): _247.CommitInfo;
            toJSON(message: _247.CommitInfo): unknown;
            fromPartial(object: Partial<_247.CommitInfo>): _247.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _247.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ExtendedCommitInfo;
            fromJSON(object: any): _247.ExtendedCommitInfo;
            toJSON(message: _247.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_247.ExtendedCommitInfo>): _247.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _247.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Event;
            fromJSON(object: any): _247.Event;
            toJSON(message: _247.Event): unknown;
            fromPartial(object: Partial<_247.Event>): _247.Event;
        };
        EventAttribute: {
            encode(message: _247.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.EventAttribute;
            fromJSON(object: any): _247.EventAttribute;
            toJSON(message: _247.EventAttribute): unknown;
            fromPartial(object: Partial<_247.EventAttribute>): _247.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _247.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ExecTxResult;
            fromJSON(object: any): _247.ExecTxResult;
            toJSON(message: _247.ExecTxResult): unknown;
            fromPartial(object: Partial<_247.ExecTxResult>): _247.ExecTxResult;
        };
        TxResult: {
            encode(message: _247.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.TxResult;
            fromJSON(object: any): _247.TxResult;
            toJSON(message: _247.TxResult): unknown;
            fromPartial(object: Partial<_247.TxResult>): _247.TxResult;
        };
        Validator: {
            encode(message: _247.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Validator;
            fromJSON(object: any): _247.Validator;
            toJSON(message: _247.Validator): unknown;
            fromPartial(object: Partial<_247.Validator>): _247.Validator;
        };
        ValidatorUpdate: {
            encode(message: _247.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ValidatorUpdate;
            fromJSON(object: any): _247.ValidatorUpdate;
            toJSON(message: _247.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_247.ValidatorUpdate>): _247.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _247.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.VoteInfo;
            fromJSON(object: any): _247.VoteInfo;
            toJSON(message: _247.VoteInfo): unknown;
            fromPartial(object: Partial<_247.VoteInfo>): _247.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _247.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.ExtendedVoteInfo;
            fromJSON(object: any): _247.ExtendedVoteInfo;
            toJSON(message: _247.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_247.ExtendedVoteInfo>): _247.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _247.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Misbehavior;
            fromJSON(object: any): _247.Misbehavior;
            toJSON(message: _247.Misbehavior): unknown;
            fromPartial(object: Partial<_247.Misbehavior>): _247.Misbehavior;
        };
        Snapshot: {
            encode(message: _247.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _247.Snapshot;
            fromJSON(object: any): _247.Snapshot;
            toJSON(message: _247.Snapshot): unknown;
            fromPartial(object: Partial<_247.Snapshot>): _247.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _249.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.Proof;
            fromJSON(object: any): _249.Proof;
            toJSON(message: _249.Proof): unknown;
            fromPartial(object: Partial<_249.Proof>): _249.Proof;
        };
        ValueOp: {
            encode(message: _249.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.ValueOp;
            fromJSON(object: any): _249.ValueOp;
            toJSON(message: _249.ValueOp): unknown;
            fromPartial(object: Partial<_249.ValueOp>): _249.ValueOp;
        };
        DominoOp: {
            encode(message: _249.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.DominoOp;
            fromJSON(object: any): _249.DominoOp;
            toJSON(message: _249.DominoOp): unknown;
            fromPartial(object: Partial<_249.DominoOp>): _249.DominoOp;
        };
        ProofOp: {
            encode(message: _249.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.ProofOp;
            fromJSON(object: any): _249.ProofOp;
            toJSON(message: _249.ProofOp): unknown;
            fromPartial(object: Partial<_249.ProofOp>): _249.ProofOp;
        };
        ProofOps: {
            encode(message: _249.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _249.ProofOps;
            fromJSON(object: any): _249.ProofOps;
            toJSON(message: _249.ProofOps): unknown;
            fromPartial(object: Partial<_249.ProofOps>): _249.ProofOps;
        };
        PublicKey: {
            encode(message: _248.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _248.PublicKey;
            fromJSON(object: any): _248.PublicKey;
            toJSON(message: _248.PublicKey): unknown;
            fromPartial(object: Partial<_248.PublicKey>): _248.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _250.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _250.BitArray;
                fromJSON(object: any): _250.BitArray;
                toJSON(message: _250.BitArray): unknown;
                fromPartial(object: Partial<_250.BitArray>): _250.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _251.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.NetAddress;
            fromJSON(object: any): _251.NetAddress;
            toJSON(message: _251.NetAddress): unknown;
            fromPartial(object: Partial<_251.NetAddress>): _251.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _251.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.ProtocolVersion;
            fromJSON(object: any): _251.ProtocolVersion;
            toJSON(message: _251.ProtocolVersion): unknown;
            fromPartial(object: Partial<_251.ProtocolVersion>): _251.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _251.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.DefaultNodeInfo;
            fromJSON(object: any): _251.DefaultNodeInfo;
            toJSON(message: _251.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_251.DefaultNodeInfo>): _251.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _251.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _251.DefaultNodeInfoOther;
            fromJSON(object: any): _251.DefaultNodeInfoOther;
            toJSON(message: _251.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_251.DefaultNodeInfoOther>): _251.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _256.BlockIDFlag;
        blockIDFlagToJSON(object: _256.BlockIDFlag): string;
        BlockIDFlag: typeof _256.BlockIDFlag;
        BlockIDFlagSDKType: typeof _256.BlockIDFlag;
        ValidatorSet: {
            encode(message: _256.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.ValidatorSet;
            fromJSON(object: any): _256.ValidatorSet;
            toJSON(message: _256.ValidatorSet): unknown;
            fromPartial(object: Partial<_256.ValidatorSet>): _256.ValidatorSet;
        };
        Validator: {
            encode(message: _256.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.Validator;
            fromJSON(object: any): _256.Validator;
            toJSON(message: _256.Validator): unknown;
            fromPartial(object: Partial<_256.Validator>): _256.Validator;
        };
        SimpleValidator: {
            encode(message: _256.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _256.SimpleValidator;
            fromJSON(object: any): _256.SimpleValidator;
            toJSON(message: _256.SimpleValidator): unknown;
            fromPartial(object: Partial<_256.SimpleValidator>): _256.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _255.SignedMsgType;
        signedMsgTypeToJSON(object: _255.SignedMsgType): string;
        SignedMsgType: typeof _255.SignedMsgType;
        SignedMsgTypeSDKType: typeof _255.SignedMsgType;
        PartSetHeader: {
            encode(message: _255.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.PartSetHeader;
            fromJSON(object: any): _255.PartSetHeader;
            toJSON(message: _255.PartSetHeader): unknown;
            fromPartial(object: Partial<_255.PartSetHeader>): _255.PartSetHeader;
        };
        Part: {
            encode(message: _255.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Part;
            fromJSON(object: any): _255.Part;
            toJSON(message: _255.Part): unknown;
            fromPartial(object: Partial<_255.Part>): _255.Part;
        };
        BlockID: {
            encode(message: _255.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.BlockID;
            fromJSON(object: any): _255.BlockID;
            toJSON(message: _255.BlockID): unknown;
            fromPartial(object: Partial<_255.BlockID>): _255.BlockID;
        };
        Header: {
            encode(message: _255.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Header;
            fromJSON(object: any): _255.Header;
            toJSON(message: _255.Header): unknown;
            fromPartial(object: Partial<_255.Header>): _255.Header;
        };
        Data: {
            encode(message: _255.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Data;
            fromJSON(object: any): _255.Data;
            toJSON(message: _255.Data): unknown;
            fromPartial(object: Partial<_255.Data>): _255.Data;
        };
        Vote: {
            encode(message: _255.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Vote;
            fromJSON(object: any): _255.Vote;
            toJSON(message: _255.Vote): unknown;
            fromPartial(object: Partial<_255.Vote>): _255.Vote;
        };
        Commit: {
            encode(message: _255.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Commit;
            fromJSON(object: any): _255.Commit;
            toJSON(message: _255.Commit): unknown;
            fromPartial(object: Partial<_255.Commit>): _255.Commit;
        };
        CommitSig: {
            encode(message: _255.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.CommitSig;
            fromJSON(object: any): _255.CommitSig;
            toJSON(message: _255.CommitSig): unknown;
            fromPartial(object: Partial<_255.CommitSig>): _255.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _255.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.ExtendedCommit;
            fromJSON(object: any): _255.ExtendedCommit;
            toJSON(message: _255.ExtendedCommit): unknown;
            fromPartial(object: Partial<_255.ExtendedCommit>): _255.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _255.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.ExtendedCommitSig;
            fromJSON(object: any): _255.ExtendedCommitSig;
            toJSON(message: _255.ExtendedCommitSig): unknown;
            fromPartial(object: Partial<_255.ExtendedCommitSig>): _255.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _255.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.Proposal;
            fromJSON(object: any): _255.Proposal;
            toJSON(message: _255.Proposal): unknown;
            fromPartial(object: Partial<_255.Proposal>): _255.Proposal;
        };
        SignedHeader: {
            encode(message: _255.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.SignedHeader;
            fromJSON(object: any): _255.SignedHeader;
            toJSON(message: _255.SignedHeader): unknown;
            fromPartial(object: Partial<_255.SignedHeader>): _255.SignedHeader;
        };
        LightBlock: {
            encode(message: _255.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.LightBlock;
            fromJSON(object: any): _255.LightBlock;
            toJSON(message: _255.LightBlock): unknown;
            fromPartial(object: Partial<_255.LightBlock>): _255.LightBlock;
        };
        BlockMeta: {
            encode(message: _255.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.BlockMeta;
            fromJSON(object: any): _255.BlockMeta;
            toJSON(message: _255.BlockMeta): unknown;
            fromPartial(object: Partial<_255.BlockMeta>): _255.BlockMeta;
        };
        TxProof: {
            encode(message: _255.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _255.TxProof;
            fromJSON(object: any): _255.TxProof;
            toJSON(message: _255.TxProof): unknown;
            fromPartial(object: Partial<_255.TxProof>): _255.TxProof;
        };
        ConsensusParams: {
            encode(message: _254.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.ConsensusParams;
            fromJSON(object: any): _254.ConsensusParams;
            toJSON(message: _254.ConsensusParams): unknown;
            fromPartial(object: Partial<_254.ConsensusParams>): _254.ConsensusParams;
        };
        BlockParams: {
            encode(message: _254.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.BlockParams;
            fromJSON(object: any): _254.BlockParams;
            toJSON(message: _254.BlockParams): unknown;
            fromPartial(object: Partial<_254.BlockParams>): _254.BlockParams;
        };
        EvidenceParams: {
            encode(message: _254.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.EvidenceParams;
            fromJSON(object: any): _254.EvidenceParams;
            toJSON(message: _254.EvidenceParams): unknown;
            fromPartial(object: Partial<_254.EvidenceParams>): _254.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _254.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.ValidatorParams;
            fromJSON(object: any): _254.ValidatorParams;
            toJSON(message: _254.ValidatorParams): unknown;
            fromPartial(object: Partial<_254.ValidatorParams>): _254.ValidatorParams;
        };
        VersionParams: {
            encode(message: _254.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.VersionParams;
            fromJSON(object: any): _254.VersionParams;
            toJSON(message: _254.VersionParams): unknown;
            fromPartial(object: Partial<_254.VersionParams>): _254.VersionParams;
        };
        HashedParams: {
            encode(message: _254.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.HashedParams;
            fromJSON(object: any): _254.HashedParams;
            toJSON(message: _254.HashedParams): unknown;
            fromPartial(object: Partial<_254.HashedParams>): _254.HashedParams;
        };
        ABCIParams: {
            encode(message: _254.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _254.ABCIParams;
            fromJSON(object: any): _254.ABCIParams;
            toJSON(message: _254.ABCIParams): unknown;
            fromPartial(object: Partial<_254.ABCIParams>): _254.ABCIParams;
        };
        Evidence: {
            encode(message: _253.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _253.Evidence;
            fromJSON(object: any): _253.Evidence;
            toJSON(message: _253.Evidence): unknown;
            fromPartial(object: Partial<_253.Evidence>): _253.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _253.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _253.DuplicateVoteEvidence;
            fromJSON(object: any): _253.DuplicateVoteEvidence;
            toJSON(message: _253.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_253.DuplicateVoteEvidence>): _253.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _253.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _253.LightClientAttackEvidence;
            fromJSON(object: any): _253.LightClientAttackEvidence;
            toJSON(message: _253.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_253.LightClientAttackEvidence>): _253.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _253.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _253.EvidenceList;
            fromJSON(object: any): _253.EvidenceList;
            toJSON(message: _253.EvidenceList): unknown;
            fromPartial(object: Partial<_253.EvidenceList>): _253.EvidenceList;
        };
        Block: {
            encode(message: _252.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _252.Block;
            fromJSON(object: any): _252.Block;
            toJSON(message: _252.Block): unknown;
            fromPartial(object: Partial<_252.Block>): _252.Block;
        };
    };
    const version: {
        App: {
            encode(message: _257.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _257.App;
            fromJSON(object: any): _257.App;
            toJSON(message: _257.App): unknown;
            fromPartial(object: Partial<_257.App>): _257.App;
        };
        Consensus: {
            encode(message: _257.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: import("protobufjs").Reader | Uint8Array, length?: number): _257.Consensus;
            fromJSON(object: any): _257.Consensus;
            toJSON(message: _257.Consensus): unknown;
            fromPartial(object: Partial<_257.Consensus>): _257.Consensus;
        };
    };
}
