const compression = require('compression');
const express = require('express');
const config = require('../config');
const port = config.publish.port;
const app = express();

app.use(require('connect-history-api-fallback')());


app.use(compression());

const cacheDuration = 1000 * 60 * 60;
app.use(express.static('./dist' , {maxAge: cacheDuration} ));
console.log('server start , port : ' + port);
app.listen(port);
