const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, etc.)
app.use(express.static('public'));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (username === 'user' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
