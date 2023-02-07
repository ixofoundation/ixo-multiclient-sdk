import { testMsg } from "../helpers/common";
import * as Projects from "../modules/Projects";

export const projectsBasic = () =>
  describe("Testing the Projects module", () => {
    testMsg("/ixo.project.v1.MsgCreateProject", () => Projects.CreateProject());
    testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
      Projects.UpdateProjectStatus("CREATED")
    );
    testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
      Projects.UpdateProjectStatus("PENDING")
    );
    testMsg("/ixo.project.v1.MsgUpdateProjectDoc", () =>
      Projects.UpdateProjectDoc()
    );
    // sendFromFaucet(WalletUsers.project); // Need to fecth other addresses for project to fund
    // testMsg("/ixo.project.v1.MsgCreateAgent", () => Projects.CreateAgent("SA", ));
    testMsg("/ixo.project.v1.MsgUpdateAgent", () => Projects.UpdateAgent());
    testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
      Projects.UpdateProjectStatus("FUNDED")
    );
    testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
      Projects.UpdateProjectStatus("STARTED")
    );
    testMsg("/ixo.project.v1.MsgCreateClaim", () => Projects.CreateClaim());
    testMsg("/ixo.project.v1.MsgCreateEvaluation", () =>
      Projects.CreateEvaluation()
    );
    testMsg("/ixo.project.v1.MsgWithdrawFunds", () => Projects.WithdrawFunds());
  });
