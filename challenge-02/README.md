# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somaElementos (elementoA, elementoB) {
  return elementoA + elementoB;
  }
somaElementos(2, 3);

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var invocarFuncao = somaElementos(2, 3);
invocaFuncao + 5;

// Qual o valor atualizado dessa variável?
invocaFuncao == 10;

// Declare uma nova variável, sem valor.
var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor (adiciona) {
  return semValor = adiciona;
  } 
adicionaValor("O valor da variável agora é VALOR.");
// Invoque a função criada acima.
adicionaValor();

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável agora é VALOR.*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function recebaTresArgumentos (argumento01, argumento02, argumento03) {
  if (argumento01 === undefined || argumento02 === undefined || argumento03 === undefined) {
    return "Preencha todos os valores corretamente!";
    } 
      return argumento01 * agumento02 * agumento03 + 2;
    }
 recebaTresArgumentos( );
 
// Invoque a função criada acima, passando só dois números como argumento.
recebaTresArgumentos(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
recebaTresArgumentos(1, 2, 7);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//16

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tresCaracteristicas (caracteristica01, caracteristica02, caracteristica03) {
    if (caracteristica01 !== undefined   && caracteristica02 === undefined && caracteristica03 === undefined) {
    return caracteristica01;
    } else { 
        if (caracteristica01 !== undefined && caracteristica02 !== undefined && caracteristica03 === undefined) {
            return caracteristica01 + caracteristica02;
        } else {
            if (caracteristica01 !== undefined && caracteristica02 !== undefined && caracteristica03 !== undefined) {
                return (caracteristica01 + caracteristica02) / caracteristica03;
            } else {
                if (caracteristica01 === undefined && caracteristica02 === undefined && caracteristica03 === undefined){
                    return false;
                } else {
                    return null;
                }
            }
        }
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```
