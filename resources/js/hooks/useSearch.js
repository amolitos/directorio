import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import api from '../api';

export const useSearch = (defaultState) => {
  const [params, setParams] = useState({
    state: defaultState,
  });
  const [total, setTotal] = useState(0);

  const fetchResults = async ({ pageParam }) => {
    const { data } = await api.get(`/search?page=${pageParam}`, { params });
    setTotal(data.meta.total);
    return data.data;
  };

  const {
    data,
    isLoading: loading,
    error,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['search', params],
    queryFn: fetchResults,
    refetchInterval: 60 * 1000 * 2,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    data,
    total,
    fetchNextPage,
    setParams,
  };
};
