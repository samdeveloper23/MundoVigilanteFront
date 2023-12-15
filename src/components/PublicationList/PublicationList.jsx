import { Link } from 'react-router-dom';
import usePublications from '../../hooks/usePublications';
import Comment from '../Comment/Comment';

import Publication from '../Publication/Publication';
import './PublicationList.css';
import Loader from '../Loader/Loader';
import { useTheme } from '../../contexts/ThemeContext';

const PublicationList = () => {
    const { publications, toogleLike, deletePublication, loading } =
        usePublications();
    const { isDarkMode } = useTheme();

    return (
        <>
            {loading && <Loader />}

            <ul className='aa'>
                {publications.length > 0 ? (
                    publications.map((publication) => (
                        <li key={publication.id}>
                            <Publication
                                publication={publication}
                                toogleLike={toogleLike}
                                deletePublication={deletePublication}
                                loading={loading}
                            />
                            <div
                                className={`classP ${
                                    isDarkMode ? 'dark' : 'light'
                                }`}
                            >
                                <Link
                                    to={`/singlepublication/${publication.id}`}
                                >
                                    {Array.isArray(publication?.comments) &&
                                    publication.comments.length > 0 ? (
                                        <Comment
                                            comments={publication.comments
                                                .slice(0, 2)
                                                .reverse()}
                                        />
                                    ) : (
                                        <p className='pub-p'></p>
                                    )}
                                </Link>
                            </div>
                        </li>
                    ))
                ) : (
                    <div className='first-user'>
                        <li>
                            Aún no hay publicaciones. ¡Animate y haz la primera!
                        </li>
                    </div>
                )}
            </ul>
        </>
    );
};

export default PublicationList;
