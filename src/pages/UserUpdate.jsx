import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Form from '../components/Form';
import Toast from '../components/Toast';
import { KEY_NAME } from '../consts';

const UserUpdate = () => {
    const { userId } = useParams();
    const [showToast, setShowToast] = useState(false);
    let initialFormData = null;
    let formData = null;
    let userIndex = null;
    let userData = null;
    const dataFromLocaStorage = localStorage.getItem(KEY_NAME);
    if (dataFromLocaStorage) {
        userData = JSON.parse(dataFromLocaStorage);
        userIndex = userData.findIndex(({ id }) => id === +userId);
        initialFormData = userData[userIndex];
    };

    const getFormData = (data) => {
        formData = data;
        userData[userIndex] = formData;
    };

    const updateUser = () => {
        const updatedUser = JSON.stringify(userData);
        localStorage.setItem(KEY_NAME, updatedUser);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const closeToast = () => {
        setShowToast(false);
    };

    if (!initialFormData) {
        return (
            <>
                <h2>Страница не найдена</h2>
                <Link className='btn btn-primary mt-4' to={'/'}>На главную</Link>
            </>
        )
    }

    return (
        <>
            <Form getFormData={getFormData} title={'Редактировать'} buttonTitle={'Обновить'} saveDataCb={updateUser} state={initialFormData} />
            {showToast && <Toast closeCb={closeToast} />}
        </>
    );
};

export default UserUpdate;
