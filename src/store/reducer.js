// REDUCERS - Las funciones que ejecutarán las instrucciones (actions)
// y que devolverán el nuevo estado modificado.

export const mensajes = (state = [], action) => {
    switch(action.type) {
      case 'BORRAR_MENSAJES':
        state.splice(action.payload, 1);
         return [...state];  //antes devolviamos state pero eso hace que no nos pinte la lista. ¿¿por que??

      case 'VACIAR_MENSAJES':
        return [...state];
      case 'CREAR_MENSAJES':
        state.push(action.payload);
        
        return [...state];
      case 'LEER_MENSAJES':
        state[action.payload].leido = !state[action.payload].leido;
        
        return [...state];
      default:
        return [...state];
    }
  }

 