const PublicationCreateService = async (
    description,
    photo,
    video,
    title,
    place,
    type,
    token
) => {
    const formData = new FormData();

    formData.append('photo', photo);
    formData.append('video', video);
    formData.append('description', description);
    formData.append('title', title);
    formData.append('place', place);
    formData.append('type', type);

    const res = await fetch('https://backmundovigilante.2.us-1.fl0.io/publications', {
        method: 'post',
        headers: {
            Authorization: token,
        },
        body: formData,
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default PublicationCreateService;
