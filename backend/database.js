const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { request } = require('express');
const session = require('express-session');

const selectAllUsers = 'SELECT * FROM user_login_information';
const selectPosts = 'SELECT * FROM post_details';

//create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456789',
	port: '3306',
	database: 'user_information',
});

const app = express();

app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('connection is established');
});

app.get('/', (req, res) => {
	res.send('go to /users to see server details');
});

app.get('/users', (req, res) => {
	db.query(selectAllUsers, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.get('/posts', (req, res) => {
	db.query(selectPosts, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

app.post('/auth', (req, res) => {
	var userEmail = request.body.userEmail;
	var password = request.body.password;
	if (userEmail && password) {
		db.query(
			'SELECT * FROM accounts WHERE user_email= ? AND user_password = ?',
			[userEmail, password],
			(error, results, fields) => {
				if (results.length > 0) {
					request.session.loggedin = ture;
					request.session.userEmail = userEmail;
					res.redirect('/home');
				} else {
					res.send('Incorrect Email and/or password');
				}
				res.end();
			}
		);
	} else {
		res.send('please enter email address and password');
		res.end();
	}
});

app.get('/home', function (request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.userEmail + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
app.listen('3000', () => {
	console.log('server started on port 3000');
});
