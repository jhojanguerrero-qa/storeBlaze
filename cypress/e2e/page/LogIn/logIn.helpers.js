import { logInElements } from "./logIn.elements";

export class logInHelpers{
    static typeInputUsernameLogIn(user){
        logInElements.LogInForm.inputUsername.type(user);
    }

    static typeInputPasswordLogIn(pass){
        logInElements.LogInForm.inputPassword.type(pass);        
    }

    static clicButtomLogIn(){
        logInElements.LogInForm.btnFinishLogIn.click();        
    }

}