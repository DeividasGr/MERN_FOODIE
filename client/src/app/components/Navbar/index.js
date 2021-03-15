import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../constants/actionTypes';
import decode from 'jwt-decode';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  MenuItem,
  MenuLink,
  MenuBtn,
} from './styles';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);
  const history = useHistory();

  const logout = () => {
    dispatch({ type: type.LOGOUT });

    history.push('/login');
  };

  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          Foodie
        </NavLogo>
        <div>
          <NavMenu>
            {user?.token ? (
              <>
                <MenuItem>
                  <MenuLink to="/">Home</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/create-post">Create</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuBtn to="#" onClick={logout}>
                    Logout
                  </MenuBtn>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <MenuLink to="/login">Login</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/register">Register</MenuLink>
                </MenuItem>
              </>
            )}
          </NavMenu>
        </div>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
