/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navegación entre las páginas', () => { 
    it('Back, forward', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)        

        //entro en un enlace
        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should("be.visible").click({force:true})
        cy.wait(tiempo)

        //dentro de ese enlace entro en otro enlace
        cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").should('be.visible').click({force:true})
        cy.wait(tiempo)

        //con ésto navego a la página anterior (como si le diera a la flecha de atrás del navegador) y otra vez a la anterior (flecha de atrás):
        cy.go("back")       
        cy.wait(2000)
        cy.go("back")

        //con ésto navego otra vez a la página siguiente (como si le diera a la flecha de adelante del navegador):
        cy.wait(2000)
        cy.go("forward")
    })


    it.only('Reload page', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)      
        
         //entro en un enlace
         cy.get(':nth-child(1) > :nth-child(1) > .avatar').should("be.visible").click({force:true})
         cy.wait(tiempo)
 
         //dentro de ese enlace entro en otro enlace
         cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").should('be.visible').click({force:true})
         cy.wait(tiempo)

        //Relleno un par de campos del formulario:
        cy.get('#userName').should('be.visible').type('Juan')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('juan@gmail.com')
        cy.wait(tiempo)

        //con ésto recargo de nuevo la página, borrará el contenido del formulario:
        cy.reload()      
        
    })
});