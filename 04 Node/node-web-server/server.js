const express = require('express');
const app = express();
let name = '31Ram';

app.get('/', (req, res) => {
    res.send('Hello Migracod3e')
});

app.get("/nombre", function (req, res) {
    let name = req.query.name;
  res.send("Hola "+name+" estas en migracode!!");
});

app.listen(3000, () => console.log("Server is up and running"))