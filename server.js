const express = require('express');
const app = express();
const port = 32769;
app.use(express.static('.'))

app.get('/', (_, res) => {
    res.sendFile('/index.html');
});

app.listen(port, () => { console.log(`Servidor iniciado na porta ${port}`); });
