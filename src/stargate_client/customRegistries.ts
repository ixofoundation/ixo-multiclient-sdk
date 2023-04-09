import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { ixo, cosmwasm, cosmos, ibc, ica } from "../codegen";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // tx
  ["/cosmos.tx.v1beta1.Tx", cosmos.tx.v1beta1.Tx],

  // base
  ["/cosmos.base.v1beta1.Coin", cosmos.base.v1beta1.Coin],

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

  // feegrant
  [
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    cosmos.feegrant.v1beta1.MsgGrantAllowance,
  ],
  [
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    cosmos.feegrant.v1beta1.MsgRevokeAllowance,
  ],

  // gov
  ["/cosmos.gov.v1beta1.MsgDeposit", cosmos.gov.v1beta1.MsgDeposit],
  [
    "/cosmos.gov.v1beta1.MsgSubmitProposal",
    cosmos.gov.v1beta1.MsgSubmitProposal,
  ],
  ["/cosmos.gov.v1beta1.MsgVote", cosmos.gov.v1beta1.MsgVote],
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", cosmos.gov.v1beta1.MsgVoteWeighted],

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

  // slashing
  ["/cosmos.slashing.v1beta1.MsgUnjail", cosmos.slashing.v1beta1.MsgUnjail],

  // crisis
  [
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    cosmos.crisis.v1beta1.MsgVerifyInvariant,
  ],

  // evidence
  [
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    cosmos.evidence.v1beta1.MsgSubmitEvidence,
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

  // ibc
  [
    "/ibc.applications.transfer.v1.MsgTransfer",
    ibc.applications.transfer.v1.MsgTransfer,
  ],
  ["/ibc.core.client.v1.MsgCreateClient", ibc.core.client.v1.MsgCreateClient],
  [
    "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    ibc.core.client.v1.MsgSubmitMisbehaviour,
  ],
  ["/ibc.core.client.v1.MsgUpdateClient", ibc.core.client.v1.MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", ibc.core.client.v1.MsgUpgradeClient],

  // cosmwasm
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

  // intertx (interchain accounts)
  ["/ica.intertx.MsgRegisterAccount", ica.intertx.MsgRegisterAccount],
  ["/ica.intertx.MsgSubmitTx", ica.intertx.MsgSubmitTx],
];

export const createRegistry = (): Registry => {
  const myRegistry = new Registry(defaultRegistryTypes);

  // Ixo Iid module
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

  // Ixo Bond module
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

  // Ixo Claims module
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

  return myRegistry;
};
