# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a, b){
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var myvar = somar(2, 3) + 5;

// Qual o valor atualizado dessa variável?
 10

// Declare uma nova variável, sem valor.
var  x;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornaString(){
  x = 4;
  return "VALOR É: " + x;
}

// Invoque a função criada acima.
retornaString();

// Qual o retorno da função? (Use comentários de bloco).
"VALOR É: 4"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function funcaozinha(a, b, c){
  if(a == "" || a == null || b == "" || b == null || c =="" || c == null){
    return "PREENCHA TODOS OS VALORES CORRETAMENTE";
  }
  else{
    return (a * b * c) + '2';
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
funcaozinha(a, b);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"PREENCHA TODOS SO VALORES CORRETAMENTE")

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
funcaozinha(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'62'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function funcaozitcha(a, b, c){
  var aSozinho = a != undefined && b == undefined && c == undefined;
  var bSozinho = b != undefined && a == undefined && c == undefined;
  var cSozinho = c != undefined && a == undefined && b == undefined;
  
  var aEb = a != undefined && b != undefined && c == undefined;
  var aEc = a != undefined && b == undefined && c != undefined;
  var bEc = a == undefined && b != undefined && c != undefined;
  
  if(aSozinho){
    return a;
  }
  else if(bSozinho){
    return b;
  }
  else if(cSozinho){
    return c;
  }
  else if(aEb){
    return a +b;
  }
  else if(aEc){
    return a+ c;
  }
  else if(bEc){
    return b +c;
  }
  else if(a != undefined && b != undefined && c != undefined){
    return ((a + b) / c);
  }
  else if(a == undefined && b == undefined && c == undefined){
    return false;
  }
  else {
    return null;
  }
  
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
funcaozitcha(); // false
funcaozitcha(1, 2); // 3
funcaozitcha(1, 2, 3); // 1
