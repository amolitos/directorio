import React, { useCallback, useEffect, useRef } from 'react';
import { Filters } from './Filters';
import { useSearch } from '../../hooks/useSearch';
import { LawyerItem } from './LawyerItem';
import { NotFoundResults } from './NotFoundResults';
import { Skeleton } from './Skeleton';

export function Index() {
  const scrollRef = useRef(null);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const stateId = urlParams.has('state') ? urlParams.get('state') : 0;
  const { loading, data, total, fetchNextPage, setParams } = useSearch(stateId);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage]);

  const renderContent = () => {
    if (loading) {
      return <Skeleton />;
    }

    if (total > 0) {
      return (
        <>
          <h6 className="font-medium">{total} Resultado(s)</h6>
          <div className="flex flex-col gap-5 mt-5">
            {data?.pages.map((page) =>
              page.map((lawyer) => (
                <LawyerItem key={lawyer.id} lawyer={lawyer} />
              ))
            )}
          </div>
        </>
      );
    }

    return <NotFoundResults />;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <div className="lg:h-[calc(100vh-81px)] lg:col-span-2 overflow-y-scroll">
        <Filters
          loading={loading}
          defaultState={stateId}
          setParams={setParams}
        />
      </div>
      <div
        ref={scrollRef}
        className="h-[calc(100vh-65px)] lg:h-[calc(100vh-81px)] lg:col-span-4 container p-5 lg:p-8 overflow-y-scroll"
      >
        {renderContent()}
      </div>
    </div>
  );
}
