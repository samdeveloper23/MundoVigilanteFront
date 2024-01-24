const sendRecoverPassService = async (email) => {
    const res = await fetch('http://localhost:3000/users/password/recover', {
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
