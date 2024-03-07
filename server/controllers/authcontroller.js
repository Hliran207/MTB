const User = require('../models/userParent') 


const registerUser= async (req,res) => {
     try {
        const {name, emailParent, emailChild, password} = req.body;
        // check if name was enterd
        if (!name) {
            return res.json({
                error: 'name is required'
            })
        }
        // check if password was enterd
        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required and should be at least 6 characters long'
            })
        }
        // check if email was enterd and not exist
        const existP = await User.findOne({emailParent});
        if (existP) {
            return res.json({
                error: 'email is already taken'
            })
        }
        const user = await User.create({
            name, emailParent, emailChild, password
        })
        
        return res.json(user);
     } catch (error) {
        console.log(error);
     }
}

module.exports = {
    registerUser
}