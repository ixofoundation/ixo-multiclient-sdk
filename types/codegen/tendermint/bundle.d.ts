import * as _163 from "./abci/types";
import * as _164 from "./crypto/keys";
import * as _165 from "./crypto/proof";
import * as _166 from "./libs/bits/types";
import * as _167 from "./p2p/types";
import * as _168 from "./types/block";
import * as _169 from "./types/evidence";
import * as _170 from "./types/params";
import * as _171 from "./types/types";
import * as _172 from "./types/validator";
import * as _173 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _163.CheckTxType;
        checkTxTypeToJSON(object: _163.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _163.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _163.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _163.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _163.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _163.EvidenceType;
        evidenceTypeToJSON(object: _163.EvidenceType): string;
        CheckTxType: typeof _163.CheckTxType;
        CheckTxTypeSDKType: typeof _163.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _163.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _163.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _163.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _163.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _163.EvidenceType;
        EvidenceTypeSDKType: typeof _163.EvidenceTypeSDKType;
        Request: {
            encode(message: _163.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Request;
            fromJSON(object: any): _163.Request;
            toJSON(message: _163.Request): unknown;
            fromPartial(object: Partial<_163.Request>): _163.Request;
        };
        RequestEcho: {
            encode(message: _163.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestEcho;
            fromJSON(object: any): _163.RequestEcho;
            toJSON(message: _163.RequestEcho): unknown;
            fromPartial(object: Partial<_163.RequestEcho>): _163.RequestEcho;
        };
        RequestFlush: {
            encode(_: _163.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestFlush;
            fromJSON(_: any): _163.RequestFlush;
            toJSON(_: _163.RequestFlush): unknown;
            fromPartial(_: Partial<_163.RequestFlush>): _163.RequestFlush;
        };
        RequestInfo: {
            encode(message: _163.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestInfo;
            fromJSON(object: any): _163.RequestInfo;
            toJSON(message: _163.RequestInfo): unknown;
            fromPartial(object: Partial<_163.RequestInfo>): _163.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _163.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestSetOption;
            fromJSON(object: any): _163.RequestSetOption;
            toJSON(message: _163.RequestSetOption): unknown;
            fromPartial(object: Partial<_163.RequestSetOption>): _163.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _163.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestInitChain;
            fromJSON(object: any): _163.RequestInitChain;
            toJSON(message: _163.RequestInitChain): unknown;
            fromPartial(object: Partial<_163.RequestInitChain>): _163.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _163.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestQuery;
            fromJSON(object: any): _163.RequestQuery;
            toJSON(message: _163.RequestQuery): unknown;
            fromPartial(object: Partial<_163.RequestQuery>): _163.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _163.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestBeginBlock;
            fromJSON(object: any): _163.RequestBeginBlock;
            toJSON(message: _163.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_163.RequestBeginBlock>): _163.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _163.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestCheckTx;
            fromJSON(object: any): _163.RequestCheckTx;
            toJSON(message: _163.RequestCheckTx): unknown;
            fromPartial(object: Partial<_163.RequestCheckTx>): _163.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _163.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestDeliverTx;
            fromJSON(object: any): _163.RequestDeliverTx;
            toJSON(message: _163.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_163.RequestDeliverTx>): _163.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _163.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestEndBlock;
            fromJSON(object: any): _163.RequestEndBlock;
            toJSON(message: _163.RequestEndBlock): unknown;
            fromPartial(object: Partial<_163.RequestEndBlock>): _163.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _163.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestCommit;
            fromJSON(_: any): _163.RequestCommit;
            toJSON(_: _163.RequestCommit): unknown;
            fromPartial(_: Partial<_163.RequestCommit>): _163.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _163.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestListSnapshots;
            fromJSON(_: any): _163.RequestListSnapshots;
            toJSON(_: _163.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_163.RequestListSnapshots>): _163.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _163.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestOfferSnapshot;
            fromJSON(object: any): _163.RequestOfferSnapshot;
            toJSON(message: _163.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_163.RequestOfferSnapshot>): _163.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _163.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestLoadSnapshotChunk;
            fromJSON(object: any): _163.RequestLoadSnapshotChunk;
            toJSON(message: _163.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_163.RequestLoadSnapshotChunk>): _163.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _163.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.RequestApplySnapshotChunk;
            fromJSON(object: any): _163.RequestApplySnapshotChunk;
            toJSON(message: _163.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_163.RequestApplySnapshotChunk>): _163.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _163.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Response;
            fromJSON(object: any): _163.Response;
            toJSON(message: _163.Response): unknown;
            fromPartial(object: Partial<_163.Response>): _163.Response;
        };
        ResponseException: {
            encode(message: _163.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseException;
            fromJSON(object: any): _163.ResponseException;
            toJSON(message: _163.ResponseException): unknown;
            fromPartial(object: Partial<_163.ResponseException>): _163.ResponseException;
        };
        ResponseEcho: {
            encode(message: _163.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseEcho;
            fromJSON(object: any): _163.ResponseEcho;
            toJSON(message: _163.ResponseEcho): unknown;
            fromPartial(object: Partial<_163.ResponseEcho>): _163.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _163.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseFlush;
            fromJSON(_: any): _163.ResponseFlush;
            toJSON(_: _163.ResponseFlush): unknown;
            fromPartial(_: Partial<_163.ResponseFlush>): _163.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _163.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseInfo;
            fromJSON(object: any): _163.ResponseInfo;
            toJSON(message: _163.ResponseInfo): unknown;
            fromPartial(object: Partial<_163.ResponseInfo>): _163.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _163.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseSetOption;
            fromJSON(object: any): _163.ResponseSetOption;
            toJSON(message: _163.ResponseSetOption): unknown;
            fromPartial(object: Partial<_163.ResponseSetOption>): _163.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _163.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseInitChain;
            fromJSON(object: any): _163.ResponseInitChain;
            toJSON(message: _163.ResponseInitChain): unknown;
            fromPartial(object: Partial<_163.ResponseInitChain>): _163.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _163.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseQuery;
            fromJSON(object: any): _163.ResponseQuery;
            toJSON(message: _163.ResponseQuery): unknown;
            fromPartial(object: Partial<_163.ResponseQuery>): _163.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _163.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseBeginBlock;
            fromJSON(object: any): _163.ResponseBeginBlock;
            toJSON(message: _163.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_163.ResponseBeginBlock>): _163.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _163.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseCheckTx;
            fromJSON(object: any): _163.ResponseCheckTx;
            toJSON(message: _163.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_163.ResponseCheckTx>): _163.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _163.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseDeliverTx;
            fromJSON(object: any): _163.ResponseDeliverTx;
            toJSON(message: _163.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_163.ResponseDeliverTx>): _163.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _163.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseEndBlock;
            fromJSON(object: any): _163.ResponseEndBlock;
            toJSON(message: _163.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_163.ResponseEndBlock>): _163.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _163.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseCommit;
            fromJSON(object: any): _163.ResponseCommit;
            toJSON(message: _163.ResponseCommit): unknown;
            fromPartial(object: Partial<_163.ResponseCommit>): _163.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _163.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseListSnapshots;
            fromJSON(object: any): _163.ResponseListSnapshots;
            toJSON(message: _163.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_163.ResponseListSnapshots>): _163.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _163.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseOfferSnapshot;
            fromJSON(object: any): _163.ResponseOfferSnapshot;
            toJSON(message: _163.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_163.ResponseOfferSnapshot>): _163.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _163.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _163.ResponseLoadSnapshotChunk;
            toJSON(message: _163.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_163.ResponseLoadSnapshotChunk>): _163.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _163.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ResponseApplySnapshotChunk;
            fromJSON(object: any): _163.ResponseApplySnapshotChunk;
            toJSON(message: _163.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_163.ResponseApplySnapshotChunk>): _163.ResponseApplySnapshotChunk;
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
        LastCommitInfo: {
            encode(message: _163.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LastCommitInfo;
            fromJSON(object: any): _163.LastCommitInfo;
            toJSON(message: _163.LastCommitInfo): unknown;
            fromPartial(object: Partial<_163.LastCommitInfo>): _163.LastCommitInfo;
        };
        Event: {
            encode(message: _163.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Event;
            fromJSON(object: any): _163.Event;
            toJSON(message: _163.Event): unknown;
            fromPartial(object: Partial<_163.Event>): _163.Event;
        };
        EventAttribute: {
            encode(message: _163.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.EventAttribute;
            fromJSON(object: any): _163.EventAttribute;
            toJSON(message: _163.EventAttribute): unknown;
            fromPartial(object: Partial<_163.EventAttribute>): _163.EventAttribute;
        };
        TxResult: {
            encode(message: _163.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TxResult;
            fromJSON(object: any): _163.TxResult;
            toJSON(message: _163.TxResult): unknown;
            fromPartial(object: Partial<_163.TxResult>): _163.TxResult;
        };
        Validator: {
            encode(message: _163.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Validator;
            fromJSON(object: any): _163.Validator;
            toJSON(message: _163.Validator): unknown;
            fromPartial(object: Partial<_163.Validator>): _163.Validator;
        };
        ValidatorUpdate: {
            encode(message: _163.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ValidatorUpdate;
            fromJSON(object: any): _163.ValidatorUpdate;
            toJSON(message: _163.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_163.ValidatorUpdate>): _163.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _163.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.VoteInfo;
            fromJSON(object: any): _163.VoteInfo;
            toJSON(message: _163.VoteInfo): unknown;
            fromPartial(object: Partial<_163.VoteInfo>): _163.VoteInfo;
        };
        Evidence: {
            encode(message: _163.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Evidence;
            fromJSON(object: any): _163.Evidence;
            toJSON(message: _163.Evidence): unknown;
            fromPartial(object: Partial<_163.Evidence>): _163.Evidence;
        };
        Snapshot: {
            encode(message: _163.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Snapshot;
            fromJSON(object: any): _163.Snapshot;
            toJSON(message: _163.Snapshot): unknown;
            fromPartial(object: Partial<_163.Snapshot>): _163.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _165.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Proof;
            fromJSON(object: any): _165.Proof;
            toJSON(message: _165.Proof): unknown;
            fromPartial(object: Partial<_165.Proof>): _165.Proof;
        };
        ValueOp: {
            encode(message: _165.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ValueOp;
            fromJSON(object: any): _165.ValueOp;
            toJSON(message: _165.ValueOp): unknown;
            fromPartial(object: Partial<_165.ValueOp>): _165.ValueOp;
        };
        DominoOp: {
            encode(message: _165.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.DominoOp;
            fromJSON(object: any): _165.DominoOp;
            toJSON(message: _165.DominoOp): unknown;
            fromPartial(object: Partial<_165.DominoOp>): _165.DominoOp;
        };
        ProofOp: {
            encode(message: _165.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProofOp;
            fromJSON(object: any): _165.ProofOp;
            toJSON(message: _165.ProofOp): unknown;
            fromPartial(object: Partial<_165.ProofOp>): _165.ProofOp;
        };
        ProofOps: {
            encode(message: _165.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ProofOps;
            fromJSON(object: any): _165.ProofOps;
            toJSON(message: _165.ProofOps): unknown;
            fromPartial(object: Partial<_165.ProofOps>): _165.ProofOps;
        };
        PublicKey: {
            encode(message: _164.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.PublicKey;
            fromJSON(object: any): _164.PublicKey;
            toJSON(message: _164.PublicKey): unknown;
            fromPartial(object: Partial<_164.PublicKey>): _164.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _166.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.BitArray;
                fromJSON(object: any): _166.BitArray;
                toJSON(message: _166.BitArray): unknown;
                fromPartial(object: Partial<_166.BitArray>): _166.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _167.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ProtocolVersion;
            fromJSON(object: any): _167.ProtocolVersion;
            toJSON(message: _167.ProtocolVersion): unknown;
            fromPartial(object: Partial<_167.ProtocolVersion>): _167.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _167.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.NodeInfo;
            fromJSON(object: any): _167.NodeInfo;
            toJSON(message: _167.NodeInfo): unknown;
            fromPartial(object: Partial<_167.NodeInfo>): _167.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _167.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.NodeInfoOther;
            fromJSON(object: any): _167.NodeInfoOther;
            toJSON(message: _167.NodeInfoOther): unknown;
            fromPartial(object: Partial<_167.NodeInfoOther>): _167.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _167.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.PeerInfo;
            fromJSON(object: any): _167.PeerInfo;
            toJSON(message: _167.PeerInfo): unknown;
            fromPartial(object: Partial<_167.PeerInfo>): _167.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _167.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.PeerAddressInfo;
            fromJSON(object: any): _167.PeerAddressInfo;
            toJSON(message: _167.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_167.PeerAddressInfo>): _167.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _172.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ValidatorSet;
            fromJSON(object: any): _172.ValidatorSet;
            toJSON(message: _172.ValidatorSet): unknown;
            fromPartial(object: Partial<_172.ValidatorSet>): _172.ValidatorSet;
        };
        Validator: {
            encode(message: _172.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Validator;
            fromJSON(object: any): _172.Validator;
            toJSON(message: _172.Validator): unknown;
            fromPartial(object: Partial<_172.Validator>): _172.Validator;
        };
        SimpleValidator: {
            encode(message: _172.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.SimpleValidator;
            fromJSON(object: any): _172.SimpleValidator;
            toJSON(message: _172.SimpleValidator): unknown;
            fromPartial(object: Partial<_172.SimpleValidator>): _172.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _171.BlockIDFlag;
        blockIDFlagToJSON(object: _171.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _171.SignedMsgType;
        signedMsgTypeToJSON(object: _171.SignedMsgType): string;
        BlockIDFlag: typeof _171.BlockIDFlag;
        BlockIDFlagSDKType: typeof _171.BlockIDFlagSDKType;
        SignedMsgType: typeof _171.SignedMsgType;
        SignedMsgTypeSDKType: typeof _171.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _171.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PartSetHeader;
            fromJSON(object: any): _171.PartSetHeader;
            toJSON(message: _171.PartSetHeader): unknown;
            fromPartial(object: Partial<_171.PartSetHeader>): _171.PartSetHeader;
        };
        Part: {
            encode(message: _171.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Part;
            fromJSON(object: any): _171.Part;
            toJSON(message: _171.Part): unknown;
            fromPartial(object: Partial<_171.Part>): _171.Part;
        };
        BlockID: {
            encode(message: _171.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BlockID;
            fromJSON(object: any): _171.BlockID;
            toJSON(message: _171.BlockID): unknown;
            fromPartial(object: Partial<_171.BlockID>): _171.BlockID;
        };
        Header: {
            encode(message: _171.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Header;
            fromJSON(object: any): _171.Header;
            toJSON(message: _171.Header): unknown;
            fromPartial(object: Partial<_171.Header>): _171.Header;
        };
        Data: {
            encode(message: _171.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Data;
            fromJSON(object: any): _171.Data;
            toJSON(message: _171.Data): unknown;
            fromPartial(object: Partial<_171.Data>): _171.Data;
        };
        Vote: {
            encode(message: _171.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Vote;
            fromJSON(object: any): _171.Vote;
            toJSON(message: _171.Vote): unknown;
            fromPartial(object: Partial<_171.Vote>): _171.Vote;
        };
        Commit: {
            encode(message: _171.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Commit;
            fromJSON(object: any): _171.Commit;
            toJSON(message: _171.Commit): unknown;
            fromPartial(object: Partial<_171.Commit>): _171.Commit;
        };
        CommitSig: {
            encode(message: _171.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.CommitSig;
            fromJSON(object: any): _171.CommitSig;
            toJSON(message: _171.CommitSig): unknown;
            fromPartial(object: Partial<_171.CommitSig>): _171.CommitSig;
        };
        Proposal: {
            encode(message: _171.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Proposal;
            fromJSON(object: any): _171.Proposal;
            toJSON(message: _171.Proposal): unknown;
            fromPartial(object: Partial<_171.Proposal>): _171.Proposal;
        };
        SignedHeader: {
            encode(message: _171.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.SignedHeader;
            fromJSON(object: any): _171.SignedHeader;
            toJSON(message: _171.SignedHeader): unknown;
            fromPartial(object: Partial<_171.SignedHeader>): _171.SignedHeader;
        };
        LightBlock: {
            encode(message: _171.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.LightBlock;
            fromJSON(object: any): _171.LightBlock;
            toJSON(message: _171.LightBlock): unknown;
            fromPartial(object: Partial<_171.LightBlock>): _171.LightBlock;
        };
        BlockMeta: {
            encode(message: _171.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.BlockMeta;
            fromJSON(object: any): _171.BlockMeta;
            toJSON(message: _171.BlockMeta): unknown;
            fromPartial(object: Partial<_171.BlockMeta>): _171.BlockMeta;
        };
        TxProof: {
            encode(message: _171.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.TxProof;
            fromJSON(object: any): _171.TxProof;
            toJSON(message: _171.TxProof): unknown;
            fromPartial(object: Partial<_171.TxProof>): _171.TxProof;
        };
        ConsensusParams: {
            encode(message: _170.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ConsensusParams;
            fromJSON(object: any): _170.ConsensusParams;
            toJSON(message: _170.ConsensusParams): unknown;
            fromPartial(object: Partial<_170.ConsensusParams>): _170.ConsensusParams;
        };
        BlockParams: {
            encode(message: _170.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BlockParams;
            fromJSON(object: any): _170.BlockParams;
            toJSON(message: _170.BlockParams): unknown;
            fromPartial(object: Partial<_170.BlockParams>): _170.BlockParams;
        };
        EvidenceParams: {
            encode(message: _170.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.EvidenceParams;
            fromJSON(object: any): _170.EvidenceParams;
            toJSON(message: _170.EvidenceParams): unknown;
            fromPartial(object: Partial<_170.EvidenceParams>): _170.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _170.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.ValidatorParams;
            fromJSON(object: any): _170.ValidatorParams;
            toJSON(message: _170.ValidatorParams): unknown;
            fromPartial(object: Partial<_170.ValidatorParams>): _170.ValidatorParams;
        };
        VersionParams: {
            encode(message: _170.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.VersionParams;
            fromJSON(object: any): _170.VersionParams;
            toJSON(message: _170.VersionParams): unknown;
            fromPartial(object: Partial<_170.VersionParams>): _170.VersionParams;
        };
        HashedParams: {
            encode(message: _170.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.HashedParams;
            fromJSON(object: any): _170.HashedParams;
            toJSON(message: _170.HashedParams): unknown;
            fromPartial(object: Partial<_170.HashedParams>): _170.HashedParams;
        };
        Evidence: {
            encode(message: _169.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Evidence;
            fromJSON(object: any): _169.Evidence;
            toJSON(message: _169.Evidence): unknown;
            fromPartial(object: Partial<_169.Evidence>): _169.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _169.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.DuplicateVoteEvidence;
            fromJSON(object: any): _169.DuplicateVoteEvidence;
            toJSON(message: _169.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_169.DuplicateVoteEvidence>): _169.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _169.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.LightClientAttackEvidence;
            fromJSON(object: any): _169.LightClientAttackEvidence;
            toJSON(message: _169.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_169.LightClientAttackEvidence>): _169.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _169.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.EvidenceList;
            fromJSON(object: any): _169.EvidenceList;
            toJSON(message: _169.EvidenceList): unknown;
            fromPartial(object: Partial<_169.EvidenceList>): _169.EvidenceList;
        };
        Block: {
            encode(message: _168.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Block;
            fromJSON(object: any): _168.Block;
            toJSON(message: _168.Block): unknown;
            fromPartial(object: Partial<_168.Block>): _168.Block;
        };
    };
    const version: {
        App: {
            encode(message: _173.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.App;
            fromJSON(object: any): _173.App;
            toJSON(message: _173.App): unknown;
            fromPartial(object: Partial<_173.App>): _173.App;
        };
        Consensus: {
            encode(message: _173.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Consensus;
            fromJSON(object: any): _173.Consensus;
            toJSON(message: _173.Consensus): unknown;
            fromPartial(object: Partial<_173.Consensus>): _173.Consensus;
        };
    };
}
