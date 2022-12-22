/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')



describe('descripcion', () => { 

    let tiempo=1000

    it('test uno', () =>{
        cy.visit('https://demoqa.com/select-menu') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        //Hay casos en los que nos encontramos con elementos select que no puedo capturar 
        //(al inspeccionar, vemos que dichos elementos select están hechos con Flex, Angular, Vue, etc) 
        //en esos casos, tendremos que utilizar otras herramientas (ver clase 287 Master Cypress Udemy)
        //como por ejemplo Cypress Studio (ya lo tengo activado en cypress.config.js:  "experimentalStudio": true)
        //De modo que me voy al navegador de Cypress, en la izquierda, sobre la línea "test uno" pongo el ratón y pincho
        //en la barita mágica que sale, y opero sobre la web, abro los selects que quiera, marco las opciones que quiera, etc
        //y todo lo que haga va a quedar registrado a la izquierda donde le puedo dar a Save y ese código automáticamente
        //se va a transferir a mi test uno en VSC (ver líneas 28 a 43 de ésta página, todo eso es lo que se ha generado automáticamente por la herramienta Cypress Studio)


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click();
        cy.get('#react-select-4-option-1').click();  
        cy.wait(tiempo)      
        cy.get('#react-select-4-option-2').click();
        cy.get('#cars').select(['saab']);
        cy.wait(tiempo)
        cy.get('#selectOne > .css-yk16xz-control > .css-1hwfws3').click();
        cy.wait(tiempo)
        cy.get('#react-select-3-option-0-1').click();
        cy.wait(tiempo)
        cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
        cy.wait(tiempo)
        cy.get('#react-select-2-option-0-1').click();
        cy.wait(tiempo)
        /* ==== End Cypress Studio ==== */
        
    })


    it.only('test dos', () =>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        //Lo mismo que arriba, en éste caso me voy al navegador de Cypress, en la izquierda, sobre la línea "test dos" pongo el ratón y pincho
        //en la barita mágica que sale, y opero sobre la web, abro los selects que quiera, marco las opciones que quiera, etc
        //y todo lo que haga va a quedar registrado a la izquierda donde le puedo dar a Save y ese código automáticamente
        //se va a transferir a mi test uno en VSC (ver líneas 59 a 64 de ésta página, todo eso es lo que se ha generado automáticamente por la herramienta Cypress Studio)


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#state').click();
        cy.get('#react-select-3-option-0').click();
        cy.get('#city').click();
        cy.get('#react-select-4-option-0').click();
        /* ==== End Cypress Studio ==== */
    })
});