const singlePublicationService = async (publicationId) => {
    const res = await fetch(
        `http://localhost:3000/publications/${publicationId}`
    );
    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.publication;
};

export default singlePublicationService;
