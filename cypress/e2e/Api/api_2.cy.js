/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Demo 2 de una Api Rest', () => { 

    let tiempo=1000

    it('Test 2', () =>{
        
        //creo mi json que uno de los datos "Cursos" contiene un array de objetos.
        const datos={
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "61561312",
            "Dir": "Demo de la direccion",
            "Cursos":[
                {
                    "Nombre":"Php",
                    "Descripción": "Lenguaje de programacion Php"
                },
                {
                    "Nombre":"Java",
                    "Descripción": "Lenguaje de programacion Java"
                },
                {
                    "Nombre":"Python",
                    "Descripción": "Lenguaje de programacion Python"
                },

            ]
        }

        //así consulto e imprimo cada dato del json:
        cy.log(datos.Nombre)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])   //si quiero toda la info del segundo curso (arrays empiezan por 0, el segundo curso sería el 1)
        cy.log(datos.Cursos[1].Nombre)    //si quiero del segundo curso, sólo el nombre del curso   
    })
});