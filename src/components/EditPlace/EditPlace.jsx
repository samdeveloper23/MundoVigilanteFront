import { useState } from 'react';
import placeEditService from '../../services/placeEditService';
import Loader from '../Loader/Loader';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import PropTypes from 'prop-types';

const EditPlace = ({ token, currentPlace }) => {
    const [place, setPlace] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handleSubmitPlace = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await placeEditService(place, token);

            window.location.reload();

            setPlace('');
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='edit-placeInfo'>
            <form onSubmit={handleSubmitPlace}>
                <label htmlFor='place'></label>
                <input
                    type='text'
                    name='place'
                    id='place'
                    onChange={(e) => setPlace(e.target.value)}
                    required
                    placeholder={
                        currentPlace ? currentPlace : 'Añadir ubicación'
                    }
                />
                <button type='submit' disabled={loading}>
                    Guardar
                </button>

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

EditPlace.propTypes = {
    token: PropTypes.any,
    currentPlace: PropTypes.string,
};

export default EditPlace;
