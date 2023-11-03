import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  .logo {
    width: 40%;
    margin-bottom: 1rem;
  }

  .search-bar {
    position: relative;
  }

  input {
    width: 85vw;
    background-color: #407772;
    border: none;
    border-radius: 1.5rem;
    padding: 0.8rem 1rem;
    text-align: start;
  }

  .icon {
    width: 1rem;
    position: absolute;
    right: 1rem;
    top: 0.9rem;
  }

  input::placeholder {
    color: #accfcb;
    font-weight: 500;
    text-align: start;
  }

  @media screen and (max-width: 810px) {
    .logo {
      width: 60%;
    }
  }
`;
