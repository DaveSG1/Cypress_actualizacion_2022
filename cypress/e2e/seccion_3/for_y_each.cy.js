/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Bucles For y each", () => {

    it("For 1", () => {                  
       
        for(let i=1; i<=100; i=i+10){
            cy.log("Numero: " + i)
        }                   
    })


    it("For 2", () => {                  
       
        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + "X" + i + " = " + t*i)
        }                   
    })


    it("Each 1", () => {  
        cy.visit("https://www.demoblaze.com/") 
        cy.title().should('eq', "STORE")  
        cy.wait(1500)     
        
        //capturo la etiqueta (.hrefch) del nombre de uno de los móviles y con el .each() que 
        //siempre sigue la misma construcción de parámetros, saco el nombre de cada uno de los móviles.
        //$el es cada elemento (móvil) que para sacar su nombre tendré que añadirle la función .text(), 
        //index es el índice de cada móvil 
        //y $list es un array de cada móvil que contiene todos sus datos. Vamos a usar casi siempre el $el:
        cy.get('.hrefch').each(($el,index,$list)=>{
            
            cy.log($el.text())    //imprime el nombre de cada elemento (móvil) al ponerle el .text() 
            
            let movil=$el.text()  //ésto no es obligatorio. Guardo en una variable el $el.text() para poder usar ese nombre "movil" en vez de el $el.text() cada vez

            cy.log(movil)         //imprimo ya la variable en sí, es más cómodo
                        
        })     
    })


    it.only("Each 2", () => {  
        cy.visit("https://www.demoblaze.com/") 
        cy.title().should('eq', "STORE")  
        cy.wait(1500)     
        
        //le digo que recorra todos los elementos con la etiqueta .hrefch (nombres de todos los móviles)...
        cy.get('.hrefch').each(($el,index,$list)=>{           
            
            let movil=$el.text()  //ésto no es obligatorio. Guardo en una variable el $el.text() para poder usar ese nombre "movil" en vez de el $el.text() cada vez
            
            //...y le digo que si el movil (ya contiene su nombre) incluye la palabra "Nokia lumia 1520" ...
            if(movil.includes("Nokia lumia 1520")){
                //...que lo seleccione: para esto se usa siempre el .wrap($el) 
                //y no el .get(etiqueta del elemento) y le haga click
                cy.wrap($el).click()
            }
                        
        })     
    })

    
})