/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Campos de tipo fecha", () => {

    it("Fecha 1", () => {        
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')        
        cy.wait(1500)  
        
        //Es necesario, tras escribir la fecha, darle a algún botón para confirmar. Si le doy a enter
        //cambia a otra fecha, por lo que no nos sirve. Si le doy a escape sí, pero si le doy justo seguido del
        //type, borra la fecha, por lo que tengo que poner es el escape dentro de una promesa para que,
        //una vez haya registrado la fecha, el siguiente paso sea darle a escape: 
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("02/12/2022")
        .then(()=>{
            cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type('{esc}')
        })                   
    })


    it.only("Fecha 2", () => {  
        cy.wait(1500)      
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')        
        cy.wait(1500)          
         
        //Igual que el ejemplo anterior pero poniendo el escape dentro del mismo type, 
        //así me ahorro hacer la promesa sólo para el escape:
        cy.get('[placeholder="Start date"]').should("be.visible").type("05/11/2022 {esc}") //el escape dentro del mismo type    
        
        cy.get('[placeholder="End date"]').should("be.visible").type("02/12/2022 {esc}")  //el escape dentro del mismo type
       
    })

})