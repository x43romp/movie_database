const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'movie_database'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', (req, res) => {
  const { username, password, confirmPassword } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).json({ success: false, message: 'Server error' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ success: false, message: 'Username already exists' });
    } else {
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (error, results) => {
        if (error) {
          console.error('Error inserting into the database:', error);
          res.status(500).json({ success: false, message: 'Server error' });
          return;
        }
        
        res.json({ success: true });
      });
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).json({ success: false, message: 'Server error' });
      return;
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
