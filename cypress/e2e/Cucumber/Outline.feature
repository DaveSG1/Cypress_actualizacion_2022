Feature: Demo de Cucumber con Outline

    Esta es una demo de como utilizar Cucumber con Outline

    Scenario: Demo de Cucumber con Outline 
        Given Abrir el navegador principal     
        When  Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la direccion 1 <dir1>
        And Cargando la direccion 2 <dir2>
        And Click en boton 
        Then Validar el nombre de la página

        Examples:
            | username | email | dir1 | dir2 |
            | rodrigo  | rodrigo@gmail.com  | direccion uno juan  | direccion dos juan |
            | pedro  | pedro@gmail.com  | direccion uno pedro  | direccion dos pedro |
            | erika  | erika@gmail.com  | direccion uno erika  | direccion dos erika |
            | jessica  | jessica@gmail.com  | direccion uno jessica  | direccion dos jessica |