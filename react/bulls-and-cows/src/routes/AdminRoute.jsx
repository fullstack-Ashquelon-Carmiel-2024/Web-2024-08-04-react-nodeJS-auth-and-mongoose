import { Navigate, Outlet } from 'react-router-dom';

export default function AdminRoute({role}) {

  // Outlet - use the original route

  return (
    <>{role === 'admin' ? <Outlet /> : <Navigate to="/err/not-authorized" />}</>
  )
}
