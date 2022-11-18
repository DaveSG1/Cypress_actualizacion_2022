
/// <reference types="Cypress" />
//para que autocomplete los comandos

describe("Introduccion a los asserts", () => {

    it("Demo de los Asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')

        cy.wait(1000)

        cy.get('#firstName').should("be.visible").type("Juan")
        //le digo que el campo con id fistName debe ser visible (para validar que el id sea correcto) y que una vez comprobado, escriba en el mismo Juan
        cy.wait(1000)

        cy.get('#lastName').should("be.visible").type("Perez")
        cy.wait(1000)

        cy.get('#userEmail').should("be.visible").should("be.enabled").type("juan@gmail.com")
        //con ésto le digo que ha de ser visible y estar habilitado (más comprobaciones)
        
    })

    
})