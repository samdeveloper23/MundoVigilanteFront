import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const ValidatedForm = () => {
    return (
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
             </div>
             <div className='login-input'>
            <h2>Validación</h2>
            <p>
                Por favor, active la cuenta a través del correo de verificación.
            </p>
            <p>
                Gracias por confiar en nosotros, un saludo de parte del equipo
                MundoVigilante.
            </p>
            </div>
            <div className='button-container'>
                        <NavLink className='login-button' to='/login'>
                            Login
                        </NavLink>
                </div>
        </div>
    );
};

export default ValidatedForm;
