/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Reto tablas 1", () => {

    it("Reto tablas seleccionar todos y marcar check todos", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500)         
        
        //Seleccionamos el botón de "All" y lo validamos para que los seleccione todos:
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
        cy.wait(1500)

        //Seleccionamos todos los checkbox (por tipo) y los marcamos todos:
        cy.get("[type='checkbox']").check({force:true})        
    })


    it("Reto tablas para seleccionar cada tipo con bucle for y marcar check todos", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500)  
        
        for(let x=1;x<=4;x++){
            //Seleccionamos por tipo los botones, cogerá el primero, luego el segundo, etc:
            cy.get("[type='button']").eq(x).click({force:true})
            cy.wait(1500)

            //Seleccionamos por tipo todos los checkbox y los marcamos todos:
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(1500)
        }       
    })


    it.only("Reto tablas con bucle for y que valide y muestre los Asserts", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html") 
        cy.title().should('eq', "Selenium Easy - Table Data Filter Demo")  
        cy.wait(1500)  
        
        for(let x=1;x<=4;x++){

            let nombreBoton = "" //creo una variable que sea un string vacío

            if(x==1){                //le digo que cuando x valga 1, mi variable valdrá "Green"
                nombreBoton="Green"
            }
            else if(x==2){           //le digo que cuando x valga 2, mi variable valdrá "Orange"
                nombreBoton="Orange"
            }
            else if(x==3){          //le digo que cuando x valga 3, mi variable valdrá "Red"
                nombreBoton="Red"
            }
            else if(x==4){          //le digo que cuando x valga 4, mi variable valdrá "All"
                nombreBoton="All"
            }

            //Seleccionamos por tipo los botones, cogerá el primero, luego el segundo, etc
            //y le hago la validación de que en cada vuelta debe contener el "nombreBoton" que toque
            //según le he asignado yo en el if para cada valor de x en cada vuelta:
            cy.get("[type='button']").eq(x).should("contain",nombreBoton).click({force:true})
            cy.wait(1500)

            //Seleccionamos por tipo todos los checkbox y los marcamos todos:
            cy.get("[type='checkbox']").check({force:true})
            cy.wait(1500)
        }       
    })
    
})