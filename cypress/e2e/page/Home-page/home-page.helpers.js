import { homePageConstans } from "./home-page.constans";
import { homePageElements } from "./home-page.elements";
export class homePageHelpers {
    static visiturl(){
      cy.visit(homePageConstans.url);
      cy.wait(1500);
    }
    static clickOptionMenuSignUp(){
        homePageElements.mainMenu.SignUpOption.click();
    }

    static clickOptionMenuLogIn(){
        homePageElements.mainMenu.LogInOption.click();
    }
}