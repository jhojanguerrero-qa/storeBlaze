import { homePageConstans } from "./home-page.constans";
import { homePageElements } from "./home-page.elements";
export class homePageHelpers {
    static visiturl(){
        cy.visit(homePageConstans.url);
        cy.wait(2000);
    }

    static nameRandom(length = 8){
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    
    static clicRegistro(){
        homePageElements.mainMenu.menuRegistro.click();
    }

    static setSingUpUsername(user){
        homePageElements.formsingup.username.type(user);
             
    }

    static setSingUpPassword(pass){
        homePageElements.formsingup.password.type(pass);
    }

    static clicSingUpModal(){
        homePageElements.formsingup.btnSingUp.click();
    }


}