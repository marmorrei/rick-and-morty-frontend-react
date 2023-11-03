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

  .list-of-characters {
    width: 85vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .character-card {
      margin: 0.8rem 0.6rem;
      width: 14rem;
      height: 16.5rem;
      background-color: #0d7c85;
      border: solid #c1da7e;
      border-radius: 0.3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-star;
      align-items: center;

      .character-image {
        height: 7.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          height: 8rem;
          border-radius: 4rem;
          position: absolute;
          top: -1.2rem;
        }
      }

      h2 {
        font-size: 1.3rem;
        margin: 0 0.5rem;
      }

      .character-species {
        font-size: 1rem;
        font-weight: 200;
      }

      .character-species::before {
        content: '⬤';
        color: #5a9f1d;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }

      p {
        font-size: 1rem;
        margin: 0 0.5rem;
      }
    }
  }
`;
