import { homePageConstans } from "./home-page.constans";
import { homePageElements } from "./home-page.elements";
export class homePageHelpers {
    static visiturl(){
        cy.visit(homePageConstans.url);
        cy.wait(2000);
    }
    
    static clicRegistro(){
        homePageElements.mainMenu.menuRegistro.click();
    }

}