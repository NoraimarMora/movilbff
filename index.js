var express = require('express');
var app = express();
var router = require('./router/router')
var bodyParser = require('body-parser');
var {PORT, SERVER_HOSTNAME} = require('./config');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Backend For Frontend para aplicacion movil")
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running correctly in the url: http://${SERVER_HOSTNAME}:${PORT}`);
});