/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//primero instalo el plugin en la consola poniendo npm install -D cypress-xpath
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios

describe("Segundo reto", () => {

    it("Realizamos el segundo reto del curso de Cypress ", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database')
        cy.wait(1500)

        //Buscando en la barra de búsqueda
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("ACE")
        cy.wait(1000)

        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)

        //Añadiendo un ordenador nuevo
        cy.get('#add').should("be.visible").click()
        cy.wait(1000)

        cy.get("[name='name']").should("be.visible").type("cypress").tab()
        .type("2021-03-15").tab()
        .type("2025-03-15").tab()
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16")
        //ésta línea es la del desplegable, lo nuevo aquí es que le indico con el .select cuál de 
        //los elementos (indicando su nombre), del desplegable quiero que seleccione. 
        //Veo todo el listado en el inspector ("Nokia")
        //y le hago una validación con el .should diciéndole como primer parámetro el have.value, y
        //como segundo parámetro el valor que debe tener, lo veo en el inspector, y a Nokia le corresponde el valor 16
        .wait(1500)

        cy.xpath('//*[@id="main"]/form/div/input').should("be.visible").click()   

    })

    
})