// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Aquí configuro un comando, sigue siempre ésta sintaxis, Texto_visible es el nombre con el que luego lo usaré,
//y en el paréntesis indico los parámetros que tendré que pasarle, y dentro de las llaves, la función
//que realizará con dichos parámetros que le pasaré:

//FUNCIONES NORMALES, SENCILLAS:

Cypress.Commands.add("Texto_visible", (selector,texto) => { 
    let tiempo=1000
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
 })

//Otro comando para selector de texto por xpath en vez de por cy.get:
Cypress.Commands.add("Texto_visible_xpath", (selector,texto) => { 
    let tiempo=1000
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)   
})

//Otro comando para seleccionar botones y hacerles click normal:
Cypress.Commands.add("Click_sencillo", (selector) => { 
    let tiempo=1000
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)    
})

//Otro comando para seleccionar botones y hacerles click force:
Cypress.Commands.add("Click_force", (selector) => { 
    let tiempo=1000
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)    
})

//Otro comando para seleccionar botones y hacerles click force con xpath:
Cypress.Commands.add("Click_force_xpath", (selector) => { 
    let tiempo=1000
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)    
})

//Otro comando para validar campo (que el tipo de dato que se meta en el formulario sea el que corresponde al campo):
Cypress.Commands.add("Validar_campo", (selector,message,nombre_campo) => { //selector será el xpath del mensaje de error de la propia web; message será el texto literal del mensaje de error que sale en la web; nombre_campo será el nombre que le queramos poner, campo email por ejemplo.
    
    cy.xpath(selector).should("be.visible").should("contain", message).then(()=>{  //le decimos que, si aparece el mensaje de error (en rojo) en la web (el "selector" captura el xpath de dicho mensaje de error). Y si el texto en sí de dicho mensaje de error coincide con el "message" que le hemos pasado como parámetro; entonces que muestre en la cola de ejecución (al final) la alerta de que el dato introducido no es correcto                                                 
            cy.log("El " + nombre_campo + " no es válido")            
        })          
})


//FUNCIONES POR CONJUNTO Ó COMPLETAS (COMBOS):

//En ésta le paso todos los datos por parámetros y dentro tiene todos los get (ya con sus etiquetas puestas)
//y en cada uno de ellos le aplicará el dato concreto que le haya pasado por argumentos (el nombre, el email, etc)
//ejecuta el combo completo en la página con una sóla función: 
Cypress.Commands.add("Bloque_ToolsQA", (name,email,dir1,dir2) => {
    let tiempo=1000    
    cy.get("#userName").should("be.visible").type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should("be.visible").type(dir1)
    cy.wait(tiempo)
    cy.get("#permanentAddress").should("be.visible").type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should('be.visible').click({force:true})
    cy.wait(tiempo)
})

//Otro para el formulario de la web seleniumeasy.com:
Cypress.Commands.add("Bloque_Seleniumeasy", (name,surname,email,phone,dir,city,state,zip,website,description) => {
    let tiempo=1000    
    cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(name) //los clear en todos los campos de texto los pongo para que si ejecuto la prueba varias veces con distintos datos (llamo varias veces a ésta función), borre el contenido de los formularios de una prueba a otra
    cy.wait(tiempo)
    cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(surname)
    cy.wait(tiempo)
    cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(phone)
    cy.wait(tiempo)
    cy.get(":nth-child(6) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(dir)
    cy.wait(tiempo)
    cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(city)
    cy.wait(tiempo)
    cy.get(".selectContainer > .input-group > .form-control").select(state,{force:true})
    cy.wait(tiempo)
    cy.get(":nth-child(9) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(zip)
    cy.wait(tiempo)
    cy.get(":nth-child(10) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(website)
    cy.wait(tiempo)
    cy.get(":nth-child(1) > label > input").check().should("be.checked")
    cy.wait(tiempo)
    cy.get(":nth-child(12) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(description)
    cy.wait(tiempo)
    cy.get(".btn").should('be.visible').click({force:true})
    cy.wait(tiempo)
})

