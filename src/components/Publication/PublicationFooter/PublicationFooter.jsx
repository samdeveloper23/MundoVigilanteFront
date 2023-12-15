import PropTypes from 'prop-types';
import useAuth from '../../../hooks/useAuth';
import { MdDelete } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import DeleteConfirmationModal from '../../Modals/DeleteConfirmationModal/DeleteConfirmationModal';
import { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

const PublicationFooter = ({
    publicationId,
    owner,
    likes,
    likedByMe,
    toogleLike,
    deletePublication,
    loading,
}) => {
    const { token } = useAuth();
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleLike = async (e) => {
        try {
            e.target.classList.toggle('like');

            await toogleLike(e, publicationId, likedByMe);
        } catch (error) {
            alert(error.message);
        }
    };

    const handleDeletePublication = async () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        try {
            deletePublication(publicationId);
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <footer className={`footer-like ${isDarkMode ? 'dark' : 'light'}`}>
            <div className='toogle-like'>
                {likedByMe ? (
                    <AiFillHeart
                        onClick={(e) => handleLike(e)}
                        style={{ color: 'red', fontSize: '2rem' }}
                    />
                ) : (
                    <AiFillHeart
                        onClick={(e) => handleLike(e)}
                        style={{ fontSize: '2rem' }}
                    />
                )}

                <div className='me-gusta'>{likes} Me gusta</div>
            </div>
            {token && owner === 1 && (
                <div
                    onClick={() => handleDeletePublication()}
                    disabled={loading}
                    className='delete-button'
                >
                    <MdDelete style={{ fontSize: '2rem' }} />
                </div>
            )}
            {showDeleteModal && (
                <DeleteConfirmationModal
                    objetive='esta publicación'
                    onConfirm={handleConfirmDelete}
                    onClose={() => setShowDeleteModal(false)}
                />
            )}
        </footer>
    );
};

PublicationFooter.propTypes = {
    publicationId: PropTypes.number,
    owner: PropTypes.any,
    likedByMe: PropTypes.any,
    likes: PropTypes.number,
    toogleLike: PropTypes.func,
    deletePublication: PropTypes.func,
    loading: PropTypes.bool,
};

export default PublicationFooter;
