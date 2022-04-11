import React from 'react'
import styled from 'styled-components'
import Flex from '../UI/Flex';
import Form from '../UI/Form';


const StyledLogin = styled.section`
width: 100%;
height: 100%;
`


export const Login = () => {
  return (
    <StyledLogin>
      <Flex align='center' justify="center">
          
        <Form>

        </Form>
          
      </Flex>
    </StyledLogin>
  )
};

export default Login;
