import React from 'react';
import { AiOutlineClose as CloseMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  MobileNavLinks,
  MobileTopHeader,
  StyledMobileNav,
} from '../styles/mobile-navbar.styled';
import Logo from './Logo';

export interface IMobileNavbarProps {
  isOpen: boolean;
  handleToggle: () => void;
}

export const MobileNavbar: React.FunctionComponent<IMobileNavbarProps> = ({
  isOpen,
  handleToggle,
}) => {
  return (
    <StyledMobileNav isOpen={isOpen}>
      <MobileTopHeader>
        <Link onClick={handleToggle} to='/'>
          <Logo />
        </Link>
        <CloseMenu onClick={handleToggle} />
      </MobileTopHeader>
      <MobileNavLinks>
        <Link onClick={handleToggle} to='/'>
          Home
        </Link>
        <Link onClick={handleToggle} to='/services'>
          Services
        </Link>
        <Link onClick={handleToggle} to='/projects'>
          Projects
        </Link>
        <Link onClick={handleToggle} to='/architects'>
          Architects
        </Link>
        <Link onClick={handleToggle} to='/news'>
          News
        </Link>
        <Link onClick={handleToggle} to='/about'>
          About
        </Link>
        <Link onClick={handleToggle} to='/lookbook'>
          Lookbook
        </Link>
        <Link onClick={handleToggle} to='/explore'>
          Explore
        </Link>
        <Link onClick={handleToggle} to='/contact'>
          Contact
        </Link>
      </MobileNavLinks>
    </StyledMobileNav>
  );
};
