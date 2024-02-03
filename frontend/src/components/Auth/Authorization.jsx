import {useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

export const Authorization = () => {
    const location = useLocation();
    const { auth } = useAuth();
    const [load,setLoad] = useState(false);
    useEffect(()=>{
      if(Object.keys(auth).length !== 0){
        setLoad(true);
      }
    },[auth]);
    //we can decode teh jwt token for the role if we need but for now we dont
  return (
        auth?.accessToken?<Outlet/>:
        load &&
        <Navigate to="/auth/login" state={{from:location}} replace/>
  )
}
