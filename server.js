const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/server/pages/index.html'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/server/pages/index.html');
});

app.listen(PORT, () => {
    console.log('Site iniciado na porta ' + PORT);
});