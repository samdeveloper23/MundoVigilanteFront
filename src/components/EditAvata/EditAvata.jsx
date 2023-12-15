import { useState } from 'react';
import avatarEditService from '../../services/avatarEditService';
import PropTypes from 'prop-types';

const EditAvata = ({ token }) => {
    const [avatar, setAvatar] = useState(null);

    const handleSubmitAvatar = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('avatar', avatar);

        await avatarEditService(formData, token);

        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleSubmitAvatar}>
                <label htmlFor='avatar'>Cambiar Avatar:</label>
                <input
                    type='file'
                    name='avatar'
                    id='avatar'
                    onChange={(e) => setAvatar(e.target.files[0])}
                    required
                />
                <button type='submit'>Guardar</button>
            </form>
        </div>
    );
};

EditAvata.propTypes = {
    token: PropTypes.any,
};

export default EditAvata;
