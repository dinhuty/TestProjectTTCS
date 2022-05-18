import React, { useContext, useState } from 'react'
import { UsersContext } from '../../../Provider/UserContextProvider'
import userAPI from '../../../Api/Api'
import './user_manager.css'

export default function User_manager() {
  const users = useContext(UsersContext)
  const [keyword,setKeyword] = useState('')
  const [arr,setArr] = useState(null)
  const handleDelete = (id) =>{
    const newUsers = users.users.filter((userD) => {
      return userD.id !== id;
    });
    userAPI.delete(`/users/${id}`)
   if (arr) {
      const newarr = arr.filter((userD) => {
      return userD.id !== id;
      });
      setArr(newarr)
   }

    users.setUsers(newUsers)
  }
  const handleSearch = (e) =>{
     e.preventDefault();
      setArr(users.users.filter((user) => user.username.toLowerCase().includes(keyword.toLowerCase())))
  }
  return (
    <div className='user_manager'>
      <form action="" onSubmit={handleSearch}>
        <input  className='search__user-input'  
                type="text" 
                value={keyword}
                onChange={event => setKeyword(event.target.value)}
              />
        <button className='search__user-btn' type='submit'>Tìm kiếm</button>
      </form>
        {arr ?  (
           <table >
           <tr>
             <th>Username</th>
             <th>Password</th>
           </tr>
         {arr && arr.map((user) => (
             <tr key={user.id}>
               <td>{user.username}</td>
               <td>{user.password}</td>
               <td>
                 <button className='user__manager-delete' onClick={() => {handleDelete(user.id)}}>Xóa</button>
               </td>
             </tr>
           
         ))}
         </table>
        ): 
        (
          <table >
        <tr>
          <th>Username</th>
          <th>Password</th>
        </tr>
      {users.users && users.users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>
              <button className='user__manager-delete' onClick={() => {handleDelete(user.id)}}>Xóa</button>
            </td>
          </tr>
        
      ))}
      </table>
        )
        }

    </div>
  )
}
