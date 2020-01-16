// # Desafio da semana #4

// ```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (arg) => {
    return arg ? 'Verdadeiro' : 'Falso'
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0))
console.log(isTruthy(''))
console.log(isTruthy(""))
console.log(isTruthy(NaN))
console.log(isTruthy(undefined))
console.log(isTruthy(null))
console.log(isTruthy(![]))
console.log(isTruthy(!{}))
console.log(isTruthy(!true))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy(' '))
console.log(isTruthy('Teste'))
console.log(isTruthy("Teste"))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(!NaN))
console.log(isTruthy(!null))
console.log(isTruthy(!undefined))
console.log(isTruthy(true))
console.log(isTruthy(function myFunc() { }))


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
    placa: 'LTU-8762',
    ano: 2022,
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
carro.addPessoas = (numeroPessoas) => {
    var pessoaPlural
    var totalDisponivel = 0;
    totalDisponivel = carro.assentos - carro.quantidadePessoas;
    if (carro.assentos === carro.quantidadePessoas) {
        return "O carro já está lotado!";
    }
    if (totalDisponivel !== 0 && numeroPessoas > totalDisponivel) {
        return `Só cabem mais ${totalDisponivel} ${pessoaPlural}`;
    }
    if (totalDisponivel === 1 && numeroPessoas > totalDisponivel) {
        return `Só cabem mais ${totalDisponivel} ${pessoaPlural}!`;
    }
    carro.quantidadePessoas += numeroPessoas;
    pessoaPlural = carro.quantidadePessoas === 1 ? 'pessoa' : 'pessoas'
    return `Já temos ${carro.quantidadePessoas} ${pessoaPlural} no carro!`;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()) // prata

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Verde Musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()) // Esse carro é um Jeep Renegade!

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(1)) // Já temos 1 pessoa no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4)) // Já temos 5 pessoas no carro!

// Faça o carro encher.
console.log(carro.addPessoas(1)) // O carro já está lotado!

// Tire 4 pessoas do carro.
carro.quantidadePessoas - 4

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10))

// Quantas pessoas temos no carro?
console.log(carro.addPessoas(1)) // 0