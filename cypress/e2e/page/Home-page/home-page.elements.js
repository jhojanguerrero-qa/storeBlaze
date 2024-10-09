export class homePageElements {
    static get mainMenu(){
        return {
             get menuRegistro(){
                return cy.get('a[data-target="#signInModal"]');
             }
        }
    }
}