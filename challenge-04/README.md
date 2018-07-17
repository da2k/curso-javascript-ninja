# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (x){
	if (x){
	return true
}
return false	
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy('')

isTruthy(false)

isTruthy(undefined)

isTruthy(-0)

isTruthy(0)

isTruthy(null)

isTruthy(NaN)

isTruthy("")

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy("x")

isTruthy('x')

isTruthy(10)

isTruthy(-10)

isTruthy(true)

isTruthy([])

isTruthy({})

isTruthy(10.5)

isTruthy(0.5)

isTruthy(Symbol)

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
    marca: 'fiat', 
    modelo: 'uno', 
    placa: 'nzq2704', 
    ano: 2010,
    cor: 'branco',
    quantasPortas: 4, 
    assentos: 5,
    quantidadePessoas: 0
}
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarcor = function(newcor){carro.cor = newcor };

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function (){return carro.cor }

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function (){return carro.modelo }

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function (){return carro.marca }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){return "Esse carro é um "+ carro.obterMarca() +" "+ carro.obterModelo() +""}

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
carro.addpeople = function(x){		

if (x > carro.assentos){
	return "Só cabem mais "+ carro.assentos +" pessoas!"

 } else if(carro.quantidadePessoas < 5 && carro.assentos >= 0){
	carro.quantidadePessoas += x;
	carro.assentos -=x;
	return "Ja temos "+ carro.quantidadePessoas +" pessoas no carro!"	
}

return "Ta lotado jao"	

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
