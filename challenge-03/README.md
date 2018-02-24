# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var emptyObj = {};

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
function Pessoa(nome, sobrenome, sexo, idade, altura, peso, andando, caminhouQuantosMetros) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.idade = idade || 1;
    this.altura = altura;
    this.peso = peso;
    this.andando = andando = false;
    this.caminhouQuantosMetros = caminhouQuantosMetros = 0;
}

const raphael = new Pessoa('Raphael', 'Anjos', 'masculino', 22, 178, 97);


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
Pessoa.prototype.fazerAniversario = function() {
    this.idade += 1;
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
Pessoa.prototype.andar = function(metrosCaminhados) {
    this.caminhouQuantosMetros += metrosCaminhados;
    this.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
Pessoa.prototype.parar = function() {
    this.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
Pessoa.prototype.nomeCompleto = function(nome, sobrenome, sexo) {
    if (this.sexo === 'Feminino') {
        return `Olá, eu sou a ${this.nome} ${this.sobrenome}`;
    } else {
        return `Olá, eu sou o ${this.nome} ${this.sobrenome}`;
    }
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
Pessoa.prototype.mostrarIdade = function(idade) {
    return `Olá, eu tenho ${this.idade} anos`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
Pessoa.prototype.mostrarPeso = function(peso) {
    return `Eu peso ${this.peso}Kg`;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoa.prototype.mostrarAltura = function(altura) {
    return `Minha altura é ${this.altura}m`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
raphael.nomeCompleto(); // "Olá meu nome é Raphael Anjos"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
raphael.mostrarIdade(); // "Olá, eu tenho 22 anos"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
raphael.mostrarPeso(); // "Eu peso 97Kg"

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
raphael.mostrarAltura(); // "Minha altura é 1.78m"

/*
Faça a `pessoa` fazer 3 aniversários.
*/
raphael.fazerAniversario();
raphael.fazerAniversario();
raphael.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
raphael.mostrarIdade(); // "Olá, eu tenho 25 anos"

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
raphael.andar(20);
raphael.andar(30);
raphael.andar(40);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(raphael.andando);

/*
Se a pessoa ainda está andando, faça-a parar.
*/
raphael.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(raphael.andando); // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(raphael.caminhouQuantosMetros); // 90

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

const raphael = new Pessoa('Raphael', 'Anjos', 'masculino', 22, 1.78, 97);
const yanne = new Pessoa('Yanne', 'Anjos', 'Feminino', 24, 1.61, 74);
const newBorn = new Pessoa('New', 'Baby', 'Masculino', 1, 0.50, 3.5);
const slowPoke = new Pessoa('Slow', 'Poke', 'Pokemon Macho', 5, 1.30, 10);

Pessoa.prototype.apresentacao = function(nomeCompleto, idade, altura, peso, caminhouQuantosMetros) {
    if (this.idade === 1) {
        return `Olá, Eu sou o ${this.nomeCompleto()}, tenho ${this.idade} ano, ${this.altura}, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metros!`;
    } else if (this.caminhouQuantosMetros === 1) {
        return `Olá, Eu sou o ${this.nomeCompleto()}, tenho ${this.idade} anos, ${this.altura}, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metro!`;
    } else {
        return `${this.nomeCompleto()}, tenho ${this.idade} anos, ${this.altura}m de altura, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} metros!`;
    }
}

// Agora, apresente-se ;)
const raphael = new Pessoa('Raphael', 'Anjos', 'masculino', 22, 1.78, 97);
// "Olá, eu sou o Raphael Anjos, tenho 25 anos, 1.78m de altura, meu peso é 97Kg e, só hoje, eu já caminhei 90 metros!"
const yanne = new Pessoa('Yanne', 'Anjos', 'Feminino', 24, 1.61, 74);
// "Olá, eu sou a Yanne Anjos, tenho 24 anos, 1.61m de altura, meu peso é 74Kg e, só hoje, eu já caminhei 0 metros!"
const newBorn = new Pessoa('New', 'Baby', 'Masculino', 1, 0.50, 3.5);
// "Olá, Eu sou o Olá, eu sou o New Baby, tenho 1 ano, 0.5, meu peso é 3.5Kg e, só hoje, eu já caminhei 0 metros!"
const slowPoke = new Pessoa('Slow', 'Poke', 'Pokemon Macho', 5, 1.30, 10);
// "Olá, Eu sou o Olá, eu sou o Slow Poke, tenho 5 anos, 1.3, meu peso é 10Kg e, só hoje, eu já caminhei 1 metro!"
```
