import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { ixo, cosmwasm, cosmos, ibc } from "../codegen";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // tx
  ["/cosmos.tx.v1beta1.Tx", cosmos.tx.v1beta1.Tx],

  // auth
  ["/cosmos.auth.v1beta1.BaseAccount", cosmos.auth.v1beta1.BaseAccount],
  ["/cosmos.auth.v1beta1.ModuleAccount", cosmos.auth.v1beta1.ModuleAccount],
  ["/cosmos.auth.v1beta1.MsgUpdateParams", cosmos.auth.v1beta1.MsgUpdateParams],

  // authz
  ["/cosmos.authz.v1beta1.MsgExec", cosmos.authz.v1beta1.MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", cosmos.authz.v1beta1.MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", cosmos.authz.v1beta1.MsgRevoke],
  [
    "/cosmos.authz.v1beta1.GenericAuthorization",
    cosmos.authz.v1beta1.GenericAuthorization,
  ],

  // bank
  ["/cosmos.bank.v1beta1.MsgMultiSend", cosmos.bank.v1beta1.MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", cosmos.bank.v1beta1.MsgSend],
  [
    "/cosmos.bank.v1beta1.SendAuthorization",
    cosmos.bank.v1beta1.SendAuthorization,
  ],
  ["/cosmos.bank.v1beta1.MsgUpdateParams", cosmos.bank.v1beta1.MsgUpdateParams],
  [
    "/cosmos.bank.v1beta1.MsgSetSendEnabled",
    cosmos.bank.v1beta1.MsgSetSendEnabled,
  ],

  // base
  ["/cosmos.base.v1beta1.Coin", cosmos.base.v1beta1.Coin],

  // circuit breaker
  [
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    cosmos.circuit.v1.MsgAuthorizeCircuitBreaker,
  ],
  [
    "/cosmos.circuit.v1.MsgTripCircuitBreaker",
    cosmos.circuit.v1.MsgTripCircuitBreaker,
  ],
  [
    "/cosmos.circuit.v1.MsgResetCircuitBreaker",
    cosmos.circuit.v1.MsgResetCircuitBreaker,
  ],

  // consensus
  ["/cosmos.consensus.v1.MsgUpdateParams", cosmos.consensus.v1.MsgUpdateParams],

  // crisis
  [
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    cosmos.crisis.v1beta1.MsgVerifyInvariant,
  ],
  [
    "/cosmos.crisis.v1beta1.MsgUpdateParams",
    cosmos.crisis.v1beta1.MsgUpdateParams,
  ],

  // distribution
  [
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    cosmos.distribution.v1beta1.MsgFundCommunityPool,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
    cosmos.distribution.v1beta1.MsgCommunityPoolSpend,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
    cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgUpdateParams",
    cosmos.distribution.v1beta1.MsgUpdateParams,
  ],

  // evidence
  [
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    cosmos.evidence.v1beta1.MsgSubmitEvidence,
  ],

  // feegrant
  [
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    cosmos.feegrant.v1beta1.MsgGrantAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    cosmos.feegrant.v1beta1.MsgRevokeAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.BasicAllowance",
    cosmos.feegrant.v1beta1.BasicAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    cosmos.feegrant.v1beta1.PeriodicAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
    cosmos.feegrant.v1beta1.MsgPruneAllowances,
  ],

  // gov
  ["/cosmos.gov.v1beta1.MsgDeposit", cosmos.gov.v1beta1.MsgDeposit],
  [
    "/cosmos.gov.v1beta1.MsgSubmitProposal",
    cosmos.gov.v1beta1.MsgSubmitProposal,
  ],
  ["/cosmos.gov.v1beta1.MsgVote", cosmos.gov.v1beta1.MsgVote],
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", cosmos.gov.v1beta1.MsgVoteWeighted],
  ["/cosmos.gov.v1.MsgSubmitProposal", cosmos.gov.v1.MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgVote", cosmos.gov.v1.MsgVote],
  ["/cosmos.gov.v1.MsgVoteWeighted", cosmos.gov.v1.MsgVoteWeighted],
  ["/cosmos.gov.v1.MsgDeposit", cosmos.gov.v1.MsgDeposit],
  ["/cosmos.gov.v1.MsgExecLegacyContent", cosmos.gov.v1.MsgExecLegacyContent],
  ["/cosmos.gov.v1.MsgCancelProposal", cosmos.gov.v1.MsgCancelProposal],

  // mint
  ["/cosmos.mint.v1beta1.MsgUpdateParams", cosmos.mint.v1beta1.MsgUpdateParams],

  // slashing
  ["/cosmos.slashing.v1beta1.MsgUnjail", cosmos.slashing.v1beta1.MsgUnjail],
  [
    "/cosmos.slashing.v1beta1.MsgUpdateParams",
    cosmos.slashing.v1beta1.MsgUpdateParams,
  ],

  // staking
  [
    "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    cosmos.staking.v1beta1.MsgBeginRedelegate,
  ],
  [
    "/cosmos.staking.v1beta1.MsgCreateValidator",
    cosmos.staking.v1beta1.MsgCreateValidator,
  ],
  ["/cosmos.staking.v1beta1.MsgDelegate", cosmos.staking.v1beta1.MsgDelegate],
  [
    "/cosmos.staking.v1beta1.MsgEditValidator",
    cosmos.staking.v1beta1.MsgEditValidator,
  ],
  [
    "/cosmos.staking.v1beta1.MsgUndelegate",
    cosmos.staking.v1beta1.MsgUndelegate,
  ],
  [
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
    cosmos.staking.v1beta1.MsgCancelUnbondingDelegation,
  ],
  [
    "/cosmos.staking.v1beta1.MsgUpdateParams",
    cosmos.staking.v1beta1.MsgUpdateParams,
  ],

  // upgrade
  [
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
    cosmos.upgrade.v1beta1.MsgCancelUpgrade,
  ],
  [
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
    cosmos.upgrade.v1beta1.MsgSoftwareUpgrade,
  ],

  // vesting
  [
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    cosmos.vesting.v1beta1.MsgCreateVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
    cosmos.vesting.v1beta1.ContinuousVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.DelayedVestingAccount",
    cosmos.vesting.v1beta1.DelayedVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.BaseVestingAccount",
    cosmos.vesting.v1beta1.BaseVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
    cosmos.vesting.v1beta1.PeriodicVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.PermanentLockedAccount",
    cosmos.vesting.v1beta1.PermanentLockedAccount,
  ],

  // ibc
  // -----------------------------------------------------------------------------
  [
    "/ibc.applications.transfer.v1.MsgTransfer",
    ibc.applications.transfer.v1.MsgTransfer,
  ],
  [
    "/ibc.applications.transfer.v1.MsgUpdateParams",
    ibc.applications.transfer.v1.MsgUpdateParams,
  ],
  ["/ibc.core.client.v1.MsgCreateClient", ibc.core.client.v1.MsgCreateClient],
  [
    "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    ibc.core.client.v1.MsgSubmitMisbehaviour,
  ],
  ["/ibc.core.client.v1.MsgUpdateClient", ibc.core.client.v1.MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", ibc.core.client.v1.MsgUpgradeClient],
  [
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
    ibc.core.client.v1.MsgIBCSoftwareUpgrade,
  ],
  ["/ibc.core.client.v1.MsgRecoverClient", ibc.core.client.v1.MsgRecoverClient],
  ["/ibc.core.client.v1.MsgUpdateParams", ibc.core.client.v1.MsgUpdateParams],

  // ibc interchain accounts
  // -----------------------------------------------------------------------------
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    ibc.applications.interchain_accounts.controller.v1
      .MsgRegisterInterchainAccount,
  ],
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
    ibc.applications.interchain_accounts.controller.v1.MsgSendTx,
  ],
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
    ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams,
  ],
  [
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
    ibc.applications.interchain_accounts.host.v1.MsgUpdateParams,
  ],

  // cosmwasm
  // -----------------------------------------------------------------------------
  ["/cosmwasm.wasm.v1.MsgStoreCode", cosmwasm.wasm.v1.MsgStoreCode],
  [
    "/cosmwasm.wasm.v1.MsgInstantiateContract",
    cosmwasm.wasm.v1.MsgInstantiateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgInstantiateContract2",
    cosmwasm.wasm.v1.MsgInstantiateContract2,
  ],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", cosmwasm.wasm.v1.MsgExecuteContract],
  ["/cosmwasm.wasm.v1.MsgMigrateContract", cosmwasm.wasm.v1.MsgMigrateContract],
  ["/cosmwasm.wasm.v1.MsgUpdateAdmin", cosmwasm.wasm.v1.MsgUpdateAdmin],
  ["/cosmwasm.wasm.v1.MsgClearAdmin", cosmwasm.wasm.v1.MsgClearAdmin],
  [
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
    cosmwasm.wasm.v1.MsgUpdateInstantiateConfig,
  ],
  ["/cosmwasm.wasm.v1.MsgUpdateParams", cosmwasm.wasm.v1.MsgUpdateParams],
  ["/cosmwasm.wasm.v1.MsgSudoContract", cosmwasm.wasm.v1.MsgSudoContract],
  ["/cosmwasm.wasm.v1.MsgPinCodes", cosmwasm.wasm.v1.MsgPinCodes],
  ["/cosmwasm.wasm.v1.MsgUnpinCodes", cosmwasm.wasm.v1.MsgUnpinCodes],
  [
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
    cosmwasm.wasm.v1.MsgStoreAndInstantiateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
    cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses,
  ],
  [
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
    cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses,
  ],
  [
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
    cosmwasm.wasm.v1.MsgStoreAndMigrateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
    cosmwasm.wasm.v1.MsgUpdateContractLabel,
  ],
];

