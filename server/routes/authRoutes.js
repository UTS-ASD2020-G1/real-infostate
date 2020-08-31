const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authRouter = require('express').Router()

const User = require('../models/user')
const Admin = require('../models/admin')
const config = require('../utils/config')

authRouter.post('/login', async (req,res) => {
    const body = req.body

    if(body.type == 'user'){
    const user = await User.findOne({ username: body.username})
    const passwordCorrect = user === null ? false 
    : await bcrypt.compare(body.password, user.password);

    if(!(user && passwordCorrect)){
        return res.status(401).json({
            error: 'invalid username and password'
        });
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken, config.TOKEN)
    res.status(200).send({token, username: user.username, id: user._id})
} else if(body.type == 'admin') {
    const body = req.body

    const admin = await Admin.findOne({ username: body.username})
    const passwordCorrect = admin === null ? false 
    : await bcrypt.compare(body.password, admin.password);

    if(!(admin && passwordCorrect)){
        return res.status(401).json({
            error: 'invalid username and password'
        });
    }

    const adminForToken = {
        username: admin.username,
        id: admin._id
    }

    const token = jwt.sign(adminForToken, config.TOKEN)

    res.status(200).send({token, username: admin.username, id: admin._id})
} else {
    res.status(401).send({ message: "Something wrong"})
}
})

module.exports = authRouter
