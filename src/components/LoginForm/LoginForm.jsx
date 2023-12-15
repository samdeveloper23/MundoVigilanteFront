import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginService from '../../services/loginServices';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import Loader from '../Loader/Loader';

const LoginForm = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const token = await loginService(email, password);

            login(token);
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='register-card'>
            <div className='logo-container'>
                <div className='logo-image'>
                    <Logo />
                </div>
            </div>
            <form>
                <div className='login-input'>
                    <h2>Login</h2>
                    <div className='imputsLab'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor='password'>Contraseña:</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength='8'
                            maxLength='60'
                            required
                        />
                    </div>
                </div>

                {loading && <Loader />}
                {showModal && (
                    <ErrorModal
                        errorMessage={errorMessage}
                        onClose={handleCloseModal}
                    />
                )}
            </form>
            <div className='button-container' onClick={handleSubmit}>
                <div className='login-button'>Login</div>
            </div>
            <div className='navLinkLogin'>
                <div>
                    <NavLink to='/recover'>
                        ¿Has olvidado tu contraseña?
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/register'>
                        ¿Aún no tienes cuenta? Regístrate.
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
};

export default LoginForm;
