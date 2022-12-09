/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

//Documentación de comandos personalizados en: https://docs.cypress.io/api/cypress-api/custom-commands#Syntax


describe('Comandos personalizados', () => { 

    let tiempo=1000

    before( () =>{
        cy.visit('https://demoqa.com/text-box') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })

    it('Demo 1 por custom commands simples', () =>{
        //En el explorador de la izquierda, en support/commands.js  es donde se configuran los comandos personalizados:
        //una vez creado mi comando personalizado en support/commands.js lo uso aquí poniendo cy.Nombredelcomandocreado y entre paréntesis 
        //el contenido que le quiero pasar para cada parámetro que hayamos configurado en el otro lado: 
        cy.Texto_visible('#userName',"Manuel")

        //Aquí lo mismo, pero uso mi custom command pasándole ahora por parámetros
        //la etiqueta para el mail y la dirección de correo
        cy.Texto_visible('#userEmail',"manuel@gmail.com")

        //Aquí uso mi custom command de click_sencillo pasandole por argumentos el selector del botón en el que quiero el click:
        cy.Click_sencillo("#submit")

        //Aquí uso mi custom command de click_force_xpath pasándole un xpath de un enlace para que haga click en él:
        cy.Click_force_xpath("//span[@class='text'][contains(.,'Web Tables')]")
    })


    it.only('Demo 2 por custom commands de bloque completo', () =>{
        //con ésta sóla función rellena todo el formulario de la página web:
       cy.Bloque_ToolsQA("juan", "juan@gmail.com", "Larios 1", "Nueva 10")
    })
});