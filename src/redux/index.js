// STORE - El estado global de la aplicación.
import {createStore} from 'redux'
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension"

/* let store = createStore(
    mensajes,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);*/
    let store = createStore(
        rootReducer,
        composeWithDevTools())
export default store;