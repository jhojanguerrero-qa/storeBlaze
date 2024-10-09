import { signUpElements } from "./signUp.elements";

export class signUpHelpers {

    static nameRandom(length = 8){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    static typeInputUsernameSignup(user){
        signUpElements.SignUpForm.inputUsername.type(user);
    }

    static typeInputPasswordSignup(pass){
        signUpElements.SignUpForm.inputPassword.type(pass);        
    }

    static clicButtomSignup(){
        signUpElements.SignUpForm.btnFinishSignUp.click();        
    }
}