// este ROOTreducer asocia cada estado a cada reducer y crea un solo reducer gracias a la funcion combineReducers
import { combineReducers } from "redux";
import { mensajes } from "./msgReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers(
    {
        //recibe el estado y el reducer que lo controla
        msgEstate:mensajes,
        loginState: loginReducer
        //podriamos añadir mas estados y reducers
    }
)
