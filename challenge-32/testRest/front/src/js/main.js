(function() {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('POST', 'http://localhost:4000/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=roberto&user=Roberto&age=32');

  console.log('Cadastrando usuario...');

  ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 ){
      console.log('Usuario cadastrado', ajax.responseText)
    }
  }


  var get = new XMLHttpRequest();
  get.open('GET', 'http://localhost:4000/user/joao');
  get.send();

  get.onreadystatechange = function(){
    if (get.readyState === 4) {
      console.log('Get do server', get.responseText)
    }
  }


})()
