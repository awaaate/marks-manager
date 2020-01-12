import React from 'react';

import './form-control.styles.scss';

import {StyledFormControl} from  './styled.components'
const FormControl = ({label, handleChange,value, ...otherProps}) => (
    <StyledFormControl value={value}>
        <input onChange={handleChange} value={value} {...otherProps}/>
        <label>{label} </label>
    </StyledFormControl>
)

export default FormControl