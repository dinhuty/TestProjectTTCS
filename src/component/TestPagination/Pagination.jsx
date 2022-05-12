import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../Provider/MovieProvider';
import './Pagination.css'

export default function Pagination() {

  const movies = useContext(MovieContext)
  var newmovie = []
  for (var i=0; i<movies.length; i=i+6) {
    newmovie.push(movies.slice(i,i+6));
    }
    console.log(newmovie)
    // 
  const [currentPage, setCurrentPage] = useState(1)
  let maxPages = 3
  let items = []
  let leftSide = currentPage - 2
  if(leftSide <= 0 ) leftSide=1
  let rightSide = currentPage + 2
  if(rightSide>maxPages) rightSide = maxPages

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

    <div className='pagi'>
       
        <div className="flex-container">
        <div className="films__container">
          {newmovie[currentPage-1] && newmovie[currentPage-1].map((movie) => (
               <div className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie._id}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
            <div> currentPage : { currentPage } </div>
      
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
        {items}
        <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
      </div>
    </div>
    </div>

  )
}
