import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../Provider/MovieProvider';
import { Link } from 'react-router-dom';
import AnimationPages from '../../Animation/AnimationPages'
import './search.css'
import Aos from 'aos';
import "aos/dist/aos.css"


export default function Search() {
    useEffect(() => {
        Aos.init({duration: 2000})
        window.scrollTo(0, 0)
        },[])
    const movies = useContext(MovieContext)
    const [moviess,setMoviess] = useState(null)
    const [kq,setKq] = useState(null)

    function _onKeyUp(e) {
        const movies_search = movies.movies.filter ((movie) => 
            movie.movie.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setMoviess(movies_search)   
        setKq(e.target.value)
    }
  return (
      <AnimationPages>
          <div className='search__film'>
        
        <form className='search__film-form' >
            <input
                className='search__film-input'
                onChange={_onKeyUp}
                placeholder="Nhập tên phim"
            />

        </form>
        {kq && <h3>Kết quả tìm kiếm cho '{kq}':</h3>}

        {moviess ? (
                <AnimationPages>
                <div className="films__container">
                {moviess && moviess.slice(0,16).map((movie) => (
                     <div className="films__container-item" key={movie.movie.slug} data-aos="fade-up">
                          <Link to={`/films/${movie.movie.slug}`}>
                          <img className='films__img' src={movie.movie.thumb_url} alt="" />
                          </Link>
                      </div>
                  ))}
                </div>
                </AnimationPages>
            ) :
            (
                <div className="films__container">
                {movies.movies && movies.movies.slice(0,12).map((movie) => (
                     <div className="films__container-item" key={movie.movie.slug} data-aos="fade-up">
                          <Link to={`/films/${movie.movie.slug}`}>
                          <img  className='films__img' src={movie.movie.thumb_url} alt="" />
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
