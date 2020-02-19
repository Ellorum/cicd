const express = require('express')
const math = require('./math');


console.log(math.sum(1,1));

const app = express()
const port = 3000

app.get('/', (req, res) => res.status(200).send(math.sum(1,1).toString()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));