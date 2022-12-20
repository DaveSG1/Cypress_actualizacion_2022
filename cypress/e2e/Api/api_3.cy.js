/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Operar la Api desde Cypress', () => { 

    let datos;

    it.only('Test Api GET', () =>{
        //Tengo que tener el servidor levantado (servidor es carpeta Cypress_servidor_JSON ver su info.txt)
        //y aquí le paso la ruta completa donde quiero hacer la petición de los datos que quiero usar (en éste caso los posts de mi api)
        datos=cy.request("http://localhost:3000/posts")

        //y aquí hago la validación de la respuesta de la api. Le digo que mi variable datos (que hace la petición a la api), su status debe ser igual a 200
        datos.its("status").should("equal",200)
    })

    //Para hacer lo mismo pero con otra sintaxis:
    it('Test Api GET 2', () =>{
        //Tengo que tener el servidor levantado (servidor es carpeta Cypress_servidor_JSON ver su info.txt)
        //y aquí le paso la ruta completa donde quiero hacer la petición de los datos que quiero usar (en éste caso los posts de mi api)
        datos=cy.request("http://localhost:3000/posts")

        //y aquí hago la validación de la respuesta de la api. Le digo que debería esperar que el status de la respuesta debe ser igual a 200
        .should((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    //Otra forma de hacerlo, ésta es la mejor para los GET. Siempre usar ésta misma sintaxis para 
    //los GET, sólo tengo que cambiar la url de la api de la que trae los datos
    //lo bueno de ésta es que puedo hacer ya validaciones (ver desde línea 48):
    it('Test Api GET otro metodo', () =>{
        
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then(response=>{
            let datos;
            datos=JSON.parse(JSON.stringify(response.body))

            cy.log(datos)  //imprimo los datos por consola

            expect(datos[0]).has.property("title", "Cypress") //hago validación de que espero que el primer elemento del JSON espero que tenga como clave: "title" y como valor: "Cypress" 
            expect(datos[0]).has.property("author", "Rodrigo") //hago validación de que espero que el primer elemento del JSON espero que tenga como clave: "author" y como valor: "Rodrigo" 
        })
    })


    //Ésta es la forma para hacer con método POST, siempre misma sintaxis, cambiar la url y el contenido del body:
    it('Test Api POST', () =>{
        
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{    
                    "id": 4,             
                    "title": "insertando valores desde Cypress",
                    "author": "Pedro"                                     
            }
        }).then(response=>{          
            expect(response.status).to.eql(201) //hago validación de que espero que el estado de la respuesta para mi inserción sea un 201 (post correcto). Podría hacer más validaciones si quisiera.            
        })
    })


    //Ésta sería la forma para hacer varias inserciones a la vez con método POST, siempre misma sintaxis, cambiar la url y el contenido del body:
    it('Test Api POST varias inserciones a la vez', () =>{

        for(let x=1;x<=10;x++){  //si por ejemplo quisiera hacer 10 inserciones a la vez, creo un bucle for

            let titulo=Math.random().toString(10) //creo una variable titulo para que genere un numero aleatorio que en éste caso lo consideraremos como el título de cada entrada

            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body:{    
                        "id": 3+x,     //como ya tengo 3 registros en mi api, le digo que empiece desde el siguiente al 3 (3 + lo que valga x en esa vuelta)        
                        "title": titulo,
                        "author": "Author: " + titulo                                     
                }
            }).then(response=>{          
                expect(response.status).to.eql(201) //hago validación de que espero que el estado de la respuesta para mi inserción sea un 201 (post correcto). Podría hacer más validaciones si quisiera.            
            })
        }       
    })


    //Ésta es la forma para hacer con método PUT, siempre misma sintaxis, cambiar la url añadiéndole como parámetro la id del registro que quiera modificar de mi api (en éste caso el número 3) y el contenido del body:
    it('Test Api PUT', () =>{
        
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/3",
            body:{                                     
                    "title": "modificando un valor desde Cypress con PUT",
                    "author": "cambiando a Juan por John desde Cypress con PUT"                                     
            }
        }).then(response=>{          
            expect(response.status).to.eql(200) //hago validación de que espero que el estado de la respuesta para mi inserción sea un 200 (PUT correcto). Podría hacer más validaciones si quisiera.            
        })
    })


        //Ésta es la forma para hacer con método DELETE, siempre misma sintaxis, cambiar la url añadiéndole como parámetro el número de registro que quiera eliminar (en éste caso el número 4):
        it('Test Api DELETE', () =>{
        
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/4"

            }).then(response=>{          
                expect(response.status).to.eql(200) //hago validación de que espero que el estado de la respuesta para mi inserción sea un 200 (delete correcto). Podría hacer más validaciones si quisiera.            
            })
        })


        //Ésta sería la forma para eliminar varios registros a la vez con método DELETE, siempre misma sintaxis, cambiar la url añadiéndole como parámetro el número de registro que quiera eliminar (en éste caso el número 4):
        it('Test Api DELETE varios registros a la vez', () =>{
            for(let x=5;x<=13;x++){    //hago un bucle for y pongo la x desde el primer al último id que quiera borrar

                cy.request({
                    method: "DELETE",
                    url: "http://localhost:3000/posts/" + x   //aquí le indico que para el parámetro del id a borrar, coja el valor de x en esa vuelta
                                  
                    }).then(response=>{          
                    expect(response.status).to.eql(200) //hago validación de que espero que el estado de la respuesta para mi inserción sea un 200 (delete correcto). Podría hacer más validaciones si quisiera.            
                })
            }       
         })

});