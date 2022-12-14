//Fixtures se usa para importar archivos externos, principalmente JSON, para poblar nuestra página con la información que contiene el JSON:

//Van en la carpeta fixtures de mi proyecto, ver ejemplo en fixtures/datos2.json que es el fixture que vamos a usar en éste ejemplo:

/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Carga datos por Fixture', () => { 

    let tiempo=1000

    before(function(){

        //Con ésto lo que hago es coger todos los datos que están contenidos en mi fixture datos2
        //y los vamos a guardar en una variable que hemos llamado data para que dichos datos se puedan 
        //usar globalmente en todos los tests de ésta página (siempre igual sintaxis):
        cy.fixture('datos2').then(function(data){
            //this.data=data     ésto suele dar error por lo que mejor usamos...
            globalThis.data=data
        })        
    })


    it('Test uno Cargando desde JSON', () =>{
        cy.visit('https://demoqa.com/text-box') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type(data.nombre) //como ya tengo guardada toda mi info del fixture datos2.json en mi variable data, puedo usarla poniendo data. y el dato que quiero usar para ese espacio en concreto (data.nombre por ejemplo)
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type(data.email) //que ponga el dato guardado en data.email del fixture datos2.json 
        cy.wait(tiempo)

        cy.get('#currentAddress').should('be.visible').type(data.dir1) //que ponga el dato guardado en data.dir1 del fixture datos2.json
        cy.wait(tiempo)

        cy.get('#permanentAddress').should('be.visible').type(data.dir2) //que ponga el dato guardado en data.dir2 del fixture datos2.json
        cy.wait(tiempo)

        cy.get('#submit').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })
});