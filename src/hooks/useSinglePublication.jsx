import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import likePublicationService from '../services/likePublicationService';
import deletePublicationService from '../services/deletePublicationService';
import { useParams } from 'react-router-dom';
import deleteCommentService from '../services/deleteCommentService';

const useSinglePublication = () => {
    const { token } = useAuth();
    const { id } = useParams();

    const [publication, setPublication] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPublication = async (id) => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://backmundovigilante.2.us-1.fl0.io/publications/${id}`,
                    {
                        headers: token ? { Authorization: token } : {},
                    }
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.message);
                }

                setPublication(body.data.publication);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPublication(id);
    }, [id, token]);

    const toogleLike = async (e, publicationId, likedByMe) => {
        try {
            setLoading(true);

            const updatedPublication = { ...publication };

            if (updatedPublication.id === publicationId) {
                const hasLikeClass = e.target.classList.contains('like');

                if (hasLikeClass) {
                    updatedPublication.likes++;
                } else {
                    updatedPublication.likes--;
                }

                updatedPublication.likedByMe = !updatedPublication.likedByMe;
            }

            setPublication(updatedPublication);

            await likePublicationService(publicationId, likedByMe, token);
        } finally {
            setLoading(false);
        }
    };

    const deletePublication = async (publicationId) => {
        try {
            setLoading(true);

            await deletePublicationService(publicationId, token);

            setPublication();
        } finally {
            setLoading(false);
        }
    };

    const deleteComment = async (publicationId, commentId) => {
        try {
            setLoading(true);

            const res = await deleteCommentService(
                publicationId,
                commentId,
                token
            );

            setPublication();
            return res;
        } finally {
            setLoading(false);
        }
    };

   
    return {
        publication,
        toogleLike,
        deletePublication,
        deleteComment,
        errorMessage,
        loading,
    };
};

export default useSinglePublication;
