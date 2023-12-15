import defaultAvatar from '../../assets/images/defaultAvatar.jpg';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, username }) => {
    return (
        <div className='avatar-image'>
            <img
                src={avatar ? `https://backmundovigilante.2.us-1.fl0.io/${avatar}` : defaultAvatar}
                alt={`${username} avatar`}
            />
        </div>
    );
};

Avatar.propTypes = {
    avatar: PropTypes.any,
    username: PropTypes.string,
};

export default Avatar;
