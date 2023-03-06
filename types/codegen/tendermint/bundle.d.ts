import * as _172 from "./abci/types";
import * as _173 from "./crypto/keys";
import * as _174 from "./crypto/proof";
import * as _175 from "./libs/bits/types";
import * as _176 from "./p2p/types";
import * as _177 from "./types/block";
import * as _178 from "./types/evidence";
import * as _179 from "./types/params";
import * as _180 from "./types/types";
import * as _181 from "./types/validator";
import * as _182 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _172.CheckTxType;
        checkTxTypeToJSON(object: _172.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _172.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _172.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _172.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _172.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _172.EvidenceType;
        evidenceTypeToJSON(object: _172.EvidenceType): string;
        CheckTxType: typeof _172.CheckTxType;
        CheckTxTypeSDKType: typeof _172.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _172.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _172.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _172.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _172.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _172.EvidenceType;
        EvidenceTypeSDKType: typeof _172.EvidenceTypeSDKType;
        Request: {
            encode(message: _172.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Request;
            fromJSON(object: any): _172.Request;
            toJSON(message: _172.Request): unknown;
            fromPartial(object: Partial<_172.Request>): _172.Request;
        };
        RequestEcho: {
            encode(message: _172.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestEcho;
            fromJSON(object: any): _172.RequestEcho;
            toJSON(message: _172.RequestEcho): unknown;
            fromPartial(object: Partial<_172.RequestEcho>): _172.RequestEcho;
        };
        RequestFlush: {
            encode(_: _172.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestFlush;
            fromJSON(_: any): _172.RequestFlush;
            toJSON(_: _172.RequestFlush): unknown;
            fromPartial(_: Partial<_172.RequestFlush>): _172.RequestFlush;
        };
        RequestInfo: {
            encode(message: _172.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestInfo;
            fromJSON(object: any): _172.RequestInfo;
            toJSON(message: _172.RequestInfo): unknown;
            fromPartial(object: Partial<_172.RequestInfo>): _172.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _172.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestSetOption;
            fromJSON(object: any): _172.RequestSetOption;
            toJSON(message: _172.RequestSetOption): unknown;
            fromPartial(object: Partial<_172.RequestSetOption>): _172.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _172.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestInitChain;
            fromJSON(object: any): _172.RequestInitChain;
            toJSON(message: _172.RequestInitChain): unknown;
            fromPartial(object: Partial<_172.RequestInitChain>): _172.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _172.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestQuery;
            fromJSON(object: any): _172.RequestQuery;
            toJSON(message: _172.RequestQuery): unknown;
            fromPartial(object: Partial<_172.RequestQuery>): _172.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _172.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestBeginBlock;
            fromJSON(object: any): _172.RequestBeginBlock;
            toJSON(message: _172.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_172.RequestBeginBlock>): _172.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _172.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestCheckTx;
            fromJSON(object: any): _172.RequestCheckTx;
            toJSON(message: _172.RequestCheckTx): unknown;
            fromPartial(object: Partial<_172.RequestCheckTx>): _172.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _172.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestDeliverTx;
            fromJSON(object: any): _172.RequestDeliverTx;
            toJSON(message: _172.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_172.RequestDeliverTx>): _172.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _172.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestEndBlock;
            fromJSON(object: any): _172.RequestEndBlock;
            toJSON(message: _172.RequestEndBlock): unknown;
            fromPartial(object: Partial<_172.RequestEndBlock>): _172.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _172.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestCommit;
            fromJSON(_: any): _172.RequestCommit;
            toJSON(_: _172.RequestCommit): unknown;
            fromPartial(_: Partial<_172.RequestCommit>): _172.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _172.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestListSnapshots;
            fromJSON(_: any): _172.RequestListSnapshots;
            toJSON(_: _172.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_172.RequestListSnapshots>): _172.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _172.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestOfferSnapshot;
            fromJSON(object: any): _172.RequestOfferSnapshot;
            toJSON(message: _172.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_172.RequestOfferSnapshot>): _172.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _172.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestLoadSnapshotChunk;
            fromJSON(object: any): _172.RequestLoadSnapshotChunk;
            toJSON(message: _172.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_172.RequestLoadSnapshotChunk>): _172.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _172.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.RequestApplySnapshotChunk;
            fromJSON(object: any): _172.RequestApplySnapshotChunk;
            toJSON(message: _172.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_172.RequestApplySnapshotChunk>): _172.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _172.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Response;
            fromJSON(object: any): _172.Response;
            toJSON(message: _172.Response): unknown;
            fromPartial(object: Partial<_172.Response>): _172.Response;
        };
        ResponseException: {
            encode(message: _172.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseException;
            fromJSON(object: any): _172.ResponseException;
            toJSON(message: _172.ResponseException): unknown;
            fromPartial(object: Partial<_172.ResponseException>): _172.ResponseException;
        };
        ResponseEcho: {
            encode(message: _172.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseEcho;
            fromJSON(object: any): _172.ResponseEcho;
            toJSON(message: _172.ResponseEcho): unknown;
            fromPartial(object: Partial<_172.ResponseEcho>): _172.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _172.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseFlush;
            fromJSON(_: any): _172.ResponseFlush;
            toJSON(_: _172.ResponseFlush): unknown;
            fromPartial(_: Partial<_172.ResponseFlush>): _172.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _172.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseInfo;
            fromJSON(object: any): _172.ResponseInfo;
            toJSON(message: _172.ResponseInfo): unknown;
            fromPartial(object: Partial<_172.ResponseInfo>): _172.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _172.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseSetOption;
            fromJSON(object: any): _172.ResponseSetOption;
            toJSON(message: _172.ResponseSetOption): unknown;
            fromPartial(object: Partial<_172.ResponseSetOption>): _172.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _172.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseInitChain;
            fromJSON(object: any): _172.ResponseInitChain;
            toJSON(message: _172.ResponseInitChain): unknown;
            fromPartial(object: Partial<_172.ResponseInitChain>): _172.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _172.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseQuery;
            fromJSON(object: any): _172.ResponseQuery;
            toJSON(message: _172.ResponseQuery): unknown;
            fromPartial(object: Partial<_172.ResponseQuery>): _172.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _172.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseBeginBlock;
            fromJSON(object: any): _172.ResponseBeginBlock;
            toJSON(message: _172.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_172.ResponseBeginBlock>): _172.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _172.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseCheckTx;
            fromJSON(object: any): _172.ResponseCheckTx;
            toJSON(message: _172.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_172.ResponseCheckTx>): _172.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _172.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseDeliverTx;
            fromJSON(object: any): _172.ResponseDeliverTx;
            toJSON(message: _172.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_172.ResponseDeliverTx>): _172.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _172.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseEndBlock;
            fromJSON(object: any): _172.ResponseEndBlock;
            toJSON(message: _172.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_172.ResponseEndBlock>): _172.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _172.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseCommit;
            fromJSON(object: any): _172.ResponseCommit;
            toJSON(message: _172.ResponseCommit): unknown;
            fromPartial(object: Partial<_172.ResponseCommit>): _172.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _172.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseListSnapshots;
            fromJSON(object: any): _172.ResponseListSnapshots;
            toJSON(message: _172.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_172.ResponseListSnapshots>): _172.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _172.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseOfferSnapshot;
            fromJSON(object: any): _172.ResponseOfferSnapshot;
            toJSON(message: _172.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_172.ResponseOfferSnapshot>): _172.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _172.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _172.ResponseLoadSnapshotChunk;
            toJSON(message: _172.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_172.ResponseLoadSnapshotChunk>): _172.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _172.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ResponseApplySnapshotChunk;
            fromJSON(object: any): _172.ResponseApplySnapshotChunk;
            toJSON(message: _172.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_172.ResponseApplySnapshotChunk>): _172.ResponseApplySnapshotChunk;
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
        LastCommitInfo: {
            encode(message: _172.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.LastCommitInfo;
            fromJSON(object: any): _172.LastCommitInfo;
            toJSON(message: _172.LastCommitInfo): unknown;
            fromPartial(object: Partial<_172.LastCommitInfo>): _172.LastCommitInfo;
        };
        Event: {
            encode(message: _172.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Event;
            fromJSON(object: any): _172.Event;
            toJSON(message: _172.Event): unknown;
            fromPartial(object: Partial<_172.Event>): _172.Event;
        };
        EventAttribute: {
            encode(message: _172.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.EventAttribute;
            fromJSON(object: any): _172.EventAttribute;
            toJSON(message: _172.EventAttribute): unknown;
            fromPartial(object: Partial<_172.EventAttribute>): _172.EventAttribute;
        };
        TxResult: {
            encode(message: _172.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.TxResult;
            fromJSON(object: any): _172.TxResult;
            toJSON(message: _172.TxResult): unknown;
            fromPartial(object: Partial<_172.TxResult>): _172.TxResult;
        };
        Validator: {
            encode(message: _172.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Validator;
            fromJSON(object: any): _172.Validator;
            toJSON(message: _172.Validator): unknown;
            fromPartial(object: Partial<_172.Validator>): _172.Validator;
        };
        ValidatorUpdate: {
            encode(message: _172.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ValidatorUpdate;
            fromJSON(object: any): _172.ValidatorUpdate;
            toJSON(message: _172.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_172.ValidatorUpdate>): _172.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _172.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.VoteInfo;
            fromJSON(object: any): _172.VoteInfo;
            toJSON(message: _172.VoteInfo): unknown;
            fromPartial(object: Partial<_172.VoteInfo>): _172.VoteInfo;
        };
        Evidence: {
            encode(message: _172.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Evidence;
            fromJSON(object: any): _172.Evidence;
            toJSON(message: _172.Evidence): unknown;
            fromPartial(object: Partial<_172.Evidence>): _172.Evidence;
        };
        Snapshot: {
            encode(message: _172.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.Snapshot;
            fromJSON(object: any): _172.Snapshot;
            toJSON(message: _172.Snapshot): unknown;
            fromPartial(object: Partial<_172.Snapshot>): _172.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _174.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Proof;
            fromJSON(object: any): _174.Proof;
            toJSON(message: _174.Proof): unknown;
            fromPartial(object: Partial<_174.Proof>): _174.Proof;
        };
        ValueOp: {
            encode(message: _174.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ValueOp;
            fromJSON(object: any): _174.ValueOp;
            toJSON(message: _174.ValueOp): unknown;
            fromPartial(object: Partial<_174.ValueOp>): _174.ValueOp;
        };
        DominoOp: {
            encode(message: _174.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.DominoOp;
            fromJSON(object: any): _174.DominoOp;
            toJSON(message: _174.DominoOp): unknown;
            fromPartial(object: Partial<_174.DominoOp>): _174.DominoOp;
        };
        ProofOp: {
            encode(message: _174.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ProofOp;
            fromJSON(object: any): _174.ProofOp;
            toJSON(message: _174.ProofOp): unknown;
            fromPartial(object: Partial<_174.ProofOp>): _174.ProofOp;
        };
        ProofOps: {
            encode(message: _174.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ProofOps;
            fromJSON(object: any): _174.ProofOps;
            toJSON(message: _174.ProofOps): unknown;
            fromPartial(object: Partial<_174.ProofOps>): _174.ProofOps;
        };
        PublicKey: {
            encode(message: _173.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.PublicKey;
            fromJSON(object: any): _173.PublicKey;
            toJSON(message: _173.PublicKey): unknown;
            fromPartial(object: Partial<_173.PublicKey>): _173.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _175.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.BitArray;
                fromJSON(object: any): _175.BitArray;
                toJSON(message: _175.BitArray): unknown;
                fromPartial(object: Partial<_175.BitArray>): _175.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _176.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.ProtocolVersion;
            fromJSON(object: any): _176.ProtocolVersion;
            toJSON(message: _176.ProtocolVersion): unknown;
            fromPartial(object: Partial<_176.ProtocolVersion>): _176.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _176.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.NodeInfo;
            fromJSON(object: any): _176.NodeInfo;
            toJSON(message: _176.NodeInfo): unknown;
            fromPartial(object: Partial<_176.NodeInfo>): _176.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _176.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.NodeInfoOther;
            fromJSON(object: any): _176.NodeInfoOther;
            toJSON(message: _176.NodeInfoOther): unknown;
            fromPartial(object: Partial<_176.NodeInfoOther>): _176.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _176.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PeerInfo;
            fromJSON(object: any): _176.PeerInfo;
            toJSON(message: _176.PeerInfo): unknown;
            fromPartial(object: Partial<_176.PeerInfo>): _176.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _176.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PeerAddressInfo;
            fromJSON(object: any): _176.PeerAddressInfo;
            toJSON(message: _176.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_176.PeerAddressInfo>): _176.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _181.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ValidatorSet;
            fromJSON(object: any): _181.ValidatorSet;
            toJSON(message: _181.ValidatorSet): unknown;
            fromPartial(object: Partial<_181.ValidatorSet>): _181.ValidatorSet;
        };
        Validator: {
            encode(message: _181.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Validator;
            fromJSON(object: any): _181.Validator;
            toJSON(message: _181.Validator): unknown;
            fromPartial(object: Partial<_181.Validator>): _181.Validator;
        };
        SimpleValidator: {
            encode(message: _181.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.SimpleValidator;
            fromJSON(object: any): _181.SimpleValidator;
            toJSON(message: _181.SimpleValidator): unknown;
            fromPartial(object: Partial<_181.SimpleValidator>): _181.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _180.BlockIDFlag;
        blockIDFlagToJSON(object: _180.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _180.SignedMsgType;
        signedMsgTypeToJSON(object: _180.SignedMsgType): string;
        BlockIDFlag: typeof _180.BlockIDFlag;
        BlockIDFlagSDKType: typeof _180.BlockIDFlagSDKType;
        SignedMsgType: typeof _180.SignedMsgType;
        SignedMsgTypeSDKType: typeof _180.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _180.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.PartSetHeader;
            fromJSON(object: any): _180.PartSetHeader;
            toJSON(message: _180.PartSetHeader): unknown;
            fromPartial(object: Partial<_180.PartSetHeader>): _180.PartSetHeader;
        };
        Part: {
            encode(message: _180.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Part;
            fromJSON(object: any): _180.Part;
            toJSON(message: _180.Part): unknown;
            fromPartial(object: Partial<_180.Part>): _180.Part;
        };
        BlockID: {
            encode(message: _180.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.BlockID;
            fromJSON(object: any): _180.BlockID;
            toJSON(message: _180.BlockID): unknown;
            fromPartial(object: Partial<_180.BlockID>): _180.BlockID;
        };
        Header: {
            encode(message: _180.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Header;
            fromJSON(object: any): _180.Header;
            toJSON(message: _180.Header): unknown;
            fromPartial(object: Partial<_180.Header>): _180.Header;
        };
        Data: {
            encode(message: _180.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Data;
            fromJSON(object: any): _180.Data;
            toJSON(message: _180.Data): unknown;
            fromPartial(object: Partial<_180.Data>): _180.Data;
        };
        Vote: {
            encode(message: _180.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Vote;
            fromJSON(object: any): _180.Vote;
            toJSON(message: _180.Vote): unknown;
            fromPartial(object: Partial<_180.Vote>): _180.Vote;
        };
        Commit: {
            encode(message: _180.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Commit;
            fromJSON(object: any): _180.Commit;
            toJSON(message: _180.Commit): unknown;
            fromPartial(object: Partial<_180.Commit>): _180.Commit;
        };
        CommitSig: {
            encode(message: _180.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.CommitSig;
            fromJSON(object: any): _180.CommitSig;
            toJSON(message: _180.CommitSig): unknown;
            fromPartial(object: Partial<_180.CommitSig>): _180.CommitSig;
        };
        Proposal: {
            encode(message: _180.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Proposal;
            fromJSON(object: any): _180.Proposal;
            toJSON(message: _180.Proposal): unknown;
            fromPartial(object: Partial<_180.Proposal>): _180.Proposal;
        };
        SignedHeader: {
            encode(message: _180.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.SignedHeader;
            fromJSON(object: any): _180.SignedHeader;
            toJSON(message: _180.SignedHeader): unknown;
            fromPartial(object: Partial<_180.SignedHeader>): _180.SignedHeader;
        };
        LightBlock: {
            encode(message: _180.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.LightBlock;
            fromJSON(object: any): _180.LightBlock;
            toJSON(message: _180.LightBlock): unknown;
            fromPartial(object: Partial<_180.LightBlock>): _180.LightBlock;
        };
        BlockMeta: {
            encode(message: _180.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.BlockMeta;
            fromJSON(object: any): _180.BlockMeta;
            toJSON(message: _180.BlockMeta): unknown;
            fromPartial(object: Partial<_180.BlockMeta>): _180.BlockMeta;
        };
        TxProof: {
            encode(message: _180.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.TxProof;
            fromJSON(object: any): _180.TxProof;
            toJSON(message: _180.TxProof): unknown;
            fromPartial(object: Partial<_180.TxProof>): _180.TxProof;
        };
        ConsensusParams: {
            encode(message: _179.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConsensusParams;
            fromJSON(object: any): _179.ConsensusParams;
            toJSON(message: _179.ConsensusParams): unknown;
            fromPartial(object: Partial<_179.ConsensusParams>): _179.ConsensusParams;
        };
        BlockParams: {
            encode(message: _179.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.BlockParams;
            fromJSON(object: any): _179.BlockParams;
            toJSON(message: _179.BlockParams): unknown;
            fromPartial(object: Partial<_179.BlockParams>): _179.BlockParams;
        };
        EvidenceParams: {
            encode(message: _179.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.EvidenceParams;
            fromJSON(object: any): _179.EvidenceParams;
            toJSON(message: _179.EvidenceParams): unknown;
            fromPartial(object: Partial<_179.EvidenceParams>): _179.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _179.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ValidatorParams;
            fromJSON(object: any): _179.ValidatorParams;
            toJSON(message: _179.ValidatorParams): unknown;
            fromPartial(object: Partial<_179.ValidatorParams>): _179.ValidatorParams;
        };
        VersionParams: {
            encode(message: _179.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.VersionParams;
            fromJSON(object: any): _179.VersionParams;
            toJSON(message: _179.VersionParams): unknown;
            fromPartial(object: Partial<_179.VersionParams>): _179.VersionParams;
        };
        HashedParams: {
            encode(message: _179.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.HashedParams;
            fromJSON(object: any): _179.HashedParams;
            toJSON(message: _179.HashedParams): unknown;
            fromPartial(object: Partial<_179.HashedParams>): _179.HashedParams;
        };
        Evidence: {
            encode(message: _178.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Evidence;
            fromJSON(object: any): _178.Evidence;
            toJSON(message: _178.Evidence): unknown;
            fromPartial(object: Partial<_178.Evidence>): _178.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _178.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.DuplicateVoteEvidence;
            fromJSON(object: any): _178.DuplicateVoteEvidence;
            toJSON(message: _178.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_178.DuplicateVoteEvidence>): _178.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _178.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.LightClientAttackEvidence;
            fromJSON(object: any): _178.LightClientAttackEvidence;
            toJSON(message: _178.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_178.LightClientAttackEvidence>): _178.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _178.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.EvidenceList;
            fromJSON(object: any): _178.EvidenceList;
            toJSON(message: _178.EvidenceList): unknown;
            fromPartial(object: Partial<_178.EvidenceList>): _178.EvidenceList;
        };
        Block: {
            encode(message: _177.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.Block;
            fromJSON(object: any): _177.Block;
            toJSON(message: _177.Block): unknown;
            fromPartial(object: Partial<_177.Block>): _177.Block;
        };
    };
    const version: {
        App: {
            encode(message: _182.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.App;
            fromJSON(object: any): _182.App;
            toJSON(message: _182.App): unknown;
            fromPartial(object: Partial<_182.App>): _182.App;
        };
        Consensus: {
            encode(message: _182.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Consensus;
            fromJSON(object: any): _182.Consensus;
            toJSON(message: _182.Consensus): unknown;
            fromPartial(object: Partial<_182.Consensus>): _182.Consensus;
        };
    };
}
