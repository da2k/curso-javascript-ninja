#Javscript Ninja - Aula 2#

##Operadores Lógicos##

###&& (and)

Operador responsável por juntar duas comparações retornando boleanos.
Só retornará "true" se os dois forem verdadeiros,

```javascript
var y = 1
var x = 2
x === 2 && y === 1 //true
```

###|| (or)

Operador responsável por realizar comparações, e retornar boleanos.
Retorna "true" se qualquer um dos dois valores forem verdadeiros.

```javascript
var y = 2
var x = 2
x === 2 || y === 1 //true
```
### ! (not)

Utilizado para "inversão" dos valores.
Utilizamos os sinais diferentes ``` != ``` para testar o valor e ``` !== ``` para testar o valor e tipo.

```javascript
var x = 2
! x === 2 //false - inverte os valores

x != '2' //false - x é igual à string '2', por isto o resultado é 'false'

x !== '2' //true - x é diferente à string '2', estou testando assim pelo tipo também.

x !== 2 //false - x é igual ao valor e  tipo de 2
```

##Operadores unários##

### + (Operador unário +)

Tem por objetivo converter em número (Não causa efeito colateral).

```javascript
+3 //3
+'3' //3
+'Leandro' // NaN - pode ser considerado número.
```

O operador ```+ ``` também concatena. Sempre que vc concatenar uma string, é natural ele concatenar e não somar a string com o valor.

```javascript
'lean'+'dro' //'leandro' - O Javascript concatenou a string
'3' + 3 //33
3 + '3' //33
```

### - (Operador unário -)

Tem por objetivo converter em número negativo (Não causa efeito colateral).

```javascript
-3 //-3
-'3' //-3
-'Leandro' // NaN - pode ser considerado número.
```

### ++ -- (Operador unário de incremento)

Explicado na aula 1, adiciona 1 ou remove 1 à operação. (Causa efeito colateral alterando a variável)

```javascript
var x = 1
x++ // retorna 1 mas a variável já está 2.
++x // 3 utilizado pré-incremento, já retorna o valor atualizado
```

##Estrutura Lexica##

Conjunto de regras de como escrever nesta linguagem.

###Case sensitive

O Javascript diferencia letras maíusculas de minúsculas.

```javascript
var animal = 'cachorro';
var Animal = 'macaco';
animal //'cachorro'
Animal //'macaco'
animal !== Animal //true
```

###Comentários

Dois tipos, de linha: ``` // ``` e de bloco: ``` /* */ ```

###Literais

Valores que aparecem diretamente no programa, que fazem parte do "core" do Javascript

- 12
- 1.2
- 'ninja'
- "ninja"
- true
- null
- {a: 1} (Objeto literal)
- [1, 2] (Array literal)

###Identificadores

Nada mais são que nomes, para nomear variáveis, nomes ...

**Podem iniciar com:**
- _ ou $
- letras a a z
- letras A a Z
- digítos 0 a 9
- qualquer caractere unicode (*mas não deve ser utilizado.. hehehe*)

###Palavras reservadas

Existem palavras reservadas da linguagem, a lista encontra-se [neste link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), que levará ao site da Mozilla.org.

##Instruções condicionais **IF**##

Verifica **SE** a condição é verdadeira ou falsa.

```javascript
var x = 3;
var y = 7;
if (x === 3){
  y = 3;
}
y//3
```
Exemplo utilizando operadores lógicos:

```javascript
var x = 3;
var y = 3;
if(x === y && x ===3) {
  x = 5;
  y = 2;
}
x //5
y //2
```

##Instruções condicionais **else**##

Ele trabalha junto com ``` if  ```.

```javascript
var x = 1;
var y = 1;
if ( x === 2 ) {
  y = 2;
} else {
  y = 10;
}
y //10
```

##Instruções condicionais **else if**##

A instrução ```else if``` possibilita mais testes:

```javascript
x //1
y //10
if ( x === 2 ) {
  y = 2;
} else if( y === 3 ) {
  x = 3;
} else if( x === y ) {
  x = 10;
  y = 100;
} else {
  x = 0;
  y = 0;
}
x //0
y //0
```
