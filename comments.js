// Create web server

// Import express module
const express = require('express');

// Import body-parser module
const bodyParser = require('body-parser');

// Import mysql module
const mysql = require('mysql');

// Create express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Use JSON
app.use(bodyParser.json());

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comment'
});

// Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE comment';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Post table created...');
    });
});

// Create table
app.get('/createcommenttable', (req, res) => {
    let sql = 'CREATE TABLE comment(id int AUTO_INCREMENT, post_id int, body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Comment table created...');
    });
});

// Create post
app.post('/addcomment', (req, res) => {
    let comment = { post_id: req.body.post_id, body: req.body.body };
}); // Add closing curly brace here