export const createRegistry = (): Registry => {
  const myRegistry = new Registry(defaultRegistryTypes);

  // Ixo Iid module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgCreateIidDocument",
    ixo.iid.v1beta1.MsgCreateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgUpdateIidDocument",
    ixo.iid.v1beta1.MsgUpdateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddIidContext",
    ixo.iid.v1beta1.MsgAddIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteIidContext",
    ixo.iid.v1beta1.MsgDeleteIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddVerification",
    ixo.iid.v1beta1.MsgAddVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgSetVerificationRelationships",
    ixo.iid.v1beta1.MsgSetVerificationRelationships
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgRevokeVerification",
    ixo.iid.v1beta1.MsgRevokeVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddAccordedRight",
    ixo.iid.v1beta1.MsgAddAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteAccordedRight",
    ixo.iid.v1beta1.MsgDeleteAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddController",
    ixo.iid.v1beta1.MsgAddController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteController",
    ixo.iid.v1beta1.MsgDeleteController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedEntity",
    ixo.iid.v1beta1.MsgAddLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedEntity",
    ixo.iid.v1beta1.MsgDeleteLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedResource",
    ixo.iid.v1beta1.MsgAddLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    ixo.iid.v1beta1.MsgDeleteLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedClaim",
    ixo.iid.v1beta1.MsgAddLinkedClaim
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedClaim",
    ixo.iid.v1beta1.MsgDeleteLinkedClaim
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddService",
    ixo.iid.v1beta1.MsgAddService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteService",
    ixo.iid.v1beta1.MsgDeleteService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeactivateIID",
    ixo.iid.v1beta1.MsgDeactivateIID
  );

  // Ixo Entity module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgTransferEntity",
    ixo.entity.v1beta1.MsgTransferEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgUpdateEntity",
    ixo.entity.v1beta1.MsgUpdateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgUpdateEntityVerified",
    ixo.entity.v1beta1.MsgUpdateEntityVerified
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntityAccount",
    ixo.entity.v1beta1.MsgCreateEntityAccount
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    ixo.entity.v1beta1.MsgGrantEntityAccountAuthz
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgRevokeEntityAccountAuthz",
    ixo.entity.v1beta1.MsgRevokeEntityAccountAuthz
  );

  // Ixo Bond module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgCreateBond",
    ixo.bonds.v1beta1.MsgCreateBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgEditBond",
    ixo.bonds.v1beta1.MsgEditBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    ixo.bonds.v1beta1.MsgSetNextAlpha
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgUpdateBondState",
    ixo.bonds.v1beta1.MsgUpdateBondState
  );
  myRegistry.register("/ixo.bonds.v1beta1.MsgBuy", ixo.bonds.v1beta1.MsgBuy);
  myRegistry.register("/ixo.bonds.v1beta1.MsgSell", ixo.bonds.v1beta1.MsgSell);
  myRegistry.register("/ixo.bonds.v1beta1.MsgSwap", ixo.bonds.v1beta1.MsgSwap);
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgMakeOutcomePayment",
    ixo.bonds.v1beta1.MsgMakeOutcomePayment
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawShare",
    ixo.bonds.v1beta1.MsgWithdrawShare
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    ixo.bonds.v1beta1.MsgWithdrawReserve
  );

  // Ixo Token module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.token.v1beta1.MsgCreateToken",
    ixo.token.v1beta1.MsgCreateToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgMintToken",
    ixo.token.v1beta1.MsgMintToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgTransferToken",
    ixo.token.v1beta1.MsgTransferToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MintAuthorization",
    ixo.token.v1beta1.MintAuthorization
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgRetireToken",
    ixo.token.v1beta1.MsgRetireToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgCancelToken",
    ixo.token.v1beta1.MsgCancelToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgPauseToken",
    ixo.token.v1beta1.MsgPauseToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgStopToken",
    ixo.token.v1beta1.MsgStopToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgTransferCredit",
    ixo.token.v1beta1.MsgTransferCredit
  );

  // Ixo Claims module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgCreateCollection",
    ixo.claims.v1beta1.MsgCreateCollection
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgSubmitClaim",
    ixo.claims.v1beta1.MsgSubmitClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgDisputeClaim",
    ixo.claims.v1beta1.MsgDisputeClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgEvaluateClaim",
    ixo.claims.v1beta1.MsgEvaluateClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgWithdrawPayment",
    ixo.claims.v1beta1.MsgWithdrawPayment
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.SubmitClaimAuthorization",
    ixo.claims.v1beta1.SubmitClaimAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.EvaluateClaimAuthorization",
    ixo.claims.v1beta1.EvaluateClaimAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.WithdrawPaymentAuthorization",
    ixo.claims.v1beta1.WithdrawPaymentAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionState",
    ixo.claims.v1beta1.MsgUpdateCollectionState
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionDates",
    ixo.claims.v1beta1.MsgUpdateCollectionDates
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionPayments",
    ixo.claims.v1beta1.MsgUpdateCollectionPayments
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionIntents",
    ixo.claims.v1beta1.MsgUpdateCollectionIntents
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgClaimIntent",
    ixo.claims.v1beta1.MsgClaimIntent
  );

  // Ixo Smart Account module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgAddAuthenticator",
    ixo.smartaccount.v1beta1.MsgAddAuthenticator
  );
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgRemoveAuthenticator",
    ixo.smartaccount.v1beta1.MsgRemoveAuthenticator
  );
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgSetActiveState",
    ixo.smartaccount.v1beta1.MsgSetActiveState
  );
  myRegistry.register(
    "/ixo.smartaccount.crypto.AuthnPubKey",
    ixo.smartaccount.crypto.AuthnPubKey
  );

  // Ixo Liquid Stake module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgLiquidStake",
    ixo.liquidstake.v1beta1.MsgLiquidStake
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgLiquidUnstake",
    ixo.liquidstake.v1beta1.MsgLiquidUnstake
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateParams",
    ixo.liquidstake.v1beta1.MsgUpdateParams
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
    ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateWeightedRewardsReceivers",
    ixo.liquidstake.v1beta1.MsgUpdateWeightedRewardsReceivers
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgSetModulePaused",
    ixo.liquidstake.v1beta1.MsgSetModulePaused
  );

  return myRegistry;
};
