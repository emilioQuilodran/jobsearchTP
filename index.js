const express = require('express');
const {port} = require('./config');
const { connection } = require('./config/db');

const users = require('./controllers/routes/users');
const auth = require('./controllers/routes/auth');
const jobs = require('./controllers/routes/jobsOffer')
connection()
//comment
const app = express();

app.use(express.json());

auth(app)
users(app)
jobs(app)

app.listen(port, ()=> {
    console.log('server running on port ', port);
});