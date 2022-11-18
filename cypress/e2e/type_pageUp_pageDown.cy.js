

/// <reference types="Cypress" />
//para que autocomplete los comandos

describe("Ejemplo de Type pageUp, pageDown", () => {

    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.wait(1000)

        cy.get("#userName").type('{pageup}')
        //inspecciono el primer elemento del formulario, cuyo id es "username" y lo meto en el get con la almohadilla para capturar por id, el . es para capturar por clase
        //y con type('{pageup}') le digo que, cuando esté seleccionada dicha casilla del formulario, la coloque al principio de la página

        cy.wait(2000)        
    })


    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.wait(1000)       

        cy.get('#userName').type('{pagedown}')        
        //lo mismo, selecciono el mismo elemento
        //y con type('{pagedown}') le digo que, cuando esté seleccionada dicha casilla del formulario, la coloque al final de la página

        cy.wait(2000)
    })


    //si quisiera que sólo corriera uno de los tests (cada it es un test diferente),
    //le añadiría detrás del it que quiero ejecutar .only (quedaría it.only y todo lo demás igual)
    //así solo correría ese test sin tener que correrlos todos y perder tiempo

    
})