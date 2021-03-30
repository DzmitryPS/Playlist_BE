const express = require('express');
const db = require('./database/configs');
const Record = db.record;
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/", (req, res) => {
  Record.findAll()
    .then((data) => {
      res.send(JSON.stringify(data))
    })
    .catch((queryError) => console.error(`Query error: ${queryError}`))
});

db.connector
  .sync()
  .then(() => console.log('found current DB'))
  .catch((error) => console.error(`sync failed: ${error}`))

app.use((req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err)
})

module.exports = app;


