import AnimationPages from '../../Animation/AnimationPages'
import React, { useContext, useEffect, useState } from 'react'
import './Film.css'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../Provider/MovieProvider'
import Header_content from '../../Header/Header_content'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Films() {
  // useEffect(() => {
  //   Aos.init({duration: 2000})
  //   window.scrollTo(0, 0)
  // },[])
 
  const moviesContext = useContext(MovieContext)
  const [movies,setMovies] = useState([])
  const [country,setCountry] = useState('Quốc gia')
  const [type,setType] = useState('Thể loại')

  useEffect(() => {
    Aos.init({duration: 1000})
    window.scrollTo(0, 0)
    setMovies(moviesContext.movies)
  },[moviesContext])
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

  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect activex' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>
    );
  }
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


  // loc movies
  const moviesFilter = (country,type) => {
    if (country !== 'Quốc gia'){
      if (type === 'Thể loại'){
        setMovies (moviesContext.movies.filter(movie => movie.movie.country[0].name === country))
      }
      else{
       
        setMovies (moviesContext.movies.filter(movie => movie.movie.country[0].name === country && movie.movie.category[0].name === type))
      }
    }else {
      if (type !== 'Thể loại'){
        setMovies (moviesContext.movies.filter(movie => movie.movie.category[0].name === type))
        }
      else{
        setMovies(moviesContext.movies)
      }

    }
  }
  // const moviesFilterType = (type,country) => {
  //   if (type !== 'Thể loại'){
  //     if (country === 'Quốc gia'){
  //       setMovies (moviesContext.movies.filter(movie => movie.movie.category[0].name === type))
  //     }
  //     else{
  //       setMovies (moviesContext.movies.filter(movie => movie.movie.country[0].name === country && movie.movie.category[0].name === type))
  //     }
  //   } else{
  //     if (country !== 'Quốc gia'){
  //       setMovies (moviesContext.movies.filter(movie => movie.movie.country[0].name === country))

  //     }else {
  //       setMovies(moviesContext.movies)
  //     }
  //   }
  // }
  // console.log(country + 'và' + type)
  
    return (
      <AnimationPages>
        <div className="films">
        <Header_content></Header_content>
          <p className="films__title title">
            Movies
          </p>
          {/* test loc */}
         <div className="filter_movies">
         <select id="country" value={country} 
                onChange={(e) => {setCountry(e.target.value);moviesFilter(e.target.value,type)}}>
          <option value="Quốc gia">Quốc gia</option>
          <option value="Hàn Quốc">Hàn Quốc</option>
          <option value="Trung Quốc">Trung Quốc</option>
          <option value="Nhật Bản">Nhật Bản</option>
          <option value="Âu Mỹ">Âu Mỹ</option>
          <option value="Thái Lan">Thái Lan</option>
          <option value="Pháp">Pháp</option>


          </select>
          <select id="type" value={type} 
                onChange={(e) => {setType(e.target.value);moviesFilter(country,e.target.value)}}>
          <option value="Thể loại">Thể loại</option>
          <option value="Hành Động">Hành Động</option>
          <option value="Tâm Lý">Tâm Lý</option>
          <option value="Tình Cảm">Tình Cảm</option>
          <option value="Hài Hước">Hài Hước</option>
          <option value="Kinh Dị">Kinh Dị</option>

          </select>
         </div>


          {/* end test lọc */}
          <div className="films__container">
          {movies.length >0 ? (
            moviePage[currentPage-1] && moviePage[currentPage-1].map((movie,index) => (
              <div data-aos={index > 5 && "zoom-in"} className="films__container-item" key={movie.movie.slug}>
                   <Link to={`/films/${movie.movie.slug}`}>
                   <img className='films__img' src={movie.movie.thumb_url} alt="" />
                   </Link>
               </div>
           ))
          ) : (
            <h1>Không có kết quả cho {country} && {type}</h1>
          )}  
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
