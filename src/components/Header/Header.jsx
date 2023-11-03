import { HeaderStyled } from './Styled-components';

export default function Header() {
  return (
    <HeaderStyled>
      <img
        className='logo'
        src='/assets/images/rick-and-morty-logo.svg'
        alt='r&m-logo'
      />
      <div className='search-bar'>
        <input type='search' placeholder='Search a character' />
        <img
          className='icon'
          src='/assets/images/search-alt-svgrepo-com.svg'
          alt='search'
        />
      </div>
    </HeaderStyled>
  );
}
