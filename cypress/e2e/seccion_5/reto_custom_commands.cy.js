/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto custom commands', () => { 

    let tiempo=1000

    before(() =>{
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })

    it('Reto combo', () =>{
        cy.Bloque_Seleniumeasy("John","Andrews","john@gmail.com","(555) 654-5548","Main street, 1","Los Angeles","California","08512","Johnandco.com","personal web site")
        
    })
});