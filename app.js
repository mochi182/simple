
const createError = require('http-errors');
const express = require('express')
const app = express()
const port = 80 || 8080 || 3000

// ...

app.get('/', (req, res) => {
  res.send('<h1>API simple</h1>')
})

app.get('/ruta', (req, res) => {
    res.send('<h1>Ruta</h1>')
})

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler

app.use(function(err, req, res) {
    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})