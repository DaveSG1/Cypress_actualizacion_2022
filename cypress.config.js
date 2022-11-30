const { defineConfig } = require("cypress");

module.exports = defineConfig({

  //con ésta línea de abajo ponemos por defecto que desactive la seguridad de las webs https
  //para aquellas webs que pudieran dar errores por tener el https:
  chromeWebSecurity: false,

  e2e: {    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  //con estas dos líneas de abajo modifico el ancho y alto de la ventana de Cypress globalmente
  viewportWidth: 1500,
  viewportHeight: 900  

});


