import { commonPageConstans } from "./common-page-constans";
import { commonPageElement } from "./common-page.element";

export class commonPageHelper{
    static visitUrl(){
        cy.visit(commonPageConstans.Url);
    }

    static clicklogin(){
        commonPageElement.menuPage.Login.click();
    }
}