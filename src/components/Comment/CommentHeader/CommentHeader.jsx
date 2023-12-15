import Avatar from '../../Avatar/Avatar';
import PropTypes from 'prop-types';

const CommentHeader = ({ commenter, commenterAvatar }) => {
    return (
        <div className='ajuste-comment'>
            <Avatar avatar={commenterAvatar} username={commenter} />
        </div>
    );
};

CommentHeader.propTypes = {
    commenter: PropTypes.string,
    commenterAvatar: PropTypes.any,
};

export default CommentHeader;
