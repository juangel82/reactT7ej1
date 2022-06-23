 
dentro de src creamos la carpeta redux y dentro tendremos: actions,reducers y el index.js


el index js será:

import {createStore} from 'redux'
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension"

    let store = createStore(
        rootReducer,                     // si solo tenemos un reducer se pone el que tengamos , si tenemos varios iran combinados en el archivo rootReducer
        composeWithDevTools())
export default store;


la carpeta actions contiene un archivo index.js con todas las acciones  que indican el tipo y el payload

export const borrarMensaje = (index)=>{
    return{
        type: 'BORRAR_MENSAJES',
        payload:index
    }
}
export const vaciarMensajes = () => {
    return {
      type: 'VACIAR_MENSAJES'
    }
  }

La carpeta reducers contiene todos los reducers y si son varios el rootReducer.js que es:

import { combineReducers } from "redux";
import { mensajes } from "./msgReducer";      // cada uno de los archivos reducers que hemos creado
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers(
    {
        //recibe el estado y el reducer que lo controla
        msgEstate:mensajes,
        loginState: loginReducer
    }
)

El resto de archivos de reducers contienen el estado que se le pasa, la acción y lo que tiene que devolver:
export const loginReducer = (state = false, action) => {     //aqui le decimos que si estado no esta definido lo inicialize a false
    switch(action.type) {
      case 'LOGIN_LOGIN':
        return !state
      default:
        return state
    }
  }


En el INdex.js de nuestra aplicacion habrá que crear la store

import store from './redux';
root.render(
 <Provider store ={store}>
    <App />
    </Provider>
);



 //EN EL COMPONENTE Nos enganchamos a la store


import {borrarMensaje,crearMensaje,leerMensaje,vaciarMensajes} from '../redux/actions'    //importamos las acciones que vayamos a usar
import { useDispatch, useSelector } from 'react-redux';




 const estado = useSelector(state=>state); //nos enganchamos al estado global
const dispatch = useDispatch();   //esto se encarga de llamar a las acciones y se usa como sigue:

    let leer = (index) => {
    dispatch(leerMensaje(index))
  }
  tambien podemos acceder  al valor de los  estados de la siguiente manera
  estado.loginState  // que son los estados que hemos creado en el rootReducer
  estado.msgState
