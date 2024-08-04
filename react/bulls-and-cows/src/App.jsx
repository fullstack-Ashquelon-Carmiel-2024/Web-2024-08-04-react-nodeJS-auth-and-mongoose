import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Routes, Route } from 'react-router-dom';

import AdminRoute from './routes/AdminRoute';

import AddUser from './components/addUser/AddUser';
import BullsAndCows from './games/bulls-and-cows/BullsAndCows';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import UserList from './components/userList/UserList';

import Burger from './learn/Burger';
import UseEffect from './learn/UseEffect';

import UserContext from './contexts/userContext';

function App() {

  const [currUser, setCurrUser] = useState(localStorage.getItem('bulls-and-cows-user') ?
      JSON.parse(localStorage.getItem('bulls-and-cows-user')) :
      {id:undefined, role:'guest', nick:''});

  // data inside localStorage is kept as a string
  const [users,setUsers] = useState(localStorage.getItem('bulls-and-cows-players') ?
        JSON.parse(localStorage.getItem('bulls-and-cows-players')) 
      : [
        { id: 77, fullName: 'Harleen Frances Quinzel', nick: 'Harley Quinn', password:"123",
          email:'harley@gmail.com', phone: '555-5555', gender: 'f',role:'player'},
        { id: 121, fullName: 'Joakin Phoenix', nick: 'Joker', password:"1234",
          email:'joker@gmail.com',  gender: 'm',role:'player'},
        { id: 123, fullName: 'Bruce Wayne', nick: 'Batman', password:"1235",
          email:'bat@gmail.com', phone: '555-5557',role:'player'},
        { id: 111, fullName: 'Princess Diana of Thymiscira', nick: 'Wonder Woman', 
          password:"1238",
            email:'gal.gadot@gmail.com', phone: '555-5558', role:'admin'}
      ]);

  const removeUser = (id) => {

    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers);
    localStorage.setItem('bulls-and-cows-players',JSON.stringify(newUsers));

  }

  const addUser = (newUser) => {

    /* setUsers(users.concat({...newUser, id: Date.now()})); */
    // Date.now() could still be the same, if addUser() runs in a loop 
    // 
    //setUsers(users.concat({...newUser, id: uuid()}));
    let result = users.some(u => u.nick.toLowerCase() === newUser.nick.toLowerCase()
                              || u.email.toLowerCase() === newUser.email.toLowerCase());

    if (result) return false; // the user already exists

    const newUsers = [...users,{...newUser, id: uuid()}];
    setUsers(newUsers);
    console.log(`users after setUsers()\n`,users);
    localStorage.setItem('bulls-and-cows-players',JSON.stringify(newUsers));

    return true;
    /* MISSION 01: add check for the existing email or nick.
       -- If exists, don't do nothing, return false 
       -- If not, add the user, return true */

  }

  console.log(`users before return()\n`,users)
  return (
    <UserContext.Provider value={{removeUser, currUser}}>
    <div className="App container pb-5">
      <Navbar setCurrUser={setCurrUser} />
      <div className="appTitle">Bulls and Cows</div>
      <div className="row gx-0 gy-3">
        {/* Envelopes only the part that participates in the routing */}
        <Routes>

          <Route path="/" element={<Home /> } />

          <Route path="/login" element={<Login users={users} setCurrUser={setCurrUser} /> } />

          {/* USERS-USERS-USERS-USER-USERS */}

          <Route path="/users">

            <Route element={<AdminRoute role={currUser.role} />} >

              <Route index element={<UserList users={users}>
                                        <Header title='User List' /> 
                                      </UserList>} />
            

              <Route path="add" element={<AddUser add={addUser}>
                                              <Header title='Add User' /> 
                                            </AddUser>} />
            </Route>

            {/* <Route path=":id" element={<UserDetails add={addUser} />} /> */}

          </Route>

          {/* GAMES-GAMES-GAMES-GAME-GAMES */}

          <Route path="/games">
                {/* <Route index element={<GameGallery />} /> */}{/* /games */}
                <Route path="bulls-and-cows" element={<BullsAndCows />} />
                {/* <Route path="fox-and-hounds" element={<FoxAndHounds />} /> */}
                
                <Route path="results" >
                    {/* <Route index element={<GameTournamentResults />} /> */}{/* /games/results */}
                    {/* <Route path="edit" element={<EditGameResults />} /> */}{/* /games/results/edit */}
                </Route>
          </Route>                                
          
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/burger" element={<Burger />} />

        </Routes>
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
