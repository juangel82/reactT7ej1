/* components/LoginButton.component.jsx */
import { useDispatch, useSelector } from 'react-redux';
import {clickLogin} from '../redux/actions'


export default function LoginButton() {
    const estado = useSelector(state=>state);
    const dispatch = useDispatch();
    let cambiarLog = () => {
        console.log(estado.loginState);
        dispatch(clickLogin());
      };

    return (
        <button onClick={cambiarLog}>Login</button>
    );
}


