const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const PORT = 5000;
const app = express();

app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "librarydb"
})

db.connect(err => {
    if(err){
        console.log("connection to Database is failed");
    }else{
        console.log("Sucessfully connected to DataBase");
    }
})

app.post('/signup', (req,res) => {
    const {username,email,password} = req.body;
    const checkQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(checkQuery, [email, username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: "User already exists!" });
        }
        const insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(insertQuery, [username, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }
            res.status(201).json({ message: "User registered successfully!" });
        });
    });
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const checkQuery = "SELECT * FROM users WHERE username = ?";
    db.query(checkQuery, [username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (result.length === 0) {
            return res.status(400).json({ message: "User not found!" });
        }
        const user = result[0];
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password!" });
        }
        res.status(200).json({ 
            message: "Login successful!", 
            user: { id: user.id, username: user.username, email: user.email }
        });
    });
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result);
    });
});

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(result);
    });
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM books WHERE id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(result[0]); // send single book object
  });
});



app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});