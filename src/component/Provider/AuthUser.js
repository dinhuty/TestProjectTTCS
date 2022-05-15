import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthUserContextProvider = ({children}) =>{
    const [ userAuth, setUserStt] = useState({
        stt : false,
        username: ''
    })

    
       return (
           <AuthContext.Provider value={{userAuth, setUserStt}}>
               {children}
           </AuthContext.Provider>
       )
}
export default AuthUserContextProvider