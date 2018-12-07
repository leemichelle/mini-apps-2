const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000, () => {console.log('listening on 3000')});