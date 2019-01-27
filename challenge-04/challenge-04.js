var isTruthy = function(x){
  return !!x
}
// console.log(isTruthy({}));


var carro = {
  marca: 'fiat',
  modelo: 'uno',
  placa: 'sda1212',
  ano : 2018,
  cor: 'azul',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
}

function obterCor(){
  return carro.cor
}
function obterModelo(){
  return carro.modelo
}
function obterMarca(){
  return carro.marca
}

function obterMarcaModelo(){
  return 'Esse carro é um '+ carro.marca +' '+ carro.modelo +' '
}

// console.log(carro);
// console.log(obterCor());
// console.log(obterModelo());
// console.log(obterMarca());
// console.log(obterMarcaModelo());


function addpeople(x){
  var totalpessoas = carro.quantidadePessoas + x
  var quantocabe =  carro.assentos - carro.quantidadePessoas
  var pluralOuSingular = quantocabe === 1 ? 'pessoa' : 'pessoas';

  if (quantocabe == 0) {
    return 'o carro ta lotado'
  }

  if (totalpessoas > carro.assentos) {
    return 'Só cabe mais '+ quantocabe +' '+ pluralOuSingular +'!'
  }


  carro.quantidadePessoas += x
  return 'Já temos '+ totalpessoas+' pessoas no carro'
}


console.log(addpeople(3));
console.log(addpeople(3));

// console.log(addpeople(8));
