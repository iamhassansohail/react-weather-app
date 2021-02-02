// Library
import React from 'react';
import styled from 'styled-components';

const SSInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid palevioletred;
  outline: none;
  font-size: 18px;
  background: transparent;
`;


const Input = (props) => {
    return (
        <>
            <SSInput onChange={(e) => props.changer(e.target.value)}/>
        </>
    )
}

export default Input;