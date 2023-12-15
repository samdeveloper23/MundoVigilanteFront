import PropTypes from 'prop-types';
import '../Modal.css';

const DeleteConfirmationModal = ({ objetive, onConfirm, onClose }) => {
    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <p>{`¿Eliminar definitivamente ${objetive}?`}</p>
                <div className='yes-no'>
                    <button className='yes-no-res' onClick={onConfirm}>
                        Si
                    </button>
                    <button className='yes-no-res' onClick={onClose}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

DeleteConfirmationModal.propTypes = {
    objetive: PropTypes.string,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func,
};

export default DeleteConfirmationModal;
