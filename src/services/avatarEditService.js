const avatarEditService = async (avatar, token) => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    const response = await fetch('https://backmundovigilante.2.us-1.fl0.io/users/avatar', {
        method: 'put',
        headers: {
            Authorization: token,
        },
        body: avatar,
    });

    return response.data;
};

export default avatarEditService;
