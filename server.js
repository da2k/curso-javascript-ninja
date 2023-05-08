const express = require('express');
const app = express();

app.use(express.static('.'))

app.get('/', (_, res) => {
    res.sendFile('/index.html');
});

app.listen(3000, () => { console.log('Servidor iniciado na porta 3000'); });
