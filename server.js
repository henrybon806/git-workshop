const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>Its me!</p>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});