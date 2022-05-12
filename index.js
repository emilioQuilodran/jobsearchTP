const express = require('express');
const {port} = require('./config');
const { connection } = require('./config/db');
const cors = require('cors')

const users = require('./controllers/routes/users');
const auth = require('./controllers/routes/auth');
const jobs = require('./controllers/routes/jobsOffer')
connection()
//comment index
const app = express();

app.use(cors());
app.use(express.json());

auth(app)
users(app)
jobs(app)

app.listen(port, ()=> {
    console.log('server running on port ', port);
});

