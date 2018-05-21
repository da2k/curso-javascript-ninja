var isTruthy = function(arg) {
  return !!arg ? true : false;
};

var carro = {
  marca: "VW",
  modelo: "Fusca",
  placa: "JPK1233",
  ano: 2018,
  cor: "branco",
  quantasPortas: 2,
  assentos: 5,
  quantidadePessoas: 0
};

carro.mudarCor = function(cor) {
  carro.cor = cor;
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
  return "Esse carro é um " + carro.obterMarca() + ", " + carro.obterModelo();
};

carro.esvaziarCarro = function() {
  return (carro.quantidadePessoas = 0);
};

carro.addPessoas = function(numPessoas) {
  if (numPessoas === undefined) {
    return "Nenhum valor foi passado.";
  }

  if (numPessoas > 5) {
    return "Capacidade máxima do carro: " + carro.assentos + " pessoas.";
  }

  if (numPessoas === 0) {
    return "Ninguém foi incluido.";
  }

  if (numPessoas < 0) {
    return "Não é possível incluir um número de pessoas menor que zero";
  }

  if (numPessoas < carro.quantidadePessoas) {
    return "O carro já está cheio";
  }

  if (
    carro.assentos > carro.quantidadePessoas &&
    numPessoas > carro.assentos - carro.quantidadePessoas
  ) {
    return "Só cabem mais " + (carro.assentos - carro.quantidadePessoas) + "!";
  }

  carro.quantidadePessoas += numPessoas;
  return "Já temos " + carro.quantidadePessoas + " no carro!";
};

carro.tirarPessoas = function(quantidade) {
  return (carro.quantidadePessoas -= quantidade);
};

carro.obterQuantidadePessoas = function() {
  return carro.quantidadePessoas;
};
