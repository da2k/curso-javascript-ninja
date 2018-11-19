# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
 var isTrusthy = function (x) {
... return x ? true:false;
... };

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

  isTrusthy(undefined)
false
  isTrusthy(null)
false
  isTrusthy(NaN)
false
  isTrusthy('')
false
  isTrusthy(0)
false
  isTrusthy(-0)
false
 isTrusthy(false)
false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

 isTrusthy(true)
true
  isTrusthy(10)
true
   isTrusthy("Marcel")
true
 isTrusthy('0')
true
 isTrusthy('false')
true
 isTrusthy('true')
true
 isTrusthy(123)
true
 isTrusthy(-123)
true
 isTrusthy(1000)
true
 isTrusthy('1000')
true

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
var carro ={marca:'vw',modelo:'fusca',placa:'AAA-0000',ano:2000,cor:'azul',quantasPortas:4,assentos:5,quantidadePessoas:0};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
... carro.cor=cor;
... };

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function () {
... return carro.cor;
... };

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
... return carro.modelo;
... };

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function () {
... return carro.marca;
... };

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
    return "Esse carro é um "+carro.obterMarca()+" "+carro.obterModelo();
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
?


carro.adicionaPessoa = function(pessoas) {
	var totalNoCarro = carro.quantidadePessoas+pessoas;	
    if (totalNoCarro===carro.assentos && totalNoCarro >= carro.assentos) {
		return "O carro já está lotado";
		};	
	if (totalNoCarro>carro.assentos){
			var lugaresVagos = carro.assentos -carro.quantidadePessoas;			
			var plural = lugaresVagos === 1? 'pessoa':'pessoas';
			return "Só cabem mais "+(carro.assentos-carro.quantidadePessoas)+" "+plural;
		};
	carro.quantidadePessoas +=pessoas;		
	return "Já temos "+carro.quantidadePessoas+" no carro";
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //"azul"

// Mude a cor do carro para vermelho.

carro.mudarCor("vermelho") //undefined

// E agora, qual a cor do carro?

carro.obterCor() //"vermelho"

// Mude a cor do carro para verde musgo.

carro.mudarCor("Verde Musgo")  //undefined

// E agora, qual a cor do carro?

carro.obterCor()  //"Verde Musgo"

// Qual a marca e modelo do carro?

carro.obterMarcaModelo()  // "Esse carro é um vw fusca"

// Adicione 2 pessoas no carro.

carro.adicionaPessoa(2) //"Já temos 2 no carro"

// Adicione mais 4 pessoas no carro.

carro.adicionaPessoa(4)  //"Só cabem mais 3 pessoas"

// Faça o carro encher.

carro.adicionaPessoa(3) //"Já temos 5 no carro"

// Tire 4 pessoas do carro.

carro.adicionaPessoa(-4) //"Já temos 1 no carro"

// Adicione 10 pessoas no carro.

carro.adicionaPessoa(10)  //"Só cabem mais 4 pessoas"

// Quantas pessoas temos no carro?

carro.adicionaPessoa(0)  // "Já temos 1 no carro"
```
