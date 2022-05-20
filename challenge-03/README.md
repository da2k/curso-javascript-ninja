# Desafio da semana #3


// Declarar uma variável qualquer, que receba um objeto vazio.

var objeto {};

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
resposta:
var pessoa
{
  nome: 'Ariosvaldo',
  sobreNome: 'Azevedo Neto',
  sexo: 'masculino',
  idade: 61,
  altura: 1.65,
  peso: 87,
  andando: false,
  caminhouQuantosMetros: 0
}



/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
resposta:
pessoa.fazerAniversario= function() {return pessoa.idade++};
pessoa.fazerAniversario()



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
resposta:
  pessoa.andar =function(metros) {
  pessoa.caminhouQuantosMetros += metros;
  pessoa.andando = true;
   };



/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
resposta
pessoa.parar=function(){
... pessoa.andando = false;};



/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
resposta
pessoa.nomecompleto=function() { 
  return 'Olá! Meu nome é '+pessoa.nome+' '+pessoa.sobreNome!+' 
}

 

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
resposta
pessoa.mostrarIdade=function() {
...  return 'Olá, eu tenho ' + pessoa.idade + ' anos!';};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."

resposta
 pessoa.mostrarPeso=function() { 
... return  'Olá, eu tenho ' +pessoa.peso  + ' KG ';};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
resposta
pessoa.mostraraltura=function() {
return 'Minha altura é' +pessoa.altura+'m';};

/*

Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
resposta
pessoa.nomeCompleto()
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
resposta
pessoa.idade

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.peso

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.altura

/*
Faça a `pessoa` fazer 3 aniversários.
*/
resposta
pessoa.aniversario() repetir 3 vezes

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
resposta
pessoa.mostrarIdade()


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

resposta
pessoa.andar(200);
pessoa.andar(300);
pessoa.andar(50);




/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
resposta
pessoa.andando; resposta true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
resposta
pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*
resposta
pessoa.andando; resposta false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQauntosMetros; resposta 350 

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
> pessoa.apresentacao= function() {
... return  'Olá, eu sou o ' + pessoa.nomecompleto + ', tenho ' + pessoa.idade + ' anos,' + pessoa.altura + ' , meu peso é  ' + pessoa.peso + ' e, só hoje, eu já caminhei '+ pessoa.caminhouQuantosMetros+' metros';};         


// Agora, apresente-se ;)
?
```
