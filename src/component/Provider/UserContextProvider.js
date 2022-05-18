import { createContext, useState, useEffect } from "react";
import moviesAPI from '../Api/Api'

export const UsersContext = createContext();

const UserContextProvider = ({children}) =>{
    const [ users, setUsers] = useState([])
    const [comments,setComments] = useState([])
    useEffect(() => {
        moviesAPI.get("/users")
           .then(res => {
            setUsers(res.data);
           })
           .catch(error => console.log(error))
        moviesAPI.get("/comments")
        .then(res => {
            setComments(res.data);
        })
        .catch(error => console.log(error))
       }, []);
       
       return (
           <UsersContext.Provider value={{users,setUsers,comments,setComments}}>
               {children}
           </UsersContext.Provider>
       )
}
export default UserContextProvider