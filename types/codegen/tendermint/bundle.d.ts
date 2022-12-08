import * as _156 from "./abci/types";
import * as _157 from "./crypto/keys";
import * as _158 from "./crypto/proof";
import * as _159 from "./libs/bits/types";
import * as _160 from "./p2p/types";
import * as _161 from "./types/block";
import * as _162 from "./types/evidence";
import * as _163 from "./types/params";
import * as _164 from "./types/types";
import * as _165 from "./types/validator";
import * as _166 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _156.CheckTxType;
        checkTxTypeToJSON(object: _156.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _156.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _156.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _156.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _156.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _156.EvidenceType;
        evidenceTypeToJSON(object: _156.EvidenceType): string;
        CheckTxType: typeof _156.CheckTxType;
        CheckTxTypeSDKType: typeof _156.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _156.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _156.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _156.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _156.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _156.EvidenceType;
        EvidenceTypeSDKType: typeof _156.EvidenceTypeSDKType;
        Request: {
            encode(message: _156.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Request;
            fromJSON(object: any): _156.Request;
            toJSON(message: _156.Request): unknown;
            fromPartial(object: Partial<_156.Request>): _156.Request;
        };
        RequestEcho: {
            encode(message: _156.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestEcho;
            fromJSON(object: any): _156.RequestEcho;
            toJSON(message: _156.RequestEcho): unknown;
            fromPartial(object: Partial<_156.RequestEcho>): _156.RequestEcho;
        };
        RequestFlush: {
            encode(_: _156.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestFlush;
            fromJSON(_: any): _156.RequestFlush;
            toJSON(_: _156.RequestFlush): unknown;
            fromPartial(_: Partial<_156.RequestFlush>): _156.RequestFlush;
        };
        RequestInfo: {
            encode(message: _156.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestInfo;
            fromJSON(object: any): _156.RequestInfo;
            toJSON(message: _156.RequestInfo): unknown;
            fromPartial(object: Partial<_156.RequestInfo>): _156.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _156.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestSetOption;
            fromJSON(object: any): _156.RequestSetOption;
            toJSON(message: _156.RequestSetOption): unknown;
            fromPartial(object: Partial<_156.RequestSetOption>): _156.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _156.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestInitChain;
            fromJSON(object: any): _156.RequestInitChain;
            toJSON(message: _156.RequestInitChain): unknown;
            fromPartial(object: Partial<_156.RequestInitChain>): _156.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _156.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestQuery;
            fromJSON(object: any): _156.RequestQuery;
            toJSON(message: _156.RequestQuery): unknown;
            fromPartial(object: Partial<_156.RequestQuery>): _156.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _156.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestBeginBlock;
            fromJSON(object: any): _156.RequestBeginBlock;
            toJSON(message: _156.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_156.RequestBeginBlock>): _156.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _156.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestCheckTx;
            fromJSON(object: any): _156.RequestCheckTx;
            toJSON(message: _156.RequestCheckTx): unknown;
            fromPartial(object: Partial<_156.RequestCheckTx>): _156.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _156.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestDeliverTx;
            fromJSON(object: any): _156.RequestDeliverTx;
            toJSON(message: _156.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_156.RequestDeliverTx>): _156.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _156.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestEndBlock;
            fromJSON(object: any): _156.RequestEndBlock;
            toJSON(message: _156.RequestEndBlock): unknown;
            fromPartial(object: Partial<_156.RequestEndBlock>): _156.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _156.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestCommit;
            fromJSON(_: any): _156.RequestCommit;
            toJSON(_: _156.RequestCommit): unknown;
            fromPartial(_: Partial<_156.RequestCommit>): _156.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _156.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestListSnapshots;
            fromJSON(_: any): _156.RequestListSnapshots;
            toJSON(_: _156.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_156.RequestListSnapshots>): _156.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _156.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestOfferSnapshot;
            fromJSON(object: any): _156.RequestOfferSnapshot;
            toJSON(message: _156.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_156.RequestOfferSnapshot>): _156.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _156.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestLoadSnapshotChunk;
            fromJSON(object: any): _156.RequestLoadSnapshotChunk;
            toJSON(message: _156.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_156.RequestLoadSnapshotChunk>): _156.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _156.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RequestApplySnapshotChunk;
            fromJSON(object: any): _156.RequestApplySnapshotChunk;
            toJSON(message: _156.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_156.RequestApplySnapshotChunk>): _156.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _156.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Response;
            fromJSON(object: any): _156.Response;
            toJSON(message: _156.Response): unknown;
            fromPartial(object: Partial<_156.Response>): _156.Response;
        };
        ResponseException: {
            encode(message: _156.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseException;
            fromJSON(object: any): _156.ResponseException;
            toJSON(message: _156.ResponseException): unknown;
            fromPartial(object: Partial<_156.ResponseException>): _156.ResponseException;
        };
        ResponseEcho: {
            encode(message: _156.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseEcho;
            fromJSON(object: any): _156.ResponseEcho;
            toJSON(message: _156.ResponseEcho): unknown;
            fromPartial(object: Partial<_156.ResponseEcho>): _156.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _156.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseFlush;
            fromJSON(_: any): _156.ResponseFlush;
            toJSON(_: _156.ResponseFlush): unknown;
            fromPartial(_: Partial<_156.ResponseFlush>): _156.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _156.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseInfo;
            fromJSON(object: any): _156.ResponseInfo;
            toJSON(message: _156.ResponseInfo): unknown;
            fromPartial(object: Partial<_156.ResponseInfo>): _156.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _156.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseSetOption;
            fromJSON(object: any): _156.ResponseSetOption;
            toJSON(message: _156.ResponseSetOption): unknown;
            fromPartial(object: Partial<_156.ResponseSetOption>): _156.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _156.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseInitChain;
            fromJSON(object: any): _156.ResponseInitChain;
            toJSON(message: _156.ResponseInitChain): unknown;
            fromPartial(object: Partial<_156.ResponseInitChain>): _156.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _156.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseQuery;
            fromJSON(object: any): _156.ResponseQuery;
            toJSON(message: _156.ResponseQuery): unknown;
            fromPartial(object: Partial<_156.ResponseQuery>): _156.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _156.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseBeginBlock;
            fromJSON(object: any): _156.ResponseBeginBlock;
            toJSON(message: _156.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_156.ResponseBeginBlock>): _156.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _156.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseCheckTx;
            fromJSON(object: any): _156.ResponseCheckTx;
            toJSON(message: _156.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_156.ResponseCheckTx>): _156.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _156.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseDeliverTx;
            fromJSON(object: any): _156.ResponseDeliverTx;
            toJSON(message: _156.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_156.ResponseDeliverTx>): _156.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _156.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseEndBlock;
            fromJSON(object: any): _156.ResponseEndBlock;
            toJSON(message: _156.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_156.ResponseEndBlock>): _156.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _156.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseCommit;
            fromJSON(object: any): _156.ResponseCommit;
            toJSON(message: _156.ResponseCommit): unknown;
            fromPartial(object: Partial<_156.ResponseCommit>): _156.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _156.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseListSnapshots;
            fromJSON(object: any): _156.ResponseListSnapshots;
            toJSON(message: _156.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_156.ResponseListSnapshots>): _156.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _156.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseOfferSnapshot;
            fromJSON(object: any): _156.ResponseOfferSnapshot;
            toJSON(message: _156.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_156.ResponseOfferSnapshot>): _156.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _156.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _156.ResponseLoadSnapshotChunk;
            toJSON(message: _156.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_156.ResponseLoadSnapshotChunk>): _156.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _156.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ResponseApplySnapshotChunk;
            fromJSON(object: any): _156.ResponseApplySnapshotChunk;
            toJSON(message: _156.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_156.ResponseApplySnapshotChunk>): _156.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _156.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ConsensusParams;
            fromJSON(object: any): _156.ConsensusParams;
            toJSON(message: _156.ConsensusParams): unknown;
            fromPartial(object: Partial<_156.ConsensusParams>): _156.ConsensusParams;
        };
        BlockParams: {
            encode(message: _156.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.BlockParams;
            fromJSON(object: any): _156.BlockParams;
            toJSON(message: _156.BlockParams): unknown;
            fromPartial(object: Partial<_156.BlockParams>): _156.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _156.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.LastCommitInfo;
            fromJSON(object: any): _156.LastCommitInfo;
            toJSON(message: _156.LastCommitInfo): unknown;
            fromPartial(object: Partial<_156.LastCommitInfo>): _156.LastCommitInfo;
        };
        Event: {
            encode(message: _156.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Event;
            fromJSON(object: any): _156.Event;
            toJSON(message: _156.Event): unknown;
            fromPartial(object: Partial<_156.Event>): _156.Event;
        };
        EventAttribute: {
            encode(message: _156.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.EventAttribute;
            fromJSON(object: any): _156.EventAttribute;
            toJSON(message: _156.EventAttribute): unknown;
            fromPartial(object: Partial<_156.EventAttribute>): _156.EventAttribute;
        };
        TxResult: {
            encode(message: _156.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.TxResult;
            fromJSON(object: any): _156.TxResult;
            toJSON(message: _156.TxResult): unknown;
            fromPartial(object: Partial<_156.TxResult>): _156.TxResult;
        };
        Validator: {
            encode(message: _156.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Validator;
            fromJSON(object: any): _156.Validator;
            toJSON(message: _156.Validator): unknown;
            fromPartial(object: Partial<_156.Validator>): _156.Validator;
        };
        ValidatorUpdate: {
            encode(message: _156.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.ValidatorUpdate;
            fromJSON(object: any): _156.ValidatorUpdate;
            toJSON(message: _156.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_156.ValidatorUpdate>): _156.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _156.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.VoteInfo;
            fromJSON(object: any): _156.VoteInfo;
            toJSON(message: _156.VoteInfo): unknown;
            fromPartial(object: Partial<_156.VoteInfo>): _156.VoteInfo;
        };
        Evidence: {
            encode(message: _156.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Evidence;
            fromJSON(object: any): _156.Evidence;
            toJSON(message: _156.Evidence): unknown;
            fromPartial(object: Partial<_156.Evidence>): _156.Evidence;
        };
        Snapshot: {
            encode(message: _156.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Snapshot;
            fromJSON(object: any): _156.Snapshot;
            toJSON(message: _156.Snapshot): unknown;
            fromPartial(object: Partial<_156.Snapshot>): _156.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _158.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Proof;
            fromJSON(object: any): _158.Proof;
            toJSON(message: _158.Proof): unknown;
            fromPartial(object: Partial<_158.Proof>): _158.Proof;
        };
        ValueOp: {
            encode(message: _158.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ValueOp;
            fromJSON(object: any): _158.ValueOp;
            toJSON(message: _158.ValueOp): unknown;
            fromPartial(object: Partial<_158.ValueOp>): _158.ValueOp;
        };
        DominoOp: {
            encode(message: _158.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.DominoOp;
            fromJSON(object: any): _158.DominoOp;
            toJSON(message: _158.DominoOp): unknown;
            fromPartial(object: Partial<_158.DominoOp>): _158.DominoOp;
        };
        ProofOp: {
            encode(message: _158.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ProofOp;
            fromJSON(object: any): _158.ProofOp;
            toJSON(message: _158.ProofOp): unknown;
            fromPartial(object: Partial<_158.ProofOp>): _158.ProofOp;
        };
        ProofOps: {
            encode(message: _158.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ProofOps;
            fromJSON(object: any): _158.ProofOps;
            toJSON(message: _158.ProofOps): unknown;
            fromPartial(object: Partial<_158.ProofOps>): _158.ProofOps;
        };
        PublicKey: {
            encode(message: _157.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.PublicKey;
            fromJSON(object: any): _157.PublicKey;
            toJSON(message: _157.PublicKey): unknown;
            fromPartial(object: Partial<_157.PublicKey>): _157.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _159.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.BitArray;
                fromJSON(object: any): _159.BitArray;
                toJSON(message: _159.BitArray): unknown;
                fromPartial(object: Partial<_159.BitArray>): _159.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _160.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ProtocolVersion;
            fromJSON(object: any): _160.ProtocolVersion;
            toJSON(message: _160.ProtocolVersion): unknown;
            fromPartial(object: Partial<_160.ProtocolVersion>): _160.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _160.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.NodeInfo;
            fromJSON(object: any): _160.NodeInfo;
            toJSON(message: _160.NodeInfo): unknown;
            fromPartial(object: Partial<_160.NodeInfo>): _160.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _160.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.NodeInfoOther;
            fromJSON(object: any): _160.NodeInfoOther;
            toJSON(message: _160.NodeInfoOther): unknown;
            fromPartial(object: Partial<_160.NodeInfoOther>): _160.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _160.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.PeerInfo;
            fromJSON(object: any): _160.PeerInfo;
            toJSON(message: _160.PeerInfo): unknown;
            fromPartial(object: Partial<_160.PeerInfo>): _160.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _160.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.PeerAddressInfo;
            fromJSON(object: any): _160.PeerAddressInfo;
            toJSON(message: _160.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_160.PeerAddressInfo>): _160.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _165.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ValidatorSet;
            fromJSON(object: any): _165.ValidatorSet;
            toJSON(message: _165.ValidatorSet): unknown;
            fromPartial(object: Partial<_165.ValidatorSet>): _165.ValidatorSet;
        };
        Validator: {
            encode(message: _165.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Validator;
            fromJSON(object: any): _165.Validator;
            toJSON(message: _165.Validator): unknown;
            fromPartial(object: Partial<_165.Validator>): _165.Validator;
        };
        SimpleValidator: {
            encode(message: _165.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.SimpleValidator;
            fromJSON(object: any): _165.SimpleValidator;
            toJSON(message: _165.SimpleValidator): unknown;
            fromPartial(object: Partial<_165.SimpleValidator>): _165.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _164.BlockIDFlag;
        blockIDFlagToJSON(object: _164.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _164.SignedMsgType;
        signedMsgTypeToJSON(object: _164.SignedMsgType): string;
        BlockIDFlag: typeof _164.BlockIDFlag;
        BlockIDFlagSDKType: typeof _164.BlockIDFlagSDKType;
        SignedMsgType: typeof _164.SignedMsgType;
        SignedMsgTypeSDKType: typeof _164.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _164.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.PartSetHeader;
            fromJSON(object: any): _164.PartSetHeader;
            toJSON(message: _164.PartSetHeader): unknown;
            fromPartial(object: Partial<_164.PartSetHeader>): _164.PartSetHeader;
        };
        Part: {
            encode(message: _164.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Part;
            fromJSON(object: any): _164.Part;
            toJSON(message: _164.Part): unknown;
            fromPartial(object: Partial<_164.Part>): _164.Part;
        };
        BlockID: {
            encode(message: _164.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.BlockID;
            fromJSON(object: any): _164.BlockID;
            toJSON(message: _164.BlockID): unknown;
            fromPartial(object: Partial<_164.BlockID>): _164.BlockID;
        };
        Header: {
            encode(message: _164.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Header;
            fromJSON(object: any): _164.Header;
            toJSON(message: _164.Header): unknown;
            fromPartial(object: Partial<_164.Header>): _164.Header;
        };
        Data: {
            encode(message: _164.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Data;
            fromJSON(object: any): _164.Data;
            toJSON(message: _164.Data): unknown;
            fromPartial(object: Partial<_164.Data>): _164.Data;
        };
        Vote: {
            encode(message: _164.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Vote;
            fromJSON(object: any): _164.Vote;
            toJSON(message: _164.Vote): unknown;
            fromPartial(object: Partial<_164.Vote>): _164.Vote;
        };
        Commit: {
            encode(message: _164.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Commit;
            fromJSON(object: any): _164.Commit;
            toJSON(message: _164.Commit): unknown;
            fromPartial(object: Partial<_164.Commit>): _164.Commit;
        };
        CommitSig: {
            encode(message: _164.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.CommitSig;
            fromJSON(object: any): _164.CommitSig;
            toJSON(message: _164.CommitSig): unknown;
            fromPartial(object: Partial<_164.CommitSig>): _164.CommitSig;
        };
        Proposal: {
            encode(message: _164.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Proposal;
            fromJSON(object: any): _164.Proposal;
            toJSON(message: _164.Proposal): unknown;
            fromPartial(object: Partial<_164.Proposal>): _164.Proposal;
        };
        SignedHeader: {
            encode(message: _164.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.SignedHeader;
            fromJSON(object: any): _164.SignedHeader;
            toJSON(message: _164.SignedHeader): unknown;
            fromPartial(object: Partial<_164.SignedHeader>): _164.SignedHeader;
        };
        LightBlock: {
            encode(message: _164.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.LightBlock;
            fromJSON(object: any): _164.LightBlock;
            toJSON(message: _164.LightBlock): unknown;
            fromPartial(object: Partial<_164.LightBlock>): _164.LightBlock;
        };
        BlockMeta: {
            encode(message: _164.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.BlockMeta;
            fromJSON(object: any): _164.BlockMeta;
            toJSON(message: _164.BlockMeta): unknown;
            fromPartial(object: Partial<_164.BlockMeta>): _164.BlockMeta;
        };
        TxProof: {
            encode(message: _164.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TxProof;
            fromJSON(object: any): _164.TxProof;
            toJSON(message: _164.TxProof): unknown;
            fromPartial(object: Partial<_164.TxProof>): _164.TxProof;
        };
        ConsensusParams: {
            encode(message: _163.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ConsensusParams;
            fromJSON(object: any): _163.ConsensusParams;
            toJSON(message: _163.ConsensusParams): unknown;
            fromPartial(object: Partial<_163.ConsensusParams>): _163.ConsensusParams;
        };
        BlockParams: {
            encode(message: _163.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.BlockParams;
            fromJSON(object: any): _163.BlockParams;
            toJSON(message: _163.BlockParams): unknown;
            fromPartial(object: Partial<_163.BlockParams>): _163.BlockParams;
        };
        EvidenceParams: {
            encode(message: _163.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EvidenceParams;
            fromJSON(object: any): _163.EvidenceParams;
            toJSON(message: _163.EvidenceParams): unknown;
            fromPartial(object: Partial<_163.EvidenceParams>): _163.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _163.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ValidatorParams;
            fromJSON(object: any): _163.ValidatorParams;
            toJSON(message: _163.ValidatorParams): unknown;
            fromPartial(object: Partial<_163.ValidatorParams>): _163.ValidatorParams;
        };
        VersionParams: {
            encode(message: _163.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.VersionParams;
            fromJSON(object: any): _163.VersionParams;
            toJSON(message: _163.VersionParams): unknown;
            fromPartial(object: Partial<_163.VersionParams>): _163.VersionParams;
        };
        HashedParams: {
            encode(message: _163.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.HashedParams;
            fromJSON(object: any): _163.HashedParams;
            toJSON(message: _163.HashedParams): unknown;
            fromPartial(object: Partial<_163.HashedParams>): _163.HashedParams;
        };
        Evidence: {
            encode(message: _162.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Evidence;
            fromJSON(object: any): _162.Evidence;
            toJSON(message: _162.Evidence): unknown;
            fromPartial(object: Partial<_162.Evidence>): _162.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _162.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DuplicateVoteEvidence;
            fromJSON(object: any): _162.DuplicateVoteEvidence;
            toJSON(message: _162.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_162.DuplicateVoteEvidence>): _162.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _162.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.LightClientAttackEvidence;
            fromJSON(object: any): _162.LightClientAttackEvidence;
            toJSON(message: _162.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_162.LightClientAttackEvidence>): _162.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _162.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EvidenceList;
            fromJSON(object: any): _162.EvidenceList;
            toJSON(message: _162.EvidenceList): unknown;
            fromPartial(object: Partial<_162.EvidenceList>): _162.EvidenceList;
        };
        Block: {
            encode(message: _161.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Block;
            fromJSON(object: any): _161.Block;
            toJSON(message: _161.Block): unknown;
            fromPartial(object: Partial<_161.Block>): _161.Block;
        };
    };
    const version: {
        App: {
            encode(message: _166.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.App;
            fromJSON(object: any): _166.App;
            toJSON(message: _166.App): unknown;
            fromPartial(object: Partial<_166.App>): _166.App;
        };
        Consensus: {
            encode(message: _166.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Consensus;
            fromJSON(object: any): _166.Consensus;
            toJSON(message: _166.Consensus): unknown;
            fromPartial(object: Partial<_166.Consensus>): _166.Consensus;
        };
    };
}
