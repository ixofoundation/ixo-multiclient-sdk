import * as _235 from "./abci/types";
import * as _236 from "./crypto/keys";
import * as _237 from "./crypto/proof";
import * as _238 from "./libs/bits/types";
import * as _239 from "./p2p/types";
import * as _240 from "./types/block";
import * as _241 from "./types/evidence";
import * as _242 from "./types/params";
import * as _243 from "./types/types";
import * as _244 from "./types/validator";
import * as _245 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _235.CheckTxType;
        checkTxTypeToJSON(object: _235.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _235.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _235.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _235.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _235.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _235.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _235.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _235.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _235.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _235.MisbehaviorType;
        misbehaviorTypeToJSON(object: _235.MisbehaviorType): string;
        CheckTxType: typeof _235.CheckTxType;
        CheckTxTypeSDKType: typeof _235.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _235.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _235.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _235.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _235.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _235.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _235.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _235.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _235.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _235.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _235.MisbehaviorType;
        Request: {
            encode(message: _235.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Request;
            fromJSON(object: any): _235.Request;
            toJSON(message: _235.Request): unknown;
            fromPartial(object: Partial<_235.Request>): _235.Request;
        };
        RequestEcho: {
            encode(message: _235.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestEcho;
            fromJSON(object: any): _235.RequestEcho;
            toJSON(message: _235.RequestEcho): unknown;
            fromPartial(object: Partial<_235.RequestEcho>): _235.RequestEcho;
        };
        RequestFlush: {
            encode(_: _235.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestFlush;
            fromJSON(_: any): _235.RequestFlush;
            toJSON(_: _235.RequestFlush): unknown;
            fromPartial(_: Partial<_235.RequestFlush>): _235.RequestFlush;
        };
        RequestInfo: {
            encode(message: _235.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestInfo;
            fromJSON(object: any): _235.RequestInfo;
            toJSON(message: _235.RequestInfo): unknown;
            fromPartial(object: Partial<_235.RequestInfo>): _235.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _235.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestInitChain;
            fromJSON(object: any): _235.RequestInitChain;
            toJSON(message: _235.RequestInitChain): unknown;
            fromPartial(object: Partial<_235.RequestInitChain>): _235.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _235.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestQuery;
            fromJSON(object: any): _235.RequestQuery;
            toJSON(message: _235.RequestQuery): unknown;
            fromPartial(object: Partial<_235.RequestQuery>): _235.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _235.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestCheckTx;
            fromJSON(object: any): _235.RequestCheckTx;
            toJSON(message: _235.RequestCheckTx): unknown;
            fromPartial(object: Partial<_235.RequestCheckTx>): _235.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _235.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestCommit;
            fromJSON(_: any): _235.RequestCommit;
            toJSON(_: _235.RequestCommit): unknown;
            fromPartial(_: Partial<_235.RequestCommit>): _235.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _235.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestListSnapshots;
            fromJSON(_: any): _235.RequestListSnapshots;
            toJSON(_: _235.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_235.RequestListSnapshots>): _235.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _235.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestOfferSnapshot;
            fromJSON(object: any): _235.RequestOfferSnapshot;
            toJSON(message: _235.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_235.RequestOfferSnapshot>): _235.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _235.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestLoadSnapshotChunk;
            fromJSON(object: any): _235.RequestLoadSnapshotChunk;
            toJSON(message: _235.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_235.RequestLoadSnapshotChunk>): _235.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _235.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestApplySnapshotChunk;
            fromJSON(object: any): _235.RequestApplySnapshotChunk;
            toJSON(message: _235.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_235.RequestApplySnapshotChunk>): _235.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _235.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestPrepareProposal;
            fromJSON(object: any): _235.RequestPrepareProposal;
            toJSON(message: _235.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_235.RequestPrepareProposal>): _235.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _235.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestProcessProposal;
            fromJSON(object: any): _235.RequestProcessProposal;
            toJSON(message: _235.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_235.RequestProcessProposal>): _235.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _235.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestExtendVote;
            fromJSON(object: any): _235.RequestExtendVote;
            toJSON(message: _235.RequestExtendVote): unknown;
            fromPartial(object: Partial<_235.RequestExtendVote>): _235.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _235.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestVerifyVoteExtension;
            fromJSON(object: any): _235.RequestVerifyVoteExtension;
            toJSON(message: _235.RequestVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_235.RequestVerifyVoteExtension>): _235.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _235.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.RequestFinalizeBlock;
            fromJSON(object: any): _235.RequestFinalizeBlock;
            toJSON(message: _235.RequestFinalizeBlock): unknown;
            fromPartial(object: Partial<_235.RequestFinalizeBlock>): _235.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _235.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Response;
            fromJSON(object: any): _235.Response;
            toJSON(message: _235.Response): unknown;
            fromPartial(object: Partial<_235.Response>): _235.Response;
        };
        ResponseException: {
            encode(message: _235.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseException;
            fromJSON(object: any): _235.ResponseException;
            toJSON(message: _235.ResponseException): unknown;
            fromPartial(object: Partial<_235.ResponseException>): _235.ResponseException;
        };
        ResponseEcho: {
            encode(message: _235.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseEcho;
            fromJSON(object: any): _235.ResponseEcho;
            toJSON(message: _235.ResponseEcho): unknown;
            fromPartial(object: Partial<_235.ResponseEcho>): _235.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _235.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseFlush;
            fromJSON(_: any): _235.ResponseFlush;
            toJSON(_: _235.ResponseFlush): unknown;
            fromPartial(_: Partial<_235.ResponseFlush>): _235.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _235.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseInfo;
            fromJSON(object: any): _235.ResponseInfo;
            toJSON(message: _235.ResponseInfo): unknown;
            fromPartial(object: Partial<_235.ResponseInfo>): _235.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _235.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseInitChain;
            fromJSON(object: any): _235.ResponseInitChain;
            toJSON(message: _235.ResponseInitChain): unknown;
            fromPartial(object: Partial<_235.ResponseInitChain>): _235.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _235.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseQuery;
            fromJSON(object: any): _235.ResponseQuery;
            toJSON(message: _235.ResponseQuery): unknown;
            fromPartial(object: Partial<_235.ResponseQuery>): _235.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _235.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseCheckTx;
            fromJSON(object: any): _235.ResponseCheckTx;
            toJSON(message: _235.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_235.ResponseCheckTx>): _235.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _235.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseCommit;
            fromJSON(object: any): _235.ResponseCommit;
            toJSON(message: _235.ResponseCommit): unknown;
            fromPartial(object: Partial<_235.ResponseCommit>): _235.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _235.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseListSnapshots;
            fromJSON(object: any): _235.ResponseListSnapshots;
            toJSON(message: _235.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_235.ResponseListSnapshots>): _235.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _235.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseOfferSnapshot;
            fromJSON(object: any): _235.ResponseOfferSnapshot;
            toJSON(message: _235.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_235.ResponseOfferSnapshot>): _235.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _235.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _235.ResponseLoadSnapshotChunk;
            toJSON(message: _235.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_235.ResponseLoadSnapshotChunk>): _235.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _235.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseApplySnapshotChunk;
            fromJSON(object: any): _235.ResponseApplySnapshotChunk;
            toJSON(message: _235.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_235.ResponseApplySnapshotChunk>): _235.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _235.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponsePrepareProposal;
            fromJSON(object: any): _235.ResponsePrepareProposal;
            toJSON(message: _235.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_235.ResponsePrepareProposal>): _235.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _235.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseProcessProposal;
            fromJSON(object: any): _235.ResponseProcessProposal;
            toJSON(message: _235.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_235.ResponseProcessProposal>): _235.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _235.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseExtendVote;
            fromJSON(object: any): _235.ResponseExtendVote;
            toJSON(message: _235.ResponseExtendVote): unknown;
            fromPartial(object: Partial<_235.ResponseExtendVote>): _235.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _235.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseVerifyVoteExtension;
            fromJSON(object: any): _235.ResponseVerifyVoteExtension;
            toJSON(message: _235.ResponseVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_235.ResponseVerifyVoteExtension>): _235.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _235.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ResponseFinalizeBlock;
            fromJSON(object: any): _235.ResponseFinalizeBlock;
            toJSON(message: _235.ResponseFinalizeBlock): unknown;
            fromPartial(object: Partial<_235.ResponseFinalizeBlock>): _235.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _235.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.CommitInfo;
            fromJSON(object: any): _235.CommitInfo;
            toJSON(message: _235.CommitInfo): unknown;
            fromPartial(object: Partial<_235.CommitInfo>): _235.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _235.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ExtendedCommitInfo;
            fromJSON(object: any): _235.ExtendedCommitInfo;
            toJSON(message: _235.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_235.ExtendedCommitInfo>): _235.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _235.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Event;
            fromJSON(object: any): _235.Event;
            toJSON(message: _235.Event): unknown;
            fromPartial(object: Partial<_235.Event>): _235.Event;
        };
        EventAttribute: {
            encode(message: _235.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.EventAttribute;
            fromJSON(object: any): _235.EventAttribute;
            toJSON(message: _235.EventAttribute): unknown;
            fromPartial(object: Partial<_235.EventAttribute>): _235.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _235.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ExecTxResult;
            fromJSON(object: any): _235.ExecTxResult;
            toJSON(message: _235.ExecTxResult): unknown;
            fromPartial(object: Partial<_235.ExecTxResult>): _235.ExecTxResult;
        };
        TxResult: {
            encode(message: _235.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.TxResult;
            fromJSON(object: any): _235.TxResult;
            toJSON(message: _235.TxResult): unknown;
            fromPartial(object: Partial<_235.TxResult>): _235.TxResult;
        };
        Validator: {
            encode(message: _235.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Validator;
            fromJSON(object: any): _235.Validator;
            toJSON(message: _235.Validator): unknown;
            fromPartial(object: Partial<_235.Validator>): _235.Validator;
        };
        ValidatorUpdate: {
            encode(message: _235.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ValidatorUpdate;
            fromJSON(object: any): _235.ValidatorUpdate;
            toJSON(message: _235.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_235.ValidatorUpdate>): _235.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _235.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.VoteInfo;
            fromJSON(object: any): _235.VoteInfo;
            toJSON(message: _235.VoteInfo): unknown;
            fromPartial(object: Partial<_235.VoteInfo>): _235.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _235.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.ExtendedVoteInfo;
            fromJSON(object: any): _235.ExtendedVoteInfo;
            toJSON(message: _235.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_235.ExtendedVoteInfo>): _235.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _235.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Misbehavior;
            fromJSON(object: any): _235.Misbehavior;
            toJSON(message: _235.Misbehavior): unknown;
            fromPartial(object: Partial<_235.Misbehavior>): _235.Misbehavior;
        };
        Snapshot: {
            encode(message: _235.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Snapshot;
            fromJSON(object: any): _235.Snapshot;
            toJSON(message: _235.Snapshot): unknown;
            fromPartial(object: Partial<_235.Snapshot>): _235.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _237.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.Proof;
            fromJSON(object: any): _237.Proof;
            toJSON(message: _237.Proof): unknown;
            fromPartial(object: Partial<_237.Proof>): _237.Proof;
        };
        ValueOp: {
            encode(message: _237.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.ValueOp;
            fromJSON(object: any): _237.ValueOp;
            toJSON(message: _237.ValueOp): unknown;
            fromPartial(object: Partial<_237.ValueOp>): _237.ValueOp;
        };
        DominoOp: {
            encode(message: _237.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.DominoOp;
            fromJSON(object: any): _237.DominoOp;
            toJSON(message: _237.DominoOp): unknown;
            fromPartial(object: Partial<_237.DominoOp>): _237.DominoOp;
        };
        ProofOp: {
            encode(message: _237.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.ProofOp;
            fromJSON(object: any): _237.ProofOp;
            toJSON(message: _237.ProofOp): unknown;
            fromPartial(object: Partial<_237.ProofOp>): _237.ProofOp;
        };
        ProofOps: {
            encode(message: _237.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.ProofOps;
            fromJSON(object: any): _237.ProofOps;
            toJSON(message: _237.ProofOps): unknown;
            fromPartial(object: Partial<_237.ProofOps>): _237.ProofOps;
        };
        PublicKey: {
            encode(message: _236.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.PublicKey;
            fromJSON(object: any): _236.PublicKey;
            toJSON(message: _236.PublicKey): unknown;
            fromPartial(object: Partial<_236.PublicKey>): _236.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _238.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.BitArray;
                fromJSON(object: any): _238.BitArray;
                toJSON(message: _238.BitArray): unknown;
                fromPartial(object: Partial<_238.BitArray>): _238.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _239.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.NetAddress;
            fromJSON(object: any): _239.NetAddress;
            toJSON(message: _239.NetAddress): unknown;
            fromPartial(object: Partial<_239.NetAddress>): _239.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _239.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ProtocolVersion;
            fromJSON(object: any): _239.ProtocolVersion;
            toJSON(message: _239.ProtocolVersion): unknown;
            fromPartial(object: Partial<_239.ProtocolVersion>): _239.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _239.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DefaultNodeInfo;
            fromJSON(object: any): _239.DefaultNodeInfo;
            toJSON(message: _239.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_239.DefaultNodeInfo>): _239.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _239.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DefaultNodeInfoOther;
            fromJSON(object: any): _239.DefaultNodeInfoOther;
            toJSON(message: _239.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_239.DefaultNodeInfoOther>): _239.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _244.BlockIDFlag;
        blockIDFlagToJSON(object: _244.BlockIDFlag): string;
        BlockIDFlag: typeof _244.BlockIDFlag;
        BlockIDFlagSDKType: typeof _244.BlockIDFlag;
        ValidatorSet: {
            encode(message: _244.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ValidatorSet;
            fromJSON(object: any): _244.ValidatorSet;
            toJSON(message: _244.ValidatorSet): unknown;
            fromPartial(object: Partial<_244.ValidatorSet>): _244.ValidatorSet;
        };
        Validator: {
            encode(message: _244.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Validator;
            fromJSON(object: any): _244.Validator;
            toJSON(message: _244.Validator): unknown;
            fromPartial(object: Partial<_244.Validator>): _244.Validator;
        };
        SimpleValidator: {
            encode(message: _244.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.SimpleValidator;
            fromJSON(object: any): _244.SimpleValidator;
            toJSON(message: _244.SimpleValidator): unknown;
            fromPartial(object: Partial<_244.SimpleValidator>): _244.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _243.SignedMsgType;
        signedMsgTypeToJSON(object: _243.SignedMsgType): string;
        SignedMsgType: typeof _243.SignedMsgType;
        SignedMsgTypeSDKType: typeof _243.SignedMsgType;
        PartSetHeader: {
            encode(message: _243.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.PartSetHeader;
            fromJSON(object: any): _243.PartSetHeader;
            toJSON(message: _243.PartSetHeader): unknown;
            fromPartial(object: Partial<_243.PartSetHeader>): _243.PartSetHeader;
        };
        Part: {
            encode(message: _243.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Part;
            fromJSON(object: any): _243.Part;
            toJSON(message: _243.Part): unknown;
            fromPartial(object: Partial<_243.Part>): _243.Part;
        };
        BlockID: {
            encode(message: _243.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.BlockID;
            fromJSON(object: any): _243.BlockID;
            toJSON(message: _243.BlockID): unknown;
            fromPartial(object: Partial<_243.BlockID>): _243.BlockID;
        };
        Header: {
            encode(message: _243.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Header;
            fromJSON(object: any): _243.Header;
            toJSON(message: _243.Header): unknown;
            fromPartial(object: Partial<_243.Header>): _243.Header;
        };
        Data: {
            encode(message: _243.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Data;
            fromJSON(object: any): _243.Data;
            toJSON(message: _243.Data): unknown;
            fromPartial(object: Partial<_243.Data>): _243.Data;
        };
        Vote: {
            encode(message: _243.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Vote;
            fromJSON(object: any): _243.Vote;
            toJSON(message: _243.Vote): unknown;
            fromPartial(object: Partial<_243.Vote>): _243.Vote;
        };
        Commit: {
            encode(message: _243.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Commit;
            fromJSON(object: any): _243.Commit;
            toJSON(message: _243.Commit): unknown;
            fromPartial(object: Partial<_243.Commit>): _243.Commit;
        };
        CommitSig: {
            encode(message: _243.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.CommitSig;
            fromJSON(object: any): _243.CommitSig;
            toJSON(message: _243.CommitSig): unknown;
            fromPartial(object: Partial<_243.CommitSig>): _243.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _243.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ExtendedCommit;
            fromJSON(object: any): _243.ExtendedCommit;
            toJSON(message: _243.ExtendedCommit): unknown;
            fromPartial(object: Partial<_243.ExtendedCommit>): _243.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _243.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.ExtendedCommitSig;
            fromJSON(object: any): _243.ExtendedCommitSig;
            toJSON(message: _243.ExtendedCommitSig): unknown;
            fromPartial(object: Partial<_243.ExtendedCommitSig>): _243.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _243.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.Proposal;
            fromJSON(object: any): _243.Proposal;
            toJSON(message: _243.Proposal): unknown;
            fromPartial(object: Partial<_243.Proposal>): _243.Proposal;
        };
        SignedHeader: {
            encode(message: _243.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.SignedHeader;
            fromJSON(object: any): _243.SignedHeader;
            toJSON(message: _243.SignedHeader): unknown;
            fromPartial(object: Partial<_243.SignedHeader>): _243.SignedHeader;
        };
        LightBlock: {
            encode(message: _243.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.LightBlock;
            fromJSON(object: any): _243.LightBlock;
            toJSON(message: _243.LightBlock): unknown;
            fromPartial(object: Partial<_243.LightBlock>): _243.LightBlock;
        };
        BlockMeta: {
            encode(message: _243.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.BlockMeta;
            fromJSON(object: any): _243.BlockMeta;
            toJSON(message: _243.BlockMeta): unknown;
            fromPartial(object: Partial<_243.BlockMeta>): _243.BlockMeta;
        };
        TxProof: {
            encode(message: _243.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.TxProof;
            fromJSON(object: any): _243.TxProof;
            toJSON(message: _243.TxProof): unknown;
            fromPartial(object: Partial<_243.TxProof>): _243.TxProof;
        };
        ConsensusParams: {
            encode(message: _242.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ConsensusParams;
            fromJSON(object: any): _242.ConsensusParams;
            toJSON(message: _242.ConsensusParams): unknown;
            fromPartial(object: Partial<_242.ConsensusParams>): _242.ConsensusParams;
        };
        BlockParams: {
            encode(message: _242.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.BlockParams;
            fromJSON(object: any): _242.BlockParams;
            toJSON(message: _242.BlockParams): unknown;
            fromPartial(object: Partial<_242.BlockParams>): _242.BlockParams;
        };
        EvidenceParams: {
            encode(message: _242.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EvidenceParams;
            fromJSON(object: any): _242.EvidenceParams;
            toJSON(message: _242.EvidenceParams): unknown;
            fromPartial(object: Partial<_242.EvidenceParams>): _242.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _242.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ValidatorParams;
            fromJSON(object: any): _242.ValidatorParams;
            toJSON(message: _242.ValidatorParams): unknown;
            fromPartial(object: Partial<_242.ValidatorParams>): _242.ValidatorParams;
        };
        VersionParams: {
            encode(message: _242.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.VersionParams;
            fromJSON(object: any): _242.VersionParams;
            toJSON(message: _242.VersionParams): unknown;
            fromPartial(object: Partial<_242.VersionParams>): _242.VersionParams;
        };
        HashedParams: {
            encode(message: _242.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.HashedParams;
            fromJSON(object: any): _242.HashedParams;
            toJSON(message: _242.HashedParams): unknown;
            fromPartial(object: Partial<_242.HashedParams>): _242.HashedParams;
        };
        ABCIParams: {
            encode(message: _242.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ABCIParams;
            fromJSON(object: any): _242.ABCIParams;
            toJSON(message: _242.ABCIParams): unknown;
            fromPartial(object: Partial<_242.ABCIParams>): _242.ABCIParams;
        };
        Evidence: {
            encode(message: _241.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.Evidence;
            fromJSON(object: any): _241.Evidence;
            toJSON(message: _241.Evidence): unknown;
            fromPartial(object: Partial<_241.Evidence>): _241.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _241.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.DuplicateVoteEvidence;
            fromJSON(object: any): _241.DuplicateVoteEvidence;
            toJSON(message: _241.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_241.DuplicateVoteEvidence>): _241.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _241.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.LightClientAttackEvidence;
            fromJSON(object: any): _241.LightClientAttackEvidence;
            toJSON(message: _241.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_241.LightClientAttackEvidence>): _241.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _241.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.EvidenceList;
            fromJSON(object: any): _241.EvidenceList;
            toJSON(message: _241.EvidenceList): unknown;
            fromPartial(object: Partial<_241.EvidenceList>): _241.EvidenceList;
        };
        Block: {
            encode(message: _240.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.Block;
            fromJSON(object: any): _240.Block;
            toJSON(message: _240.Block): unknown;
            fromPartial(object: Partial<_240.Block>): _240.Block;
        };
    };
    const version: {
        App: {
            encode(message: _245.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.App;
            fromJSON(object: any): _245.App;
            toJSON(message: _245.App): unknown;
            fromPartial(object: Partial<_245.App>): _245.App;
        };
        Consensus: {
            encode(message: _245.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.Consensus;
            fromJSON(object: any): _245.Consensus;
            toJSON(message: _245.Consensus): unknown;
            fromPartial(object: Partial<_245.Consensus>): _245.Consensus;
        };
    };
}
