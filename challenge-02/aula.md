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
