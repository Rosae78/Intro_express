const express = require('express')
const app = express();
app.get('/', (req, res) => {
    // res.send('<h1>Inicio</>')
    res.sendFile('./views/index.html', {root:__dirname})
})
app.get('/about', (req, res) => {
    res.sendFile('./views/index.html', {root:__dirname})
})

app.use((req, res)=> {
    res.sendFile('./views/404.html', {root:__dirname})
})
//Redireccionar
app.get('/about-us', (req, res) => {
    res.redirect('/about')
}) 


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Express listening on port: ${PORT}`))