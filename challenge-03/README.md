# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
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
> pessoa = { nome: 'João', sobrenome: 'Silva', sexo: 'masculino', idade: 25, altura: 1.91, peso: 90, andando: false, caminhouQuantosMetros: 0 };
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 25,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 0 }

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
> pessoa.fazerAniversario = function() {
... pessoa.idade++;
... }
[Function]
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 25,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: [Function] }
> pessoa.fazerAniversario();
undefined
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: [Function] }
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
};
//ou
> pessoa.andar = function(x, y){
... pessoa.caminhouQuantosMetros = x;
... pessoa.andando = y;
... return x, y;
... }
> pessoa.andar(7, true)
true
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: true,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function] }
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
> pessoa.parar = function(z){
... return pessoa.andando = false;
... }
[Function]
> pessoa.parar()
false
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function],
  parar: [Function] }

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function],
  parar: [Function] }
> pessoa.nomeCompleto = function() {
... return 'Meu nome é: ' + pessoa.nome + ' ' + pessoa.sobrenome;
... }
[Function]
> pessoa.nomeCompleto();
'Meu nome é: João Silva'

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
> pessoa.mostrarIdade = function() {
... return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
... }
[Function]
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function],
  parar: [Function],
  nomeCompleto: [Function],
  mostrarIdade: [Function] }
> pessoa.mostrarIdade();
'Olá, eu tenho 26 anos!'

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
> pessoa.mostrarPeso = function(){
... return 'Eu peso ' + pessoa.peso + ' Kg.';
... }
[Function]
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function],
  parar: [Function],
  nomeCompleto: [Function],
  mostrarIdade: [Function],
  mostrarPeso: [Function] }
> pessoa.mostrarPeso();
'Eu peso 90 Kg.'

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
> pessoa.mostrarAltura = function() {
... return 'Minha altura é: ' + pessoa.altura + 'm';
... }
[Function]
> pessoa
{ nome: 'João',
  sobrenome: 'Silva',
  sexo: 'masculino',
  idade: 26,
  altura: 1.91,
  peso: 90,
  andando: false,
  caminhouQuantosMetros: 7,
  fazerAniversario: [Function],
  andar: [Function],
  parar: [Function],
  nomeCompleto: [Function],
  mostrarIdade: [Function],
  mostrarPeso: [Function],
  mostrarAltura: [Function] }
> pessoa.mostrarAltura()
'Minha altura é: 1.91m'

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto(); //"Olá! Meu nome é Kelson Menezes!"


/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade(); //Olá, eu tenho 26 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
> pessoa.mostrarPeso(); //Eu peso 90 Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
> pessoa.mostrarAltura(); // Minha altura é: 1.91m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
> pessoa.fazerAniversario()
undefined
> pessoa.fazerAniversario()
undefined
> pessoa.fazerAniversario()
undefined
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
> pessoa.mostrarIdade(); //'Olá, eu tenho 29 anos!'
>

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
> pessoa.andar(7);
undefined

> pessoa.andar(10);
undefined

> pessoa.andar(15);
undefined

>

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
> pessoa.andar(7); //caminhouQuantosMetros: 7,
> pessoa.andar(10); //caminhouQuantosMetros: 10,
> pessoa.andar(15); ////caminhouQuantosMetros: 15

/*
Se a pessoa ainda está andando, faça-a parar.
*/
> pessoa.parar();
false // andando: false

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
> pessoa.parar();
false // andando: false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros //32

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

// > pessoa.apresentacao = function(){
... return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' anos de idade, minha altura é ' + pessoa.altura + 'm, meu peso é ' + pessoa.peso + 'Kg, e, só hoje, eu já caminhei' + pessoa.caminhouQuantosMetros + 'metros!';
... }
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
pessoa.apresentacao = function(){
	var sexo = 'o';
	var idadeAnos = 'anos';
	var quantidadeMetros = 'metros';	

	if( pessoa.sexo === 'Feminino' ) {
		sexo = 'a';	
	}

	if( pessoa.idade === 1 ) {
		idadeAnos = 'ano';
	}

	if( pessoa.caminhouQuantosMetros === 1 ){
		quantidadeMetros = 'metro';
	}
 
	return 'Olá, eu sou ' + sexo + ' ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idadeAnos + ', ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + quantidadeMetros + '!';
};

// Agora, apresente-se ;)
pessoa.apresentacao(); //"Olá, eu sou o Kelson Menezes, tenho 33 anos, 1.9, meu peso é 110 e, só hoje, eu já caminhei 600 metros!"