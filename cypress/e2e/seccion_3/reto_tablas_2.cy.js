/// <reference types="Cypress" />
//para que autocomplete los comandos

require('cypress-xpath')
//Con ésto añadimos la librería de xpath para poder usarlo

require('cypress-plugin-tab')
//Con ésto añadimos la librería de tab para poder tabular en los formularios


describe("Reto Tablas 2", () => {        
          

     it("Seleccionar todos los datos de una tabla para guardarlos en un objeto", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html") 
        cy.title().should('eq', "Selenium Easy - Tabel Sort and Search Demo")  
        cy.wait(1500)
        
        const datos = [] //creo una variable datos que es un objeto vacío para guardar ahí los datos de la tabla

        cy.get("[role='row'] td").each(($el,index,$list)=>{ //Capturamos por el atributo role="row" que es el único que tienen en común todas las filas (pares e impares), que coja los td (columnas) y que para cada una de ellas (parametros each siempre iguales)...
            datos[index]=$el.text() //...que guarde en la variable datos, con el índice de cada columna, el valor que contiene la misma (su texto)
        }).then(()=>{               //Una vez guardado en el objeto "datos" todos los datos de cada columna
            for(let i=0;i<=datos.length;i++){   //que recorra todo el objeto datos (datos.length)
                cy.log(datos[i])                //y que imprima cada dato por separado (datos[1], datos[2], etc el que toque en cada vuelta)
            }
        })
       
     }) 


     it("Sumando los valores de los campos edad", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html") 
        cy.title().should('eq', "Selenium Easy - Tabel Sort and Search Demo")  
        cy.wait(1500)
        
        const datos = [] //creo una variable datos que es un objeto vacío para guardar ahí los datos de la tabla

        let sumaEdades = 0 //creo una variable sumaEdades con valor inicial 0

        cy.get("[role='row'] td").each(($el,index,$list)=>{ //Capturamos por el atributo role="row" que es el único que tienen en común todas las filas (pares e impares), que coja los td (columnas) y que para cada una de ellas (parametros each siempre iguales)...
            datos[index]=$el.text() //...que guarde en la variable datos, con el índice de cada columna, el valor que contiene la misma (su texto)
        }).then(()=>{               //Una vez guardado en el objeto "datos" todos los datos de cada columna
            for(let i=0;i<=datos.length;i++){   //que recorra todo el objeto datos (datos.length)
                cy.log(datos[i])                //y que imprima cada dato por separado (datos[1], datos[2], etc el que toque en cada vuelta)
                
                if(Number(datos[i])){     //Si el dato de esa vuelta es de tipo Number (el único dato de tipo Number de la tabla es la edad)
                    sumaEdades = sumaEdades+Number(datos[i]) //añade ese valor al acumulado en mi variable sumaEdades
                }
            }
            cy.log("La suma total es: " + sumaEdades) //Una vez acabe el bucle for y sume todos los datos de edad a mi variable, que imprima el total de mi variable sumaEdades
            expect(sumaEdades).eq(394)  //Le pongo una validación de que espero que la suma valga 394 (si tuviera el dato previamente)
        })               
     }) 


     it.only("Que me de el valor de un campo específico, la edad de los que sean Javascript Developer", () => {  
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html") 
        cy.title().should('eq', "Selenium Easy - Tabel Sort and Search Demo")  
        cy.wait(1500)
        
        const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)') //guardo en una variable la celda que contiene "Javascript Developer"
        cy.log(campo) //pero veo que la variable campo devuelve un objeto

        campo.each(($el,index,$list)=>{ //así que tenemos que recorrer dicho objeto con un each
            const dato=$el.text()       //para guardar en una variable "dato" el texto en sí del objeto
            cy.log(dato)                //ahora ya tengo en "dato" únicamente un string que vale "Javascript Developer"
        
            if(dato.includes("Javascript Developer")){ //Pongo un condicionante, que si dato incluye el texto "Javascript Developer"
                campo.eq(index).next().next() //que se sitúe en la celda índice de la variable campo (en la celda "Javascript Developer") y que pase a la siguiente y a la siguiente (o sea, a la celda de la edad de la fila de "Javascript Developer")
                .then((age)=>{                //y entonces, que del parámetro age (o pepito)
                    const edad=age.text()     //que guarde en una variable edad, el texto que contiene dicho parámetro age
                    cy.log("La edad del Javascript Developer es: " + edad) //y que imprima dicha variable 
                    expect(edad).eq('39')   //y lo podemos validar (si tenemos el dato anteriormente)
                })
            }    
         })      
        
     }) 
  
  
})