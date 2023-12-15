import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const InfoContainer = () => {
    const pass = 'HACKaBOSS';

    const handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem('pass', pass);
    };

    return (
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
            </div>
            <div>
                <h2 className='info-title'>
                    Nuev@ por aquí? Unete a la red de vigilantes!
                </h2>
                <div className='info-text'>
                    <p>
                        Únete a nuestra comunidad para estar al tanto de las
                        novedades en el mundo de la seguridad privada.
                    </p>
                </div>
                <div className='buttonsInfoContainer'>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/register'>
                            Registro
                        </NavLink>
                    </div>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/login'>
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;
