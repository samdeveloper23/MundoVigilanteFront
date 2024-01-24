const deleteCommentService = async (publicationId, commentId, token) => {
    const res = await fetch(
        `http://localhost:3000/publications/${publicationId}/comments/${commentId}`,
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
