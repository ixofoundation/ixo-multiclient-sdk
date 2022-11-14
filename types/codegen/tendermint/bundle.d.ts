import * as _155 from "./abci/types";
import * as _156 from "./crypto/keys";
import * as _157 from "./crypto/proof";
import * as _158 from "./libs/bits/types";
import * as _159 from "./p2p/types";
import * as _160 from "./types/block";
import * as _161 from "./types/evidence";
import * as _162 from "./types/params";
import * as _163 from "./types/types";
import * as _164 from "./types/validator";
import * as _165 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _155.CheckTxType;
        checkTxTypeToJSON(object: _155.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _155.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _155.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _155.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _155.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _155.EvidenceType;
        evidenceTypeToJSON(object: _155.EvidenceType): string;
        CheckTxType: typeof _155.CheckTxType;
        CheckTxTypeSDKType: typeof _155.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _155.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _155.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _155.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _155.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _155.EvidenceType;
        EvidenceTypeSDKType: typeof _155.EvidenceTypeSDKType;
        Request: {
            encode(message: _155.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Request;
            fromJSON(object: any): _155.Request;
            toJSON(message: _155.Request): unknown;
            fromPartial(object: Partial<_155.Request>): _155.Request;
        };
        RequestEcho: {
            encode(message: _155.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestEcho;
            fromJSON(object: any): _155.RequestEcho;
            toJSON(message: _155.RequestEcho): unknown;
            fromPartial(object: Partial<_155.RequestEcho>): _155.RequestEcho;
        };
        RequestFlush: {
            encode(_: _155.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestFlush;
            fromJSON(_: any): _155.RequestFlush;
            toJSON(_: _155.RequestFlush): unknown;
            fromPartial(_: Partial<_155.RequestFlush>): _155.RequestFlush;
        };
        RequestInfo: {
            encode(message: _155.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestInfo;
            fromJSON(object: any): _155.RequestInfo;
            toJSON(message: _155.RequestInfo): unknown;
            fromPartial(object: Partial<_155.RequestInfo>): _155.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _155.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestSetOption;
            fromJSON(object: any): _155.RequestSetOption;
            toJSON(message: _155.RequestSetOption): unknown;
            fromPartial(object: Partial<_155.RequestSetOption>): _155.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _155.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestInitChain;
            fromJSON(object: any): _155.RequestInitChain;
            toJSON(message: _155.RequestInitChain): unknown;
            fromPartial(object: Partial<_155.RequestInitChain>): _155.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _155.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestQuery;
            fromJSON(object: any): _155.RequestQuery;
            toJSON(message: _155.RequestQuery): unknown;
            fromPartial(object: Partial<_155.RequestQuery>): _155.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _155.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestBeginBlock;
            fromJSON(object: any): _155.RequestBeginBlock;
            toJSON(message: _155.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_155.RequestBeginBlock>): _155.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _155.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestCheckTx;
            fromJSON(object: any): _155.RequestCheckTx;
            toJSON(message: _155.RequestCheckTx): unknown;
            fromPartial(object: Partial<_155.RequestCheckTx>): _155.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _155.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestDeliverTx;
            fromJSON(object: any): _155.RequestDeliverTx;
            toJSON(message: _155.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_155.RequestDeliverTx>): _155.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _155.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestEndBlock;
            fromJSON(object: any): _155.RequestEndBlock;
            toJSON(message: _155.RequestEndBlock): unknown;
            fromPartial(object: Partial<_155.RequestEndBlock>): _155.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _155.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestCommit;
            fromJSON(_: any): _155.RequestCommit;
            toJSON(_: _155.RequestCommit): unknown;
            fromPartial(_: Partial<_155.RequestCommit>): _155.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _155.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestListSnapshots;
            fromJSON(_: any): _155.RequestListSnapshots;
            toJSON(_: _155.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_155.RequestListSnapshots>): _155.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _155.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestOfferSnapshot;
            fromJSON(object: any): _155.RequestOfferSnapshot;
            toJSON(message: _155.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_155.RequestOfferSnapshot>): _155.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _155.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestLoadSnapshotChunk;
            fromJSON(object: any): _155.RequestLoadSnapshotChunk;
            toJSON(message: _155.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_155.RequestLoadSnapshotChunk>): _155.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _155.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.RequestApplySnapshotChunk;
            fromJSON(object: any): _155.RequestApplySnapshotChunk;
            toJSON(message: _155.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_155.RequestApplySnapshotChunk>): _155.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _155.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Response;
            fromJSON(object: any): _155.Response;
            toJSON(message: _155.Response): unknown;
            fromPartial(object: Partial<_155.Response>): _155.Response;
        };
        ResponseException: {
            encode(message: _155.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseException;
            fromJSON(object: any): _155.ResponseException;
            toJSON(message: _155.ResponseException): unknown;
            fromPartial(object: Partial<_155.ResponseException>): _155.ResponseException;
        };
        ResponseEcho: {
            encode(message: _155.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseEcho;
            fromJSON(object: any): _155.ResponseEcho;
            toJSON(message: _155.ResponseEcho): unknown;
            fromPartial(object: Partial<_155.ResponseEcho>): _155.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _155.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseFlush;
            fromJSON(_: any): _155.ResponseFlush;
            toJSON(_: _155.ResponseFlush): unknown;
            fromPartial(_: Partial<_155.ResponseFlush>): _155.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _155.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseInfo;
            fromJSON(object: any): _155.ResponseInfo;
            toJSON(message: _155.ResponseInfo): unknown;
            fromPartial(object: Partial<_155.ResponseInfo>): _155.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _155.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseSetOption;
            fromJSON(object: any): _155.ResponseSetOption;
            toJSON(message: _155.ResponseSetOption): unknown;
            fromPartial(object: Partial<_155.ResponseSetOption>): _155.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _155.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseInitChain;
            fromJSON(object: any): _155.ResponseInitChain;
            toJSON(message: _155.ResponseInitChain): unknown;
            fromPartial(object: Partial<_155.ResponseInitChain>): _155.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _155.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseQuery;
            fromJSON(object: any): _155.ResponseQuery;
            toJSON(message: _155.ResponseQuery): unknown;
            fromPartial(object: Partial<_155.ResponseQuery>): _155.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _155.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseBeginBlock;
            fromJSON(object: any): _155.ResponseBeginBlock;
            toJSON(message: _155.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_155.ResponseBeginBlock>): _155.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _155.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseCheckTx;
            fromJSON(object: any): _155.ResponseCheckTx;
            toJSON(message: _155.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_155.ResponseCheckTx>): _155.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _155.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseDeliverTx;
            fromJSON(object: any): _155.ResponseDeliverTx;
            toJSON(message: _155.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_155.ResponseDeliverTx>): _155.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _155.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseEndBlock;
            fromJSON(object: any): _155.ResponseEndBlock;
            toJSON(message: _155.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_155.ResponseEndBlock>): _155.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _155.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseCommit;
            fromJSON(object: any): _155.ResponseCommit;
            toJSON(message: _155.ResponseCommit): unknown;
            fromPartial(object: Partial<_155.ResponseCommit>): _155.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _155.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseListSnapshots;
            fromJSON(object: any): _155.ResponseListSnapshots;
            toJSON(message: _155.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_155.ResponseListSnapshots>): _155.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _155.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseOfferSnapshot;
            fromJSON(object: any): _155.ResponseOfferSnapshot;
            toJSON(message: _155.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_155.ResponseOfferSnapshot>): _155.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _155.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _155.ResponseLoadSnapshotChunk;
            toJSON(message: _155.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_155.ResponseLoadSnapshotChunk>): _155.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _155.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ResponseApplySnapshotChunk;
            fromJSON(object: any): _155.ResponseApplySnapshotChunk;
            toJSON(message: _155.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_155.ResponseApplySnapshotChunk>): _155.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _155.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ConsensusParams;
            fromJSON(object: any): _155.ConsensusParams;
            toJSON(message: _155.ConsensusParams): unknown;
            fromPartial(object: Partial<_155.ConsensusParams>): _155.ConsensusParams;
        };
        BlockParams: {
            encode(message: _155.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.BlockParams;
            fromJSON(object: any): _155.BlockParams;
            toJSON(message: _155.BlockParams): unknown;
            fromPartial(object: Partial<_155.BlockParams>): _155.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _155.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.LastCommitInfo;
            fromJSON(object: any): _155.LastCommitInfo;
            toJSON(message: _155.LastCommitInfo): unknown;
            fromPartial(object: Partial<_155.LastCommitInfo>): _155.LastCommitInfo;
        };
        Event: {
            encode(message: _155.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Event;
            fromJSON(object: any): _155.Event;
            toJSON(message: _155.Event): unknown;
            fromPartial(object: Partial<_155.Event>): _155.Event;
        };
        EventAttribute: {
            encode(message: _155.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.EventAttribute;
            fromJSON(object: any): _155.EventAttribute;
            toJSON(message: _155.EventAttribute): unknown;
            fromPartial(object: Partial<_155.EventAttribute>): _155.EventAttribute;
        };
        TxResult: {
            encode(message: _155.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.TxResult;
            fromJSON(object: any): _155.TxResult;
            toJSON(message: _155.TxResult): unknown;
            fromPartial(object: Partial<_155.TxResult>): _155.TxResult;
        };
        Validator: {
            encode(message: _155.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Validator;
            fromJSON(object: any): _155.Validator;
            toJSON(message: _155.Validator): unknown;
            fromPartial(object: Partial<_155.Validator>): _155.Validator;
        };
        ValidatorUpdate: {
            encode(message: _155.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ValidatorUpdate;
            fromJSON(object: any): _155.ValidatorUpdate;
            toJSON(message: _155.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_155.ValidatorUpdate>): _155.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _155.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.VoteInfo;
            fromJSON(object: any): _155.VoteInfo;
            toJSON(message: _155.VoteInfo): unknown;
            fromPartial(object: Partial<_155.VoteInfo>): _155.VoteInfo;
        };
        Evidence: {
            encode(message: _155.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Evidence;
            fromJSON(object: any): _155.Evidence;
            toJSON(message: _155.Evidence): unknown;
            fromPartial(object: Partial<_155.Evidence>): _155.Evidence;
        };
        Snapshot: {
            encode(message: _155.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Snapshot;
            fromJSON(object: any): _155.Snapshot;
            toJSON(message: _155.Snapshot): unknown;
            fromPartial(object: Partial<_155.Snapshot>): _155.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _157.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Proof;
            fromJSON(object: any): _157.Proof;
            toJSON(message: _157.Proof): unknown;
            fromPartial(object: Partial<_157.Proof>): _157.Proof;
        };
        ValueOp: {
            encode(message: _157.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ValueOp;
            fromJSON(object: any): _157.ValueOp;
            toJSON(message: _157.ValueOp): unknown;
            fromPartial(object: Partial<_157.ValueOp>): _157.ValueOp;
        };
        DominoOp: {
            encode(message: _157.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.DominoOp;
            fromJSON(object: any): _157.DominoOp;
            toJSON(message: _157.DominoOp): unknown;
            fromPartial(object: Partial<_157.DominoOp>): _157.DominoOp;
        };
        ProofOp: {
            encode(message: _157.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ProofOp;
            fromJSON(object: any): _157.ProofOp;
            toJSON(message: _157.ProofOp): unknown;
            fromPartial(object: Partial<_157.ProofOp>): _157.ProofOp;
        };
        ProofOps: {
            encode(message: _157.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ProofOps;
            fromJSON(object: any): _157.ProofOps;
            toJSON(message: _157.ProofOps): unknown;
            fromPartial(object: Partial<_157.ProofOps>): _157.ProofOps;
        };
        PublicKey: {
            encode(message: _156.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.PublicKey;
            fromJSON(object: any): _156.PublicKey;
            toJSON(message: _156.PublicKey): unknown;
            fromPartial(object: Partial<_156.PublicKey>): _156.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _158.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.BitArray;
                fromJSON(object: any): _158.BitArray;
                toJSON(message: _158.BitArray): unknown;
                fromPartial(object: Partial<_158.BitArray>): _158.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _159.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ProtocolVersion;
            fromJSON(object: any): _159.ProtocolVersion;
            toJSON(message: _159.ProtocolVersion): unknown;
            fromPartial(object: Partial<_159.ProtocolVersion>): _159.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _159.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.NodeInfo;
            fromJSON(object: any): _159.NodeInfo;
            toJSON(message: _159.NodeInfo): unknown;
            fromPartial(object: Partial<_159.NodeInfo>): _159.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _159.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.NodeInfoOther;
            fromJSON(object: any): _159.NodeInfoOther;
            toJSON(message: _159.NodeInfoOther): unknown;
            fromPartial(object: Partial<_159.NodeInfoOther>): _159.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _159.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.PeerInfo;
            fromJSON(object: any): _159.PeerInfo;
            toJSON(message: _159.PeerInfo): unknown;
            fromPartial(object: Partial<_159.PeerInfo>): _159.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _159.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.PeerAddressInfo;
            fromJSON(object: any): _159.PeerAddressInfo;
            toJSON(message: _159.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_159.PeerAddressInfo>): _159.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _164.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorSet;
            fromJSON(object: any): _164.ValidatorSet;
            toJSON(message: _164.ValidatorSet): unknown;
            fromPartial(object: Partial<_164.ValidatorSet>): _164.ValidatorSet;
        };
        Validator: {
            encode(message: _164.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Validator;
            fromJSON(object: any): _164.Validator;
            toJSON(message: _164.Validator): unknown;
            fromPartial(object: Partial<_164.Validator>): _164.Validator;
        };
        SimpleValidator: {
            encode(message: _164.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SimpleValidator;
            fromJSON(object: any): _164.SimpleValidator;
            toJSON(message: _164.SimpleValidator): unknown;
            fromPartial(object: Partial<_164.SimpleValidator>): _164.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _163.BlockIDFlag;
        blockIDFlagToJSON(object: _163.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _163.SignedMsgType;
        signedMsgTypeToJSON(object: _163.SignedMsgType): string;
        BlockIDFlag: typeof _163.BlockIDFlag;
        BlockIDFlagSDKType: typeof _163.BlockIDFlagSDKType;
        SignedMsgType: typeof _163.SignedMsgType;
        SignedMsgTypeSDKType: typeof _163.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _163.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.PartSetHeader;
            fromJSON(object: any): _163.PartSetHeader;
            toJSON(message: _163.PartSetHeader): unknown;
            fromPartial(object: Partial<_163.PartSetHeader>): _163.PartSetHeader;
        };
        Part: {
            encode(message: _163.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Part;
            fromJSON(object: any): _163.Part;
            toJSON(message: _163.Part): unknown;
            fromPartial(object: Partial<_163.Part>): _163.Part;
        };
        BlockID: {
            encode(message: _163.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.BlockID;
            fromJSON(object: any): _163.BlockID;
            toJSON(message: _163.BlockID): unknown;
            fromPartial(object: Partial<_163.BlockID>): _163.BlockID;
        };
        Header: {
            encode(message: _163.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Header;
            fromJSON(object: any): _163.Header;
            toJSON(message: _163.Header): unknown;
            fromPartial(object: Partial<_163.Header>): _163.Header;
        };
        Data: {
            encode(message: _163.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Data;
            fromJSON(object: any): _163.Data;
            toJSON(message: _163.Data): unknown;
            fromPartial(object: Partial<_163.Data>): _163.Data;
        };
        Vote: {
            encode(message: _163.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Vote;
            fromJSON(object: any): _163.Vote;
            toJSON(message: _163.Vote): unknown;
            fromPartial(object: Partial<_163.Vote>): _163.Vote;
        };
        Commit: {
            encode(message: _163.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Commit;
            fromJSON(object: any): _163.Commit;
            toJSON(message: _163.Commit): unknown;
            fromPartial(object: Partial<_163.Commit>): _163.Commit;
        };
        CommitSig: {
            encode(message: _163.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.CommitSig;
            fromJSON(object: any): _163.CommitSig;
            toJSON(message: _163.CommitSig): unknown;
            fromPartial(object: Partial<_163.CommitSig>): _163.CommitSig;
        };
        Proposal: {
            encode(message: _163.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Proposal;
            fromJSON(object: any): _163.Proposal;
            toJSON(message: _163.Proposal): unknown;
            fromPartial(object: Partial<_163.Proposal>): _163.Proposal;
        };
        SignedHeader: {
            encode(message: _163.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.SignedHeader;
            fromJSON(object: any): _163.SignedHeader;
            toJSON(message: _163.SignedHeader): unknown;
            fromPartial(object: Partial<_163.SignedHeader>): _163.SignedHeader;
        };
        LightBlock: {
            encode(message: _163.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LightBlock;
            fromJSON(object: any): _163.LightBlock;
            toJSON(message: _163.LightBlock): unknown;
            fromPartial(object: Partial<_163.LightBlock>): _163.LightBlock;
        };
        BlockMeta: {
            encode(message: _163.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.BlockMeta;
            fromJSON(object: any): _163.BlockMeta;
            toJSON(message: _163.BlockMeta): unknown;
            fromPartial(object: Partial<_163.BlockMeta>): _163.BlockMeta;
        };
        TxProof: {
            encode(message: _163.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TxProof;
            fromJSON(object: any): _163.TxProof;
            toJSON(message: _163.TxProof): unknown;
            fromPartial(object: Partial<_163.TxProof>): _163.TxProof;
        };
        ConsensusParams: {
            encode(message: _162.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ConsensusParams;
            fromJSON(object: any): _162.ConsensusParams;
            toJSON(message: _162.ConsensusParams): unknown;
            fromPartial(object: Partial<_162.ConsensusParams>): _162.ConsensusParams;
        };
        BlockParams: {
            encode(message: _162.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.BlockParams;
            fromJSON(object: any): _162.BlockParams;
            toJSON(message: _162.BlockParams): unknown;
            fromPartial(object: Partial<_162.BlockParams>): _162.BlockParams;
        };
        EvidenceParams: {
            encode(message: _162.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EvidenceParams;
            fromJSON(object: any): _162.EvidenceParams;
            toJSON(message: _162.EvidenceParams): unknown;
            fromPartial(object: Partial<_162.EvidenceParams>): _162.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _162.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ValidatorParams;
            fromJSON(object: any): _162.ValidatorParams;
            toJSON(message: _162.ValidatorParams): unknown;
            fromPartial(object: Partial<_162.ValidatorParams>): _162.ValidatorParams;
        };
        VersionParams: {
            encode(message: _162.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.VersionParams;
            fromJSON(object: any): _162.VersionParams;
            toJSON(message: _162.VersionParams): unknown;
            fromPartial(object: Partial<_162.VersionParams>): _162.VersionParams;
        };
        HashedParams: {
            encode(message: _162.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.HashedParams;
            fromJSON(object: any): _162.HashedParams;
            toJSON(message: _162.HashedParams): unknown;
            fromPartial(object: Partial<_162.HashedParams>): _162.HashedParams;
        };
        Evidence: {
            encode(message: _161.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Evidence;
            fromJSON(object: any): _161.Evidence;
            toJSON(message: _161.Evidence): unknown;
            fromPartial(object: Partial<_161.Evidence>): _161.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _161.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.DuplicateVoteEvidence;
            fromJSON(object: any): _161.DuplicateVoteEvidence;
            toJSON(message: _161.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_161.DuplicateVoteEvidence>): _161.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _161.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.LightClientAttackEvidence;
            fromJSON(object: any): _161.LightClientAttackEvidence;
            toJSON(message: _161.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_161.LightClientAttackEvidence>): _161.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _161.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.EvidenceList;
            fromJSON(object: any): _161.EvidenceList;
            toJSON(message: _161.EvidenceList): unknown;
            fromPartial(object: Partial<_161.EvidenceList>): _161.EvidenceList;
        };
        Block: {
            encode(message: _160.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Block;
            fromJSON(object: any): _160.Block;
            toJSON(message: _160.Block): unknown;
            fromPartial(object: Partial<_160.Block>): _160.Block;
        };
    };
    const version: {
        App: {
            encode(message: _165.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.App;
            fromJSON(object: any): _165.App;
            toJSON(message: _165.App): unknown;
            fromPartial(object: Partial<_165.App>): _165.App;
        };
        Consensus: {
            encode(message: _165.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Consensus;
            fromJSON(object: any): _165.Consensus;
            toJSON(message: _165.Consensus): unknown;
            fromPartial(object: Partial<_165.Consensus>): _165.Consensus;
        };
    };
}
