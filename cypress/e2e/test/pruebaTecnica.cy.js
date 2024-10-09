import { homePageConstans } from "../page/Home-page/home-page.constans";
import { homePageHelpers } from "../page/Home-page/home-page.helpers";
import { signUpHelpers } from "../page/SingUp/signup.helpers";
let username = '';
describe("prueba tecnica", () =>{
    beforeEach(() => {
        homePageHelpers.visiturl();
    });

    it("registro usuario" , () => {
        username = signUpHelpers.nameRandom();
        let pass = homePageConstans.password; 
        homePageHelpers.clickOptionMenuSignUp();
        signUpHelpers.typeInputUsernameSignup(username);
        signUpHelpers.typeInputPasswordSignup(pass);
        signUpHelpers.clicButtomSignup();
    });


    it("logeo usuario", () =>{

    })
})