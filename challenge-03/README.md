# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
?
var objeto = {};
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
?
{
  nome: 'Marcos',
  sobrenome: 'Felipe',
  sexo: 'Masculino',
  idade: 22,
  altura: 1.92,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 0
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
?
> pessoa.fazerAniversario = function() {
... return pessoa.idade++
... }
[Function (anonymous)]
> pessoa.fazerAniversario();
22
> pessoa.fazerAniversario();
23
>
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
?
> pessoa.andar = function(metros) {
... return pessoa.caminhouQuantosMetros += metros;
... pessoa.andando = true;
... };
[Function (anonymous)]
> pessoa.andar(10);
10
> pessoa.andar(10);
20
> !!pessoa
true
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
?
> pessoa.parar = function(){
... return pessoa.andando = false;
... };
[Function (anonymous)]
> pessoa.parar();
false
> pessoa.andando;
false
>
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
?
> pessoa.nomeCompleto = function() {
... return pessoa.nome + ' ' + pessoa.sobrenome
... };
[Function (anonymous)]
> pessoa.nomeCompleto()
'Marcos Felipe'
>
/*

Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
?
> pessoa.mostrarIdade = function() {
... return 'Olá, eu tenho ' + ' ' + pessoa.idade + ' ' + 'anos!'
... };
[Function (anonymous)]
> pessoa.mostrarIdade();
'Olá, eu tenho  24 anos!'
/*

Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
> pessoa.mostrarPeso = function() {
... return 'Eu peso' + ' ' + pessoa.peso + 'kg'
... };
[Function (anonymous)]
> pessoa.mostrarPeso()
'Eu peso 90kg'

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
> pessoa.mostrarAltura = function() {
... return 'Minha altura é' + ' ' + pessoa.altura + 'm'
... };
[Function (anonymous)]
> pessoa.mostrarAltura()
'Minha altura é 1.92m'
>

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto(); // Marcos Felipe
'Marcos Felipe'


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade() // Olá eu tenho 24 anos
'Olá, eu tenho  24 anos!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?
> pessoa.mostrarPeso() // Eu peso 90kg
'Eu peso 90kg'
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?
> pessoa.mostrarAltura()
'Minha altura é 1.92m'
/*
Faça a `pessoa` fazer 3 aniversários.
*/
> pessoa.fazerAniversario();
24
> pessoa.fazerAniversario();
25
> pessoa.idade
26

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
?

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
?

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Se a pessoa ainda está andando, faça-a parar.
*/
?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
> pessoa.caminhouQuantosMetros = 0;
0
> pessoa.caminhouQuantosMetros
0
> pessoa.andar(100);
undefined
> pessoa.caminhouQuantosMetros;
100
> pessoa.andar(100);
undefined
> pessoa.andando;
true
> pessoa.parar();
false
> pessoa.parar();
false
> pessoa.caminhouQuantosMentros
undefined
> pessoa.caminhouQuantosMetros
200

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

> pessoa.apresentacao = function () {
...   var sexo = 'o';
...   var idadeAnos = 'anos';
...   var metrosCaminhados = 'metros';
...
...   if (pessoa.sexo === 'Feminino') {
...     sexo = 'a';
...   }
...
...   if (pessoa.idade === 1) {
...     idadeAnos = 'ano';
...   }
...
...   if (pessoa.caminhouQuantosMetros === 1) {
...     metrosCaminhados = 'metro';
...   }
...
...   return 'Olá, eu sou ' + sexo + ' ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idadeAnos + ', ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + metrosCaminhados + '!';
... };
// Agora, apresente-se ;)
?
```
