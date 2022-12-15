///
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

//hay que usar los mismos nombres que en el archivo .feature
Given("Abrir el navegador principal",()=>{
    cy.visit("https://demoqa.com/text-box")
})

//en éstos le pasamos el mismo nombre que en el archivo .feature
//pero además le decimos que despues de Cargando el nombre viene una palabra {word}, que la capture como el parámetro nombre y luego dicha palabra guardada en ese parámetro ("name") sea la que escriba en el .type()
When("Cargando el nombre {word}",(name)=>{
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(500)
})

//igual pero con el email
When("Cargando el email {word}",(email)=>{
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(500)
})

//igual pero con la dir1
And("Cargando la direccion 1 {word}",(dir1)=>{
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(500)
})

//igual pero con la dir2
And("Cargando la direccion 2 {word}",(dir2)=>{
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(500)
})

//aquí únicamente escribimos el mismo texto que en el arhivo .feature pq para el click no le tenemos que pasar ningún dato 
And("Click en boton", ()=>{
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(500)
})

Then("Validar el nombre de la pagina",()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(1000)
})

