/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios



describe("Selects", () => {

    it("Select en un listado desplegable", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get("#select-demo").should("be.visible").select("Friday").should("have.value", "Friday")
        //Le digo en la validación que debe tener valor "Friday", veo el value de cada día al inspeccionar el desplegable
        cy.wait(1000)
        cy.get("#select-demo").should("be.visible").select("Saturday").should("have.value", "Saturday")
    })

    it.only("Select en un buscador tipo google", () => {
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.wait(1000)

        cy.get('.gLFyf').should("be.visible").type("Ferrari", {force: true}).type("{enter}", {force: true})
        //le metemos el {force: true} como segundo parámetro porque daba error de que estaba cubierto
        //por otro elemento
        
        cy.get('.MUFPAc > :nth-child(2) > a').click( {force: true})
        //y capturo el botón de imágenes y le digo que haga click. De nuevo ponemos el force: true porque
        //daba el mismo error de nuevo la pag de Google, decía que el elemento estaba cubierto por otro elemento
    })

    
})