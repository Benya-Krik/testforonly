import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import Error from './Error';


const StyledInput = styled.div`
& input{
    padding: 21px 20px 20px 20px;
    width: ${props => props.width || '320px'};
    margin-top: 10px;
    font-size: 20px;
    font-style: inherit;
    box-sizing: border-box;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    background-color: #F5F5F5;
    border-radius: 8px;
    transition: all 0.3s;
    color: ${props => props.color || '#232323'};
    outline: ${props => props.outline || 'none'};


    &:focus, :active, :hover {
        outline: 0;
        outline-offset: 0;
    }

    &:hover {
        box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
    }

    &:focus {
        outline: 1px solid #4A67FF;
    }
}

& label {
    display: block;
}

& span {
    display: block;
    margin-top: 8px;
    color: #E26F6F;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
`

export const Input = ({register, label, required, children, display, width, errors, maxLength, color, outline, reset}) => {
    console.log(errors);
  return (
    <StyledInput display={display} width={width} color={color}>
        
        {/* {errors?.firstName && <Error width='640px'>regreg</Error>} */}
        <label>{children}</label>
        <input {...register(label, {required, maxLength, reset})}
        ></input>
        {errors?.type === 'required' && <span>Обязательное поле</span>}
        {/* {errors? && console.log('hello') }  */}

        
    </StyledInput> 
  )
};

export default Input;