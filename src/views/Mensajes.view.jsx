import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import './Mensajes.view.css';
import {borrarMensaje,crearMensaje,leerMensaje,vaciarMensajes} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';


export default function Mensajes() {
  const estado = useSelector(state=>state);
  const dispatch = useDispatch();
   /*
 * Método para crear un nuevo mensaje e
 * incluirlo en el estado, mensaje que será un 
 * objeto con las propiedades: asunto, email y mensaje
*/ 
  let nuevoMensaje = (data) => {
    console.log(data);
    let nuevo = {
      "asunto": data.asunto,
      "email": data.email,
      "mensaje": data.mensaje,
      "leido": false
    };
    
   dispatch(crearMensaje(nuevo));
  };
    
  let leer = (index) => {
    dispatch(leerMensaje(index))
  }
/* Eliminamos todos los mensajes del listado mensajes,
 * estableciendo su valor como una lista vacía.
 * */ 
    
  let eliminarMensajes = (index) => {
    dispatch(borrarMensaje(index));
    
  };
  	
/* Pasándole el índice como argumento,
 * eliminamos el mensaje concreto de la lista y 
 * actualizamos su valor en el estado. */
  let vaciar = () => {
    dispatch(vaciarMensajes());
  };

  return (
    <div class="Mensajes">

{estado.loginState > 0 &&
          
       

     (<MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={vaciar}>
      </MensajesHeader>)
}
      <MensajesTable mensajes={estado} clickEliminarUno={eliminarMensajes}
      clickMarcarLeido={leer}></MensajesTable>
      
    </div>
  );
}