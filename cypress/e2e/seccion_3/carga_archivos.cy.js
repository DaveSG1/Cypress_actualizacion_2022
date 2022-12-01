/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios

import 'cypress-file-upload'
//con ésto para poder usar el file upload, para subir archivos desde un formulario


describe("Carga archivos en un formulario", () => {

    it("Cargar archivo en Examinar de un formulario", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')        
        cy.wait(1500)

        //Para cargar archivos en el botón "Examinar" de un formulario por ejemplo:
        //entrar en la web https://github.com/abramenal/cypress-file-upload donde da las instrucciones
        //hacer en consola: npm install --save-dev cypress-file-upload
        //y poner import 'cypress-file-upload' al principio de la página de test (arriba de ésta página puedo verlo)

        //Me guardo una imagen cualquiera dentro de la carpeta fixtures de mi test y creo una variable
        //donde la guardo:
        const ruta='tissot_foto.jpg'

        //Ahora capturo el botón de "Examinar" del formulario, hacerlo por tipo mejor
        //y uso la función .attachFile() pasándole el nombre de la variable donde guardé mi foto:
        cy.get("[type='file']").attachFile(ruta)
        cy.wait(2000)


    })

    
})