import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

import MainMenu from '../main-menu/MainMenu';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 60px;

  font-size: 18px;
  line-height: 25px;
`

const Logo = styled(Link)`
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const Head = () => {
  return (
    <Header>
      <Logo to='/' fontWeight={800}>Logo</Logo>
      <MainMenu/>
    </Header>
  )
};

export default Head;
