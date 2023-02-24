import * as _165 from "./abci/types";
import * as _166 from "./crypto/keys";
import * as _167 from "./crypto/proof";
import * as _168 from "./libs/bits/types";
import * as _169 from "./p2p/types";
import * as _170 from "./types/block";
import * as _171 from "./types/evidence";
import * as _172 from "./types/params";
import * as _173 from "./types/types";
import * as _174 from "./types/validator";
import * as _175 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _165.CheckTxType;
        checkTxTypeToJSON(object: _165.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _165.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _165.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _165.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _165.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _165.EvidenceType;
        evidenceTypeToJSON(object: _165.EvidenceType): string;
        CheckTxType: typeof _165.CheckTxType;
        CheckTxTypeSDKType: typeof _165.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _165.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _165.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _165.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _165.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _165.EvidenceType;
        EvidenceTypeSDKType: typeof _165.EvidenceTypeSDKType;
        Request: {
            encode(message: _165.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Request;
            fromJSON(object: any): _165.Request;
            toJSON(message: _165.Request): unknown;
            fromPartial(object: Partial<_165.Request>): _165.Request;
        };
        RequestEcho: {
            encode(message: _165.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestEcho;
            fromJSON(object: any): _165.RequestEcho;
            toJSON(message: _165.RequestEcho): unknown;
            fromPartial(object: Partial<_165.RequestEcho>): _165.RequestEcho;
        };
        RequestFlush: {
            encode(_: _165.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestFlush;
            fromJSON(_: any): _165.RequestFlush;
            toJSON(_: _165.RequestFlush): unknown;
            fromPartial(_: Partial<_165.RequestFlush>): _165.RequestFlush;
        };
        RequestInfo: {
            encode(message: _165.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestInfo;
            fromJSON(object: any): _165.RequestInfo;
            toJSON(message: _165.RequestInfo): unknown;
            fromPartial(object: Partial<_165.RequestInfo>): _165.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _165.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestSetOption;
            fromJSON(object: any): _165.RequestSetOption;
            toJSON(message: _165.RequestSetOption): unknown;
            fromPartial(object: Partial<_165.RequestSetOption>): _165.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _165.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestInitChain;
            fromJSON(object: any): _165.RequestInitChain;
            toJSON(message: _165.RequestInitChain): unknown;
            fromPartial(object: Partial<_165.RequestInitChain>): _165.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _165.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestQuery;
            fromJSON(object: any): _165.RequestQuery;
            toJSON(message: _165.RequestQuery): unknown;
            fromPartial(object: Partial<_165.RequestQuery>): _165.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _165.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestBeginBlock;
            fromJSON(object: any): _165.RequestBeginBlock;
            toJSON(message: _165.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_165.RequestBeginBlock>): _165.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _165.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestCheckTx;
            fromJSON(object: any): _165.RequestCheckTx;
            toJSON(message: _165.RequestCheckTx): unknown;
            fromPartial(object: Partial<_165.RequestCheckTx>): _165.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _165.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestDeliverTx;
            fromJSON(object: any): _165.RequestDeliverTx;
            toJSON(message: _165.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_165.RequestDeliverTx>): _165.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _165.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestEndBlock;
            fromJSON(object: any): _165.RequestEndBlock;
            toJSON(message: _165.RequestEndBlock): unknown;
            fromPartial(object: Partial<_165.RequestEndBlock>): _165.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _165.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestCommit;
            fromJSON(_: any): _165.RequestCommit;
            toJSON(_: _165.RequestCommit): unknown;
            fromPartial(_: Partial<_165.RequestCommit>): _165.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _165.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestListSnapshots;
            fromJSON(_: any): _165.RequestListSnapshots;
            toJSON(_: _165.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_165.RequestListSnapshots>): _165.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _165.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestOfferSnapshot;
            fromJSON(object: any): _165.RequestOfferSnapshot;
            toJSON(message: _165.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_165.RequestOfferSnapshot>): _165.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _165.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestLoadSnapshotChunk;
            fromJSON(object: any): _165.RequestLoadSnapshotChunk;
            toJSON(message: _165.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_165.RequestLoadSnapshotChunk>): _165.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _165.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.RequestApplySnapshotChunk;
            fromJSON(object: any): _165.RequestApplySnapshotChunk;
            toJSON(message: _165.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_165.RequestApplySnapshotChunk>): _165.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _165.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Response;
            fromJSON(object: any): _165.Response;
            toJSON(message: _165.Response): unknown;
            fromPartial(object: Partial<_165.Response>): _165.Response;
        };
        ResponseException: {
            encode(message: _165.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseException;
            fromJSON(object: any): _165.ResponseException;
            toJSON(message: _165.ResponseException): unknown;
            fromPartial(object: Partial<_165.ResponseException>): _165.ResponseException;
        };
        ResponseEcho: {
            encode(message: _165.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseEcho;
            fromJSON(object: any): _165.ResponseEcho;
            toJSON(message: _165.ResponseEcho): unknown;
            fromPartial(object: Partial<_165.ResponseEcho>): _165.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _165.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseFlush;
            fromJSON(_: any): _165.ResponseFlush;
            toJSON(_: _165.ResponseFlush): unknown;
            fromPartial(_: Partial<_165.ResponseFlush>): _165.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _165.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseInfo;
            fromJSON(object: any): _165.ResponseInfo;
            toJSON(message: _165.ResponseInfo): unknown;
            fromPartial(object: Partial<_165.ResponseInfo>): _165.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _165.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseSetOption;
            fromJSON(object: any): _165.ResponseSetOption;
            toJSON(message: _165.ResponseSetOption): unknown;
            fromPartial(object: Partial<_165.ResponseSetOption>): _165.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _165.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseInitChain;
            fromJSON(object: any): _165.ResponseInitChain;
            toJSON(message: _165.ResponseInitChain): unknown;
            fromPartial(object: Partial<_165.ResponseInitChain>): _165.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _165.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseQuery;
            fromJSON(object: any): _165.ResponseQuery;
            toJSON(message: _165.ResponseQuery): unknown;
            fromPartial(object: Partial<_165.ResponseQuery>): _165.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _165.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseBeginBlock;
            fromJSON(object: any): _165.ResponseBeginBlock;
            toJSON(message: _165.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_165.ResponseBeginBlock>): _165.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _165.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseCheckTx;
            fromJSON(object: any): _165.ResponseCheckTx;
            toJSON(message: _165.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_165.ResponseCheckTx>): _165.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _165.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseDeliverTx;
            fromJSON(object: any): _165.ResponseDeliverTx;
            toJSON(message: _165.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_165.ResponseDeliverTx>): _165.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _165.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseEndBlock;
            fromJSON(object: any): _165.ResponseEndBlock;
            toJSON(message: _165.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_165.ResponseEndBlock>): _165.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _165.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseCommit;
            fromJSON(object: any): _165.ResponseCommit;
            toJSON(message: _165.ResponseCommit): unknown;
            fromPartial(object: Partial<_165.ResponseCommit>): _165.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _165.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseListSnapshots;
            fromJSON(object: any): _165.ResponseListSnapshots;
            toJSON(message: _165.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_165.ResponseListSnapshots>): _165.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _165.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseOfferSnapshot;
            fromJSON(object: any): _165.ResponseOfferSnapshot;
            toJSON(message: _165.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_165.ResponseOfferSnapshot>): _165.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _165.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _165.ResponseLoadSnapshotChunk;
            toJSON(message: _165.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_165.ResponseLoadSnapshotChunk>): _165.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _165.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ResponseApplySnapshotChunk;
            fromJSON(object: any): _165.ResponseApplySnapshotChunk;
            toJSON(message: _165.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_165.ResponseApplySnapshotChunk>): _165.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _165.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ConsensusParams;
            fromJSON(object: any): _165.ConsensusParams;
            toJSON(message: _165.ConsensusParams): unknown;
            fromPartial(object: Partial<_165.ConsensusParams>): _165.ConsensusParams;
        };
        BlockParams: {
            encode(message: _165.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.BlockParams;
            fromJSON(object: any): _165.BlockParams;
            toJSON(message: _165.BlockParams): unknown;
            fromPartial(object: Partial<_165.BlockParams>): _165.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _165.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.LastCommitInfo;
            fromJSON(object: any): _165.LastCommitInfo;
            toJSON(message: _165.LastCommitInfo): unknown;
            fromPartial(object: Partial<_165.LastCommitInfo>): _165.LastCommitInfo;
        };
        Event: {
            encode(message: _165.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Event;
            fromJSON(object: any): _165.Event;
            toJSON(message: _165.Event): unknown;
            fromPartial(object: Partial<_165.Event>): _165.Event;
        };
        EventAttribute: {
            encode(message: _165.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.EventAttribute;
            fromJSON(object: any): _165.EventAttribute;
            toJSON(message: _165.EventAttribute): unknown;
            fromPartial(object: Partial<_165.EventAttribute>): _165.EventAttribute;
        };
        TxResult: {
            encode(message: _165.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.TxResult;
            fromJSON(object: any): _165.TxResult;
            toJSON(message: _165.TxResult): unknown;
            fromPartial(object: Partial<_165.TxResult>): _165.TxResult;
        };
        Validator: {
            encode(message: _165.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Validator;
            fromJSON(object: any): _165.Validator;
            toJSON(message: _165.Validator): unknown;
            fromPartial(object: Partial<_165.Validator>): _165.Validator;
        };
        ValidatorUpdate: {
            encode(message: _165.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ValidatorUpdate;
            fromJSON(object: any): _165.ValidatorUpdate;
            toJSON(message: _165.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_165.ValidatorUpdate>): _165.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _165.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.VoteInfo;
            fromJSON(object: any): _165.VoteInfo;
            toJSON(message: _165.VoteInfo): unknown;
            fromPartial(object: Partial<_165.VoteInfo>): _165.VoteInfo;
        };
        Evidence: {
            encode(message: _165.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Evidence;
            fromJSON(object: any): _165.Evidence;
            toJSON(message: _165.Evidence): unknown;
            fromPartial(object: Partial<_165.Evidence>): _165.Evidence;
        };
        Snapshot: {
            encode(message: _165.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Snapshot;
            fromJSON(object: any): _165.Snapshot;
            toJSON(message: _165.Snapshot): unknown;
            fromPartial(object: Partial<_165.Snapshot>): _165.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _167.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Proof;
            fromJSON(object: any): _167.Proof;
            toJSON(message: _167.Proof): unknown;
            fromPartial(object: Partial<_167.Proof>): _167.Proof;
        };
        ValueOp: {
            encode(message: _167.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ValueOp;
            fromJSON(object: any): _167.ValueOp;
            toJSON(message: _167.ValueOp): unknown;
            fromPartial(object: Partial<_167.ValueOp>): _167.ValueOp;
        };
        DominoOp: {
            encode(message: _167.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.DominoOp;
            fromJSON(object: any): _167.DominoOp;
            toJSON(message: _167.DominoOp): unknown;
            fromPartial(object: Partial<_167.DominoOp>): _167.DominoOp;
        };
        ProofOp: {
            encode(message: _167.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ProofOp;
            fromJSON(object: any): _167.ProofOp;
            toJSON(message: _167.ProofOp): unknown;
            fromPartial(object: Partial<_167.ProofOp>): _167.ProofOp;
        };
        ProofOps: {
            encode(message: _167.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ProofOps;
            fromJSON(object: any): _167.ProofOps;
            toJSON(message: _167.ProofOps): unknown;
            fromPartial(object: Partial<_167.ProofOps>): _167.ProofOps;
        };
        PublicKey: {
            encode(message: _166.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.PublicKey;
            fromJSON(object: any): _166.PublicKey;
            toJSON(message: _166.PublicKey): unknown;
            fromPartial(object: Partial<_166.PublicKey>): _166.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _168.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.BitArray;
                fromJSON(object: any): _168.BitArray;
                toJSON(message: _168.BitArray): unknown;
                fromPartial(object: Partial<_168.BitArray>): _168.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _169.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ProtocolVersion;
            fromJSON(object: any): _169.ProtocolVersion;
            toJSON(message: _169.ProtocolVersion): unknown;
            fromPartial(object: Partial<_169.ProtocolVersion>): _169.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _169.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.NodeInfo;
            fromJSON(object: any): _169.NodeInfo;
            toJSON(message: _169.NodeInfo): unknown;
            fromPartial(object: Partial<_169.NodeInfo>): _169.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _169.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.NodeInfoOther;
            fromJSON(object: any): _169.NodeInfoOther;
            toJSON(message: _169.NodeInfoOther): unknown;
            fromPartial(object: Partial<_169.NodeInfoOther>): _169.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _169.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PeerInfo;
            fromJSON(object: any): _169.PeerInfo;
            toJSON(message: _169.PeerInfo): unknown;
            fromPartial(object: Partial<_169.PeerInfo>): _169.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _169.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PeerAddressInfo;
            fromJSON(object: any): _169.PeerAddressInfo;
            toJSON(message: _169.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_169.PeerAddressInfo>): _169.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _174.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ValidatorSet;
            fromJSON(object: any): _174.ValidatorSet;
            toJSON(message: _174.ValidatorSet): unknown;
            fromPartial(object: Partial<_174.ValidatorSet>): _174.ValidatorSet;
        };
        Validator: {
            encode(message: _174.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Validator;
            fromJSON(object: any): _174.Validator;
            toJSON(message: _174.Validator): unknown;
            fromPartial(object: Partial<_174.Validator>): _174.Validator;
        };
        SimpleValidator: {
            encode(message: _174.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.SimpleValidator;
            fromJSON(object: any): _174.SimpleValidator;
            toJSON(message: _174.SimpleValidator): unknown;
            fromPartial(object: Partial<_174.SimpleValidator>): _174.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _173.BlockIDFlag;
        blockIDFlagToJSON(object: _173.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _173.SignedMsgType;
        signedMsgTypeToJSON(object: _173.SignedMsgType): string;
        BlockIDFlag: typeof _173.BlockIDFlag;
        BlockIDFlagSDKType: typeof _173.BlockIDFlagSDKType;
        SignedMsgType: typeof _173.SignedMsgType;
        SignedMsgTypeSDKType: typeof _173.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _173.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PartSetHeader;
            fromJSON(object: any): _173.PartSetHeader;
            toJSON(message: _173.PartSetHeader): unknown;
            fromPartial(object: Partial<_173.PartSetHeader>): _173.PartSetHeader;
        };
        Part: {
            encode(message: _173.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Part;
            fromJSON(object: any): _173.Part;
            toJSON(message: _173.Part): unknown;
            fromPartial(object: Partial<_173.Part>): _173.Part;
        };
        BlockID: {
            encode(message: _173.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BlockID;
            fromJSON(object: any): _173.BlockID;
            toJSON(message: _173.BlockID): unknown;
            fromPartial(object: Partial<_173.BlockID>): _173.BlockID;
        };
        Header: {
            encode(message: _173.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Header;
            fromJSON(object: any): _173.Header;
            toJSON(message: _173.Header): unknown;
            fromPartial(object: Partial<_173.Header>): _173.Header;
        };
        Data: {
            encode(message: _173.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Data;
            fromJSON(object: any): _173.Data;
            toJSON(message: _173.Data): unknown;
            fromPartial(object: Partial<_173.Data>): _173.Data;
        };
        Vote: {
            encode(message: _173.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Vote;
            fromJSON(object: any): _173.Vote;
            toJSON(message: _173.Vote): unknown;
            fromPartial(object: Partial<_173.Vote>): _173.Vote;
        };
        Commit: {
            encode(message: _173.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Commit;
            fromJSON(object: any): _173.Commit;
            toJSON(message: _173.Commit): unknown;
            fromPartial(object: Partial<_173.Commit>): _173.Commit;
        };
        CommitSig: {
            encode(message: _173.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.CommitSig;
            fromJSON(object: any): _173.CommitSig;
            toJSON(message: _173.CommitSig): unknown;
            fromPartial(object: Partial<_173.CommitSig>): _173.CommitSig;
        };
        Proposal: {
            encode(message: _173.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Proposal;
            fromJSON(object: any): _173.Proposal;
            toJSON(message: _173.Proposal): unknown;
            fromPartial(object: Partial<_173.Proposal>): _173.Proposal;
        };
        SignedHeader: {
            encode(message: _173.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.SignedHeader;
            fromJSON(object: any): _173.SignedHeader;
            toJSON(message: _173.SignedHeader): unknown;
            fromPartial(object: Partial<_173.SignedHeader>): _173.SignedHeader;
        };
        LightBlock: {
            encode(message: _173.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.LightBlock;
            fromJSON(object: any): _173.LightBlock;
            toJSON(message: _173.LightBlock): unknown;
            fromPartial(object: Partial<_173.LightBlock>): _173.LightBlock;
        };
        BlockMeta: {
            encode(message: _173.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.BlockMeta;
            fromJSON(object: any): _173.BlockMeta;
            toJSON(message: _173.BlockMeta): unknown;
            fromPartial(object: Partial<_173.BlockMeta>): _173.BlockMeta;
        };
        TxProof: {
            encode(message: _173.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.TxProof;
            fromJSON(object: any): _173.TxProof;
            toJSON(message: _173.TxProof): unknown;
            fromPartial(object: Partial<_173.TxProof>): _173.TxProof;
        };
        ConsensusParams: {
            encode(message: _172.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ConsensusParams;
            fromJSON(object: any): _172.ConsensusParams;
            toJSON(message: _172.ConsensusParams): unknown;
            fromPartial(object: Partial<_172.ConsensusParams>): _172.ConsensusParams;
        };
        BlockParams: {
            encode(message: _172.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.BlockParams;
            fromJSON(object: any): _172.BlockParams;
            toJSON(message: _172.BlockParams): unknown;
            fromPartial(object: Partial<_172.BlockParams>): _172.BlockParams;
        };
        EvidenceParams: {
            encode(message: _172.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.EvidenceParams;
            fromJSON(object: any): _172.EvidenceParams;
            toJSON(message: _172.EvidenceParams): unknown;
            fromPartial(object: Partial<_172.EvidenceParams>): _172.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _172.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ValidatorParams;
            fromJSON(object: any): _172.ValidatorParams;
            toJSON(message: _172.ValidatorParams): unknown;
            fromPartial(object: Partial<_172.ValidatorParams>): _172.ValidatorParams;
        };
        VersionParams: {
            encode(message: _172.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.VersionParams;
            fromJSON(object: any): _172.VersionParams;
            toJSON(message: _172.VersionParams): unknown;
            fromPartial(object: Partial<_172.VersionParams>): _172.VersionParams;
        };
        HashedParams: {
            encode(message: _172.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.HashedParams;
            fromJSON(object: any): _172.HashedParams;
            toJSON(message: _172.HashedParams): unknown;
            fromPartial(object: Partial<_172.HashedParams>): _172.HashedParams;
        };
        Evidence: {
            encode(message: _171.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Evidence;
            fromJSON(object: any): _171.Evidence;
            toJSON(message: _171.Evidence): unknown;
            fromPartial(object: Partial<_171.Evidence>): _171.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _171.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DuplicateVoteEvidence;
            fromJSON(object: any): _171.DuplicateVoteEvidence;
            toJSON(message: _171.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_171.DuplicateVoteEvidence>): _171.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _171.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.LightClientAttackEvidence;
            fromJSON(object: any): _171.LightClientAttackEvidence;
            toJSON(message: _171.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_171.LightClientAttackEvidence>): _171.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _171.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.EvidenceList;
            fromJSON(object: any): _171.EvidenceList;
            toJSON(message: _171.EvidenceList): unknown;
            fromPartial(object: Partial<_171.EvidenceList>): _171.EvidenceList;
        };
        Block: {
            encode(message: _170.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Block;
            fromJSON(object: any): _170.Block;
            toJSON(message: _170.Block): unknown;
            fromPartial(object: Partial<_170.Block>): _170.Block;
        };
    };
    const version: {
        App: {
            encode(message: _175.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.App;
            fromJSON(object: any): _175.App;
            toJSON(message: _175.App): unknown;
            fromPartial(object: Partial<_175.App>): _175.App;
        };
        Consensus: {
            encode(message: _175.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Consensus;
            fromJSON(object: any): _175.Consensus;
            toJSON(message: _175.Consensus): unknown;
            fromPartial(object: Partial<_175.Consensus>): _175.Consensus;
        };
    };
}
