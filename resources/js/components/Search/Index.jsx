import React from 'react';
import { Filters } from './Filters';
import { useSearch } from '../../hooks/useSearch';
import { LawyerItem } from './LawyerItem';
import { NotFoundResults } from './NotFoundResults';
import { Skeleton } from './Skeleton';

export function Index() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const stateId = urlParams.has('state') ? urlParams.get('state') : 0;
  const { loading, resultados, fetchResultados } = useSearch(stateId);

  const renderContent = () => {
    if (loading) {
      return <Skeleton />;
    }

    if (resultados.length > 0) {
      return (
        <div className="flex flex-col gap-5">
          {resultados.map((lawyer) => (
            <LawyerItem key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      );
    }

    return <NotFoundResults />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-5 md:gap-10">
      <div className="md:col-span-2">
        <Filters
          loading={loading}
          fetchResultados={fetchResultados}
          defaultstate={stateId}
        />
      </div>
      <div className="md:col-span-5">{renderContent()}</div>
    </div>
  );
}
