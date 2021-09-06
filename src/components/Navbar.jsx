import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/menu.svg';
// import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;
  height: 60px;

  z-index: 10;
  position: fixed;
  width: 100%;

  background: lightgray;
`;

const NavLink = css`
  display: flex;
  align-items: center;

  padding: 0 1rem;
  height: 100%;

  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}

  color: #fff;
  font-style: italic;
`;

// const MenuBars = styled(FaBars)`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    height: 40px;
    width: 40px;

    cursor: pointer;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);

    background-image: url(${Bars});
    background-size: contain;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">REACT LAND</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map(({ title, link }) => (
          <NavMenuLink key={title} to={link}>
            {title}
          </NavMenuLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
