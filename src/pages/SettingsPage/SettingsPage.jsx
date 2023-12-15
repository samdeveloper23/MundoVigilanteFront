import { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import EditAvata from '../../components/EditAvata/EditAvata';
import EditPassword from '../../components/EditPassword/EditPassword';
import useAuth from '../../hooks/useAuth';
import onwerUserService from '../../services/onwerUserService';
import EditPersonalInfo from '../../components/EditPersonalInfo/EditPersonalInfo';
import EditPlace from '../../components/EditPlace/EditPlace';
import Footer from '../../components/Footer/Footer';
import './SettingsPage.css';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsPage = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');
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

    return (
        <>
            <main className='main-layout'>
                <div
                    className={`settings-card ${isDarkMode ? 'dark' : 'light'}`}
                >
                    <h2>Ajustes</h2>

                    <div className='avatar-settings'>
                        <Avatar avatar={user.avatar} username={user.username} />
                    </div>
                    <div className='settings-form'>
                        <div className='edit-personalInfo'>
                            <EditPersonalInfo
                                token={token}
                                currentPersonalInfo={user.personalInfo}
                            />
                        </div>

                        <div className='edit-place'>
                            <EditPlace
                                token={token}
                                currentPlace={user.place}
                            />
                        </div>
                        <div className='edit-Avata'>
                            <EditAvata token={token} />
                        </div>

                        <div className='edit-pass'>
                            <EditPassword token={token} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default SettingsPage;
