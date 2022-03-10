# second-app

Lista de comandos git

Se utiliza para indicar que se va a utilizar versionamiento.
solo se hace una vez
>git init

Para clonar el repositorio en otra maquina
>git clone https://github.com/Jhonnasom/second-app.git

Verificar el estatus de los documentos del repositorio
>git status

Para agregar al HEAD todos los archivos modificados o nuevos, antes de realizar un commit
>git add .

Para versionar los documentos agregados al HEAD
>git commit -m "Mensaje del commit"

Para versionar los documentos en la nube o servidor remoto
>git push origin -u Nombre_de_la_rama_servidor_remoto

Para obtener los cambios de la nube o servidor remoto
>git pull origin

Listar todos los commits
>git log

Listar todas las ramas del repositorio
>git branch -a

Para crear una nueva rama
>git checkout -b Nombre_de_la_rama

Para cambiarse de rama
>git checkout Nombre_de_la_rama