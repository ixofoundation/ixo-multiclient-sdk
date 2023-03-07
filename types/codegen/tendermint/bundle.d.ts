import * as _173 from "./abci/types";
import * as _174 from "./crypto/keys";
import * as _175 from "./crypto/proof";
import * as _176 from "./libs/bits/types";
import * as _177 from "./p2p/types";
import * as _178 from "./types/block";
import * as _179 from "./types/evidence";
import * as _180 from "./types/params";
import * as _181 from "./types/types";
import * as _182 from "./types/validator";
import * as _183 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _173.CheckTxType;
        checkTxTypeToJSON(object: _173.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _173.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _173.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _173.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _173.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _173.EvidenceType;
        evidenceTypeToJSON(object: _173.EvidenceType): string;
        CheckTxType: typeof _173.CheckTxType;
        CheckTxTypeSDKType: typeof _173.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _173.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _173.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _173.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _173.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _173.EvidenceType;
        EvidenceTypeSDKType: typeof _173.EvidenceTypeSDKType;
        Request: {
            encode(message: _173.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Request;
            fromJSON(object: any): _173.Request;
            toJSON(message: _173.Request): unknown;
            fromPartial(object: Partial<_173.Request>): _173.Request;
        };
        RequestEcho: {
            encode(message: _173.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestEcho;
            fromJSON(object: any): _173.RequestEcho;
            toJSON(message: _173.RequestEcho): unknown;
            fromPartial(object: Partial<_173.RequestEcho>): _173.RequestEcho;
        };
        RequestFlush: {
            encode(_: _173.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestFlush;
            fromJSON(_: any): _173.RequestFlush;
            toJSON(_: _173.RequestFlush): unknown;
            fromPartial(_: Partial<_173.RequestFlush>): _173.RequestFlush;
        };
        RequestInfo: {
            encode(message: _173.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestInfo;
            fromJSON(object: any): _173.RequestInfo;
            toJSON(message: _173.RequestInfo): unknown;
            fromPartial(object: Partial<_173.RequestInfo>): _173.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _173.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestSetOption;
            fromJSON(object: any): _173.RequestSetOption;
            toJSON(message: _173.RequestSetOption): unknown;
            fromPartial(object: Partial<_173.RequestSetOption>): _173.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _173.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestInitChain;
            fromJSON(object: any): _173.RequestInitChain;
            toJSON(message: _173.RequestInitChain): unknown;
            fromPartial(object: Partial<_173.RequestInitChain>): _173.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _173.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestQuery;
            fromJSON(object: any): _173.RequestQuery;
            toJSON(message: _173.RequestQuery): unknown;
            fromPartial(object: Partial<_173.RequestQuery>): _173.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _173.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestBeginBlock;
            fromJSON(object: any): _173.RequestBeginBlock;
            toJSON(message: _173.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_173.RequestBeginBlock>): _173.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _173.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestCheckTx;
            fromJSON(object: any): _173.RequestCheckTx;
            toJSON(message: _173.RequestCheckTx): unknown;
            fromPartial(object: Partial<_173.RequestCheckTx>): _173.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _173.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestDeliverTx;
            fromJSON(object: any): _173.RequestDeliverTx;
            toJSON(message: _173.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_173.RequestDeliverTx>): _173.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _173.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestEndBlock;
            fromJSON(object: any): _173.RequestEndBlock;
            toJSON(message: _173.RequestEndBlock): unknown;
            fromPartial(object: Partial<_173.RequestEndBlock>): _173.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _173.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestCommit;
            fromJSON(_: any): _173.RequestCommit;
            toJSON(_: _173.RequestCommit): unknown;
            fromPartial(_: Partial<_173.RequestCommit>): _173.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _173.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestListSnapshots;
            fromJSON(_: any): _173.RequestListSnapshots;
            toJSON(_: _173.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_173.RequestListSnapshots>): _173.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _173.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestOfferSnapshot;
            fromJSON(object: any): _173.RequestOfferSnapshot;
            toJSON(message: _173.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_173.RequestOfferSnapshot>): _173.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _173.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestLoadSnapshotChunk;
            fromJSON(object: any): _173.RequestLoadSnapshotChunk;
            toJSON(message: _173.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_173.RequestLoadSnapshotChunk>): _173.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _173.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.RequestApplySnapshotChunk;
            fromJSON(object: any): _173.RequestApplySnapshotChunk;
            toJSON(message: _173.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_173.RequestApplySnapshotChunk>): _173.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _173.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Response;
            fromJSON(object: any): _173.Response;
            toJSON(message: _173.Response): unknown;
            fromPartial(object: Partial<_173.Response>): _173.Response;
        };
        ResponseException: {
            encode(message: _173.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseException;
            fromJSON(object: any): _173.ResponseException;
            toJSON(message: _173.ResponseException): unknown;
            fromPartial(object: Partial<_173.ResponseException>): _173.ResponseException;
        };
        ResponseEcho: {
            encode(message: _173.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseEcho;
            fromJSON(object: any): _173.ResponseEcho;
            toJSON(message: _173.ResponseEcho): unknown;
            fromPartial(object: Partial<_173.ResponseEcho>): _173.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _173.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseFlush;
            fromJSON(_: any): _173.ResponseFlush;
            toJSON(_: _173.ResponseFlush): unknown;
            fromPartial(_: Partial<_173.ResponseFlush>): _173.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _173.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseInfo;
            fromJSON(object: any): _173.ResponseInfo;
            toJSON(message: _173.ResponseInfo): unknown;
            fromPartial(object: Partial<_173.ResponseInfo>): _173.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _173.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseSetOption;
            fromJSON(object: any): _173.ResponseSetOption;
            toJSON(message: _173.ResponseSetOption): unknown;
            fromPartial(object: Partial<_173.ResponseSetOption>): _173.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _173.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseInitChain;
            fromJSON(object: any): _173.ResponseInitChain;
            toJSON(message: _173.ResponseInitChain): unknown;
            fromPartial(object: Partial<_173.ResponseInitChain>): _173.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _173.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseQuery;
            fromJSON(object: any): _173.ResponseQuery;
            toJSON(message: _173.ResponseQuery): unknown;
            fromPartial(object: Partial<_173.ResponseQuery>): _173.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _173.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseBeginBlock;
            fromJSON(object: any): _173.ResponseBeginBlock;
            toJSON(message: _173.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_173.ResponseBeginBlock>): _173.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _173.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseCheckTx;
            fromJSON(object: any): _173.ResponseCheckTx;
            toJSON(message: _173.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_173.ResponseCheckTx>): _173.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _173.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseDeliverTx;
            fromJSON(object: any): _173.ResponseDeliverTx;
            toJSON(message: _173.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_173.ResponseDeliverTx>): _173.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _173.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseEndBlock;
            fromJSON(object: any): _173.ResponseEndBlock;
            toJSON(message: _173.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_173.ResponseEndBlock>): _173.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _173.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseCommit;
            fromJSON(object: any): _173.ResponseCommit;
            toJSON(message: _173.ResponseCommit): unknown;
            fromPartial(object: Partial<_173.ResponseCommit>): _173.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _173.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseListSnapshots;
            fromJSON(object: any): _173.ResponseListSnapshots;
            toJSON(message: _173.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_173.ResponseListSnapshots>): _173.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _173.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseOfferSnapshot;
            fromJSON(object: any): _173.ResponseOfferSnapshot;
            toJSON(message: _173.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_173.ResponseOfferSnapshot>): _173.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _173.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _173.ResponseLoadSnapshotChunk;
            toJSON(message: _173.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_173.ResponseLoadSnapshotChunk>): _173.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _173.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ResponseApplySnapshotChunk;
            fromJSON(object: any): _173.ResponseApplySnapshotChunk;
            toJSON(message: _173.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_173.ResponseApplySnapshotChunk>): _173.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _173.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ConsensusParams;
            fromJSON(object: any): _173.ConsensusParams;
            toJSON(message: _173.ConsensusParams): unknown;
            fromPartial(object: Partial<_173.ConsensusParams>): _173.ConsensusParams;
        };
        BlockParams: {
            encode(message: _173.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BlockParams;
            fromJSON(object: any): _173.BlockParams;
            toJSON(message: _173.BlockParams): unknown;
            fromPartial(object: Partial<_173.BlockParams>): _173.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _173.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.LastCommitInfo;
            fromJSON(object: any): _173.LastCommitInfo;
            toJSON(message: _173.LastCommitInfo): unknown;
            fromPartial(object: Partial<_173.LastCommitInfo>): _173.LastCommitInfo;
        };
        Event: {
            encode(message: _173.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Event;
            fromJSON(object: any): _173.Event;
            toJSON(message: _173.Event): unknown;
            fromPartial(object: Partial<_173.Event>): _173.Event;
        };
        EventAttribute: {
            encode(message: _173.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.EventAttribute;
            fromJSON(object: any): _173.EventAttribute;
            toJSON(message: _173.EventAttribute): unknown;
            fromPartial(object: Partial<_173.EventAttribute>): _173.EventAttribute;
        };
        TxResult: {
            encode(message: _173.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TxResult;
            fromJSON(object: any): _173.TxResult;
            toJSON(message: _173.TxResult): unknown;
            fromPartial(object: Partial<_173.TxResult>): _173.TxResult;
        };
        Validator: {
            encode(message: _173.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Validator;
            fromJSON(object: any): _173.Validator;
            toJSON(message: _173.Validator): unknown;
            fromPartial(object: Partial<_173.Validator>): _173.Validator;
        };
        ValidatorUpdate: {
            encode(message: _173.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.ValidatorUpdate;
            fromJSON(object: any): _173.ValidatorUpdate;
            toJSON(message: _173.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_173.ValidatorUpdate>): _173.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _173.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.VoteInfo;
            fromJSON(object: any): _173.VoteInfo;
            toJSON(message: _173.VoteInfo): unknown;
            fromPartial(object: Partial<_173.VoteInfo>): _173.VoteInfo;
        };
        Evidence: {
            encode(message: _173.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Evidence;
            fromJSON(object: any): _173.Evidence;
            toJSON(message: _173.Evidence): unknown;
            fromPartial(object: Partial<_173.Evidence>): _173.Evidence;
        };
        Snapshot: {
            encode(message: _173.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Snapshot;
            fromJSON(object: any): _173.Snapshot;
            toJSON(message: _173.Snapshot): unknown;
            fromPartial(object: Partial<_173.Snapshot>): _173.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _175.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Proof;
            fromJSON(object: any): _175.Proof;
            toJSON(message: _175.Proof): unknown;
            fromPartial(object: Partial<_175.Proof>): _175.Proof;
        };
        ValueOp: {
            encode(message: _175.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ValueOp;
            fromJSON(object: any): _175.ValueOp;
            toJSON(message: _175.ValueOp): unknown;
            fromPartial(object: Partial<_175.ValueOp>): _175.ValueOp;
        };
        DominoOp: {
            encode(message: _175.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.DominoOp;
            fromJSON(object: any): _175.DominoOp;
            toJSON(message: _175.DominoOp): unknown;
            fromPartial(object: Partial<_175.DominoOp>): _175.DominoOp;
        };
        ProofOp: {
            encode(message: _175.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ProofOp;
            fromJSON(object: any): _175.ProofOp;
            toJSON(message: _175.ProofOp): unknown;
            fromPartial(object: Partial<_175.ProofOp>): _175.ProofOp;
        };
        ProofOps: {
            encode(message: _175.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ProofOps;
            fromJSON(object: any): _175.ProofOps;
            toJSON(message: _175.ProofOps): unknown;
            fromPartial(object: Partial<_175.ProofOps>): _175.ProofOps;
        };
        PublicKey: {
            encode(message: _174.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PublicKey;
            fromJSON(object: any): _174.PublicKey;
            toJSON(message: _174.PublicKey): unknown;
            fromPartial(object: Partial<_174.PublicKey>): _174.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _176.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.BitArray;
                fromJSON(object: any): _176.BitArray;
                toJSON(message: _176.BitArray): unknown;
                fromPartial(object: Partial<_176.BitArray>): _176.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _177.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ProtocolVersion;
            fromJSON(object: any): _177.ProtocolVersion;
            toJSON(message: _177.ProtocolVersion): unknown;
            fromPartial(object: Partial<_177.ProtocolVersion>): _177.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _177.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.NodeInfo;
            fromJSON(object: any): _177.NodeInfo;
            toJSON(message: _177.NodeInfo): unknown;
            fromPartial(object: Partial<_177.NodeInfo>): _177.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _177.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.NodeInfoOther;
            fromJSON(object: any): _177.NodeInfoOther;
            toJSON(message: _177.NodeInfoOther): unknown;
            fromPartial(object: Partial<_177.NodeInfoOther>): _177.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _177.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PeerInfo;
            fromJSON(object: any): _177.PeerInfo;
            toJSON(message: _177.PeerInfo): unknown;
            fromPartial(object: Partial<_177.PeerInfo>): _177.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _177.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PeerAddressInfo;
            fromJSON(object: any): _177.PeerAddressInfo;
            toJSON(message: _177.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_177.PeerAddressInfo>): _177.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _182.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ValidatorSet;
            fromJSON(object: any): _182.ValidatorSet;
            toJSON(message: _182.ValidatorSet): unknown;
            fromPartial(object: Partial<_182.ValidatorSet>): _182.ValidatorSet;
        };
        Validator: {
            encode(message: _182.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Validator;
            fromJSON(object: any): _182.Validator;
            toJSON(message: _182.Validator): unknown;
            fromPartial(object: Partial<_182.Validator>): _182.Validator;
        };
        SimpleValidator: {
            encode(message: _182.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.SimpleValidator;
            fromJSON(object: any): _182.SimpleValidator;
            toJSON(message: _182.SimpleValidator): unknown;
            fromPartial(object: Partial<_182.SimpleValidator>): _182.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _181.BlockIDFlag;
        blockIDFlagToJSON(object: _181.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _181.SignedMsgType;
        signedMsgTypeToJSON(object: _181.SignedMsgType): string;
        BlockIDFlag: typeof _181.BlockIDFlag;
        BlockIDFlagSDKType: typeof _181.BlockIDFlagSDKType;
        SignedMsgType: typeof _181.SignedMsgType;
        SignedMsgTypeSDKType: typeof _181.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _181.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.PartSetHeader;
            fromJSON(object: any): _181.PartSetHeader;
            toJSON(message: _181.PartSetHeader): unknown;
            fromPartial(object: Partial<_181.PartSetHeader>): _181.PartSetHeader;
        };
        Part: {
            encode(message: _181.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Part;
            fromJSON(object: any): _181.Part;
            toJSON(message: _181.Part): unknown;
            fromPartial(object: Partial<_181.Part>): _181.Part;
        };
        BlockID: {
            encode(message: _181.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.BlockID;
            fromJSON(object: any): _181.BlockID;
            toJSON(message: _181.BlockID): unknown;
            fromPartial(object: Partial<_181.BlockID>): _181.BlockID;
        };
        Header: {
            encode(message: _181.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Header;
            fromJSON(object: any): _181.Header;
            toJSON(message: _181.Header): unknown;
            fromPartial(object: Partial<_181.Header>): _181.Header;
        };
        Data: {
            encode(message: _181.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Data;
            fromJSON(object: any): _181.Data;
            toJSON(message: _181.Data): unknown;
            fromPartial(object: Partial<_181.Data>): _181.Data;
        };
        Vote: {
            encode(message: _181.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Vote;
            fromJSON(object: any): _181.Vote;
            toJSON(message: _181.Vote): unknown;
            fromPartial(object: Partial<_181.Vote>): _181.Vote;
        };
        Commit: {
            encode(message: _181.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Commit;
            fromJSON(object: any): _181.Commit;
            toJSON(message: _181.Commit): unknown;
            fromPartial(object: Partial<_181.Commit>): _181.Commit;
        };
        CommitSig: {
            encode(message: _181.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.CommitSig;
            fromJSON(object: any): _181.CommitSig;
            toJSON(message: _181.CommitSig): unknown;
            fromPartial(object: Partial<_181.CommitSig>): _181.CommitSig;
        };
        Proposal: {
            encode(message: _181.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Proposal;
            fromJSON(object: any): _181.Proposal;
            toJSON(message: _181.Proposal): unknown;
            fromPartial(object: Partial<_181.Proposal>): _181.Proposal;
        };
        SignedHeader: {
            encode(message: _181.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.SignedHeader;
            fromJSON(object: any): _181.SignedHeader;
            toJSON(message: _181.SignedHeader): unknown;
            fromPartial(object: Partial<_181.SignedHeader>): _181.SignedHeader;
        };
        LightBlock: {
            encode(message: _181.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.LightBlock;
            fromJSON(object: any): _181.LightBlock;
            toJSON(message: _181.LightBlock): unknown;
            fromPartial(object: Partial<_181.LightBlock>): _181.LightBlock;
        };
        BlockMeta: {
            encode(message: _181.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.BlockMeta;
            fromJSON(object: any): _181.BlockMeta;
            toJSON(message: _181.BlockMeta): unknown;
            fromPartial(object: Partial<_181.BlockMeta>): _181.BlockMeta;
        };
        TxProof: {
            encode(message: _181.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.TxProof;
            fromJSON(object: any): _181.TxProof;
            toJSON(message: _181.TxProof): unknown;
            fromPartial(object: Partial<_181.TxProof>): _181.TxProof;
        };
        ConsensusParams: {
            encode(message: _180.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ConsensusParams;
            fromJSON(object: any): _180.ConsensusParams;
            toJSON(message: _180.ConsensusParams): unknown;
            fromPartial(object: Partial<_180.ConsensusParams>): _180.ConsensusParams;
        };
        BlockParams: {
            encode(message: _180.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.BlockParams;
            fromJSON(object: any): _180.BlockParams;
            toJSON(message: _180.BlockParams): unknown;
            fromPartial(object: Partial<_180.BlockParams>): _180.BlockParams;
        };
        EvidenceParams: {
            encode(message: _180.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EvidenceParams;
            fromJSON(object: any): _180.EvidenceParams;
            toJSON(message: _180.EvidenceParams): unknown;
            fromPartial(object: Partial<_180.EvidenceParams>): _180.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _180.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ValidatorParams;
            fromJSON(object: any): _180.ValidatorParams;
            toJSON(message: _180.ValidatorParams): unknown;
            fromPartial(object: Partial<_180.ValidatorParams>): _180.ValidatorParams;
        };
        VersionParams: {
            encode(message: _180.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.VersionParams;
            fromJSON(object: any): _180.VersionParams;
            toJSON(message: _180.VersionParams): unknown;
            fromPartial(object: Partial<_180.VersionParams>): _180.VersionParams;
        };
        HashedParams: {
            encode(message: _180.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.HashedParams;
            fromJSON(object: any): _180.HashedParams;
            toJSON(message: _180.HashedParams): unknown;
            fromPartial(object: Partial<_180.HashedParams>): _180.HashedParams;
        };
        Evidence: {
            encode(message: _179.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Evidence;
            fromJSON(object: any): _179.Evidence;
            toJSON(message: _179.Evidence): unknown;
            fromPartial(object: Partial<_179.Evidence>): _179.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _179.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.DuplicateVoteEvidence;
            fromJSON(object: any): _179.DuplicateVoteEvidence;
            toJSON(message: _179.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_179.DuplicateVoteEvidence>): _179.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _179.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.LightClientAttackEvidence;
            fromJSON(object: any): _179.LightClientAttackEvidence;
            toJSON(message: _179.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_179.LightClientAttackEvidence>): _179.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _179.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EvidenceList;
            fromJSON(object: any): _179.EvidenceList;
            toJSON(message: _179.EvidenceList): unknown;
            fromPartial(object: Partial<_179.EvidenceList>): _179.EvidenceList;
        };
        Block: {
            encode(message: _178.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Block;
            fromJSON(object: any): _178.Block;
            toJSON(message: _178.Block): unknown;
            fromPartial(object: Partial<_178.Block>): _178.Block;
        };
    };
    const version: {
        App: {
            encode(message: _183.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.App;
            fromJSON(object: any): _183.App;
            toJSON(message: _183.App): unknown;
            fromPartial(object: Partial<_183.App>): _183.App;
        };
        Consensus: {
            encode(message: _183.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Consensus;
            fromJSON(object: any): _183.Consensus;
            toJSON(message: _183.Consensus): unknown;
            fromPartial(object: Partial<_183.Consensus>): _183.Consensus;
        };
    };
}
