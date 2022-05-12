import { createContext, useState, useEffect } from "react";
import moviesAPI from '../Api/Api'

export const NewsContext = createContext();

const NewsProvider = ({children}) =>{
    const [ news, setNews] = useState([])

    useEffect(() => {
        moviesAPI.get("/news")
           .then(res => {
            setNews(res.data);
           })
           .catch(error => console.log(error))
       }, []);
       return (
           <NewsContext.Provider value={news}>
               {children}
           </NewsContext.Provider>
       )
}
export default NewsProvider