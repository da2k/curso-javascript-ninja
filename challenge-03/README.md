// Declarar uma variável qualquer, que receba um objeto vazio.
var pessoa = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: 'Kaio',
    sobrenome: 'Silveira',
    sexo: 'masculino',
    idade: 30,
    altura: 174,
    peso: 72,

    andando: function andando(x = false) {
        if (x == false) {
            console.log(`Nao esta em movimento`)
        }
        else {
            console.log(`Esta em movimento`)
        }
    },

    caminhouQuantosMetros: function caminhouQuantosMetros(x = 0) {
        var distanciaPercorrida = 0 + x
        console.log(`Andou ${distanciaPercorrida} metros`)
        pessoa.andando(distanciaPercorrida)
    }
}


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function fazerAniversario() {
    pessoa.idade++
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function andar(x) {
    metros = x
    pessoa.caminhouQuantosMetros(metros)
}

pessoa.caminhouQuantosMetros = function caminhouQuantosMetros(x = 0) {
    var distanciaPercorrida = 0 + x
    console.log(`Andou ${distanciaPercorrida} metros`)
    pessoa.andando(distanciaPercorrida)
}

pessoa.andando = function andando(x = false) {
    if (x == false) {
        console.log(`Nao esta em movimento`)
    }
    else {
        console.log(`Esta em movimento`)
    }
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function parar() {
    pessoa.andando(false)

}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function nomeCompleto(){
    var nome = pessoa.nome
    var sobrenome = pessoa.sobrenome

    console.log(`"Olá! Meu nome é ${nome} ${sobrenome}!`)

}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostraIdade = function mostraIdade(){
    var idade = pessoa.idade
    console.log(`Olá, eu tenho ${idade} anos!`)
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostraPeso = function mostraPeso(){
    var peso = pessoa.peso
    console.log(`Eu peso ${peso}Kg.`)
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostraAltura = function mostraAltura(){
    var altura = pessoa.altura
    console.log(`Minha altura e ${altura}m.`)
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto
Olá! Meu nome é Kaio Silveira!


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostraIdade
Olá, eu tenho 30 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostraPeso
Eu peso 72Kg.


/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostraAltura
Minha altura e 174m.


/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario
pessoa.fazerAniversario
pessoa.fazerAniversario

31
32
33

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.mostraIdade
Olá, eu tenho 33 anos!


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(2)
pessoa.andar(8)
pessoa.andar(5)

Andou 2 metros
Esta em movimento
Andou 8 metros
Esta em movimento
Andou 5 metros
Esta em movimento

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.parar()
Nao esta em movimento


/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()


/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

Nao esta em movimento


/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andar(5)
pessoa.parar()

Andou 5 metros
Esta em movimento
Nao esta em movimento

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function apresentacao() {
    if (pessoa.sexo == "masculino") {
        if (pessoa.idade == 1) {
            if (pessoa.distanciaPercorrida < 1) {
                console.log(`Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metro!`)
            } else {
                console.log(`Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metros!`)
            }

        } else {
            if (pessoa.distanciaPercorrida < 1) {
                console.log(`Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metro!`)
            } else {
                console.log(`Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metros!`)
            }
        }

    }
    else {
        if (pessoa.idade == 1) {
            if (pessoa.distanciaPercorrida < 1) {
                console.log(`Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metro!`)
            } else {
                console.log(`Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metros!`)
            }

        } else {
            if (pessoa.distanciaPercorrida < 1) {
                console.log(`Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metro!`)
            } else {
                console.log(`Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, tenho ${pessoa.altura} de altura, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.distanciaPercorrida} metros!`)
            }
        }
    }

}


// Agora, apresente-se ;)

pessoa.andar(10)
pessoa.apresentacao()

Andou 10 metros
Esta em movimento
Olá, eu sou o Kaio Silveira, tenho 30 anos, tenho 174 de altura, meu peso é 72kg e, só hoje, eu já caminhei 10 metros!
