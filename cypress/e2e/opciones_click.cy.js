

/// <reference types="Cypress" />
//para que autocomplete los comandos

describe("Opciones de click", () => {

    it("click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')

        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        //le digo que escriba el nombre de usuario en el elemento del formulario para ello

        cy.wait(1000)

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        //le digo que escriba la contraseña en el elemento del formulario para ello

        cy.wait(1000)

        cy.get('.oxd-button').should("be.visible").click()
        //le digo que haga click en el botón de login

        cy.wait(1000)

        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a").should("be.visible").click()
        //del menu que se abre le digo que pinche en el boton Admin
        cy.wait(1000)

        cy.get(':nth-child(3) > .oxd-main-menu-item').should("be.visible").click()
        //del menu que se abre le digo que pinche en el boton agenda
        cy.wait(1000)
    })



    //En éste mismo archivo hacemos otro test distinto más avanzado, a partir de aquí. 
    //Como ya sabemos, cada it corresponde a un test, aunque estén dentro de un mismo archivo
    //como aquí. Si sólo quisieramos ejectutar uno o varios de estos tests, les tenemos que poner .only detrás
    //a el/los que queramos que se ejecuten

    //Poniendo .click({force: true}) forzamos el click. Vale para ocasiones en que da error el click,
    //porque hay algún elemento que impide que se clickee (ver lineas 63, 68 y 72).
    it("click force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')

        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        //le digo que escriba el nombre de usuario en el elemento del formulario para ello

        cy.wait(1000)

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        //le digo que escriba la contraseña en el elemento del formulario para ello

        cy.wait(1000)

        cy.get('.oxd-button').should("be.visible").click({force: true})
        //le digo que haga click forzado en el botón de login

        cy.wait(1000)

        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a").should("be.visible").click({force: true})
        //del menu que se abre le digo que haga click forzado en el boton Admin
        cy.wait(1000)

        cy.get(':nth-child(3) > .oxd-main-menu-item').should("be.visible").click({force: true})
        //del menu que se abre le digo que haga click forzado en el boton agenda
        cy.wait(1000)
        
    })



    //Otro test distinto, click por coordenadas:

    it("click por coordenadas (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')

        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        //le digo que escriba el nombre de usuario en el elemento del formulario para ello

        cy.wait(1000)

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        //le digo que escriba la contraseña en el elemento del formulario para ello

        cy.wait(1000)

        cy.get('.oxd-button').should("be.visible").click()
        //le digo que haga click en el botón de login

        cy.wait(2000)

        cy.get('.oxd-topbar-header-title').should("be.visible").click(50,10)
        //le digo que haga click en un elemento cualquiera y dentro de dicho elemento que lo haga
        //en las coordenadas x:50 e y:10 Si en el navegador en el que estoy corriendo el test paso el ratón
        //sobre el elemento click con las coordenadas (columna izquierda, en éste caso paso 19 del test)
        //me muestra en la derecha (en la imagen de la web) el punto exacto (en rojo) en que está haciendo el click

        
    })

    
})