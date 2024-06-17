import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubscriptions } from '../../../store/subscriptionsSlicer';

const SUBSCRIPTIONS_PER_PAGE = 10;

export function Index({ courseId }) {
  const { subscriptions } = useSelector((state) => state.subscriptions);
  const [subscriptionSearch, setSubscriptionSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);

  const dispatch = useDispatch();

  const getVerifiedClass = (verified) =>
    verified ? 'text-teal-500' : 'text-red-400';

  const handleSearchChange = (event) => {
    if (subscriptionSearch.length === 0) {
      setPreviousPage(currentPage);
    }

    const search = event.target.value;
    setSubscriptionSearch(search);

    if (search.length === 0 && previousPage !== 0) {
      setCurrentPage(previousPage);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredSubscriptions = subscriptions.filter((subscription) =>
    [
      subscription.user,
      subscription.email,
      subscription.professional_id,
      subscription.plan,
    ].some((field) =>
      field.toLowerCase().includes(subscriptionSearch.toLowerCase())
    )
  );

  const pageCount = filteredSubscriptions
    ? Math.ceil(filteredSubscriptions.length / SUBSCRIPTIONS_PER_PAGE)
    : 0;

  /* eslint-disable prettier/prettier */
  const subscriptionsForPage = filteredSubscriptions
    ? filteredSubscriptions.slice(
      currentPage * SUBSCRIPTIONS_PER_PAGE,
      (currentPage + 1) * SUBSCRIPTIONS_PER_PAGE
    )
    : [];
  /* eslint-enable prettier/prettier */

  useEffect(() => {
    dispatch(fetchSubscriptions(courseId));
  }, [dispatch, courseId]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="font-bold text-2xl justify-between">Usuarios</h2>
      </div>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Buscar"
        className="form-input mt-5"
      />
      {filteredSubscriptions.length > 0 ? (
        <div className="table-responsive shadow-none mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Cédula</th>
                <th>Plan</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {subscriptionsForPage.map((subscription) => (
                <tr key={subscription.id}>
                  <td className="font-semibold whitespace-nowrap">
                    {subscription.user}
                  </td>
                  <td>{subscription.email}</td>
                  <td>
                    <span className={getVerifiedClass(subscription.verified)}>
                      {subscription.professional_id}
                    </span>
                  </td>
                  <td>{subscription.plan}</td>
                  <td>{subscription.subscribed_at}</td>
                  <td className="flex gap-2">
                    <button type="button">
                      <i className="fa-solid fa-user-check" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {subscriptions && subscriptions.length > SUBSCRIPTIONS_PER_PAGE && (
            <ReactPaginate
              previousLabel={
                <span className="page-btn rounded-s-md">
                  <i className="fa-solid fa-chevron-left" />
                </span>
              }
              nextLabel={
                <span className="page-btn rounded-e-md">
                  <i className="fa-solid fa-chevron-right" />
                </span>
              }
              forcePage={currentPage}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="pagination mt-5"
              pageClassName="page"
              pageLinkClassName="page-link"
              activeClassName="active-page"
              breakLabel="..."
              breakClassName="break-me"
            />
          )}
        </div>
      ) : (
        <h5 className="font-semibold mt-5 ml-5">
          No se encontraron resultados
        </h5>
      )}
    </div>
  );
}
