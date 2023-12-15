import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/images/defaultAvatar.jpg';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const UserListItem = ({ user }) => {
    const { isDarkMode } = useTheme();

    return (
        <Link to={`/users/${user.id}`}>
            <li className={`userListItem ${isDarkMode ? 'dark' : 'light'}`}>
                <img
                    src={
                        user.avatar
                            ? `https://backmundovigilante.2.us-1.fl0.io/${user.avatar}`
                            : defaultAvatar
                    }
                    alt={`${user.username} avatar`}
                />
                <div
                    className={`userInfoList ${isDarkMode ? 'dark' : 'light'}`}
                >
                    <div>{user.username}</div>
                    <div>{user.role}</div>
                    <div>{user.place}</div>
                </div>
            </li>
        </Link>
    );
};

UserListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        place: PropTypes.string,
    }),
};

export default UserListItem;
