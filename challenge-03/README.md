# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var myvar = {};

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
var pessoa = { nome: 'Vinicius', sobrenome: 'Meneses', sexo: 'Masculino', idade: 17, altura: 1.75, peso: 50, andando: false, caminhouQuantosMetros: 0 };

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function() {
    pessoa.idade++;
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
pessoa.andar = function(metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
    return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function() {
    return "Olá, eu tenho " + pessoa.idade + " anos!";
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function() {
    return "Eu peso " + pessoa.peso + "Kg.";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function() {
    return "Minha altura é " + pessoa.altura + "m.";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto()); //"Olá! Meu nome é Vincius Meneses!"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade()); //"Olá, eu tenho 17 anos!"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso()); //"Eu peso 50Kg."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura()); //"Minha altura é 1.75m."

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for (var i=0; i<=2; i++) {
    pessoa.fazerAniversario();
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa.mostrarIdade()); //"Olá, eu tenho 20 anos!"

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
for (var i=1; i<=3; i++) {
    pessoa.andar(i * 10);
}

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando); //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
if (pessoa.andando) {
    pessoa.parar();
}

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando); //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.caminhouQuantosMetros); //60

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
    var sexo = "o";
    var idade = "";
    var metro = "";

    if (pessoa.sexo === "Feminino") {
        sexo = "a";
    }
    if (pessoa.idade !== 1) {
        idade = "s";
    }
    if (pessoa.caminhouQuantosMetros !== 1) {
        metro = "s";
    }

    return "Olá, eu sou " + sexo + " " + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + " ano" + idade + ", " + pessoa.altura + "m, meu peso é " + pessoa.peso + "kg e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " metro" + metro + "!";
}

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
```
