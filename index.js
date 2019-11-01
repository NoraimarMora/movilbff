var express = require('express');
var app = express();
var cors = require('cors');
var router = require('./router/router')
var bodyParser = require('body-parser');
var {PORT, SERVER_HOSTNAME} = require('./config');
var timeout = require('connect-timeout')

app.use(cors())
app.use(timeout(10000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Backend For Frontend para aplicacion movil")
})

app.use(router)

app.use(haltOnTimedout)

function haltOnTimedout (req, res, next) {
    if (req.timedout) res.status(504).send({status: 504})
}

app.listen(PORT, () => {
    console.log(`Server running correctly in the url: http://${SERVER_HOSTNAME}:${PORT}`);
});

// server.setTimeout(10000);