const avatarEditService = async (avatar, token) => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    const response = await fetch('http://localhost:3000/users/avatar', {
        method: 'put',
        headers: {
            Authorization: token,
        },
        body: avatar,
    });

    return response.data;
};

export default avatarEditService;
