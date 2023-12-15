import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ValidatedForm from '../../components/ValidatedForm/ValidateForm';

const ValidatedPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <div className='intro'>
            <main className='main-layout'>
                <ValidatedForm />
            </main>
        </div>
    );
};

export default ValidatedPage;
