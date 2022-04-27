const express = require('express');
const {port} = require('./config');
const { connection } = require('./config/db');
const app = express();
app.use(express.json());

connection()

app.get('/', (req, res) => {
   return res.json({msg: "hola mundo!!!"})
});


app.listen(port, ()=> {
    console.log('server running on port ', port);
});