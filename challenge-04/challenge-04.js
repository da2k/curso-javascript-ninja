// # Desafio da semana #4


/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (arg) => {
    return arg ? 'verdadeiro' : 'falso'
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0))
console.log(isTruthy(''))
console.log(isTruthy(""))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(undefined))
console.log(isTruthy(!true))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy(' '))
console.log(isTruthy(" "))
console.log(isTruthy('teste 1'))
console.log(isTruthy("teste 2"))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(!false))
console.log(isTruthy(!undefined))
console.log(isTruthy(!null))

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
let carro = {
    marca: 'Jeep',
    modelo: 'Renegade',
    placa: 'LTM-8744',
    ano: 2020,
    cor: 'Prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) => {
    carro.cor = cor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}.`
}
console.log(carro.obterMarcaModelo())
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
carro.addPessoas = (passageiros) => {
    let totalPessoas = carro.quantidadePessoas + passageiros
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas
    let pluralOuSingular = totalPessoas === 1 ? 'pessoa' : 'pessoas'


    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return 'O carro já está lotado'
    } else if (totalPessoas > carro.assentos) {
        return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular}!`
    }
    carro.quantidadePessoas += passageiros

    return `Já temos ${carro.quantidadePessoas} ${pluralOuSingular} no carro!`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()) // Prata

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Verde Musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(1)) // Já temos 2 pessoas no carro

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4)) // Já temos 4 pessoas no carro

// Faça o carro encher.
console.log(carro.addPessoas(5)) // O carro já está lotado

// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4)) // Já temos 1 pessoa no carro

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10)) // Só cabem mais 4 pessoas no carro

// Quantas pessoas temos no carro?
console.log(carro.addPessoas(0)) // Já temos 1 pessoa no carro 