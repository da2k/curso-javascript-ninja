# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somatorio = soma(3, 4) + 5;

// Qual o valor atualizado dessa variável?
12

// Declare uma nova variável, sem valor.
var adicionado;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicao(x){
    adicionado = adicionado + x;
    return console.log('O valor da variável agora é ' + adicionado);
}

// Invoque a função criada acima.
adicao(3);

// Qual o retorno da função? (Use comentários de bloco).
O valor da variável agora é NaN

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicaEsoma(x, y, z){
    if(!x || !y || !z){
        return console.log('Preencha todos os valores corretamente!');
    }
    return (x * y * z) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicaEsoma(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicaEsoma(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 29

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
if(x && !y && !z){
	return x;
}else if(x && y && !z){
	return x + y;
}else if(x && y && z){
	return (x + y) / z;
}else if(!x && !y && !z){
	return false;
}else{
	return null;
}

testArgs(); // false
> testArgs(2); // 2
> testArgs(2, 3); // 5
> testArgs(2, 3, 2); // 2.5