import './UserList.scss';
import UserCard from '../userCard/UserCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function UserList({users, children}) {
  const [ randUserPics, setRandUserPics ] = useState([]);

  let picUrl = 'https://randomuser.me/api/?results=10&inc=gender,name,picture';
  // Promise: or is pending or is resolved - success (then) or is an error (catch)
  useEffect(() => {
    fetch(picUrl)
      .then(response => response.json()) // create object from the given JSON
      .then(response => {
        console.log(response);
        setRandUserPics(response.results.map(el => el.picture.large))
      })
      .catch(err => {console.log(err)})

  },[])

  const getRandPic = () => randUserPics.length > 0 ?
                                randUserPics[Math.floor(Math.random()*randUserPics.length)] : '';
console.log(`randUserPics: \n`, randUserPics)
  return (
    // col-12 - 12 columns for the narowest screen (xs - extra small)
    // col-sm-6 - starting from the small screen - take the half of bootstrap
    <div className="col-12 row userList">
        {children}
        <ul className="p-0 col-12 col-sm-6 col-md-7 col-lg-6 order-1 order-sm-0">
{/* MISSION: create expression that if there are some users,
creates "map" of <UserCard user={user} /> for each user,
and if not, shows 
<p className="display-5">This is a sociopatic game: no users</p>
*/}
            {users.length > 0 ?
                users.map(user => 
                    <UserCard key={user.id} user={user} pic={getRandPic()} />):
                    <p className="display-5">
                        This is a sociopatic game: no users</p>
            }

        </ul>
        
        <button 
           className="btn btn-outline-info p-0 col-12 col-sm-6 col-md-5 col-lg-6 order-0 order-sm-0 fs-5 align-self-center p-5">
            <Link to="/add-user">Add User</Link>
        </button>
    </div>
  )
}
