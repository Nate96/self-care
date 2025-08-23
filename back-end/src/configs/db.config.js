const dotenv = require('dotenv').config()

const DbConfig = {
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER, 
	database: process.env.DB_NAME,
	options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

module.exports = { DbConfig }