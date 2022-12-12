//aquí importo mi page object donde tengo mis clases con sus funciones dentro que quiero importar:
import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy';

/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

//En support he creado la carpeta pageObjects y dentro proyectoUno_PO, ahí iré metiendo mi código en bruto y aquí dejaré lo más minimalista posible y traeré el código de aquella carpeta:

describe('Page object models', () => { 

    //habiendo importado arriba mi Page object, aquí le digo que en una nueva variable guarde una nueva instancia de mi page object "proyectoUno_Po" con todo lo que éste contiene:
    const master = new ProyectoUno_Po()

    //aquí ya puedo usar funciones contenidas en mi Page object con la sintaxis: mi variable en la que he guardado la instancia del page object PUNTO el nombre de la función del page object que quiero usar
    master.visitHome()
    
    //en cada test llamo a cada una de las secciones creadas en mi proyecto (en mi clase) y pasándole los argumentos que necesita cada función:

    it('test seccion 1', () =>{
       master.SeccionUno("Carlos","O","carlos@gmail.com")

       //e igualmente puedo usar otro comando definido en commands.js, como por ejemplo la de validar campo, la vamos a usar para el apellido que lo hemos metido erróneo:
       cy.Validar_campo("//small[@class='help-block'][contains(.,'Please enter more than 2 characters')]","Please enter more than 2 characters","campo surname")
    })


    it('test seccion 2', () =>{
        master.SeccionDos("(555)5456-156","Main St, 1","Los Angeles","California")
     
    })


    it('test seccion 3', () =>{
        master.SeccionTres("08515","peter.com","nada")

        //e igualmente puedo usar otro comando definido en commands.js, como por ejemplo la de validar campo, la vamos a usar para la descripción que la hemos metido errónea:
       cy.Validar_campo("//small[@class='help-block'][contains(.,'Please enter at least 10 characters and no more than 200')]","Please enter at least 10 characters and no more than 200","campo description")
    })
});