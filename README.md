# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

###DESCRIPCION EJERCICIO
En estos ejercicios del tema 6, vais a partir de la aplicación de mensajes que hemos creado durante la teoría.
Lo que haréis será modificar el componente MensajeHeader para incluir un formulario de creación de mensajes.
Recordad que, como MensajesHeader es un componente, el formulario tendrá que recibir su funcionalidad desde la vista Mensajes.
Para crear este formulario, podéis hacerlo tanto con Formik como con los formularios propios de HTML y React.

Como segundo ejercicio vais a incluir validaciones al formulario.
Si habéis utilizado Formik en el ejercicio anterior, podéis utilizar Yup para gestionar estas validaciones; en caso contrario, podéis hacer esta gestión manualmente.
Las validaciones obligatorias son las siguientes (podéis añadir más validaciones si lo veis conveniente):

Todos los campos son obligatorios.
El email debe de ser del formato adecuado 'email'.
El mensaje debe de contener más de 10 caracteres.
 

Si el usuario en cuestión no cumpliera alguna de estas condiciones, se le mostraría por pantalla un mensaje asociado a dicho error.
