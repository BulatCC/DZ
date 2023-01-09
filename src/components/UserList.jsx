import { Link } from 'react-router-dom';

const UserList = ({userData}) => {
    return (
        <ul className='list-unstyled'>
            {userData.map(({ id, name, secondName, birthday, portfolioLink }) => (
                <li key={id} className='mt-5'>
                    <p><strong>Имя: </strong>{name}</p>
                    <p><strong>Фамилия: </strong>{secondName}</p>
                    <p><strong>Год рождения: </strong>{birthday}</p>
                    <p><strong>Портфолио: </strong><a href="portfolioLink">{portfolioLink}</a></p>
                    <Link className='btn btn-primary ' to={`user/${id}`}>Редактировать</Link>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
