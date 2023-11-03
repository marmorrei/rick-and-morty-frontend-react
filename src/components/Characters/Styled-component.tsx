import styled from 'styled-components';

export const CharactersStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: 85vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .divider-line {
      flex: 1;
      border-top: 0.2rem solid #c1da7e;
      margin: 0.6rem 0 0 1rem;
    }
  }

  @media screen and (max-width: 360px) {
    .divider-line {
      display: none;
    }
  }
`;
