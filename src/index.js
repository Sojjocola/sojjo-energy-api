const express = require('express')
const sqlite3 = require('sqlite3')

const app = express()


app.get('/probes', (req,res) => {  
      res.send("Liste des sondes")
    })

app.get('/admin/initdb', (req,res) => {

  let db = new sqlite3.Database('./data/settings.sqlite', err => {
    if(err){
      return console.error(err.message);
    }
    console.log('Connected to the settings database');
  });

  let createTableScript = `CREATE TABLE [IF NOT EXISTS] probes (
    probe_id INTEGER PRIMARY KEY,
    probe_name TEXT NOT NULL,
    probe_type INTEGER DEFAULT 16 NOT NULL,
    probe_enabled INTEGER DEFAULT 0 NOT NULL,
    probe_voltage_monitored INTEGER DEFAULT 230 NOT NULL,
    probe_calibration_value NUMERIC NULL
  )[WITHOUT ROWID];`

  db.run(createTableScript);


  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  })


});

app.listen(8082, () => {  console.log('Serveur à l\'écoute')})


