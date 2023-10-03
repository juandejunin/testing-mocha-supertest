const {Router}= require('express')
const userRouter = Router()

/**
 * get all users
 */

userRouter.get('/', (req,res) => {
    return res.json('all users sent')
})

/**
 * Get a specific user
 */

userRouter.get('/:id', (req,res) => {
    if(req.params.id === "u0001"){
        return res.json('user found')
    }
   return res.status(400).json('user not found')
})

/**
 * Add user
 */
userRouter.post('/', (req,res)=> {
    const {username, password} = req.body
    if(username && password){
        return res.status(201).json('User created')
    }
    res.json(400).json('user not created')
})

module.exports = userRouter