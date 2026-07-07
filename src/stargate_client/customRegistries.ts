import { GeneratedType, Registry } from "@cosmjs/proto-signing";
// Message modules are imported per-file (NOT via the ../codegen namespace
// objects) so that bundlers only include the tx/authz types the registry
// actually references, instead of every query/genesis/rpc module.
import * as _cosmos_auth_v1beta1_auth from "../codegen/cosmos/auth/v1beta1/auth";
import * as _cosmos_auth_v1beta1_tx from "../codegen/cosmos/auth/v1beta1/tx";
import * as _cosmos_authz_v1beta1_authz from "../codegen/cosmos/authz/v1beta1/authz";
import * as _cosmos_authz_v1beta1_tx from "../codegen/cosmos/authz/v1beta1/tx";
import * as _cosmos_bank_v1beta1_authz from "../codegen/cosmos/bank/v1beta1/authz";
import * as _cosmos_bank_v1beta1_tx from "../codegen/cosmos/bank/v1beta1/tx";
import * as _cosmos_base_v1beta1_coin from "../codegen/cosmos/base/v1beta1/coin";
import * as _cosmos_circuit_v1_tx from "../codegen/cosmos/circuit/v1/tx";
import * as _cosmos_consensus_v1_tx from "../codegen/cosmos/consensus/v1/tx";
import * as _cosmos_crisis_v1beta1_tx from "../codegen/cosmos/crisis/v1beta1/tx";
import * as _cosmos_distribution_v1beta1_tx from "../codegen/cosmos/distribution/v1beta1/tx";
import * as _cosmos_evidence_v1beta1_tx from "../codegen/cosmos/evidence/v1beta1/tx";
import * as _cosmos_feegrant_v1beta1_feegrant from "../codegen/cosmos/feegrant/v1beta1/feegrant";
import * as _cosmos_feegrant_v1beta1_tx from "../codegen/cosmos/feegrant/v1beta1/tx";
import * as _cosmos_gov_v1_tx from "../codegen/cosmos/gov/v1/tx";
import * as _cosmos_gov_v1beta1_tx from "../codegen/cosmos/gov/v1beta1/tx";
import * as _cosmos_slashing_v1beta1_tx from "../codegen/cosmos/slashing/v1beta1/tx";
import * as _cosmos_staking_v1beta1_tx from "../codegen/cosmos/staking/v1beta1/tx";
import * as _cosmos_tx_v1beta1_tx from "../codegen/cosmos/tx/v1beta1/tx";
import * as _cosmos_upgrade_v1beta1_tx from "../codegen/cosmos/upgrade/v1beta1/tx";
import * as _cosmos_vesting_v1beta1_tx from "../codegen/cosmos/vesting/v1beta1/tx";
import * as _cosmos_vesting_v1beta1_vesting from "../codegen/cosmos/vesting/v1beta1/vesting";
import * as _cosmwasm_wasm_v1_tx from "../codegen/cosmwasm/wasm/v1/tx";
import * as _ibc_applications_interchain_accounts_controller_v1_tx from "../codegen/ibc/applications/interchain_accounts/controller/v1/tx";
import * as _ibc_applications_interchain_accounts_host_v1_tx from "../codegen/ibc/applications/interchain_accounts/host/v1/tx";
import * as _ibc_applications_transfer_v1_tx from "../codegen/ibc/applications/transfer/v1/tx";
import * as _ibc_core_channel_v1_tx from "../codegen/ibc/core/channel/v1/tx";
import * as _ibc_core_client_v1_tx from "../codegen/ibc/core/client/v1/tx";
import * as _ixo_bonds_v1beta1_tx from "../codegen/ixo/bonds/v1beta1/tx";
import * as _ixo_claims_v1beta1_authz from "../codegen/ixo/claims/v1beta1/authz";
import * as _ixo_claims_v1beta1_tx from "../codegen/ixo/claims/v1beta1/tx";
import * as _ixo_entity_v1beta1_tx from "../codegen/ixo/entity/v1beta1/tx";
import * as _ixo_iid_v1beta1_tx from "../codegen/ixo/iid/v1beta1/tx";
import * as _ixo_liquidstake_v1beta1_tx from "../codegen/ixo/liquidstake/v1beta1/tx";
import * as _ixo_names_v1beta1_tx from "../codegen/ixo/names/v1beta1/tx";
import * as _ixo_smartaccount_crypto_crypto from "../codegen/ixo/smartaccount/crypto/crypto";
import * as _ixo_smartaccount_v1beta1_tx from "../codegen/ixo/smartaccount/v1beta1/tx";
import * as _ixo_token_v1beta1_authz from "../codegen/ixo/token/v1beta1/authz";
import * as _ixo_token_v1beta1_tx from "../codegen/ixo/token/v1beta1/tx";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // tx
  ["/cosmos.tx.v1beta1.Tx", _cosmos_tx_v1beta1_tx.Tx],

  // auth
  ["/cosmos.auth.v1beta1.BaseAccount", _cosmos_auth_v1beta1_auth.BaseAccount],
  [
    "/cosmos.auth.v1beta1.ModuleAccount",
    _cosmos_auth_v1beta1_auth.ModuleAccount,
  ],
  [
    "/cosmos.auth.v1beta1.MsgUpdateParams",
    _cosmos_auth_v1beta1_tx.MsgUpdateParams,
  ],

  // authz
  ["/cosmos.authz.v1beta1.MsgExec", _cosmos_authz_v1beta1_tx.MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", _cosmos_authz_v1beta1_tx.MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", _cosmos_authz_v1beta1_tx.MsgRevoke],
  [
    "/cosmos.authz.v1beta1.GenericAuthorization",
    _cosmos_authz_v1beta1_authz.GenericAuthorization,
  ],

  // bank
  ["/cosmos.bank.v1beta1.MsgMultiSend", _cosmos_bank_v1beta1_tx.MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", _cosmos_bank_v1beta1_tx.MsgSend],
  [
    "/cosmos.bank.v1beta1.SendAuthorization",
    _cosmos_bank_v1beta1_authz.SendAuthorization,
  ],
  [
    "/cosmos.bank.v1beta1.MsgUpdateParams",
    _cosmos_bank_v1beta1_tx.MsgUpdateParams,
  ],
  [
    "/cosmos.bank.v1beta1.MsgSetSendEnabled",
    _cosmos_bank_v1beta1_tx.MsgSetSendEnabled,
  ],

  // base
  ["/cosmos.base.v1beta1.Coin", _cosmos_base_v1beta1_coin.Coin],

  // circuit breaker
  [
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
    _cosmos_circuit_v1_tx.MsgAuthorizeCircuitBreaker,
  ],
  [
    "/cosmos.circuit.v1.MsgTripCircuitBreaker",
    _cosmos_circuit_v1_tx.MsgTripCircuitBreaker,
  ],
  [
    "/cosmos.circuit.v1.MsgResetCircuitBreaker",
    _cosmos_circuit_v1_tx.MsgResetCircuitBreaker,
  ],

  // consensus
  [
    "/cosmos.consensus.v1.MsgUpdateParams",
    _cosmos_consensus_v1_tx.MsgUpdateParams,
  ],

  // crisis
  [
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    _cosmos_crisis_v1beta1_tx.MsgVerifyInvariant,
  ],
  [
    "/cosmos.crisis.v1beta1.MsgUpdateParams",
    _cosmos_crisis_v1beta1_tx.MsgUpdateParams,
  ],

  // distribution
  [
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    _cosmos_distribution_v1beta1_tx.MsgFundCommunityPool,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    _cosmos_distribution_v1beta1_tx.MsgSetWithdrawAddress,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    _cosmos_distribution_v1beta1_tx.MsgWithdrawDelegatorReward,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    _cosmos_distribution_v1beta1_tx.MsgWithdrawValidatorCommission,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
    _cosmos_distribution_v1beta1_tx.MsgCommunityPoolSpend,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
    _cosmos_distribution_v1beta1_tx.MsgDepositValidatorRewardsPool,
  ],
  [
    "/cosmos.distribution.v1beta1.MsgUpdateParams",
    _cosmos_distribution_v1beta1_tx.MsgUpdateParams,
  ],

  // evidence
  [
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    _cosmos_evidence_v1beta1_tx.MsgSubmitEvidence,
  ],

  // feegrant
  [
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    _cosmos_feegrant_v1beta1_tx.MsgGrantAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    _cosmos_feegrant_v1beta1_tx.MsgRevokeAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.BasicAllowance",
    _cosmos_feegrant_v1beta1_feegrant.BasicAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    _cosmos_feegrant_v1beta1_feegrant.PeriodicAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
    _cosmos_feegrant_v1beta1_tx.MsgPruneAllowances,
  ],

  // gov
  ["/cosmos.gov.v1beta1.MsgDeposit", _cosmos_gov_v1beta1_tx.MsgDeposit],
  [
    "/cosmos.gov.v1beta1.MsgSubmitProposal",
    _cosmos_gov_v1beta1_tx.MsgSubmitProposal,
  ],
  ["/cosmos.gov.v1beta1.MsgVote", _cosmos_gov_v1beta1_tx.MsgVote],
  [
    "/cosmos.gov.v1beta1.MsgVoteWeighted",
    _cosmos_gov_v1beta1_tx.MsgVoteWeighted,
  ],
  ["/cosmos.gov.v1.MsgSubmitProposal", _cosmos_gov_v1_tx.MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgVote", _cosmos_gov_v1_tx.MsgVote],
  ["/cosmos.gov.v1.MsgVoteWeighted", _cosmos_gov_v1_tx.MsgVoteWeighted],
  ["/cosmos.gov.v1.MsgDeposit", _cosmos_gov_v1_tx.MsgDeposit],
  [
    "/cosmos.gov.v1.MsgExecLegacyContent",
    _cosmos_gov_v1_tx.MsgExecLegacyContent,
  ],
  ["/cosmos.gov.v1.MsgCancelProposal", _cosmos_gov_v1_tx.MsgCancelProposal],

  // slashing
  ["/cosmos.slashing.v1beta1.MsgUnjail", _cosmos_slashing_v1beta1_tx.MsgUnjail],
  [
    "/cosmos.slashing.v1beta1.MsgUpdateParams",
    _cosmos_slashing_v1beta1_tx.MsgUpdateParams,
  ],

  // staking
  [
    "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    _cosmos_staking_v1beta1_tx.MsgBeginRedelegate,
  ],
  [
    "/cosmos.staking.v1beta1.MsgCreateValidator",
    _cosmos_staking_v1beta1_tx.MsgCreateValidator,
  ],
  [
    "/cosmos.staking.v1beta1.MsgDelegate",
    _cosmos_staking_v1beta1_tx.MsgDelegate,
  ],
  [
    "/cosmos.staking.v1beta1.MsgEditValidator",
    _cosmos_staking_v1beta1_tx.MsgEditValidator,
  ],
  [
    "/cosmos.staking.v1beta1.MsgUndelegate",
    _cosmos_staking_v1beta1_tx.MsgUndelegate,
  ],
  [
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
    _cosmos_staking_v1beta1_tx.MsgCancelUnbondingDelegation,
  ],
  [
    "/cosmos.staking.v1beta1.MsgUpdateParams",
    _cosmos_staking_v1beta1_tx.MsgUpdateParams,
  ],

  // upgrade
  [
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
    _cosmos_upgrade_v1beta1_tx.MsgCancelUpgrade,
  ],
  [
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
    _cosmos_upgrade_v1beta1_tx.MsgSoftwareUpgrade,
  ],

  // vesting
  [
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    _cosmos_vesting_v1beta1_tx.MsgCreateVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    _cosmos_vesting_v1beta1_tx.MsgCreatePeriodicVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    _cosmos_vesting_v1beta1_tx.MsgCreatePermanentLockedAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
    _cosmos_vesting_v1beta1_vesting.ContinuousVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.DelayedVestingAccount",
    _cosmos_vesting_v1beta1_vesting.DelayedVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.BaseVestingAccount",
    _cosmos_vesting_v1beta1_vesting.BaseVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
    _cosmos_vesting_v1beta1_vesting.PeriodicVestingAccount,
  ],
  [
    "/cosmos.vesting.v1beta1.PermanentLockedAccount",
    _cosmos_vesting_v1beta1_vesting.PermanentLockedAccount,
  ],

  // ibc
  // -----------------------------------------------------------------------------
  [
    "/ibc.applications.transfer.v1.MsgTransfer",
    _ibc_applications_transfer_v1_tx.MsgTransfer,
  ],
  [
    "/ibc.applications.transfer.v1.MsgUpdateParams",
    _ibc_applications_transfer_v1_tx.MsgUpdateParams,
  ],
  ["/ibc.core.channel.v1.MsgRecvPacket", _ibc_core_channel_v1_tx.MsgRecvPacket],
  [
    "/ibc.core.channel.v1.MsgAcknowledgement",
    _ibc_core_channel_v1_tx.MsgAcknowledgement,
  ],
  [
    "/ibc.core.client.v1.MsgCreateClient",
    _ibc_core_client_v1_tx.MsgCreateClient,
  ],
  [
    "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    _ibc_core_client_v1_tx.MsgSubmitMisbehaviour,
  ],
  [
    "/ibc.core.client.v1.MsgUpdateClient",
    _ibc_core_client_v1_tx.MsgUpdateClient,
  ],
  [
    "/ibc.core.client.v1.MsgUpgradeClient",
    _ibc_core_client_v1_tx.MsgUpgradeClient,
  ],
  [
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
    _ibc_core_client_v1_tx.MsgIBCSoftwareUpgrade,
  ],
  [
    "/ibc.core.client.v1.MsgRecoverClient",
    _ibc_core_client_v1_tx.MsgRecoverClient,
  ],
  [
    "/ibc.core.client.v1.MsgUpdateParams",
    _ibc_core_client_v1_tx.MsgUpdateParams,
  ],

  // ibc interchain accounts
  // -----------------------------------------------------------------------------
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    _ibc_applications_interchain_accounts_controller_v1_tx.MsgRegisterInterchainAccount,
  ],
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
    _ibc_applications_interchain_accounts_controller_v1_tx.MsgSendTx,
  ],
  [
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
    _ibc_applications_interchain_accounts_controller_v1_tx.MsgUpdateParams,
  ],
  [
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
    _ibc_applications_interchain_accounts_host_v1_tx.MsgUpdateParams,
  ],

  // cosmwasm
  // -----------------------------------------------------------------------------
  ["/cosmwasm.wasm.v1.MsgStoreCode", _cosmwasm_wasm_v1_tx.MsgStoreCode],
  [
    "/cosmwasm.wasm.v1.MsgInstantiateContract",
    _cosmwasm_wasm_v1_tx.MsgInstantiateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgInstantiateContract2",
    _cosmwasm_wasm_v1_tx.MsgInstantiateContract2,
  ],
  [
    "/cosmwasm.wasm.v1.MsgExecuteContract",
    _cosmwasm_wasm_v1_tx.MsgExecuteContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgMigrateContract",
    _cosmwasm_wasm_v1_tx.MsgMigrateContract,
  ],
  ["/cosmwasm.wasm.v1.MsgUpdateAdmin", _cosmwasm_wasm_v1_tx.MsgUpdateAdmin],
  ["/cosmwasm.wasm.v1.MsgClearAdmin", _cosmwasm_wasm_v1_tx.MsgClearAdmin],
  [
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
    _cosmwasm_wasm_v1_tx.MsgUpdateInstantiateConfig,
  ],
  ["/cosmwasm.wasm.v1.MsgUpdateParams", _cosmwasm_wasm_v1_tx.MsgUpdateParams],
  ["/cosmwasm.wasm.v1.MsgSudoContract", _cosmwasm_wasm_v1_tx.MsgSudoContract],
  ["/cosmwasm.wasm.v1.MsgPinCodes", _cosmwasm_wasm_v1_tx.MsgPinCodes],
  ["/cosmwasm.wasm.v1.MsgUnpinCodes", _cosmwasm_wasm_v1_tx.MsgUnpinCodes],
  [
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
    _cosmwasm_wasm_v1_tx.MsgStoreAndInstantiateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
    _cosmwasm_wasm_v1_tx.MsgRemoveCodeUploadParamsAddresses,
  ],
  [
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
    _cosmwasm_wasm_v1_tx.MsgAddCodeUploadParamsAddresses,
  ],
  [
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
    _cosmwasm_wasm_v1_tx.MsgStoreAndMigrateContract,
  ],
  [
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
    _cosmwasm_wasm_v1_tx.MsgUpdateContractLabel,
  ],
];

