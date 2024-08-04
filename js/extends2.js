class User {
    constructor(username,password,email,birthDate) {

        this.username = username;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate;
        this.loggedIn = false;

    }

    login() {
        /* check password and after this: */
        this.loggedIn = true;
        console.log(`${username} has logged in`)
    }
    
    logout() {
        this.loggedIn = false;
        console.log(`${username} has logged out`)
    }

    updateAvatar(imgUrl) {
        this.imgUrl = imgUrl;
    }
}

