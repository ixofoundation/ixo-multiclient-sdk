import base58 from "bs58";
import { createClient, getUser, ixo, utils } from "./common";
import { constants, fee, WalletUsers } from "./constants";

/**
 * Requires CreatePaymentTemplate to be run first to create paymentTemplateId used
 */
export const CreateProject = async () => {
  const projectData = {
    nodeDid: "nodeDid",
    requiredClaims: "500",
    serviceEndpoint: "serviceEndpoint",
    createdOn: "2020-01-01T01:01:01.000Z",
    createdBy: "Creator",
    status: "",
    fees: {
      "@context": "",
      items: [{ "@type": "OracleFee", id: constants.paymentTemplateId }],
    },
  };

  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any),
    true
  );

  const tester = getUser();
  const did = tester.did;
  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );

  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgCreateProject",
    value: ixo.project.v1.MsgCreateProject.fromPartial({
      senderDid: did,
      projectDid: projectDid,
      pubKey: base58.encode(projectAccount.pubkey),
      txHash: "",
      projectAddress: projectAccount.address,
      data: utils.conversions.JsonToArray(JSON.stringify(projectData)),
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    {
      amount: [
        {
          denom: "uixo",
          amount: "1000000",
        },
      ],
      gas: "3000000",
    }
  );
  return response;
};

/**
 * @param status one of 'CREATED' | 'PENDING' | 'FUNDED' | 'STARTED'
 */
export const UpdateProjectStatus = async (
  status: "CREATED" | "PENDING" | "FUNDED" | "STARTED"
) => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgUpdateProjectStatus",
    value: ixo.project.v1.MsgUpdateProjectStatus.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: ixo.project.v1.UpdateProjectStatusDoc.fromPartial({ status }),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};

/**
 * @param role one of 'SA' | ''.
 */
export const CreateAgent = async (role: string = "SA") => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgCreateAgent",
    value: ixo.project.v1.MsgCreateAgent.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: ixo.project.v1.CreateAgentDoc.fromPartial({ agentDid: did, role }),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};

/**
 * Not implemented on chain!!!
 */
export const UpdateAgent = async () => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgUpdateAgent",
    value: ixo.project.v1.MsgUpdateAgent.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: ixo.project.v1.UpdateAgentDoc.fromPartial({
        did: did,
        status: "AWESOME",
      }),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};

export const CreateClaim = async () => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgCreateClaim",
    value: ixo.project.v1.MsgCreateClaim.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: ixo.project.v1.CreateClaimDoc.fromPartial({
        claimId: constants.projectClaimId,
        claimTemplateId: constants.projectTemplateId,
      }),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};

export const CreateEvaluation = async () => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const message = {
    typeUrl: "/ixo.project.v1.MsgCreateEvaluation",
    value: ixo.project.v1.MsgCreateEvaluation.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: ixo.project.v1.CreateEvaluationDoc.fromPartial({
        claimId: constants.projectClaimId,
        status: "1",
      }),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};

export const WithdrawFunds = async () => {
  const client = await createClient();

  const tester = getUser();
  const account = (await tester.getAccounts())[0];
  const myAddress = account.address;
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;

  const message = {
    typeUrl: "/ixo.project.v1.MsgWithdrawFunds",
    value: ixo.project.v1.MsgWithdrawFunds.fromPartial({
      senderDid: did,
      data: ixo.project.v1.WithdrawFundsDoc.fromPartial({
        projectDid: projectDid,
        recipientDid: did,
        amount: "100000",
        isRefund: true,
      }),
      senderAddress: myAddress,
    }),
  };

  const response = await client.signAndBroadcast(myAddress, [message], fee);
  return response;
};

export const UpdateProjectDoc = async () => {
  const client = await createClient(
    getUser(WalletUsers.project, constants.projectWalletType as any)
  );

  const tester = getUser();
  const did = tester.did;

  const project = getUser(
    WalletUsers.project,
    constants.projectWalletType as any
  );
  const projectDid = project.did;
  const projectAccount = (await project.getAccounts())[0];

  const data = {
    nodeDid: "nodeDid",
    requiredClaims: "500",
    serviceEndpoint: "serviceEndpoint",
    createdOn: "2020-01-01T01:01:01.000Z",
    createdBy: "Creator",
    status: "",
    fees: {
      "@context": "",
      items: [{ "@type": "OracleFee", id: "payment:template:oracle-fee" }],
    },
    newField: "someNewField",
  };

  const message = {
    typeUrl: "/ixo.project.v1.MsgUpdateProjectDoc",
    value: ixo.project.v1.MsgUpdateProjectDoc.fromPartial({
      txHash: "",
      senderDid: did,
      projectDid: projectDid,
      data: utils.conversions.JsonToArray(JSON.stringify(data)),
      projectAddress: projectAccount.address,
    }),
  };

  const response = await client.signAndBroadcast(
    projectAccount.address,
    [message],
    fee
  );
  return response;
};
