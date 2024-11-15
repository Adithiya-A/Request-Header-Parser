// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Rota para /api/whoami
app.get('/api/whoami', (req, res) => {
  // Obter o endereço IP do cliente usando req.socket
  const ipaddress = req.ip || req.socket.remoteAddress;

  // Obter o idioma preferido do cabeçalho Accept-Language
  const language = req.headers['accept-language'];

  // Obter o software (User-Agent) do cabeçalho User-Agent
  const software = req.headers['user-agent'];

  // Retornar as informações em um objeto JSON
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
