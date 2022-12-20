// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands')

// Hide fetch/XHR requests. Esto lo busque en https://stackoverflow.com/questions/71357705/hide-xhr-calls-on-cypress-test-runner
//para que no muestre en el navegador todos los get y posts al testear, que muestre sólo lo que yo he metido

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}


//Ésto lo busqué para los tests que daban éste error: (uncaught exception) TypeError: e(...).setup is not a function
//por lo que viendo las preguntas del curso, indicaba que, cuando pase éste error u otro,
//hay que añadir ésta linea en el código para que lo omita y así funcione, bien aquí para que aplique a todos los tests
//o bien como primera línea en cada test individual. Poniendolo aquí ya no hace falta ponerlo en cada test
Cypress.on('uncaught:exception', (err, runnable) => { return false });



