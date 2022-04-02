const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User')

//Register
const registerUser = expressAsyncHandler(
    async (req, res) => {
        const { email, firstName, lastName, password } = req?.body;

        //check if the user is already registered;
        const userExists = await User.findOne({ email });
        if (userExists) throw new Error('Email already Exists');
        try {


            const user = await User.create({ email, firstName, lastName, password });
            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
    }

)



module.exports = { registerUser };