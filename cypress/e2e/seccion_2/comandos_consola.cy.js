//Comandos por consola (siempre deteniendo la ejecución de Cypress y situados en la carpeta que queramos, ej situados en: C:\Cypress_actualizacion_2022)

//Para ejecutar por la propia consola todos los tests de la carpeta en que nos encontremos y sacar estadística de dichos tests:
//npx cypress run

//Lo mismo que el anterior pero para que corra todos los tests desde el navegador, no por la consola:
//npx cypress run --headed

//Lo mismo que el anterior pero para que corra todos los tests desde el navegador, no por la consola, e indicando en qué navegador los ejecutará:
//npx cypress run --browser chrome

//Para que corra por la propia consola un test concreto:
//npx cypress run --spec "cypress\e2e\seccion_2\reto_asserts.cy.js"

//Para que corra por la propia consola todos los tests de la sección_1 por ejemplo:
//npx cypress run --spec "cypress\e2e\seccion_1\*"