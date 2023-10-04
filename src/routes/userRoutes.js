const {Router}= require('express')
const userRouter = Router()

/**
 * get all users
 */

userRouter.get('/', (req,res) => {
    return res.json({ message: 'All users sent' }); // Cambio aquí
})

/**
 * Get a specific user
 */

userRouter.get('/:id', (req,res) => {
    if(req.params.id === "U0001"){
        return res.json('user found')
    }
   return res.status(404).json("user not found")
})

/**
 * Add user
 */
userRouter.post('/', (req,res)=> {
    const {username, password} = req.body
    if(username && password){
        return res.status(201).json("user created");
    }
    res.status(400).json("user not created");
})

module.exports = userRouter