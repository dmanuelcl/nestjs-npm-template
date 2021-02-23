
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

Puedes ejecutar 

```bash
$ npm run start:dev
```
En la carpeta **test-app** para que se mantenga actualizado los cambios en la app de prueba
 
Siempre que se haga algun cambio en el módulo/lirería tenemos que ejecutar en la carpeta **NEW\_MODULE\_NAME**

```bash
$ npm run build
```

para que los cambios se vean reflejados en la app


##Deploy

Una vez que se termine de implementar necesitamos actualizar la version de la libreria en **package.json**, luego hacer push al repo y crear el `tag` correspondiente a la version, luego solo queda publicar el proyecto en `npm` para esto ejecutamos el siguiente comando en la carpeta **NEW\_MODULE\_NAME**

```bash
$ npm publish
```

