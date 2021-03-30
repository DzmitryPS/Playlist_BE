require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;
const Sequelize = require('sequelize');

const connector = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});


const authenticateToDatabase = async (connector) => {
  try {
    await connector.authenticate();
    console.log('Succesfully connected to the db')
  } catch (err) {
    console.log(`Something failed on the DB connection: ${err}`)
  }
}

authenticateToDatabase(connector)

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.record = require('../models/record.model')(Sequelize, connector);

module.exports = db;