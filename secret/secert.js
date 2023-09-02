require('dotenv').config();

const port = process.env.PORT || 8000;

const db_url = process.env.DATABASE_URL;

module.exports = { port, db_url };