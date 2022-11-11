import * as _130 from "./abci/types";
import * as _131 from "./crypto/keys";
import * as _132 from "./crypto/proof";
import * as _133 from "./libs/bits/types";
import * as _134 from "./p2p/types";
import * as _135 from "./types/block";
import * as _136 from "./types/evidence";
import * as _137 from "./types/params";
import * as _138 from "./types/types";
import * as _139 from "./types/validator";
import * as _140 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _130.CheckTxType;
        checkTxTypeToJSON(object: _130.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _130.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _130.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _130.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _130.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _130.EvidenceType;
        evidenceTypeToJSON(object: _130.EvidenceType): string;
        CheckTxType: typeof _130.CheckTxType;
        CheckTxTypeSDKType: typeof _130.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _130.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _130.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _130.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _130.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _130.EvidenceType;
        EvidenceTypeSDKType: typeof _130.EvidenceTypeSDKType;
        Request: {
            encode(message: _130.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Request;
            fromJSON(object: any): _130.Request;
            toJSON(message: _130.Request): unknown;
            fromPartial(object: Partial<_130.Request>): _130.Request;
        };
        RequestEcho: {
            encode(message: _130.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestEcho;
            fromJSON(object: any): _130.RequestEcho;
            toJSON(message: _130.RequestEcho): unknown;
            fromPartial(object: Partial<_130.RequestEcho>): _130.RequestEcho;
        };
        RequestFlush: {
            encode(_: _130.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestFlush;
            fromJSON(_: any): _130.RequestFlush;
            toJSON(_: _130.RequestFlush): unknown;
            fromPartial(_: Partial<_130.RequestFlush>): _130.RequestFlush;
        };
        RequestInfo: {
            encode(message: _130.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestInfo;
            fromJSON(object: any): _130.RequestInfo;
            toJSON(message: _130.RequestInfo): unknown;
            fromPartial(object: Partial<_130.RequestInfo>): _130.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _130.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestSetOption;
            fromJSON(object: any): _130.RequestSetOption;
            toJSON(message: _130.RequestSetOption): unknown;
            fromPartial(object: Partial<_130.RequestSetOption>): _130.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _130.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestInitChain;
            fromJSON(object: any): _130.RequestInitChain;
            toJSON(message: _130.RequestInitChain): unknown;
            fromPartial(object: Partial<_130.RequestInitChain>): _130.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _130.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestQuery;
            fromJSON(object: any): _130.RequestQuery;
            toJSON(message: _130.RequestQuery): unknown;
            fromPartial(object: Partial<_130.RequestQuery>): _130.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _130.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestBeginBlock;
            fromJSON(object: any): _130.RequestBeginBlock;
            toJSON(message: _130.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_130.RequestBeginBlock>): _130.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _130.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestCheckTx;
            fromJSON(object: any): _130.RequestCheckTx;
            toJSON(message: _130.RequestCheckTx): unknown;
            fromPartial(object: Partial<_130.RequestCheckTx>): _130.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _130.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestDeliverTx;
            fromJSON(object: any): _130.RequestDeliverTx;
            toJSON(message: _130.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_130.RequestDeliverTx>): _130.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _130.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestEndBlock;
            fromJSON(object: any): _130.RequestEndBlock;
            toJSON(message: _130.RequestEndBlock): unknown;
            fromPartial(object: Partial<_130.RequestEndBlock>): _130.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _130.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestCommit;
            fromJSON(_: any): _130.RequestCommit;
            toJSON(_: _130.RequestCommit): unknown;
            fromPartial(_: Partial<_130.RequestCommit>): _130.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _130.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestListSnapshots;
            fromJSON(_: any): _130.RequestListSnapshots;
            toJSON(_: _130.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_130.RequestListSnapshots>): _130.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _130.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestOfferSnapshot;
            fromJSON(object: any): _130.RequestOfferSnapshot;
            toJSON(message: _130.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_130.RequestOfferSnapshot>): _130.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _130.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestLoadSnapshotChunk;
            fromJSON(object: any): _130.RequestLoadSnapshotChunk;
            toJSON(message: _130.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_130.RequestLoadSnapshotChunk>): _130.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _130.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.RequestApplySnapshotChunk;
            fromJSON(object: any): _130.RequestApplySnapshotChunk;
            toJSON(message: _130.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_130.RequestApplySnapshotChunk>): _130.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _130.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Response;
            fromJSON(object: any): _130.Response;
            toJSON(message: _130.Response): unknown;
            fromPartial(object: Partial<_130.Response>): _130.Response;
        };
        ResponseException: {
            encode(message: _130.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseException;
            fromJSON(object: any): _130.ResponseException;
            toJSON(message: _130.ResponseException): unknown;
            fromPartial(object: Partial<_130.ResponseException>): _130.ResponseException;
        };
        ResponseEcho: {
            encode(message: _130.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseEcho;
            fromJSON(object: any): _130.ResponseEcho;
            toJSON(message: _130.ResponseEcho): unknown;
            fromPartial(object: Partial<_130.ResponseEcho>): _130.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _130.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseFlush;
            fromJSON(_: any): _130.ResponseFlush;
            toJSON(_: _130.ResponseFlush): unknown;
            fromPartial(_: Partial<_130.ResponseFlush>): _130.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _130.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseInfo;
            fromJSON(object: any): _130.ResponseInfo;
            toJSON(message: _130.ResponseInfo): unknown;
            fromPartial(object: Partial<_130.ResponseInfo>): _130.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _130.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseSetOption;
            fromJSON(object: any): _130.ResponseSetOption;
            toJSON(message: _130.ResponseSetOption): unknown;
            fromPartial(object: Partial<_130.ResponseSetOption>): _130.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _130.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseInitChain;
            fromJSON(object: any): _130.ResponseInitChain;
            toJSON(message: _130.ResponseInitChain): unknown;
            fromPartial(object: Partial<_130.ResponseInitChain>): _130.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _130.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseQuery;
            fromJSON(object: any): _130.ResponseQuery;
            toJSON(message: _130.ResponseQuery): unknown;
            fromPartial(object: Partial<_130.ResponseQuery>): _130.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _130.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseBeginBlock;
            fromJSON(object: any): _130.ResponseBeginBlock;
            toJSON(message: _130.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_130.ResponseBeginBlock>): _130.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _130.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseCheckTx;
            fromJSON(object: any): _130.ResponseCheckTx;
            toJSON(message: _130.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_130.ResponseCheckTx>): _130.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _130.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseDeliverTx;
            fromJSON(object: any): _130.ResponseDeliverTx;
            toJSON(message: _130.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_130.ResponseDeliverTx>): _130.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _130.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseEndBlock;
            fromJSON(object: any): _130.ResponseEndBlock;
            toJSON(message: _130.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_130.ResponseEndBlock>): _130.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _130.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseCommit;
            fromJSON(object: any): _130.ResponseCommit;
            toJSON(message: _130.ResponseCommit): unknown;
            fromPartial(object: Partial<_130.ResponseCommit>): _130.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _130.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseListSnapshots;
            fromJSON(object: any): _130.ResponseListSnapshots;
            toJSON(message: _130.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_130.ResponseListSnapshots>): _130.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _130.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseOfferSnapshot;
            fromJSON(object: any): _130.ResponseOfferSnapshot;
            toJSON(message: _130.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_130.ResponseOfferSnapshot>): _130.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _130.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _130.ResponseLoadSnapshotChunk;
            toJSON(message: _130.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_130.ResponseLoadSnapshotChunk>): _130.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _130.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ResponseApplySnapshotChunk;
            fromJSON(object: any): _130.ResponseApplySnapshotChunk;
            toJSON(message: _130.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_130.ResponseApplySnapshotChunk>): _130.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _130.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ConsensusParams;
            fromJSON(object: any): _130.ConsensusParams;
            toJSON(message: _130.ConsensusParams): unknown;
            fromPartial(object: Partial<_130.ConsensusParams>): _130.ConsensusParams;
        };
        BlockParams: {
            encode(message: _130.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.BlockParams;
            fromJSON(object: any): _130.BlockParams;
            toJSON(message: _130.BlockParams): unknown;
            fromPartial(object: Partial<_130.BlockParams>): _130.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _130.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.LastCommitInfo;
            fromJSON(object: any): _130.LastCommitInfo;
            toJSON(message: _130.LastCommitInfo): unknown;
            fromPartial(object: Partial<_130.LastCommitInfo>): _130.LastCommitInfo;
        };
        Event: {
            encode(message: _130.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Event;
            fromJSON(object: any): _130.Event;
            toJSON(message: _130.Event): unknown;
            fromPartial(object: Partial<_130.Event>): _130.Event;
        };
        EventAttribute: {
            encode(message: _130.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EventAttribute;
            fromJSON(object: any): _130.EventAttribute;
            toJSON(message: _130.EventAttribute): unknown;
            fromPartial(object: Partial<_130.EventAttribute>): _130.EventAttribute;
        };
        TxResult: {
            encode(message: _130.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TxResult;
            fromJSON(object: any): _130.TxResult;
            toJSON(message: _130.TxResult): unknown;
            fromPartial(object: Partial<_130.TxResult>): _130.TxResult;
        };
        Validator: {
            encode(message: _130.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Validator;
            fromJSON(object: any): _130.Validator;
            toJSON(message: _130.Validator): unknown;
            fromPartial(object: Partial<_130.Validator>): _130.Validator;
        };
        ValidatorUpdate: {
            encode(message: _130.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ValidatorUpdate;
            fromJSON(object: any): _130.ValidatorUpdate;
            toJSON(message: _130.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_130.ValidatorUpdate>): _130.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _130.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.VoteInfo;
            fromJSON(object: any): _130.VoteInfo;
            toJSON(message: _130.VoteInfo): unknown;
            fromPartial(object: Partial<_130.VoteInfo>): _130.VoteInfo;
        };
        Evidence: {
            encode(message: _130.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Evidence;
            fromJSON(object: any): _130.Evidence;
            toJSON(message: _130.Evidence): unknown;
            fromPartial(object: Partial<_130.Evidence>): _130.Evidence;
        };
        Snapshot: {
            encode(message: _130.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Snapshot;
            fromJSON(object: any): _130.Snapshot;
            toJSON(message: _130.Snapshot): unknown;
            fromPartial(object: Partial<_130.Snapshot>): _130.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _132.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Proof;
            fromJSON(object: any): _132.Proof;
            toJSON(message: _132.Proof): unknown;
            fromPartial(object: Partial<_132.Proof>): _132.Proof;
        };
        ValueOp: {
            encode(message: _132.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ValueOp;
            fromJSON(object: any): _132.ValueOp;
            toJSON(message: _132.ValueOp): unknown;
            fromPartial(object: Partial<_132.ValueOp>): _132.ValueOp;
        };
        DominoOp: {
            encode(message: _132.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DominoOp;
            fromJSON(object: any): _132.DominoOp;
            toJSON(message: _132.DominoOp): unknown;
            fromPartial(object: Partial<_132.DominoOp>): _132.DominoOp;
        };
        ProofOp: {
            encode(message: _132.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ProofOp;
            fromJSON(object: any): _132.ProofOp;
            toJSON(message: _132.ProofOp): unknown;
            fromPartial(object: Partial<_132.ProofOp>): _132.ProofOp;
        };
        ProofOps: {
            encode(message: _132.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ProofOps;
            fromJSON(object: any): _132.ProofOps;
            toJSON(message: _132.ProofOps): unknown;
            fromPartial(object: Partial<_132.ProofOps>): _132.ProofOps;
        };
        PublicKey: {
            encode(message: _131.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.PublicKey;
            fromJSON(object: any): _131.PublicKey;
            toJSON(message: _131.PublicKey): unknown;
            fromPartial(object: Partial<_131.PublicKey>): _131.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _133.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.BitArray;
                fromJSON(object: any): _133.BitArray;
                toJSON(message: _133.BitArray): unknown;
                fromPartial(object: Partial<_133.BitArray>): _133.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _134.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProtocolVersion;
            fromJSON(object: any): _134.ProtocolVersion;
            toJSON(message: _134.ProtocolVersion): unknown;
            fromPartial(object: Partial<_134.ProtocolVersion>): _134.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _134.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.NodeInfo;
            fromJSON(object: any): _134.NodeInfo;
            toJSON(message: _134.NodeInfo): unknown;
            fromPartial(object: Partial<_134.NodeInfo>): _134.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _134.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.NodeInfoOther;
            fromJSON(object: any): _134.NodeInfoOther;
            toJSON(message: _134.NodeInfoOther): unknown;
            fromPartial(object: Partial<_134.NodeInfoOther>): _134.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _134.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PeerInfo;
            fromJSON(object: any): _134.PeerInfo;
            toJSON(message: _134.PeerInfo): unknown;
            fromPartial(object: Partial<_134.PeerInfo>): _134.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _134.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PeerAddressInfo;
            fromJSON(object: any): _134.PeerAddressInfo;
            toJSON(message: _134.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_134.PeerAddressInfo>): _134.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _139.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ValidatorSet;
            fromJSON(object: any): _139.ValidatorSet;
            toJSON(message: _139.ValidatorSet): unknown;
            fromPartial(object: Partial<_139.ValidatorSet>): _139.ValidatorSet;
        };
        Validator: {
            encode(message: _139.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Validator;
            fromJSON(object: any): _139.Validator;
            toJSON(message: _139.Validator): unknown;
            fromPartial(object: Partial<_139.Validator>): _139.Validator;
        };
        SimpleValidator: {
            encode(message: _139.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.SimpleValidator;
            fromJSON(object: any): _139.SimpleValidator;
            toJSON(message: _139.SimpleValidator): unknown;
            fromPartial(object: Partial<_139.SimpleValidator>): _139.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _138.BlockIDFlag;
        blockIDFlagToJSON(object: _138.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _138.SignedMsgType;
        signedMsgTypeToJSON(object: _138.SignedMsgType): string;
        BlockIDFlag: typeof _138.BlockIDFlag;
        BlockIDFlagSDKType: typeof _138.BlockIDFlagSDKType;
        SignedMsgType: typeof _138.SignedMsgType;
        SignedMsgTypeSDKType: typeof _138.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _138.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.PartSetHeader;
            fromJSON(object: any): _138.PartSetHeader;
            toJSON(message: _138.PartSetHeader): unknown;
            fromPartial(object: Partial<_138.PartSetHeader>): _138.PartSetHeader;
        };
        Part: {
            encode(message: _138.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Part;
            fromJSON(object: any): _138.Part;
            toJSON(message: _138.Part): unknown;
            fromPartial(object: Partial<_138.Part>): _138.Part;
        };
        BlockID: {
            encode(message: _138.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.BlockID;
            fromJSON(object: any): _138.BlockID;
            toJSON(message: _138.BlockID): unknown;
            fromPartial(object: Partial<_138.BlockID>): _138.BlockID;
        };
        Header: {
            encode(message: _138.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Header;
            fromJSON(object: any): _138.Header;
            toJSON(message: _138.Header): unknown;
            fromPartial(object: Partial<_138.Header>): _138.Header;
        };
        Data: {
            encode(message: _138.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Data;
            fromJSON(object: any): _138.Data;
            toJSON(message: _138.Data): unknown;
            fromPartial(object: Partial<_138.Data>): _138.Data;
        };
        Vote: {
            encode(message: _138.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Vote;
            fromJSON(object: any): _138.Vote;
            toJSON(message: _138.Vote): unknown;
            fromPartial(object: Partial<_138.Vote>): _138.Vote;
        };
        Commit: {
            encode(message: _138.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Commit;
            fromJSON(object: any): _138.Commit;
            toJSON(message: _138.Commit): unknown;
            fromPartial(object: Partial<_138.Commit>): _138.Commit;
        };
        CommitSig: {
            encode(message: _138.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.CommitSig;
            fromJSON(object: any): _138.CommitSig;
            toJSON(message: _138.CommitSig): unknown;
            fromPartial(object: Partial<_138.CommitSig>): _138.CommitSig;
        };
        Proposal: {
            encode(message: _138.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Proposal;
            fromJSON(object: any): _138.Proposal;
            toJSON(message: _138.Proposal): unknown;
            fromPartial(object: Partial<_138.Proposal>): _138.Proposal;
        };
        SignedHeader: {
            encode(message: _138.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.SignedHeader;
            fromJSON(object: any): _138.SignedHeader;
            toJSON(message: _138.SignedHeader): unknown;
            fromPartial(object: Partial<_138.SignedHeader>): _138.SignedHeader;
        };
        LightBlock: {
            encode(message: _138.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LightBlock;
            fromJSON(object: any): _138.LightBlock;
            toJSON(message: _138.LightBlock): unknown;
            fromPartial(object: Partial<_138.LightBlock>): _138.LightBlock;
        };
        BlockMeta: {
            encode(message: _138.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.BlockMeta;
            fromJSON(object: any): _138.BlockMeta;
            toJSON(message: _138.BlockMeta): unknown;
            fromPartial(object: Partial<_138.BlockMeta>): _138.BlockMeta;
        };
        TxProof: {
            encode(message: _138.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TxProof;
            fromJSON(object: any): _138.TxProof;
            toJSON(message: _138.TxProof): unknown;
            fromPartial(object: Partial<_138.TxProof>): _138.TxProof;
        };
        ConsensusParams: {
            encode(message: _137.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ConsensusParams;
            fromJSON(object: any): _137.ConsensusParams;
            toJSON(message: _137.ConsensusParams): unknown;
            fromPartial(object: Partial<_137.ConsensusParams>): _137.ConsensusParams;
        };
        BlockParams: {
            encode(message: _137.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.BlockParams;
            fromJSON(object: any): _137.BlockParams;
            toJSON(message: _137.BlockParams): unknown;
            fromPartial(object: Partial<_137.BlockParams>): _137.BlockParams;
        };
        EvidenceParams: {
            encode(message: _137.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EvidenceParams;
            fromJSON(object: any): _137.EvidenceParams;
            toJSON(message: _137.EvidenceParams): unknown;
            fromPartial(object: Partial<_137.EvidenceParams>): _137.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _137.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ValidatorParams;
            fromJSON(object: any): _137.ValidatorParams;
            toJSON(message: _137.ValidatorParams): unknown;
            fromPartial(object: Partial<_137.ValidatorParams>): _137.ValidatorParams;
        };
        VersionParams: {
            encode(message: _137.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.VersionParams;
            fromJSON(object: any): _137.VersionParams;
            toJSON(message: _137.VersionParams): unknown;
            fromPartial(object: Partial<_137.VersionParams>): _137.VersionParams;
        };
        HashedParams: {
            encode(message: _137.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.HashedParams;
            fromJSON(object: any): _137.HashedParams;
            toJSON(message: _137.HashedParams): unknown;
            fromPartial(object: Partial<_137.HashedParams>): _137.HashedParams;
        };
        Evidence: {
            encode(message: _136.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Evidence;
            fromJSON(object: any): _136.Evidence;
            toJSON(message: _136.Evidence): unknown;
            fromPartial(object: Partial<_136.Evidence>): _136.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _136.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.DuplicateVoteEvidence;
            fromJSON(object: any): _136.DuplicateVoteEvidence;
            toJSON(message: _136.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_136.DuplicateVoteEvidence>): _136.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _136.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LightClientAttackEvidence;
            fromJSON(object: any): _136.LightClientAttackEvidence;
            toJSON(message: _136.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_136.LightClientAttackEvidence>): _136.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _136.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EvidenceList;
            fromJSON(object: any): _136.EvidenceList;
            toJSON(message: _136.EvidenceList): unknown;
            fromPartial(object: Partial<_136.EvidenceList>): _136.EvidenceList;
        };
        Block: {
            encode(message: _135.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Block;
            fromJSON(object: any): _135.Block;
            toJSON(message: _135.Block): unknown;
            fromPartial(object: Partial<_135.Block>): _135.Block;
        };
    };
    const version: {
        App: {
            encode(message: _140.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.App;
            fromJSON(object: any): _140.App;
            toJSON(message: _140.App): unknown;
            fromPartial(object: Partial<_140.App>): _140.App;
        };
        Consensus: {
            encode(message: _140.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Consensus;
            fromJSON(object: any): _140.Consensus;
            toJSON(message: _140.Consensus): unknown;
            fromPartial(object: Partial<_140.Consensus>): _140.Consensus;
        };
    };
}
