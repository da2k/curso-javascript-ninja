/*
  https://github.com/da2k/curso-javascript-ninja/tree/master/challenge-02
  Desafios da semana #2
*/

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function Ninja(x, y) {
  return x + y;
}

Ninja(10, 15);

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var z = Ninja(10, 15) + 5;

// Qual o valor atualizado dessa variável?
30

// Declare uma nova variável, sem valor.
var a = null;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function AdcValor() {
  var a = 10;
  return 'O valor da variável agora é ' + a;
}

// Invoque a função criada acima.
AdcValor();

// Qual o retorno da função? (Use comentários de bloco).
/*
  O valor da variável agora é 10
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function ifFunction(b, c, d) {
  if (b === undefined || c === undefined || d === undefined) {
    return 'Preencha todos os valores corretamente!';
  } else {
    return (b * c * d) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
ifFunction(10, 20);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado)
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
ifFunction(10, 20, 30);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
6002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function AnotherIfFunction(f,g,h) {
  if (f == null || g == null || h == null) {
    return false;
  } else if (f != undefined && g === undefined && h === undefined) {
    return f;
  } else if (f === undefined && g != undefined && h === undefined) {
    return g;
  } else if (f === undefined && g === undefined && h != undefined) {
    return h;
  } else if (f !== undefined && g !== undefined && h === undefined) {
    return f + g;
  } else if (f === undefined && g !== undefined && h !== undefined) {
    return g + h;
  } else if (f !== undefined && g === undefined && h !== undefined) {
    return f + h;
  } else if (f !== undefined && g !== undefined && h !== undefined) {
    return (f + g) / h;
  } else {
    return null;
  }
} 

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
AnotherIfFunction(); //false
AnotherIfFunction(1); //false
AnotherIfFunction(2, 3); //false
AnotherIfFunction(10,10,2); //10
