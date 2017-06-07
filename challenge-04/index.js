
// var isTruthy = function(param){

//   return !!param;


// };

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
// isTruthy(false);
// isTruthy(null);
// isTruthy(undefined);
// isTruthy('');
// isTruthy('');
// isTruthy(-0);
// isTruthy(NaN);

function isTruthy(arg1){


//   if (arg1 === undefined){
//     return true;
//   } else {
//     return false;
//   }


  if ( arg1 === null){
    return 'xuxa';
  }

}




/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
  marca: 'Wolkswagen',
  modelo: 'Fusca',
  placa: '000KYBJ',
  ano: 1988,
  cor: 'Preto',
  quantasPortas: 2,
  assentos: 5,
  quantidadePessoas: 0

}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(argCor){
  carro.cor = argCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
  return 'Esse carro é um: ' + carro.marca + ' ' + carro.modelo;
}

  // Antes do video
  /*
carro.addPessoasCarro = function(nPessoas){


  // carro.quantidadePessoas += nPessoas

  // var qtdPessoasNoCarro = carro.quantidadePessoas;
  // var qtdAssentosNoCarro = carro.assentos;

  // var assentosRestantes = qtdAssentosNoCarro - qtdPessoasNoCarro;


  // var msg = 'Já temos ' + qtdPessoasNoCarro + ' pessoas no carro!';







  //   if(qtdPessoasNoCarro > qtdAssentosNoCarro){

  //     if(nPessoas > qtdAssentosNoCarro) {

  //       console.log('xyuxa');

  //       if(assentosRestantes > qtdAssentosNoCarro - 1){


  //         return 'Só cabem mais ' + qtdAssentosNoCarro + 'pessoa!';
  //       }

  //       return 'Só cabem mais ' + assentosRestantes + ' pessoas!';

  //     }

  //   }

  //   if(qtdPessoasNoCarro >= qtdAssentosNoCarro) {
  //     return 'O carro já está lotado!';
  //   }

  // return msg;



}
*/
carro.adicionarPessoas = function(numeroPessoas){
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
  var plurarlOuSingular = quantasPessoasCabem === 1 ? ' pessoa '  : ' pessoas ';

  if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return 'O carro ja está lotado'
  }

  if(totalPessoas > carro.assentos) {
    return 'Só cabem mais ' + quantasPessoasCabem + plurarlOuSingular + 'no carro!';
  }

  carro.quantidadePessoas += numeroPessoas;


  return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}
