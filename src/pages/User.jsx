import { useState } from 'react';
import Form from '../components/Form';
import Toast from '../components/Toast';
import { KEY_NAME } from '../consts';

const User = () => {
    const [showToast, setShowToast] = useState(false);
    let formData = {};
    const getFormData = (data) => {
        formData = data;
    };

    const saveData = () => {
        const dataFromLocaStorage = localStorage.getItem(KEY_NAME);
        if (dataFromLocaStorage) {
            const userData = JSON.parse(dataFromLocaStorage);
            const userWithId = {
                ...formData,
                id: userData.length + 1
            };
            const newUser = JSON.stringify([...userData, userWithId]);
            localStorage.setItem(KEY_NAME, newUser);
        } else {
            const userWithId = {
                ...formData,
                id: 1
            };
            const userData = JSON.stringify([userWithId]);
            localStorage.setItem(KEY_NAME, userData);
        }
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const closeToast = () => {
        setShowToast(false);
    }

    return (
        <>
            <Form getFormData={getFormData} title={'Создать пользователя'} saveDataCb={saveData} />
            {showToast && <Toast closeCb={closeToast} />}
        </>

    );
};

export default User;
