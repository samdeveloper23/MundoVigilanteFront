const validateCodeService = async (regCode, setActive) => {
    try {
        const res = await fetch(
            `https://backmundovigilante.2.us-1.fl0.io/users/validate/${regCode}`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const body = await res.json();

        if (!res.ok) {
            throw new Error(body.message);
        }

        setActive(true); // Actualiza el estado active a true

        return body.data.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default validateCodeService;
