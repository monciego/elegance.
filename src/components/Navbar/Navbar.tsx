import { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
              <Link to='/about'>About</Link>
              <Link to='/lookbook'>Lookbook</Link>
            </div>
            <div className='logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <div className='nav-links'>
              <Link to='/explore'>Explore</Link>
              <Link to='/contact'>Contact</Link>
            </div>
            <div className='nav-icon'>
              <FiMenu />
            </div>
          </div>
          <div className='nav-bottom'>
            <ul className='nav-links'>
              <li>
                <Link className='active' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>

              <li>
                <Link to='/architects'>Architects</Link>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
