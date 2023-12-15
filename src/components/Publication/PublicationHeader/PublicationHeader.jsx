import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';
import { FaLocationDot } from 'react-icons/fa6';
import './PublicationHeader.css';
import { useTheme } from '../../../contexts/ThemeContext';

const PublicationHeader = ({ username, createdAt, place, avatar }) => {
    const { isDarkMode } = useTheme();

    return (
        <header
            className={`publication-header ${isDarkMode ? 'dark' : 'light'}`}
        >
            <div className='pubavatar-container'>
                <Avatar avatar={avatar} username={username} />
            </div>
            <div className={`header-username ${isDarkMode ? 'dark' : 'light'}`}
        >
                <p className='user-name'>{username}</p>
                <div>
                    <time>
                        {new Date(createdAt).toLocaleDateString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit',
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit',
                        })}
                    </time>
                </div>
                <div className='location2'>
                    {place && (
                        <div className='publication-location'>
                            <FaLocationDot />
                            <p>{place}</p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

PublicationHeader.propTypes = {
    username: PropTypes.string,
    createdAt: PropTypes.string,
    place: PropTypes.string,
    avatar: PropTypes.any,
};

export default PublicationHeader;
