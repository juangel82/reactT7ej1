import React,{useState} from 'react'
import LoginButton from '../components/LoginButton.component';
import LogoutButton from '../components/LogoutButton.component';

export default function Vista() {
//CONDICIONAL TIPO 3
    const [mensajesSinLeer, setMensajesSinLeer] = useState(0);
    
    let addMensajeSinLeer = () => { setMensajesSinLeer(mensajesSinLeer + 1); }

    return (
      <div>
        {mensajesSinLeer > 0 ?
            (<p> Tienes {mensajesSinLeer} mensajes sin leer... </p>) :
            (<p> No tienes mensajes sin leer... </p>)
        }

        <button onClick={addMensajeSinLeer}>Sumar 1 mensaje</button>
      </div>
    );




}