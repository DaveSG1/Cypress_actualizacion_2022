/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


//Descargamos el complemento de Google Chrome llamado Cypress Recorder (tb valdría Cypress Recorder, funciona igual) y sirve para lo mismo que el Cypress Record,
//En la extensión en el navegador (Cypress Recorder) le doy a grabar, hago todo el recorrido que quiera por la web y al darle a parar me genera el código,
//lo copio y pego en mi test y arreglo las cosillas que puedan devolver fallo ({force:true}) y demás:


//Todo éste código está generado por el complemento Cypress Scenario Recorder:

        describe('test_name', function() {

            it('what_it_does', function() {
           
               cy.viewport(1396, 644)
            
               cy.visit('https://demoqa.com/')
            
               cy.get('.category-cards > .card:nth-child(1) > div > .avatar > svg').click({force: true})
            
               cy.get('.element-group > .show > .menu-list > #item-0 > .text').click({force: true})
            
               cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').click({force: true})
            
               cy.get('.text-field-container > #userForm > #userName-wrapper > .col-md-9 > #userName').type('david')
            
               cy.get('.text-field-container > #userForm > #userEmail-wrapper > .col-md-9 > #userEmail').type('david@gmail.com')
            
               cy.get('.text-field-container > #userForm > #permanentAddress-wrapper > .col-md-9 > #permanentAddress').click({force: true})
            
               cy.get('.text-field-container > #userForm > .mt-2 > .text-right > #submit').click({force: true})
            
               cy.get('.element-group > .show > .menu-list > #item-2 > .text').click({force: true})
            
               cy.get('.row > .col-12 > div > .custom-control:nth-child(2) > .custom-control-label').click({force: true})
            
               cy.get('.row > .col-12 > div > .custom-control > #yesRadio').type('on')
            
               cy.get('.element-group > .show > .menu-list > #item-1 > .text').click({force: true})
            
               cy.get('.rct-node > .rct-text > .rct-collapse > .rct-icon > path').click({force: true})
            
               cy.get('.rct-node-collapsed:nth-child(1) > .rct-text > .rct-collapse > .rct-icon > path').click({force: true})
            
               cy.get('.rct-node:nth-child(2) > .rct-text > .rct-collapse > .rct-icon > path').click({force: true})
            
               cy.get('#tree-node > ol > .rct-node > .rct-text > label > .rct-checkbox > .rct-icon').click()
            
               cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
            
               cy.get('#tree-node > ol > .rct-node > .rct-text > label > .rct-checkbox > .rct-icon').click({force: true})
            
               cy.get('ol > .rct-node > .rct-text > label > #tree-node-home').check({force:true})
            
               cy.get('.rct-node-leaf:nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click({force: true})
            
               cy.get('ol > .rct-node > .rct-text > label > #tree-node-commands').check({force:true})
            
               cy.get('.rct-node-collapsed:nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click({force: true})
            
               cy.get('ol > .rct-node > .rct-text > label > #tree-node-office').check({force:true})
            
            })

    //Hasta aquí llega el código generado por el complemento Cypress Scenario Recorder
           
           })
           
