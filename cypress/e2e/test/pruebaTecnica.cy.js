import { homePageConstans } from "../page/Home-page/home-page.constans";
import { homePageHelpers } from "../page/Home-page/home-page.helpers";
import { logInHelpers } from "../page/LogIn/logIn.helpers";
import { signUpHelpers } from "../page/SingUp/signup.helpers";
let username = '';
let pass = homePageConstans.password;
describe("prueba tecnica", () =>{
    beforeEach(() => {
        homePageHelpers.visiturl();
    });

    it("registro usuario" , () => {
        username = signUpHelpers.nameRandom();
        homePageHelpers.clickOptionMenuSignUp();
        cy.wait(1000); 
        signUpHelpers.typeInputUsernameSignup(username);
        signUpHelpers.typeInputPasswordSignup(pass);
        signUpHelpers.clicButtomSignup();
        cy.wait(1000); 

    });


    it("logeo usuario", () =>{
        homePageHelpers.clickOptionMenuLogIn();
        cy.wait(1000); 
        logInHelpers.typeInputUsernameLogIn(username);
        logInHelpers.typeInputPasswordLogIn(pass);
        logInHelpers.clicButtomLogIn();
        cy.wait(1000); 

    })
})