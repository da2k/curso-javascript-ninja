# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var myVar = soma(2, 2) + 5;

// Qual o valor atualizado dessa variável?
// 9

// Declare uma nova variável, sem valor.
var myVar2;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiValor(valor){
	return 'O valor da variável é ' + myVar2 + valor;
}

// Invoque a função criada acima.
atribuiValor(2);

// Qual o retorno da função? (Use comentários de bloco).
// "O valor da variável é NaN"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function fn(a,b,c){
  if(a === undefined || b === undefined || c === undefined){
    console.log('Preencha todos os valores corretamente!');
  }else{
    return (a * b * c) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
fn(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
Preencha todos os valores corretamente!
undefined
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
fn(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
10
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function fn2(a,b,c){
  if(a === undefined && b === undefined && c === undefined){
    return false;
  }
  if(a !== undefined && b !== undefined && c !== undefined){
    return (a + b) / c;
  }
  if((c === undefined) || (b === undefined) || (a === undefined)){
    if(c === undefined) { return a + b; }
    if(b === undefined) { return a + c; }
    if(a === undefined) { return b + c; }
  }
  if(a !== undefined || b !== undefined || c !== undefined){
    if(a !== undefined) { return a; }
    if(b !== undefined) { return b; }
    if(c !== undefined) { return c; }
  }
  return null;
} 

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
fn2() // false
fn2(3,7,5) // 5
fn2(3,7) //10
fn2(3,7) // 10
fn2(0,3,7) // 0.42857142857142855
```

