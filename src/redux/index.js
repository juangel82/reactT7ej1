// STORE - El estado global de la aplicación.
import {createStore} from 'redux'
import { mensajes } from './reducers/msgReducer';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension"

/* let store = createStore(
    mensajes,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);*/
    let store = createStore(
        mensajes,
        composeWithDevTools())
export default store;