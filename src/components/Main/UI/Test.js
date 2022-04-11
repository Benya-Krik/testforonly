import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Flex from './Flex';

const StyledTest = styled.form`

`

export const Test = () => {
  return (
    <StyledTest>
        <Flex align='center' justify="center">
            <input></input>
            <input></input>
            <input type='submit'></input>
        </Flex>
    </StyledTest>
  )
};

export default Test;
{/* <StyledForm onSubmit={handleSubmit(onSubmit)}>
<Flex gap='20px' align='start' direction="column">
    <div></div>
    <Input register={register} reset required errors={errors.firstName} label='firstName' width='640px'>Логин</Input>

    <Input register={register} reset errors={errors.secondName} label='secondName' required width='640px'>Пароль</Input>
    
    <Checkbox></Checkbox>

    <Button width='640px' kuda='/profile'>Войти</Button>
</Flex>
</StyledForm> */}