import CommentHeader from './CommentHeader/CommentHeader';
import CommentBody from './CommentBody/CommentBody';
import DeleteComment from '../DeleteComment/DeleteComment';
import PropTypes from 'prop-types';

const Comment = ({
    comments,
    deleteComment,
    publicationId,
    publicationOwner,
}) => {
    console.log(comments);
    return (
        <ul className='ul'>
            {comments.map((comment, index) => (
                <li className='li' key={index}>
                    <div className='comment-header'>
                        <CommentHeader
                            commenter={comment.commenter}
                            commenterAvatar={comment.commenterAvatar}
                        />
                        <div className='comment-text'>
                            <CommentBody
                                text={comment.text}
                                commenter={comment.commenter}
                            />
                        </div>
                    </div>

                    <div className='comment-content'>
                        <DeleteComment
                            commentId={comment.id}
                            publicationId={publicationId}
                            deleteComment={deleteComment}
                            commentOwner={comment.commenter}
                            publicationOwner={publicationOwner}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

Comment.propTypes = {
    comments: PropTypes.object,
    deleteComment: PropTypes.func,
    publicationId: PropTypes.number,
    publicationOwner: PropTypes.number,
};

export default Comment;
