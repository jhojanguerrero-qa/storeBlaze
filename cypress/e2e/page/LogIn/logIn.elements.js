export class logInElements {
    static get LogInForm(){
        return{
            get inputUsername(){
                return cy.get('input#loginusername') ;
            },
            get inputPassword(){
                return cy.get('input#loginpassword');
            },
            get btnFinishLogIn(){
                return  cy.contains('button', 'Log in');
            },
        }
    }

}