/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios

describe("Referencias a Windows", () => {

    it("Propiedad charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        cy.document().should("have.property", "charset").and('eq','UTF-8')
        //con esto validaríamos nuestro documento si posee el charset UTF-8, es decir, si acepta eñes, etc
        //el charset lo veo al inspeccionar la web, en la sección head
    })


    it("validar la url", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')        
        cy.wait(1500)

        //para comprobar sólo una parte de la url
        cy.url().should("include","random-number.html")

        //para comprobar la url completa
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
    })

    
    it("cambiar el viewport o tamaño ventana navegador Cypress", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')        
        cy.wait(1500)

        //Se puede hacer globalmente para todos los tests, en el archivo cypress.config.js ó
        //para un test en concreto, como aquí, establezco el ancho y el largo en que quisiera verlo
        //usando el código:

        //cy.viewport(550, 750)

        //para desactivar por defecto la seguridad de las webs https ver archivo cypress.config.js también
    })

    
})