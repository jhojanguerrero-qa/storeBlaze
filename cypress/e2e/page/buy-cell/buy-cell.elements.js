export class buyCelElements {
    static get buyCel(){
        return {
            get productWindow(){
                return cy.get('img.card-img-top').eq(0);
            },
            get addCartProduct(){
                return cy.contains('a', 'Add to cart');
            }
        }
    }

}

