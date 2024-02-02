import {useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Authorization = () => {
    const location = useLocation();
    const { auth } = useAuth();
    //we can decode teh jwt token for the role if we need but for now we dont
  return (
        auth?.user?<Outlet/>:
        <Navigate to="/auth/login" state={{from:location}} replace/>
  )
}
