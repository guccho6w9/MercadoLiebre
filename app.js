const express = require('express');

const path = require('path');

 

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

const publicPath = path.join(__dirname, 'public');

 

app.use(express.static(publicPath));



const port = 3000

app.listen(port,()=> console.log(`http://localhost:${port}`));