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

var pessoa = {
	nome : "cleyson",
	sobrenome : "leal",
	sexo : "masculino",
	idade : 19,
	altura : 1.79,
	peso : 90,
	andando : false,
	caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function(){
	pessoa.idade++;
};

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

pessoa.andar = function(metrosCaminhados){
	pessoa.caminhouQuantosMetros += metrosCaminhados;
    pessoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
	pessoa.andando = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
	return "Olá, meu nome é" + " " + pessoa.nome + " " + pessoa.sobrenome;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function(){
	return "Olá, eu tenho" + " " + pessoa.idade + " " + "anos.";
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function(){
	return "Eu peso" + " " + pessoa.peso + "Kg.";
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function(){
	return "Minha altura é" + " " + pessoa.altura + "m.";
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.nomeCompleto(); //"Olá, meu nome é cleyson leal"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade(); //"Olá, eu tenho 19 anos."

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso(); //"Eu peso 90Kg."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura(); //"Minha altura é 1.79m."

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa.mostrarIdade(); //"Olá, eu tenho 22 anos."

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(5);
pessoa.andar(10);
pessoa.andar(15);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.andando; //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando; // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.caminhouQuantosMetros; // 30 

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

pessoa.apresentacao = function(){
	var genero;
	if(pessoa.sexo == "feminino" || pessoa.sexo ==  "Feminino"){
		genero = "a";
	}else{
		genero = "o";
	}

	var termoIdade;
	if(pessoa.idade == 1){
		termoIdade = "ano";
	}else{
		termoIdade = "anos"
	}

	var termoMetro;
	if(pessoa.caminhouQuantosMetros == 1){
		termoMetro = "metro";
	}else{
		termoMetro = "metros";
	}


	return 	 "Olá, eu sou " + genero + " "  + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + " " + termoIdade + ", " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " " + termoMetro + "!" 
}

// Agora, apresente-se ;)

pessoa.apresentacao(); // Olá, eu sou o cleyson leal, tenho 22 anos, 1.79, meu peso é 90 e, só hoje, eu já caminhei 30 metros!
```
