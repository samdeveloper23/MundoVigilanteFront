const commentCreateService = async (text, id, token) => {
    const formData = new FormData();

    formData.append('text', text);

    const res = await fetch(
        `https://backmundovigilante.2.us-1.fl0.io/publications/${id}/comments`,
        {
            method: 'post',
            headers: {
                Authorization: token,
            },
            body: formData,
        }
    );

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default commentCreateService;
