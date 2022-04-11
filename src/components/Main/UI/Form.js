import React from 'react'
import styled from 'styled-components'
import Flex from './Flex';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Error from './Error';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
`



export const Form = (props) => {

    const navigate = useNavigate();
    const { register,formState:{ errors }, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        if (data.firstName === 'user' && data.secondName === 'pass') {
           navigate('/profile')
        }
    }

    return (

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Flex gap='20px' align='start' direction="column">
                <div></div>
                <Input register={register} reset required errors={errors.firstName} label='firstName' width='640px'>Логин</Input>

                <Input register={register} reset errors={errors.secondName} label='secondName' required width='640px'>Пароль</Input>
                
                <Checkbox></Checkbox>

                <Button width='640px' link='/profile'>Войти</Button>
            </Flex>
        </StyledForm>
    )
};

export default Form;
