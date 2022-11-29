/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Reto Asserts", () => {
    
      it('Reto Asserts', () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq', "Selenium Easy Demo - Simple Form to Automate using Selenium")
        cy.wait(1000)       
        
        //Eliminar ventana emergente de cookies etc de una página. Capturo el botón de aceptar o rechazar de la misma, valido
        //que sea visible, y hago un click forzado en dicho botón. En mi caso no me aparece la ventana emergente por el Adblocker 
        //por lo que dejo comentada la línea de código de abajo:
        //cy.get('.at-cm-no-button').should("be.visible").click({force:true})

        cy.get('.form-group > #user-message').should("be.visible").type("Demo del contenido")
        cy.wait(1000)

        //Con cy.contains en vez de cy.get le digo que capture un elemento de tipo botón, pero únicamente
        //aquel que contenga a su vez el texto Show Message, y ya una vez capturado le hago las validaciones como hasta ahora:
        cy.contains("[type='button']","Show Message").should("be.visible").click()
        cy.wait(1000)

        let a=5
        let b=20

        cy.get('#sum1').should("be.visible").and("have.class", "form-control").type(a)
        cy.get('#sum2').should("be.visible").and("have.class", "form-control").type(b)
        cy.contains("[type='button']","Get Total").should("be.visible").click()

        //capturo el texto de la página donde viene el valor resultante ("Total a+b = ... ")
        //y le digo que entonces, ejecute la siguiente función:
        cy.get("#displayvalue").should("be.visible").then((e)=>{
          
          cy.log(e.text())
          let res=e.text()          

          if(res > 50){
            cy.log("El resultado es mayor de 50")
            a=a-10 //le resto 10 al valor de a y 10 al valor de b
            b=b-10
            //limpio los formularios con .clear() y digo que escriba los nuevos valores de a y b
            cy.get('#sum1').should("be.visible").and("have.class", "form-control").clear().type(a)
            cy.wait(2000)
            cy.get('#sum2').should("be.visible").and("have.class", "form-control").clear().type(b)
            cy.wait(2000)
            cy.contains("[type='button']","Get Total").should("be.visible").click()
          }else{
            cy.log("El resultado es menor de 50")
            a=a+5//le sumo 5 al valor de a y 5 al valor de b
            b=b+5
            //limpio los formularios con .clear() y digo que escriba los nuevos valores de a y b
            cy.get('#sum1').should("be.visible").and("have.class", "form-control").clear().type(a)
            cy.wait(2000)
            cy.get('#sum2').should("be.visible").and("have.class", "form-control").clear().type(b)
            cy.wait(2000)
            cy.contains("[type='button']","Get Total").should("be.visible").click()

          }
        })

        //el invoke sirve para usar o modificar propiedades de los elementos desde Cypress
        //en éste caso para probar invocamos el "atributo" "style (de css)" y le cambiamos el "background-color" a rojo
        cy.get('#sum1').invoke("attr", "style", "background-color:red")
        cy.get('#sum2').invoke("attr", "style", "background-color:red")

        
      })

})