import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOption {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare const VoteOptionSDKType: typeof VoteOption;
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    PROPOSAL_STATUS_PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    PROPOSAL_STATUS_REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
export declare const ProposalStatusSDKType: typeof ProposalStatus;
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
    /** option defines the valid vote options, it must not contain duplicate vote options. */
    option: VoteOption;
    /** weight is the vote weight associated with the vote option. */
    weight: string;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOptionSDKType {
    option: VoteOption;
    weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** amount to be deposited by depositor. */
    amount: Coin[];
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
    proposal_id: Long;
    depositor: string;
    amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
    /** id defines the unique id of the proposal. */
    id: Long;
    /** messages are the arbitrary messages to be executed if the proposal passes. */
    messages: Any[];
    /** status defines the proposal status. */
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    finalTallyResult?: TallyResult;
    /** submit_time is the time of proposal submission. */
    submitTime?: Timestamp;
    /** deposit_end_time is the end time for deposition. */
    depositEndTime?: Timestamp;
    /** total_deposit is the total deposit on the proposal. */
    totalDeposit: Coin[];
    /** voting_start_time is the starting time to vote on a proposal. */
    votingStartTime?: Timestamp;
    /** voting_end_time is the end time of voting on a proposal. */
    votingEndTime?: Timestamp;
    /**
     * metadata is any arbitrary metadata attached to the proposal.
     * the recommended format of the metadata is to be found here:
     * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
     */
    metadata: string;
    /**
     * title is the title of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    title: string;
    /**
     * summary is a short summary of the proposal
     *
     * Since: cosmos-sdk 0.47
     */
    summary: string;
    /**
     * proposer is the address of the proposal sumbitter
     *
     * Since: cosmos-sdk 0.47
     */
    proposer: string;
    /**
     * expedited defines if the proposal is expedited
     *
     * Since: cosmos-sdk 0.50
     */
    expedited: boolean;
    /**
     * failed_reason defines the reason why the proposal failed
     *
     * Since: cosmos-sdk 0.50
     */
    failedReason: string;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
    id: Long;
    messages: AnySDKType[];
    status: ProposalStatus;
    final_tally_result?: TallyResultSDKType;
    submit_time?: TimestampSDKType;
    deposit_end_time?: TimestampSDKType;
    total_deposit: CoinSDKType[];
    voting_start_time?: TimestampSDKType;
    voting_end_time?: TimestampSDKType;
    metadata: string;
    title: string;
    summary: string;
    proposer: string;
    expedited: boolean;
    failed_reason: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
    /** yes_count is the number of yes votes on a proposal. */
    yesCount: string;
    /** abstain_count is the number of abstain votes on a proposal. */
    abstainCount: string;
    /** no_count is the number of no votes on a proposal. */
    noCount: string;
    /** no_with_veto_count is the number of no with veto votes on a proposal. */
    noWithVetoCount: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: Long;
    /** voter is the voter address of the proposal. */
    voter: string;
    /** options is the weighted vote options. */
    options: WeightedVoteOption[];
    /**
     * metadata is any arbitrary metadata attached to the vote.
     * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5
     */
    metadata: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
    proposal_id: Long;
    voter: string;
    options: WeightedVoteOptionSDKType[];
    metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParams {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    maxDepositPeriod?: Duration;
}
/** DepositParams defines the params for deposits on governance proposals. */
/** @deprecated */
export interface DepositParamsSDKType {
    min_deposit: CoinSDKType[];
    max_deposit_period?: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParams {
    /** Duration of the voting period. */
    votingPeriod?: Duration;
}
/** VotingParams defines the params for voting on governance proposals. */
/** @deprecated */
export interface VotingParamsSDKType {
    voting_period?: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParams {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     * considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     * vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
/** @deprecated */
export interface TallyParamsSDKType {
    quorum: string;
    threshold: string;
    veto_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface Params {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     */
    maxDepositPeriod?: Duration;
    /** Duration of the voting period. */
    votingPeriod?: Duration;
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    vetoThreshold: string;
    /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
    minInitialDepositRatio: string;
    /**
     * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
     *
     * Since: cosmos-sdk 0.50
     */
    proposalCancelRatio: string;
    /**
     * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
     * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
     *
     * Since: cosmos-sdk 0.50
     */
    proposalCancelDest: string;
    /**
     * Duration of the voting period of an expedited proposal.
     *
     * Since: cosmos-sdk 0.50
     */
    expeditedVotingPeriod?: Duration;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
     *
     * Since: cosmos-sdk 0.50
     */
    expeditedThreshold: string;
    /** Minimum expedited deposit for a proposal to enter voting period. */
    expeditedMinDeposit: Coin[];
    /** burn deposits if a proposal does not meet quorum */
    burnVoteQuorum: boolean;
    /** burn deposits if the proposal does not enter voting period */
    burnProposalDepositPrevote: boolean;
    /** burn deposits if quorum with vote type no_veto is met */
    burnVoteVeto: boolean;
    /**
     * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
     * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
     * required.
     *
     * Since: cosmos-sdk 0.50
     */
    minDepositRatio: string;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ParamsSDKType {
    min_deposit: CoinSDKType[];
    max_deposit_period?: DurationSDKType;
    voting_period?: DurationSDKType;
    quorum: string;
    threshold: string;
    veto_threshold: string;
    min_initial_deposit_ratio: string;
    proposal_cancel_ratio: string;
    proposal_cancel_dest: string;
    expedited_voting_period?: DurationSDKType;
    expedited_threshold: string;
    expedited_min_deposit: CoinSDKType[];
    burn_vote_quorum: boolean;
    burn_proposal_deposit_prevote: boolean;
    burn_vote_veto: boolean;
    min_deposit_ratio: string;
}
export declare const WeightedVoteOption: {
    encode(message: WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption;
    fromJSON(object: any): WeightedVoteOption;
    toJSON(message: WeightedVoteOption): unknown;
    fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromJSON(object: any): Deposit;
    toJSON(message: Deposit): unknown;
    fromPartial(object: Partial<Deposit>): Deposit;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: Partial<Proposal>): Proposal;
};
export declare const TallyResult: {
    encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
    fromJSON(object: any): TallyResult;
    toJSON(message: TallyResult): unknown;
    fromPartial(object: Partial<TallyResult>): TallyResult;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: Partial<Vote>): Vote;
};
export declare const DepositParams: {
    encode(message: DepositParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams;
    fromJSON(object: any): DepositParams;
    toJSON(message: DepositParams): unknown;
    fromPartial(object: Partial<DepositParams>): DepositParams;
};
export declare const VotingParams: {
    encode(message: VotingParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams;
    fromJSON(object: any): VotingParams;
    toJSON(message: VotingParams): unknown;
    fromPartial(object: Partial<VotingParams>): VotingParams;
};
export declare const TallyParams: {
    encode(message: TallyParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams;
    fromJSON(object: any): TallyParams;
    toJSON(message: TallyParams): unknown;
    fromPartial(object: Partial<TallyParams>): TallyParams;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
