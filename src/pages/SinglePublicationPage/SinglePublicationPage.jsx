import Publication from '../../components/Publication/Publication';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useSinglePublication from '../../hooks/useSinglePublication';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/Comment/CommentForm/CommentForm';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';


import { useTheme } from '../../contexts/ThemeContext';

const SinglePublicationPage = () => {
    const { token } = useAuth();
    const {
        publication,
        toogleLike,
        deletePublication,
        deleteComment,
        errorMessage,
        loading,
        setPublication,
    } = useSinglePublication();
    const { isDarkMode } = useTheme();

    const [userComment, setUserComment] = useState([]);

    const handleAddComment = (newComment) => {
        setUserComment([...userComment, newComment]);
    };

    return (
        <>
            <main className='main-layout'>
                {loading && <Loader />}
                {errorMessage && <ErrorMessage message={errorMessage} />}
                {publication && (
                    <Publication
                        key={publication.id}
                        publication={publication}
                        toogleLike={toogleLike}
                        deletePublication={deletePublication}
                        loading={loading}
                    />
                )}
                <div className={`comentarios ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className='container-comment'>
                        {Array.isArray(publication?.comments) &&
                        publication.comments.length > 0 ? (
                            <Comment
                                comments={publication.comments
                                    .slice()
                                    .reverse()}
                                deleteComment={deleteComment}
                                publicationId={publication.id}
                                publicationOwner={publication.owner}
                            />
                        ) : (
                            <p className={`pub-p ${isDarkMode ? 'dark' : 'light'}`}>
                                ¿No hay comentarios? Anímate, haz el primero
                            </p>
                        )}
                    </div>
                    <div className='ajuste'>
                        {publication && publication.id && token && (
                            <CommentForm
                                id={publication.id}
                                onAddComment={handleAddComment}
                                setPublication={setPublication}
                            />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SinglePublicationPage;
