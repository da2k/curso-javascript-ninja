# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var myObject = {} ;

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
    nome: "Ricardo",
    sobreNome: "Rodrigues",
    sexo: "M",
    idade: 43,
    altura: 1.83,
    peso: 165,
    andando: false,
    caminhouQuantosMetros: 0
} ;

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function() {
    pessoa.idade++ ;
} ;

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
pessoa.andar = function(args) {
    pessoa.caminhouQuantosMetros += args ;
    pessoa.andando = true ;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    pessoa.andando = false ;
} ;

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobreNome}!` ;
} ;

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function() {
    return `Olá, eu tenho ${pessoa.idade} anos!` ;
} ;

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function() {
    return `Eu peso ${pessoa.peso}Kg.` ;
} ;

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function() {
    return `Minha altura é ${pessoa.altura}m.` ;
} ;

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto() ; // o resultado foi 'Olá! Meu nome é Ricardo Rodrigues!'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade() ; // o resultado foi 'Olá, eu tenho 43 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso() ; // o resultado foi 'Eu peso 165Kg.'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura() ; // o resultado foi 'Minha altura é 1.83m.'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario() ;
pessoa.fazerAniversario() ;
pessoa.fazerAniversario() ;

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.mostrarIdade() ; // o resultado foi 'Olá, eu tenho 46 anos!'

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(10) ;
pessoa.andar(20) ;
pessoa.andar(30) ;

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 var isWalking = pessoa.andando ? "Está Andando!" : "Está parada!" ; // pessoa.andando é true, então atribuimos a string "Está andando!"

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar() ;

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
isWalking = pessoa.andando ? "Está Andando!" : "Está parada!" ; // pessoa.andando é false, então atribuimos a string "Está andando!". Note que não foi colocado o var, pois a variávell já foi declarada

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros //  o retorno foi 60.

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
pessoa.apresentacao = function() {
    var result, juncao = "a", juncaoIdade = "", juncaoMetros = "" ;
    if (pessoa.sexo === "M") {
        juncao = "o" ;
    }
    if (pessoa.idade !== 1) {
        juncaoIdade = "s"
    }
    if (pessoa.caminhouQuantosMetros !== 1) {
        juncaoMetros = "s"
    }
    result = `Olá, eu sou ${juncao} ${pessoa.nome} ${pessoa.sobreNome}, tenho ${pessoa.idade} ano${juncaoIdade}, meu peso é ${pessoa.peso} e, só hoje caminhei ${pessoa.caminhouQuantosMetros} metro${juncaoMetros}!`
    return result ;
} ;

// Agora, apresente-se ;)
pessoa.apresentacao() ;

