import { useState } from 'react';
import PropTypes from 'prop-types';
import validatePasswordService from '../../services/validatePasswordService';
import Loader from '../Loader/Loader';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';

const EditPassword = ({ token }) => {
    const [currentPass, setCurrentPass] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [newPasswordCompare, setNewPasswordCompare] = useState('');
    const [confirmations, setConfirmations] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handlesubmitEditPassword = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            if (newPassword === newPasswordCompare) {
                const newPass = newPassword;

                setConfirmations(
                    await validatePasswordService(currentPass, newPass, token)
                );
                setErrorMessage(confirmations);
                setShowModal(true);
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
        <div>
            <form onSubmit={handlesubmitEditPassword}>
                <label htmlFor='editPassword'>Editar contraseña:</label>
                <div>
                    <div className='edit-currentpass'>
                        <label htmlFor='currentPassword' />
                        <input
                            type='password'
                            id='currentPassword'
                            value={currentPass}
                            onChange={(e) => setCurrentPass(e.target.value)}
                            minLength='8'
                            maxLength='60'
                            required
                            placeholder='Contraseña actual'
                        />
                    </div>
                    <div className='edit-newpass'>
                        <label htmlFor='newPassword' />
                        <input
                            type='password'
                            id='newPassword'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                            placeholder='Nueva contraseña'
                        />
                    </div>
                    <div className='edit-repeatpass'>
                        <label htmlFor='newPasswordCompare' />
                        <input
                            type='password'
                            id='newPasswordCompare'
                            value={newPasswordCompare}
                            onChange={(e) =>
                                setNewPasswordCompare(e.target.value)
                            }
                            required
                            minLength='8'
                            maxLength='60'
                            placeholder='Confirmar contraseña'
                        />
                    </div>
                    <div className='edit-actualizar'>
                        <button>Modificar contraseña</button>

                        {loading && <Loader />}

                        {showModal && (
                            <ErrorModal
                                errorMessage={errorMessage}
                                onClose={handleCloseModal}
                            />
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

EditPassword.propTypes = {
    token: PropTypes.any,
};

export default EditPassword;
