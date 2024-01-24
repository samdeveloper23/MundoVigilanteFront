const deletePublicationService = async (publicationId, token) => {
    const res = await fetch(
        `http://localhost:3000/publications/${publicationId}`,
        {
            method: 'delete',
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

export default deletePublicationService;
