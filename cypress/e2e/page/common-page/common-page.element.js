export class commonPageElement{
    static get menuPage(){
        return {
            get Login(){
               return cy.get('a[data-target="#logInModal"]')
            },
        };
    } 
}