export const createRegistry = (): Registry => {
  const myRegistry = new Registry(defaultRegistryTypes);

  // Ixo Iid module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgCreateIidDocument",
    _ixo_iid_v1beta1_tx.MsgCreateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgUpdateIidDocument",
    _ixo_iid_v1beta1_tx.MsgUpdateIidDocument
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddIidContext",
    _ixo_iid_v1beta1_tx.MsgAddIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteIidContext",
    _ixo_iid_v1beta1_tx.MsgDeleteIidContext
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddVerification",
    _ixo_iid_v1beta1_tx.MsgAddVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgSetVerificationRelationships",
    _ixo_iid_v1beta1_tx.MsgSetVerificationRelationships
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgRevokeVerification",
    _ixo_iid_v1beta1_tx.MsgRevokeVerification
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddAccordedRight",
    _ixo_iid_v1beta1_tx.MsgAddAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteAccordedRight",
    _ixo_iid_v1beta1_tx.MsgDeleteAccordedRight
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddController",
    _ixo_iid_v1beta1_tx.MsgAddController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteController",
    _ixo_iid_v1beta1_tx.MsgDeleteController
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedEntity",
    _ixo_iid_v1beta1_tx.MsgAddLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedEntity",
    _ixo_iid_v1beta1_tx.MsgDeleteLinkedEntity
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedResource",
    _ixo_iid_v1beta1_tx.MsgAddLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedResource",
    _ixo_iid_v1beta1_tx.MsgDeleteLinkedResource
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddLinkedClaim",
    _ixo_iid_v1beta1_tx.MsgAddLinkedClaim
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteLinkedClaim",
    _ixo_iid_v1beta1_tx.MsgDeleteLinkedClaim
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgAddService",
    _ixo_iid_v1beta1_tx.MsgAddService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteService",
    _ixo_iid_v1beta1_tx.MsgDeleteService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeactivateIID",
    _ixo_iid_v1beta1_tx.MsgDeactivateIID
  );

  // Ixo Entity module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    _ixo_entity_v1beta1_tx.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgTransferEntity",
    _ixo_entity_v1beta1_tx.MsgTransferEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgUpdateEntity",
    _ixo_entity_v1beta1_tx.MsgUpdateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgUpdateEntityVerified",
    _ixo_entity_v1beta1_tx.MsgUpdateEntityVerified
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntityAccount",
    _ixo_entity_v1beta1_tx.MsgCreateEntityAccount
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
    _ixo_entity_v1beta1_tx.MsgGrantEntityAccountAuthz
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgRevokeEntityAccountAuthz",
    _ixo_entity_v1beta1_tx.MsgRevokeEntityAccountAuthz
  );

  // Ixo Bond module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgCreateBond",
    _ixo_bonds_v1beta1_tx.MsgCreateBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgEditBond",
    _ixo_bonds_v1beta1_tx.MsgEditBond
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    _ixo_bonds_v1beta1_tx.MsgSetNextAlpha
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgUpdateBondState",
    _ixo_bonds_v1beta1_tx.MsgUpdateBondState
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgBuy",
    _ixo_bonds_v1beta1_tx.MsgBuy
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgSell",
    _ixo_bonds_v1beta1_tx.MsgSell
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgSwap",
    _ixo_bonds_v1beta1_tx.MsgSwap
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgMakeOutcomePayment",
    _ixo_bonds_v1beta1_tx.MsgMakeOutcomePayment
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawShare",
    _ixo_bonds_v1beta1_tx.MsgWithdrawShare
  );
  myRegistry.register(
    "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    _ixo_bonds_v1beta1_tx.MsgWithdrawReserve
  );

  // Ixo Token module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.token.v1beta1.MsgCreateToken",
    _ixo_token_v1beta1_tx.MsgCreateToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgMintToken",
    _ixo_token_v1beta1_tx.MsgMintToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgTransferToken",
    _ixo_token_v1beta1_tx.MsgTransferToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MintAuthorization",
    _ixo_token_v1beta1_authz.MintAuthorization
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgRetireToken",
    _ixo_token_v1beta1_tx.MsgRetireToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgCancelToken",
    _ixo_token_v1beta1_tx.MsgCancelToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgPauseToken",
    _ixo_token_v1beta1_tx.MsgPauseToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgStopToken",
    _ixo_token_v1beta1_tx.MsgStopToken
  );
  myRegistry.register(
    "/ixo.token.v1beta1.MsgTransferCredit",
    _ixo_token_v1beta1_tx.MsgTransferCredit
  );

  // Ixo Claims module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgCreateCollection",
    _ixo_claims_v1beta1_tx.MsgCreateCollection
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgSubmitClaim",
    _ixo_claims_v1beta1_tx.MsgSubmitClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgDisputeClaim",
    _ixo_claims_v1beta1_tx.MsgDisputeClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgEvaluateClaim",
    _ixo_claims_v1beta1_tx.MsgEvaluateClaim
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgWithdrawPayment",
    _ixo_claims_v1beta1_tx.MsgWithdrawPayment
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.SubmitClaimAuthorization",
    _ixo_claims_v1beta1_authz.SubmitClaimAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.EvaluateClaimAuthorization",
    _ixo_claims_v1beta1_authz.EvaluateClaimAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.WithdrawPaymentAuthorization",
    _ixo_claims_v1beta1_authz.WithdrawPaymentAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionState",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionState
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionDates",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionDates
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionPayments",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionPayments
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionIntents",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionIntents
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionQuota",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionQuota
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgClaimIntent",
    _ixo_claims_v1beta1_tx.MsgClaimIntent
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgCreateClaimAuthorization",
    _ixo_claims_v1beta1_tx.MsgCreateClaimAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.CreateClaimAuthorizationAuthorization",
    _ixo_claims_v1beta1_authz.CreateClaimAuthorizationAuthorization
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgSetCollectionMembers",
    _ixo_claims_v1beta1_tx.MsgSetCollectionMembers
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgRemoveCollectionMembers",
    _ixo_claims_v1beta1_tx.MsgRemoveCollectionMembers
  );
  // v7 dispute / performance-deposit messages
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgUpdateCollectionDisputeConfig",
    _ixo_claims_v1beta1_tx.MsgUpdateCollectionDisputeConfig
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgAddPerformanceDeposit",
    _ixo_claims_v1beta1_tx.MsgAddPerformanceDeposit
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgWithdrawPerformanceDeposit",
    _ixo_claims_v1beta1_tx.MsgWithdrawPerformanceDeposit
  );
  myRegistry.register(
    "/ixo.claims.v1beta1.MsgAdjudicateDispute",
    _ixo_claims_v1beta1_tx.MsgAdjudicateDispute
  );

  // Ixo Smart Account module
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgAddAuthenticator",
    _ixo_smartaccount_v1beta1_tx.MsgAddAuthenticator
  );
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgRemoveAuthenticator",
    _ixo_smartaccount_v1beta1_tx.MsgRemoveAuthenticator
  );
  myRegistry.register(
    "/ixo.smartaccount.v1beta1.MsgSetActiveState",
    _ixo_smartaccount_v1beta1_tx.MsgSetActiveState
  );
  myRegistry.register(
    "/ixo.smartaccount.crypto.AuthnPubKey",
    _ixo_smartaccount_crypto_crypto.AuthnPubKey
  );

  // Ixo Liquid Stake module (v7 multi-pool surface)
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgLiquidStake",
    _ixo_liquidstake_v1beta1_tx.MsgLiquidStake
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgLiquidUnstake",
    _ixo_liquidstake_v1beta1_tx.MsgLiquidUnstake
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgCreatePool",
    _ixo_liquidstake_v1beta1_tx.MsgCreatePool
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateModuleParams",
    _ixo_liquidstake_v1beta1_tx.MsgUpdateModuleParams
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdatePool",
    _ixo_liquidstake_v1beta1_tx.MsgUpdatePool
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
    _ixo_liquidstake_v1beta1_tx.MsgUpdateWhitelistedValidators
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgUpdateWeightedRewardsReceivers",
    _ixo_liquidstake_v1beta1_tx.MsgUpdateWeightedRewardsReceivers
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgSetPoolPaused",
    _ixo_liquidstake_v1beta1_tx.MsgSetPoolPaused
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgSetModulePaused",
    _ixo_liquidstake_v1beta1_tx.MsgSetModulePaused
  );
  myRegistry.register(
    "/ixo.liquidstake.v1beta1.MsgBurn",
    _ixo_liquidstake_v1beta1_tx.MsgBurn
  );

  // Ixo Names module (chain-level name service, IXO-1123)
  // -----------------------------------------------------------------------------
  myRegistry.register(
    "/ixo.names.v1beta1.MsgCreateNamespace",
    _ixo_names_v1beta1_tx.MsgCreateNamespace
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgUpdateNamespace",
    _ixo_names_v1beta1_tx.MsgUpdateNamespace
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgRegisterName",
    _ixo_names_v1beta1_tx.MsgRegisterName
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgRegisterNameByRegistrar",
    _ixo_names_v1beta1_tx.MsgRegisterNameByRegistrar
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgUpdateNameByRegistrar",
    _ixo_names_v1beta1_tx.MsgUpdateNameByRegistrar
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgTransferName",
    _ixo_names_v1beta1_tx.MsgTransferName
  );
  myRegistry.register(
    "/ixo.names.v1beta1.MsgSetNameStatus",
    _ixo_names_v1beta1_tx.MsgSetNameStatus
  );

  return myRegistry;
};
