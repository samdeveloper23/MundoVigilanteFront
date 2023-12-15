import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import onwerUserService from '../../services/onwerUserService';
import './Footer.css';
import { FaSearch } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { BiSolidUserPlus } from 'react-icons/bi';
import { useTheme } from '../../contexts/ThemeContext'; 

const Footer = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');
    const [buscadorActivo, setBuscadorActivo] = useState(false);
    const { isDarkMode } = useTheme();

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

    const perfil = `/users/`;

    return (
        <div className={`fijo ${isDarkMode ? 'dark' : 'light'}`}>
            <footer
                className={`footer-layout ${isDarkMode ? 'dark' : 'light'}`}
            >
                {token ? (
                    <>
                        <div
                            className='logos-footer'
                            onClick={() => setBuscadorActivo(!buscadorActivo)}
                        >
                            <NavLink to='/home'>
                                <FaSearch
                                    style={{
                                        color: isDarkMode ? 'white' : 'black',
                                        fontSize: '2.5rem',
                                    }}
                                />
                            </NavLink>
                        </div>
                        <div className='logos-footer'>
                            <NavLink to='/message'>
                                <MdAddCircle
                                    style={{
                                        color: isDarkMode ? 'white' : 'black',
                                        fontSize: '3rem',
                                    }}
                                />
                            </NavLink>
                        </div>
                        <div className='logos-footer'>
                            <NavLink to={perfil + user.userId}>
                                <Avatar
                                    avatar={user.avatar}
                                    username={user.username}
                                />
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <div className='footer-guest'>
                        <NavLink to='/register'>
                            <BiSolidUserPlus
                                className='footer-icon'
                                style={{ color: 'gray', fontSize: '2.5rem' }}
                            />
                        </NavLink>
                    </div>
                )}
            </footer>
        </div>
    );
};

export default Footer;
