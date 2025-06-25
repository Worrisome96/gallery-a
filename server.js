import express from 'express'
var app = express()
app.get('/', (req, res) => res.send('OK'))
app.use('/gif', express.static('./'))
app.listen(4445)
