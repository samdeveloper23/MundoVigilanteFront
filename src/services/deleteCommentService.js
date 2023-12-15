const deleteCommentService = async (publicationId, commentId, token) => {
    const res = await fetch(
        `https://backmundovigilante.2.us-1.fl0.io/publications/${publicationId}/comments/${commentId}`,
        {
            method: 'delete',
            headers: {
                Authorization: token,
            },
        }
    );

    const body = await res.json();

    if (!body.ok) {
        throw new Error(body.message);
    }
};

export default deleteCommentService;
