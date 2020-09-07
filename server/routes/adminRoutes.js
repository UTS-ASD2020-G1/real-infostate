const User = require('../models/user')
const adminRouter = require('express').Router()

// GET: get all users
adminRouter.get('/users', async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})

// GET: specific user
adminRouter.get('/users/:id', async (req, res) => {
    const user = await User.find({_id: req.params.id})
    if(user){
    res.status(200).json(user)
    } else{
        res.status(404).json({
            error: 'User not found'
        })
    }
})

// PUT: edit specific user details
adminRouter.put('/users/:id', async (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body.user }, {new: true})
    .then( updatedUser => {
        res.status(200).json(updatedUser.toJSON())
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: 'Something Wrong'
        })
    })
})

// DELETE: delete user
adminRouter.delete('/users/:id', async (req, res) => {
    try{
        await User.findByIdAndRemove(req.params.id);
        res.status(204).end();
    } catch(error){
        console.log(error)
        res.status(500).json({
            error: 'Something Wrong'
        })
    }
})

module.exports = adminRouter