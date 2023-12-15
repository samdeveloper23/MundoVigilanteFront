import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import onwerUserService from '../../../services/onwerUserService';
import commentCreateService from '../../../services/commentCreateService';
import Avatar from '../../Avatar/Avatar';
import Loader from '../../Loader/Loader';
import { FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ErrorModal from '../../Modals/ErrorModal/ErrorModal';

const CommentForm = ({ id, onAddComment }) => {
    const { token } = useAuth();
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [userComment, setUserComment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    useEffect(() => {
        const fetchUserComment = async () => {
            try {
                const userData = await onwerUserService(token);
                setUserComment(userData);
            } catch (error) {
                setErrorMessage(error.message);
                setShowModal(true);
            }
        };

        fetchUserComment();
    }, [token]);

    const handleSubmitComment = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            await commentCreateService(text, id, token);

            const updatedUserComment = await onwerUserService(token);
            const newComment = {
                avatar: updatedUserComment.avatar,
                username: updatedUserComment.username,
                text,
            };

            onAddComment(newComment);

            setText('');
            window.location.reload();
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {userComment && (
                <Avatar
                    avatar={userComment.avatar}
                    username={userComment.username}
                />
            )}

            <input
                type='text'
                placeholder='comentar...'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmitComment} disabled={loading}>
                <FaComment style={{ fontSize: '1rem' }} />
            </button>
            {loading && <Loader />}
            {showModal && (
                <ErrorModal
                    errorMessage={errorMessage}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

CommentForm.propTypes = {
    id: PropTypes.number,
    onAddComment: PropTypes.func,
};

export default CommentForm;
