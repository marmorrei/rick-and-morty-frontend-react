import { FooterStyled } from './Styled-components';
export default function Footer() {
  return (
    <FooterStyled>
      <p>
        <small>
          Demo website developed by{' '}
          <a
            href='https://www.linkedin.com/in/maria-morales-reina/'
            target='_blank'
          >
            Maria
          </a>
        </small>
      </p>
      <div className='sources'>
        <h3>Sources</h3>
        <div className='links'>
          <a href='https://rickandmortyapi.com/' target='_blank'>
            Rick and Morty API
          </a>
          <a
            href='https://www.svgrepo.com/svg/532554/search-alt'
            target='_blank'
          >
            SVG Repo
          </a>
          <a href='https://fonts.google.com/specimen/Poppins' target='_blank'>
            Google Fonts
          </a>
          <a
            href='https://commons.wikimedia.org/wiki/File:Rick_and_Morty.svg'
            target='_blank'
          >
            Commons Wikimedia
          </a>
          <a
            href='https://iconos8.es/icon/nyfrvGNZcAzE/rick-sanchez'
            target='_blank'
          >
            Iconos 8
          </a>
        </div>
      </div>
    </FooterStyled>
  );
}
