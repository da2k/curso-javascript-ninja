# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
    return x ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))

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
    modelo: 'Opala',
    placa: 'dez1010',
    ano: 87,
    cor: 'Preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor (cor){
    carro.cor = cor
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor (){
    return `A cor do ${carro.modelo} é ${carro.cor}`
}


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo (){
    return `Esse carro é um ${carro.marca} ${carro.modelo}`
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
var addPessoasNoCarro = function(pessoas){
    if (carro.quantidadePessoas + pessoas === carro.assentos){
        carro.quantidadePessoas +=pessoas
        return `O carro já está lotado!`
    }
   

    if (carro.quantidadePessoas + pessoas > carro.assentos){
        return `Só cabem mais ${carro.assentos - carro.quantidadePessoas}`
    }

    if (carro.quantidadePessoas + pessoas < carro.assentos){
        carro.quantidadePessoas += pessoas
        if (carro.quantidadePessoas === 1){
            return `Já temos ${carro.quantidadePessoas} pessoa no carro`
        } else {
            return `Já temos ${carro.quantidadePessoas} pessoas no carro`
        }
        
    }
    
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(obterCor())//`A cor do Opala é Preta`

// Mude a cor do carro para vermelho.
mudarCor('vermelho')


// E agora, qual a cor do carro?
console.log(obterCor())//`A cor do Opala é vermelho`

// Mude a cor do carro para verde musgo.
mudarCor('verde musgo')

// E agora, qual a cor do carro?
console.log(obterCor())//`A cor do Opala é verde musgo`

// Qual a marca e modelo do carro?
console.log(obterMarcaModelo())//`Esse carro é um Chevrolet Opala`


// Adicione 2 pessoas no carro.
console.log(addPessoasNoCarro(2))//Já temos 2 pessoas no carro

// Adicione mais 4 pessoas no carro.
console.log(addPessoasNoCarro(4))//Só cabem mais 3

// Faça o carro encher.
console.log(addPessoasNoCarro(3))//O carro já está lotado!

// Tire 4 pessoas do carro.
console.log(addPessoasNoCarro(-4))//Já temos 1 pessoa no carro

// Adicione 10 pessoas no carro.
console.log(addPessoasNoCarro(10))//Só cabem mais 4

// Quantas pessoas temos no carro?
console.log(carros.quantidadePessoas)//1
```
