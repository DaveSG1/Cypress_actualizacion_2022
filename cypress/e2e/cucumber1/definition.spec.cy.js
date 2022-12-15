/// <reference types="cypress" />
import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";

Given('Abrir el navegador principal',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When('Cargando el nombre',()=>{
    cy.get('#userName').should('be.visible').type('rodrigo')
    cy.wait(500)
})

When('Cargando el email',()=>{
    cy.get('#userEmail').should('be.visible').type('rodrigo@gmail.com')
    cy.wait(500)
})

And('Cargando la dirección',()=>{
    cy.get('#currentAddress').should('be.visible').type('Direccion uno')
    cy.wait(500)
})

Then('Validar el nombre de la página',()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(1000)
})

