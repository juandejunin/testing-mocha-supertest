# testing-mocha-supertest

## ejecutar npm init -y

```
npm init -y
```

## crear carpeta src

## dentro de la carpeta crear un archivo llamado app.js

## instalar el modulo express que me va a permitir crear la REST api y el modulo morgan que me permitira ver las peticiones que llegan por consola.

```
npm i express morgan
```

## En el archivo app.js crear el servidor escribiendo el siguiente codigo: 

```
const express = require('express')
const app = express()

app.listen(9000)
console.log('Server on port 3000')
```

## posicionarse con la terminal en la carpeta src y ejecutar el servidor de la siguiente manera:

```
node app.js
```

## Detener el servidor (ctrl + c)

## Crear dentro de la carpeta src una carpeta llamada routes

## Dentro de la carpeta routes crear un archivo llamado userRoutes.js

## dentro del archivo userRoutes copiar el siguiente codigo

```
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
```

## Al archivo app.js agragar las dos lineas de codigo siguientes:

```
app.use(express.json())
app.use('/users', require('./routes/userRoutes'))
```

## De este modo app.js se vera de la siguiente manera:

```
const express = require('express')
const app = express()

app.use(express.json)
app.use('/users', require('./routes/userRoutes'))

app.listen(3000)
console.log('Server on port 3000')
```
