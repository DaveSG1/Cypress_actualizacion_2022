//Fixtures se usa para importar archivos externos, principalmente JSON, para poblar nuestra página con la información que contiene el JSON:

//Van en la carpeta fixtures de mi proyecto, ver ejemplo en fixtures/datosreto.json que es el fixture que vamos a usar en éste ejemplo:

//Para el reto lo que queremos es tener un json con varias personas (array de objetos) de modo que, para cada persona
//entre en la web y rellene el formulario con los datos de dicha persona, luego que vuelva a entrar y la rellene con los datos de la segunda persona, y asi:

/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto Fixture', () => { 

    let tiempo=1000 

    it('Test reto Cargando desde JSON', () =>{        

        //Por lo que, ponemos que utilice mi fixture "datosreto" que contiene el array de objetos        
        //y entonces guarde dicho array de objetos en una variable "tesdata" en la cual hace 
        //un bucle forEach y para cada objeto del array, que es la info de cada persona, 
        //la guarde en una variable "data":        
        cy.fixture("datosreto").then((tesdata) =>{

            tesdata.forEach((data)=>{  //para cada persona (cada objeto del array) llamado "data", hará lo siguiente:


                const d_nombre=data.nombre  //guardará cada uno de sus datos en una variable
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2


                cy.visit('https://demoqa.com/text-box')  //visitará la página (así la recarga cada vez)
                cy.title().should('eq','ToolsQA')
                cy.wait(tiempo)



                cy.get('#userName').should('be.visible').type(d_nombre) //y escribirá en cada casilla del formulario el dato que corresponda, guardado en las distintas variables (d_nombre, d_email, d_dir1, d_dir2)
                cy.wait(tiempo)

                cy.get('#userEmail').should('be.visible').type(d_email) 
                cy.wait(tiempo)

                cy.get('#currentAddress').should('be.visible').type(d_dir1) 
                cy.wait(tiempo)

                cy.get('#permanentAddress').should('be.visible').type(d_dir2) 
                cy.wait(tiempo)

                cy.get('#submit').should('be.visible').click({force:true})  //y hará click
                cy.wait(tiempo)

            })  //volverá a entrar en el bucle con la segunda persona, la tercera ...
        })
    })


        
});