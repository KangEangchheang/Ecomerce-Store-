
import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import { useEffect } from 'react';

// this is an interceptor that require you to sent token to get data adn refresh token

const useInterceptor = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(()=>{

        const reqInterceptor = axiosPrivate.interceptors.request.use(
            config =>{
                //if there is no authorization mean the user has just login first time on their machine
                if (!config.headers.Authorization){
                    config.headers.Authorization = `Bearer ${auth?.accessToken}`;
                }
                return config;
            },(error)=>{
                //if there is error when using access token stop the request
                return Promise.reject(error);
            }
        )

        const resIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            // error handling for request
            async(error)=>{
                const prev = error?.config;
                //prev.sent is a safety net to make sure that its not 
                // an infinite loop of refreshing token since we are using useeffect
                if(error?.response?.status === 403 && !prev?.sent){
                    prev.sent = true;
                    ///if expired token it will refresh
                    const newAccessToken =await refresh();
                    prev.headers.Authorization = `Bearer ${newAccessToken}`;
                    //return prev mean to resent the request with the new access token
                    return axiosPrivate(prev); 
                }
                //same with req if there is error stop the request
                return Promise.reject(error);
            }
        )
        
        //cleaning interceptors
        return () => {
            axiosPrivate.interceptors.response.eject(resIntercept);
            axiosPrivate.interceptors.request.eject(reqInterceptor);
        }
    },[auth,refresh]);

  return axiosPrivate;
}

export default useInterceptor;
