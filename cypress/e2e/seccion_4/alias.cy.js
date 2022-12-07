/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Alias", () => {     
          
     it("Alias 1", () => {  
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq', "Input Validation")  
        cy.wait(1500)   
        
        cy.get('#firstname').should("be.visible").as("nom") //Creamos un alias para ese campo (lo puedo llamar como quiera)
        cy.get("@nom").type("Pedro") //Utilizo el alias creado para ese campo invocándolo ya no por su etiqueta sino por su alias

        cy.get("#surname").should("be.visible").as("ap") //Creamos alias para otro campo (apellido)
        cy.get("@ap").type("Fernández López") //Lo utilizamos 

        //Lo mismo para todos los demás campos del formulario:
        cy.get('#age').should("be.visible").as("edad")
        cy.get("@edad").type("40")

        cy.get('#country').should("be.visible").as("pais")
        cy.get("@pais").select("Bulgaria").should("have.value", "Bulgaria")

        cy.get('#notes').should("be.visible").as("notas")
        cy.get("@notas").type("Demo del contenido de la nota")

        cy.xpath("//input[contains(@type,'submit')]").click({force:true}) //Hago click en submit
                              
    }) 
    
})
