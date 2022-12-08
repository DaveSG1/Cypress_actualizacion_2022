/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks', () => { 

    before(() => {
        cy.log("############### Sólo una vez antes de ejecutar ningún test ####################")
        cy.wait(2000)
    })

    beforeEach(() => {
        cy.log("Esto se repite antes de todos y cada uno de los tests, muy importante") 
        cy.wait(2000)       
    })

    afterEach(() => {
        cy.log("Esto se repite después de todos y cada uno de los tests, muy importante")
        cy.wait(2000)
    })

    after(() => {
        cy.log("############## Sólo una vez al final de ejecutar todos los tests ##################")
        cy.wait(2000)
        cy.visit('https://demoqa.com') //por ejemplo le puedo decir que cuando acabe de ejecutar todos los tests, visite ésta página web
    })


    it('test uno', () =>{
        cy.log("test uno")
        cy.wait(2000)
    })

    it('test dos', () =>{
        cy.log("test dos")
        cy.wait(2000)
    })
});