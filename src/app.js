const express = require('express')
const app = express()

app.use(express.json)
app.use('/users', require('./routes/userRoutes'))

app.listen(9000)
console.log('Server on port 3000')