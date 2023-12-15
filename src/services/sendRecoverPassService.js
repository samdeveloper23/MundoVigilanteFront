const sendRecoverPassService = async (email) => {
    const res = await fetch('https://backmundovigilante.2.us-1.fl0.io/users/password/recover', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default sendRecoverPassService;
