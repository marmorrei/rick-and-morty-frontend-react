import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin: 3rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a:link,
  a:visited,
  a:active {
    text-decoration: none;
  }

  a:hover {
    font-weight: 600;
  }

  .sources {
    margin-top: 0.5rem;
    h3 {
      font-weight: 600;
      font-size: 1rem;
      margin: 0.1rem;
    }

    .links {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0.1rem;

      a {
        margin: 0.1rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
`;
