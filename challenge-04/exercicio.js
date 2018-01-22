var isTruthy = function( x ) {
  if(x) {
    return true;
  } return false;
}

var isTruthy = function( x ) {
  return x ? true : false;
}

var carro = {
  marca: 'Volkswagen',
  modelo: 'Gol',
  placa: 'XHZ - 2020',
  ano: 2012,
  cor: 'branco',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

carro.mudarCor = function( cor ) {
  carro.cor = ( cor );
};

carro.obterCor = function() {
  return carro.cor;
};

carro.obterModelo = function() {
  return carro.modelo;
};

carro.obterMarca = function() {
  return carro.marca;
};

carro.obterMarcaModelo = function() {
  return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo() + '';
 };

carro.adicionarPessoas = function( numeroPessoas ) {
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
  var pluralOuSingular = quantasPessoasCabem && totalPessoas === 1 ? ' pessoa' : ' pessoas';

  if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
    return 'O carro já está lotado!';
  }

  if( totalPessoas > carro.assentos) {
    return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!';
  }

  carro.quantidadePessoas += numeroPessoas;
  return 'Já temos ' + carro.quantidadePessoas + pluralOuSingular +' no carro!';
}
