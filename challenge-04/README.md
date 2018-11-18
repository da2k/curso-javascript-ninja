# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (x){
	return !!x ? true : false
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(0); 
isTruthy(-0);
isTruthy();
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(-1);
isTruthy(1);
isTruthy("_");
isTruthy("f");
isTruthy("r");
isTruthy("e");
isTruthy("d");
isTruthy("null");
isTruthy("0");
isTruthy("Not a number");

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
	marca: "Tesla",
	modelo: "Fusca",
	placa: "F0DA1",
	ano: 2016,
	cor: "preto",
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(string){
	this.cor = string;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
	return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
	return this.Modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
	return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
	return "Esse carro é um " + this.marca + this.modelo;
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

carro.AddPessoa = function(numeroPessoas){
    disponiveis = this.assentos - this.quantidadePessoas;
    console.log( "Temos " + this.quantidadePessoas + " no carro e " + disponiveis + " assentos disponíveis");

    if(this.quantidadePessoas<this.assentos && disponiveis>= numeroPessoas){
            this.quantidadePessoas += numeroPessoas;
    }

    else{
            return "carro cheio";
    } 
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.obterCor(); // preto

// Mude a cor do carro para vermelho.

carro.mudarCor("vermelho");

// E agora, qual a cor do carro?

"vermelho"

// Mude a cor do carro para verde musgo.

carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?

"verde musgo"

// Qual a marca e modelo do carro?

carro.obterMarcaModelo = function(){
        return "Esse carro é um " + this.marca + this.modelo;
};


// Adicione 2 pessoas no carro.

carro.AddPessoa(2);

// Adicione mais 4 pessoas no carro.

carro.AddPessoa(4); //carro cheio

// Faça o carro encher.

carro.AddPessoa(0);

// Tire 4 pessoas do carro.

carro.RmvPessoa = function(pessoasRmv){
	carro = this.quantidadePessoas-= pessoasRmv; 
};

carro.RmvPessoa(4);


// Adicione 10 pessoas no carro.

carro.AddPessoa(10);

// Quantas pessoas temos no carro?

5 pessoas
```
