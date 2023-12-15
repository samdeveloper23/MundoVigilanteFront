import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const EditPersonalInfo = ({ token, currentPersonalInfo }) => {
    const [personalInfo, setPersonalInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handleSubmitUser = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await personalInfoEditService(personalInfo, token);

            window.location.reload();

            setPersonalInfo('');
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitUser}>
                <label htmlFor='user' />
                <textarea
                    type='text'
                    name='personalInfo'
                    id='personalInfo'
                    onChange={(e) => setPersonalInfo(e.target.value)}
                    required
                    placeholder={
                        currentPersonalInfo
                            ? currentPersonalInfo
                            : 'Añadir información personal'
                    }
                />
                <button type='submit'>Guardar</button>

                {loading && <Loader />}
                {showModal && (
                    <ErrorModal
                        errorMessage={errorMessage}
                        onClose={handleCloseModal}
                    />
                )}
            </form>
        </div>
    );
};

EditPersonalInfo.propTypes = {
    token: PropTypes.any,
    currentPersonalInfo: PropTypes.string,
};

export default EditPersonalInfo;
