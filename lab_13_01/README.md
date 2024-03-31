# Laboratorio REACT Módulo 13 - Banca Online
## Parte 1: Movimientos de una cuenta => ([TypeScript](src/movement-list))

## Descripción

La aplicación consiste en una banca online, donde el usuario puede ver sus cuentas, ver los movimientos de una cuenta y hacer transferencias.

Vamos a tener las siguientes pantallas:

- Login
- Mis cuentas
- Creación y edición de cuentas
- Movimientos de una cuenta
- Transferencias tanto desde un enlace cómo a partir de movimientos hacer una transferencia desde una cuenta determinada.

## Requisitos

- La aplicación debe está desarrollada con React.
- El backend está montado sobre JSON Server.
- La aplicación es responsive.
- La aplicación tiene un menú superior con las siguientes opciones:
  - Mis cuentas
  - Transferencias
  - Movimientos, solo se quiere ver los movimientos de una cuenta.

## Instalación

Para instalar el proyecto, ejecutar el siguiente comando:

```bash
npm install
```

Con este comando se instalarán tanto las dependencias de la aplicación como las del servidor.

## Ejecución

Para ejecutar el proyecto, ejecutar el siguiente comando:

```bash
npm run dev
```

También se puede hacer desde la raíz de la aplicación, arrancar la aplicación por separado:

```bash
npm run dev
```

Y el servidor, vamos a la carpeta server:

```bash
cd server
```

Y ejecutamos el siguiente comando:

```bash
npm start
```

## Acceso

Para poder logarse en la aplicación, se debe utilizar el siguiente usuario y contraseña:

```bash
Usuario: admin@email.com
Contraseña: test
```
![login](/public/readme_img/login.PNG)
![account_list](/public/readme_img/accounts.PNG)
![movements](/public/readme_img/movements.PNG)
