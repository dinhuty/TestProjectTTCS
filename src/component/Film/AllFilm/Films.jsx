import AnimationPages from '../../Animation/AnimationPages'
import React, { useContext, useEffect, useState } from 'react'
import './Film.css'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../Provider/MovieProvider'
import Header_content from '../../Header/Header_content'
// test aos
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Films() {
  useEffect(() => {
    Aos.init({duration: 2000})
    window.scrollTo(0, 0)
  },[])
 
  const movies = useContext(MovieContext)
  var moviePage = []
  for (var i=0; i<movies.length; i=i+18) {
    moviePage.push(movies.slice(i,i+18));
    }
  const [currentPage, setCurrentPage] = useState(1)
  let maxPages = moviePage.length
  let items = []
  let leftSide = currentPage - 1
  if(leftSide <= 0 ) leftSide=1
  
  let rightSide = currentPage + 1
  if(rightSide>maxPages) rightSide = maxPages
// test
  // if(leftSide===1) rightSide=3
  // if (rightSide ===maxPages) leftSide=maxPages-2

  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect activex' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>
    );
  }
  console.log(items)
  const nextPage = () => {
    if(currentPage<maxPages){
      setCurrentPage(currentPage+1)
    }
  }
  
  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  
    return (
      <AnimationPages>
        <div className="films">
        <Header_content></Header_content>
          <p className="films__title title">
            Movies
          </p>
          <div className="films__container">
            
          {moviePage[currentPage-1] && moviePage[currentPage-1].map((movie) => (
               <div data-aos="zoom-in" className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie.slug}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
          <div className="paginate-ctn">
            <div className="round-effect" onClick={prevPage}> <i className="fa-solid fa-caret-left"></i> </div>
            {items}
            <div className="round-effect" onClick={nextPage}> <i className="fa-solid fa-caret-right"></i> </div>
          </div>
      </div>
      </AnimationPages>
    )
}
