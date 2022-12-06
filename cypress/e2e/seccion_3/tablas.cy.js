/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Tablas", () => {

    it("Elementos padre e hijo", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
        //capturo la clase del elemento padre y con .children() le digo que, de todos sus hijos,
        //que coja sólo los que contienen la etiqueta x, le hago una validación con el should (para que compruebe que contiene la palabra Green)
        //y que le haga click. Así la web filtrará solo los que tengan etiqueta verde:
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.wait(1500)

        //igual pero con el botón red:
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
        cy.wait(1500)
    })


    it("Seleccionar mediante .filter()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
       //De la clase padre, que filtre los que tengan un selector específico (a efectos prácticos es muy similar al filtrado con .children())
       //devolverá todos los resultados que contengan el filtro indicado, si los hubiera:
        cy.get(".btn-group").filter(".btn-warning").should("contain","Orange").click({force:true})
        cy.wait(1500)  
        
        //igual pero con el botón red:
        cy.get(".btn-group").filter(".btn-danger").should("contain","Red").click({force:true})
        cy.wait(1500)
    })


    it("Seleccionar mediante .find()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
       //Como el filter:
        cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true})
        cy.wait(1500)  
        
        //igual pero con el botón red:
        cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true})
        cy.wait(1500)
    })


    it("Seleccionar mediante .contains()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
       //Ya lo vimos en otra sección. Más potente que el filter y find ya que le puedo indicar cualquier elemento, 
       //o incluso texto contenido en la etiqueta por la que quiera filtrar, en éste caso por el nombre del botón "Orange":
        cy.get(".btn-group").contains("Orange").click({force:true})
        cy.wait(1500)  
        
        //igual pero con el botón red:
        cy.get(".btn-group").contains("Red").click({force:true})
        cy.wait(1500)
    })


    it("Seleccionar mediante .first() y .last()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
       //Le digo que de un elemento contenedor ó padre .btn-group, que encuentre los que sean 
       //de tipo: [type='button'] y que coja el primer elemento (Verde):
        cy.get(".btn-group").find("[type='button']").first().click({force:true})
        cy.wait(1500)   
        
        //Le digo que de un elemento contenedor ó padre .btn-group, que encuentre los que sean 
       //de tipo: [type='button'] y que coja el último elemento (Todos):
       cy.get(".btn-group").find("[type='button']").last().click({force:true})
       cy.wait(1500) 
    })


    it("Seleccionar mediante .eq()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
        //vemos que los 4 botones de los colores tienen la etiqueta type="button" por lo que capturamos
        //por tipo, con corchetes, y le decimos que de esos 4 elementos coja el que tiene id 2 
        //que corresponde al botón naranja, y hago la validación de que contenga la palabra "Orange"
        //y le hago click. Mostrará solo los resultados con valoración naranja:
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
        cy.wait(1500)        

        //igual pero seleccionando el botón de todos:
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
        cy.wait(1500)                
    }) 


    it.only("Seleccionar los elementos siguientes .nextAll()", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500) 
        
        //Para que seleccione todos los elementos siguientes al que le indiquemos.
        //Le indicamos el verde, y señalará los 3 siguientes. Le ponemos la validación de que 
        //ha de tener longitud 4, ya que hay 4 botones en total (se cuenta el verde también):
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length", 4)
        cy.wait(1500)      
     }) 
  
})