/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')

describe("Tipos de selectores", () => {

    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos")
        //para seleccionar por id, busco en el inspector el id del elemento a seleccionar, y
        //aquí para decir que es un id he de meter delante la almohadilla #

        cy.get('#userEmail').should("be.visible").type("demo@gmail.com")
    })


    it("Selector por atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Pedro")
        //para seleccionar por atributo (por ejemplo por el placeholder de una casilla de un formulario), 
        //busco en el inspector el elemento a seleccionar completo (placeholder=Full Name), y
        //aquí lo pego entero y lo meto entre corchetes, el nombre en sí (Full Name) lo meto entre 
        //comillas simples para que no de error con las comillas dobles de fuera (o viceversa, ver el ejemplo de la siguiente línea)

        cy.get('[placeholder="name@example.com"]').should("be.visible").type("demo2@gmail.com")
    })


    it.only("Selector por Xpath", () => {
        //hay q instalar el plugin con npm install -D cypress-xpath (viene en la pag npmjs.com/cypress-xpath)
        //y añadir arriba de la pagina de test (ver linea 4): require('cypress-xpath')
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan")
        //para seleccionar por Xpath pongo cy.xpath() en vez de cy.get, 
        //busco en el inspector el elemento a seleccionar, y abajo, en elementos de la consola
        //hago click derecho sobre el texto del elemento (resaltado en azul) y marco Copy/Copy Xpath, 
        //lo almacena en el portapapeles y aquí lo pego dentro del paréntesis de xpath(). 
        //Ojo cambiar al nombre en si (userName)de comillas dobles a simples (o viceversa, ver siguiente linea) para que no de error

        cy.xpath('//*[@id="userEmail"]').should("be.visible").type("demo3@gmail.com")
    })

    
})