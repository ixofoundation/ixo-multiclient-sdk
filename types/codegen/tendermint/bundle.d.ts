import * as _164 from "./abci/types";
import * as _165 from "./crypto/keys";
import * as _166 from "./crypto/proof";
import * as _167 from "./libs/bits/types";
import * as _168 from "./p2p/types";
import * as _169 from "./types/block";
import * as _170 from "./types/evidence";
import * as _171 from "./types/params";
import * as _172 from "./types/types";
import * as _173 from "./types/validator";
import * as _174 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _164.CheckTxType;
        checkTxTypeToJSON(object: _164.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _164.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _164.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _164.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _164.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _164.EvidenceType;
        evidenceTypeToJSON(object: _164.EvidenceType): string;
        CheckTxType: typeof _164.CheckTxType;
        CheckTxTypeSDKType: typeof _164.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _164.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _164.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _164.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _164.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _164.EvidenceType;
        EvidenceTypeSDKType: typeof _164.EvidenceTypeSDKType;
        Request: {
            encode(message: _164.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Request;
            fromJSON(object: any): _164.Request;
            toJSON(message: _164.Request): unknown;
            fromPartial(object: Partial<_164.Request>): _164.Request;
        };
        RequestEcho: {
            encode(message: _164.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestEcho;
            fromJSON(object: any): _164.RequestEcho;
            toJSON(message: _164.RequestEcho): unknown;
            fromPartial(object: Partial<_164.RequestEcho>): _164.RequestEcho;
        };
        RequestFlush: {
            encode(_: _164.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestFlush;
            fromJSON(_: any): _164.RequestFlush;
            toJSON(_: _164.RequestFlush): unknown;
            fromPartial(_: Partial<_164.RequestFlush>): _164.RequestFlush;
        };
        RequestInfo: {
            encode(message: _164.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestInfo;
            fromJSON(object: any): _164.RequestInfo;
            toJSON(message: _164.RequestInfo): unknown;
            fromPartial(object: Partial<_164.RequestInfo>): _164.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _164.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestSetOption;
            fromJSON(object: any): _164.RequestSetOption;
            toJSON(message: _164.RequestSetOption): unknown;
            fromPartial(object: Partial<_164.RequestSetOption>): _164.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _164.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestInitChain;
            fromJSON(object: any): _164.RequestInitChain;
            toJSON(message: _164.RequestInitChain): unknown;
            fromPartial(object: Partial<_164.RequestInitChain>): _164.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _164.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestQuery;
            fromJSON(object: any): _164.RequestQuery;
            toJSON(message: _164.RequestQuery): unknown;
            fromPartial(object: Partial<_164.RequestQuery>): _164.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _164.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestBeginBlock;
            fromJSON(object: any): _164.RequestBeginBlock;
            toJSON(message: _164.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_164.RequestBeginBlock>): _164.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _164.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestCheckTx;
            fromJSON(object: any): _164.RequestCheckTx;
            toJSON(message: _164.RequestCheckTx): unknown;
            fromPartial(object: Partial<_164.RequestCheckTx>): _164.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _164.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestDeliverTx;
            fromJSON(object: any): _164.RequestDeliverTx;
            toJSON(message: _164.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_164.RequestDeliverTx>): _164.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _164.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestEndBlock;
            fromJSON(object: any): _164.RequestEndBlock;
            toJSON(message: _164.RequestEndBlock): unknown;
            fromPartial(object: Partial<_164.RequestEndBlock>): _164.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _164.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestCommit;
            fromJSON(_: any): _164.RequestCommit;
            toJSON(_: _164.RequestCommit): unknown;
            fromPartial(_: Partial<_164.RequestCommit>): _164.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _164.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestListSnapshots;
            fromJSON(_: any): _164.RequestListSnapshots;
            toJSON(_: _164.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_164.RequestListSnapshots>): _164.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _164.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestOfferSnapshot;
            fromJSON(object: any): _164.RequestOfferSnapshot;
            toJSON(message: _164.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_164.RequestOfferSnapshot>): _164.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _164.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestLoadSnapshotChunk;
            fromJSON(object: any): _164.RequestLoadSnapshotChunk;
            toJSON(message: _164.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_164.RequestLoadSnapshotChunk>): _164.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _164.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.RequestApplySnapshotChunk;
            fromJSON(object: any): _164.RequestApplySnapshotChunk;
            toJSON(message: _164.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_164.RequestApplySnapshotChunk>): _164.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _164.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Response;
            fromJSON(object: any): _164.Response;
            toJSON(message: _164.Response): unknown;
            fromPartial(object: Partial<_164.Response>): _164.Response;
        };
        ResponseException: {
            encode(message: _164.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseException;
            fromJSON(object: any): _164.ResponseException;
            toJSON(message: _164.ResponseException): unknown;
            fromPartial(object: Partial<_164.ResponseException>): _164.ResponseException;
        };
        ResponseEcho: {
            encode(message: _164.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseEcho;
            fromJSON(object: any): _164.ResponseEcho;
            toJSON(message: _164.ResponseEcho): unknown;
            fromPartial(object: Partial<_164.ResponseEcho>): _164.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _164.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseFlush;
            fromJSON(_: any): _164.ResponseFlush;
            toJSON(_: _164.ResponseFlush): unknown;
            fromPartial(_: Partial<_164.ResponseFlush>): _164.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _164.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseInfo;
            fromJSON(object: any): _164.ResponseInfo;
            toJSON(message: _164.ResponseInfo): unknown;
            fromPartial(object: Partial<_164.ResponseInfo>): _164.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _164.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseSetOption;
            fromJSON(object: any): _164.ResponseSetOption;
            toJSON(message: _164.ResponseSetOption): unknown;
            fromPartial(object: Partial<_164.ResponseSetOption>): _164.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _164.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseInitChain;
            fromJSON(object: any): _164.ResponseInitChain;
            toJSON(message: _164.ResponseInitChain): unknown;
            fromPartial(object: Partial<_164.ResponseInitChain>): _164.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _164.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseQuery;
            fromJSON(object: any): _164.ResponseQuery;
            toJSON(message: _164.ResponseQuery): unknown;
            fromPartial(object: Partial<_164.ResponseQuery>): _164.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _164.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseBeginBlock;
            fromJSON(object: any): _164.ResponseBeginBlock;
            toJSON(message: _164.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_164.ResponseBeginBlock>): _164.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _164.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseCheckTx;
            fromJSON(object: any): _164.ResponseCheckTx;
            toJSON(message: _164.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_164.ResponseCheckTx>): _164.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _164.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseDeliverTx;
            fromJSON(object: any): _164.ResponseDeliverTx;
            toJSON(message: _164.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_164.ResponseDeliverTx>): _164.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _164.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseEndBlock;
            fromJSON(object: any): _164.ResponseEndBlock;
            toJSON(message: _164.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_164.ResponseEndBlock>): _164.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _164.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseCommit;
            fromJSON(object: any): _164.ResponseCommit;
            toJSON(message: _164.ResponseCommit): unknown;
            fromPartial(object: Partial<_164.ResponseCommit>): _164.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _164.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseListSnapshots;
            fromJSON(object: any): _164.ResponseListSnapshots;
            toJSON(message: _164.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_164.ResponseListSnapshots>): _164.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _164.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseOfferSnapshot;
            fromJSON(object: any): _164.ResponseOfferSnapshot;
            toJSON(message: _164.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_164.ResponseOfferSnapshot>): _164.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _164.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _164.ResponseLoadSnapshotChunk;
            toJSON(message: _164.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_164.ResponseLoadSnapshotChunk>): _164.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _164.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ResponseApplySnapshotChunk;
            fromJSON(object: any): _164.ResponseApplySnapshotChunk;
            toJSON(message: _164.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_164.ResponseApplySnapshotChunk>): _164.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _164.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ConsensusParams;
            fromJSON(object: any): _164.ConsensusParams;
            toJSON(message: _164.ConsensusParams): unknown;
            fromPartial(object: Partial<_164.ConsensusParams>): _164.ConsensusParams;
        };
        BlockParams: {
            encode(message: _164.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.BlockParams;
            fromJSON(object: any): _164.BlockParams;
            toJSON(message: _164.BlockParams): unknown;
            fromPartial(object: Partial<_164.BlockParams>): _164.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _164.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.LastCommitInfo;
            fromJSON(object: any): _164.LastCommitInfo;
            toJSON(message: _164.LastCommitInfo): unknown;
            fromPartial(object: Partial<_164.LastCommitInfo>): _164.LastCommitInfo;
        };
        Event: {
            encode(message: _164.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Event;
            fromJSON(object: any): _164.Event;
            toJSON(message: _164.Event): unknown;
            fromPartial(object: Partial<_164.Event>): _164.Event;
        };
        EventAttribute: {
            encode(message: _164.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.EventAttribute;
            fromJSON(object: any): _164.EventAttribute;
            toJSON(message: _164.EventAttribute): unknown;
            fromPartial(object: Partial<_164.EventAttribute>): _164.EventAttribute;
        };
        TxResult: {
            encode(message: _164.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TxResult;
            fromJSON(object: any): _164.TxResult;
            toJSON(message: _164.TxResult): unknown;
            fromPartial(object: Partial<_164.TxResult>): _164.TxResult;
        };
        Validator: {
            encode(message: _164.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Validator;
            fromJSON(object: any): _164.Validator;
            toJSON(message: _164.Validator): unknown;
            fromPartial(object: Partial<_164.Validator>): _164.Validator;
        };
        ValidatorUpdate: {
            encode(message: _164.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.ValidatorUpdate;
            fromJSON(object: any): _164.ValidatorUpdate;
            toJSON(message: _164.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_164.ValidatorUpdate>): _164.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _164.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.VoteInfo;
            fromJSON(object: any): _164.VoteInfo;
            toJSON(message: _164.VoteInfo): unknown;
            fromPartial(object: Partial<_164.VoteInfo>): _164.VoteInfo;
        };
        Evidence: {
            encode(message: _164.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Evidence;
            fromJSON(object: any): _164.Evidence;
            toJSON(message: _164.Evidence): unknown;
            fromPartial(object: Partial<_164.Evidence>): _164.Evidence;
        };
        Snapshot: {
            encode(message: _164.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Snapshot;
            fromJSON(object: any): _164.Snapshot;
            toJSON(message: _164.Snapshot): unknown;
            fromPartial(object: Partial<_164.Snapshot>): _164.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _166.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Proof;
            fromJSON(object: any): _166.Proof;
            toJSON(message: _166.Proof): unknown;
            fromPartial(object: Partial<_166.Proof>): _166.Proof;
        };
        ValueOp: {
            encode(message: _166.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ValueOp;
            fromJSON(object: any): _166.ValueOp;
            toJSON(message: _166.ValueOp): unknown;
            fromPartial(object: Partial<_166.ValueOp>): _166.ValueOp;
        };
        DominoOp: {
            encode(message: _166.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.DominoOp;
            fromJSON(object: any): _166.DominoOp;
            toJSON(message: _166.DominoOp): unknown;
            fromPartial(object: Partial<_166.DominoOp>): _166.DominoOp;
        };
        ProofOp: {
            encode(message: _166.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ProofOp;
            fromJSON(object: any): _166.ProofOp;
            toJSON(message: _166.ProofOp): unknown;
            fromPartial(object: Partial<_166.ProofOp>): _166.ProofOp;
        };
        ProofOps: {
            encode(message: _166.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ProofOps;
            fromJSON(object: any): _166.ProofOps;
            toJSON(message: _166.ProofOps): unknown;
            fromPartial(object: Partial<_166.ProofOps>): _166.ProofOps;
        };
        PublicKey: {
            encode(message: _165.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.PublicKey;
            fromJSON(object: any): _165.PublicKey;
            toJSON(message: _165.PublicKey): unknown;
            fromPartial(object: Partial<_165.PublicKey>): _165.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _167.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.BitArray;
                fromJSON(object: any): _167.BitArray;
                toJSON(message: _167.BitArray): unknown;
                fromPartial(object: Partial<_167.BitArray>): _167.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _168.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.ProtocolVersion;
            fromJSON(object: any): _168.ProtocolVersion;
            toJSON(message: _168.ProtocolVersion): unknown;
            fromPartial(object: Partial<_168.ProtocolVersion>): _168.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _168.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.NodeInfo;
            fromJSON(object: any): _168.NodeInfo;
            toJSON(message: _168.NodeInfo): unknown;
            fromPartial(object: Partial<_168.NodeInfo>): _168.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _168.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.NodeInfoOther;
            fromJSON(object: any): _168.NodeInfoOther;
            toJSON(message: _168.NodeInfoOther): unknown;
            fromPartial(object: Partial<_168.NodeInfoOther>): _168.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _168.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PeerInfo;
            fromJSON(object: any): _168.PeerInfo;
            toJSON(message: _168.PeerInfo): unknown;
            fromPartial(object: Partial<_168.PeerInfo>): _168.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _168.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PeerAddressInfo;
            fromJSON(object: any): _168.PeerAddressInfo;
            toJSON(message: _168.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_168.PeerAddressInfo>): _168.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _173.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ValidatorSet;
            fromJSON(object: any): _173.ValidatorSet;
            toJSON(message: _173.ValidatorSet): unknown;
            fromPartial(object: Partial<_173.ValidatorSet>): _173.ValidatorSet;
        };
        Validator: {
            encode(message: _173.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Validator;
            fromJSON(object: any): _173.Validator;
            toJSON(message: _173.Validator): unknown;
            fromPartial(object: Partial<_173.Validator>): _173.Validator;
        };
        SimpleValidator: {
            encode(message: _173.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.SimpleValidator;
            fromJSON(object: any): _173.SimpleValidator;
            toJSON(message: _173.SimpleValidator): unknown;
            fromPartial(object: Partial<_173.SimpleValidator>): _173.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _172.BlockIDFlag;
        blockIDFlagToJSON(object: _172.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _172.SignedMsgType;
        signedMsgTypeToJSON(object: _172.SignedMsgType): string;
        BlockIDFlag: typeof _172.BlockIDFlag;
        BlockIDFlagSDKType: typeof _172.BlockIDFlagSDKType;
        SignedMsgType: typeof _172.SignedMsgType;
        SignedMsgTypeSDKType: typeof _172.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _172.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PartSetHeader;
            fromJSON(object: any): _172.PartSetHeader;
            toJSON(message: _172.PartSetHeader): unknown;
            fromPartial(object: Partial<_172.PartSetHeader>): _172.PartSetHeader;
        };
        Part: {
            encode(message: _172.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Part;
            fromJSON(object: any): _172.Part;
            toJSON(message: _172.Part): unknown;
            fromPartial(object: Partial<_172.Part>): _172.Part;
        };
        BlockID: {
            encode(message: _172.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BlockID;
            fromJSON(object: any): _172.BlockID;
            toJSON(message: _172.BlockID): unknown;
            fromPartial(object: Partial<_172.BlockID>): _172.BlockID;
        };
        Header: {
            encode(message: _172.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Header;
            fromJSON(object: any): _172.Header;
            toJSON(message: _172.Header): unknown;
            fromPartial(object: Partial<_172.Header>): _172.Header;
        };
        Data: {
            encode(message: _172.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Data;
            fromJSON(object: any): _172.Data;
            toJSON(message: _172.Data): unknown;
            fromPartial(object: Partial<_172.Data>): _172.Data;
        };
        Vote: {
            encode(message: _172.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Vote;
            fromJSON(object: any): _172.Vote;
            toJSON(message: _172.Vote): unknown;
            fromPartial(object: Partial<_172.Vote>): _172.Vote;
        };
        Commit: {
            encode(message: _172.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Commit;
            fromJSON(object: any): _172.Commit;
            toJSON(message: _172.Commit): unknown;
            fromPartial(object: Partial<_172.Commit>): _172.Commit;
        };
        CommitSig: {
            encode(message: _172.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.CommitSig;
            fromJSON(object: any): _172.CommitSig;
            toJSON(message: _172.CommitSig): unknown;
            fromPartial(object: Partial<_172.CommitSig>): _172.CommitSig;
        };
        Proposal: {
            encode(message: _172.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Proposal;
            fromJSON(object: any): _172.Proposal;
            toJSON(message: _172.Proposal): unknown;
            fromPartial(object: Partial<_172.Proposal>): _172.Proposal;
        };
        SignedHeader: {
            encode(message: _172.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SignedHeader;
            fromJSON(object: any): _172.SignedHeader;
            toJSON(message: _172.SignedHeader): unknown;
            fromPartial(object: Partial<_172.SignedHeader>): _172.SignedHeader;
        };
        LightBlock: {
            encode(message: _172.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.LightBlock;
            fromJSON(object: any): _172.LightBlock;
            toJSON(message: _172.LightBlock): unknown;
            fromPartial(object: Partial<_172.LightBlock>): _172.LightBlock;
        };
        BlockMeta: {
            encode(message: _172.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BlockMeta;
            fromJSON(object: any): _172.BlockMeta;
            toJSON(message: _172.BlockMeta): unknown;
            fromPartial(object: Partial<_172.BlockMeta>): _172.BlockMeta;
        };
        TxProof: {
            encode(message: _172.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxProof;
            fromJSON(object: any): _172.TxProof;
            toJSON(message: _172.TxProof): unknown;
            fromPartial(object: Partial<_172.TxProof>): _172.TxProof;
        };
        ConsensusParams: {
            encode(message: _171.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ConsensusParams;
            fromJSON(object: any): _171.ConsensusParams;
            toJSON(message: _171.ConsensusParams): unknown;
            fromPartial(object: Partial<_171.ConsensusParams>): _171.ConsensusParams;
        };
        BlockParams: {
            encode(message: _171.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BlockParams;
            fromJSON(object: any): _171.BlockParams;
            toJSON(message: _171.BlockParams): unknown;
            fromPartial(object: Partial<_171.BlockParams>): _171.BlockParams;
        };
        EvidenceParams: {
            encode(message: _171.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.EvidenceParams;
            fromJSON(object: any): _171.EvidenceParams;
            toJSON(message: _171.EvidenceParams): unknown;
            fromPartial(object: Partial<_171.EvidenceParams>): _171.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _171.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.ValidatorParams;
            fromJSON(object: any): _171.ValidatorParams;
            toJSON(message: _171.ValidatorParams): unknown;
            fromPartial(object: Partial<_171.ValidatorParams>): _171.ValidatorParams;
        };
        VersionParams: {
            encode(message: _171.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.VersionParams;
            fromJSON(object: any): _171.VersionParams;
            toJSON(message: _171.VersionParams): unknown;
            fromPartial(object: Partial<_171.VersionParams>): _171.VersionParams;
        };
        HashedParams: {
            encode(message: _171.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.HashedParams;
            fromJSON(object: any): _171.HashedParams;
            toJSON(message: _171.HashedParams): unknown;
            fromPartial(object: Partial<_171.HashedParams>): _171.HashedParams;
        };
        Evidence: {
            encode(message: _170.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Evidence;
            fromJSON(object: any): _170.Evidence;
            toJSON(message: _170.Evidence): unknown;
            fromPartial(object: Partial<_170.Evidence>): _170.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _170.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DuplicateVoteEvidence;
            fromJSON(object: any): _170.DuplicateVoteEvidence;
            toJSON(message: _170.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_170.DuplicateVoteEvidence>): _170.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _170.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.LightClientAttackEvidence;
            fromJSON(object: any): _170.LightClientAttackEvidence;
            toJSON(message: _170.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_170.LightClientAttackEvidence>): _170.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _170.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.EvidenceList;
            fromJSON(object: any): _170.EvidenceList;
            toJSON(message: _170.EvidenceList): unknown;
            fromPartial(object: Partial<_170.EvidenceList>): _170.EvidenceList;
        };
        Block: {
            encode(message: _169.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Block;
            fromJSON(object: any): _169.Block;
            toJSON(message: _169.Block): unknown;
            fromPartial(object: Partial<_169.Block>): _169.Block;
        };
    };
    const version: {
        App: {
            encode(message: _174.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.App;
            fromJSON(object: any): _174.App;
            toJSON(message: _174.App): unknown;
            fromPartial(object: Partial<_174.App>): _174.App;
        };
        Consensus: {
            encode(message: _174.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Consensus;
            fromJSON(object: any): _174.Consensus;
            toJSON(message: _174.Consensus): unknown;
            fromPartial(object: Partial<_174.Consensus>): _174.Consensus;
        };
    };
}
