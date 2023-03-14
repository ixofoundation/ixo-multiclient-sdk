export declare const createQueryClient: (rpcEndpoint: string) => Promise<{
    custom: {
        entity: {
            getEntityContext: ({ id }: {
                id: string;
            }) => Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityResponse>;
        };
    };
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("../codegen/cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../codegen/cosmos/app/v1alpha1/query").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("../codegen/cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../codegen/cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("../codegen/cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../codegen/cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                bech32Prefix(request?: import("../codegen/cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("../codegen/cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../codegen/cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../codegen/cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../codegen/cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../codegen/cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../codegen/cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../codegen/cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../codegen/cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../codegen/cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../codegen/cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../codegen/cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../codegen/cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../codegen/cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../codegen/cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../codegen/cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../codegen/cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../codegen/cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../codegen/cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../codegen/cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../codegen/cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../codegen/cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../codegen/cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../codegen/cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../codegen/cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("../codegen/cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../codegen/cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("../codegen/cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../codegen/cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("../codegen/cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryProposalResponse>;
                proposals(request: import("../codegen/cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryProposalsResponse>;
                vote(request: import("../codegen/cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryVoteResponse>;
                votes(request: import("../codegen/cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryVotesResponse>;
                params(request: import("../codegen/cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryParamsResponse>;
                deposit(request: import("../codegen/cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryDepositResponse>;
                deposits(request: import("../codegen/cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("../codegen/cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../codegen/cosmos/gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("../codegen/cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../codegen/cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../codegen/cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../codegen/cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../codegen/cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../codegen/cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../codegen/cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../codegen/cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../codegen/cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("../codegen/cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("../codegen/cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("../codegen/cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("../codegen/cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("../codegen/cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("../codegen/cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("../codegen/cosmos/group/v1/query").QueryProposalRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("../codegen/cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("../codegen/cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("../codegen/cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("../codegen/cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("../codegen/cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("../codegen/cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../codegen/cosmos/group/v1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("../codegen/cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("../codegen/cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../codegen/cosmos/mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("../codegen/cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../codegen/cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("../codegen/cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                owner(request: import("../codegen/cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                supply(request: import("../codegen/cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                nFTs(request: import("../codegen/cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                nFT(request: import("../codegen/cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryNFTResponse>;
                class(request: import("../codegen/cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryClassResponse>;
                classes(request?: import("../codegen/cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../codegen/cosmos/nft/v1beta1/query").QueryClassesResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("../codegen/cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("../codegen/cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../codegen/cosmos/params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("../codegen/cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("../codegen/cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../codegen/cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("../codegen/cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../codegen/cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../codegen/cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../codegen/cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../codegen/cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../codegen/cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../codegen/cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../codegen/cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../codegen/cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../codegen/cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../codegen/cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../codegen/cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../codegen/cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../codegen/cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../codegen/cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../codegen/cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../codegen/cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../codegen/cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../codegen/cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../codegen/cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../codegen/cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../codegen/cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../codegen/cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../codegen/cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../codegen/cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../codegen/cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../codegen/cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../codegen/cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                contractInfo(request: import("../codegen/cosmwasm/wasm/v1/query").QueryContractInfoRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryContractInfoResponse>;
                contractHistory(request: import("../codegen/cosmwasm/wasm/v1/query").QueryContractHistoryRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryContractHistoryResponse>;
                contractsByCode(request: import("../codegen/cosmwasm/wasm/v1/query").QueryContractsByCodeRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>;
                allContractState(request: import("../codegen/cosmwasm/wasm/v1/query").QueryAllContractStateRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryAllContractStateResponse>;
                rawContractState(request: import("../codegen/cosmwasm/wasm/v1/query").QueryRawContractStateRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryRawContractStateResponse>;
                smartContractState(request: import("../codegen/cosmwasm/wasm/v1/query").QuerySmartContractStateRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>;
                code(request: import("../codegen/cosmwasm/wasm/v1/query").QueryCodeRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryCodeResponse>;
                codes(request?: import("../codegen/cosmwasm/wasm/v1/query").QueryCodesRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryCodesResponse>;
                pinnedCodes(request?: import("../codegen/cosmwasm/wasm/v1/query").QueryPinnedCodesRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>;
                params(request?: import("../codegen/cosmwasm/wasm/v1/query").QueryParamsRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryParamsResponse>;
                contractsByCreator(request: import("../codegen/cosmwasm/wasm/v1/query").QueryContractsByCreatorRequest): Promise<import("../codegen/cosmwasm/wasm/v1/query").QueryContractsByCreatorResponse>;
            };
        };
    };
    ibc: {
        applications: {
            fee: {
                v1: {
                    incentivizedPackets(request: import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketsRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketsForChannelRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: import("../codegen/ibc/applications/fee/v1/query").QueryTotalRecvFeesRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryTotalRecvFeesResponse>;
                    totalAckFees(request: import("../codegen/ibc/applications/fee/v1/query").QueryTotalAckFeesRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: import("../codegen/ibc/applications/fee/v1/query").QueryTotalTimeoutFeesRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryTotalTimeoutFeesResponse>;
                    payee(request: import("../codegen/ibc/applications/fee/v1/query").QueryPayeeRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryPayeeResponse>;
                    counterpartyPayee(request: import("../codegen/ibc/applications/fee/v1/query").QueryCounterpartyPayeeRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: import("../codegen/ibc/applications/fee/v1/query").QueryFeeEnabledChannelsRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: import("../codegen/ibc/applications/fee/v1/query").QueryFeeEnabledChannelRequest): Promise<import("../codegen/ibc/applications/fee/v1/query").QueryFeeEnabledChannelResponse>;
                };
            };
            interchain_accounts: {
                controller: {
                    v1: {
                        interchainAccount(request: import("../codegen/ibc/applications/interchain_accounts/controller/v1/query").QueryInterchainAccountRequest): Promise<import("../codegen/ibc/applications/interchain_accounts/controller/v1/query").QueryInterchainAccountResponse>;
                        params(request?: import("../codegen/ibc/applications/interchain_accounts/controller/v1/query").QueryParamsRequest): Promise<import("../codegen/ibc/applications/interchain_accounts/controller/v1/query").QueryParamsResponse>;
                    };
                };
                host: {
                    v1: {
                        params(request?: import("../codegen/ibc/applications/interchain_accounts/host/v1/query").QueryParamsRequest): Promise<import("../codegen/ibc/applications/interchain_accounts/host/v1/query").QueryParamsResponse>;
                    };
                };
            };
            transfer: {
                v1: {
                    denomTrace(request: import("../codegen/ibc/applications/transfer/v1/query").QueryDenomTraceRequest): Promise<import("../codegen/ibc/applications/transfer/v1/query").QueryDenomTraceResponse>;
                    denomTraces(request?: import("../codegen/ibc/applications/transfer/v1/query").QueryDenomTracesRequest): Promise<import("../codegen/ibc/applications/transfer/v1/query").QueryDenomTracesResponse>;
                    params(request?: import("../codegen/ibc/applications/transfer/v1/query").QueryParamsRequest): Promise<import("../codegen/ibc/applications/transfer/v1/query").QueryParamsResponse>;
                    denomHash(request: import("../codegen/ibc/applications/transfer/v1/query").QueryDenomHashRequest): Promise<import("../codegen/ibc/applications/transfer/v1/query").QueryDenomHashResponse>;
                    escrowAddress(request: import("../codegen/ibc/applications/transfer/v1/query").QueryEscrowAddressRequest): Promise<import("../codegen/ibc/applications/transfer/v1/query").QueryEscrowAddressResponse>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    channel(request: import("../codegen/ibc/core/channel/v1/query").QueryChannelRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryChannelResponse>;
                    channels(request?: import("../codegen/ibc/core/channel/v1/query").QueryChannelsRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryChannelsResponse>;
                    connectionChannels(request: import("../codegen/ibc/core/channel/v1/query").QueryConnectionChannelsRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryConnectionChannelsResponse>;
                    channelClientState(request: import("../codegen/ibc/core/channel/v1/query").QueryChannelClientStateRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryChannelClientStateResponse>;
                    channelConsensusState(request: import("../codegen/ibc/core/channel/v1/query").QueryChannelConsensusStateRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>;
                    packetCommitment(request: import("../codegen/ibc/core/channel/v1/query").QueryPacketCommitmentRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryPacketCommitmentResponse>;
                    packetCommitments(request: import("../codegen/ibc/core/channel/v1/query").QueryPacketCommitmentsRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>;
                    packetReceipt(request: import("../codegen/ibc/core/channel/v1/query").QueryPacketReceiptRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: import("../codegen/ibc/core/channel/v1/query").QueryPacketAcknowledgementRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: import("../codegen/ibc/core/channel/v1/query").QueryPacketAcknowledgementsRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: import("../codegen/ibc/core/channel/v1/query").QueryUnreceivedPacketsRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: import("../codegen/ibc/core/channel/v1/query").QueryUnreceivedAcksRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: import("../codegen/ibc/core/channel/v1/query").QueryNextSequenceReceiveRequest): Promise<import("../codegen/ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>;
                };
            };
            client: {
                v1: {
                    clientState(request: import("../codegen/ibc/core/client/v1/query").QueryClientStateRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryClientStateResponse>;
                    clientStates(request?: import("../codegen/ibc/core/client/v1/query").QueryClientStatesRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryClientStatesResponse>;
                    consensusState(request: import("../codegen/ibc/core/client/v1/query").QueryConsensusStateRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryConsensusStateResponse>;
                    consensusStates(request: import("../codegen/ibc/core/client/v1/query").QueryConsensusStatesRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryConsensusStatesResponse>;
                    consensusStateHeights(request: import("../codegen/ibc/core/client/v1/query").QueryConsensusStateHeightsRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryConsensusStateHeightsResponse>;
                    clientStatus(request: import("../codegen/ibc/core/client/v1/query").QueryClientStatusRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryClientStatusResponse>;
                    clientParams(request?: import("../codegen/ibc/core/client/v1/query").QueryClientParamsRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryClientParamsResponse>;
                    upgradedClientState(request?: import("../codegen/ibc/core/client/v1/query").QueryUpgradedClientStateRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: import("../codegen/ibc/core/client/v1/query").QueryUpgradedConsensusStateRequest): Promise<import("../codegen/ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>;
                };
            };
            connection: {
                v1: {
                    connection(request: import("../codegen/ibc/core/connection/v1/query").QueryConnectionRequest): Promise<import("../codegen/ibc/core/connection/v1/query").QueryConnectionResponse>;
                    connections(request?: import("../codegen/ibc/core/connection/v1/query").QueryConnectionsRequest): Promise<import("../codegen/ibc/core/connection/v1/query").QueryConnectionsResponse>;
                    clientConnections(request: import("../codegen/ibc/core/connection/v1/query").QueryClientConnectionsRequest): Promise<import("../codegen/ibc/core/connection/v1/query").QueryClientConnectionsResponse>;
                    connectionClientState(request: import("../codegen/ibc/core/connection/v1/query").QueryConnectionClientStateRequest): Promise<import("../codegen/ibc/core/connection/v1/query").QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: import("../codegen/ibc/core/connection/v1/query").QueryConnectionConsensusStateRequest): Promise<import("../codegen/ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>;
                };
            };
        };
    };
    ica: {
        intertx: {
            interchainAccount(request: import("../codegen/ica/intertx/query").QueryInterchainAccountRequest): Promise<import("../codegen/ica/intertx/query").QueryInterchainAccountResponse>;
        };
    };
    ixo: {
        bonds: {
            v1beta1: {
                bonds(request?: import("../codegen/ixo/bonds/v1beta1/query").QueryBondsRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryBondsResponse>;
                bondsDetailed(request?: import("../codegen/ixo/bonds/v1beta1/query").QueryBondsDetailedRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryBondsDetailedResponse>;
                params(request?: import("../codegen/ixo/bonds/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryParamsResponse>;
                bond(request: import("../codegen/ixo/bonds/v1beta1/query").QueryBondRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryBondResponse>;
                batch(request: import("../codegen/ixo/bonds/v1beta1/query").QueryBatchRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryBatchResponse>;
                lastBatch(request: import("../codegen/ixo/bonds/v1beta1/query").QueryLastBatchRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryLastBatchResponse>;
                currentPrice(request: import("../codegen/ixo/bonds/v1beta1/query").QueryCurrentPriceRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryCurrentPriceResponse>;
                currentReserve(request: import("../codegen/ixo/bonds/v1beta1/query").QueryCurrentReserveRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryCurrentReserveResponse>;
                availableReserve(request: import("../codegen/ixo/bonds/v1beta1/query").QueryAvailableReserveRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryAvailableReserveResponse>;
                customPrice(request: import("../codegen/ixo/bonds/v1beta1/query").QueryCustomPriceRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryCustomPriceResponse>;
                buyPrice(request: import("../codegen/ixo/bonds/v1beta1/query").QueryBuyPriceRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryBuyPriceResponse>;
                sellReturn(request: import("../codegen/ixo/bonds/v1beta1/query").QuerySellReturnRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QuerySellReturnResponse>;
                swapReturn(request: import("../codegen/ixo/bonds/v1beta1/query").QuerySwapReturnRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QuerySwapReturnResponse>;
                alphaMaximums(request: import("../codegen/ixo/bonds/v1beta1/query").QueryAlphaMaximumsRequest): Promise<import("../codegen/ixo/bonds/v1beta1/query").QueryAlphaMaximumsResponse>;
            };
        };
        claims: {
            v1beta1: {
                params(request?: import("../codegen/ixo/claims/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryParamsResponse>;
                collection(request: import("../codegen/ixo/claims/v1beta1/query").QueryCollectionRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryCollectionResponse>;
                collectionList(request?: import("../codegen/ixo/claims/v1beta1/query").QueryCollectionListRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryCollectionListResponse>;
                claim(request: import("../codegen/ixo/claims/v1beta1/query").QueryClaimRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryClaimResponse>;
                claimList(request?: import("../codegen/ixo/claims/v1beta1/query").QueryClaimListRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryClaimListResponse>;
                dispute(request: import("../codegen/ixo/claims/v1beta1/query").QueryDisputeRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryDisputeResponse>;
                disputeList(request?: import("../codegen/ixo/claims/v1beta1/query").QueryDisputeListRequest): Promise<import("../codegen/ixo/claims/v1beta1/query").QueryDisputeListResponse>;
            };
        };
        entity: {
            v1beta1: {
                params(request?: import("../codegen/ixo/entity/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryParamsResponse>;
                entity(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityResponse>;
                entityMetaData(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityMetadataRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityMetadataResponse>;
                entityIidDocument(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityIidDocumentRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityIidDocumentResponse>;
                entityVerified(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityVerifiedRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityVerifiedResponse>;
                entityList(request?: import("../codegen/ixo/entity/v1beta1/query").QueryEntityListRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityListResponse>;
            };
        };
        iid: {
            v1beta1: {
                iidDocuments(request?: import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentsRequest): Promise<import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentsResponse>;
                iidDocument(request: import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentRequest): Promise<import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentResponse>;
            };
        };
        token: {
            v1beta1: {
                params(request?: import("../codegen/ixo/token/v1beta1/query").QueryParamsRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryParamsResponse>;
                tokenList(request: import("../codegen/ixo/token/v1beta1/query").QueryTokenListRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenListResponse>;
                tokenDoc(request: import("../codegen/ixo/token/v1beta1/query").QueryTokenDocRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenDocResponse>;
                tokenMetadata(request: import("../codegen/ixo/token/v1beta1/query").QueryTokenMetadataRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenMetadataResponse>;
            };
        };
    };
}>;
export declare type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
