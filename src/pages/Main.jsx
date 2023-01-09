import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { KEY_NAME } from '../consts';

const Main = () => {
    const dataFromLocaStorage = localStorage.getItem(KEY_NAME);
    const userData = dataFromLocaStorage ? JSON.parse(dataFromLocaStorage) : false;

    return (
        <>
            <h1>Список пользователей</h1>
            <Link className='btn btn-primary mt-4' to={'user'}>Создать пользователя</Link>
            {userData ?
                <UserList userData={userData} /> :
                <p className='mt-3 bold'><strong>Список пользователей пуст</strong></p>}
        </>
    );
};

export default Main;
