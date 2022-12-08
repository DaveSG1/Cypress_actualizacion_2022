/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

//Los hooks se usan para evitar repetir código. Como en mis dos tests voy a visitar la misma página
//pues corto por ejemplo todo lo referente a la web, title y demás y en vez de ponerlo en cada test,
//lo pongo en un before y así lo va a hacer antes de todos los tests, o en un beforeEach y así lo va a hacer antes de cada uno de los tests
//la diferencia es que si pongo antes un before sólo va a chequear el assert del título una vez y
//si pongo antes un beforeEach va a chequear el assert del título en la ejecución de cada test, por lo que 
//da mejor rendimiento, más rápido, usar el before, en éste caso:

describe('Hooks ejemplos', () => { 

    beforeEach(() => {
        let tiempo=1000
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })

    it('Test uno', () =>{
        cy.get('[type="checkbox"]').check().should("be.checked")  
        cy.wait(2000)      
    })

    it('Test dos', () =>{
        cy.get('[type="checkbox"]').uncheck({force:true}).should("not.be.checked")
        cy.wait(2000)
    })

    it('Test tres', () =>{
        cy.xpath('//*[@id="easycont"]/div/div[2]/div[2]/div[2]/div[3]/label/input').check({force:true}).should("be.checked")
        cy.wait(2000)
    })
});