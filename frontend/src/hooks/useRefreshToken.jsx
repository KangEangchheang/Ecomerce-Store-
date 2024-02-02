import axios from 'axios';
import useAuth from './useAuth.jsx';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    //using the refresh token route to refresh our user token
    const refresh = async () =>{
        try {
            const res = await axios.get(`${BASE_URL}/refresh`,{
                withCredentials: true,
            })
            setAuth(prev=>{
                // reevaluate the auth but we only want to change the accesstoken
                return {
                    ...prev,
                    accessToken:res.data.accessToken,
                    user:res.data.user
                }
            });
            return res.data.accessToken;
        } catch (error) {
            // console.log(error.message);
        }
    }

  return refresh;
}

export default useRefreshToken;
