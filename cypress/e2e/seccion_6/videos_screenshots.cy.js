//documentación en la página https://docs.cypress.io/guides/guides/screenshots-and-videos


//PARA LOS VIDEOS:

//Paro la ejecución con:   npx cypress open     (la que uso habitualmente)
//Iniciar por consola con:    npx cypress run --spec "y la ruta de mi test"    Por ejemplo:
//      npx cypress run --spec "cypress/e2e/seccion_6/page_object_1.cy.js"

//me lo ejecuta el test por consola y abajo de la ejecución me dice que ha procesado el video
//y donde lo ha guardado que es en mi proyecto, en la carpeta videos y si al video
//generado le doy al boton derecho y mostrar en explorador de archivos, me sale el archivo en su carpeta
//para reproducirlo, reenviarlo o lo que quiera



//PARA LOS SCREENSHOTS:

//En el propio código de mi test pongo    cy.screenshot("comentario opcional")  en el punto en que 
//quiera hacer la captura de pantalla (ver support/proyectoUno_PO.cy.js  línea 20):

//Igual que en videos, tengo que correr el test concreto por consola 
//Paro la ejecución con:   npx cypress open     (la que uso habitualmente)
//Iniciar por consola con:    npx cypress run --spec "y la ruta de mi test"    Por ejemplo:
//      npx cypress run --spec "cypress/e2e/seccion_6/page_object_1.cy.js"

//me lo ejecuta el test por consola y abajo de la ejecución me dice que ha procesado el video
//y donde lo ha guardado que es en mi proyecto, en la carpeta screenshots y si al screenshot
//generado le doy al boton derecho y mostrar en explorador de archivos, me sale el archivo en su carpeta
//para visualizarlo, reenviarlo o lo que quiera

