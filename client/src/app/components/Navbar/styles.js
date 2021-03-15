import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiFoodTruck } from 'react-icons/gi';
import { Container } from '../../GlobalStyles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
  background-color: rgba(12, 12, 12, 0.911);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.3);
    color: #e38b06;
  }
`;

export const NavIcon = styled(GiFoodTruck)`
  margin-right: 1.2rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: #e38b06;
    transition: all 0.2s ease;
  }
  &:active {
    color: #e38b06;
  }
`;

export const MenuBtn = styled(MenuLink)`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
