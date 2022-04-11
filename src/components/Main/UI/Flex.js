import React from 'react'
import styled from 'styled-components'


const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'stretch'};
align-items: ${props => props.align || 'stretch'};
flex-wrap: ${props => props.wrap || 'no-wrap'};
padding: ${props => props.padding || '0'};
margin: ${props => props.margin || '0'};
grid-gap: ${props => props.gap || '0'};
width:100%;
height:100%;
`

const Flex = (props) => {
  return <StyledFlex {...props}></StyledFlex>
};

export default Flex;