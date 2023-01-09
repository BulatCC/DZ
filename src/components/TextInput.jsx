const TextInput = ({ name, value, type = 'text', onChange, label, error }) => {
    return (
        <div className='form-group mb-3 has-validation'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={value}
                onChange={onChange}
                id={name}
                type={type}
                name={name}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
};

export default TextInput;
