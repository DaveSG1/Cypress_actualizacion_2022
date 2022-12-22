//Cómo insertar datos aleatorios en un formulario en distintas iteraciones o pruebas:

/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Random data', () => { 

    let tiempo=1000
    let numero_pruebas=5

    it('Test 1', () =>{
        for(let num=1;num<=numero_pruebas;num++){

            let array_nombres = ["Pedro", "Juan", "Jose", "Ana", "Maria"]  //definimos un array con varios nombres entre los que irá generando aleatoriamente

            let nombre_aleatorio = array_nombres[Math.floor(Math.random() * array_nombres.length)] //para que genere nombres aleatorios de entre los contenidos en el array de arriba (array_nombres)

            let numero_aleatorio = Math.floor(Math.random() * 250) //para que genere números aleatorios (en éste caso del 0 al 250)

            let numero_aleatorio2 = Math.floor(Math.random() * 250) //para que genere números aleatorios distintos para el siguiente campo (sino pondría el mismo) (en éste caso del 0 al 250)

            cy.visit('https://demoqa.com/text-box') 
            cy.title().should('eq','ToolsQA')
            cy.wait(tiempo)

            cy.xpath("//input[contains(@id,'userName')]").should("be.visible").type("" + nombre_aleatorio)
            cy.wait(tiempo)
            cy.xpath("//input[contains(@id,'userEmail')]").should("be.visible").type("" + nombre_aleatorio + "@gmail.com")
            cy.wait(tiempo)
            cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Dirección " + numero_aleatorio)
            cy.wait(tiempo)
            cy.xpath("//textarea[contains(@id,'permanentAddress')]").should("be.visible").type("Dirección " + numero_aleatorio2)
            cy.wait(tiempo)          

        }       
    })
});