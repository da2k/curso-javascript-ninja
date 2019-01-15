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

 //criei um objeto pessoa com as suas propriedades seguindo seus tipos
var pessoa = {

nome: "carlos",
sobrenome: "andré",
sexo:"Masculino",
idade: 39,
altura:1.85,
peso: 85,
andando:false,
caminhandoQuantosMetros:0
 };




/*
Adicione um método ao objeto 'pessoa' chamado 'fazerAniversario'. O método deve
alterar o valor da propriedade 'idade' dessa pessoa, somando '1' a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function () {
    pessoa.idade++;
};
 
 //envocar função:
 pessoa.fazerAniversario ();

 //ver idade
 pessoa.idade
 s




/*
Adicione um método ao objeto 'pessoa' chamado 'andar', que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade 'caminhouQuantosMetros', somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade 'andando' para o valor
booleano que representa "verdadeiro";
*/


/* --------------------------------------
MÉTODO PESSOA.ANDAR 
-----------------------------------------*/
pessoa.andar = function(metros) { //método 'andar' que recebo o parâmetro 'metros'
    
    pessoa.caminhandoQuantosMetros += metros; // muda a prop. caminhandoQuantosMetros  
                                              // somando tudo q ele tem + a qtde informada parâmetro 'metros'
    pessoa.andando = true;// altera a propriedade pessoa.andando para verdadeiro                    
    
};



/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

/* --------------------------------------
MÉTODO PESSOA.PARAR 
-----------------------------------------*/
pessoa.parar = function (){

pessoa.andando = false;

};



/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

? /* --------------------------------------
MÉTODO pessoa.nomeCompleto 
-----------------------------------------*/

pessoa.nomeCompleto = function(){

return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!';
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

?/* --------------------------------------
MÉTODO pessoa.mostarIdade
-----------------------------------------*/

pessoa.mostarIdade = function() {

	return 'Olá, minha idade é ' + pessoa.idade + '!';
};


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

?/* --------------------------------------
MÉTODO pessoa.mostrarPeso
-----------------------------------------*/

pessoa.mostrarPeso = function () {

	return 'Meu peso é ' + pessoa.peso + 'kg.';
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

?/* --------------------------------------
MÉTODO pessoa.mostrarAltura
-----------------------------------------*/

pessoa.mostrarAltura = function() {

	return "Minha altura é " + pessoa.altura +"mts";
};



/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

? pessoa.nomeCompleto(); //"Olá! Meu nome é carlos andré!"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
? pessoa.mostarIdade(); //"Olá, minha idade é 40!"

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
? pessoa.mostrarPeso(); //"Meu peso é 85kg."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
? pessoa.mostrarAltura (); //"Minha altura é 1.85mts"

/*
Faça a `pessoa` fazer 3 aniversários.
*/
? pessoa.fazerAniversario ();
  pessoa.fazerAniversario ();
  pessoa.fazerAniversario ();


/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
? pessoa.mostarIdade ();  //"Olá, minha idade é 42!"


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
? pessoa.andar(100);
  pessoa.andar(10);
  pessoa.andar(12);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
? pessoa.andando //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
?pessoa.parar(); 
 
/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
? pessoa.andando //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
? pessoa.caminhandoQuantosMetros // 122

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