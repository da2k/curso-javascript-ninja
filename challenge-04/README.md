# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(arg){
    return !!arg;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy() //false
isTruthy('') //false
isTruthy("") //false
isTruthy(0) //false
isTruthy(false) //false
isTruthy(null) //false
isTruthy(NaN) //false
isTruthy(undefined) //falsr

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('str') // true
isTruthy("str") // true
isTruthy(Number) // true
isTruthy(1) // true
isTruthy([]) // true
isTruthy({}) // true
isTruthy(function(){}) // true
isTruthy(1.5) // true
isTruthy(-1) // true
isTruthy(1 === 1) // true

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
    marca: 'GM',
    modelo: 'Kadett',
    placa: 'JSN2021',
    ano: 2021,
    cor: 'vermelho',
    qntsPortas: 2,
    assentos: 5,
    qntPessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor  =function (cor){
    carro.cor = cor
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
carro.obterModelo = function (){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function (){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro é um " + carro.marca + " " + carro.modelo
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
carro.entra = function(n){
    var disponiveis = carro.assentos - carro.qntPessoas;
    if(n != null){
        if(n <= disponiveis) {
            carro.qntPessoas += n;
            return "Já temos " + carro.qntPessoas + " pessoas no carro!"
        } else if (n > disponiveis && disponiveis === 1) {
            return "Só cabe mais " + disponiveis + " pessoa!"
        } else if (n > disponiveis && disponiveis > 1) {
            return "Só cabem mais " + disponiveis + " pessoas!"
        } else {
            return "O carro já está lotado!"
        }
    } else {
        return "Você deve inserir um parametro"
    }
    
} 






/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() // 'vermelho'

// Mude a cor do carro para vermelho.
carro.mudaCor('Branco')

// E agora, qual a cor do carro?
carro.obterCor() // 'Branco'

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde musgo')

// E agora, qual a cor do carro?
carro.obterCor() // 'Verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarca() // 'GM'

// Adicione 2 pessoas no carro.
carro.entra(2)   // 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.entra(4) // 'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.entra(3) // 'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.entra(-4) // 'Já temos 1 pessoas no carro!'

// Adicione 10 pessoas no carro.
carro.entra(-4) // 'Já temos 1 pessoas no carro!'

// Quantas pessoas temos no carro?
carro.entra(10) // 'Só cabem mais 4 pessoas!'

```
