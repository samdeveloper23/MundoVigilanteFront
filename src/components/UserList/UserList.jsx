import useUsers from '../../hooks/useUsers';
import UserListItem from '../UserListItem/UserListItem';

const UserList = () => {
    const { users } = useUsers();

    return (
        <div className='userList'>
            <ul>
                {users.length > 0 ? (
                    users.map((user) => {
                        return <UserListItem key={user.id} user={user} />;
                    })
                ) : (
                    <div className='first-user'>
                        <li>
                            Aún no hay usuarios. ¡Regístrate y sé el primero!
                        </li>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default UserList;
