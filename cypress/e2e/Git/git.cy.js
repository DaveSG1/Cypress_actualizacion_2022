//git --version   muestra versión que tengo instalada

//git   lista comandos mas usados 

//git help clone   abre web con la documentación de git

//git config --global user.name "David"   configuro mi nombre de usuario

//git config --global user.email "david_serna_83@hotmail.com"    configuro mi email


//git init                Inicializa el repositorio (sólo la primera vez). Le digo que dicha carpeta va a ser un repositorio de Git

//git add .                Añade todos los cambios en los archivos de mi repositorio al snapshot

//git add *.json          Añadir al snapshot sólo los archivos con extensión .json por ej ó Cucumber.feature sólo añadiría dicho archivo por ej

//git status              Muestra los archivos que tengo añadidos y los que se han modificado y no se han añadido aún

//git commit -m "descripción"         Guarda los archivos añadidos (en local)

//git log    muestra todos los commits del repositorio 

//git log --oneline --decorate --all --graph         muestra todos los commits de forma resumida con sólo su referencia de commit (mejor)

//git reset --soft.ó.hard referenciaDelCommit       vuelve al commit que le indiquemos de los listados en el git log (siendo referenciaDelCommit los códigos amarillos que salen en el git log para cada commit que hicimos). Con soft guarda los cambios actuales y con hard no.

//git checkout -- .        Recuperar todo: comodín para recuperar archivos perdidos borrados por error etc  

//git reflog          muestra todo el historial del repositorio, si he hecho un reset a un commit antiguo en algún momento, etc

//Creo nuevo repo en github y sigo instrucciones que da la web (...or push an existing repository from the command line):
//git remote add origin https:...(la dirección que diga github para ese repo)
//git brach -M master   (importante poner master y no main para la integración con Jenkins)
//git push -u origin master

//a partir de aquí ya cada vez que quiera subir cambios: git add . / git commit -m "texto" / git push 



//.gitignore       puedo crear un archivo llamado así, y dentro de él escribir los ficheros o carpetas que no quiero que se suban a git (ej archivo: Cucumber.feature o ej carpeta: /Cucumber )
