
## Description

Estructura para crear módulos nestjs para publicarlos en **npm**

## Installation

```bash
$ git clone https://github.com/dmanuelcl/nestjs-npm-template.git
```

El repositorio clonado tiene dos carpetas **MODULE_NAME** y **test-app**

En **MODULE_NAME** es donde se va a implementar el módulo/lirería y en **test-app** encontramos un proyecto de ejemplo, el cual tendrá como dependencia el modulo/libreria desarrollado y asi se puede testear.


## Setup


Renombrar la carpeta **MODULE_NAME** con el nombre del módulo/lirería y actualizar el **package.json** con la información correcta, en un principio es buscar donde existe  **MODULE_NAME** y poner los valores correctos

Una vez actualizado todo lo necesario en  **MODULE_NAME** ejecutamos el siguiente comando

```bash
$ cd NEW_MODULE_NAME
$ npm install
$ npm run build
```
 **NEW\_MODULE\_NAME** es el nombre que le dimos al módulo/lirería  en el paso anterior


Abrimos otra consola y nos posicionamos en **test-app**

y ejecutamos

```bash
$ npm install
$ npm install ../NEW_MODULE_NAME
```

Luego en la carpeta `docker` actualizamos los ficheros `run.sh` y `docker-compose.yml` para remplazar **MODULE_NAME** con **NEW\_MODULE\_NAME**


## Ejecución 

Para realizar las pruebas necesarias usaremos docker asi garantizamos mantener la misma plataforma que se va a usar en producción

```bash
$ cd docker && ./run.sh
```

Para compilar los cambios que hagamos en la librería abrimos una terminal y ejecutamos

```bash
$ docker exec -it NEW_MODULE_NAME /bin/bash
$ cd /usr/local/app/NEW_MODULE_NAME
```

Siempre que hagamos alguna modificación y necesitemos que se vea reflejada en la app de prueba tenemos que ejecutar el siguiente comando desde la terminal que abrimos en el paso anterior
```bash
$ npm run build
```


##Deploy

Una vez que se termine de implementar necesitamos actualizar la version de la librería en **package.json**, luego hacer push al repo y crear el `tag` correspondiente a la versión, luego solo queda publicar el proyecto en `npm` para esto ejecutamos en la terminal de docker el siguiente comando

```bash
$ npm publish
```

