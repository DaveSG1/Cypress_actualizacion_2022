/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Nueva sección checkbox", () => {

    it("check todos", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq', "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get('[type="checkbox"]').check().should("be.checked")
        //selecciono el primer checkbox por tipo, le digo que le marque como check, y le meto una
        //validación diciéndolo que compruebe que está marcado con el check
        //Como he seleccionado sólo por type y todos los checkbox de la web tienen la misma etiqueta type, 
        //los marca todos
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck().should("not.be.checked")
        //con ésto hago lo mismo pero para descheckearlos, y hago la validación para que compruebe
        //que los descheckea todos
    })


    it("check uno", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq', "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        //Lo mismo para marcar sólo el primer checkbox, en éste caso capturo la etiqueta del checkbox
        //usando la propia herramienta (el visor) del navegador de Cypress, y una vez clickado el visor,
        //hago click en el primer checkbox y me copio el código que autorrellena arriba
        cy.get('#isAgeSelected').check().should("be.checked")
        cy.wait(2000)
        cy.get('#isAgeSelected').uncheck().should("not.be.checked")

        //Lo mismo para marcar sólo el último checkbox, en éste caso capturo la etiqueta del checkbox
        //haciendo click derecho en el checkbox, selecciono Relative Xpath, y click en el primer resultado
        //en la pantalla emergente copio el código del Xpath (tercera casilla)
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").check().should("be.checked")
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").uncheck().should("not.be.checked")
    })


    it("Radio buttons", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should('eq', "Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        cy.get('.panel-body > :nth-child(2) > input').check()     
        //capturo el radius button con la propia herramienta (el visor) del navegador de cypress
        //igual que antes, la única diferencia es que aquí no puedo hacer la validación de si está checkeado: .should("be.checked")     
     
    })


    
    it.only("Multiselect: Seleccionar varios elementos a la vez", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq', "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get('#multi-select').should("be.visible").select(["California","Ohio","Washington"])
        //Con ésto le digo que marque los 3 resultados a la vez. Miro los nombres exactos en el inspector
        .then(()=>{
            cy.get('#printMe').should("be.visible").click()
        })
        //Promesa: Con éste .then le digo que, si ha podido hacer la multiselección anterior, entonces haga click en el botón de abajo

    })

    
})