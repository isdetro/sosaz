import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to='/administrator' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
