import { buyCelElements } from "./buy-cell.elements";

export class buyCelHelpers{
    static clickNameProduct(){
        buyCelElements.buyCel.productWindow.click();
    }
    static clickAddCartProduct(){
        buyCelElements.buyCel.addCartProduct.click();
    }
}