import Footer from '../../components/Footer/Footer';
import PublicationList from '../../components/PublicationList/PublicationList';
import SearchForm from '../../components/SearchForm/SearchForm';
import usePublications from '../../hooks/usePublications';

const TattooHome = () => {
    const { searchParams, setSearchParams, loading } = usePublications();

    return (
        <>
            <main className='main-layout'>
                <>
                    <SearchForm
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        loading={loading}
                    />
                </>
                <>
                    <PublicationList />
                </>
            </main>
            <Footer />
        </>
    );
};

export default TattooHome;
