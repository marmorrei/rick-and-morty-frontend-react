import { useCharacters } from "../../utils/hooks/useCharacters";

export default function Characters() {
  const {
    characters,
    isError,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useCharacters();

  const charactersList = characters?.map((character) => (
    <li key={character.name}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <p>{character.origin.name}</p>
    </li>
  ));

  return (
    <main>
      <h1>List of characters</h1>
      {characters.length > 0 && <ul>{charactersList}</ul>}
      {isLoading && <strong>Loading...</strong>}
      {isError && <p>There is an error</p>}
      {!isLoading && !isError && hasNextPage === true && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "LOADING MORE" : "VIEW MORE"}
        </button>
      )}
      {!isLoading && !isError && hasNextPage === false && (
        <p>There are no more results.</p>
      )}
    </main>
  );
}
