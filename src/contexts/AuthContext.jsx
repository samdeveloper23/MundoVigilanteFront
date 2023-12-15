import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import userService from '../services/userServices.js';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await userService(token);

                setUser(user);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (token) fetchUser();
    }, [token]);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');

        setToken(null);
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export { AuthContext, AuthProvider };
