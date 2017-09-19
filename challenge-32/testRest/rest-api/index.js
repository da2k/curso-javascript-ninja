'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

var users = {
  jose: {
    name: 'José',
    idade: 20
  },
  maria: {
    nome: 'Maria',
    idade: 22
  },
  fernando: {
    nome: 'Fernando',
    idade: 20
  }
}

app.use(cors());

app.get('/', function(req, res){
  res.send('<h1>OPA</h1>');
});

// app.get('/user/:username', function(req, res){
//   // Quando vc coloca : significa que é uma variável.
//   res.send(req.params.username); // Quando vc colocar a variável vc consegue passar ela através do metodo params
// });
app.get('/user/:username', function(req, res){
  var username = req.params.username;

  if (users[username]){
    return res.json(users[username]);
  }

  res.status(404).json({erro: 'usuário não encontrado'}); // ao passar aqui o status você retorna o erro para o front-end

});

app.listen(4000);
