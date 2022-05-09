import AnimationPages from '../../Animation/AnimationPages'
import React, { useContext } from 'react'
import './Film.css'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../Provider/MovieProvider'
import Header_content from '../../Header/Header_content'

export default function Films() {
  const movies = useContext(MovieContext)

    window.scrollTo(0, 0)
    return (
      <AnimationPages>
        <div className="films">
        <Header_content></Header_content>
          <p className="films__title title">
            Movies
          </p>
          <div className="films__container">
          {movies && movies.map((movie) => (
               <div className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie._id}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
          
      </div>
      </AnimationPages>
    )
}
