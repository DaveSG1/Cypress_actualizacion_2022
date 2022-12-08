/// <reference types="Cypress" />

//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Snippets", () => {     
          
     it("Snippets 1", () => {  
        cy.visit("https://demoqa.com/text-box") 
        cy.title().should('eq', "ToolsQA")  
        cy.wait(1500)       
        
        //Ésta línea que escribo de forma manual:
        cy.get('#userName').should("be.visible").type("Rodrigo")

        //Se puede hacer igualmente usando snippets. Para ello entro en la web https://code.visualstudio.com/docs/editor/userdefinedsnippets
        //en VSC en cualquier lado pulso ctrl+P y en la barra de arriba pongo >snippets pulso intro y escribo javascript pulso intro
        //configuro mis snippets personalizados en la pestaña que se abre (javascript.json) siempre siguen la misma construcción
        //una vez guardados ahí, ya puedo usar mis snippets aquí por ejemplo escribiendo el prefijo que le he dado en la otra página,
        //por ej: c_texto_argumentos  y me me lo autorellena todo:


        //Éste lo lanza poniendo c_texto_argumentos y hace lo mismo que lo de arriba pero sin tener que escribirlo cada vez:
        cy.get('[type="text"]').should('be.visible').type('Demo')
        cy.wait(1500)       
    })        
})


//Éste lo lanza poniendo c_pantilla_cypress, para poder usarlo para generar la plantilla en cualquier test nuevo:

// /// <reference types='Cypress' />
// import 'cypress-file-upload';
// require('@4tw/cypress-drag-drop')
// require('cypress-xpath')
// require('cypress-plugin-tab')


// describe('descripcion', () => { 
//     it('test', () =>{
//         let tiempo=1000
//         cy.visit('url') 
//         cy.title().should('eq','titulo')
//         cy.wait(tiempo)
//     })
// });