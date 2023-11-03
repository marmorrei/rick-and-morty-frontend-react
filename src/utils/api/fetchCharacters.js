export const fetchCharacters = async ({ pageParam = 1 }) => {
  return await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`,
  )
    .then(async res => {
      if (!res.ok) throw new Error('Error in the petition');
      return await res.json();
    })
    .then(res => {
      const currentPage = pageParam;
      const nextCursor = currentPage > 42 ? currentPage : currentPage + 1;
      console.log(res.results);
      return {
        characters: res.results,
        nextCursor,
      };
    });
};
