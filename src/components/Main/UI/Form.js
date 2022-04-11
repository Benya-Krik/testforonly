import React from 'react'
import styled from 'styled-components'
import Flex from './Flex';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Error from './Error';
import { useForm } from 'react-hook-form';



const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
`



export const Form = () => {

    const { register,formState:{ errors }, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Flex gap='20px' align='start' direction="column">
                <div></div>
                <Input register={register} reset required errors={errors.firstName} label='firstName' width='640px'>Логин</Input>

                <Input register={register} reset errors={errors.secondName} label='secondName' required width='640px'>Пароль</Input>
                
                <Checkbox></Checkbox>

                <Button width='640px' kuda='/profile'>Войти</Button>
            </Flex>
        </StyledForm>
    )
};

export default Form;
