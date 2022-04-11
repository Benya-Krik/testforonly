import React from 'react'
import styled from 'styled-components'
import Flex from '../UI/Flex';
import Button from '../UI/Button';
import { useHistory } from "react-router-dom";

const StyledProfile = styled.section`
width: 100%;
height: 100%;

& h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 48.84px;
}
`

export const Profile = () => {
  return (
    <StyledProfile>
        <Flex gap='50px' direction='column' justify='center' align='center'>
            <h2>Здравствуйте, steve.jobs@example.com</h2>
            <Button width='200px' color='#000000' background='#F5F5F5' link='/'>Выйти</Button>
        </Flex>
    </StyledProfile>
  )
};

export default Profile;
