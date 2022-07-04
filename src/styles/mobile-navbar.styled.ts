import styled from 'styled-components';

interface IMobileNav {
  readonly isOpen: boolean;
}

export const StyledMobileNav = styled.header<IMobileNav>`
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: 0.25s ease;
  position: fixed;
  background: var(--clr-primary-light);
  z-index: 500;
  inset: 0;
`;

export const MobileTopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 95%;
  margin: 0 auto;
  padding: 1.1rem 0;

  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;

  & > * {
    font-size: 2rem;
    font-family: var(--ff-serif);
    text-transform: uppercase;
    font-weight: 600;
  }
`;
