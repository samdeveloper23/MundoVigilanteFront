import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PublicationBody from '../../Publication/PublicationBody/PublicationBody';

const UserProfilePublications = ({ publications }) => {
    return (
        <div>
            <ul>
                {publications.length > 0 ? (
                    publications.map((publication) => {
                        return (
                            <div
                                className='userPublication'
                                key={publication.id}
                            >
                                <Link
                                    to={`/singlepublication/${publication.id}`}
                                >
                                    <PublicationBody
                                        key={publication.id}
                                        photoName={publication.photoName}
                                        videoName={publication.videoName}
                                    />
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <li>No hay publicaciones</li>
                )}
            </ul>
        </div>
    );
};

UserProfilePublications.propTypes = {
    publications: PropTypes.array,
};

export default UserProfilePublications;
