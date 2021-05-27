
const pjson = require('./package.json');
const express = require('express');
const webApplication = express();

const HOST = '0.0.0.0';
const port = 8080;

var getHandler = function(request, response) {
  const idValue = parseInt(Math.random() * 1000000, 10);
  console.log(`${pjson.version} and ${idValue}`);
  response.send(`${pjson.version} and ${idValue}`)
}

webApplication.get('/hello', getHandler);

const server = webApplication.listen(port, async () => {
  try {
    console.log(`Eduard Example app v ${pjson.version} listening at http://${HOST}:${port}`);
  } catch {
    server.close();
  }
});
