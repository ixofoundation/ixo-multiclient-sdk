export declare const createQueryClient: (rpcEndpoint: string) => Promise<{
    custom: {
        entity: {
            getEntityContext: ({ entityDid }: {
                entityDid: string;
            }) => Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityDocResponse>;
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
        entity: {
            v1beta1: {
                entityList(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityListRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityListResponse>;
                entityDoc(request: import("../codegen/ixo/entity/v1beta1/query").QueryEntityDocRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityDocResponse>;
                entityConfig(request?: import("../codegen/ixo/entity/v1beta1/query").QueryEntityConfigRequest): Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityConfigResponse>;
            };
        };
        iid: {
            v1beta1: {
                iidDocuments(request: import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentsRequest): Promise<import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentsResponse>;
                iidDocument(request: import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentRequest): Promise<import("../codegen/ixo/iid/v1beta1/query").QueryIidDocumentResponse>;
                metaData(request: import("../codegen/ixo/iid/v1beta1/query").QueryIidMetaDataRequest): Promise<import("../codegen/ixo/iid/v1beta1/query").QueryIidMetaDataResponse>;
            };
        };
        payments: {
            v1: {
                paymentTemplate(request: import("../codegen/ixo/payments/v1/query").QueryPaymentTemplateRequest): Promise<import("../codegen/ixo/payments/v1/query").QueryPaymentTemplateResponse>;
                paymentContract(request: import("../codegen/ixo/payments/v1/query").QueryPaymentContractRequest): Promise<import("../codegen/ixo/payments/v1/query").QueryPaymentContractResponse>;
                paymentContractsByIdPrefix(request: import("../codegen/ixo/payments/v1/query").QueryPaymentContractsByIdPrefixRequest): Promise<import("../codegen/ixo/payments/v1/query").QueryPaymentContractsByIdPrefixResponse>;
                subscription(request: import("../codegen/ixo/payments/v1/query").QuerySubscriptionRequest): Promise<import("../codegen/ixo/payments/v1/query").QuerySubscriptionResponse>;
            };
        };
        project: {
            v1: {
                projectDoc(request: import("../codegen/ixo/project/v1/query").QueryProjectDocRequest): Promise<import("../codegen/ixo/project/v1/query").QueryProjectDocResponse>;
                projectAccounts(request: import("../codegen/ixo/project/v1/query").QueryProjectAccountsRequest): Promise<import("../codegen/ixo/project/v1/query").QueryProjectAccountsResponse>;
                projectTx(request: import("../codegen/ixo/project/v1/query").QueryProjectTxRequest): Promise<import("../codegen/ixo/project/v1/query").QueryProjectTxResponse>;
                params(request?: import("../codegen/ixo/project/v1/query").QueryParamsRequest): Promise<import("../codegen/ixo/project/v1/query").QueryParamsResponse>;
            };
        };
        token: {
            v1beta1: {
                tokenList(request: import("../codegen/ixo/token/v1beta1/query").QueryTokenListRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenListResponse>;
                tokenDoc(request: import("../codegen/ixo/token/v1beta1/query").QueryTokenDocRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenDocResponse>;
                tokenConfig(request?: import("../codegen/ixo/token/v1beta1/query").QueryTokenConfigRequest): Promise<import("../codegen/ixo/token/v1beta1/query").QueryTokenConfigResponse>;
            };
        };
    };
}>;
