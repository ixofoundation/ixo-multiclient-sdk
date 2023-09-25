import { customQueries, utils } from "../helpers/common";
import {
  ChainNetwork,
  SetupGroupConstantKeys,
  setup_group_constants,
} from "./fullExample/constants";

export const createGroupMsg = (
  chainNetwork: ChainNetwork,
  groupFromConstants: SetupGroupConstantKeys
) => {
  const daoProposalContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "dao_proposal_single"
  );
  const daoPreProposalContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "dao_pre_propose_single"
  );
  const daoVotingCw4ContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "dao_voting_cw4"
  );
  const cw4ContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "cw4_group"
  );
  const daoVotingCw20StakedContractCode =
    customQueries.contract.getContractCode(
      chainNetwork,
      "dao_voting_cw20_staked"
    );
  const cw20BaseContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "cw20_base"
  );
  const cw20StakeContractCode = customQueries.contract.getContractCode(
    chainNetwork,
    "cw20_stake"
  );

  const groupConst = setup_group_constants({
    daoVotingCw4ContractCode,
    daoVotingCw20StakedContractCode,
    cw4ContractCode,
    cw20BaseContractCode,
    cw20StakeContractCode,
  })[groupFromConstants];
  const gProposal = groupConst.proposal_modules_instantiate_info;
  const gVoting = groupConst.voting_module_instantiate_info;

  const msg = {
    admin: null,
    automatically_add_cw20s: true,
    automatically_add_cw721s: true,
    description: groupConst.description,
    image_url: groupConst.image_url,
    name: groupConst.name,
    proposal_modules_instantiate_info: [
      {
        admin: { core_module: {} },
        code_id: daoProposalContractCode,
        label: `${groupConst.name} Dao_DaoProposalSingle`,
        msg: utils.conversions.jsonToBase64({
          allow_revoting: gProposal.allow_revoting,
          close_proposal_on_execution_failure:
            gProposal.close_proposal_on_execution_failure,
          max_voting_period: gProposal.max_voting_period,
          min_voting_period: gProposal.min_voting_period,
          only_members_execute: gProposal.only_members_execute,
          pre_propose_info: {
            module_may_propose: {
              info: {
                admin: { core_module: {} },
                code_id: daoPreProposalContractCode,
                label: `${groupConst.name} Dao_pre-propose-DaoProposalSingle`,
                msg: utils.conversions.jsonToBase64({
                  deposit_info: gProposal.pre_propose_info.deposit_info,
                  extension: {},
                  open_proposal_submission:
                    gProposal.pre_propose_info.open_proposal_submission,
                }),
              },
            },
          },
          threshold: gProposal.threshold,
        }),
      },
    ],
    voting_module_instantiate_info: {
      admin: { core_module: {} },
      code_id: gVoting.code_id,
      label: `${groupConst.name} Dao_Voting_module`,
      msg: utils.conversions.jsonToBase64(gVoting.msg),
    },
  };

  return msg;
};
