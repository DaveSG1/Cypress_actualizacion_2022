/// <reference types="Cypress" />
//para que autocomplete los comandos

describe('Primer test con cypress', () => {
    it('Esto es un hola mundo desde cypress', () => {

        cy.log("Bienvenido a cypress")   //Le digo que escriba ésto

        cy.visit("https://testingqarvn.com.es/datos-personales/")  //Le digo que visite ésta web, y, que de dicha web (que muestra un formulario)

        cy.get("#wsf-1-field-21").type("Rodrigo") //capturo por id (con # delante para capturar por id, con . delanta para capturar por clase) el nombre (lo veo inspeccionando el elemento de la web original en el navegador) (para indicar que es un id, le pongo delante la #) y le digo q le meta de valor Rodrigo

        cy.wait(1000)                        // Le pongo un retardo de 1000ms (1 seg) para que de tiempo a ver como rellena el campo con los datos (no es obligatorio)

        cy.get("#wsf-1-field-22").type("Villanueva") //capturo por id el apellido (lo veo inspeccionando el elemento de la web original en el navegador)(para indicar que es un id, le pongo delante la #) y le digo q le meta de valor Villanueva

        cy.wait(1000)

        cy.get("#wsf-1-field-23").type("rodrigo@gmail.com") //capturo por id el email (lo veo inspeccionando el elemento de la web original en el navegador)(para indicar que es un id, le pongo delante la #) y le digo q le meta de valor un email

        cy.wait(1000)

        cy.get("#wsf-1-field-24").type("51651561561") //capturo por id el tlf (lo veo inspeccionando el elemento de la web original en el navegador)(para indicar que es un id, le pongo delante la #) y le digo q le meta de valor un tlf

        cy.wait(1000)

        cy.get("#wsf-1-field-28").type("Demo de la dirección") //capturo por id la direccion (lo veo inspeccionando el elemento de la web original en el navegador) y le digo q le meta de valor una direccion

        cy.wait(1000)

        cy.get("#wsf-1-field-27").click() //capturo por id el boton de submit (lo veo inspeccionando el elemento de la web original en el navegador)(para indicar que es un id, le pongo delante la #) y le digo q le haga click

        cy.wait(4000)
    })
})