const mongoose = require('mongoose');
const { dbUsername, dbPassword, dbHost, dbName } = require('.');

const connection = async () => {
    const url = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(url)
    console.log("mongo db connected:" ,conn.connection.host);
}

module.exports = {connection, mongoose}