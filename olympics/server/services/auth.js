const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    generateAccessToken: function(user) {

        return jwt.sign({
            name: user.name,
            role: user.role,
            img: user.img,
            sport: user.sport,
            email: user.email
        }, process.env.JWT_ACCESS_SECRET,{
            expiresIn: '180s'
        })

    },

    generateRefreshToken: function(user) {

        return jwt.sign({
            name: user.name,
            role: user.role,
            img: user.img,
            sport: user.sport,
            email: user.email
        }, process.env.JWT_REFRESH_SECRET,{
            expiresIn: '1d'
        })

    },

    login: async (req,res) => {

        try {

            let email = req.body.email;
            let password = req.body.password;
            let user = await User.findOne({email});
            
            if (!user) {
                return res.status(401).json({err: `Email ${email} not found`})
            }

            let match = await bcrypt.compare(password, user.password);

            if (!match)
                return res.status(401).json({err: `Invalid password ${password}`});

            let accessToken = generateAccessToken(user);
            let refreshToken = generateRefreshToken(user);

            // We don't keep accessToken at the backend,
            // But we keep refreshToken:

            const updatedUser = await User.findByIdAndUpdate(user.id, 
                {refreshToken},{ new:true })

            res.status(201).json({auth:true,accessToken,refreshToken,msg: 'Congratulations! You\'ve logged in!'});

        } catch(err) {

            console.log(`err: \n${err.message}`)
            res.status(500).json({err: err.message})

        }

    }

}