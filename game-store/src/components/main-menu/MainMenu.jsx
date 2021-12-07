import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const MainMenuNav = styled.nav``

const MainMenulist = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const MainMenuButton = styled.li`
  margin-left: 32px;
  margin-right: 32px;
  padding: 0;
  font: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const MainMenu = () => {
  const menuItems = ['About', 'Catalog', 'News', 'Login'];

  return (
    <>
      <MainMenuNav>
        <MainMenulist>
          {menuItems.map((item) => (
            <MainMenuButton key={item}>
              <MenuLink to={item}>{item}</MenuLink>
            </MainMenuButton>
          ))}
        </MainMenulist>
      </MainMenuNav>
    </>
  )
};

export default MainMenu;
