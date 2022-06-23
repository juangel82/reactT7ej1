

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
  
  export const crearMensaje = (msg) => {
    return {
      type: 'CREAR_MENSAJES',
      payload: msg
    }
  }
  
  export const leerMensaje = (index) => {
    return {
      type: 'LEER_MENSAJES',
      payload: index
    }
  }
  export const clickLogin = (estado)=>{
    return {
      type:'LOGIN_LOGIN',
      payload:estado
    }
  }