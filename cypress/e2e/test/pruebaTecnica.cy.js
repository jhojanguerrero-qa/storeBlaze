import { homePageHelpers } from "../page/Home-page/home-page.helpers";

describe("prueba tecnica", () =>{
    beforeEach(() => {
       homePageHelpers.visiturl()        
    });

    it("registro usuario" , () => {
        homePageHelpers.clicRegistro()
    });
})