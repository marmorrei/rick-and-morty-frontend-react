import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/fetchCharacters';

export const useCharacters = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  console.log(data);
  return {
    isLoading,
    isError,
    characters: data?.pages?.flatMap(page => page.characters) ?? [],
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
