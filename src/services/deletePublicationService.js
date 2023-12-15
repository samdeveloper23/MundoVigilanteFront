const deletePublicationService = async (publicationId, token) => {
    const res = await fetch(
        `https://backmundovigilante.2.us-1.fl0.io/publications/${publicationId}`,
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
