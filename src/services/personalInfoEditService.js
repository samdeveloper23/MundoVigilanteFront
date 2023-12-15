const personalInfoEditService = async (personalInfo, token) => {
    const formData = new FormData();

    formData.append('personalInfo', personalInfo);

    try {
        const res = await fetch('https://backmundovigilante.2.us-1.fl0.io/users/info', {
            method: 'PUT',
            headers: {
                Authorization: token,
            },
            body: formData,
        });

        const body = await res.json();

        if (!res.ok) {
            throw new Error(body.message);
        }

        return body.data && body.data.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default personalInfoEditService;
