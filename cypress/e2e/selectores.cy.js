/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

describe("Tipos de selectores", () => {

    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos")
        //para seleccionar por id, busco en el inspector el id del elemento a seleccionar, y
        //aquí para decir que es un id he de meter delante la almohadilla #

        cy.get('#userEmail').should("be.visible").type("demo@gmail.com")
    })


    it("Selector por atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Pedro")
        //para seleccionar por atributo (por ejemplo por el placeholder de una casilla de un formulario), 
        //busco en el inspector el elemento a seleccionar completo (placeholder=Full Name), y
        //aquí lo pego entero y lo meto entre corchetes, el nombre en sí (Full Name) lo meto entre 
        //comillas simples para que no de error con las comillas dobles de fuera (o viceversa, ver el ejemplo de la siguiente línea)

        
        //También puedo capturar el type de un elemento del formulario al inspeccionar dicho elemento.
        //Si veo que el type es único y no se repite (comprobarlo antes con la extensión XPath cheker)
        //Si por ejemplo veo que sólo hay un elemento del formulario con type email, como en éste caso,
        //lo puedo seleccionar con el mismo formato, metiéndolo entre corchetes, 
        //con la sintaxis de las líneas 27 y 40                    

        cy.get("[type='email']").should("be.visible").type("prueba_selector_type@gmail.com")
    })


    it("Selector por Xpath", () => {
        //hay q instalar el plugin por consola con npm install -D cypress-xpath (viene en la pag npmjs.com/cypress-xpath)
        //y añadir arriba de la pagina de test (ver linea 4): require('cypress-xpath')
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan")
        //para seleccionar por Xpath pongo cy.xpath() en vez de cy.get, 
        //busco en el inspector el elemento a seleccionar, y abajo, en elementos de la consola
        //hago click derecho sobre el texto del elemento (resaltado en azul) y marco Copy/Copy Xpath, 
        //lo almacena en el portapapeles y aquí lo pego dentro del paréntesis de xpath(). 
        //Ojo cambiar al nombre en si (ej: userName) de comillas dobles a simples (o viceversa, ver siguiente linea) para que no de error


        //También puedo descargarme extensiones de chrome, como he hecho con TruePath
        //y hago igual: click derecho al elemento, y bien, Inspeccionar y miro la extensión
        //en Chrome F12, abajo a la derecha (pone TruePath), donde Styles de CSS en el inspector,etc 
        //copio el texto que sale con la manita verde,
        //o bien, al dar click derecho al elemento, en vez de inspeccionar, selecciono 
        //Relative Xpath/Xpath with id click al primer resultado y en la emergente copio el Xpath (tercer elemento)

        cy.xpath('//*[@id="userEmail"]').should("be.visible").type("demo3@gmail.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").type("Larios, 1 Málaga")

        //Los Xpath los solemos generar automáticamente con las extensiones (TruePath por ejemlo)
        //Si quisiéramos montar uno manualmente por ejemplo para probarlo en la extensión XPath checker, su sintaxis 
        //sería así poniendo doble barra, primero el elemento html de que se trata: (input, button, etc) 
        // y luego: [@el id, la clase, etc] Ejemplo: //button[@id='submit']
        //Si quisieramos capturar un elemento que no tenga atributos (sin id, o clase), es sin la @,
        //sería así por ejemplo: //div[text()='Text Box']  siendo text() el tipo de elemento y detrás del igual 
        //específicandole una característica única del que queramos seleccionar, el texto en sí que contiene por ejemplo
        //otro ejemplo de éste: //span[text()='Dynamic Properties']
        //si en el caso anterior quisiera seleccionar varios elementos que contengan una palabra en común 
        //en sus nombre (ej: terminen en Box) sería asi: //span[contains(text(),' Box')]
        //También se puede usar el and y el or, Ejemplo: //input[@id='userName' or @type='text'] 
    })


    it("Selector por contains", () => {

        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        //Para los get no está aconsejado capturar por clase, dado que varios elementos del html pueden
        //compartir una misma clase, como en éste caso que comparten la clase "custom-control-label"
        //En estos casos, como no queda otra que capturar por clase, se especifica con el .contains()
        //el nombre específico de cada elemento del html. En ésta caso el botón del género Femenino 
        //si lo inspeccionamos y lo desplegamos vemos que contiene la etiqueta "Female", por lo que se lo
        //especificamos en el .contains. Así mismo con el botón del género Otros que contiene la etiqueta
        //"Other", pues se lo especificamos también.

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Other").click()
        cy.wait(1000)      
        
    }) 


    it("Selector por Copy/Copy_selector", () => {

        //Forma muy rápida de capturar un selector. En el html inspecciono un elemento, y abajo, en 
        //el inspector en lo que se me marca azul, doy click derecho, y elijo Copy/Copy_selector
        //se me guarda la etiqueta en el portapapeles y ya la puedo pegar en mi cy.get("")

        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)        

        cy.get("#userNumber").should("be.visible").type("951548445")   
        
    })


    it.only("Selector combinado", () => {

        //Podemos hacer que el selector sea más seguro combinando varios parámetros del mismo,
        //por ejemplo, en éste caso seleccionamos por tipo de elemento (input), por id (#userName)
        //y además por atributo [type='text']. Se escribe todo junto dentro del cy.get("")

        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)        

        cy.get("input#userName[type='text']").should("be.visible").type("Manuel")   
        
    })


    




    
})

