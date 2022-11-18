/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-plugin-tab')
//primero instalo el plugin en la consola poniendo npm install -D cypress-plugin-tab
//y segundo pongo aquí require('cypress-plugin-tab') para que funcione la funcion tab en
//ésta página. También se puede poner ésto segundo arriba del todo en cypress/support/e2e.js
//Todo ésto está documentado en https://www.npmjs.com/package/cypress-plugin-tab

describe("Primer reto", () => {

    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "ToolsQA")

        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").type("Alden")
        //capturo la casilla de busqueda y digo que escriba uno de los nombres existentes en el listado ("Alden" por ejemplo)
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()
        //con ésto lo digo que borre lo que he escrito en la casilla de búsqueda


        //Agregando una nueva entrada:

        cy.wait(2000)
        cy.get('#addNewRecordButton').should("be.visible").click()
        //click en el botón de añadir
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").type("David").tab()
        //capturo el primer elemento del formulario y lo relleno y ya voy tabulando a los siguientes elementos del formulario y rellenándolos
        .type("Serna").tab()
        .type("david@gmail.com").tab()
        .type("35").tab()
        .type("30000").tab()
        .type("QA testing")
        cy.get('#submit').should("be.visible").click()
        //capturo el botón de submit y hago click en él y ya ha guardado el nuevo registro


        //Buscar el nuevo registro en el listado con el buscador:

        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").type("David")
        //capturo la casilla de busqueda y digo que escriba el nombre del nuevo registro ("David")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()
        //con ésto lo digo que borre lo que he escrito en la casilla de búsqueda


        //Editar un registro de la tabla:

        cy.get("#edit-record-1").should("be.visible").click()
        //capturo el botón de editar el primer registro, validamos que sea visible y le hago click
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").clear().type("Abre").tab()
        //capturo la primera casilla del formulario y le digo que borre el nombre existente 
        //y que escriba como nombre "Abre" y que luego tabule
        .tab() //el apellido no lo modifico y sólo tabulo
        .type("abre@example.com").tab() //modifico el mail y tabulo
        cy.get('#submit').should("be.visible").click()
        //capturo el botón de submit, validamos que sea visible y hago click en él..


        //Eliminar un registro de la tabla:
        cy.wait(1000)
        cy.get("#delete-record-1").should("be.visible").click()
        //capturo el botón de eliminar el primer registro, validamos que sea visible y hago click en él
       

    })

    
})