import PropTypes from 'prop-types';

const CommentBody = ({ commenter, text }) => {
    return (
        <>
            <p>{commenter}</p>
            <p>{text}</p>
        </>
    );
};

CommentBody.propTypes = {
    commenter: PropTypes.string,
    text: PropTypes.string,
};

export default CommentBody;
