//creo una clase (objeto) con dentro todas las funciones que quiera, en éste caso visitHome funciona para cargar la web y comprobar el título:
class ProyectoUno_Po{

    visitHome(){        
        let tiempo=1000
        //Éste comando de abajo sería el que se usaría si quisiera definir un parámetro distinto de configuración para ésta página únicamente:
        //Cypress.config("defaultCommandTimeout", 20000)
        before(() =>{
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    } 

    //Vamos a separar por secciones el formulario (del ejercicio hecho en la sección 5 de comandos), así lo hacemos trozos de código (guardandolos en distintas funciones (Secciones) que luego serán llamadas desde mi página de pruebas):

    SeccionUno(name,surname,email){
        let tiempo = 1000
        cy.get(":nth-child(2) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(name) //los clear en todos los campos de texto los pongo para que si ejecuto la prueba varias veces con distintos datos (llamo varias veces a ésta función), borre el contenido de los formularios de una prueba a otra
        cy.screenshot("Campo nombre")  //ésto lo pongo para probar los screenshots
        cy.get(":nth-child(3) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(surname)
        cy.wait(tiempo)
        cy.get(":nth-child(4) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(email)
        cy.wait(tiempo)
    }

    SeccionDos(phone,dir,city,state){
        let tiempo = 1000
        cy.get(":nth-child(5) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(phone)
        cy.wait(tiempo)
        cy.get(":nth-child(6) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(dir)
        cy.wait(tiempo)
        cy.get(":nth-child(7) > .inputGroupContainer > .input-group > .form-control").clear().should("be.visible").type(city)
        cy.wait(tiempo)
        cy.get(".selectContainer > .input-group > .form-control").select(state,{force:true})
        cy.wait(tiempo)
    }

    SeccionTres(zip,website,description){
        let tiempo = 1000
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
    }

} //final

//y siempre tengo que exportar la clase:
export default ProyectoUno_Po;