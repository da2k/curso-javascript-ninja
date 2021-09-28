/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (param) => param ? true:false;
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
//console.log(isTruthy());
//console.log(isTruthy(''));
//console.log(isTruthy(""));
//console.log(isTruthy(0));
//console.log(isTruthy(undefined));
//console.log(isTruthy(null));
//console.log(isTruthy(false));
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
//console.log(isTruthy(1));
//console.log(isTruthy(2));
//console.log(isTruthy(3));
//console.log(isTruthy(4));
//console.log(isTruthy(" "));
//console.log(isTruthy("a"));
//console.log(isTruthy('r'));
//console.log(isTruthy(8));
//console.log(isTruthy(9));
//console.log(isTruthy("amem"));

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
let carro = {marca: "Jaguar", modelo: "TurboSS", placa:"abc:123", ano:2021, cor:"Red", quantasPortas:4, assentos:5, quantidadePessoas:0};
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
 carro.mudaCor = (cor) => carro.cor = cor;
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => carro.cor;
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
 carro.obterMarca = () => carro.marca;
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => `Esse carro é um ${carro.marca} ${carro.modelo}`;
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos. 
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPeople = (num) => {
    if(num >= 1){
   if ((carro.quantidadePessoas + num) > 5){
   return  carro.quantidadePessoas === 4  ?
      `Só cabem + ${carro.assentos - carro.quantidadePessoas} pessoa`:
   `Só cabem + ${carro.assentos - carro.quantidadePessoas} pessoas`;
}
   if (carro.quantidadePessoas === 5)
   return `O carro está lotado`
   carro.quantidadePessoas += num;
}else{
    carro.quantidadePessoas += num;
}
    return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
}
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carr
*/
//console.log(carro.obterCor()); // Red
// Mude a cor do carro para vermelho.
carro.mudaCor("preto");
// E agora, qual a cor do carr
//console.log(carro.obterCor()); //preto
// Mude a cor do carro para verde musgo.
carro.mudaCor("verde");
// E agora, qual a cor do carr
//console.log(carro.obterCor()); //verde
// Qual a marca e modelo do carr
//console.log(carro.obterMarcaModelo()); // Esse carro é um Jaguar TurboSS
// Adicione 2 pessoas no carro.
//console.log(carro.addPeople(2)); // Já temos 2 pessoas no carro!
// Adicione mais 4 pessoas no carro.
//console.log(carro.addPeople(4)); // Já temos 4 pessoas no carro!
// Faça o carro encher.
console.log(carro.addPeople(5)); // Já temos 5 pessoas no carro!
// Tire 4 pessoas do carro.
console.log(carro.addPeople(-4)); // Já temos 1 pessoas no carro!
// Adicione 10 pessoas no carro.
console.log(carro.addPeople(10)); // Só cabem + 4 pessoas


// Quantas pessoas temos no carr
console.log(carro.quantidadePessoas); //1
