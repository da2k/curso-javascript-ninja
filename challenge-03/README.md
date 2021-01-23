# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var obejct = {};

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
const person = {
    name: 'José Ivo',
    surname: 'Maciel Junior',
    sex: 'Male',
    age: 25,
    height: 1.8,
    weight: 76,
    toWalk: false,
    walkedHowManyMeters: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
person = {
  birthday: () => {person.age ++},
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
person = {
    toWalk: (meters) => {
        person.walkedHowManyMeters += meters;
        person.walk = true;
    }
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
person = {
  stop: () => {person.walk = false}
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
person = {
  fullName: () => {return 'Hello my name is: ' + person.name + ' '+ person.surname}
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
person = {
  showAge: () => {return 'Hello, I\'m ' + person.age + ' year old.'}
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
person = {
  showWeight: () => {return `I weight: ${person.weight} Kg.`}
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
person = {
  showHeight: () => {return `My height is: ${person.height}m.`}
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.fullName());
// Hello, my name is: José Ivo Maciel Junior.

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showAge());
// Hello, I'm 25 year old.

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showWeight());
// I weight: 76 Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showHeight());
// My height is: 1.8m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
person.birthday();
person.birthday();
person.birthday();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(person.showAge());
// Hello, I'm 28 year old.

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
person.toWalk(3);
person.toWalk(5);
person.toWalk(2);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.walk);
// true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
person.stop();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(person.walk);
// false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(person.walkedHowManyMeters);
// 10

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
person = {
  presentation: () => {
        let sex;
        let age;
        let meter;

        if(person.sex === 'Male') {
            sex = 'o';
        } else if(person.sex === 'Female') {
            sex = 'a';
        } else {
            return 'rewrite your gender again'
        };

        if(person.age === 1) {
            age = 'ano';
        } else if (person.age > 1) {
            age = 'anos';
        } else {
            return 'Write only positive ages in years'
        }

        if(person.walkedHowManyMeters === 1 || person.walkedHowManyMeters === 0){
            meter = 'metro';
        } else if( person.walkedHowManyMeters > 1 || (person.walkedHowManyMeters > 0 && person.walkedHowManyMeters < 1)){
            meter = 'metros'
        } else {
            return 'write positive values for distance'
        }

        return `Olá, eu sou ${sex}: ${person.name} ${person.surname}, tenho ${person.age} ${age}, ${person.weight} e, só hoje eu caminhei ${person.walkedHowManyMeters} ${meter}.`
    }
}

// Agora, apresente-se ;)
?
```
