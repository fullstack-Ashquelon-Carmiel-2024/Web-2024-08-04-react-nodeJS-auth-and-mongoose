import './Navbar.scss';
import logo from '../../assets/logo/logo-bull01.svg';
import justUser from '../../assets/images/user02.png';
import { Link } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import { logout } from '../../services/auth';
import UserContext from '../../contexts/userContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({setCurrUser}) {

  const { currUser } = useContext(UserContext);
  const [ dropdowns, setDropdowns ] = useState({admin:false,
                                                games:false,
                                              profile:false});
// There are 2 uses for useRef:
//   -- To keep some value through re-renders
//   -- To point to HTML element
// Ref does not cause re-render and keeps it's value through re-renders.
// When we get it's value we should apply to it's property "current".
  const adminMenuRef = useRef(null);
  const adminToggleRef = useRef(null);
  const gamesMenuRef = useRef(null);
  const gamesToggleRef = useRef(null);
  const profileMenuRef = useRef(null);
  const profileToggleRef = useRef(null);
  
  const checkClickAr = [ adminMenuRef, gamesMenuRef, profileMenuRef, adminToggleRef, gamesToggleRef, profileToggleRef];

  // const a = useRef(1);
  // If there is a button that adds 1 to a, so a will become 2, but it will not cause re-render.
  // But when re-render will happen, a will keep it's last value (2).
  // console.log(a.current);

 useEffect(() => {

  function closeMenu(e) {

    const elementsAr = e.composedPath();
    console.log(`elementsAr: \n`, elementsAr);

    // If everybody (each menu and it's button ) not included in the list
    // of the elements that were around the "click" - we close the menus.

    let result = checkClickAr.every(ref => !elementsAr.includes(ref.current));

    if (result) {

      setDropdowns(Object.keys(dropdowns).reduce((acc,drop) => { 
        return {...acc, [drop]: false}
      },{}))

    }

  }

  document.body.addEventListener('click',closeMenu);

  return (() => {

    document.body.removeEventListener('click',closeMenu); // Will be removed when the Navbar will UNMOUNT

  })

 },[])

  const clickDropdown = (dName) => {
    if (!dropdowns[dName]) { // if it will be open, we should close the others
      setDropdowns(Object.keys(dropdowns).reduce((acc,dr) => {
         return {...acc, [dr]: dr === dName ? true : false}
      },{}))
    } else {
      setDropdowns({...dropdowns,[dName]:false})
    }
  } 

  return (
    <nav className="navbar navbar-expand-lg bg-main fs-3">
     <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo d-inline-block align-text-top" />
        <span className="logoText">Bulls and Cows</span>
      </Link>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

        {/* THE LEFT SIDE */}
       <ul className="navbar-nav d-flex justify-content-between me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
           
           {
              currUser.role === 'admin' && 
              <>
              <li className="nav-item">
            <Link to="#" className={`nav-link dropdown-toggle ${dropdowns.admin && 'show'}`} 
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                aria-expanded={dropdowns.admin} onClick={()=>clickDropdown('admin')}
                ref={adminToggleRef} >
                  Admin
            </Link>
            <ul className={`dropdown-menu ${dropdowns.admin && 'show'}`} 
                  aria-labelledby="navbarDropdown" ref={adminMenuRef} >
            <li><Link to="/users" className="dropdown-item">All the Users</Link></li>
            <li><Link to="/users/add" className="dropdown-item">Add User</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="/games/support" className="dropdown-item">Game Support</Link></li>
            <li><Link to="/games/results" className="dropdown-item">Game Results</Link></li>
          </ul>
          </li>
              
            </>
           }

          <li className="nav-item">
            <Link to="/games/results" className="nav-link active" aria-current="page">Tournaments</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className={`nav-link dropdown-toggle ${dropdowns.games && 'show'}`} 
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                aria-expanded={dropdowns.games} onClick={()=>clickDropdown('games')} 
                ref={gamesToggleRef}>
                  Games
            </Link>
            <ul className={`dropdown-menu ${dropdowns.games && 'show'}`} 
                  aria-labelledby="navbarDropdown"  ref={gamesMenuRef} >
            <li><Link to="/games" className="dropdown-item">All the Games</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="/games/bulls-and-cows" className="dropdown-item">Bulls and Cows</Link></li>
            <li><Link to="/games/fox-and-hounds" className="dropdown-item">Fox and Hounds</Link></li>
          </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </li>
          </ul>


          {/* THE RIGHT SIDE: */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 profile-menu"> 

            <li className="nav-item dropdown">

              <a className={`nav-link dropdown-toggle ${dropdowns.profile && 'show'}`} 
                 href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                 aria-expanded={dropdowns.profile}  onClick={()=>clickDropdown('profile')}
                 ref={profileToggleRef} >
                <div className="profile-pic">
                    <img src={justUser} alt="Profile Picture" />
                </div>
              </a>

              <ul className={`dropdown-menu ${dropdowns.profile && 'show'}`} 
                aria-labelledby="navbarDropdown" ref={profileMenuRef} >

                { currUser.role === 'guest' ?
                <>
                
                <li><Link to="/login" className="dropdown-item">
                      <FontAwesomeIcon icon="fas fa-sign-in-alt" className="fa-fw" /> Login
                    </Link>
                </li>

                <li><Link to="/sign-up" className="dropdown-item">
                      <FontAwesomeIcon icon="fas fa-file-signature" className="fa-fw" /> SignUp
                    </Link>
                </li>

                </> :
                <>
                
                <li><Link to={`/users/${currUser.id}`} className="dropdown-item">
                      <FontAwesomeIcon icon="fas fa-sliders-h" className="fa-fw" /> Profile
                    </Link>
                </li>

                <li><Link to="/settings" className="dropdown-item">
                      <FontAwesomeIcon icon="fas fa-cog" className="fa-fw" /> Settings
                    </Link>
                </li>

                <li><hr className="dropdown-divider" /></li>
                <li>

                  <button className="dropdown-item" onClick={() => logout(setCurrUser)}>
                    <FontAwesomeIcon icon="fas fa-sign-out-alt" className="fa-fw" /> Log Out
                  </button>
                </li>
                </>
                }

              </ul>
            </li>
        </ul>
          
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div> 
  </nav>
  )
}
