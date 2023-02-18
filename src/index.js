const express = require('express')
const app = express()

app.get('/probes', (req,res) => {  
      res.send("Liste des sondes")
    })

app.listen(8081, () => {  console.log('Serveur à l\'écoute')})


