import { useState } from 'react';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import registerService from '../../services/registerServices';
import { useNavigate, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Loader from '../Loader/Loader';

import './RegisterForm.css';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState('Vs');
    const [confirmations, setConfirmations] = useState('');
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

            const validateEmail = email;
            sessionStorage.setItem('validateEmail', validateEmail);

            if (firstPassword === passwordConfirm) {
                const password = firstPassword;

                setConfirmations(
                    await registerService(username, email, password, role)
                );
                setErrorMessage(confirmations);
                setShowModal(true);
                navigate('/activated');
            } else {
                setErrorMessage('Las contraseñas no coinciden');
                setShowModal(true);
            }
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='reg-card'>
            <div className='reglogo-container'>
                <div className='reglogo-image'>
                    <Logo />
                </div>
            </div>

            <form>
                <div className='register-input'>
                    <h2 className='register-input h2'>Registro</h2>
                    <div className='imputsLab'>
                        <label htmlFor='username'>Nombre de usuario:</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                            required
                            maxLength='40'
                        />

                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            minLength='5'
                            maxLength='60'
                        />

                        <label htmlFor='firstPassword'>Contraseña:</label>

                        <input
                            type='password'
                            id='firstPassword'
                            value={firstPassword}
                            onChange={(e) => setFirstPassword(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />

                        <label htmlFor='passwordConfirm'>
                            Confirmar contraseña:
                        </label>

                        <input
                            type='password'
                            id='passwordConfirm'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />

                        <label htmlFor='role'>Tipo de perfil:</label>
                        <div className='check-role'>
                            <div>
                                <input
                                    type='checkbox'
                                    id='Artista'
                                    onChange={() => setRole('Vs')}
                                    checked={role === 'Vs'}
                                />
                                <label className='label-role' htmlFor='role'>
                                    Vs
                                </label>
                            </div>
                            <div>
                                <input
                                    type='checkbox'
                                    id='Estudio'
                                    onChange={() => setRole('Empresa')}
                                    checked={role === 'Empresa'}
                                />
                                <label className='label-role' htmlFor='role'>
                                    Empresa
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {loading && <Loader />}

                {showModal && (
                    <ErrorModal
                        errorMessage={errorMessage}
                        onClose={handleCloseModal}
                    />
                )}
                <div className='button-container' onClick={handleSubmit}>
                    <div className='login-button'>Registrarme</div>
                </div>
                <div>
                    <NavLink to='/login'>
                        ¿Ya estás registrado? Inicia sesión
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
