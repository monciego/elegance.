import { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './navbar.styles.css';

const Navbar: React.FC = () => {
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
              <a href='/about'>About</a>
              <a href='/lookbook'>Lookbook</a>
            </div>
            <div className='logo'>
              <a href='/'>
                <Logo />
              </a>
            </div>
            <div className='nav-links'>
              <a href='/explore'>Explore</a>
              <a href='/contact'>Contact</a>
            </div>
            <div className='nav-icon'>
              <FiMenu />
            </div>
          </div>
          <div className='nav-bottom'>
            <ul className='nav-links'>
              <li>
                <a href='/projects' className='active'>
                  Home
                </a>
              </li>
              <li>
                <a href='/services'>Services</a>
              </li>
              <li>
                <a href='/projects'>Projects</a>
              </li>

              <li>
                <a href='/architects'>Architects</a>
              </li>
              <li>
                <a href='/news'>News</a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
