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
        for(let x=0; x<4; x++){
            cy.get(".hrefch").eq(x).click() //le digo que coja la etiqueta del nombre de cada móvil y con el eq() de digo que en esa vuelta seleccione el movil que tenga el valor de x (por lo que en la primera vuelta cogerá el 0 ó primer móvil, luego el 1 ó segundo móvil, etc)
            cy.wait(200)
            cy.get('.col-sm-12 > .btn').should("be.visible").click() //le digo que, abierta la ventana del móvil que toque en esa vuelta, le de al botón de añadir a la cesta
            cy.wait(200) 
            cy.get('.active > .nav-link').should("be.visible").click() // le digo que, una vez añadido a la cesta, haga click en el botón Home
            cy.wait(200) 
        }

        cy.get(':nth-child(4) > .nav-link').should("be.visible").click() // le digo que, una vez terminado el bucle y añadidos todos los móviles a la cesta, haga click en la cesta para comprobar que todos los móviles indicados (4) se han añadido
                   
    })


    //Si quisiera hacerlo para todos los elementos (móviles de la página) si no se cuántos hay:    
    it.only("Reto bucles todos los elementos", () => {  
        cy.visit("https://www.demoblaze.com/") 
        cy.title().should('eq', "STORE")  
        cy.wait(1500)  
        
        const datos = [] //creo una variable datos que va a ser un objeto vacío para guardar ahí los datos de cada elemento

        //le digo que coja los elementos con la etiqueta ".hrefch" y que para cada uno de ellos (construccion del each siempre igual en cuanto a los 3 parámetros)
        cy.get(".hrefch").each(($el,index,$list)=>{

            datos[index]=$el.text() //guarde en datos en el formato: índice de cada elemento=texto de cada elemento así cada elemento será único y no se repetirá
            
        }).then(()=>{

            for(let x=0; x<datos.length; x++){ //aqui ya le digo que el for se repetirá siempre que x sea menor que la longitud del objeto "datos" que creamos antes (no ponemos menor o igual pq daría fallo para el último elemento, recordar que objetos y arrays empiezan en 0)
                     cy.get(".hrefch").eq(x).click() //le digo que coja la etiqueta del nombre de cada móvil y con el eq() de digo que en esa vuelta seleccione el movil que tenga el valor de x (por lo que en la primera vuelta cogerá el 0 ó primer móvil, luego el 1 ó segundo móvil, etc)
                     cy.wait(200)
                     cy.get('.col-sm-12 > .btn').should("be.visible").click() //le digo que, abierta la ventana del móvil que toque en esa vuelta, le de al botón de añadir a la cesta
                     cy.wait(200) 
                     cy.get('.active > .nav-link').should("be.visible").click() // le digo que, una vez añadido a la cesta, haga click en el botón Home
                     cy.wait(200) 
                 }
        
             cy.get(':nth-child(4) > .nav-link').should("be.visible").click() // le digo que, una vez terminado el bucle y añadidos todos los móviles a la cesta, haga click en la cesta para comprobar que todos los móviles indicados (todos) se han añadido

        })    
                    
    })
  
})