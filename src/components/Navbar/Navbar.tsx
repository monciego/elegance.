import { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './navbar.styles.css';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <Fragment>
      <IconContext.Provider
        value={{
          style: { cursor: 'pointer', height: '1.75rem', width: '1.75rem' },
        }}
      >
        <nav className='navbar'>
          <div className='nav-top'>
            <div className='nav-links'>
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
            </div>
            <div className='logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <div className='nav-links'>
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
            </div>
            <div className='nav-icon'>
              <FiMenu />
            </div>
          </div>
          <div className='nav-bottom'>
            <ul className='nav-links'>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/services'
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/projects'
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/architects'
                >
                  Architects
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to='/news'
                >
                  News
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
