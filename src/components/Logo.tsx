import React from 'react';
import { ReactComponent as LogoImage } from '../assets/Logo.svg';

export interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = () => {
  return <LogoImage />;
};

export default Logo;
