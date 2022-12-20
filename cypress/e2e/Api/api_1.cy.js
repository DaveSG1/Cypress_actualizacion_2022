/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Demo de una Api Rest', () => { 

    let tiempo=1000

    it('Test uno', () =>{
        
        //creo mi json
        const datos={
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "61561312",
            "Dir": "Demo de la direccion"
        }

        //así consulto e imprimo cada dato del json:
        cy.log(datos.Nombre)
        cy.log(datos.Ap)
        cy.log(datos.Am)
        cy.log(datos.Tel)
        cy.log(datos.Dir)
    })
});