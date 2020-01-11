import React from 'react';

const FormControl = ({label, handleChange, ...otherProps}) => (
    <div>
        <label>{label} </label>
        <input onChange={handleChange} {...otherProps}/>
    </div>
)

export default FormControl