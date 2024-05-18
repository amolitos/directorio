import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/usersSlicer';
import { PasswordModal } from './PasswordModal';

const USERS_PER_PAGE = 10;

export function Index({ courseId }) {
  const { users } = useSelector((state) => state.users);
  const [userSearch, setUserSearch] = useState('');
  const [userEdit, setUserEdit] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    if (userSearch.length === 0) {
      setPreviousPage(currentPage);
    }

    const search = event.target.value;
    setUserSearch(search);

    if (search.length === 0 && previousPage !== 0) {
      setCurrentPage(previousPage);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const filteredUsers = users.filter((user) =>
    [user.name, user.phone, user.email].some((field) =>
      field.toLowerCase().includes(userSearch.toLowerCase())
    )
  );

  const pageCount = filteredUsers
    ? Math.ceil(filteredUsers.length / USERS_PER_PAGE)
    : 0;

  /* eslint-disable prettier/prettier */
  const usersForPage = filteredUsers
    ? filteredUsers.slice(
      currentPage * USERS_PER_PAGE,
      (currentPage + 1) * USERS_PER_PAGE
    )
    : [];
  /* eslint-enable prettier/prettier */

  const handleChangePassword = (userId) => {
    setUserEdit(userId);
    setModal(true);
  };

  useEffect(() => {
    dispatch(fetchUsers(courseId));
  }, [dispatch, courseId]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="font-bold text-2xl justify-between">Usuarios</h2>
      </div>
      <PasswordModal modal={modal} setModal={setModal} userEdit={userEdit} />
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Buscar"
        className="form-input mt-5"
      />
      {filteredUsers.length > 0 ? (
        <div className="table-responsive shadow-none mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usersForPage.map((user) => (
                <tr key={user.id}>
                  <td className="font-semibold whitespace-nowrap">
                    {user.name}
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleChangePassword(user.id)}
                    >
                      <i className="fa-solid fa-key" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users && users.length > USERS_PER_PAGE && (
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
