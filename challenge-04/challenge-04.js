/* # Desafio da semana #4 */


/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(param){
    return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy());
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy('')); // ou ""
console.log(isTruthy(0)); // ou -0

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log('------------------------------------------');

console.log(isTruthy(true));
console.log(isTruthy(5/2));
console.log(isTruthy(obj={nome: 'Daniel'}));
console.log(isTruthy(function(){}));
console.log(isTruthy(arr=[1,2,3]));
console.log(isTruthy('string'));
console.log(isTruthy(function(){arr[3,2,1]}));
console.log(isTruthy(3));
console.log(isTruthy(3>1));
console.log(isTruthy('seila'));

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
    marca: 'Chevrolet',
    modelo: 'Onix',
    placa: 'DBN-2506',
    ano: 2018,
    cor: 'Azul',
    assentos: 5,
    qts_portas: 4,
    qts_pessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function mudarCor(cor){
    carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function obterCor(){
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function obterModelo(){
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function obterMarca(){
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function obterMarcaModelo(){
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}.`;
};

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
carro.adicionar = function adicionar(addPessoas){

    var limite_pessoas = carro.qts_pessoas + addPessoas;
    var qts_pessoas_cabem = carro.assentos - carro.qts_pessoas;

    if(carro.qts_pessoas === carro.assentos && limite_pessoas > carro.assentos){
        return 'O carro já está lotado!';
    }

    if(limite_pessoas > carro.assentos){
        
        var p1 = carro.assentos === 1 ? 'pessoa': 'pessoas'; // p1 - vai pegar o total de assentos
        return `Só cabem mais ${qts_pessoas_cabem} ${p1}!`;
    }
    carro.qts_pessoas += addPessoas; // Vai acrescentando mais pessoas ao carro

    var p2 = carro.qts_pessoas === 1 ? 'pessoa': 'pessoas'; // p1 - vai pegar a total pessoas no carro
    return `Já temos ${carro.qts_pessoas} ${p2} no carro!`;
};
console.log('------------------------------------------');
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()); // Azul

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde musgo');

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // Verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Esse carro é um Chevrolet Onix.

// Adicione 2 pessoas no carro.
console.log(carro.adicionar(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionar(4)); // Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.adicionar(3)); // Já temos 5 pessoas no carro!
console.log(carro.adicionar(1)); // O carro já está lotado!
// Tire 4 pessoas do carro.
console.log(carro.adicionar(-4)); // Já temos 1 pessoa no carro!

// Adicione 10 pessoas no carro.
console.log(carro.adicionar(10)); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.qts_pessoas); // 1

