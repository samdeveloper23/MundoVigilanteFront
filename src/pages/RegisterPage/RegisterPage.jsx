import { Navigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import useAuth from '../../hooks/useAuth';

const RegisterPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <div className='intro'>
            <main className='main-layout'>
                <RegisterForm />
            </main>
        </div>
    );
};

export default RegisterPage;
