import { useState, useEffect } from 'react';
import onwerUserService from '../../services/onwerUserService';
import useAuth from '../../hooks/useAuth';
import { MdDelete } from 'react-icons/md';
import DeleteConfirmationModal from '../Modals/DeleteConfirmationModal/DeleteConfirmationModal';
import PropTypes from 'prop-types';

const DeleteComment = ({
    publicationId,
    commentId,
    deleteComment,
    commentOwner,
    publicationOwner,
}) => {
    const { token } = useAuth();
    const [isDeleting, setIsDeleting] = useState(false);
    const [user, setUser] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await onwerUserService(token);
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [token]);

    const isAuthor = publicationOwner === 1 || commentOwner === user.username;

    const handleDeleteComment = async () => {
        try {
            setShowDeleteModal(true);
        } catch (error) {
            alert('Error al eliminar el comentario', error);
            setIsDeleting(false);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            deleteComment(publicationId, commentId);
            setIsDeleting(false);
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='delete-commnet'>
            {isAuthor && (
                <>
                    {isDeleting ? (
                        <p>Eliminando comentario...</p>
                    ) : (
                        <button onClick={handleDeleteComment}>
                            <MdDelete style={{ fontSize: '1.2rem' }} />
                        </button>
                    )}
                    {showDeleteModal && (
                        <DeleteConfirmationModal
                            objetive='este comentario'
                            onConfirm={handleConfirmDelete}
                            onClose={() => setShowDeleteModal(false)}
                        />
                    )}
                </>
            )}
        </div>
    );
};

DeleteComment.propTypes = {
    publicationId: PropTypes.number,
    commentId: PropTypes.number,
    deleteComment: PropTypes.func,
    commentOwner: PropTypes.number,
    publicationOwner: PropTypes.number,
};

export default DeleteComment;
