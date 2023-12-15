import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useSingleUser = (userId) => {
    const { token } = useAuth();

    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://backmundovigilante.2.us-1.fl0.io/users/${userId}`,
                    {
                        headers: token ? { Authorization: token } : {},
                    }
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.message);
                }

                setUser(body.data.user);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [userId, token]);

    return {
        user,
        errorMessage,
        loading,
    };
};

export default useSingleUser;
