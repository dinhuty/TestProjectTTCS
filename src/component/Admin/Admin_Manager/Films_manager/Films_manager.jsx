import React, { useContext, useState, useEffect } from 'react'
import { MovieContext } from '../../../Provider/MovieProvider'
import filmApi from '../../../Api/Api'
import './film_manager.css'


export default function Films_manager() {
  
  const movies = useContext(MovieContext)
  const [addname,setAddname] = useState('')
  const [addcontent,setAddcontent] = useState('')
  const [addimg,setAddimg] = useState('')
  const [addslug,setAddSlug] = useState('')
  const [addvideo,setAddvideo] = useState('')
  const [addcountry,setAddcountry] = useState('Hàn Quốc')
  const [addtype,setAddtype] = useState('Hành động')
  const [active_add , setActive_add] = useState(false)
  const [active_edit , setActive_edit] = useState(false)
  const [movieID,setMovieID] = useState('1')

  
  const handleAddFilm = (e) =>{
    e.preventDefault();

    movies.setMovies([...movies.movies,{
      movie: {
        modified: {
          time: "2022-05-08T09:59:47.000Z"
          },
          name : addname,
          origin_name: addname,
          content : addcontent,
          type: 'hoathinh',
          thumb_url: addimg,
          slug : addslug,
          year : 2022,
          category: [
            {
            name: addtype
            }
            ],
            country: [
            {
            name: addcountry
            }
            ]

        },
        link_embed : addvideo
    }])
    filmApi.post('/movies',{
      movie: {
        modified: {
          time: "2022-05-08T09:59:47.000Z"
          },
          name : addname,
          origin_name: addname,
          content : addcontent,
          type: 'hoathinh',
          thumb_url: addimg,
          slug : addslug,
          year : 2022,
          category: [
            {
            name: addtype
            }
            ],
            country: [
            {
            name: addcountry
            }
            ]

        },
        link_embed : addvideo
    })
    setActive_add(!active_add)
    // setTimeout(() => {
    //   window.location.reload();      
    // }, 500);

  }

  const handleDeleteFilm = (id) =>{
      const newFilms = movies.movies.filter((movie) => {
        return movie.id !== id;
      });
      filmApi.delete(`/movies/${id}`)
      movies.setMovies(newFilms)
      console.log(newFilms)
  }
  const handleUpdate = async (id) =>{
    movies.setMovies([...movies.movies,{
      movie: {
        modified: {
          time: "2022-05-08T09:59:47.000Z"
          },
          name : addname,
          origin_name: addname,
          content : addcontent,
          type: 'hoathinh',
          thumb_url: addimg,
          slug : addslug,
          year : 2022,
          category: [
            {
            name: addtype
            }
            ],
            country: [
            {
            name: addcountry
            }
            ]

        },
        link_embed : addvideo
    }])
    filmApi.put(`/movies/${id}`,{
      movie: {
        modified: {
          time: "2022-05-08T09:59:47.000Z"
          },
          name : addname,
          origin_name: addname,
          content : addcontent,
          type: 'hoathinh',
          thumb_url: addimg,
          slug : addslug,
          year : 2022,
          category: [
            {
            name: addtype
            }
            ],
            country: [
            {
            name: addcountry
            }
            ]

        },
        link_embed : addvideo
    })
    setActive_edit(false)

    setTimeout(() => {
      window.location.reload();
      
    }, 500);
  }
  const toggleAdd = () => {
    setActive_add(!active_add)

    
  }
  const Addtt = (id) => {
    const thisFilm = movies.movies.find((movie) => {
      return movie.id === id;
    });
    setMovieID(id)
    setAddname(thisFilm.movie.name)
    setAddcontent(thisFilm.movie.content)
    setAddimg(thisFilm.movie.thumb_url)
    setAddSlug(thisFilm.movie.slug)
    setAddvideo(thisFilm.link_embed)
    setAddcountry(thisFilm.movie.country[0].name)
    setAddtype(thisFilm.movie.category[0].name)
    window.scrollTo(0, 0)

    
  }
  const Remove_tt = () => {
    setMovieID('1')
    setAddname('')
    setAddcontent('')
    setAddimg('')
    setAddSlug('')
    setAddvideo('')
    setAddcountry('Hàn Quốc')
    setAddtype('Hành Động')    
  }

  return (
    <div className='films_manager'>
      
      <div className={active_add ? 'add_film-container active_add' : 'add_film-container'}>
      <div className="add_film-box">
        <input type="text" placeholder='name'
        value={addname}
        onChange={event => setAddname(event.target.value)}
        />
        <input type="text" placeholder='content'
         value={addcontent}
         onChange={event => setAddcontent(event.target.value)}
        />
        <input type="text" placeholder='img'
         value={addimg}
         onChange={event => setAddimg(event.target.value)}
        />
        <input type="text" placeholder='slug'
         value={addslug}
         onChange={event => setAddSlug(event.target.value)}
        />
        <input type="text" placeholder='video'
         value={addvideo}
         onChange={event => setAddvideo(event.target.value)}
        />
        <div className="select">
          <div>
          <p>Quốc gia</p>
          <select id="addcountry" value={addcountry} 
                onChange={(e) => setAddcountry(e.target.value)}>
          <option value="Hàn Quốc">Hàn Quốc</option>
          <option value="Trung Quốc">Trung Quốc</option>
          <option value="Nhật Bản">Nhật Bản</option>
          <option value="Âu Mỹ">Âu Mỹ</option>
          <option value="Thái Lan">Thái Lan</option>
        </select>
          </div>
        <div>
        <p>Thể loại</p>
        <select id="addtype" value={addtype} 
                onChange={(e) => setAddtype(e.target.value)}>
          <option value="Hành Động">Hành Động</option>
          <option value="Tình Cảm">Tình Cảm</option>
          <option value="Hài Hước">Hài Hước</option>
          <option value="Tâm Lý">Tâm Lý</option>
          <option value="Kinh Dị">Kinh Dị</option>

       </select>
        </div>
        </div>
        <button onClick={handleAddFilm} className='add__film-btn'>Thêm</button>

      </div>
        <button onClick={toggleAdd} className='user__manager-delete'><i className="fa-solid fa-circle-xmark"></i></button>
      </div>
      {/* edit */}

      <div className={active_edit ? 'add_film-container active_add' : 'add_film-container'}>
      <div className="add_film-box">
        <input type="text" placeholder='name'
        value={addname}
        onChange={event => setAddname(event.target.value)}
        />
        <input type="text" placeholder='content'
         value={addcontent}
         onChange={event => setAddcontent(event.target.value)}
        />
        <input type="text" placeholder='img'
         value={addimg}
         onChange={event => setAddimg(event.target.value)}
        />
        <input type="text" placeholder='slug'
         value={addslug}
         onChange={event => setAddSlug(event.target.value)}
        />
        <input type="text" placeholder='video'
         value={addvideo}
         onChange={event => setAddvideo(event.target.value)}
        />
        <div className="select">
          <div>
          <p>Quốc gia</p>
          <select id="addcountry" value={addcountry} 
                onChange={(e) => setAddcountry(e.target.value)}>
          <option value="Hàn Quốc">Hàn Quốc</option>
          <option value="Trung Quốc">Trung Quốc</option>
          <option value="Nhật Bản">Nhật Bản</option>
        </select>
          </div>
        <div>
        <p>Thể loại</p>
        <select id="addtype" value={addtype} 
                onChange={(e) => setAddtype(e.target.value)}>
          <option value="Hành Động">Hành Động</option>
          <option value="Tình Cảm">Tình Cảm</option>
          <option value="Hài Hước">Hài Hước</option>
          <option value="Tâm Lý">Tâm Lý</option>
          <option value="Kinh Dị">Kinh Dị</option>

       </select>
        </div>
        </div>
        <button onClick={() => {handleUpdate(movieID)}} className='add__film-btn'>Update</button>

      </div>
        <button onClick={() => {setActive_edit(false);Remove_tt()}} className='user__manager-delete'><i className="fa-solid fa-circle-xmark"></i></button>
      </div>


      {/* end-edit */}



      { movies.movies && 
        <table >
        <tr>
          <th>Tên</th>
          <th>Quốc gia</th>
          <th>Thể loại</th>
          <th>
      <button className='user__manager-delete' onClick={toggleAdd}>Thêm</button>

          </th>
        </tr>
      {movies.movies && movies.movies.map((movie) => (
          <tr key={movie.movie.slug}>
            <td>{movie.movie.name}</td>
            <td>{movie.movie.country[0].name}</td>
            <td>{movie.movie.category[0].name}</td>
            <td>
            <button className='user__manager-delete' onClick={() => {handleDeleteFilm(movie.id)}}>Xóa</button>
            <button className='user__manager-update' onClick={() => {setActive_edit(true);Addtt(movie.id)}}>Sửa</button>

            </td>
          </tr>
        
      ))}
      </table>
      }
    </div>
  )
}
