export function login(nick,password,users) {

    // when we've got backend we don't need the argument
    // of "users" as we get to the backend for the purpose
    // of login

    if (!users.some(user => user.nick === nick))
        return {loggedIn: false, msg: `No user with nick ${nick}`};

    let user = users.filter(user => user.nick === nick)[0];

    console.log(`in login(), user\n`, user)
    if (user.password !== password) 
        return { loggedIn: false, msg: `Wrong password for the user ${nick}`};

    localStorage.setItem('bulls-and-cows-user', JSON.stringify({id: user.id, role: user.role, nick}))
    return {loggedIn: true, user};
                               
    
}

export function logout(setCurrUser) {

    localStorage.setItem('bulls-and-cows-user', JSON.stringify({id: '', role: 'guest', nick: 'nick'}))        
    setCurrUser({id: '', role: 'guest', nick: 'nick'});
}


