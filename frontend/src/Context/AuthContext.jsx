import {createContext,useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState({});
    //use localstorage to set if the user check remember me
    // const [remember,setRemember] = useState(JSON.parse(localStorage.getItem('remember')) || false);

    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext;