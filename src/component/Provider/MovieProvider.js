import { createContext, useState, useEffect } from "react";
import moviesAPI from '../Api/Api'

export const MovieContext = createContext();

const MovieProvider = ({children}) =>{
    const [ movies, setMovies] = useState([])

    useEffect(() => {
        moviesAPI.get("/movies")
           .then(res => {
            setMovies(res.data);
           })
           .catch(error => console.log(error))
       }, []);
       return (
           <MovieContext.Provider value={movies}>
               {children}
           </MovieContext.Provider>
       )
}
export default MovieProvider