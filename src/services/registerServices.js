const registerService = async (username, email, password, role) => {
    const res = await fetch('http://localhost:3000/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
            role,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.message;
};

export default registerService;
