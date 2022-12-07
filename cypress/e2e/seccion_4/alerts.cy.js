/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Alertas", () => {     
          
     it("Alerta 1", () => {  
        cy.visit("http://demo.seleniumeasy.com/bootstrap-modal-demo.html") 
        cy.title().should('eq', "Selenium Easy Demo - Bootstrap Modal Demo to Automate")  
        cy.wait(1500) 
        
        cy.xpath("//a[@href='#myModal0']").should("be.visible").click()  //pulso el botón Launch modal por su xpath   
        cy.wait(1500)
        cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({force:true})  //del alert que salta, pulso el boton Save changes (pongo force true en el click para que lo haga sí o sí)

        //Igual pero para el botón Close del alert emergente
        cy.xpath("//a[@href='#myModal0']").should("be.visible").click()        
        cy.wait(1500)
        cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click({force:true})        
              
    }) 
    
})
