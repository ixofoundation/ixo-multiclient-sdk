import * as _175 from "./abci/types";
import * as _176 from "./crypto/keys";
import * as _177 from "./crypto/proof";
import * as _178 from "./libs/bits/types";
import * as _179 from "./p2p/types";
import * as _180 from "./types/block";
import * as _181 from "./types/evidence";
import * as _182 from "./types/params";
import * as _183 from "./types/types";
import * as _184 from "./types/validator";
import * as _185 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _175.CheckTxType;
        checkTxTypeToJSON(object: _175.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _175.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _175.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _175.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _175.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _175.EvidenceType;
        evidenceTypeToJSON(object: _175.EvidenceType): string;
        CheckTxType: typeof _175.CheckTxType;
        CheckTxTypeSDKType: typeof _175.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _175.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _175.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _175.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _175.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _175.EvidenceType;
        EvidenceTypeSDKType: typeof _175.EvidenceTypeSDKType;
        Request: {
            encode(message: _175.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Request;
            fromJSON(object: any): _175.Request;
            toJSON(message: _175.Request): unknown;
            fromPartial(object: Partial<_175.Request>): _175.Request;
        };
        RequestEcho: {
            encode(message: _175.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestEcho;
            fromJSON(object: any): _175.RequestEcho;
            toJSON(message: _175.RequestEcho): unknown;
            fromPartial(object: Partial<_175.RequestEcho>): _175.RequestEcho;
        };
        RequestFlush: {
            encode(_: _175.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestFlush;
            fromJSON(_: any): _175.RequestFlush;
            toJSON(_: _175.RequestFlush): unknown;
            fromPartial(_: Partial<_175.RequestFlush>): _175.RequestFlush;
        };
        RequestInfo: {
            encode(message: _175.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestInfo;
            fromJSON(object: any): _175.RequestInfo;
            toJSON(message: _175.RequestInfo): unknown;
            fromPartial(object: Partial<_175.RequestInfo>): _175.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _175.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestSetOption;
            fromJSON(object: any): _175.RequestSetOption;
            toJSON(message: _175.RequestSetOption): unknown;
            fromPartial(object: Partial<_175.RequestSetOption>): _175.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _175.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestInitChain;
            fromJSON(object: any): _175.RequestInitChain;
            toJSON(message: _175.RequestInitChain): unknown;
            fromPartial(object: Partial<_175.RequestInitChain>): _175.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _175.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestQuery;
            fromJSON(object: any): _175.RequestQuery;
            toJSON(message: _175.RequestQuery): unknown;
            fromPartial(object: Partial<_175.RequestQuery>): _175.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _175.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestBeginBlock;
            fromJSON(object: any): _175.RequestBeginBlock;
            toJSON(message: _175.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_175.RequestBeginBlock>): _175.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _175.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestCheckTx;
            fromJSON(object: any): _175.RequestCheckTx;
            toJSON(message: _175.RequestCheckTx): unknown;
            fromPartial(object: Partial<_175.RequestCheckTx>): _175.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _175.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestDeliverTx;
            fromJSON(object: any): _175.RequestDeliverTx;
            toJSON(message: _175.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_175.RequestDeliverTx>): _175.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _175.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestEndBlock;
            fromJSON(object: any): _175.RequestEndBlock;
            toJSON(message: _175.RequestEndBlock): unknown;
            fromPartial(object: Partial<_175.RequestEndBlock>): _175.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _175.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestCommit;
            fromJSON(_: any): _175.RequestCommit;
            toJSON(_: _175.RequestCommit): unknown;
            fromPartial(_: Partial<_175.RequestCommit>): _175.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _175.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestListSnapshots;
            fromJSON(_: any): _175.RequestListSnapshots;
            toJSON(_: _175.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_175.RequestListSnapshots>): _175.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _175.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestOfferSnapshot;
            fromJSON(object: any): _175.RequestOfferSnapshot;
            toJSON(message: _175.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_175.RequestOfferSnapshot>): _175.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _175.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestLoadSnapshotChunk;
            fromJSON(object: any): _175.RequestLoadSnapshotChunk;
            toJSON(message: _175.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_175.RequestLoadSnapshotChunk>): _175.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _175.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.RequestApplySnapshotChunk;
            fromJSON(object: any): _175.RequestApplySnapshotChunk;
            toJSON(message: _175.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_175.RequestApplySnapshotChunk>): _175.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _175.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Response;
            fromJSON(object: any): _175.Response;
            toJSON(message: _175.Response): unknown;
            fromPartial(object: Partial<_175.Response>): _175.Response;
        };
        ResponseException: {
            encode(message: _175.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseException;
            fromJSON(object: any): _175.ResponseException;
            toJSON(message: _175.ResponseException): unknown;
            fromPartial(object: Partial<_175.ResponseException>): _175.ResponseException;
        };
        ResponseEcho: {
            encode(message: _175.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseEcho;
            fromJSON(object: any): _175.ResponseEcho;
            toJSON(message: _175.ResponseEcho): unknown;
            fromPartial(object: Partial<_175.ResponseEcho>): _175.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _175.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseFlush;
            fromJSON(_: any): _175.ResponseFlush;
            toJSON(_: _175.ResponseFlush): unknown;
            fromPartial(_: Partial<_175.ResponseFlush>): _175.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _175.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseInfo;
            fromJSON(object: any): _175.ResponseInfo;
            toJSON(message: _175.ResponseInfo): unknown;
            fromPartial(object: Partial<_175.ResponseInfo>): _175.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _175.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseSetOption;
            fromJSON(object: any): _175.ResponseSetOption;
            toJSON(message: _175.ResponseSetOption): unknown;
            fromPartial(object: Partial<_175.ResponseSetOption>): _175.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _175.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseInitChain;
            fromJSON(object: any): _175.ResponseInitChain;
            toJSON(message: _175.ResponseInitChain): unknown;
            fromPartial(object: Partial<_175.ResponseInitChain>): _175.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _175.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseQuery;
            fromJSON(object: any): _175.ResponseQuery;
            toJSON(message: _175.ResponseQuery): unknown;
            fromPartial(object: Partial<_175.ResponseQuery>): _175.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _175.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseBeginBlock;
            fromJSON(object: any): _175.ResponseBeginBlock;
            toJSON(message: _175.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_175.ResponseBeginBlock>): _175.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _175.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseCheckTx;
            fromJSON(object: any): _175.ResponseCheckTx;
            toJSON(message: _175.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_175.ResponseCheckTx>): _175.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _175.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseDeliverTx;
            fromJSON(object: any): _175.ResponseDeliverTx;
            toJSON(message: _175.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_175.ResponseDeliverTx>): _175.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _175.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseEndBlock;
            fromJSON(object: any): _175.ResponseEndBlock;
            toJSON(message: _175.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_175.ResponseEndBlock>): _175.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _175.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseCommit;
            fromJSON(object: any): _175.ResponseCommit;
            toJSON(message: _175.ResponseCommit): unknown;
            fromPartial(object: Partial<_175.ResponseCommit>): _175.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _175.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseListSnapshots;
            fromJSON(object: any): _175.ResponseListSnapshots;
            toJSON(message: _175.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_175.ResponseListSnapshots>): _175.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _175.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseOfferSnapshot;
            fromJSON(object: any): _175.ResponseOfferSnapshot;
            toJSON(message: _175.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_175.ResponseOfferSnapshot>): _175.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _175.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _175.ResponseLoadSnapshotChunk;
            toJSON(message: _175.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_175.ResponseLoadSnapshotChunk>): _175.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _175.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ResponseApplySnapshotChunk;
            fromJSON(object: any): _175.ResponseApplySnapshotChunk;
            toJSON(message: _175.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_175.ResponseApplySnapshotChunk>): _175.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _175.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConsensusParams;
            fromJSON(object: any): _175.ConsensusParams;
            toJSON(message: _175.ConsensusParams): unknown;
            fromPartial(object: Partial<_175.ConsensusParams>): _175.ConsensusParams;
        };
        BlockParams: {
            encode(message: _175.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.BlockParams;
            fromJSON(object: any): _175.BlockParams;
            toJSON(message: _175.BlockParams): unknown;
            fromPartial(object: Partial<_175.BlockParams>): _175.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _175.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.LastCommitInfo;
            fromJSON(object: any): _175.LastCommitInfo;
            toJSON(message: _175.LastCommitInfo): unknown;
            fromPartial(object: Partial<_175.LastCommitInfo>): _175.LastCommitInfo;
        };
        Event: {
            encode(message: _175.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Event;
            fromJSON(object: any): _175.Event;
            toJSON(message: _175.Event): unknown;
            fromPartial(object: Partial<_175.Event>): _175.Event;
        };
        EventAttribute: {
            encode(message: _175.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.EventAttribute;
            fromJSON(object: any): _175.EventAttribute;
            toJSON(message: _175.EventAttribute): unknown;
            fromPartial(object: Partial<_175.EventAttribute>): _175.EventAttribute;
        };
        TxResult: {
            encode(message: _175.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TxResult;
            fromJSON(object: any): _175.TxResult;
            toJSON(message: _175.TxResult): unknown;
            fromPartial(object: Partial<_175.TxResult>): _175.TxResult;
        };
        Validator: {
            encode(message: _175.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Validator;
            fromJSON(object: any): _175.Validator;
            toJSON(message: _175.Validator): unknown;
            fromPartial(object: Partial<_175.Validator>): _175.Validator;
        };
        ValidatorUpdate: {
            encode(message: _175.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ValidatorUpdate;
            fromJSON(object: any): _175.ValidatorUpdate;
            toJSON(message: _175.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_175.ValidatorUpdate>): _175.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _175.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.VoteInfo;
            fromJSON(object: any): _175.VoteInfo;
            toJSON(message: _175.VoteInfo): unknown;
            fromPartial(object: Partial<_175.VoteInfo>): _175.VoteInfo;
        };
        Evidence: {
            encode(message: _175.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Evidence;
            fromJSON(object: any): _175.Evidence;
            toJSON(message: _175.Evidence): unknown;
            fromPartial(object: Partial<_175.Evidence>): _175.Evidence;
        };
        Snapshot: {
            encode(message: _175.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Snapshot;
            fromJSON(object: any): _175.Snapshot;
            toJSON(message: _175.Snapshot): unknown;
            fromPartial(object: Partial<_175.Snapshot>): _175.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _177.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Proof;
            fromJSON(object: any): _177.Proof;
            toJSON(message: _177.Proof): unknown;
            fromPartial(object: Partial<_177.Proof>): _177.Proof;
        };
        ValueOp: {
            encode(message: _177.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ValueOp;
            fromJSON(object: any): _177.ValueOp;
            toJSON(message: _177.ValueOp): unknown;
            fromPartial(object: Partial<_177.ValueOp>): _177.ValueOp;
        };
        DominoOp: {
            encode(message: _177.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.DominoOp;
            fromJSON(object: any): _177.DominoOp;
            toJSON(message: _177.DominoOp): unknown;
            fromPartial(object: Partial<_177.DominoOp>): _177.DominoOp;
        };
        ProofOp: {
            encode(message: _177.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ProofOp;
            fromJSON(object: any): _177.ProofOp;
            toJSON(message: _177.ProofOp): unknown;
            fromPartial(object: Partial<_177.ProofOp>): _177.ProofOp;
        };
        ProofOps: {
            encode(message: _177.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ProofOps;
            fromJSON(object: any): _177.ProofOps;
            toJSON(message: _177.ProofOps): unknown;
            fromPartial(object: Partial<_177.ProofOps>): _177.ProofOps;
        };
        PublicKey: {
            encode(message: _176.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PublicKey;
            fromJSON(object: any): _176.PublicKey;
            toJSON(message: _176.PublicKey): unknown;
            fromPartial(object: Partial<_176.PublicKey>): _176.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _178.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.BitArray;
                fromJSON(object: any): _178.BitArray;
                toJSON(message: _178.BitArray): unknown;
                fromPartial(object: Partial<_178.BitArray>): _178.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _179.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ProtocolVersion;
            fromJSON(object: any): _179.ProtocolVersion;
            toJSON(message: _179.ProtocolVersion): unknown;
            fromPartial(object: Partial<_179.ProtocolVersion>): _179.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _179.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.NodeInfo;
            fromJSON(object: any): _179.NodeInfo;
            toJSON(message: _179.NodeInfo): unknown;
            fromPartial(object: Partial<_179.NodeInfo>): _179.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _179.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.NodeInfoOther;
            fromJSON(object: any): _179.NodeInfoOther;
            toJSON(message: _179.NodeInfoOther): unknown;
            fromPartial(object: Partial<_179.NodeInfoOther>): _179.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _179.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PeerInfo;
            fromJSON(object: any): _179.PeerInfo;
            toJSON(message: _179.PeerInfo): unknown;
            fromPartial(object: Partial<_179.PeerInfo>): _179.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _179.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PeerAddressInfo;
            fromJSON(object: any): _179.PeerAddressInfo;
            toJSON(message: _179.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_179.PeerAddressInfo>): _179.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _184.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ValidatorSet;
            fromJSON(object: any): _184.ValidatorSet;
            toJSON(message: _184.ValidatorSet): unknown;
            fromPartial(object: Partial<_184.ValidatorSet>): _184.ValidatorSet;
        };
        Validator: {
            encode(message: _184.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.Validator;
            fromJSON(object: any): _184.Validator;
            toJSON(message: _184.Validator): unknown;
            fromPartial(object: Partial<_184.Validator>): _184.Validator;
        };
        SimpleValidator: {
            encode(message: _184.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.SimpleValidator;
            fromJSON(object: any): _184.SimpleValidator;
            toJSON(message: _184.SimpleValidator): unknown;
            fromPartial(object: Partial<_184.SimpleValidator>): _184.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _183.BlockIDFlag;
        blockIDFlagToJSON(object: _183.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _183.SignedMsgType;
        signedMsgTypeToJSON(object: _183.SignedMsgType): string;
        BlockIDFlag: typeof _183.BlockIDFlag;
        BlockIDFlagSDKType: typeof _183.BlockIDFlagSDKType;
        SignedMsgType: typeof _183.SignedMsgType;
        SignedMsgTypeSDKType: typeof _183.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _183.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PartSetHeader;
            fromJSON(object: any): _183.PartSetHeader;
            toJSON(message: _183.PartSetHeader): unknown;
            fromPartial(object: Partial<_183.PartSetHeader>): _183.PartSetHeader;
        };
        Part: {
            encode(message: _183.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Part;
            fromJSON(object: any): _183.Part;
            toJSON(message: _183.Part): unknown;
            fromPartial(object: Partial<_183.Part>): _183.Part;
        };
        BlockID: {
            encode(message: _183.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BlockID;
            fromJSON(object: any): _183.BlockID;
            toJSON(message: _183.BlockID): unknown;
            fromPartial(object: Partial<_183.BlockID>): _183.BlockID;
        };
        Header: {
            encode(message: _183.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Header;
            fromJSON(object: any): _183.Header;
            toJSON(message: _183.Header): unknown;
            fromPartial(object: Partial<_183.Header>): _183.Header;
        };
        Data: {
            encode(message: _183.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Data;
            fromJSON(object: any): _183.Data;
            toJSON(message: _183.Data): unknown;
            fromPartial(object: Partial<_183.Data>): _183.Data;
        };
        Vote: {
            encode(message: _183.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Vote;
            fromJSON(object: any): _183.Vote;
            toJSON(message: _183.Vote): unknown;
            fromPartial(object: Partial<_183.Vote>): _183.Vote;
        };
        Commit: {
            encode(message: _183.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Commit;
            fromJSON(object: any): _183.Commit;
            toJSON(message: _183.Commit): unknown;
            fromPartial(object: Partial<_183.Commit>): _183.Commit;
        };
        CommitSig: {
            encode(message: _183.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.CommitSig;
            fromJSON(object: any): _183.CommitSig;
            toJSON(message: _183.CommitSig): unknown;
            fromPartial(object: Partial<_183.CommitSig>): _183.CommitSig;
        };
        Proposal: {
            encode(message: _183.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Proposal;
            fromJSON(object: any): _183.Proposal;
            toJSON(message: _183.Proposal): unknown;
            fromPartial(object: Partial<_183.Proposal>): _183.Proposal;
        };
        SignedHeader: {
            encode(message: _183.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.SignedHeader;
            fromJSON(object: any): _183.SignedHeader;
            toJSON(message: _183.SignedHeader): unknown;
            fromPartial(object: Partial<_183.SignedHeader>): _183.SignedHeader;
        };
        LightBlock: {
            encode(message: _183.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.LightBlock;
            fromJSON(object: any): _183.LightBlock;
            toJSON(message: _183.LightBlock): unknown;
            fromPartial(object: Partial<_183.LightBlock>): _183.LightBlock;
        };
        BlockMeta: {
            encode(message: _183.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.BlockMeta;
            fromJSON(object: any): _183.BlockMeta;
            toJSON(message: _183.BlockMeta): unknown;
            fromPartial(object: Partial<_183.BlockMeta>): _183.BlockMeta;
        };
        TxProof: {
            encode(message: _183.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.TxProof;
            fromJSON(object: any): _183.TxProof;
            toJSON(message: _183.TxProof): unknown;
            fromPartial(object: Partial<_183.TxProof>): _183.TxProof;
        };
        ConsensusParams: {
            encode(message: _182.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ConsensusParams;
            fromJSON(object: any): _182.ConsensusParams;
            toJSON(message: _182.ConsensusParams): unknown;
            fromPartial(object: Partial<_182.ConsensusParams>): _182.ConsensusParams;
        };
        BlockParams: {
            encode(message: _182.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BlockParams;
            fromJSON(object: any): _182.BlockParams;
            toJSON(message: _182.BlockParams): unknown;
            fromPartial(object: Partial<_182.BlockParams>): _182.BlockParams;
        };
        EvidenceParams: {
            encode(message: _182.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.EvidenceParams;
            fromJSON(object: any): _182.EvidenceParams;
            toJSON(message: _182.EvidenceParams): unknown;
            fromPartial(object: Partial<_182.EvidenceParams>): _182.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _182.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ValidatorParams;
            fromJSON(object: any): _182.ValidatorParams;
            toJSON(message: _182.ValidatorParams): unknown;
            fromPartial(object: Partial<_182.ValidatorParams>): _182.ValidatorParams;
        };
        VersionParams: {
            encode(message: _182.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.VersionParams;
            fromJSON(object: any): _182.VersionParams;
            toJSON(message: _182.VersionParams): unknown;
            fromPartial(object: Partial<_182.VersionParams>): _182.VersionParams;
        };
        HashedParams: {
            encode(message: _182.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.HashedParams;
            fromJSON(object: any): _182.HashedParams;
            toJSON(message: _182.HashedParams): unknown;
            fromPartial(object: Partial<_182.HashedParams>): _182.HashedParams;
        };
        Evidence: {
            encode(message: _181.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Evidence;
            fromJSON(object: any): _181.Evidence;
            toJSON(message: _181.Evidence): unknown;
            fromPartial(object: Partial<_181.Evidence>): _181.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _181.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.DuplicateVoteEvidence;
            fromJSON(object: any): _181.DuplicateVoteEvidence;
            toJSON(message: _181.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_181.DuplicateVoteEvidence>): _181.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _181.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.LightClientAttackEvidence;
            fromJSON(object: any): _181.LightClientAttackEvidence;
            toJSON(message: _181.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_181.LightClientAttackEvidence>): _181.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _181.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.EvidenceList;
            fromJSON(object: any): _181.EvidenceList;
            toJSON(message: _181.EvidenceList): unknown;
            fromPartial(object: Partial<_181.EvidenceList>): _181.EvidenceList;
        };
        Block: {
            encode(message: _180.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Block;
            fromJSON(object: any): _180.Block;
            toJSON(message: _180.Block): unknown;
            fromPartial(object: Partial<_180.Block>): _180.Block;
        };
    };
    const version: {
        App: {
            encode(message: _185.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.App;
            fromJSON(object: any): _185.App;
            toJSON(message: _185.App): unknown;
            fromPartial(object: Partial<_185.App>): _185.App;
        };
        Consensus: {
            encode(message: _185.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Consensus;
            fromJSON(object: any): _185.Consensus;
            toJSON(message: _185.Consensus): unknown;
            fromPartial(object: Partial<_185.Consensus>): _185.Consensus;
        };
    };
}
