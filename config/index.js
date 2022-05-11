require('dotenv').config();

const config = {
    env: process.env.NAME,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_HOSTNAME
}

module.exports = config;