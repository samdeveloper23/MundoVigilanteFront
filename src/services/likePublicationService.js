const likePublicationService = async (publicationId, likedByMe, token) => {
    const method = likedByMe ? 'delete' : 'post';

    const res = await fetch(
        `http://localhost:3000/publications/${publicationId}/likes`,
        {
            method,
            headers: {
                Authorization: token,
            },
        }
    );

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default likePublicationService;
