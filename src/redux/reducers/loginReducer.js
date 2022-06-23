
// REDUCERS - Las funciones que ejecutarán las instrucciones (actions)
// y que devolverán el nuevo estado modificado.

export const loginReducer = (state = false, action) => {
    switch(action.type) {
      case 'LOGIN_LOGIN':
        return !state
      default:
        return state
    }
  }
