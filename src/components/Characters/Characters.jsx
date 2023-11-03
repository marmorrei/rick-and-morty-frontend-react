import { useCharacters } from '../../utils/hooks/useCharacters';
import { CharactersStyle } from './Styled-component';

export default function Characters() {
  const {
    characters,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useCharacters();

  const charactersList = characters?.map(character => (
    <li key={character.id}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.origin.name}</p>
    </li>
  ));

  return (
    <CharactersStyle className='characters'>
      <div className='title'>
        <h1>List of characters</h1>
        <div className='divider-line'></div>
      </div>
      {characters.length > 0 && (
        <ul className='list-of-characters'>{charactersList}</ul>
      )}
      {isLoading && <strong>Loading...</strong>}
      {isError && <p>There is an error</p>}
      {!isLoading && !isError && hasNextPage === true && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'LOADING MORE' : 'VIEW MORE'}
        </button>
      )}
      {!isLoading && !isError && hasNextPage === false && (
        <p>There are no more results.</p>
      )}
    </CharactersStyle>
  );
}
