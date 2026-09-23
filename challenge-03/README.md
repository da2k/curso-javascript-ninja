# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

    var objVazio = {} 

    // #corrreto 

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

 var pessoa = { nome: 'enzo', sobrenome: 'emiliano', sexo: 'masculino', idade: 29, altura: 1.66, peso: 85, andando: false, caminhouQuantosMetros: 0}

// #correto

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

    pessoa.fazerAniversario = function () {return pessoa.idade++}

    // #correto

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
    pessoa.andar = function (qntMetros) {
        
        pessoa.caminhouQuantosMetros =  pessoa.caminhouQuantosMetros + qntMetros

        if(pessoa.caminhouQuantosMetros > 0) {
            return pessoa.andando = true
        }

    }


    // #correto > MAS poderia também simplificar fazendo como a sugestão da correção:
    /* 
    
      pessoa.andar = function (qntMetros) {
        
        pessoa.caminhouQuantosMetros += qntMetros

      pessoa.andando =  true

    }
    
    */

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

    pessoa.parar = function () {return pessoa.andando = false}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

    pessoa.nomeCompleto = function () {
       return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}`
    }

    // #correto

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
    pessoa.mostrarIdade = function () {return `Olá, eu tenho ${pessoa.idade} anos`}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

    pessoa.mostrarPeso = function () {return  `Eu peso ${pessoa.peso}kg`}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

    pessoa.mostrarAltura =  function () {return `Minha altura é ${pessoa.altura}m`}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

    pessoa.nomeCompleto() // olá meu nome é enzo emiliano


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

    pessoa.idade // Olá, eu tenho 29 anos'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

    pessoa.peso // 'Eu peso 85kg'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

    pessoa.altura // 'Minha altura é 1.66m'

/*
Faça a `pessoa` fazer 3 aniversários.
*/

    pessoa.fazerAniversario()
    pessoa.fazerAniversario()
    pessoa.fazerAniversario()


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

    pessoa.mostrarIdade() // 'Olá, eu tenho 32 anos'

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

    pessoa.andar(5)
    pessoa.andar(10)
    pessoa.andar(15)


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

    pessoa.andando // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

    pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

    pessoa.andando // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

    pessoa.caminhouQuantosMetros // 30

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
?

// Agora, apresente-se ;)
?

// 1ª tentativa
// pessoa.apresentacao = function () {

//     var femininoTxt =   `Olá, eu sou a ${pessoa.nomeCompleto()}, tenho ${pessoa.idade} anos, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`

//     var idadeUm =  `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.idade} ano, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`

//     var umMetro =   `Olá, eu sou o ${pessoa.nomeCompleto()}, tenho ${pessoa.idade} ano, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metro!`
    
//      var outro = ` ${pessoa.nomeCompleto()}, tenho ${pessoa.idade} anos, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`

//     if(pessoa.sexo === 'feminino') {
//        return femininoTxt
//     } else if (pessoa.idade === 1) {
//          return idadeUm
//     } else if (pessoa.caminhouQuantosMetros === 1) {
//         return umMetro
//     } else { return outro }
// }

// melhor solução
pessoa.apresentacao = function () {
    var sexo = 'o'

    if(pessoa.sexo === 'feminino') {
        sexo = 'a'
    }

    var idadeAnos = 'anos'

    if(pessoa.idade === 1) {
        idadeAnos = 'ano';
    }


    var qntMetro = 'metros'

    if(pessoa.caminhouQuantosMetros === 1) {
        qntMetro = 'metro'
    }

    
    
    return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idadeAnos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${qntMetro}!`
}