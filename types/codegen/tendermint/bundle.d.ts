import * as _242 from "./abci/types";
import * as _243 from "./crypto/keys";
import * as _244 from "./crypto/proof";
import * as _245 from "./libs/bits/types";
import * as _246 from "./p2p/types";
import * as _247 from "./types/block";
import * as _248 from "./types/evidence";
import * as _249 from "./types/params";
import * as _250 from "./types/types";
import * as _251 from "./types/validator";
import * as _252 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _242.CheckTxType;
        checkTxTypeToJSON(object: _242.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _242.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _242.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _242.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _242.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _242.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _242.ResponseProcessProposal_ProposalStatus): string;
        responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): _242.ResponseVerifyVoteExtension_VerifyStatus;
        responseVerifyVoteExtension_VerifyStatusToJSON(object: _242.ResponseVerifyVoteExtension_VerifyStatus): string;
        misbehaviorTypeFromJSON(object: any): _242.MisbehaviorType;
        misbehaviorTypeToJSON(object: _242.MisbehaviorType): string;
        CheckTxType: typeof _242.CheckTxType;
        CheckTxTypeSDKType: typeof _242.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _242.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _242.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _242.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _242.ResponseApplySnapshotChunk_Result;
        ResponseProcessProposal_ProposalStatus: typeof _242.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _242.ResponseProcessProposal_ProposalStatus;
        ResponseVerifyVoteExtension_VerifyStatus: typeof _242.ResponseVerifyVoteExtension_VerifyStatus;
        ResponseVerifyVoteExtension_VerifyStatusSDKType: typeof _242.ResponseVerifyVoteExtension_VerifyStatus;
        MisbehaviorType: typeof _242.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _242.MisbehaviorType;
        Request: {
            encode(message: _242.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Request;
            fromJSON(object: any): _242.Request;
            toJSON(message: _242.Request): unknown;
            fromPartial(object: Partial<_242.Request>): _242.Request;
        };
        RequestEcho: {
            encode(message: _242.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestEcho;
            fromJSON(object: any): _242.RequestEcho;
            toJSON(message: _242.RequestEcho): unknown;
            fromPartial(object: Partial<_242.RequestEcho>): _242.RequestEcho;
        };
        RequestFlush: {
            encode(_: _242.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestFlush;
            fromJSON(_: any): _242.RequestFlush;
            toJSON(_: _242.RequestFlush): unknown;
            fromPartial(_: Partial<_242.RequestFlush>): _242.RequestFlush;
        };
        RequestInfo: {
            encode(message: _242.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestInfo;
            fromJSON(object: any): _242.RequestInfo;
            toJSON(message: _242.RequestInfo): unknown;
            fromPartial(object: Partial<_242.RequestInfo>): _242.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _242.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestInitChain;
            fromJSON(object: any): _242.RequestInitChain;
            toJSON(message: _242.RequestInitChain): unknown;
            fromPartial(object: Partial<_242.RequestInitChain>): _242.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _242.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestQuery;
            fromJSON(object: any): _242.RequestQuery;
            toJSON(message: _242.RequestQuery): unknown;
            fromPartial(object: Partial<_242.RequestQuery>): _242.RequestQuery;
        };
        RequestCheckTx: {
            encode(message: _242.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestCheckTx;
            fromJSON(object: any): _242.RequestCheckTx;
            toJSON(message: _242.RequestCheckTx): unknown;
            fromPartial(object: Partial<_242.RequestCheckTx>): _242.RequestCheckTx;
        };
        RequestCommit: {
            encode(_: _242.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestCommit;
            fromJSON(_: any): _242.RequestCommit;
            toJSON(_: _242.RequestCommit): unknown;
            fromPartial(_: Partial<_242.RequestCommit>): _242.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _242.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestListSnapshots;
            fromJSON(_: any): _242.RequestListSnapshots;
            toJSON(_: _242.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_242.RequestListSnapshots>): _242.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _242.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestOfferSnapshot;
            fromJSON(object: any): _242.RequestOfferSnapshot;
            toJSON(message: _242.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_242.RequestOfferSnapshot>): _242.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _242.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestLoadSnapshotChunk;
            fromJSON(object: any): _242.RequestLoadSnapshotChunk;
            toJSON(message: _242.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_242.RequestLoadSnapshotChunk>): _242.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _242.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestApplySnapshotChunk;
            fromJSON(object: any): _242.RequestApplySnapshotChunk;
            toJSON(message: _242.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_242.RequestApplySnapshotChunk>): _242.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _242.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestPrepareProposal;
            fromJSON(object: any): _242.RequestPrepareProposal;
            toJSON(message: _242.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_242.RequestPrepareProposal>): _242.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _242.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestProcessProposal;
            fromJSON(object: any): _242.RequestProcessProposal;
            toJSON(message: _242.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_242.RequestProcessProposal>): _242.RequestProcessProposal;
        };
        RequestExtendVote: {
            encode(message: _242.RequestExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestExtendVote;
            fromJSON(object: any): _242.RequestExtendVote;
            toJSON(message: _242.RequestExtendVote): unknown;
            fromPartial(object: Partial<_242.RequestExtendVote>): _242.RequestExtendVote;
        };
        RequestVerifyVoteExtension: {
            encode(message: _242.RequestVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestVerifyVoteExtension;
            fromJSON(object: any): _242.RequestVerifyVoteExtension;
            toJSON(message: _242.RequestVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_242.RequestVerifyVoteExtension>): _242.RequestVerifyVoteExtension;
        };
        RequestFinalizeBlock: {
            encode(message: _242.RequestFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.RequestFinalizeBlock;
            fromJSON(object: any): _242.RequestFinalizeBlock;
            toJSON(message: _242.RequestFinalizeBlock): unknown;
            fromPartial(object: Partial<_242.RequestFinalizeBlock>): _242.RequestFinalizeBlock;
        };
        Response: {
            encode(message: _242.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Response;
            fromJSON(object: any): _242.Response;
            toJSON(message: _242.Response): unknown;
            fromPartial(object: Partial<_242.Response>): _242.Response;
        };
        ResponseException: {
            encode(message: _242.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseException;
            fromJSON(object: any): _242.ResponseException;
            toJSON(message: _242.ResponseException): unknown;
            fromPartial(object: Partial<_242.ResponseException>): _242.ResponseException;
        };
        ResponseEcho: {
            encode(message: _242.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseEcho;
            fromJSON(object: any): _242.ResponseEcho;
            toJSON(message: _242.ResponseEcho): unknown;
            fromPartial(object: Partial<_242.ResponseEcho>): _242.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _242.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseFlush;
            fromJSON(_: any): _242.ResponseFlush;
            toJSON(_: _242.ResponseFlush): unknown;
            fromPartial(_: Partial<_242.ResponseFlush>): _242.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _242.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseInfo;
            fromJSON(object: any): _242.ResponseInfo;
            toJSON(message: _242.ResponseInfo): unknown;
            fromPartial(object: Partial<_242.ResponseInfo>): _242.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _242.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseInitChain;
            fromJSON(object: any): _242.ResponseInitChain;
            toJSON(message: _242.ResponseInitChain): unknown;
            fromPartial(object: Partial<_242.ResponseInitChain>): _242.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _242.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseQuery;
            fromJSON(object: any): _242.ResponseQuery;
            toJSON(message: _242.ResponseQuery): unknown;
            fromPartial(object: Partial<_242.ResponseQuery>): _242.ResponseQuery;
        };
        ResponseCheckTx: {
            encode(message: _242.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseCheckTx;
            fromJSON(object: any): _242.ResponseCheckTx;
            toJSON(message: _242.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_242.ResponseCheckTx>): _242.ResponseCheckTx;
        };
        ResponseCommit: {
            encode(message: _242.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseCommit;
            fromJSON(object: any): _242.ResponseCommit;
            toJSON(message: _242.ResponseCommit): unknown;
            fromPartial(object: Partial<_242.ResponseCommit>): _242.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _242.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseListSnapshots;
            fromJSON(object: any): _242.ResponseListSnapshots;
            toJSON(message: _242.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_242.ResponseListSnapshots>): _242.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _242.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseOfferSnapshot;
            fromJSON(object: any): _242.ResponseOfferSnapshot;
            toJSON(message: _242.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_242.ResponseOfferSnapshot>): _242.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _242.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _242.ResponseLoadSnapshotChunk;
            toJSON(message: _242.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_242.ResponseLoadSnapshotChunk>): _242.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _242.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseApplySnapshotChunk;
            fromJSON(object: any): _242.ResponseApplySnapshotChunk;
            toJSON(message: _242.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_242.ResponseApplySnapshotChunk>): _242.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _242.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponsePrepareProposal;
            fromJSON(object: any): _242.ResponsePrepareProposal;
            toJSON(message: _242.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_242.ResponsePrepareProposal>): _242.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _242.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseProcessProposal;
            fromJSON(object: any): _242.ResponseProcessProposal;
            toJSON(message: _242.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_242.ResponseProcessProposal>): _242.ResponseProcessProposal;
        };
        ResponseExtendVote: {
            encode(message: _242.ResponseExtendVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseExtendVote;
            fromJSON(object: any): _242.ResponseExtendVote;
            toJSON(message: _242.ResponseExtendVote): unknown;
            fromPartial(object: Partial<_242.ResponseExtendVote>): _242.ResponseExtendVote;
        };
        ResponseVerifyVoteExtension: {
            encode(message: _242.ResponseVerifyVoteExtension, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseVerifyVoteExtension;
            fromJSON(object: any): _242.ResponseVerifyVoteExtension;
            toJSON(message: _242.ResponseVerifyVoteExtension): unknown;
            fromPartial(object: Partial<_242.ResponseVerifyVoteExtension>): _242.ResponseVerifyVoteExtension;
        };
        ResponseFinalizeBlock: {
            encode(message: _242.ResponseFinalizeBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ResponseFinalizeBlock;
            fromJSON(object: any): _242.ResponseFinalizeBlock;
            toJSON(message: _242.ResponseFinalizeBlock): unknown;
            fromPartial(object: Partial<_242.ResponseFinalizeBlock>): _242.ResponseFinalizeBlock;
        };
        CommitInfo: {
            encode(message: _242.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.CommitInfo;
            fromJSON(object: any): _242.CommitInfo;
            toJSON(message: _242.CommitInfo): unknown;
            fromPartial(object: Partial<_242.CommitInfo>): _242.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _242.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ExtendedCommitInfo;
            fromJSON(object: any): _242.ExtendedCommitInfo;
            toJSON(message: _242.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_242.ExtendedCommitInfo>): _242.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _242.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Event;
            fromJSON(object: any): _242.Event;
            toJSON(message: _242.Event): unknown;
            fromPartial(object: Partial<_242.Event>): _242.Event;
        };
        EventAttribute: {
            encode(message: _242.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventAttribute;
            fromJSON(object: any): _242.EventAttribute;
            toJSON(message: _242.EventAttribute): unknown;
            fromPartial(object: Partial<_242.EventAttribute>): _242.EventAttribute;
        };
        ExecTxResult: {
            encode(message: _242.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ExecTxResult;
            fromJSON(object: any): _242.ExecTxResult;
            toJSON(message: _242.ExecTxResult): unknown;
            fromPartial(object: Partial<_242.ExecTxResult>): _242.ExecTxResult;
        };
        TxResult: {
            encode(message: _242.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.TxResult;
            fromJSON(object: any): _242.TxResult;
            toJSON(message: _242.TxResult): unknown;
            fromPartial(object: Partial<_242.TxResult>): _242.TxResult;
        };
        Validator: {
            encode(message: _242.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Validator;
            fromJSON(object: any): _242.Validator;
            toJSON(message: _242.Validator): unknown;
            fromPartial(object: Partial<_242.Validator>): _242.Validator;
        };
        ValidatorUpdate: {
            encode(message: _242.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ValidatorUpdate;
            fromJSON(object: any): _242.ValidatorUpdate;
            toJSON(message: _242.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_242.ValidatorUpdate>): _242.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _242.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.VoteInfo;
            fromJSON(object: any): _242.VoteInfo;
            toJSON(message: _242.VoteInfo): unknown;
            fromPartial(object: Partial<_242.VoteInfo>): _242.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _242.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.ExtendedVoteInfo;
            fromJSON(object: any): _242.ExtendedVoteInfo;
            toJSON(message: _242.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_242.ExtendedVoteInfo>): _242.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _242.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Misbehavior;
            fromJSON(object: any): _242.Misbehavior;
            toJSON(message: _242.Misbehavior): unknown;
            fromPartial(object: Partial<_242.Misbehavior>): _242.Misbehavior;
        };
        Snapshot: {
            encode(message: _242.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Snapshot;
            fromJSON(object: any): _242.Snapshot;
            toJSON(message: _242.Snapshot): unknown;
            fromPartial(object: Partial<_242.Snapshot>): _242.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _244.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Proof;
            fromJSON(object: any): _244.Proof;
            toJSON(message: _244.Proof): unknown;
            fromPartial(object: Partial<_244.Proof>): _244.Proof;
        };
        ValueOp: {
            encode(message: _244.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ValueOp;
            fromJSON(object: any): _244.ValueOp;
            toJSON(message: _244.ValueOp): unknown;
            fromPartial(object: Partial<_244.ValueOp>): _244.ValueOp;
        };
        DominoOp: {
            encode(message: _244.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.DominoOp;
            fromJSON(object: any): _244.DominoOp;
            toJSON(message: _244.DominoOp): unknown;
            fromPartial(object: Partial<_244.DominoOp>): _244.DominoOp;
        };
        ProofOp: {
            encode(message: _244.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ProofOp;
            fromJSON(object: any): _244.ProofOp;
            toJSON(message: _244.ProofOp): unknown;
            fromPartial(object: Partial<_244.ProofOp>): _244.ProofOp;
        };
        ProofOps: {
            encode(message: _244.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.ProofOps;
            fromJSON(object: any): _244.ProofOps;
            toJSON(message: _244.ProofOps): unknown;
            fromPartial(object: Partial<_244.ProofOps>): _244.ProofOps;
        };
        PublicKey: {
            encode(message: _243.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.PublicKey;
            fromJSON(object: any): _243.PublicKey;
            toJSON(message: _243.PublicKey): unknown;
            fromPartial(object: Partial<_243.PublicKey>): _243.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _245.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.BitArray;
                fromJSON(object: any): _245.BitArray;
                toJSON(message: _245.BitArray): unknown;
                fromPartial(object: Partial<_245.BitArray>): _245.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _246.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.NetAddress;
            fromJSON(object: any): _246.NetAddress;
            toJSON(message: _246.NetAddress): unknown;
            fromPartial(object: Partial<_246.NetAddress>): _246.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _246.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.ProtocolVersion;
            fromJSON(object: any): _246.ProtocolVersion;
            toJSON(message: _246.ProtocolVersion): unknown;
            fromPartial(object: Partial<_246.ProtocolVersion>): _246.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _246.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.DefaultNodeInfo;
            fromJSON(object: any): _246.DefaultNodeInfo;
            toJSON(message: _246.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_246.DefaultNodeInfo>): _246.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _246.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.DefaultNodeInfoOther;
            fromJSON(object: any): _246.DefaultNodeInfoOther;
            toJSON(message: _246.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_246.DefaultNodeInfoOther>): _246.DefaultNodeInfoOther;
        };
    };
    const types: {
        blockIDFlagFromJSON(object: any): _251.BlockIDFlag;
        blockIDFlagToJSON(object: _251.BlockIDFlag): string;
        BlockIDFlag: typeof _251.BlockIDFlag;
        BlockIDFlagSDKType: typeof _251.BlockIDFlag;
        ValidatorSet: {
            encode(message: _251.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.ValidatorSet;
            fromJSON(object: any): _251.ValidatorSet;
            toJSON(message: _251.ValidatorSet): unknown;
            fromPartial(object: Partial<_251.ValidatorSet>): _251.ValidatorSet;
        };
        Validator: {
            encode(message: _251.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.Validator;
            fromJSON(object: any): _251.Validator;
            toJSON(message: _251.Validator): unknown;
            fromPartial(object: Partial<_251.Validator>): _251.Validator;
        };
        SimpleValidator: {
            encode(message: _251.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.SimpleValidator;
            fromJSON(object: any): _251.SimpleValidator;
            toJSON(message: _251.SimpleValidator): unknown;
            fromPartial(object: Partial<_251.SimpleValidator>): _251.SimpleValidator;
        };
        signedMsgTypeFromJSON(object: any): _250.SignedMsgType;
        signedMsgTypeToJSON(object: _250.SignedMsgType): string;
        SignedMsgType: typeof _250.SignedMsgType;
        SignedMsgTypeSDKType: typeof _250.SignedMsgType;
        PartSetHeader: {
            encode(message: _250.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.PartSetHeader;
            fromJSON(object: any): _250.PartSetHeader;
            toJSON(message: _250.PartSetHeader): unknown;
            fromPartial(object: Partial<_250.PartSetHeader>): _250.PartSetHeader;
        };
        Part: {
            encode(message: _250.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Part;
            fromJSON(object: any): _250.Part;
            toJSON(message: _250.Part): unknown;
            fromPartial(object: Partial<_250.Part>): _250.Part;
        };
        BlockID: {
            encode(message: _250.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.BlockID;
            fromJSON(object: any): _250.BlockID;
            toJSON(message: _250.BlockID): unknown;
            fromPartial(object: Partial<_250.BlockID>): _250.BlockID;
        };
        Header: {
            encode(message: _250.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Header;
            fromJSON(object: any): _250.Header;
            toJSON(message: _250.Header): unknown;
            fromPartial(object: Partial<_250.Header>): _250.Header;
        };
        Data: {
            encode(message: _250.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Data;
            fromJSON(object: any): _250.Data;
            toJSON(message: _250.Data): unknown;
            fromPartial(object: Partial<_250.Data>): _250.Data;
        };
        Vote: {
            encode(message: _250.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Vote;
            fromJSON(object: any): _250.Vote;
            toJSON(message: _250.Vote): unknown;
            fromPartial(object: Partial<_250.Vote>): _250.Vote;
        };
        Commit: {
            encode(message: _250.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Commit;
            fromJSON(object: any): _250.Commit;
            toJSON(message: _250.Commit): unknown;
            fromPartial(object: Partial<_250.Commit>): _250.Commit;
        };
        CommitSig: {
            encode(message: _250.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.CommitSig;
            fromJSON(object: any): _250.CommitSig;
            toJSON(message: _250.CommitSig): unknown;
            fromPartial(object: Partial<_250.CommitSig>): _250.CommitSig;
        };
        ExtendedCommit: {
            encode(message: _250.ExtendedCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.ExtendedCommit;
            fromJSON(object: any): _250.ExtendedCommit;
            toJSON(message: _250.ExtendedCommit): unknown;
            fromPartial(object: Partial<_250.ExtendedCommit>): _250.ExtendedCommit;
        };
        ExtendedCommitSig: {
            encode(message: _250.ExtendedCommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.ExtendedCommitSig;
            fromJSON(object: any): _250.ExtendedCommitSig;
            toJSON(message: _250.ExtendedCommitSig): unknown;
            fromPartial(object: Partial<_250.ExtendedCommitSig>): _250.ExtendedCommitSig;
        };
        Proposal: {
            encode(message: _250.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.Proposal;
            fromJSON(object: any): _250.Proposal;
            toJSON(message: _250.Proposal): unknown;
            fromPartial(object: Partial<_250.Proposal>): _250.Proposal;
        };
        SignedHeader: {
            encode(message: _250.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.SignedHeader;
            fromJSON(object: any): _250.SignedHeader;
            toJSON(message: _250.SignedHeader): unknown;
            fromPartial(object: Partial<_250.SignedHeader>): _250.SignedHeader;
        };
        LightBlock: {
            encode(message: _250.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.LightBlock;
            fromJSON(object: any): _250.LightBlock;
            toJSON(message: _250.LightBlock): unknown;
            fromPartial(object: Partial<_250.LightBlock>): _250.LightBlock;
        };
        BlockMeta: {
            encode(message: _250.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.BlockMeta;
            fromJSON(object: any): _250.BlockMeta;
            toJSON(message: _250.BlockMeta): unknown;
            fromPartial(object: Partial<_250.BlockMeta>): _250.BlockMeta;
        };
        TxProof: {
            encode(message: _250.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.TxProof;
            fromJSON(object: any): _250.TxProof;
            toJSON(message: _250.TxProof): unknown;
            fromPartial(object: Partial<_250.TxProof>): _250.TxProof;
        };
        ConsensusParams: {
            encode(message: _249.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.ConsensusParams;
            fromJSON(object: any): _249.ConsensusParams;
            toJSON(message: _249.ConsensusParams): unknown;
            fromPartial(object: Partial<_249.ConsensusParams>): _249.ConsensusParams;
        };
        BlockParams: {
            encode(message: _249.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.BlockParams;
            fromJSON(object: any): _249.BlockParams;
            toJSON(message: _249.BlockParams): unknown;
            fromPartial(object: Partial<_249.BlockParams>): _249.BlockParams;
        };
        EvidenceParams: {
            encode(message: _249.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.EvidenceParams;
            fromJSON(object: any): _249.EvidenceParams;
            toJSON(message: _249.EvidenceParams): unknown;
            fromPartial(object: Partial<_249.EvidenceParams>): _249.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _249.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.ValidatorParams;
            fromJSON(object: any): _249.ValidatorParams;
            toJSON(message: _249.ValidatorParams): unknown;
            fromPartial(object: Partial<_249.ValidatorParams>): _249.ValidatorParams;
        };
        VersionParams: {
            encode(message: _249.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.VersionParams;
            fromJSON(object: any): _249.VersionParams;
            toJSON(message: _249.VersionParams): unknown;
            fromPartial(object: Partial<_249.VersionParams>): _249.VersionParams;
        };
        HashedParams: {
            encode(message: _249.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.HashedParams;
            fromJSON(object: any): _249.HashedParams;
            toJSON(message: _249.HashedParams): unknown;
            fromPartial(object: Partial<_249.HashedParams>): _249.HashedParams;
        };
        ABCIParams: {
            encode(message: _249.ABCIParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.ABCIParams;
            fromJSON(object: any): _249.ABCIParams;
            toJSON(message: _249.ABCIParams): unknown;
            fromPartial(object: Partial<_249.ABCIParams>): _249.ABCIParams;
        };
        Evidence: {
            encode(message: _248.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Evidence;
            fromJSON(object: any): _248.Evidence;
            toJSON(message: _248.Evidence): unknown;
            fromPartial(object: Partial<_248.Evidence>): _248.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _248.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.DuplicateVoteEvidence;
            fromJSON(object: any): _248.DuplicateVoteEvidence;
            toJSON(message: _248.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_248.DuplicateVoteEvidence>): _248.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _248.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.LightClientAttackEvidence;
            fromJSON(object: any): _248.LightClientAttackEvidence;
            toJSON(message: _248.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_248.LightClientAttackEvidence>): _248.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _248.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.EvidenceList;
            fromJSON(object: any): _248.EvidenceList;
            toJSON(message: _248.EvidenceList): unknown;
            fromPartial(object: Partial<_248.EvidenceList>): _248.EvidenceList;
        };
        Block: {
            encode(message: _247.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.Block;
            fromJSON(object: any): _247.Block;
            toJSON(message: _247.Block): unknown;
            fromPartial(object: Partial<_247.Block>): _247.Block;
        };
    };
    const version: {
        App: {
            encode(message: _252.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.App;
            fromJSON(object: any): _252.App;
            toJSON(message: _252.App): unknown;
            fromPartial(object: Partial<_252.App>): _252.App;
        };
        Consensus: {
            encode(message: _252.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.Consensus;
            fromJSON(object: any): _252.Consensus;
            toJSON(message: _252.Consensus): unknown;
            fromPartial(object: Partial<_252.Consensus>): _252.Consensus;
        };
    };
}
