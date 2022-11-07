import * as _101 from "./abci/types";
import * as _102 from "./crypto/keys";
import * as _103 from "./crypto/proof";
import * as _104 from "./libs/bits/types";
import * as _105 from "./p2p/types";
import * as _106 from "./types/block";
import * as _107 from "./types/evidence";
import * as _108 from "./types/params";
import * as _109 from "./types/types";
import * as _110 from "./types/validator";
import * as _111 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _101.CheckTxType;
        checkTxTypeToJSON(object: _101.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _101.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _101.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _101.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _101.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _101.EvidenceType;
        evidenceTypeToJSON(object: _101.EvidenceType): string;
        CheckTxType: typeof _101.CheckTxType;
        CheckTxTypeSDKType: typeof _101.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _101.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _101.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _101.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _101.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _101.EvidenceType;
        EvidenceTypeSDKType: typeof _101.EvidenceTypeSDKType;
        Request: {
            encode(message: _101.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Request;
            fromJSON(object: any): _101.Request;
            toJSON(message: _101.Request): unknown;
            fromPartial(object: Partial<_101.Request>): _101.Request;
        };
        RequestEcho: {
            encode(message: _101.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestEcho;
            fromJSON(object: any): _101.RequestEcho;
            toJSON(message: _101.RequestEcho): unknown;
            fromPartial(object: Partial<_101.RequestEcho>): _101.RequestEcho;
        };
        RequestFlush: {
            encode(_: _101.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestFlush;
            fromJSON(_: any): _101.RequestFlush;
            toJSON(_: _101.RequestFlush): unknown;
            fromPartial(_: Partial<_101.RequestFlush>): _101.RequestFlush;
        };
        RequestInfo: {
            encode(message: _101.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestInfo;
            fromJSON(object: any): _101.RequestInfo;
            toJSON(message: _101.RequestInfo): unknown;
            fromPartial(object: Partial<_101.RequestInfo>): _101.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _101.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestSetOption;
            fromJSON(object: any): _101.RequestSetOption;
            toJSON(message: _101.RequestSetOption): unknown;
            fromPartial(object: Partial<_101.RequestSetOption>): _101.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _101.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestInitChain;
            fromJSON(object: any): _101.RequestInitChain;
            toJSON(message: _101.RequestInitChain): unknown;
            fromPartial(object: Partial<_101.RequestInitChain>): _101.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _101.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestQuery;
            fromJSON(object: any): _101.RequestQuery;
            toJSON(message: _101.RequestQuery): unknown;
            fromPartial(object: Partial<_101.RequestQuery>): _101.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _101.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestBeginBlock;
            fromJSON(object: any): _101.RequestBeginBlock;
            toJSON(message: _101.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_101.RequestBeginBlock>): _101.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _101.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestCheckTx;
            fromJSON(object: any): _101.RequestCheckTx;
            toJSON(message: _101.RequestCheckTx): unknown;
            fromPartial(object: Partial<_101.RequestCheckTx>): _101.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _101.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestDeliverTx;
            fromJSON(object: any): _101.RequestDeliverTx;
            toJSON(message: _101.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_101.RequestDeliverTx>): _101.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _101.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestEndBlock;
            fromJSON(object: any): _101.RequestEndBlock;
            toJSON(message: _101.RequestEndBlock): unknown;
            fromPartial(object: Partial<_101.RequestEndBlock>): _101.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _101.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestCommit;
            fromJSON(_: any): _101.RequestCommit;
            toJSON(_: _101.RequestCommit): unknown;
            fromPartial(_: Partial<_101.RequestCommit>): _101.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _101.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestListSnapshots;
            fromJSON(_: any): _101.RequestListSnapshots;
            toJSON(_: _101.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_101.RequestListSnapshots>): _101.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _101.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestOfferSnapshot;
            fromJSON(object: any): _101.RequestOfferSnapshot;
            toJSON(message: _101.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_101.RequestOfferSnapshot>): _101.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _101.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestLoadSnapshotChunk;
            fromJSON(object: any): _101.RequestLoadSnapshotChunk;
            toJSON(message: _101.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_101.RequestLoadSnapshotChunk>): _101.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _101.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.RequestApplySnapshotChunk;
            fromJSON(object: any): _101.RequestApplySnapshotChunk;
            toJSON(message: _101.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_101.RequestApplySnapshotChunk>): _101.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _101.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Response;
            fromJSON(object: any): _101.Response;
            toJSON(message: _101.Response): unknown;
            fromPartial(object: Partial<_101.Response>): _101.Response;
        };
        ResponseException: {
            encode(message: _101.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseException;
            fromJSON(object: any): _101.ResponseException;
            toJSON(message: _101.ResponseException): unknown;
            fromPartial(object: Partial<_101.ResponseException>): _101.ResponseException;
        };
        ResponseEcho: {
            encode(message: _101.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseEcho;
            fromJSON(object: any): _101.ResponseEcho;
            toJSON(message: _101.ResponseEcho): unknown;
            fromPartial(object: Partial<_101.ResponseEcho>): _101.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _101.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseFlush;
            fromJSON(_: any): _101.ResponseFlush;
            toJSON(_: _101.ResponseFlush): unknown;
            fromPartial(_: Partial<_101.ResponseFlush>): _101.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _101.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseInfo;
            fromJSON(object: any): _101.ResponseInfo;
            toJSON(message: _101.ResponseInfo): unknown;
            fromPartial(object: Partial<_101.ResponseInfo>): _101.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _101.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseSetOption;
            fromJSON(object: any): _101.ResponseSetOption;
            toJSON(message: _101.ResponseSetOption): unknown;
            fromPartial(object: Partial<_101.ResponseSetOption>): _101.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _101.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseInitChain;
            fromJSON(object: any): _101.ResponseInitChain;
            toJSON(message: _101.ResponseInitChain): unknown;
            fromPartial(object: Partial<_101.ResponseInitChain>): _101.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _101.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseQuery;
            fromJSON(object: any): _101.ResponseQuery;
            toJSON(message: _101.ResponseQuery): unknown;
            fromPartial(object: Partial<_101.ResponseQuery>): _101.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _101.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseBeginBlock;
            fromJSON(object: any): _101.ResponseBeginBlock;
            toJSON(message: _101.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_101.ResponseBeginBlock>): _101.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _101.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseCheckTx;
            fromJSON(object: any): _101.ResponseCheckTx;
            toJSON(message: _101.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_101.ResponseCheckTx>): _101.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _101.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseDeliverTx;
            fromJSON(object: any): _101.ResponseDeliverTx;
            toJSON(message: _101.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_101.ResponseDeliverTx>): _101.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _101.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseEndBlock;
            fromJSON(object: any): _101.ResponseEndBlock;
            toJSON(message: _101.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_101.ResponseEndBlock>): _101.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _101.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseCommit;
            fromJSON(object: any): _101.ResponseCommit;
            toJSON(message: _101.ResponseCommit): unknown;
            fromPartial(object: Partial<_101.ResponseCommit>): _101.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _101.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseListSnapshots;
            fromJSON(object: any): _101.ResponseListSnapshots;
            toJSON(message: _101.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_101.ResponseListSnapshots>): _101.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _101.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseOfferSnapshot;
            fromJSON(object: any): _101.ResponseOfferSnapshot;
            toJSON(message: _101.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_101.ResponseOfferSnapshot>): _101.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _101.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _101.ResponseLoadSnapshotChunk;
            toJSON(message: _101.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_101.ResponseLoadSnapshotChunk>): _101.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _101.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ResponseApplySnapshotChunk;
            fromJSON(object: any): _101.ResponseApplySnapshotChunk;
            toJSON(message: _101.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_101.ResponseApplySnapshotChunk>): _101.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _101.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ConsensusParams;
            fromJSON(object: any): _101.ConsensusParams;
            toJSON(message: _101.ConsensusParams): unknown;
            fromPartial(object: Partial<_101.ConsensusParams>): _101.ConsensusParams;
        };
        BlockParams: {
            encode(message: _101.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.BlockParams;
            fromJSON(object: any): _101.BlockParams;
            toJSON(message: _101.BlockParams): unknown;
            fromPartial(object: Partial<_101.BlockParams>): _101.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _101.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.LastCommitInfo;
            fromJSON(object: any): _101.LastCommitInfo;
            toJSON(message: _101.LastCommitInfo): unknown;
            fromPartial(object: Partial<_101.LastCommitInfo>): _101.LastCommitInfo;
        };
        Event: {
            encode(message: _101.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Event;
            fromJSON(object: any): _101.Event;
            toJSON(message: _101.Event): unknown;
            fromPartial(object: Partial<_101.Event>): _101.Event;
        };
        EventAttribute: {
            encode(message: _101.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.EventAttribute;
            fromJSON(object: any): _101.EventAttribute;
            toJSON(message: _101.EventAttribute): unknown;
            fromPartial(object: Partial<_101.EventAttribute>): _101.EventAttribute;
        };
        TxResult: {
            encode(message: _101.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TxResult;
            fromJSON(object: any): _101.TxResult;
            toJSON(message: _101.TxResult): unknown;
            fromPartial(object: Partial<_101.TxResult>): _101.TxResult;
        };
        Validator: {
            encode(message: _101.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Validator;
            fromJSON(object: any): _101.Validator;
            toJSON(message: _101.Validator): unknown;
            fromPartial(object: Partial<_101.Validator>): _101.Validator;
        };
        ValidatorUpdate: {
            encode(message: _101.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.ValidatorUpdate;
            fromJSON(object: any): _101.ValidatorUpdate;
            toJSON(message: _101.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_101.ValidatorUpdate>): _101.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _101.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.VoteInfo;
            fromJSON(object: any): _101.VoteInfo;
            toJSON(message: _101.VoteInfo): unknown;
            fromPartial(object: Partial<_101.VoteInfo>): _101.VoteInfo;
        };
        Evidence: {
            encode(message: _101.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Evidence;
            fromJSON(object: any): _101.Evidence;
            toJSON(message: _101.Evidence): unknown;
            fromPartial(object: Partial<_101.Evidence>): _101.Evidence;
        };
        Snapshot: {
            encode(message: _101.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Snapshot;
            fromJSON(object: any): _101.Snapshot;
            toJSON(message: _101.Snapshot): unknown;
            fromPartial(object: Partial<_101.Snapshot>): _101.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _103.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Proof;
            fromJSON(object: any): _103.Proof;
            toJSON(message: _103.Proof): unknown;
            fromPartial(object: Partial<_103.Proof>): _103.Proof;
        };
        ValueOp: {
            encode(message: _103.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ValueOp;
            fromJSON(object: any): _103.ValueOp;
            toJSON(message: _103.ValueOp): unknown;
            fromPartial(object: Partial<_103.ValueOp>): _103.ValueOp;
        };
        DominoOp: {
            encode(message: _103.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DominoOp;
            fromJSON(object: any): _103.DominoOp;
            toJSON(message: _103.DominoOp): unknown;
            fromPartial(object: Partial<_103.DominoOp>): _103.DominoOp;
        };
        ProofOp: {
            encode(message: _103.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ProofOp;
            fromJSON(object: any): _103.ProofOp;
            toJSON(message: _103.ProofOp): unknown;
            fromPartial(object: Partial<_103.ProofOp>): _103.ProofOp;
        };
        ProofOps: {
            encode(message: _103.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ProofOps;
            fromJSON(object: any): _103.ProofOps;
            toJSON(message: _103.ProofOps): unknown;
            fromPartial(object: Partial<_103.ProofOps>): _103.ProofOps;
        };
        PublicKey: {
            encode(message: _102.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PublicKey;
            fromJSON(object: any): _102.PublicKey;
            toJSON(message: _102.PublicKey): unknown;
            fromPartial(object: Partial<_102.PublicKey>): _102.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _104.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.BitArray;
                fromJSON(object: any): _104.BitArray;
                toJSON(message: _104.BitArray): unknown;
                fromPartial(object: Partial<_104.BitArray>): _104.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _105.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ProtocolVersion;
            fromJSON(object: any): _105.ProtocolVersion;
            toJSON(message: _105.ProtocolVersion): unknown;
            fromPartial(object: Partial<_105.ProtocolVersion>): _105.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _105.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.NodeInfo;
            fromJSON(object: any): _105.NodeInfo;
            toJSON(message: _105.NodeInfo): unknown;
            fromPartial(object: Partial<_105.NodeInfo>): _105.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _105.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.NodeInfoOther;
            fromJSON(object: any): _105.NodeInfoOther;
            toJSON(message: _105.NodeInfoOther): unknown;
            fromPartial(object: Partial<_105.NodeInfoOther>): _105.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _105.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PeerInfo;
            fromJSON(object: any): _105.PeerInfo;
            toJSON(message: _105.PeerInfo): unknown;
            fromPartial(object: Partial<_105.PeerInfo>): _105.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _105.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.PeerAddressInfo;
            fromJSON(object: any): _105.PeerAddressInfo;
            toJSON(message: _105.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_105.PeerAddressInfo>): _105.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _110.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.ValidatorSet;
            fromJSON(object: any): _110.ValidatorSet;
            toJSON(message: _110.ValidatorSet): unknown;
            fromPartial(object: Partial<_110.ValidatorSet>): _110.ValidatorSet;
        };
        Validator: {
            encode(message: _110.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Validator;
            fromJSON(object: any): _110.Validator;
            toJSON(message: _110.Validator): unknown;
            fromPartial(object: Partial<_110.Validator>): _110.Validator;
        };
        SimpleValidator: {
            encode(message: _110.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.SimpleValidator;
            fromJSON(object: any): _110.SimpleValidator;
            toJSON(message: _110.SimpleValidator): unknown;
            fromPartial(object: Partial<_110.SimpleValidator>): _110.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _109.BlockIDFlag;
        blockIDFlagToJSON(object: _109.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _109.SignedMsgType;
        signedMsgTypeToJSON(object: _109.SignedMsgType): string;
        BlockIDFlag: typeof _109.BlockIDFlag;
        BlockIDFlagSDKType: typeof _109.BlockIDFlagSDKType;
        SignedMsgType: typeof _109.SignedMsgType;
        SignedMsgTypeSDKType: typeof _109.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _109.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.PartSetHeader;
            fromJSON(object: any): _109.PartSetHeader;
            toJSON(message: _109.PartSetHeader): unknown;
            fromPartial(object: Partial<_109.PartSetHeader>): _109.PartSetHeader;
        };
        Part: {
            encode(message: _109.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Part;
            fromJSON(object: any): _109.Part;
            toJSON(message: _109.Part): unknown;
            fromPartial(object: Partial<_109.Part>): _109.Part;
        };
        BlockID: {
            encode(message: _109.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BlockID;
            fromJSON(object: any): _109.BlockID;
            toJSON(message: _109.BlockID): unknown;
            fromPartial(object: Partial<_109.BlockID>): _109.BlockID;
        };
        Header: {
            encode(message: _109.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Header;
            fromJSON(object: any): _109.Header;
            toJSON(message: _109.Header): unknown;
            fromPartial(object: Partial<_109.Header>): _109.Header;
        };
        Data: {
            encode(message: _109.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Data;
            fromJSON(object: any): _109.Data;
            toJSON(message: _109.Data): unknown;
            fromPartial(object: Partial<_109.Data>): _109.Data;
        };
        Vote: {
            encode(message: _109.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Vote;
            fromJSON(object: any): _109.Vote;
            toJSON(message: _109.Vote): unknown;
            fromPartial(object: Partial<_109.Vote>): _109.Vote;
        };
        Commit: {
            encode(message: _109.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Commit;
            fromJSON(object: any): _109.Commit;
            toJSON(message: _109.Commit): unknown;
            fromPartial(object: Partial<_109.Commit>): _109.Commit;
        };
        CommitSig: {
            encode(message: _109.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.CommitSig;
            fromJSON(object: any): _109.CommitSig;
            toJSON(message: _109.CommitSig): unknown;
            fromPartial(object: Partial<_109.CommitSig>): _109.CommitSig;
        };
        Proposal: {
            encode(message: _109.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Proposal;
            fromJSON(object: any): _109.Proposal;
            toJSON(message: _109.Proposal): unknown;
            fromPartial(object: Partial<_109.Proposal>): _109.Proposal;
        };
        SignedHeader: {
            encode(message: _109.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.SignedHeader;
            fromJSON(object: any): _109.SignedHeader;
            toJSON(message: _109.SignedHeader): unknown;
            fromPartial(object: Partial<_109.SignedHeader>): _109.SignedHeader;
        };
        LightBlock: {
            encode(message: _109.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.LightBlock;
            fromJSON(object: any): _109.LightBlock;
            toJSON(message: _109.LightBlock): unknown;
            fromPartial(object: Partial<_109.LightBlock>): _109.LightBlock;
        };
        BlockMeta: {
            encode(message: _109.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BlockMeta;
            fromJSON(object: any): _109.BlockMeta;
            toJSON(message: _109.BlockMeta): unknown;
            fromPartial(object: Partial<_109.BlockMeta>): _109.BlockMeta;
        };
        TxProof: {
            encode(message: _109.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TxProof;
            fromJSON(object: any): _109.TxProof;
            toJSON(message: _109.TxProof): unknown;
            fromPartial(object: Partial<_109.TxProof>): _109.TxProof;
        };
        ConsensusParams: {
            encode(message: _108.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ConsensusParams;
            fromJSON(object: any): _108.ConsensusParams;
            toJSON(message: _108.ConsensusParams): unknown;
            fromPartial(object: Partial<_108.ConsensusParams>): _108.ConsensusParams;
        };
        BlockParams: {
            encode(message: _108.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.BlockParams;
            fromJSON(object: any): _108.BlockParams;
            toJSON(message: _108.BlockParams): unknown;
            fromPartial(object: Partial<_108.BlockParams>): _108.BlockParams;
        };
        EvidenceParams: {
            encode(message: _108.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EvidenceParams;
            fromJSON(object: any): _108.EvidenceParams;
            toJSON(message: _108.EvidenceParams): unknown;
            fromPartial(object: Partial<_108.EvidenceParams>): _108.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _108.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ValidatorParams;
            fromJSON(object: any): _108.ValidatorParams;
            toJSON(message: _108.ValidatorParams): unknown;
            fromPartial(object: Partial<_108.ValidatorParams>): _108.ValidatorParams;
        };
        VersionParams: {
            encode(message: _108.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.VersionParams;
            fromJSON(object: any): _108.VersionParams;
            toJSON(message: _108.VersionParams): unknown;
            fromPartial(object: Partial<_108.VersionParams>): _108.VersionParams;
        };
        HashedParams: {
            encode(message: _108.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.HashedParams;
            fromJSON(object: any): _108.HashedParams;
            toJSON(message: _108.HashedParams): unknown;
            fromPartial(object: Partial<_108.HashedParams>): _108.HashedParams;
        };
        Evidence: {
            encode(message: _107.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Evidence;
            fromJSON(object: any): _107.Evidence;
            toJSON(message: _107.Evidence): unknown;
            fromPartial(object: Partial<_107.Evidence>): _107.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _107.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DuplicateVoteEvidence;
            fromJSON(object: any): _107.DuplicateVoteEvidence;
            toJSON(message: _107.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_107.DuplicateVoteEvidence>): _107.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _107.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.LightClientAttackEvidence;
            fromJSON(object: any): _107.LightClientAttackEvidence;
            toJSON(message: _107.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_107.LightClientAttackEvidence>): _107.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _107.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.EvidenceList;
            fromJSON(object: any): _107.EvidenceList;
            toJSON(message: _107.EvidenceList): unknown;
            fromPartial(object: Partial<_107.EvidenceList>): _107.EvidenceList;
        };
        Block: {
            encode(message: _106.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Block;
            fromJSON(object: any): _106.Block;
            toJSON(message: _106.Block): unknown;
            fromPartial(object: Partial<_106.Block>): _106.Block;
        };
    };
    const version: {
        App: {
            encode(message: _111.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.App;
            fromJSON(object: any): _111.App;
            toJSON(message: _111.App): unknown;
            fromPartial(object: Partial<_111.App>): _111.App;
        };
        Consensus: {
            encode(message: _111.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Consensus;
            fromJSON(object: any): _111.Consensus;
            toJSON(message: _111.Consensus): unknown;
            fromPartial(object: Partial<_111.Consensus>): _111.Consensus;
        };
    };
}
