/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Record Cypress Studio', () => {
    let tiempo=1000

    it('Invoke Text', () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName').type('rodrigo');        
        cy.get('#userEmail').type('rodrigo@gmail.com');
        cy.get('#currentAddress').type("Direccion uno");
        cy.get('#permanentAddress').type("Direccion dos");        
        cy.get('#submit').click();
        /* ==== End Cypress Studio ==== */

        //Ésta sección de aquí arriba se ha generado automáticamente con el Cypress Studio, funciona de la siguiente manera
        //Corremos el test como siempre con npx cypress open, pero en mi navegador de Cypress, como hemos agregado el Cypress studio (en cypres.config.js),
        //ahora en ciho navegador de Cypress, en el nombre de mi test (en éste, sobre "Invoke text"), si pongo el ratón encima sale una barita mágica, le hago click y me va a decir que opere directamente
        //sobre la web, haga click, escriba, etc. Todos los pasos que haga los va a capturar y al darle a guardar, automáticamente los va a escribir en mi test en ésta sección,
        //envuelto entre las notas "Generated with Cypress Studio" y "End Cypress Studio"
    })


    //Ésta sección de aquí abajo (un test entero nuevo) se ha generado automáticamente con el Cypress Studio, 
    //en éste caso, ha sido pulsando en mi navegador de Cypress pero el lápiz que sale al poner el ratón
    //sobre el describe (en éste caso "Record cypress studio"). Al pulsar ahí, me sale en el navegador una barra para que ponga la dirección web
    //sobre la que quiero crear mi test y lo mismo, hago sobre esa web todo lo que quiera, clicks, escribir, etc y al darle a guardar,
    //me genera, en éste caso, un test nuevo con todas las acciones que yo haya realizado sobre la web que le he metido:

    /* ==== Test Created with Cypress Studio ==== */
    it('Test_checkbox', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://demoqa.com/checkbox');
        cy.get('.rct-collapse > .rct-icon > path').click({force:true});
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon > path').click({force:true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-excelFile').check({force:true});
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-wordFile').check({force:true});
        cy.get(':nth-child(2) > .rct-text > .rct-collapse > .rct-icon > path').click({force:true});
        cy.get(':nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click({force:true});
        cy.get('#tree-node-office').check({force:true});
        /* ==== End Cypress Studio ==== */
    });
});