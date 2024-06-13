const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about', (_req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.listen(port, () => {
    console.log(`server running on: http://localhost:${port}`)
})