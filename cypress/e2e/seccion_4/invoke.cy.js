/// <reference types="Cypress" />

//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Invoke", () => {     
          
     it("Invoke text", () => {  
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq', "Input Validation")  
        cy.wait(1500)   
        
        cy.get('.page-body > :nth-child(5)').invoke("text").as("info") //Guardamos el texto en sí de éste elemento con el invoke y lo guardamos en un alias
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.") //Valido que el alias en que he guardado el texto del invoke contenga el texto literal ese
        
        cy.wait(1500)

        cy.get('[for="firstname"]').invoke("text").as("title_name") //Capturamos el texto en sí "First name:"" (el label) y lo guardamos en un alias
        cy.get("@title_name").should("contain","First name:").then(()=>{ //Hago un assert de que si ese alias creado contiene el texto "First name:" entonces...
            cy.get('[for="firstname"]').type("Rodrigo")                 //... capturamos el input para escribir y escribo Rodrigo
        })
    }) 


    it("Invoke estilos", () => {  
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq', "Input Validation")  
        cy.wait(1500)  
        
        cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-size:50px") //aquí con el invoke lo llamo por los atributos, por estilo, y le defino los estilos que le quiera aplicar a ese elemento
        
    }) 


    it("Invoke ocultar y mostrar", () => {  
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq', "Input Validation")  
        cy.wait(1500)  
        
        cy.get('[for="firstname"]').invoke("hide") //aquí el invoke lo uso para ocultar los elementos capturados
        cy.get('#firstname').invoke("hide")

        cy.wait(1500) 

        cy.get('[for="firstname"]').invoke("show","3s") //aquí el invoke lo uso para que muestre los elementos ocultados en el punto anterior, además le puedo establecer como segundo parámetro el tiempo de transición en la aparición
        cy.get('#firstname').invoke("show","4s")
        
    }) 


    it.only("Invoke Reto ocultar elemento y sólo mostrar si otro elemento está relleno", () => {  
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq', "Input Validation")  
        cy.wait(1500)  
        
        cy.get('[for="surname"]').invoke("hide") //aquí el invoke lo uso para ocultar los elementos capturados
        cy.get('#surname').invoke("hide")

        cy.wait(1500) 

        cy.get('#firstname').should("be.visible").type("Rodrigo")  //que escriba el nombre en su correspondiente lugar
        .then(()=>{     //y que sólo entonces, cuando haya escrito el nombre en su casilla, que muestre los elementos para el apellido
            
            cy.get('[for="surname"]').invoke("show","3s") //aquí el invoke lo uso para que muestre los elementos ocultados en el punto anterior, además le puedo establecer como segundo parámetro el tiempo de transición en la aparición
            cy.get('#surname').invoke("show","4s")
        })              
    }) 
    
})