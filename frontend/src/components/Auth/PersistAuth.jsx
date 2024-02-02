import {Outlet} from 'react-router-dom';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

// explaination: persist auth use cookies to refresh the Auth state since 
// when we route to another url or reload the Auth is reset. so we 
// in the refreshToken componenet, after we refresh the accessToken it will 
// assign the Auth value again therefore reloaded teh page is fine

const PersistAuth = () => {
    const [isLoading,setLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth,remember,session} = useAuth();

    useEffect(()=>{
        let isMounted = true;
        const verifyRefreshToken = async () =>{
            try {
                // there is no need to sent anything becuz with axios cookie 
                // will be sent automatically and we alrd wrote it in the refreh token component
                await refresh();

            }catch(err){
                console.log(err);
            }
            finally {
                // fix memory leak
                isMounted && setLoading(false);
            }
        }

        //we only need to verify the refresh token if the auth state is gone
        if(!auth?.accessToken){
            verifyRefreshToken();
        }else{
            setLoading(false);
        }

        //clean up function
        return () =>{
            isMounted = false;
        }

    },[]);
  
    return (
        <>
            {!remember? // <- this mean that if we didnt want to remember it will not bother to make it persistent or load the persistent code
                
                //below code mean: if user dotn want to remember we will force them to use session storage that clear after browser 
                // is exit that way they can still stay login when still using the website
                !session? 
                    <Outlet/>
                    :isLoading ?
                        <p>i am loading :3</p>
                        :<Outlet/>
                :isLoading ?
                    <p>i am loading :3</p>
                    :<Outlet/>
            }
        </>
    );
}

export default PersistAuth;