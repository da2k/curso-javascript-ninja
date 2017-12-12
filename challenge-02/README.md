# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
  resultado = x + y;
  
  return resultado
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var calculo = soma(3,2);

// Qual o valor atualizado dessa variável?
5

// Declare uma nova variável, sem valor.
var empty;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function putValue(string){
  return string
}

// Invoque a função criada acima.
empty = putValue(VALOR);

// Qual o retorno da função? (Use comentários de bloco).
/*
VALOR
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function name(x, y, z){
  if(x === undefined || y === undefined || z === undefined){
    return result = 'Preencha todos os valores corretamente!'
  }else{
    return result = (x * y * z) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
name(2, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
name(3, 4, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
122

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
var x, y, z, result;

function exercise(x,y,z){
  if(arguments.length == 1){
    result = arguments;
  }else if(arguments.length == 2){

  }else if(x != undefined && y != undefined && z != undefined){
    result = (x + y) / z;
  }else if(x === undefined && y === undefined && z === undefined){
    result = false;
  }else{
    result = null;
  }

  return result;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
exercise();//false
exercise(5);//5
exercise(4,5);//9
exercise(4,5,6);//1,5
