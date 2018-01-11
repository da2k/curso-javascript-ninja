# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTrusty = function(param){
	return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTrusty(null);
isTrusty(0);
isTrusty(-0);
isTrusty('');
isTrusty(understend);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTrusty(10);
isTrusty('caiua');
isTrusty({a: 'a'});
isTrusty([1,2,3]);
isTrusty(function(){});
isTrusty(true);
isTrusty(4-1);
isTrusty('ninja');
isTrusty(10.2);
isTrusty(-10);
isTrusty('machine learning');

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
carro = {
	marca: 'Chevrolet',
	modelo: 'Corsa',
	placa: 'MXR-2666',
	ano: 2002,
	cor: 'Branco',
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
	this.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function (){
	return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
	return this.modelo;
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
	return "Esse carro é um "+this.obterMarca()+" "+this.obterModelo();
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
carro.adcPessoasCarro = function (qtd){
    if(qtd > this.assentos || this.quantidadePessoas === this.assentos){
	return 'Lotacao do carro na capacidade maxima';
    }else{	
	var inserirPessoas = this.quantidadePessoas+qtd;
	if(qtd !== 0 && inserirPessoas <= this.assentos){
		this.quantidadePessoas = inserirPessoas;
		return 'Adicionado '+ qtd + ' Pessoas no Veiculo!';
        }else{
	   if( inserirPessoas > this.assentos){
		return 'A quantidade que desejas inserir ultrapassa a capacidade do Veiculo, só pode adicionar '
			+(this.assentos - this.quantidadePessoas)+' no Carro!';
	   }else{
        	return 'valores iguais a 0 não é permitido!';
	   }
        }
    }
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // branco;

// Mude a cor do carro para vermelho.
carro.mudaCor('Vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // verde musgo

// Qual a marca e modelo do carro?
carro.obterModelo(); // Corsa

// Adicione 2 pessoas no carro.

carro.adcPessoasCarro(2); // adicionado 2 pessoas no carro;

// Adicione mais 4 pessoas no carro.
carro.adcPessoasCarro(4); //não foi possivel adicionar pessoas, você só possui 3 vagas no carro;
// Faça o carro encher.
carro.adcPessoasCarro(3); // adicionado 3 pessoas;

// Tire 4 pessoas do carro.
carro.removerPessoasCarro(4); // removido 4 pessoas

// Adicione 10 pessoas no carro.
carro.adcPessoasCarro(10); // nao foi possivel adicionar pessoas, o carro só possui 4 vagas;

// Quantas pessoas temos no carro?
carro.quantidadePessoas; //1
```
