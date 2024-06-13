// Create web server
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Set up the port
const port = 3000;
// 4. Listen to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 5. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 6. Create another route
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});