export * from "./codegen";
export * from "./codegen_ixo_helpers";
export * as utils from "./utils";
export * from "./stargate_client";
export declare const createQueryClient: (rpcEndpoint?: string) => Promise<{
    ixo: {
        bonds: {
            bonds(request?: import("./codegen_ixo/bonds/query").QueryBondsRequest): Promise<import("./codegen_ixo/bonds/query").QueryBondsResponse>;
            bondsDetailed(request?: import("./codegen_ixo/bonds/query").QueryBondsDetailedRequest): Promise<import("./codegen_ixo/bonds/query").QueryBondsDetailedResponse>;
            params(request?: import("./codegen_ixo/bonds/query").QueryParamsRequest): Promise<import("./codegen_ixo/bonds/query").QueryParamsResponse>;
            bond(request: import("./codegen_ixo/bonds/query").QueryBondRequest): Promise<import("./codegen_ixo/bonds/query").QueryBondResponse>;
            batch(request: import("./codegen_ixo/bonds/query").QueryBatchRequest): Promise<import("./codegen_ixo/bonds/query").QueryBatchResponse>;
            lastBatch(request: import("./codegen_ixo/bonds/query").QueryLastBatchRequest): Promise<import("./codegen_ixo/bonds/query").QueryLastBatchResponse>;
            currentPrice(request: import("./codegen_ixo/bonds/query").QueryCurrentPriceRequest): Promise<import("./codegen_ixo/bonds/query").QueryCurrentPriceResponse>;
            currentReserve(request: import("./codegen_ixo/bonds/query").QueryCurrentReserveRequest): Promise<import("./codegen_ixo/bonds/query").QueryCurrentReserveResponse>;
            availableReserve(request: import("./codegen_ixo/bonds/query").QueryAvailableReserveRequest): Promise<import("./codegen_ixo/bonds/query").QueryAvailableReserveResponse>;
            customPrice(request: import("./codegen_ixo/bonds/query").QueryCustomPriceRequest): Promise<import("./codegen_ixo/bonds/query").QueryCustomPriceResponse>;
            buyPrice(request: import("./codegen_ixo/bonds/query").QueryBuyPriceRequest): Promise<import("./codegen_ixo/bonds/query").QueryBuyPriceResponse>;
            sellReturn(request: import("./codegen_ixo/bonds/query").QuerySellReturnRequest): Promise<import("./codegen_ixo/bonds/query").QuerySellReturnResponse>;
            swapReturn(request: import("./codegen_ixo/bonds/query").QuerySwapReturnRequest): Promise<import("./codegen_ixo/bonds/query").QuerySwapReturnResponse>;
            alphaMaximums(request: import("./codegen_ixo/bonds/query").QueryAlphaMaximumsRequest): Promise<import("./codegen_ixo/bonds/query").QueryAlphaMaximumsResponse>;
        };
        entity: {
            entityList(request: import("./codegen_ixo/entity/query").QueryEntityListRequest): Promise<import("./codegen_ixo/entity/query").QueryEntityListResponse>;
            entityDoc(request: import("./codegen_ixo/entity/query").QueryEntityDocRequest): Promise<import("./codegen_ixo/entity/query").QueryEntityDocResponse>;
            entityConfig(request?: import("./codegen_ixo/entity/query").QueryEntityConfigRequest): Promise<import("./codegen_ixo/entity/query").QueryEntityConfigResponse>;
        };
        iid: {
            iidDocuments(request: import("./codegen_ixo/iid/query").QueryIidDocumentsRequest): Promise<import("./codegen_ixo/iid/query").QueryIidDocumentsResponse>;
            iidDocument(request: import("./codegen_ixo/iid/query").QueryIidDocumentRequest): Promise<import("./codegen_ixo/iid/query").QueryIidDocumentResponse>;
            metaData(request: import("./codegen_ixo/iid/query").QueryIidMetaDataRequest): Promise<import("./codegen_ixo/iid/query").QueryIidMetaDataResponse>;
        };
        payments: {
            paymentTemplate(request: import("./codegen_ixo/payments/query").QueryPaymentTemplateRequest): Promise<import("./codegen_ixo/payments/query").QueryPaymentTemplateResponse>;
            paymentContract(request: import("./codegen_ixo/payments/query").QueryPaymentContractRequest): Promise<import("./codegen_ixo/payments/query").QueryPaymentContractResponse>;
            paymentContractsByIdPrefix(request: import("./codegen_ixo/payments/query").QueryPaymentContractsByIdPrefixRequest): Promise<import("./codegen_ixo/payments/query").QueryPaymentContractsByIdPrefixResponse>;
            subscription(request: import("./codegen_ixo/payments/query").QuerySubscriptionRequest): Promise<import("./codegen_ixo/payments/query").QuerySubscriptionResponse>;
        };
        project: {
            projectDoc(request: import("./codegen_ixo/project/query").QueryProjectDocRequest): Promise<import("./codegen_ixo/project/query").QueryProjectDocResponse>;
            projectAccounts(request: import("./codegen_ixo/project/query").QueryProjectAccountsRequest): Promise<import("./codegen_ixo/project/query").QueryProjectAccountsResponse>;
            projectTx(request: import("./codegen_ixo/project/query").QueryProjectTxRequest): Promise<import("./codegen_ixo/project/query").QueryProjectTxResponse>;
            params(request?: import("./codegen_ixo/project/query").QueryParamsRequest): Promise<import("./codegen_ixo/project/query").QueryParamsResponse>;
        };
    };
    cosmos: {
        app: {
            v1alpha1: {
                config(request?: import("./codegen/cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("./codegen/cosmos/app/v1alpha1/query").QueryConfigResponse>;
            };
        };
        auth: {
            v1beta1: {
                accounts(request?: import("./codegen/cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("./codegen/cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("./codegen/cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("./codegen/cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                bech32Prefix(request?: import("./codegen/cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("./codegen/cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("./codegen/cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("./codegen/cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("./codegen/cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("./codegen/cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("./codegen/cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("./codegen/cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("./codegen/cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("./codegen/cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("./codegen/cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("./codegen/cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("./codegen/cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("./codegen/cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("./codegen/cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("./codegen/cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("./codegen/cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("./codegen/cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("./codegen/cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("./codegen/cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("./codegen/cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("./codegen/cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("./codegen/cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("./codegen/cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("./codegen/cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        evidence: {
            v1beta1: {
                evidence(request: import("./codegen/cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("./codegen/cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                allEvidence(request?: import("./codegen/cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("./codegen/cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("./codegen/cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("./codegen/cosmos/gov/v1/query").QueryProposalRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryProposalResponse>;
                proposals(request: import("./codegen/cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryProposalsResponse>;
                vote(request: import("./codegen/cosmos/gov/v1/query").QueryVoteRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryVoteResponse>;
                votes(request: import("./codegen/cosmos/gov/v1/query").QueryVotesRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryVotesResponse>;
                params(request: import("./codegen/cosmos/gov/v1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryParamsResponse>;
                deposit(request: import("./codegen/cosmos/gov/v1/query").QueryDepositRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryDepositResponse>;
                deposits(request: import("./codegen/cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("./codegen/cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("./codegen/cosmos/gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("./codegen/cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("./codegen/cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("./codegen/cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("./codegen/cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("./codegen/cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("./codegen/cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("./codegen/cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("./codegen/cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("./codegen/cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("./codegen/cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("./codegen/cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("./codegen/cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("./codegen/cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("./codegen/cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("./codegen/cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("./codegen/cosmos/group/v1/query").QueryProposalRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("./codegen/cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("./codegen/cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("./codegen/cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("./codegen/cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("./codegen/cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("./codegen/cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("./codegen/cosmos/group/v1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("./codegen/cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("./codegen/cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("./codegen/cosmos/mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("./codegen/cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("./codegen/cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        nft: {
            v1beta1: {
                balance(request: import("./codegen/cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                owner(request: import("./codegen/cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                supply(request: import("./codegen/cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                nFTs(request: import("./codegen/cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                nFT(request: import("./codegen/cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryNFTResponse>;
                class(request: import("./codegen/cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryClassResponse>;
                classes(request?: import("./codegen/cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("./codegen/cosmos/nft/v1beta1/query").QueryClassesResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("./codegen/cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("./codegen/cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("./codegen/cosmos/params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        slashing: {
            v1beta1: {
                params(request?: import("./codegen/cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                signingInfo(request: import("./codegen/cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("./codegen/cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                signingInfos(request?: import("./codegen/cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("./codegen/cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("./codegen/cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("./codegen/cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("./codegen/cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("./codegen/cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("./codegen/cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("./codegen/cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("./codegen/cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("./codegen/cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("./codegen/cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("./codegen/cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("./codegen/cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("./codegen/cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("./codegen/cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("./codegen/cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("./codegen/cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("./codegen/cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("./codegen/cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("./codegen/cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("./codegen/cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("./codegen/cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("./codegen/cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("./codegen/cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("./codegen/cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("./codegen/cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("./codegen/cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("./codegen/cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("./codegen/cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
}>;
