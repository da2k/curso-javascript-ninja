# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

var objeto = { propriedade1:'valor1',proriedade2:'valor2'};

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
var pessoa = {nome:'Marcel',sobrenome:'Dusek',sexo:'masculino',idade:67,altura:1.9 , peso: 95, andando: false , caminhouQuantosMetros: 0};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function() {
    return pessoa.idade++;
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

pessoa.andar= function (k) {
    pessoa.andando = true;
    pessoa.caminhouQuantosMetros += k;
    return "Eu já caminhei "+ [pessoa.caminhouQuantosMetros]+ " metros e a minha propriedade ANDANDO passou a ser "+[pessoa.andando] ;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
    return pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function() {
    return  "Olá! Meu nome é "+[pessoa.nome]+" "+[pessoa.sobrenome]+"!";
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function () {
    return "Olá, eu tenho "+[pessoa.idade]+" anos!";
}


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function() {
   return "Eu peso "+[pessoa.peso]+"Kg.";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function() {
    return "Minha altura é "+[pessoa.altura]+"m.";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto()  //"Olá! Meu nome é Marcel Dusek!"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade()  //"Olá, eu tenho 67 anos!"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso()  //"Eu peso 95Kg."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura()  //"Minha altura é 1.9m."

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazer3Aniversarios = function() {
    return pessoa.idade+=3;
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa.fazer3Aniversarios()  //70

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

k=100
pessoa.andar(k)
"Eu já caminhei 100metros e a minha propriedade ANDANDO passou a ser true"
k=150
pessoa.andar(k)
"Eu já caminhei 250metros e a minha propriedade ANDANDO passou a ser true"
k=200
pessoa.andar(k)
"Eu já caminhei 450metros e a minha propriedade ANDANDO passou a ser true"

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

//Invocando a função com o parâmerto o resultado é:
pessoa.andar(k) // "Eu já caminhei 650metros e a minha propriedade ANDANDO passou a ser true"

// Se Invocar a função sem o parâmerto o resultado é:
pessoa.andar() //"Eu já caminhei NaNmetros e a minha propriedade ANDANDO passou a ser true" SIM ainda está andando.

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()
false

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.parar() // O retorno desta função é false. Logo a pessoa parou de andar.

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andar(k) //"Eu já caminhei 200metros e a minha propriedade ANDANDO passou a ser true"

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
    var pronome = "o"; 
	var tempo = "anos";
	var comp = "metros";
        if (pessoa.sexo==="Feminino"|| pessoa.sexo==="feminino") {
            pronome = "a";
			if (pessoa.idade === 1){
				tempo ="ano";
				if (pessoa.caminhouQuantosMetros === 1) {
					comp = "metro";
					}
				}
			}
        else if (pessoa.idade === 1) {
			tempo ="ano";
			if (pessoa.caminhouQuantosMetros === 1){
				comp = "metro";
				}
			}

		else if (pessoa.caminhouQuantosMetros === 1) {
			comp = "metro";
		}
		return "Olá, eu sou "+[pronome]+" "+[pessoa.nome]+" "+[pessoa.sobrenome]+", tenho "+[pessoa.idade]+" "+[tempo]+", "+[pessoa.altura]+"m de altura, meu peso é "+[pessoa.peso]+" Kg e, só hoje, eu já caminhei "+[pessoa.caminhouQuantosMetros]+" "+[comp]+"!";
}


// Agora, apresente-se ;)

pessoa.apresentacao()

//"Olá, eu sou o Marcel Dusek, tenho 1 ano, 1.9m de altura, meu peso é 95 Kg e, só hoje, eu já caminhei 20 metros!"
```


