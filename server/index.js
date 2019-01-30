const express = require('express');
const app = express();

const PORT = 3045;

app.get('/', (req, res) => {res.send('HELLO FROM THE OTHER SIDE')})


app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)});