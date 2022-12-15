import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { ixo, cosmwasm, cosmos, ibc } from "../codegen";
import { Coin } from "../codegen/cosmos/base/v1beta1/coin";

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // base
  ["/cosmos.base.v1beta1.Coin", cosmos.base.v1beta1.Coin],

  // auth
  ["/cosmos.authz.v1beta1.MsgExec", cosmos.authz.v1beta1.MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", cosmos.authz.v1beta1.MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", cosmos.authz.v1beta1.MsgRevoke],

  // bank
  ["/cosmos.bank.v1beta1.MsgMultiSend", cosmos.bank.v1beta1.MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", cosmos.bank.v1beta1.MsgSend],

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
  [
    "/ibc.core.channel.v1.MsgAcknowledgement",
    ibc.core.channel.v1.MsgAcknowledgement,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    ibc.core.channel.v1.MsgChannelCloseConfirm,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelCloseInit",
    ibc.core.channel.v1.MsgChannelCloseInit,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelOpenAck",
    ibc.core.channel.v1.MsgChannelOpenAck,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    ibc.core.channel.v1.MsgChannelOpenConfirm,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelOpenInit",
    ibc.core.channel.v1.MsgChannelOpenInit,
  ],
  [
    "/ibc.core.channel.v1.MsgChannelOpenTry",
    ibc.core.channel.v1.MsgChannelOpenTry,
  ],
  ["/ibc.core.channel.v1.MsgRecvPacket", ibc.core.channel.v1.MsgRecvPacket],
  ["/ibc.core.channel.v1.MsgTimeout", ibc.core.channel.v1.MsgTimeout],
  [
    "/ibc.core.channel.v1.MsgTimeoutOnClose",
    ibc.core.channel.v1.MsgTimeoutOnClose,
  ],
  ["/ibc.core.client.v1.MsgCreateClient", ibc.core.client.v1.MsgCreateClient],
  [
    "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    ibc.core.client.v1.MsgSubmitMisbehaviour,
  ],
  ["/ibc.core.client.v1.MsgUpdateClient", ibc.core.client.v1.MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", ibc.core.client.v1.MsgUpgradeClient],
  [
    "/ibc.core.connection.v1.MsgConnectionOpenAck",
    ibc.core.connection.v1.MsgConnectionOpenAck,
  ],
  [
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    ibc.core.connection.v1.MsgConnectionOpenConfirm,
  ],
  [
    "/ibc.core.connection.v1.MsgConnectionOpenInit",
    ibc.core.connection.v1.MsgConnectionOpenInit,
  ],
  [
    "/ibc.core.connection.v1.MsgConnectionOpenTry",
    ibc.core.connection.v1.MsgConnectionOpenTry,
  ],
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
    "/ixo.iid.v1beta1.MsgUpdateIidMeta",
    ixo.iid.v1beta1.MsgUpdateIidMeta
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
    "/ixo.iid.v1beta1.MsgAddService",
    ixo.iid.v1beta1.MsgAddService
  );
  myRegistry.register(
    "/ixo.iid.v1beta1.MsgDeleteService",
    ixo.iid.v1beta1.MsgDeleteService
  );

  // Ixo Entity module
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
  myRegistry.register(
    "/ixo.entity.v1beta1.MsgCreateEntity",
    ixo.entity.v1beta1.MsgCreateEntity
  );
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

  // Ixo Payments module
  myRegistry.register(
    "/ixo.payments.v1.MsgCreatePaymentTemplate",
    ixo.payments.v1.MsgCreatePaymentTemplate
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgCreatePaymentContract",
    ixo.payments.v1.MsgCreatePaymentContract
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgSetPaymentContractAuthorisation",
    ixo.payments.v1.MsgSetPaymentContractAuthorisation
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgCreateSubscription",
    ixo.payments.v1.MsgCreateSubscription
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgGrantDiscount",
    ixo.payments.v1.MsgGrantDiscount
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgRevokeDiscount",
    ixo.payments.v1.MsgRevokeDiscount
  );
  myRegistry.register(
    "/ixo.payments.v1.MsgEffectPayment",
    ixo.payments.v1.MsgEffectPayment
  );

  // Ixo Project module
  myRegistry.register(
    "/ixo.project.v1.MsgCreateProject",
    ixo.project.v1.MsgCreateProject
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateProjectStatus",
    ixo.project.v1.MsgUpdateProjectStatus
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateAgent",
    ixo.project.v1.MsgCreateAgent
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateAgent",
    ixo.project.v1.MsgUpdateAgent
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateClaim",
    ixo.project.v1.MsgCreateClaim
  );
  myRegistry.register(
    "/ixo.project.v1.MsgCreateEvaluation",
    ixo.project.v1.MsgCreateEvaluation
  );
  myRegistry.register(
    "/ixo.project.v1.MsgWithdrawFunds",
    ixo.project.v1.MsgWithdrawFunds
  );
  myRegistry.register(
    "/ixo.project.v1.MsgUpdateProjectDoc",
    ixo.project.v1.MsgUpdateProjectDoc
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
    "/ixo.token.v1beta1.MsgSetupMinter",
    ixo.token.v1beta1.MsgSetupMinter
  );
  myRegistry.register("/ixo.token.v1beta1.MsgMint", ixo.token.v1beta1.MsgMint);
  myRegistry.register(
    "/ixo.token.v1beta1.MsgTransferToken",
    ixo.token.v1beta1.MsgTransferToken
  );

  // Cosmwasm
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgStoreCode",
    cosmwasm.wasm.v1.MsgStoreCode
  );
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgInstantiateContract",
    cosmwasm.wasm.v1.MsgInstantiateContract
  );
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgExecuteContract",
    cosmwasm.wasm.v1.MsgExecuteContract
  );
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgMigrateContract",
    cosmwasm.wasm.v1.MsgMigrateContract
  );
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgUpdateAdmin",
    cosmwasm.wasm.v1.MsgUpdateAdmin
  );
  myRegistry.register(
    "/cosmwasm.wasm.v1.MsgClearAdmin",
    cosmwasm.wasm.v1.MsgClearAdmin
  );

  return myRegistry;
};
