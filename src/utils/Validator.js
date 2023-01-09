export const validator = (data, config, errors) => {
    let validateErrors = {
        ...errors
    };
    
    const validate = (validateType, validationData, rule) => {
        const currentYear = new Date().getFullYear();
        switch (validateType) {
            case 'isRequired':
                if (validationData.trim() === '') {
                    return rule.message;
                }
                break;
            case 'isLink':
                const urlRegexp = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

                if (!urlRegexp.test(validationData)) {
                    return rule.message;
                }
                break;
            case 'isYear':
                if (currentYear < validationData) {
                    return rule.message;
                }
                break;
            case 'minLengthYear':
                if (validationData.length < 4) {
                    return rule.message;
                }
                break;
            case 'tooOld':
                if (currentYear - 100 > validationData) {
                    return rule.message;
                }
                break;
            default:
                break;
        }
    };

    for (const fieldName in data) {
        const validationRules = config[fieldName];
        for (const validateType in validationRules) {
            const error = validate(validateType, data[fieldName], config[fieldName][validateType]);
            validateErrors[fieldName] = error;

            if (error) {
                break;
            }
        }
    }

    return validateErrors;
};

export const validatorConfig = {
    name: {
        isRequired: {
            message: 'Имя обязательно для заполнения'
        }
    },
    secondName: {
        isRequired: {
            message: 'Фамилия обязательна для заполнения'
        }
    },
    birthday: {
        isRequired: {
            message: 'Год рождения обязательнен для заполнения'
        },
        isYear: {
            message: 'Год не может быть из будущего'
        },
        minLengthYear: {
            message: 'Дата не корректна'
        },
        tooOld: {
            message: 'Ты вампир?'
        }
    },
    portfolioLink: {
        isRequired: {
            message: 'Ссылка на портфолио обязательна для заполнения'
        },
        isLink: {
            message: 'Введенное значение должно быть ссылкой'
        }
    }
};
