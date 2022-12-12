/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto custom commands', () => { 

    let tiempo=1000

    //me puedo poner un before con el enlace a la página y la validación del título de la misma (para que lo haga sólo una vez)
    before(() =>{
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        cy.wait(tiempo)
    })

    //me puedo poner un after que contenga todos los logs que haya ido haciendo en los tests para que los muestre todos juntos al final de la ejecución de todos los tests:
    after(()=>{
        cy.log("######### Log de todas las pruebas en el After #############")
        cy.Validar_campo("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address", "Campo email")
        cy.Validar_campo("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters", "Campo nombre")
    })


    it('Reto combo', () =>{
        //Aquí uso la función creada en support/commands.js para pasarle datos al formulario de ésta web (le paso el mail mal a propósito)
        cy.Bloque_Seleniumeasy("J","Andrews","john.com","(555)1544-154","Main street, 1","Los Angeles","California","08512","Johnandco.com","personal web site")  
        
        //Y aquí uso la función validar campo para validar que el email está metido erróneo. Le paso por parámentros el xpath del mensaje de error rojo de la web; El texto de dicho mensaje de error en sí; Y el nombre de la variable (el que quiera poner) para que salga en el alert de error en mi cola de ejecución (al final del todo sale)
        cy.Validar_campo("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address", "Campo email")

        //La función validar campo es reutilizable, ahora la uso para validar que el nombre está metido erróneo. Le paso por parámentros el xpath del mensaje de error rojo de la web; El texto de dicho mensaje de error en sí; Y el nombre de la variable (el que quiera poner) para que salga en el alert de error en mi cola de ejecución (al final del todo sale)
        cy.Validar_campo("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters", "Campo nombre")

    })
});