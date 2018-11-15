# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma (x,y) {
	Return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

x=5;
Y=6;
S= soma(x,y) + 5;


// Qual o valor atualizado dessa variável?

16

// Declare uma nova variável, sem valor.

var nova

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function frase () {
	nova ="VALOR";
	return "O valor da variável agora é "+nova;
	}

// Invoque a função criada acima.

frase()


// Qual o retorno da função? (Use comentários de bloco).

/* O valor do retorno da função é "O valor da variável agora é VALOR" do tipo string.*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
//REVISÃO
function retorna (x,y,z) {
	if (x===undefined || y===undefined || z===undefined) {
		return "Preencha os valores corretamente!";
	} else {
		return x*y*z + 2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
//REVISÃO
retorna (1 ,2)
"Preencha os valores corretamente!"


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
//REVISÃO
retorna (1,3,4)
14

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//REVISÃO
retorna (1,3,4)
14

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
//REVISÃO

function retorna2 ( x,y,z ) { 
    if(x!==undefined && y===undefined && z===undefined){
        return x;
    } else if (x!==undefined && y!==undefined && z===undefined){
        return x+y;
    } else if ( x!==undefined && y!==undefined && z!==undefined) { 
        return (x+y)/z;
    } else if  ( x===undefined && y===undefined && z===undefined ) {
        return false;}
    else {
        return null;
    }
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

//REVISÃO
retorna2(2) //2
2

retorna2(3,5) //8
8

retorna2(3,5,2) //4
4

 
```