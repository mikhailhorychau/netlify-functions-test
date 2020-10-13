const express = require('exrpess');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);
app.pos('/', (req, res) => {
    res.json({
        message: 'All fine!'
    });
});

module.exports.handler = serverless(app);