export class homePageElements {
    static get mainMenu(){
        return {
             get SignUpOption(){
                return cy.get('a[data-target="#signInModal"]');
             },
             get LogInOption(){
                return cy.get('a[data-target="#logInModal"]');
             }
        }
    }
}