import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: var(--primary-color-red);
  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 1rem 0;
    .navbar-links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .avatar img {
        border-radius: 2rem;
        border: 1px solid var(--accent-light);
        object-fit: cover;
      }
      .logout-btn {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        color: var(--accent-light);
        cursor: pointer;
        letter-spacing: 0.05rem;
        &:hover {
          transition: 400ms all ease-in-out;
          opacity: 0.8;
        }
      }
    }
  }
`;

export default NavbarContainer;
