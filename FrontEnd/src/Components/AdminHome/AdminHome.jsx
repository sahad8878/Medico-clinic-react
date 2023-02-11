import React from 'react';
import { useAdminAuthContext } from '../../Hooks/useAdminAuthContext';

function AdminHome() {
  const { admin, dispatch } = useAdminAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl pt-52">admin home</h1>
      <div className="">

        {admin && (
        <div>
          <h1 className="font-bold py-11 text-cyan-900">{admin.AdminEmail}</h1>
          <button type="button" className="text-white bg-neutral-600 px-3" onClick={handleLogout}>
            log out
          </button>
        </div>
        )}
      </div>
    </div>
  );
}

export default AdminHome;
