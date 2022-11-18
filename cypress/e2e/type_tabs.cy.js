//const { type } = require('cypress/types/jquery');
//Esta línea si la pone automáticamente la tengo que borrar porque sino da error

/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-plugin-tab')
//primero instalo el plugin en la consola poniendo npm install -D cypress-plugin-tab
//y segundo pongo aquí require('cypress-plugin-tab') para que funcione la funcion tab en
//ésta página. También se puede poner ésto segundo arriba del todo en cypress/support/e2e.js
//Todo ésto está documentado en https://www.npmjs.com/package/cypress-plugin-tab

describe("Ejemplo funcion Tab", () => {

    it("Type con Tab", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.wait(1000)

        cy.get("#userName").type("David Serna").tab()
        .type("david@gmail.com").tab()
        .type("Calle Larios, 1 Malaga")  
        //selecciono sólo el primer id del formulario (en el que quiero empezar)
        //y ya luego voy sólo diciendo que tabule y lo que ha de escribir en el siguiente
        //hueco del formulario (no hace falta poner los id de cada hueco, sólo del primero)

    })

    
})