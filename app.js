
const pjson = require('./package.json');
const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const port = 8080;

app.get('/', (req, res) => {
  const idValue = parseInt(Math.random() * 1000000, 10);
  console.log(`${pjson.version} and ${idValue}`);
  res.send(`${pjson.version} and ${idValue}`)
});

const server = app.listen(port, async () => {
  try {
    console.log(`Example app v ${pjson.version} listening at http://${HOST}:${port}`);
  } catch {
    server.close();
  }
});
