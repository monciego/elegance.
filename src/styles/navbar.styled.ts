import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 13vh;
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`;

export const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const NavBottom = styled.div`
  display: none;
  position: relative;

  div {
    gap: 3.5rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.85rem;
      left: 0;
      right: 0;
      height: 0.075rem;
      background: var(--clr-primary-dark);
    }
  }
`;

export const NavIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;
