/// <reference types="Cypress" />
//para que autocomplete los comandos

describe("Funciones para type", () => {

    it("Type ENTER", () => {
        cy.visit("https://www.google.es/") //que visite google.es

        cy.title().should('eq', "Google")//que compruebe que en el head, la etiqueta title sea igual a (equal to) "Google"

        cy.wait(1500) //que espere 1500ms (1.5 seg)

        cy.get("[name='q']").type("cypress io {enter}", {force: true})
        //inspeccionando la pag de google.es, inspecciono la casilla (ó formulario) de google donde se ingresa el texto a buscar, 
        //y la selecciono por ejemplo por su etiqueta name, que pone name='q' (para seleccionar la etiqueta la he de poner entre corchetes)
        //y le digo que en el buscador escriba "cypress io" y que pulse enter. Devolvía un error, por lo que, en esos casos, hay que poner de segundo parámetro lo del {force: true} para que omita el error
     
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click( {force: true})
        //inspecciono el primer link de los resultados de la búsqueda de google, y capturo el selector entero (abajo en la etiqueta del inspector de dicho elemento (resaltada en azul), hago click derecho, copy, copy selector y lo pego aquí dentro del paréntesis del get)
        //y le digo que haga click en dicho link (le he puesto el {force: true} en éste caso al click porque era el elemento que daba error)
        //de éste modo le digo que haga click en dicho enlace y lo hace, por lo que redirige a la web de cypress

    })

    
})