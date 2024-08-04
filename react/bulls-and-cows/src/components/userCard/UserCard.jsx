import './UserCard.scss';
import femaleImg from '../../assets/images/woman-with-laptop-thinking.png';
import maleImg from '../../assets/images/guy-orange.PNG';
import justUserImg from '../../assets/images/user02.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { useContext} from 'react';
import UserContext from '../../contexts/userContext';

export default function UserCard({user, pic}) {

    const { fullName, email, role, id } = user;
    const { removeUser } = useContext(UserContext);

  let imgSrc = !user.gender && pic ? pic : !user.gender ? justUserImg : user.gender === 'f' 
                            ? femaleImg : maleImg;

  return (
    <li className="card mb-2">

        <div className="row">

            <div className="col-4">
                <img src={imgSrc} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-6 card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text"><small className="text-muted">
                    Role: {role}
                </small></p>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">

                <FontAwesomeIcon icon="fa-regular fa-trash-can" 
                  className="text-danger fs-1" role='button'
                    onMouseEnter={(e) => {
                        e.target.classList.add('fa-shake');
                        setTimeout(()=>{
                            e.target.classList.remove('fa-shake');
                        },1000)
                    }}  

                    onClick={(e) => {
                        e.target.classList.add('fa-flip');
                        setTimeout(()=>{
                            removeUser(id);
                        },1500)
                    }}
                />
                
            </div>

        </div>

    </li>
  )
}
