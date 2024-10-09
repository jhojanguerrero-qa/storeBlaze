import { commonPageHelper } from "../page/common-page/common-page.helper"

describe("registro", () =>{
    it("registro usuario" , () => {
        commonPageHelper.visitUrl();
        commonPageHelper.clicklogin();
        cy.wait(2000);
    })
})