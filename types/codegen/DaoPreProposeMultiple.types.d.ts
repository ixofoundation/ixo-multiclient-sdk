/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.26.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Uint128 = string;
export declare type DepositToken = {
    token: {
        denom: UncheckedDenom;
    };
} | {
    voting_module_token: {};
};
export declare type UncheckedDenom = {
    native: string;
} | {
    cw20: string;
};
export declare type DepositRefundPolicy = "always" | "only_passed" | "never";
export interface InstantiateMsg {
    deposit_info?: UncheckedDepositInfo | null;
    extension: Empty;
    open_proposal_submission: boolean;
}
export interface UncheckedDepositInfo {
    amount: Uint128;
    denom: DepositToken;
    refund_policy: DepositRefundPolicy;
}
export interface Empty {
    [k: string]: unknown;
}
export declare type ExecuteMsg = {
    propose: {
        msg: ProposeMessage;
    };
} | {
    update_config: {
        deposit_info?: UncheckedDepositInfo | null;
        open_proposal_submission: boolean;
    };
} | {
    withdraw: {
        denom?: UncheckedDenom | null;
    };
} | {
    extension: {
        msg: Empty;
    };
} | {
    add_proposal_submitted_hook: {
        address: string;
    };
} | {
    remove_proposal_submitted_hook: {
        address: string;
    };
} | {
    proposal_completed_hook: {
        new_status: Status;
        proposal_id: number;
    };
};
export declare type ProposeMessage = {
    propose: {
        choices: MultipleChoiceOptions;
        description: string;
        title: string;
    };
};
export declare type CosmosMsgForEmpty = {
    bank: BankMsg;
} | {
    custom: Empty;
} | {
    staking: StakingMsg;
} | {
    distribution: DistributionMsg;
} | {
    stargate: {
        type_url: string;
        value: Binary;
        [k: string]: unknown;
    };
} | {
    ibc: IbcMsg;
} | {
    wasm: WasmMsg;
} | {
    gov: GovMsg;
};
export declare type BankMsg = {
    send: {
        amount: Coin[];
        to_address: string;
        [k: string]: unknown;
    };
} | {
    burn: {
        amount: Coin[];
        [k: string]: unknown;
    };
};
export declare type StakingMsg = {
    delegate: {
        amount: Coin;
        validator: string;
        [k: string]: unknown;
    };
} | {
    undelegate: {
        amount: Coin;
        validator: string;
        [k: string]: unknown;
    };
} | {
    redelegate: {
        amount: Coin;
        dst_validator: string;
        src_validator: string;
        [k: string]: unknown;
    };
};
export declare type DistributionMsg = {
    set_withdraw_address: {
        address: string;
        [k: string]: unknown;
    };
} | {
    withdraw_delegator_reward: {
        validator: string;
        [k: string]: unknown;
    };
};
export declare type Binary = string;
export declare type IbcMsg = {
    transfer: {
        amount: Coin;
        channel_id: string;
        timeout: IbcTimeout;
        to_address: string;
        [k: string]: unknown;
    };
} | {
    send_packet: {
        channel_id: string;
        data: Binary;
        timeout: IbcTimeout;
        [k: string]: unknown;
    };
} | {
    close_channel: {
        channel_id: string;
        [k: string]: unknown;
    };
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export declare type WasmMsg = {
    execute: {
        contract_addr: string;
        funds: Coin[];
        msg: Binary;
        [k: string]: unknown;
    };
} | {
    instantiate: {
        admin?: string | null;
        code_id: number;
        funds: Coin[];
        label: string;
        msg: Binary;
        [k: string]: unknown;
    };
} | {
    migrate: {
        contract_addr: string;
        msg: Binary;
        new_code_id: number;
        [k: string]: unknown;
    };
} | {
    update_admin: {
        admin: string;
        contract_addr: string;
        [k: string]: unknown;
    };
} | {
    clear_admin: {
        contract_addr: string;
        [k: string]: unknown;
    };
};
export declare type GovMsg = {
    vote: {
        proposal_id: number;
        vote: VoteOption;
        [k: string]: unknown;
    };
};
export declare type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export declare type Status = "open" | "rejected" | "passed" | "executed" | "closed" | "execution_failed";
export interface MultipleChoiceOptions {
    options: MultipleChoiceOption[];
}
export interface MultipleChoiceOption {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
}
export interface Coin {
    amount: Uint128;
    denom: string;
    [k: string]: unknown;
}
export interface IbcTimeout {
    block?: IbcTimeoutBlock | null;
    timestamp?: Timestamp | null;
    [k: string]: unknown;
}
export interface IbcTimeoutBlock {
    height: number;
    revision: number;
    [k: string]: unknown;
}
export declare type QueryMsg = {
    proposal_module: {};
} | {
    dao: {};
} | {
    config: {};
} | {
    deposit_info: {
        proposal_id: number;
    };
} | {
    proposal_submitted_hooks: {};
} | {
    query_extension: {
        msg: Empty;
    };
};
export declare type CheckedDenom = {
    native: string;
} | {
    cw20: Addr;
};
export declare type Addr = string;
export interface Config {
    deposit_info?: CheckedDepositInfo | null;
    open_proposal_submission: boolean;
}
export interface CheckedDepositInfo {
    amount: Uint128;
    denom: CheckedDenom;
    refund_policy: DepositRefundPolicy;
}
export interface DepositInfoResponse {
    deposit_info?: CheckedDepositInfo | null;
    proposer: Addr;
}
export interface HooksResponse {
    hooks: string[];
}
