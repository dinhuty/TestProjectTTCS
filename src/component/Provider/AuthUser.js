import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthUserContextProvider = ({children}) =>{
    const token = localStorage.getItem('User')
    const [ userAuth, setUserStt] = useState({
        stt : token ? true : false,
        username: token ?  JSON.parse(token).username : '',
        password: token ?  JSON.parse(token).password : ''
    })
  
       return (
           <AuthContext.Provider value={{userAuth, setUserStt}}>
               {children}
           </AuthContext.Provider>
       )
}
export default AuthUserContextProvider