/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Asserts", () => {

    it("Assert contains", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', "Automation Exercise")
        cy.wait(1000)    
        
        //Selecciono el elemento padre (category) y le pongo una validación que es que busque si contiene un elemento llamado "Women" y haga click en él
        cy.get('#accordian').contains("Women").click()

        //Con lo anterior despliega la categoría Women, y le digo que haga click del desplegable en el primer elemento (Dress)
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
             
      })


      it("Assert find", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', "Automation Exercise")
        cy.wait(1500)    
        
        cy.get(".product-image-wrapper").find(".single-products").eq(0).click()
        //Con ésto le diría que de un elemento grande que engloba a muchos pequeños, le digo, primero cual es el padre (get), luego uno de los hijos que contenga (find), 
        //que seleccione el primero (primer item) (con eq(0), o eq(1) para el segundo, etc) y le haga click
        //En ésta web no funciona porque no tiene función click en la foto en sí, sino que lo han sacado a un botón fuera (View product)

        //para replicar el funcionamiento, en nuestro caso tenemos que añadir ésta línea para que abra el primer artículo, pero si funcionara lo anterior en ésta web en concreto, ésta línea no habría que ponerla porque el click sería en la propia foto, no en un botón distinto
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
             
      })

      //Otro ejemplo mejor del assert Find. En ésta web sí funciona como queremos:      
      it.only("Assert find", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq', "STORE")
        cy.wait(1500)    
        
        cy.get("#tbodyid").find(".hrefch").eq(1).click()
        //De un elemento padre, le especifico el elemento hijo en el que funciona el click (con el find) 
        //y en el eq le digo cuál de los moviles quiero ver en detalle (el primero (0), el segundo (1), etc)
                    
      })


})