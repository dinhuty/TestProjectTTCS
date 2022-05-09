import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../Provider/MovieProvider';
import { Link } from 'react-router-dom';
import AnimationPages from '../../Animation/AnimationPages'
import './search.css'

export default function Search() {
    const movies = useContext(MovieContext)
    const arrFilm =['Demo search1','Demo search2',
                    'Demo search3','dog','cat','banana','mongo','Demo search4',
                    'Demo search1','film type2',
                    'film type3', 'film type4',
                    'film tap1','film type1 tap1',
                    'film tap3', 'type tapx']
    const [moviess,setMoviess] = useState(null)
    const [films,setFilms] = useState(arrFilm)
    const [kq,setKq] = useState(null)

    function _onKeyUp(e) {
        const movies_search = movies.filter ((movie) => 
            movie.movie.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setMoviess(movies_search)
        const result_search = arrFilm.filter((item) =>       
             item.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setKq(e.target.value)
        
        console.log(result_search)
        setFilms(result_search)
    }
  return (
      <AnimationPages>
          <div className='search__film'>
        
        <form className='search__film-form' >
            <input
                className='search__film-input'
                onChange={_onKeyUp}
                placeholder="Search"
            />

        </form>
        {kq && <h3>Kết quả tìm kiếm cho '{kq}':</h3>}
        {/* <div className="search__film-container">
            {films.map((film,index) => (
                <div className='search__film-item' key={index}>
                    film
                    <h1 className='search__film-title'>{film}</h1>
                </div>
            ))}
             </div> */}
        {moviess ? (
                <AnimationPages>

                <div className="films__container">
                {moviess && moviess.map((movie) => (
                     <div className="films__container-item" key={movie.movie._id}>
                          <Link to={`/films/${movie.movie._id}`}>
                          <img className='films__img' src={movie.movie.thumb_url} alt="" />
                          </Link>
                      </div>
                  ))}
                </div>
                </AnimationPages>
            ) :
            (
                <div className="films__container">
                {movies && movies.map((movie) => (
                     <div className="films__container-item" key={movie.movie._id}>
                          <Link to={`/films/${movie.movie._id}`}>
                          <img className='films__img' src={movie.movie.thumb_url} alt="" />
                          </Link>
                      </div>
                  ))}
                </div>
            )
        }
    
            </div>
      </AnimationPages>
    
  )
}
