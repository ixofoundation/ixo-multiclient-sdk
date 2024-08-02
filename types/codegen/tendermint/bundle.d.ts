import * as _222 from "./abci/types";
import * as _223 from "./crypto/keys";
import * as _224 from "./crypto/proof";
import * as _225 from "./libs/bits/types";
import * as _226 from "./p2p/types";
import * as _227 from "./types/block";
import * as _228 from "./types/evidence";
import * as _229 from "./types/params";
import * as _230 from "./types/types";
import * as _231 from "./types/validator";
import * as _232 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _222.CheckTxType;
        checkTxTypeToJSON(object: _222.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _222.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _222.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _222.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _222.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _222.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _222.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _222.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _222.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _222.MisbehaviorType;
        misbehaviorTypeToJSON(object: _222.MisbehaviorType): string;
        CheckTxType: typeof _222.CheckTxType;
        CheckTxTypeSDKType: typeof _222.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _222.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _222.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _222.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _222.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _222.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _222.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _222.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _222.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _222.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _222.MisbehaviorType;
        Request: {
            encode(message: _222.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Request;
            fromJSON(object: any): _222.Request;
            toJSON(message: _222.Request): unknown;
            fromPartial(object: Partial<_222.Request>): _222.Request;
        };
        RequestEcho: {
            encode(message: _222.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestEcho;
            fromJSON(object: any): _222.RequestEcho;
            toJSON(message: _222.RequestEcho): unknown;
            fromPartial(object: Partial<_222.RequestEcho>): _222.RequestEcho;
        };
        RequestFlush: {
            encode(_: _222.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestFlush;
            fromJSON(_: any): _222.RequestFlush;
            toJSON(_: _222.RequestFlush): unknown;
            fromPartial(_: Partial<_222.RequestFlush>): _222.RequestFlush;
        };
        RequestInfo: {
            encode(message: _222.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestInfo;
            fromJSON(object: any): _222.RequestInfo;
            toJSON(message: _222.RequestInfo): unknown;
            fromPartial(object: Partial<_222.RequestInfo>): _222.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _222.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestInitChain;
            fromJSON(object: any): _222.RequestInitChain;
            toJSON(message: _222.RequestInitChain): unknown;
            fromPartial(object: Partial<_222.RequestInitChain>): _222.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _222.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestQuery;
            fromJSON(object: any): _222.RequestQuery;
            toJSON(message: _222.RequestQuery): unknown;
            fromPartial(object: Partial<_222.RequestQuery>): _222.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _222.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestCheckTx;
            fromJSON(object: any): _222.RequestCheckTx;
            toJSON(message: _222.RequestCheckTx): unknown;
            fromPartial(object: Partial<_222.RequestCheckTx>): _222.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _222.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestCommit;
            fromJSON(_: any): _222.RequestCommit;
            toJSON(_: _222.RequestCommit): unknown;
            fromPartial(_: Partial<_222.RequestCommit>): _222.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _222.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestListSnapshots;
            fromJSON(_: any): _222.RequestListSnapshots;
            toJSON(_: _222.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_222.RequestListSnapshots>): _222.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _222.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestOfferSnapshot;
            fromJSON(object: any): _222.RequestOfferSnapshot;
            toJSON(message: _222.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_222.RequestOfferSnapshot>): _222.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _222.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestLoadSnapshotChunk;
            fromJSON(object: any): _222.RequestLoadSnapshotChunk;
            toJSON(message: _222.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_222.RequestLoadSnapshotChunk>): _222.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _222.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestApplySnapshotChunk;
            fromJSON(object: any): _222.RequestApplySnapshotChunk;
            toJSON(message: _222.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_222.RequestApplySnapshotChunk>): _222.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _222.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestPrepareProposal;
            fromJSON(object: any): _222.RequestPrepareProposal;
            toJSON(message: _222.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_222.RequestPrepareProposal>): _222.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _222.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestProcessProposal;
            fromJSON(object: any): _222.RequestProcessProposal;
            toJSON(message: _222.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_222.RequestProcessProposal>): _222.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _222.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestExtendVote;
            fromJSON(object: any): _222.RequestExtendVote;
            toJSON(message: _222.RequestExtendVote): unknown;
            fromPartial(object: Partial<_222.RequestExtendVote>): _222.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _222.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestVerifyVoteExtension;
            fromJSON(object: any): _222.RequestVerifyVoteExtension;
            toJSON(message: _222.RequestVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_222.RequestVerifyVoteExtension>): _222.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _222.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.RequestFinalizeBlock;
            fromJSON(object: any): _222.RequestFinalizeBlock;
            toJSON(message: _222.RequestFinalizeBlock): unknown;
            fromPartial(object: Partial<_222.RequestFinalizeBlock>): _222.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _222.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Response;
            fromJSON(object: any): _222.Response;
            toJSON(message: _222.Response): unknown;
            fromPartial(object: Partial<_222.Response>): _222.Response;
        };
        ResponseException: {
            encode(message: _222.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseException;
            fromJSON(object: any): _222.ResponseException;
            toJSON(message: _222.ResponseException): unknown;
            fromPartial(object: Partial<_222.ResponseException>): _222.ResponseException;
        };
        ResponseEcho: {
            encode(message: _222.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseEcho;
            fromJSON(object: any): _222.ResponseEcho;
            toJSON(message: _222.ResponseEcho): unknown;
            fromPartial(object: Partial<_222.ResponseEcho>): _222.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _222.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseFlush;
            fromJSON(_: any): _222.ResponseFlush;
            toJSON(_: _222.ResponseFlush): unknown;
            fromPartial(_: Partial<_222.ResponseFlush>): _222.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _222.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseInfo;
            fromJSON(object: any): _222.ResponseInfo;
            toJSON(message: _222.ResponseInfo): unknown;
            fromPartial(object: Partial<_222.ResponseInfo>): _222.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _222.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseInitChain;
            fromJSON(object: any): _222.ResponseInitChain;
            toJSON(message: _222.ResponseInitChain): unknown;
            fromPartial(object: Partial<_222.ResponseInitChain>): _222.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _222.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseQuery;
            fromJSON(object: any): _222.ResponseQuery;
            toJSON(message: _222.ResponseQuery): unknown;
            fromPartial(object: Partial<_222.ResponseQuery>): _222.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _222.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseCheckTx;
            fromJSON(object: any): _222.ResponseCheckTx;
            toJSON(message: _222.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_222.ResponseCheckTx>): _222.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _222.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseCommit;
            fromJSON(object: any): _222.ResponseCommit;
            toJSON(message: _222.ResponseCommit): unknown;
            fromPartial(object: Partial<_222.ResponseCommit>): _222.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _222.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseListSnapshots;
            fromJSON(object: any): _222.ResponseListSnapshots;
            toJSON(message: _222.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_222.ResponseListSnapshots>): _222.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _222.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseOfferSnapshot;
            fromJSON(object: any): _222.ResponseOfferSnapshot;
            toJSON(message: _222.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_222.ResponseOfferSnapshot>): _222.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _222.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _222.ResponseLoadSnapshotChunk;
            toJSON(message: _222.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_222.ResponseLoadSnapshotChunk>): _222.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _222.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseApplySnapshotChunk;
            fromJSON(object: any): _222.ResponseApplySnapshotChunk;
            toJSON(message: _222.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_222.ResponseApplySnapshotChunk>): _222.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _222.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponsePrepareProposal;
            fromJSON(object: any): _222.ResponsePrepareProposal;
            toJSON(message: _222.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_222.ResponsePrepareProposal>): _222.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _222.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseProcessProposal;
            fromJSON(object: any): _222.ResponseProcessProposal;
            toJSON(message: _222.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_222.ResponseProcessProposal>): _222.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _222.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseExtendVote;
            fromJSON(object: any): _222.ResponseExtendVote;
            toJSON(message: _222.ResponseExtendVote): unknown;
            fromPartial(object: Partial<_222.ResponseExtendVote>): _222.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _222.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseVerifyVoteExtension;
            fromJSON(object: any): _222.ResponseVerifyVoteExtension;
            toJSON(message: _222.ResponseVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_222.ResponseVerifyVoteExtension>): _222.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _222.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ResponseFinalizeBlock;
            fromJSON(object: any): _222.ResponseFinalizeBlock;
            toJSON(message: _222.ResponseFinalizeBlock): unknown;
            fromPartial(object: Partial<_222.ResponseFinalizeBlock>): _222.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _222.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.CommitInfo;
            fromJSON(object: any): _222.CommitInfo;
            toJSON(message: _222.CommitInfo): unknown;
            fromPartial(object: Partial<_222.CommitInfo>): _222.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _222.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ExtendedCommitInfo;
            fromJSON(object: any): _222.ExtendedCommitInfo;
            toJSON(message: _222.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_222.ExtendedCommitInfo>): _222.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _222.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Event;
            fromJSON(object: any): _222.Event;
            toJSON(message: _222.Event): unknown;
            fromPartial(object: Partial<_222.Event>): _222.Event;
        };
        EventAttribute: {
            encode(message: _222.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.EventAttribute;
            fromJSON(object: any): _222.EventAttribute;
            toJSON(message: _222.EventAttribute): unknown;
            fromPartial(object: Partial<_222.EventAttribute>): _222.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _222.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ExecTxResult;
            fromJSON(object: any): _222.ExecTxResult;
            toJSON(message: _222.ExecTxResult): unknown;
            fromPartial(object: Partial<_222.ExecTxResult>): _222.ExecTxResult;
        };
        TxResult: {
            encode(message: _222.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.TxResult;
            fromJSON(object: any): _222.TxResult;
            toJSON(message: _222.TxResult): unknown;
            fromPartial(object: Partial<_222.TxResult>): _222.TxResult;
        };
        Validator: {
            encode(message: _222.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Validator;
            fromJSON(object: any): _222.Validator;
            toJSON(message: _222.Validator): unknown;
            fromPartial(object: Partial<_222.Validator>): _222.Validator;
        };
        ValidatorUpdate: {
            encode(message: _222.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorUpdate;
            fromJSON(object: any): _222.ValidatorUpdate;
            toJSON(message: _222.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_222.ValidatorUpdate>): _222.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _222.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.VoteInfo;
            fromJSON(object: any): _222.VoteInfo;
            toJSON(message: _222.VoteInfo): unknown;
            fromPartial(object: Partial<_222.VoteInfo>): _222.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _222.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ExtendedVoteInfo;
            fromJSON(object: any): _222.ExtendedVoteInfo;
            toJSON(message: _222.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_222.ExtendedVoteInfo>): _222.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _222.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Misbehavior;
            fromJSON(object: any): _222.Misbehavior;
            toJSON(message: _222.Misbehavior): unknown;
            fromPartial(object: Partial<_222.Misbehavior>): _222.Misbehavior;
        };
        Snapshot: {
            encode(message: _222.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.Snapshot;
            fromJSON(object: any): _222.Snapshot;
            toJSON(message: _222.Snapshot): unknown;
            fromPartial(object: Partial<_222.Snapshot>): _222.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _224.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.Proof;
            fromJSON(object: any): _224.Proof;
            toJSON(message: _224.Proof): unknown;
            fromPartial(object: Partial<_224.Proof>): _224.Proof;
        };
        ValueOp: {
            encode(message: _224.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.ValueOp;
            fromJSON(object: any): _224.ValueOp;
            toJSON(message: _224.ValueOp): unknown;
            fromPartial(object: Partial<_224.ValueOp>): _224.ValueOp;
        };
        DominoOp: {
            encode(message: _224.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.DominoOp;
            fromJSON(object: any): _224.DominoOp;
            toJSON(message: _224.DominoOp): unknown;
            fromPartial(object: Partial<_224.DominoOp>): _224.DominoOp;
        };
        ProofOp: {
            encode(message: _224.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.ProofOp;
            fromJSON(object: any): _224.ProofOp;
            toJSON(message: _224.ProofOp): unknown;
            fromPartial(object: Partial<_224.ProofOp>): _224.ProofOp;
        };
        ProofOps: {
            encode(message: _224.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.ProofOps;
            fromJSON(object: any): _224.ProofOps;
            toJSON(message: _224.ProofOps): unknown;
            fromPartial(object: Partial<_224.ProofOps>): _224.ProofOps;
        };
        PublicKey: {
            encode(message: _223.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.PublicKey;
            fromJSON(object: any): _223.PublicKey;
            toJSON(message: _223.PublicKey): unknown;
            fromPartial(object: Partial<_223.PublicKey>): _223.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _225.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.BitArray;
                fromJSON(object: any): _225.BitArray;
                toJSON(message: _225.BitArray): unknown;
                fromPartial(object: Partial<_225.BitArray>): _225.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _226.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.NetAddress;
            fromJSON(object: any): _226.NetAddress;
            toJSON(message: _226.NetAddress): unknown;
            fromPartial(object: Partial<_226.NetAddress>): _226.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _226.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.ProtocolVersion;
            fromJSON(object: any): _226.ProtocolVersion;
            toJSON(message: _226.ProtocolVersion): unknown;
            fromPartial(object: Partial<_226.ProtocolVersion>): _226.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _226.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.DefaultNodeInfo;
            fromJSON(object: any): _226.DefaultNodeInfo;
            toJSON(message: _226.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_226.DefaultNodeInfo>): _226.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _226.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.DefaultNodeInfoOther;
            fromJSON(object: any): _226.DefaultNodeInfoOther;
            toJSON(message: _226.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_226.DefaultNodeInfoOther>): _226.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _231.BlockIDFlag;
        blockIDFlagToJSON(object: _231.BlockIDFlag): string;
        BlockIDFlag: typeof _231.BlockIDFlag;
        BlockIDFlagSDKType: typeof _231.BlockIDFlag;
        ValidatorSet: {
            encode(message: _231.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorSet;
            fromJSON(object: any): _231.ValidatorSet;
            toJSON(message: _231.ValidatorSet): unknown;
            fromPartial(object: Partial<_231.ValidatorSet>): _231.ValidatorSet;
        };
        Validator: {
            encode(message: _231.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.Validator;
            fromJSON(object: any): _231.Validator;
            toJSON(message: _231.Validator): unknown;
            fromPartial(object: Partial<_231.Validator>): _231.Validator;
        };
        SimpleValidator: {
            encode(message: _231.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.SimpleValidator;
            fromJSON(object: any): _231.SimpleValidator;
            toJSON(message: _231.SimpleValidator): unknown;
            fromPartial(object: Partial<_231.SimpleValidator>): _231.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _230.SignedMsgType;
        signedMsgTypeToJSON(object: _230.SignedMsgType): string;
        SignedMsgType: typeof _230.SignedMsgType;
        SignedMsgTypeSDKType: typeof _230.SignedMsgType;
        PartSetHeader: {
            encode(message: _230.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.PartSetHeader;
            fromJSON(object: any): _230.PartSetHeader;
            toJSON(message: _230.PartSetHeader): unknown;
            fromPartial(object: Partial<_230.PartSetHeader>): _230.PartSetHeader;
        };
        Part: {
            encode(message: _230.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Part;
            fromJSON(object: any): _230.Part;
            toJSON(message: _230.Part): unknown;
            fromPartial(object: Partial<_230.Part>): _230.Part;
        };
        BlockID: {
            encode(message: _230.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.BlockID;
            fromJSON(object: any): _230.BlockID;
            toJSON(message: _230.BlockID): unknown;
            fromPartial(object: Partial<_230.BlockID>): _230.BlockID;
        };
        Header: {
            encode(message: _230.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Header;
            fromJSON(object: any): _230.Header;
            toJSON(message: _230.Header): unknown;
            fromPartial(object: Partial<_230.Header>): _230.Header;
        };
        Data: {
            encode(message: _230.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Data;
            fromJSON(object: any): _230.Data;
            toJSON(message: _230.Data): unknown;
            fromPartial(object: Partial<_230.Data>): _230.Data;
        };
        Vote: {
            encode(message: _230.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Vote;
            fromJSON(object: any): _230.Vote;
            toJSON(message: _230.Vote): unknown;
            fromPartial(object: Partial<_230.Vote>): _230.Vote;
        };
        Commit: {
            encode(message: _230.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Commit;
            fromJSON(object: any): _230.Commit;
            toJSON(message: _230.Commit): unknown;
            fromPartial(object: Partial<_230.Commit>): _230.Commit;
        };
        CommitSig: {
            encode(message: _230.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.CommitSig;
            fromJSON(object: any): _230.CommitSig;
            toJSON(message: _230.CommitSig): unknown;
            fromPartial(object: Partial<_230.CommitSig>): _230.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _230.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ExtendedCommit;
            fromJSON(object: any): _230.ExtendedCommit;
            toJSON(message: _230.ExtendedCommit): unknown;
            fromPartial(object: Partial<_230.ExtendedCommit>): _230.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _230.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ExtendedCommitSig;
            fromJSON(object: any): _230.ExtendedCommitSig;
            toJSON(message: _230.ExtendedCommitSig): unknown;
            fromPartial(object: Partial<_230.ExtendedCommitSig>): _230.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _230.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Proposal;
            fromJSON(object: any): _230.Proposal;
            toJSON(message: _230.Proposal): unknown;
            fromPartial(object: Partial<_230.Proposal>): _230.Proposal;
        };
        SignedHeader: {
            encode(message: _230.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.SignedHeader;
            fromJSON(object: any): _230.SignedHeader;
            toJSON(message: _230.SignedHeader): unknown;
            fromPartial(object: Partial<_230.SignedHeader>): _230.SignedHeader;
        };
        LightBlock: {
            encode(message: _230.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.LightBlock;
            fromJSON(object: any): _230.LightBlock;
            toJSON(message: _230.LightBlock): unknown;
            fromPartial(object: Partial<_230.LightBlock>): _230.LightBlock;
        };
        BlockMeta: {
            encode(message: _230.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.BlockMeta;
            fromJSON(object: any): _230.BlockMeta;
            toJSON(message: _230.BlockMeta): unknown;
            fromPartial(object: Partial<_230.BlockMeta>): _230.BlockMeta;
        };
        TxProof: {
            encode(message: _230.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.TxProof;
            fromJSON(object: any): _230.TxProof;
            toJSON(message: _230.TxProof): unknown;
            fromPartial(object: Partial<_230.TxProof>): _230.TxProof;
        };
        ConsensusParams: {
            encode(message: _229.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ConsensusParams;
            fromJSON(object: any): _229.ConsensusParams;
            toJSON(message: _229.ConsensusParams): unknown;
            fromPartial(object: Partial<_229.ConsensusParams>): _229.ConsensusParams;
        };
        BlockParams: {
            encode(message: _229.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.BlockParams;
            fromJSON(object: any): _229.BlockParams;
            toJSON(message: _229.BlockParams): unknown;
            fromPartial(object: Partial<_229.BlockParams>): _229.BlockParams;
        };
        EvidenceParams: {
            encode(message: _229.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.EvidenceParams;
            fromJSON(object: any): _229.EvidenceParams;
            toJSON(message: _229.EvidenceParams): unknown;
            fromPartial(object: Partial<_229.EvidenceParams>): _229.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _229.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ValidatorParams;
            fromJSON(object: any): _229.ValidatorParams;
            toJSON(message: _229.ValidatorParams): unknown;
            fromPartial(object: Partial<_229.ValidatorParams>): _229.ValidatorParams;
        };
        VersionParams: {
            encode(message: _229.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.VersionParams;
            fromJSON(object: any): _229.VersionParams;
            toJSON(message: _229.VersionParams): unknown;
            fromPartial(object: Partial<_229.VersionParams>): _229.VersionParams;
        };
        HashedParams: {
            encode(message: _229.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.HashedParams;
            fromJSON(object: any): _229.HashedParams;
            toJSON(message: _229.HashedParams): unknown;
            fromPartial(object: Partial<_229.HashedParams>): _229.HashedParams;
        };
        ABCIParams: {
            encode(message: _229.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.ABCIParams;
            fromJSON(object: any): _229.ABCIParams;
            toJSON(message: _229.ABCIParams): unknown;
            fromPartial(object: Partial<_229.ABCIParams>): _229.ABCIParams;
        };
        Evidence: {
            encode(message: _228.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Evidence;
            fromJSON(object: any): _228.Evidence;
            toJSON(message: _228.Evidence): unknown;
            fromPartial(object: Partial<_228.Evidence>): _228.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _228.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.DuplicateVoteEvidence;
            fromJSON(object: any): _228.DuplicateVoteEvidence;
            toJSON(message: _228.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_228.DuplicateVoteEvidence>): _228.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _228.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.LightClientAttackEvidence;
            fromJSON(object: any): _228.LightClientAttackEvidence;
            toJSON(message: _228.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_228.LightClientAttackEvidence>): _228.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _228.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.EvidenceList;
            fromJSON(object: any): _228.EvidenceList;
            toJSON(message: _228.EvidenceList): unknown;
            fromPartial(object: Partial<_228.EvidenceList>): _228.EvidenceList;
        };
        Block: {
            encode(message: _227.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Block;
            fromJSON(object: any): _227.Block;
            toJSON(message: _227.Block): unknown;
            fromPartial(object: Partial<_227.Block>): _227.Block;
        };
    };
    const version: {
        App: {
            encode(message: _232.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.App;
            fromJSON(object: any): _232.App;
            toJSON(message: _232.App): unknown;
            fromPartial(object: Partial<_232.App>): _232.App;
        };
        Consensus: {
            encode(message: _232.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.Consensus;
            fromJSON(object: any): _232.Consensus;
            toJSON(message: _232.Consensus): unknown;
            fromPartial(object: Partial<_232.Consensus>): _232.Consensus;
        };
    };
}
