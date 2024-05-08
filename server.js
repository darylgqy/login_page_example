const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample user data (replace with your authentication logic)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Successful login
        res.set('Username', username);
        res.set('Password', password);
        res.send('Login successful!');
    } else {
        // Unsuccessful login
        res.status(401).send('Login failed. Invalid username or password.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});