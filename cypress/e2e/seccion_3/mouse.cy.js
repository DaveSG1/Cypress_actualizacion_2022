/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios

require('@4tw/cypress-drag-drop')
//con ésto añadimos la librería de Drag and drop


describe("Eventos mouse", () => {

    it("Mouse Drag and drop", () => {
        cy.wait(1000)
        cy.visit("http://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Drag and Drop Demo')        
        cy.wait(1500)

        //Visitamos la pagina: https://github.com/4teamwork/cypress-drag-drop donde vienen las instrucciones
        //instalamos por consola: npm install --save-dev @4tw/cypress-drag-drop
        //ponemos al principio del test: require('@4tw/cypress-drag-drop')

        cy.wait(1500)

        //Con ésto capturamos un elemento "Draggable 1" y le decimos hasta donde lo queremos arrastrar, hasta el cuadro "Drop here":
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')        

    })


    it("Mouse over", () => {
        cy.visit("https://www.way2automation.com/")
        cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')        
        cy.wait(1500)  
        
        //Con ésto capturamos un elemento (que contiene el nombre "Video Tutorial") y 
        //con .trigger('mouseover') le digo que sólo se sitúe sobre él, sin hacer click:
        cy.contains("Video Tutorial").trigger('mouseover')

        cy.wait(1500) 

        //el over sobre el elemento anterior despliega el mismo, y quiero hacer click sobre una de las opciones que me salen "Selenium with Python"
        //pero quiero abrirlo en la misma pestaña, no en otra, para eso, uso el invoke y le quito del html al enlace (con "removeAttr") el atributo target="_blank" 
        //que es lo que hace que el enlace se abra en otra pestaña
        cy.contains("Selenium with Python").invoke("removeAttr","target").click({force:true})
    })

    
    it.only("Mouse sliders", () => {
        cy.visit("http://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')        
        cy.wait(1500)  

        //Capturamos cualquiera de los sliders, lo inspeccionamos y vemos que tiene una etiqueta "value"
        //que es la que modifica el punto donde se posiciona el slider. Pues con el invoke atacamos 
        //a dicho atributo ("attr") "value" y le asignamos un valor (90 p ej):
        cy.get('#slider1 > .range > input').invoke("attr", "value", 90)
        cy.wait(1500)
        cy.get('#slider3 > .range > input').invoke("attr", "value", 90)
        cy.wait(1500)
        cy.get('#slider5 > .range > input').invoke("attr", "value", 90)
        cy.wait(1500)
    })

    
})