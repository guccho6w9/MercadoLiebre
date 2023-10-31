const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});


const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
