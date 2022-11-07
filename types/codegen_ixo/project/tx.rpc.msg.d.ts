import { Rpc } from "../helpers";
import { MsgCreateProject, MsgCreateProjectResponse, MsgUpdateProjectStatus, MsgUpdateProjectStatusResponse, MsgCreateAgent, MsgCreateAgentResponse, MsgUpdateAgent, MsgUpdateAgentResponse, MsgCreateClaim, MsgCreateClaimResponse, MsgCreateEvaluation, MsgCreateEvaluationResponse, MsgWithdrawFunds, MsgWithdrawFundsResponse, MsgUpdateProjectDoc, MsgUpdateProjectDocResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    /** CreateProject defines a method for creating a project. */
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    /** UpdateProjectStatus defines a method for updating a project's current status. */
    updateProjectStatus(request: MsgUpdateProjectStatus): Promise<MsgUpdateProjectStatusResponse>;
    /** CreateAgent defines a method for creating an agent on a project. */
    createAgent(request: MsgCreateAgent): Promise<MsgCreateAgentResponse>;
    /** UpdateAgent defines a method for updating an agent on a project. */
    updateAgent(request: MsgUpdateAgent): Promise<MsgUpdateAgentResponse>;
    /** CreateClaim defines a method for creating a claim on a project. */
    createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
    /** CreateEvaluation defines a method for creating an evaluation for a specific claim on a project. */
    createEvaluation(request: MsgCreateEvaluation): Promise<MsgCreateEvaluationResponse>;
    /** WithdrawFunds defines a method for project agents to withdraw their funds from a project. */
    withdrawFunds(request: MsgWithdrawFunds): Promise<MsgWithdrawFundsResponse>;
    /** UpdateProjectDoc defines a method for updating a project's data. */
    updateProjectDoc(request: MsgUpdateProjectDoc): Promise<MsgUpdateProjectDocResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    updateProjectStatus(request: MsgUpdateProjectStatus): Promise<MsgUpdateProjectStatusResponse>;
    createAgent(request: MsgCreateAgent): Promise<MsgCreateAgentResponse>;
    updateAgent(request: MsgUpdateAgent): Promise<MsgUpdateAgentResponse>;
    createClaim(request: MsgCreateClaim): Promise<MsgCreateClaimResponse>;
    createEvaluation(request: MsgCreateEvaluation): Promise<MsgCreateEvaluationResponse>;
    withdrawFunds(request: MsgWithdrawFunds): Promise<MsgWithdrawFundsResponse>;
    updateProjectDoc(request: MsgUpdateProjectDoc): Promise<MsgUpdateProjectDocResponse>;
}
