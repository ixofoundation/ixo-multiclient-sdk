/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Denom, Addr, InstantiateMsg, ExecuteMsg, StakeChangedHookMsg, Uint128, Binary, Action, Expiration, Timestamp, Uint64, Cw20ReceiveMsg, QueryMsg, MigrateMsg, PendingRewardsResponse, InfoResponse, Config, RewardConfig, OwnershipForAddr } from "./Cw20StakeExternalRewards.types";
export interface Cw20StakeExternalRewardsReadOnlyInterface {
  contractAddress: string;
  info: () => Promise<InfoResponse>;
  getPendingRewards: ({
    address
  }: {
    address: string;
  }) => Promise<PendingRewardsResponse>;
  ownership: () => Promise<OwnershipForAddr>;
}
export class Cw20StakeExternalRewardsQueryClient implements Cw20StakeExternalRewardsReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.info = this.info.bind(this);
    this.getPendingRewards = this.getPendingRewards.bind(this);
    this.ownership = this.ownership.bind(this);
  }

  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  getPendingRewards = async ({
    address
  }: {
    address: string;
  }): Promise<PendingRewardsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_pending_rewards: {
        address
      }
    });
  };
  ownership = async (): Promise<OwnershipForAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {}
    });
  };
}
export interface Cw20StakeExternalRewardsInterface extends Cw20StakeExternalRewardsReadOnlyInterface {
  contractAddress: string;
  sender: string;
  stakeChangeHook: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  claim: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  fund: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateRewardDuration: ({
    newDuration
  }: {
    newDuration: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateOwnership: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Cw20StakeExternalRewardsClient extends Cw20StakeExternalRewardsQueryClient implements Cw20StakeExternalRewardsInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.stakeChangeHook = this.stakeChangeHook.bind(this);
    this.claim = this.claim.bind(this);
    this.receive = this.receive.bind(this);
    this.fund = this.fund.bind(this);
    this.updateRewardDuration = this.updateRewardDuration.bind(this);
    this.updateOwnership = this.updateOwnership.bind(this);
  }

  stakeChangeHook = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake_change_hook: {}
    }, fee, memo, funds);
  };
  claim = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim: {}
    }, fee, memo, funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  fund = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      fund: {}
    }, fee, memo, funds);
  };
  updateRewardDuration = async ({
    newDuration
  }: {
    newDuration: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_reward_duration: {
        new_duration: newDuration
      }
    }, fee, memo, funds);
  };
  updateOwnership = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ownership: {}
    }, fee, memo, funds);
  };
}