/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Reto bucles For y each", () => {

    it("Reto bucles", () => {  
        cy.visit("https://www.demoblaze.com/") 
        cy.title().should('eq', "STORE")  
        cy.wait(1500)   
        
        //creamos un bucle para que recorra los 4 primeros elementos (móviles)
        for(let x=0; x<=3; x++){
            cy.get(".hrefch").eq(x).click() //le digo que coja la etiqueta del nombre de cada móvil y con el eq() de digo que en esa vuelta seleccione el movil que tenga el valor de x (por lo que en la primera vuelta cogerá el 0 ó primer móvil, luego el 1 ó segundo móvil, etc)
            cy.wait(1500)
            cy.get('.col-sm-12 > .btn').should("be.visible").click() //le digo que, abierta la ventana del móvil que toque en esa vuelta, le de al botón de añadir a la cesta
            cy.wait(1500) 
            cy.get('.active > .nav-link').should("be.visible").click() // le digo que, una vez añadido a la cesta, haga click en el botón Home
            cy.wait(1500) 
        }

        cy.get(':nth-child(4) > .nav-link').should("be.visible").click() // le digo que, una vez terminado el bucle y añadidos todos los móviles a la cesta, haga click en la cesta para comprobar que todos los móviles indicados (4) se han añadido
                   
    })
    
})