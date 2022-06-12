import { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import {
  NavBottom,
  NavIcon,
  NavLinks,
  NavTop,
  StyledNavbar,
} from '../styles/navbar.styled';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <Fragment>
      <IconContext.Provider
        value={{
          style: { cursor: 'pointer', height: '1.75rem', width: '1.75rem' },
        }}
      >
        <StyledNavbar>
          <NavTop>
            <NavLinks>
              <NavLink
                className={({ isActive }) => (isActive ? 'isActive' : '')}
                to='/about'
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'isActive' : '')}
                to='/lookbook'
              >
                Lookbook
              </NavLink>
            </NavLinks>
            <div className='logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <NavLinks>
              <NavLink
                className={({ isActive }) => (isActive ? 'isActive' : '')}
                to='/explore'
              >
                Explore
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'isActive' : '')}
                to='/contact'
              >
                Contact
              </NavLink>
            </NavLinks>
            <NavIcon>
              <FiMenu />
            </NavIcon>
          </NavTop>
          <NavBottom>
            <NavLinks>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/services'
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/projects'
              >
                Projects
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/architects'
              >
                Architects
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/news'
              >
                News
              </NavLink>
            </NavLinks>
          </NavBottom>
        </StyledNavbar>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
