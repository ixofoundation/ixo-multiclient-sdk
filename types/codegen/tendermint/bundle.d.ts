import * as _176 from "./abci/types";
import * as _177 from "./crypto/keys";
import * as _178 from "./crypto/proof";
import * as _179 from "./libs/bits/types";
import * as _180 from "./p2p/types";
import * as _181 from "./types/block";
import * as _182 from "./types/evidence";
import * as _183 from "./types/params";
import * as _184 from "./types/types";
import * as _185 from "./types/validator";
import * as _186 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _176.CheckTxType;
        checkTxTypeToJSON(object: _176.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _176.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _176.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _176.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _176.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _176.EvidenceType;
        evidenceTypeToJSON(object: _176.EvidenceType): string;
        CheckTxType: typeof _176.CheckTxType;
        CheckTxTypeSDKType: typeof _176.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _176.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _176.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _176.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _176.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _176.EvidenceType;
        EvidenceTypeSDKType: typeof _176.EvidenceType;
        Request: {
            encode(message: _176.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Request;
            fromJSON(object: any): _176.Request;
            toJSON(message: _176.Request): unknown;
            fromPartial(object: Partial<_176.Request>): _176.Request;
        };
        RequestEcho: {
            encode(message: _176.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestEcho;
            fromJSON(object: any): _176.RequestEcho;
            toJSON(message: _176.RequestEcho): unknown;
            fromPartial(object: Partial<_176.RequestEcho>): _176.RequestEcho;
        };
        RequestFlush: {
            encode(_: _176.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestFlush;
            fromJSON(_: any): _176.RequestFlush;
            toJSON(_: _176.RequestFlush): unknown;
            fromPartial(_: Partial<_176.RequestFlush>): _176.RequestFlush;
        };
        RequestInfo: {
            encode(message: _176.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestInfo;
            fromJSON(object: any): _176.RequestInfo;
            toJSON(message: _176.RequestInfo): unknown;
            fromPartial(object: Partial<_176.RequestInfo>): _176.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _176.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestSetOption;
            fromJSON(object: any): _176.RequestSetOption;
            toJSON(message: _176.RequestSetOption): unknown;
            fromPartial(object: Partial<_176.RequestSetOption>): _176.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _176.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestInitChain;
            fromJSON(object: any): _176.RequestInitChain;
            toJSON(message: _176.RequestInitChain): unknown;
            fromPartial(object: Partial<_176.RequestInitChain>): _176.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _176.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestQuery;
            fromJSON(object: any): _176.RequestQuery;
            toJSON(message: _176.RequestQuery): unknown;
            fromPartial(object: Partial<_176.RequestQuery>): _176.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _176.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestBeginBlock;
            fromJSON(object: any): _176.RequestBeginBlock;
            toJSON(message: _176.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_176.RequestBeginBlock>): _176.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _176.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestCheckTx;
            fromJSON(object: any): _176.RequestCheckTx;
            toJSON(message: _176.RequestCheckTx): unknown;
            fromPartial(object: Partial<_176.RequestCheckTx>): _176.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _176.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestDeliverTx;
            fromJSON(object: any): _176.RequestDeliverTx;
            toJSON(message: _176.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_176.RequestDeliverTx>): _176.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _176.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestEndBlock;
            fromJSON(object: any): _176.RequestEndBlock;
            toJSON(message: _176.RequestEndBlock): unknown;
            fromPartial(object: Partial<_176.RequestEndBlock>): _176.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _176.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestCommit;
            fromJSON(_: any): _176.RequestCommit;
            toJSON(_: _176.RequestCommit): unknown;
            fromPartial(_: Partial<_176.RequestCommit>): _176.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _176.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestListSnapshots;
            fromJSON(_: any): _176.RequestListSnapshots;
            toJSON(_: _176.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_176.RequestListSnapshots>): _176.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _176.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestOfferSnapshot;
            fromJSON(object: any): _176.RequestOfferSnapshot;
            toJSON(message: _176.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_176.RequestOfferSnapshot>): _176.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _176.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestLoadSnapshotChunk;
            fromJSON(object: any): _176.RequestLoadSnapshotChunk;
            toJSON(message: _176.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_176.RequestLoadSnapshotChunk>): _176.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _176.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.RequestApplySnapshotChunk;
            fromJSON(object: any): _176.RequestApplySnapshotChunk;
            toJSON(message: _176.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_176.RequestApplySnapshotChunk>): _176.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _176.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Response;
            fromJSON(object: any): _176.Response;
            toJSON(message: _176.Response): unknown;
            fromPartial(object: Partial<_176.Response>): _176.Response;
        };
        ResponseException: {
            encode(message: _176.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseException;
            fromJSON(object: any): _176.ResponseException;
            toJSON(message: _176.ResponseException): unknown;
            fromPartial(object: Partial<_176.ResponseException>): _176.ResponseException;
        };
        ResponseEcho: {
            encode(message: _176.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseEcho;
            fromJSON(object: any): _176.ResponseEcho;
            toJSON(message: _176.ResponseEcho): unknown;
            fromPartial(object: Partial<_176.ResponseEcho>): _176.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _176.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseFlush;
            fromJSON(_: any): _176.ResponseFlush;
            toJSON(_: _176.ResponseFlush): unknown;
            fromPartial(_: Partial<_176.ResponseFlush>): _176.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _176.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseInfo;
            fromJSON(object: any): _176.ResponseInfo;
            toJSON(message: _176.ResponseInfo): unknown;
            fromPartial(object: Partial<_176.ResponseInfo>): _176.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _176.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseSetOption;
            fromJSON(object: any): _176.ResponseSetOption;
            toJSON(message: _176.ResponseSetOption): unknown;
            fromPartial(object: Partial<_176.ResponseSetOption>): _176.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _176.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseInitChain;
            fromJSON(object: any): _176.ResponseInitChain;
            toJSON(message: _176.ResponseInitChain): unknown;
            fromPartial(object: Partial<_176.ResponseInitChain>): _176.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _176.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseQuery;
            fromJSON(object: any): _176.ResponseQuery;
            toJSON(message: _176.ResponseQuery): unknown;
            fromPartial(object: Partial<_176.ResponseQuery>): _176.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _176.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseBeginBlock;
            fromJSON(object: any): _176.ResponseBeginBlock;
            toJSON(message: _176.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_176.ResponseBeginBlock>): _176.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _176.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseCheckTx;
            fromJSON(object: any): _176.ResponseCheckTx;
            toJSON(message: _176.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_176.ResponseCheckTx>): _176.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _176.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseDeliverTx;
            fromJSON(object: any): _176.ResponseDeliverTx;
            toJSON(message: _176.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_176.ResponseDeliverTx>): _176.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _176.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseEndBlock;
            fromJSON(object: any): _176.ResponseEndBlock;
            toJSON(message: _176.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_176.ResponseEndBlock>): _176.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _176.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseCommit;
            fromJSON(object: any): _176.ResponseCommit;
            toJSON(message: _176.ResponseCommit): unknown;
            fromPartial(object: Partial<_176.ResponseCommit>): _176.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _176.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseListSnapshots;
            fromJSON(object: any): _176.ResponseListSnapshots;
            toJSON(message: _176.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_176.ResponseListSnapshots>): _176.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _176.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseOfferSnapshot;
            fromJSON(object: any): _176.ResponseOfferSnapshot;
            toJSON(message: _176.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_176.ResponseOfferSnapshot>): _176.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _176.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _176.ResponseLoadSnapshotChunk;
            toJSON(message: _176.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_176.ResponseLoadSnapshotChunk>): _176.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _176.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ResponseApplySnapshotChunk;
            fromJSON(object: any): _176.ResponseApplySnapshotChunk;
            toJSON(message: _176.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_176.ResponseApplySnapshotChunk>): _176.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _176.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ConsensusParams;
            fromJSON(object: any): _176.ConsensusParams;
            toJSON(message: _176.ConsensusParams): unknown;
            fromPartial(object: Partial<_176.ConsensusParams>): _176.ConsensusParams;
        };
        BlockParams: {
            encode(message: _176.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.BlockParams;
            fromJSON(object: any): _176.BlockParams;
            toJSON(message: _176.BlockParams): unknown;
            fromPartial(object: Partial<_176.BlockParams>): _176.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _176.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.LastCommitInfo;
            fromJSON(object: any): _176.LastCommitInfo;
            toJSON(message: _176.LastCommitInfo): unknown;
            fromPartial(object: Partial<_176.LastCommitInfo>): _176.LastCommitInfo;
        };
        Event: {
            encode(message: _176.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Event;
            fromJSON(object: any): _176.Event;
            toJSON(message: _176.Event): unknown;
            fromPartial(object: Partial<_176.Event>): _176.Event;
        };
        EventAttribute: {
            encode(message: _176.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.EventAttribute;
            fromJSON(object: any): _176.EventAttribute;
            toJSON(message: _176.EventAttribute): unknown;
            fromPartial(object: Partial<_176.EventAttribute>): _176.EventAttribute;
        };
        TxResult: {
            encode(message: _176.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.TxResult;
            fromJSON(object: any): _176.TxResult;
            toJSON(message: _176.TxResult): unknown;
            fromPartial(object: Partial<_176.TxResult>): _176.TxResult;
        };
        Validator: {
            encode(message: _176.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Validator;
            fromJSON(object: any): _176.Validator;
            toJSON(message: _176.Validator): unknown;
            fromPartial(object: Partial<_176.Validator>): _176.Validator;
        };
        ValidatorUpdate: {
            encode(message: _176.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ValidatorUpdate;
            fromJSON(object: any): _176.ValidatorUpdate;
            toJSON(message: _176.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_176.ValidatorUpdate>): _176.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _176.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.VoteInfo;
            fromJSON(object: any): _176.VoteInfo;
            toJSON(message: _176.VoteInfo): unknown;
            fromPartial(object: Partial<_176.VoteInfo>): _176.VoteInfo;
        };
        Evidence: {
            encode(message: _176.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Evidence;
            fromJSON(object: any): _176.Evidence;
            toJSON(message: _176.Evidence): unknown;
            fromPartial(object: Partial<_176.Evidence>): _176.Evidence;
        };
        Snapshot: {
            encode(message: _176.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Snapshot;
            fromJSON(object: any): _176.Snapshot;
            toJSON(message: _176.Snapshot): unknown;
            fromPartial(object: Partial<_176.Snapshot>): _176.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _178.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Proof;
            fromJSON(object: any): _178.Proof;
            toJSON(message: _178.Proof): unknown;
            fromPartial(object: Partial<_178.Proof>): _178.Proof;
        };
        ValueOp: {
            encode(message: _178.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ValueOp;
            fromJSON(object: any): _178.ValueOp;
            toJSON(message: _178.ValueOp): unknown;
            fromPartial(object: Partial<_178.ValueOp>): _178.ValueOp;
        };
        DominoOp: {
            encode(message: _178.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.DominoOp;
            fromJSON(object: any): _178.DominoOp;
            toJSON(message: _178.DominoOp): unknown;
            fromPartial(object: Partial<_178.DominoOp>): _178.DominoOp;
        };
        ProofOp: {
            encode(message: _178.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ProofOp;
            fromJSON(object: any): _178.ProofOp;
            toJSON(message: _178.ProofOp): unknown;
            fromPartial(object: Partial<_178.ProofOp>): _178.ProofOp;
        };
        ProofOps: {
            encode(message: _178.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ProofOps;
            fromJSON(object: any): _178.ProofOps;
            toJSON(message: _178.ProofOps): unknown;
            fromPartial(object: Partial<_178.ProofOps>): _178.ProofOps;
        };
        PublicKey: {
            encode(message: _177.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PublicKey;
            fromJSON(object: any): _177.PublicKey;
            toJSON(message: _177.PublicKey): unknown;
            fromPartial(object: Partial<_177.PublicKey>): _177.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _179.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.BitArray;
                fromJSON(object: any): _179.BitArray;
                toJSON(message: _179.BitArray): unknown;
                fromPartial(object: Partial<_179.BitArray>): _179.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _180.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ProtocolVersion;
            fromJSON(object: any): _180.ProtocolVersion;
            toJSON(message: _180.ProtocolVersion): unknown;
            fromPartial(object: Partial<_180.ProtocolVersion>): _180.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _180.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.NodeInfo;
            fromJSON(object: any): _180.NodeInfo;
            toJSON(message: _180.NodeInfo): unknown;
            fromPartial(object: Partial<_180.NodeInfo>): _180.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _180.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.NodeInfoOther;
            fromJSON(object: any): _180.NodeInfoOther;
            toJSON(message: _180.NodeInfoOther): unknown;
            fromPartial(object: Partial<_180.NodeInfoOther>): _180.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _180.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.PeerInfo;
            fromJSON(object: any): _180.PeerInfo;
            toJSON(message: _180.PeerInfo): unknown;
            fromPartial(object: Partial<_180.PeerInfo>): _180.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _180.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.PeerAddressInfo;
            fromJSON(object: any): _180.PeerAddressInfo;
            toJSON(message: _180.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_180.PeerAddressInfo>): _180.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _185.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ValidatorSet;
            fromJSON(object: any): _185.ValidatorSet;
            toJSON(message: _185.ValidatorSet): unknown;
            fromPartial(object: Partial<_185.ValidatorSet>): _185.ValidatorSet;
        };
        Validator: {
            encode(message: _185.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Validator;
            fromJSON(object: any): _185.Validator;
            toJSON(message: _185.Validator): unknown;
            fromPartial(object: Partial<_185.Validator>): _185.Validator;
        };
        SimpleValidator: {
            encode(message: _185.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SimpleValidator;
            fromJSON(object: any): _185.SimpleValidator;
            toJSON(message: _185.SimpleValidator): unknown;
            fromPartial(object: Partial<_185.SimpleValidator>): _185.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _184.BlockIDFlag;
        blockIDFlagToJSON(object: _184.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _184.SignedMsgType;
        signedMsgTypeToJSON(object: _184.SignedMsgType): string;
        BlockIDFlag: typeof _184.BlockIDFlag;
        BlockIDFlagSDKType: typeof _184.BlockIDFlag;
        SignedMsgType: typeof _184.SignedMsgType;
        SignedMsgTypeSDKType: typeof _184.SignedMsgType;
        PartSetHeader: {
            encode(message: _184.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.PartSetHeader;
            fromJSON(object: any): _184.PartSetHeader;
            toJSON(message: _184.PartSetHeader): unknown;
            fromPartial(object: Partial<_184.PartSetHeader>): _184.PartSetHeader;
        };
        Part: {
            encode(message: _184.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Part;
            fromJSON(object: any): _184.Part;
            toJSON(message: _184.Part): unknown;
            fromPartial(object: Partial<_184.Part>): _184.Part;
        };
        BlockID: {
            encode(message: _184.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.BlockID;
            fromJSON(object: any): _184.BlockID;
            toJSON(message: _184.BlockID): unknown;
            fromPartial(object: Partial<_184.BlockID>): _184.BlockID;
        };
        Header: {
            encode(message: _184.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Header;
            fromJSON(object: any): _184.Header;
            toJSON(message: _184.Header): unknown;
            fromPartial(object: Partial<_184.Header>): _184.Header;
        };
        Data: {
            encode(message: _184.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Data;
            fromJSON(object: any): _184.Data;
            toJSON(message: _184.Data): unknown;
            fromPartial(object: Partial<_184.Data>): _184.Data;
        };
        Vote: {
            encode(message: _184.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Vote;
            fromJSON(object: any): _184.Vote;
            toJSON(message: _184.Vote): unknown;
            fromPartial(object: Partial<_184.Vote>): _184.Vote;
        };
        Commit: {
            encode(message: _184.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Commit;
            fromJSON(object: any): _184.Commit;
            toJSON(message: _184.Commit): unknown;
            fromPartial(object: Partial<_184.Commit>): _184.Commit;
        };
        CommitSig: {
            encode(message: _184.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.CommitSig;
            fromJSON(object: any): _184.CommitSig;
            toJSON(message: _184.CommitSig): unknown;
            fromPartial(object: Partial<_184.CommitSig>): _184.CommitSig;
        };
        Proposal: {
            encode(message: _184.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Proposal;
            fromJSON(object: any): _184.Proposal;
            toJSON(message: _184.Proposal): unknown;
            fromPartial(object: Partial<_184.Proposal>): _184.Proposal;
        };
        SignedHeader: {
            encode(message: _184.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SignedHeader;
            fromJSON(object: any): _184.SignedHeader;
            toJSON(message: _184.SignedHeader): unknown;
            fromPartial(object: Partial<_184.SignedHeader>): _184.SignedHeader;
        };
        LightBlock: {
            encode(message: _184.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.LightBlock;
            fromJSON(object: any): _184.LightBlock;
            toJSON(message: _184.LightBlock): unknown;
            fromPartial(object: Partial<_184.LightBlock>): _184.LightBlock;
        };
        BlockMeta: {
            encode(message: _184.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.BlockMeta;
            fromJSON(object: any): _184.BlockMeta;
            toJSON(message: _184.BlockMeta): unknown;
            fromPartial(object: Partial<_184.BlockMeta>): _184.BlockMeta;
        };
        TxProof: {
            encode(message: _184.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.TxProof;
            fromJSON(object: any): _184.TxProof;
            toJSON(message: _184.TxProof): unknown;
            fromPartial(object: Partial<_184.TxProof>): _184.TxProof;
        };
        ConsensusParams: {
            encode(message: _183.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.ConsensusParams;
            fromJSON(object: any): _183.ConsensusParams;
            toJSON(message: _183.ConsensusParams): unknown;
            fromPartial(object: Partial<_183.ConsensusParams>): _183.ConsensusParams;
        };
        BlockParams: {
            encode(message: _183.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BlockParams;
            fromJSON(object: any): _183.BlockParams;
            toJSON(message: _183.BlockParams): unknown;
            fromPartial(object: Partial<_183.BlockParams>): _183.BlockParams;
        };
        EvidenceParams: {
            encode(message: _183.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.EvidenceParams;
            fromJSON(object: any): _183.EvidenceParams;
            toJSON(message: _183.EvidenceParams): unknown;
            fromPartial(object: Partial<_183.EvidenceParams>): _183.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _183.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.ValidatorParams;
            fromJSON(object: any): _183.ValidatorParams;
            toJSON(message: _183.ValidatorParams): unknown;
            fromPartial(object: Partial<_183.ValidatorParams>): _183.ValidatorParams;
        };
        VersionParams: {
            encode(message: _183.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.VersionParams;
            fromJSON(object: any): _183.VersionParams;
            toJSON(message: _183.VersionParams): unknown;
            fromPartial(object: Partial<_183.VersionParams>): _183.VersionParams;
        };
        HashedParams: {
            encode(message: _183.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.HashedParams;
            fromJSON(object: any): _183.HashedParams;
            toJSON(message: _183.HashedParams): unknown;
            fromPartial(object: Partial<_183.HashedParams>): _183.HashedParams;
        };
        Evidence: {
            encode(message: _182.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Evidence;
            fromJSON(object: any): _182.Evidence;
            toJSON(message: _182.Evidence): unknown;
            fromPartial(object: Partial<_182.Evidence>): _182.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _182.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.DuplicateVoteEvidence;
            fromJSON(object: any): _182.DuplicateVoteEvidence;
            toJSON(message: _182.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_182.DuplicateVoteEvidence>): _182.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _182.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.LightClientAttackEvidence;
            fromJSON(object: any): _182.LightClientAttackEvidence;
            toJSON(message: _182.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_182.LightClientAttackEvidence>): _182.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _182.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.EvidenceList;
            fromJSON(object: any): _182.EvidenceList;
            toJSON(message: _182.EvidenceList): unknown;
            fromPartial(object: Partial<_182.EvidenceList>): _182.EvidenceList;
        };
        Block: {
            encode(message: _181.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Block;
            fromJSON(object: any): _181.Block;
            toJSON(message: _181.Block): unknown;
            fromPartial(object: Partial<_181.Block>): _181.Block;
        };
    };
    const version: {
        App: {
            encode(message: _186.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.App;
            fromJSON(object: any): _186.App;
            toJSON(message: _186.App): unknown;
            fromPartial(object: Partial<_186.App>): _186.App;
        };
        Consensus: {
            encode(message: _186.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Consensus;
            fromJSON(object: any): _186.Consensus;
            toJSON(message: _186.Consensus): unknown;
            fromPartial(object: Partial<_186.Consensus>): _186.Consensus;
        };
    };
}
