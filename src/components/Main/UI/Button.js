import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const StyledButton = styled.button`
padding: ${props => props.padding || '20px'};
margin-top: ${props => props.marginTop || '0'};
margin-right: ${props => props.marginRight || '0'};
margin-bottom: ${props => props.marginBottom || '0'};
margin-left: ${props => props.marginLeft || '0'};
font-size: ${props => props.fontSize || '18px'};
font-weight: 700;
box-sizing: border-box;
font-style: inherit;
border: none;
background-color: ${props => props.background || '#4A67FF'};
color: ${props => props.color || '#FFFFFF'};

border-radius: 8px;
width: ${props => props.width || '320px'};

&:focus, :active, :hover {
    outline: 0;
    outline-offset: 0;
    
}
&:hover {
    cursor:pointer;
    opacity: 0.9;
}
`

export const Button = (props) => {
  return (
    // <StyledButton {...props}>{props.children}</StyledButton>
    <StyledButton {...props}><Link to={props.link}>{props.children}</Link></StyledButton>
  )
};

export default Button;
