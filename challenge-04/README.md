# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
    return x ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy('');
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('Thiago');
isTruthy(true);
isTruthy(1);
isTruthy('1');
isTruthy(function();{});
isTruthy([]);
isTruthy({});
isTruthy(5+5);
isTruthy('Franchin');
isTruthy([a, b, c]);

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
car carro = {
   marca: 'Citroen',
   modelo: 'C3',
   placa: 'ABC1234',
   ano: 2005,
   cor: 'Prata',
   quantasPortas: 4,
   assentos: 5,
   quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(novacor){
    carro.cor = novacor;
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
    "Esse carro é um " + carro.obterMarca() + carro.obterModelo()
}

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
var addPessoas = function(){
    quantidadePessoas++;
    if(carro.quantidadePessoas <= 4){
        return 'Já temos '+ carro.quantidadePessoas + ' pessoas no carro!';
    }
    return 'O carro já está lotado!';
    if(carro.quantidadePessoas > 5){
        Só cabem mais carro.quantidadePessoas pessoas!    
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // Prata

// Mude a cor do carro para vermelho.
carro.obterCor('vermelho');

// E agora, qual a cor do carro?
Vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde musgo');

// E agora, qual a cor do carro?
carro.obterCor() // Verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();

// Adicione 2 pessoas no carro.
addPessoas();
addPessoas();

// Adicione mais 4 pessoas no carro.
addPessoas();
addPessoas();
addPessoas();
addPessoas();

// Faça o carro encher.
var addPessoas();

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();
addPessoas();


// Quantas pessoas temos no carro?
?
```
