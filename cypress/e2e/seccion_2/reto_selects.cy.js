/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Reto selects", () => {

    it("Reto selects", () => {
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title().should('eq', "Selenium Easy - JQuery Dual List Box Demo")
        cy.wait(1000)

        //Se pueden anidar varios then:
        // 1. Añado varios nombres de la lista de la izquierda a la de la derecha
        // 2. Luego los añado todos
        // 3. Luego los elimino todos
        // 4. Luego le digo que haga un log con el mensaje por consola (sale en la columna de la izqda del navegador, donde los pasos de la ejecución de Cypress)
        cy.get(':nth-child(1) > .form-control').should("be.visible").select(["Manuela", "Valentina", "Helena"])
        .then(()=>{
            cy.get('.pAdd').should("be.visible").click()
            .then(()=>{
                cy.wait(2000)
                cy.get(".pAddAll").click()
                .then(()=>{
                    cy.wait(2000)
                    cy.get(".pRemoveAll").click()
                    .then(()=>{
                        cy.wait(2000)
                        cy.log("Se eliminaron todos los elementos")
                    })
                })
            })
        })  
             
      })
})