let express = require('express');
let fetch = require('node-fetch'); //can also use npm request module

let bodyParser = require('body-parser');
let app = express();
let path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

app.get('/price', (req, res) => {
  fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
});

app.listen(3000, () => {console.log('listening on 3000')});