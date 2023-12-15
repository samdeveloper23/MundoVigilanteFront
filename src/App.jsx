import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './components/Header/Header';
import Root from './pages/Root/Root';
import ValidatedPage from './pages/ValidatePage/ValidatePage';
import LoginPage from './pages/LoginPage/LoginPage';
import PublicationCreatePage from './pages/PublicationCreatePage/PublicationCreatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SinglePublicationPage from './pages/SinglePublicationPage/SinglePublicationPage';
import UserListPage from './pages/UsersListPage/UserListPage';
import UserPage from './pages/UserPage/UserPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import InfoPage from './pages/InfoPage/InfoPage';
import RecoverPassPage from './pages/RecoverPassPage/RecoverPassPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
    return (
        <>
            <Header />
            <Routes>

                <Route path='/' element={<InfoPage />} />

                <Route path='/home' element={<Root />} />

                <Route
                    path='/singlepublication/:id'
                    element={<SinglePublicationPage />}
                />

                <Route path='/users' element={<UserListPage />} />

                <Route path='/users/:userId' element={<UserPage />} />

                <Route path='/register' element={<RegisterPage />} />

                <Route path='/activated' element={<ValidatedPage />} />

                <Route path='/login' element={<LoginPage />} />

                <Route path='/recover' element={<RecoverPassPage />} />

                <Route path='/login-success' element={<LoginPage />} />

                <Route path='/message' element={<PublicationCreatePage />} />

                <Route path='/settings' element={<SettingsPage />} />

                <Route path='/contact' element={<ContactPage />} />
                
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
