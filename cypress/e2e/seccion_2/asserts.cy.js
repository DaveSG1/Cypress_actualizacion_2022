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


      it("Assert find y assert eq", () => {
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
      it("Assert find y assert eq", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq', "STORE")
        cy.wait(1500)    
        
        cy.get("#tbodyid").find(".hrefch").eq(1).click()
        //De un elemento padre, le especifico el elemento hijo en el que funciona el click (con el find) 
        //y en el eq le digo cuál de los moviles quiero ver en detalle (el primero (0), el segundo (1), etc)
                    
      })



      //RETO para hacer validación de que el producto seleccionado tiene la condición de nuevo:
      it("Assert find y eq con then", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq', "Automation Exercise")
        cy.wait(1500)    
        
        cy.get(".product-image-wrapper").find(".single-products").eq(0).click()
        //Con ésto le diría que de un elemento grande que engloba a muchos pequeños, le digo, primero cual es el padre (get), luego uno de los hijos que contenga (find), 
        //que seleccione el primero (primer item) (con eq(0), o eq(1) para el segundo, etc) y le haga click
        //En ésta web no funciona porque no tiene función click en la foto en sí, sino que lo han sacado a un botón fuera (View product)

        //para replicar el funcionamiento, en nuestro caso tenemos que añadir ésta línea para que abra el primer artículo, pero si funcionara lo anterior en ésta web en concreto, ésta línea no habría que ponerla porque el click sería en la propia foto, no en un botón distinto
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()

        //para hacer validación de que el producto seleccionado tiene la condición de nuevo:
        cy.get('.product-information > :nth-child(7)')
        .then((e)=>{
          cy.log(e.text()) //para que imprima por la consola el texto contenido en la clase seleccionada en el get de la linea anterior

          let estado=e.text() //guardo dicho texto (e.text()) en una variable que llamo estado

          if(estado=="Condition: New"){ //hago un if, si lo contenido en la variable estado es exactamente igual al texto que contiene, que devuelva éste mensaje de que el vestido es nuevo
            cy.log("El vestido es nuevo")
          }
        })

        //ahora vamos a validar por el precio del vestido:
        cy.get(':nth-child(5) > span').then((e)=>{
          cy.log(e.text())//imprimo el precio con simbolo de divisa RS que la queremos quitar para tener solo el numero
          
          let precio=e.text()//guardo dicho precio (e.text()) en una variable que llamo precio
          
          precio=precio.slice(4,7)//al precio le paso la funcion slice indicando en primer y segundo parámetro desde que posicion y hasta que posición del string quiero quedarme 
          cy.log(precio)//ahora ya sólo me imprime el valor numérico, ya he quitado los caracteres de la divisa Rs.

          if(precio > 600){
            cy.log("El vestido sale de nuestro presupuesto, no lo podemos comprar")//Si no podemos comprarlo
            cy.xpath("//a[@href='/category_products/1'][contains(.,'Dress')]").click()//que regrese a la sección woman de la web
            cy.wait(5000)
          }else{
            cy.log("El vestido está en nuestro presupuesto, continúa con la compra")//Si podemos comprarlo
            cy.get(':nth-child(5) > .btn').click()//que haga click en añadir al carrito
            cy.wait(5000)
          }
        })
             
      })


      it('Assert should("have.text") y should("contain.text")', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1000)    

        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("have.text", "Name:Rodrigo")//con éste debo indicar exactamente lo que contiene el texto del elemento capturado

        cy.get("#name").should("contain.text", "Rodrigo")//con éste no tiene que ser literalmente todo lo que contiene el texto del elemento capturado, puede ser una parte sólo

      })


      it('Assert should("have.value") y should("contain.value") combinado con then()', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1000)    

        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.wait(2000)
        
        //Aquí hago la validación de si el campo userName ya contiene el VALOR (no vale texto) "Rodrigo", entonces que rellene el email y haga click en submit:
        
        //más restrictivo con have.value Ha de contener el nombre completo tal cual Rodrigo
        cy.get("#userName").should("have.value", "Rodrigo").then(()=>{
          cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
          cy.get("#submit").should("be.visible").click()
        })
        
        //menos restrictivo con contain.value Puede contener sólo una parte del nombre Rodrigo
        cy.get("#userName").should("contain.value", "dri").then(()=>{
          cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
          cy.get("#submit").should("be.visible").click()
        })
      })


      it('Assert should("have.class")', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1000)    

        //hago la validación de que el elemento capturado tenga la clase indicada como segundo parámetro, en tal caso, que la rellene con el nombre "rodrigo"
        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{
          cy.get("#userName").should("be.visible").type("rodrigo")
          cy.get("#submit").should("be.visible").click()
        })       
      })


      it('Asserts concatenados con la función and', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1000)    

        //no hace falta poner un should tras otro, la función .and sirve para lo mismo, y se han de cumplir ambas validaciones
        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{
          cy.get("#userName").should("be.visible").type("rodrigo")
          cy.get("#submit").should("be.visible").click()
        })       
      })


      it('Asserts negativos', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', "ToolsQA")
        cy.wait(1000)    

        //añadiendole not a los asserts delante (not.be.visible), (not.have.class), etc hago la validación de que NO se cumpla la condición que le indique
        cy.get("#userName").should("be.visible").and("not.have.class", "clase-inventada").then(()=>{
          cy.get("#userName").should("be.visible").type("rodrigo")
          cy.get("#submit").should("be.visible").click()
        })       
      })


      it('Assert length', () => {
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should('eq', "Selenium Easy - Table with Pagination Demo")
        cy.wait(1000)    

        //útil si quiero saber por ejemplo cuantos elementos tiene una tabla. Capturo la tabla entera
        //y si quiero saber los elementos totales le pongo >tr >td (como en CSS) y en el have.length le pongo un número al azar
        //y me tirará un error por consola al ejecutarlo y me dirá que he puesto tantos pero que en realidad son tantos otros 
        //así es una forma rápida para saber el número exacto de elementos de una tabla p.ej sin tener que contarlos manualmente
        cy.get("#myTable >tr >td").should("have.length", 91)
        
      })


      it('Validar un estilo de CSS', () => {
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should('eq', "Selenium Easy - Table with Pagination Demo")
        cy.wait(1000)    
        
        //Se pueden validar estilos de CSS de el elemento capturado. En éste ejemplo le digo que, de la tabla,
        //que cada td debe cumplir la condición de que en su css tenga un padding de 8px (lo veo en el inspector
        //en la parte derecha, donde vienen los estilos)
        cy.get("#myTable >tr >td").should("have.css", "padding", "8px")        
      })


      it.only('Assert cy.contains', () => {
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
      })

})