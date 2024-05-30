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
        <>
          <h6 className="font-medium">{resultados.length} Resultado(s)</h6>
          <div className="flex flex-col gap-5 mt-5">
            {resultados.map((lawyer) => (
              <LawyerItem key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </>
      );
    }

    return <NotFoundResults />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <div className="lg:h-[calc(100vh-81px)] lg:col-span-2 overflow-y-scroll">
        <Filters
          loading={loading}
          fetchResultados={fetchResultados}
          defaultstate={stateId}
        />
      </div>
      <div className="lg:h-[calc(100vh-81px)] lg:col-span-4 container p-5 lg:p-8 overflow-y-scroll">
        {renderContent()}
      </div>
    </div>
  );
}
