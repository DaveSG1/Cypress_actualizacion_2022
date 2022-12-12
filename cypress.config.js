const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //con ésta línea de abajo ponemos por defecto que desactive la seguridad de las webs https
  //para aquellas webs que pudieran dar errores por tener el https:
  chromeWebSecurity: false,

  e2e: {    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //Todos éstos comandos se pueden configurar de manera genérica para todos mis archivos o, puedo
    //especificar parámetros distintos para un test concreto (ver ejemplo en proyectoUno_PO.cy.js):

    //Con estas dos líneas de abajo modifico el ancho y alto de la ventana de Cypress globalmente
    viewportWidth: 1500,
    viewportHeight: 900,

    //Con ésto defino el tiempo máximo de carga de las páginas web de Cypress (general):
    pageLoadTimeout:9000,

    //Con ésto defino el tiempo máximo de espera para cada elemento (o input) para recibir el dato, así evito
    //errores en carga de datos pesados, etc También podría definir un tiempo específico para un determinado test en el propio test (ver support/pageObjects/proyectoUno_PO)
    //o incluso en un propio elemento (o input), dentro del assert should como segundo parámetro, algo así .should("be.visible, {timeout:20000}"):
    defaultCommandTimeout:15000
  },

   


  

});


