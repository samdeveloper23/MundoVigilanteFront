import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import UserList from '../../components/UserList/UserList';
import useUsers from '../../hooks/useUsers';
import './UserListPage.css';

const UserListPage = () => {
    const { searchParams, setSearchParams, loading } = useUsers();

    return (
        <>
            <main className='main-layout'>
                <div>
                    <SearchForm
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        loading={loading}
                    />
                </div>
                <div>
                    <UserList />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default UserListPage;
