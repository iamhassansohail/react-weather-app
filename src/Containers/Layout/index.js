// Library
import React, {Component} from 'react';
import styled from 'styled-components';

const SSDiv = styled.div`
  height: auto;
  width: 100%;
  background: url("Assets/Images/bg.jpg") no-repeat;
  float: left;
`;


class Layout extends Component {
    render() {
        return (
            <SSDiv>
                {this.props.children}
            </SSDiv>
        )
    }
}

export default Layout