import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import { validator } from '../utils/Validator';
import { validatorConfig } from '../utils/Validator';

const Form = ({ getFormData, title, buttonTitle = 'Создать', saveDataCb, state }) => {
    const initialState = state ? state : {
        name: '',
        secondName: '',
        birthday: '',
        portfolioLink: ''
    }
    const [formData, setFormData] = useState(initialState);
    const [currentInput, setCurrentInput] = useState({});
    const [errors, setErrors] = useState({});
    const [disableButton, setDisableButton] = useState(true);

    getFormData(formData);

    const checkArrayValues = (arr) => {
        return Object.values(arr).reduce((acc, item) => {
            item && acc.push(item);
            return acc;
        }, []);
    };

    const acivateButton = () => {
        const filledInputs = checkArrayValues(formData).length;
        const inputErrors = checkArrayValues(errors).length;
        const allInputs = Object.values(formData).length;

        if (filledInputs === allInputs && !inputErrors) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    };

    useEffect(() => {
        validate();
    }, [currentInput]);

    useEffect(() => {
        acivateButton();
    }, [errors]);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        saveDataCb();
    };

    const handleChange = (evt) => {
        const { value, name } = evt.target;
        setCurrentInput({
            [name]: value
        });

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const formErrors = validator(currentInput, validatorConfig, errors);
        setErrors(formErrors);
    };

    return (
        <div className='container-sm mt-5'>
            <div className='row'>
                <div className='col col-md-6 offset-md-3'>
                    <h1>{title}</h1>
                    <form className='border p-4 rounded'>
                        <TextInput name='name' value={formData.name} label='Имя' error={errors.name} onChange={handleChange} />
                        <TextInput name='secondName' value={formData.secondName} label='Фамилия' error={errors.secondName} onChange={handleChange} />
                        <TextInput name='birthday' value={formData.birthday} type={'number'} label='Год рождения' error={errors.birthday} onChange={handleChange} />
                        <TextInput name='portfolioLink' value={formData.portfolioLink} type={'url'} label='Портфолио' error={errors.portfolioLink} onChange={handleChange} />
                        <div className="d-flex">
                            <Link className='btn btn-secondary me-3' to={'/'}>Назад</Link>
                            <button
                                className='btn btn-primary'
                                disabled={disableButton}
                                type='button'
                                onClick={handleSubmit}
                            >
                                {buttonTitle}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};
export default Form;
