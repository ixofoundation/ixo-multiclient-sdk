import * as _236 from "./abci/types";
import * as _237 from "./crypto/keys";
import * as _238 from "./crypto/proof";
import * as _239 from "./libs/bits/types";
import * as _240 from "./p2p/types";
import * as _241 from "./types/block";
import * as _242 from "./types/evidence";
import * as _243 from "./types/params";
import * as _244 from "./types/types";
import * as _245 from "./types/validator";
import * as _246 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _236.CheckTxType;
        checkTxTypeToJSON(object: _236.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _236.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _236.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _236.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _236.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _236.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _236.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _236.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _236.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _236.MisbehaviorType;
        misbehaviorTypeToJSON(object: _236.MisbehaviorType): string;
        CheckTxType: typeof _236.CheckTxType;
        CheckTxTypeSDKType: typeof _236.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _236.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _236.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _236.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _236.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _236.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _236.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _236.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _236.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _236.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _236.MisbehaviorType;
        Request: {
            encode(message: _236.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Request;
            fromJSON(object: any): _236.Request;
            toJSON(message: _236.Request): unknown;
            fromPartial(object: Partial<_236.Request>): _236.Request;
        };
        RequestEcho: {
            encode(message: _236.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestEcho;
            fromJSON(object: any): _236.RequestEcho;
            toJSON(message: _236.RequestEcho): unknown;
            fromPartial(object: Partial<_236.RequestEcho>): _236.RequestEcho;
        };
        RequestFlush: {
            encode(_: _236.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestFlush;
            fromJSON(_: any): _236.RequestFlush;
            toJSON(_: _236.RequestFlush): unknown;
            fromPartial(_: Partial<_236.RequestFlush>): _236.RequestFlush;
        };
        RequestInfo: {
            encode(message: _236.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestInfo;
            fromJSON(object: any): _236.RequestInfo;
            toJSON(message: _236.RequestInfo): unknown;
            fromPartial(object: Partial<_236.RequestInfo>): _236.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _236.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestInitChain;
            fromJSON(object: any): _236.RequestInitChain;
            toJSON(message: _236.RequestInitChain): unknown;
            fromPartial(object: Partial<_236.RequestInitChain>): _236.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _236.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestQuery;
            fromJSON(object: any): _236.RequestQuery;
            toJSON(message: _236.RequestQuery): unknown;
            fromPartial(object: Partial<_236.RequestQuery>): _236.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _236.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestCheckTx;
            fromJSON(object: any): _236.RequestCheckTx;
            toJSON(message: _236.RequestCheckTx): unknown;
            fromPartial(object: Partial<_236.RequestCheckTx>): _236.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _236.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestCommit;
            fromJSON(_: any): _236.RequestCommit;
            toJSON(_: _236.RequestCommit): unknown;
            fromPartial(_: Partial<_236.RequestCommit>): _236.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _236.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestListSnapshots;
            fromJSON(_: any): _236.RequestListSnapshots;
            toJSON(_: _236.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_236.RequestListSnapshots>): _236.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _236.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestOfferSnapshot;
            fromJSON(object: any): _236.RequestOfferSnapshot;
            toJSON(message: _236.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_236.RequestOfferSnapshot>): _236.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _236.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestLoadSnapshotChunk;
            fromJSON(object: any): _236.RequestLoadSnapshotChunk;
            toJSON(message: _236.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_236.RequestLoadSnapshotChunk>): _236.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _236.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestApplySnapshotChunk;
            fromJSON(object: any): _236.RequestApplySnapshotChunk;
            toJSON(message: _236.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_236.RequestApplySnapshotChunk>): _236.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _236.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestPrepareProposal;
            fromJSON(object: any): _236.RequestPrepareProposal;
            toJSON(message: _236.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_236.RequestPrepareProposal>): _236.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _236.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestProcessProposal;
            fromJSON(object: any): _236.RequestProcessProposal;
            toJSON(message: _236.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_236.RequestProcessProposal>): _236.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _236.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestExtendVote;
            fromJSON(object: any): _236.RequestExtendVote;
            toJSON(message: _236.RequestExtendVote): unknown;
            fromPartial(object: Partial<_236.RequestExtendVote>): _236.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _236.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestVerifyVoteExtension;
            fromJSON(object: any): _236.RequestVerifyVoteExtension;
            toJSON(message: _236.RequestVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_236.RequestVerifyVoteExtension>): _236.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _236.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.RequestFinalizeBlock;
            fromJSON(object: any): _236.RequestFinalizeBlock;
            toJSON(message: _236.RequestFinalizeBlock): unknown;
            fromPartial(object: Partial<_236.RequestFinalizeBlock>): _236.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _236.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Response;
            fromJSON(object: any): _236.Response;
            toJSON(message: _236.Response): unknown;
            fromPartial(object: Partial<_236.Response>): _236.Response;
        };
        ResponseException: {
            encode(message: _236.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseException;
            fromJSON(object: any): _236.ResponseException;
            toJSON(message: _236.ResponseException): unknown;
            fromPartial(object: Partial<_236.ResponseException>): _236.ResponseException;
        };
        ResponseEcho: {
            encode(message: _236.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseEcho;
            fromJSON(object: any): _236.ResponseEcho;
            toJSON(message: _236.ResponseEcho): unknown;
            fromPartial(object: Partial<_236.ResponseEcho>): _236.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _236.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseFlush;
            fromJSON(_: any): _236.ResponseFlush;
            toJSON(_: _236.ResponseFlush): unknown;
            fromPartial(_: Partial<_236.ResponseFlush>): _236.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _236.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseInfo;
            fromJSON(object: any): _236.ResponseInfo;
            toJSON(message: _236.ResponseInfo): unknown;
            fromPartial(object: Partial<_236.ResponseInfo>): _236.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _236.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseInitChain;
            fromJSON(object: any): _236.ResponseInitChain;
            toJSON(message: _236.ResponseInitChain): unknown;
            fromPartial(object: Partial<_236.ResponseInitChain>): _236.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _236.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseQuery;
            fromJSON(object: any): _236.ResponseQuery;
            toJSON(message: _236.ResponseQuery): unknown;
            fromPartial(object: Partial<_236.ResponseQuery>): _236.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _236.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseCheckTx;
            fromJSON(object: any): _236.ResponseCheckTx;
            toJSON(message: _236.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_236.ResponseCheckTx>): _236.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _236.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseCommit;
            fromJSON(object: any): _236.ResponseCommit;
            toJSON(message: _236.ResponseCommit): unknown;
            fromPartial(object: Partial<_236.ResponseCommit>): _236.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _236.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseListSnapshots;
            fromJSON(object: any): _236.ResponseListSnapshots;
            toJSON(message: _236.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_236.ResponseListSnapshots>): _236.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _236.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseOfferSnapshot;
            fromJSON(object: any): _236.ResponseOfferSnapshot;
            toJSON(message: _236.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_236.ResponseOfferSnapshot>): _236.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _236.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _236.ResponseLoadSnapshotChunk;
            toJSON(message: _236.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_236.ResponseLoadSnapshotChunk>): _236.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _236.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseApplySnapshotChunk;
            fromJSON(object: any): _236.ResponseApplySnapshotChunk;
            toJSON(message: _236.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_236.ResponseApplySnapshotChunk>): _236.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _236.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponsePrepareProposal;
            fromJSON(object: any): _236.ResponsePrepareProposal;
            toJSON(message: _236.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_236.ResponsePrepareProposal>): _236.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _236.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseProcessProposal;
            fromJSON(object: any): _236.ResponseProcessProposal;
            toJSON(message: _236.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_236.ResponseProcessProposal>): _236.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _236.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseExtendVote;
            fromJSON(object: any): _236.ResponseExtendVote;
            toJSON(message: _236.ResponseExtendVote): unknown;
            fromPartial(object: Partial<_236.ResponseExtendVote>): _236.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _236.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseVerifyVoteExtension;
            fromJSON(object: any): _236.ResponseVerifyVoteExtension;
            toJSON(message: _236.ResponseVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_236.ResponseVerifyVoteExtension>): _236.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _236.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ResponseFinalizeBlock;
            fromJSON(object: any): _236.ResponseFinalizeBlock;
            toJSON(message: _236.ResponseFinalizeBlock): unknown;
            fromPartial(object: Partial<_236.ResponseFinalizeBlock>): _236.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _236.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.CommitInfo;
            fromJSON(object: any): _236.CommitInfo;
            toJSON(message: _236.CommitInfo): unknown;
            fromPartial(object: Partial<_236.CommitInfo>): _236.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _236.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ExtendedCommitInfo;
            fromJSON(object: any): _236.ExtendedCommitInfo;
            toJSON(message: _236.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_236.ExtendedCommitInfo>): _236.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _236.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Event;
            fromJSON(object: any): _236.Event;
            toJSON(message: _236.Event): unknown;
            fromPartial(object: Partial<_236.Event>): _236.Event;
        };
        EventAttribute: {
            encode(message: _236.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.EventAttribute;
            fromJSON(object: any): _236.EventAttribute;
            toJSON(message: _236.EventAttribute): unknown;
            fromPartial(object: Partial<_236.EventAttribute>): _236.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _236.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ExecTxResult;
            fromJSON(object: any): _236.ExecTxResult;
            toJSON(message: _236.ExecTxResult): unknown;
            fromPartial(object: Partial<_236.ExecTxResult>): _236.ExecTxResult;
        };
        TxResult: {
            encode(message: _236.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.TxResult;
            fromJSON(object: any): _236.TxResult;
            toJSON(message: _236.TxResult): unknown;
            fromPartial(object: Partial<_236.TxResult>): _236.TxResult;
        };
        Validator: {
            encode(message: _236.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Validator;
            fromJSON(object: any): _236.Validator;
            toJSON(message: _236.Validator): unknown;
            fromPartial(object: Partial<_236.Validator>): _236.Validator;
        };
        ValidatorUpdate: {
            encode(message: _236.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ValidatorUpdate;
            fromJSON(object: any): _236.ValidatorUpdate;
            toJSON(message: _236.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_236.ValidatorUpdate>): _236.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _236.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.VoteInfo;
            fromJSON(object: any): _236.VoteInfo;
            toJSON(message: _236.VoteInfo): unknown;
            fromPartial(object: Partial<_236.VoteInfo>): _236.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _236.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.ExtendedVoteInfo;
            fromJSON(object: any): _236.ExtendedVoteInfo;
            toJSON(message: _236.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_236.ExtendedVoteInfo>): _236.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _236.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Misbehavior;
            fromJSON(object: any): _236.Misbehavior;
            toJSON(message: _236.Misbehavior): unknown;
            fromPartial(object: Partial<_236.Misbehavior>): _236.Misbehavior;
        };
        Snapshot: {
            encode(message: _236.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.Snapshot;
            fromJSON(object: any): _236.Snapshot;
            toJSON(message: _236.Snapshot): unknown;
            fromPartial(object: Partial<_236.Snapshot>): _236.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _238.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Proof;
            fromJSON(object: any): _238.Proof;
            toJSON(message: _238.Proof): unknown;
            fromPartial(object: Partial<_238.Proof>): _238.Proof;
        };
        ValueOp: {
            encode(message: _238.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValueOp;
            fromJSON(object: any): _238.ValueOp;
            toJSON(message: _238.ValueOp): unknown;
            fromPartial(object: Partial<_238.ValueOp>): _238.ValueOp;
        };
        DominoOp: {
            encode(message: _238.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DominoOp;
            fromJSON(object: any): _238.DominoOp;
            toJSON(message: _238.DominoOp): unknown;
            fromPartial(object: Partial<_238.DominoOp>): _238.DominoOp;
        };
        ProofOp: {
            encode(message: _238.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ProofOp;
            fromJSON(object: any): _238.ProofOp;
            toJSON(message: _238.ProofOp): unknown;
            fromPartial(object: Partial<_238.ProofOp>): _238.ProofOp;
        };
        ProofOps: {
            encode(message: _238.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ProofOps;
            fromJSON(object: any): _238.ProofOps;
            toJSON(message: _238.ProofOps): unknown;
            fromPartial(object: Partial<_238.ProofOps>): _238.ProofOps;
        };
        PublicKey: {
            encode(message: _237.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.PublicKey;
            fromJSON(object: any): _237.PublicKey;
            toJSON(message: _237.PublicKey): unknown;
            fromPartial(object: Partial<_237.PublicKey>): _237.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _239.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.BitArray;
                fromJSON(object: any): _239.BitArray;
                toJSON(message: _239.BitArray): unknown;
                fromPartial(object: Partial<_239.BitArray>): _239.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _240.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.NetAddress;
            fromJSON(object: any): _240.NetAddress;
            toJSON(message: _240.NetAddress): unknown;
            fromPartial(object: Partial<_240.NetAddress>): _240.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _240.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.ProtocolVersion;
            fromJSON(object: any): _240.ProtocolVersion;
            toJSON(message: _240.ProtocolVersion): unknown;
            fromPartial(object: Partial<_240.ProtocolVersion>): _240.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _240.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.DefaultNodeInfo;
            fromJSON(object: any): _240.DefaultNodeInfo;
            toJSON(message: _240.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_240.DefaultNodeInfo>): _240.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _240.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.DefaultNodeInfoOther;
            fromJSON(object: any): _240.DefaultNodeInfoOther;
            toJSON(message: _240.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_240.DefaultNodeInfoOther>): _240.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _245.BlockIDFlag;
        blockIDFlagToJSON(object: _245.BlockIDFlag): string;
        BlockIDFlag: typeof _245.BlockIDFlag;
        BlockIDFlagSDKType: typeof _245.BlockIDFlag;
        ValidatorSet: {
            encode(message: _245.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.ValidatorSet;
            fromJSON(object: any): _245.ValidatorSet;
            toJSON(message: _245.ValidatorSet): unknown;
            fromPartial(object: Partial<_245.ValidatorSet>): _245.ValidatorSet;
        };
        Validator: {
            encode(message: _245.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Validator;
            fromJSON(object: any): _245.Validator;
            toJSON(message: _245.Validator): unknown;
            fromPartial(object: Partial<_245.Validator>): _245.Validator;
        };
        SimpleValidator: {
            encode(message: _245.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.SimpleValidator;
            fromJSON(object: any): _245.SimpleValidator;
            toJSON(message: _245.SimpleValidator): unknown;
            fromPartial(object: Partial<_245.SimpleValidator>): _245.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _244.SignedMsgType;
        signedMsgTypeToJSON(object: _244.SignedMsgType): string;
        SignedMsgType: typeof _244.SignedMsgType;
        SignedMsgTypeSDKType: typeof _244.SignedMsgType;
        PartSetHeader: {
            encode(message: _244.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.PartSetHeader;
            fromJSON(object: any): _244.PartSetHeader;
            toJSON(message: _244.PartSetHeader): unknown;
            fromPartial(object: Partial<_244.PartSetHeader>): _244.PartSetHeader;
        };
        Part: {
            encode(message: _244.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Part;
            fromJSON(object: any): _244.Part;
            toJSON(message: _244.Part): unknown;
            fromPartial(object: Partial<_244.Part>): _244.Part;
        };
        BlockID: {
            encode(message: _244.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.BlockID;
            fromJSON(object: any): _244.BlockID;
            toJSON(message: _244.BlockID): unknown;
            fromPartial(object: Partial<_244.BlockID>): _244.BlockID;
        };
        Header: {
            encode(message: _244.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Header;
            fromJSON(object: any): _244.Header;
            toJSON(message: _244.Header): unknown;
            fromPartial(object: Partial<_244.Header>): _244.Header;
        };
        Data: {
            encode(message: _244.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Data;
            fromJSON(object: any): _244.Data;
            toJSON(message: _244.Data): unknown;
            fromPartial(object: Partial<_244.Data>): _244.Data;
        };
        Vote: {
            encode(message: _244.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Vote;
            fromJSON(object: any): _244.Vote;
            toJSON(message: _244.Vote): unknown;
            fromPartial(object: Partial<_244.Vote>): _244.Vote;
        };
        Commit: {
            encode(message: _244.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Commit;
            fromJSON(object: any): _244.Commit;
            toJSON(message: _244.Commit): unknown;
            fromPartial(object: Partial<_244.Commit>): _244.Commit;
        };
        CommitSig: {
            encode(message: _244.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.CommitSig;
            fromJSON(object: any): _244.CommitSig;
            toJSON(message: _244.CommitSig): unknown;
            fromPartial(object: Partial<_244.CommitSig>): _244.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _244.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ExtendedCommit;
            fromJSON(object: any): _244.ExtendedCommit;
            toJSON(message: _244.ExtendedCommit): unknown;
            fromPartial(object: Partial<_244.ExtendedCommit>): _244.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _244.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ExtendedCommitSig;
            fromJSON(object: any): _244.ExtendedCommitSig;
            toJSON(message: _244.ExtendedCommitSig): unknown;
            fromPartial(object: Partial<_244.ExtendedCommitSig>): _244.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _244.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Proposal;
            fromJSON(object: any): _244.Proposal;
            toJSON(message: _244.Proposal): unknown;
            fromPartial(object: Partial<_244.Proposal>): _244.Proposal;
        };
        SignedHeader: {
            encode(message: _244.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SignedHeader;
            fromJSON(object: any): _244.SignedHeader;
            toJSON(message: _244.SignedHeader): unknown;
            fromPartial(object: Partial<_244.SignedHeader>): _244.SignedHeader;
        };
        LightBlock: {
            encode(message: _244.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.LightBlock;
            fromJSON(object: any): _244.LightBlock;
            toJSON(message: _244.LightBlock): unknown;
            fromPartial(object: Partial<_244.LightBlock>): _244.LightBlock;
        };
        BlockMeta: {
            encode(message: _244.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.BlockMeta;
            fromJSON(object: any): _244.BlockMeta;
            toJSON(message: _244.BlockMeta): unknown;
            fromPartial(object: Partial<_244.BlockMeta>): _244.BlockMeta;
        };
        TxProof: {
            encode(message: _244.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.TxProof;
            fromJSON(object: any): _244.TxProof;
            toJSON(message: _244.TxProof): unknown;
            fromPartial(object: Partial<_244.TxProof>): _244.TxProof;
        };
        ConsensusParams: {
            encode(message: _243.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ConsensusParams;
            fromJSON(object: any): _243.ConsensusParams;
            toJSON(message: _243.ConsensusParams): unknown;
            fromPartial(object: Partial<_243.ConsensusParams>): _243.ConsensusParams;
        };
        BlockParams: {
            encode(message: _243.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.BlockParams;
            fromJSON(object: any): _243.BlockParams;
            toJSON(message: _243.BlockParams): unknown;
            fromPartial(object: Partial<_243.BlockParams>): _243.BlockParams;
        };
        EvidenceParams: {
            encode(message: _243.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.EvidenceParams;
            fromJSON(object: any): _243.EvidenceParams;
            toJSON(message: _243.EvidenceParams): unknown;
            fromPartial(object: Partial<_243.EvidenceParams>): _243.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _243.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ValidatorParams;
            fromJSON(object: any): _243.ValidatorParams;
            toJSON(message: _243.ValidatorParams): unknown;
            fromPartial(object: Partial<_243.ValidatorParams>): _243.ValidatorParams;
        };
        VersionParams: {
            encode(message: _243.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.VersionParams;
            fromJSON(object: any): _243.VersionParams;
            toJSON(message: _243.VersionParams): unknown;
            fromPartial(object: Partial<_243.VersionParams>): _243.VersionParams;
        };
        HashedParams: {
            encode(message: _243.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.HashedParams;
            fromJSON(object: any): _243.HashedParams;
            toJSON(message: _243.HashedParams): unknown;
            fromPartial(object: Partial<_243.HashedParams>): _243.HashedParams;
        };
        ABCIParams: {
            encode(message: _243.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ABCIParams;
            fromJSON(object: any): _243.ABCIParams;
            toJSON(message: _243.ABCIParams): unknown;
            fromPartial(object: Partial<_243.ABCIParams>): _243.ABCIParams;
        };
        Evidence: {
            encode(message: _242.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Evidence;
            fromJSON(object: any): _242.Evidence;
            toJSON(message: _242.Evidence): unknown;
            fromPartial(object: Partial<_242.Evidence>): _242.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _242.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.DuplicateVoteEvidence;
            fromJSON(object: any): _242.DuplicateVoteEvidence;
            toJSON(message: _242.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_242.DuplicateVoteEvidence>): _242.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _242.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.LightClientAttackEvidence;
            fromJSON(object: any): _242.LightClientAttackEvidence;
            toJSON(message: _242.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_242.LightClientAttackEvidence>): _242.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _242.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EvidenceList;
            fromJSON(object: any): _242.EvidenceList;
            toJSON(message: _242.EvidenceList): unknown;
            fromPartial(object: Partial<_242.EvidenceList>): _242.EvidenceList;
        };
        Block: {
            encode(message: _241.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.Block;
            fromJSON(object: any): _241.Block;
            toJSON(message: _241.Block): unknown;
            fromPartial(object: Partial<_241.Block>): _241.Block;
        };
    };
    const version: {
        App: {
            encode(message: _246.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.App;
            fromJSON(object: any): _246.App;
            toJSON(message: _246.App): unknown;
            fromPartial(object: Partial<_246.App>): _246.App;
        };
        Consensus: {
            encode(message: _246.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Consensus;
            fromJSON(object: any): _246.Consensus;
            toJSON(message: _246.Consensus): unknown;
            fromPartial(object: Partial<_246.Consensus>): _246.Consensus;
        };
    };
}
