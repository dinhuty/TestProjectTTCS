import React, { useState } from 'react'
import AnimationPages from '../../Animation/AnimationPages'
import './search.css'

export default function Search() {
    const arrFilm =['Demo search1','Demo search2',
                    'Demo search3','dog','cat','banana','mongo','Demo search4',
                    'Demo search1','film type2',
                    'film type3', 'film type4',
                    'film tap1','film type1 tap1',
                    'film tap3', 'type tapx']
    const [films,setFilms] = useState(arrFilm)
    const [kq,setKq] = useState(null)

    function _onKeyUp(e) {
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
        {kq && <h1>Kết quả tìm kiếm cho '{kq}':</h1>}
        <div className="search__film-container">
            {films.map((film,index) => (
                <div className='search__film-item' key={index}>
                    film
                    <h1 className='search__film-title'>{film}</h1>
                </div>
            ))}
             </div>
    
            </div>
      </AnimationPages>
    
  )
}
