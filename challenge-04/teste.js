var carro = {
  marca: 'corolla',
  modelo: 'X-RE',
  placa: 'ABC123',
  ano: 70,
  cor: 'amarelo',
  quantasPortas: 6,
  assentos: 5,
  quantidadePessoas: 0
}

carro.mudarCor = function(cor) {
  carro.cor = cor;
}
carro.obterCor = function() {
  return carro.cor;
}
carro.obterModelo = function() {
  return carro.modelo;
}
carro.obterMarca = function() {
  return carro.marca;
}
carro.obterMarcaModelo = function() {
  return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}
carro.adicionarPessoas = function(numeroPessoas) {
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  
  if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return 'O carro ja está lotado!';
  }
  
  if (totalPessoas > carro.assentos) {
    var quantidadePessoasCabem = carro.assentos - carro.quantidadePessoas;
    var plural = quantidadePessoasCabem === 1 ? 'Pessoa' : 'Pessoas';
    return "Só cabem mais "+ quantidadePessoasCabem +" "+ plural +"!"
  }
  
  carro.quantidadePessoas += numeroPessoas;
  return 'Ja témos ' + carro.quantidadePessoas + ' Pessoas no carro!';
}