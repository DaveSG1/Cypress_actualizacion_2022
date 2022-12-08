/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descripcion', () => { 

    let tiempo=1000

    //Usamos beforeEach pq la página nos escupe a la página de login tras cada navegación a otra página
    //de modo que decimos que antes de cada test, visite la página de login y rellene el formulario:
    beforeEach(() =>{
        cy.log("Esto se repite antes de todos y cada uno de los tests, muy importante") 
        cy.wait(tiempo)

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin')
        cy.wait(tiempo)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.wait(tiempo)
        cy.get('.oxd-button').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    //Una vez ejecutados todos los tests, hará click en la foto de perfil y del desplegable, 
    //seleccionará log out. En el orden de ejecución de Cypress (navegador), vemos como sólo lo
    //ejecuta una vez, después del Test 3:
    after(() =>{
        cy.log("############## Sólo una vez al final de ejecutar todos los tests ##################")
        cy.wait(tiempo)

        cy.get('.oxd-userdropdown-tab').should("be.visible").click({force:true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='/web/index.php/auth/logout'][contains(.,'Logout')]").should("be.visible").click({force:true})
        cy.wait(tiempo)
    })

    //Hacemos click en uno de los enlaces de la página:
    it('Test uno', () =>{
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Admin')]").should("be.visible").click({force:true})
        cy.wait(tiempo)
    })

    //Hacemos click en uno de los enlaces de la página:
    it('Test dos', () =>{
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
        cy.wait(tiempo)
    })

    //Hacemos click en uno de los enlaces de la página:
    it('Test tres', () =>{
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Performance')]").should("be.visible").click({force:true})
        cy.wait(tiempo)
    })
       
});