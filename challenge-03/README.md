# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var obj = {};

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
var person =
{
    name: 'Julia',
    lastName: 'Stefanoni',
    sex: 'Feminino',
    age: 17,
    height: 1.65,
    weight: 59,
    walking: false,
    walkingMeters: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
person.birthday = function () {
    person.age++;
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
person.walking = function (meters) {
    person.walkingMeters = person.walkingMeters + meters;
    person.walking = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
person.stop = function () {
    person.walking = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
person.fullName = function () {
    return `Olá! Meu nome é ${person.name} ${person.lastName}`;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
person.showAge = function () {
    return `Olá, eu tenho ${person.age} anos!`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
person.showWeight = function () {
    return `Eu peso ${person.weight}kg.`;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
person.showHeight = function () {
    return `Minha altura é ${person.height}m.`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.fullName(); // Julia Stefanoni

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showAge(); // Olá, eu tenho 17 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showWeight(); // Eu peso 59kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
showHeight(); // Minha altura é 1.65m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
person.birthday();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
person.showAge(); // Olá, eu tenho 20 anos.

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
person.walking(5);
person.walking(100);
person.walking(120);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.walking; // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
person.stop();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
person.walking; // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
person.walkingMeters();

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
person.apresentation = function () {
    if (person.sex === 'Feminino') {
        if (person.age === 1) {
            return `Olá, eu sou a ${person.name} ${person.lastName}, tenho ${person.age} ano, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metros!`;
        } else if (person.walkingMeters === 1) {
            return `Olá, eu sou a ${person.name} ${person.lastName}, tenho ${person.age} anos, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metro!`;
        }
        return `Olá, eu sou a ${person.name} ${person.lastName}, tenho ${person.age} anos, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metros!`;
    }
    else if (person.sexo === 'Masculino') {
        if (person.age === 1) {
            return `Olá, eu sou o ${person.name} ${person.lastName}, tenho ${person.age} ano, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metros!`;
        } else if (person.walkingMeters === 1) {
            return `Olá, eu sou o ${person.name} ${person.lastName}, tenho ${person.age} anos, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metro!`;
        }
        return `Olá, eu sou o ${person.name} ${person.lastName}, tenho ${person.age} anos, ${person.height}m, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.walkingMeters} metros!`;
    }
}

// Agora, apresente-se ;)
?
person.apresentation();
