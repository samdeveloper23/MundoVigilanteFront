import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { token, login } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <div className='intro'>
            <main className='main-layout'>
                <LoginForm login={login} />
            </main>
        </div>
    );
};

export default LoginPage;
