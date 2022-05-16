import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NotFound from '../NotFound';
import { StoreContext } from '../../hooks/Store'

export default function PermissionsAdmin() {


  const [store] = useContext(StoreContext)
  const user = store?.user?.permissions

  return (
    <>
      {user === 'admin' ? (
        <Outlet />
      ) : (
        <NotFound title="Sorry" message="You are not allowed to enter this page" />
      )}
    </>
  );
}
