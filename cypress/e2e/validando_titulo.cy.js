Cypress. on('uncaught:exception', (err, runnable) => { return false; });
//Ésto lo busqué para los tests que daban éste error: (uncaught exception) TypeError: e(...).setup is not a function
//por lo que viendo las preguntas del curso, indicaba que, cuando pase éste error u otro,
//hay que añadir ésta linea en el código para que lo omita y así funcione, bien en cada test individual en la primera línea del mismo
//o bien en support/e2e.js (ya lo voy a poner ahí para que aplique a todos los tests en adelante y no tener que poner ésta línea en todos ellos)


/// <reference types="Cypress" />  
//para que autocomplete los comandos

describe("Seccion 1 validando el titulo", () => {

    it('Test validar el titulo', () => {
        cy.visit("https://demoqa.com/text-box")

        cy.title().should('eq', 'ToolsQA')   //le digo que compruebe que en la pagina que uso, compruebe que en el head, el title sea exactamente equal to (igual a) "ToolsQA"

        cy.log("Ok la funcion title funciono bien") // y que, si es exactamente igual, devuelva éste mensaje por consola
    })


    
})