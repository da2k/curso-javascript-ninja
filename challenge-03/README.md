# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
?

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

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
?

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

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
?

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
?

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
?

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
?

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
?

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Faça a `pessoa` fazer 3 aniversários.
*/
?

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
?

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
```
Respostas
 var vazio = {};

 var pessoa = {nome:'felipe' ,sobrenome:'melo', sexo:'masculino', idade:27, altura:1.82,peso:63,andando: false,caminhouquantosmetros:0}

 pessoa.fazeraniversario = function() {
 	pessoa.idade ++;
 };
 
 pessoa.andar = function(metros) {
 		pessoa.caminhouquantosmetros += metros;
 	    pessoa.andando = true
 };

pessoa.parar = function() {
	return andando = false;
};

pessoa.nomecompleto = function() {
	return 'Olá!, meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome;

};

pessoa.mostraridade = function() {
	return 'Olá, eu tenho '+ pessoa.idade +' anos';
};

pessoa.mostrarpeso = function() {
	return 'Olá, eu tenho' + pessoa.peso + ' kilos';
};

pessoa.mostraraltura = function() {
	return "Olá, eu tenho" + pessoa.altura + ' de altura';
};

pessoa.nomecompleto();

pessoa.mostraraltura();

pessoa.mostraridade();

pessoa.mostrarpeso();

pessoa.fazeraniversario();
pessoa.fazeraniversario();
pessoa.fazeraniversario();

pessoa.mostraridade();

pessoa.andar(40);
pessoa.andar(60);
pessoa.andar(200);

pessoa.andando

pessoa.parar();

pessoa.andando

pessoa.caminhouquantosmetros

pessoa.apresentar = function() {
	var sexo = 'o';
	var idade = 'anos';
	var metrosCaminhados ='metros';

	if (pessoa.sexo === 'feminino') {
		sexo = 'a';
	}
	if (pessoa.idade === 1) {
		idade = 'ano';
	}
	if (pessoa.caminhouquantosmetros === 1) {
		metrosCaminhados = 'metro';
	}
		return 'Olá, eu sou '+ sexo + ' '+ pessoa.nomecompleto + ', tenho 'pessoa.idade + ' '+idade + ', ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouquantosmetros +' '+ metrosCaminhados +'!';
	
};

pessoa.apresentar();
