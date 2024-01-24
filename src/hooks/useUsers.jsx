import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAuth from './useAuth';

const useUsers = () => {
    const { token } = useAuth();

    const [users, setUsers] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:3000/users?${searchParams.toString()}`,
                    {
                        headers: token ? { Authorization: token } : {},
                    }
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.message);
                }

                setUsers(body.data.users);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [searchParams, token]);

    return {
        users,
        searchParams,
        setSearchParams,
        errorMessage,
        loading,
    };
};

export default useUsers;
