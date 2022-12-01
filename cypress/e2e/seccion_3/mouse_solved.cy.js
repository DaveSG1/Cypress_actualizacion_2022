/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios

require('@4tw/cypress-drag-drop')
//con ésto añadimos la librería de Drag and drop



describe('Verify the drag and drop test', function() {
    const dataTransfer = new DataTransfer;
  
    function dndIt() {
      cy.get('#todrag span:first-of-type')
        .trigger('dragstart', { dataTransfer });
  
      cy.get('#mydropzone')
        .trigger('drop', { dataTransfer });
  
      cy.get('#todrag span:first-of-type')
        .trigger('dragend');               // <-- seleniumeasy listens for this...
    }                                      // if left out, draggables are copied.
  
    beforeEach(function() {
      cy.viewport(1000, 600);
      cy.visit('https://demo.seleniumeasy.com/drag-and-drop-demo.html');
    });
  
    it('Check whether the drag and drop of an item is working fine', function() {
      dndIt();
  
      cy.get('#droppedlist')
        .should(($el) => {
          expect($el.children()).to.have.lengthOf(1)
        });
    });
  });