const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>API simple</h1>')
})

app.get('/ruta', (req, res) => {
    res.send('<h1>Ruta</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})