# Aula 13
##ToString: 
Converte o array em uma string;
Utilização: 

```js
    console.log([1,2,3,4,5,6].toString())
```

##Shift: 
Remove itens no inicio do array;
Utilização: 

```js
    console.log(brasil.shift())
```

##Slice: 
cria um novo array de um outro array, através dos parâmetros passados;
Utilização: 

```js
    var newSul = brasil.slice(2,5);
```

##Splice: 
Adiciona ou remove itens no array;
Utilização: 

```js
    var newSudeste = brasil.splice(5, 4)
```

##Concat: 
Concatena itens no array;
Utilização: 

```js
    brasil = brasil.concat(nordeste);
```

##ForEach: 
Passa por todos os itens do array e retorna o que for definido;
Utilização: 

```js
    brasil.forEach(function (item, index) {
        newBrasil.push({id: index , estado: item});
    })
```

##Every: 
O some retorna o true se todos os itens da expressão forem verdadeiros.
Utilização: 

```js
    var result = brasil.every(function (item) {
        return item.length > 7;
    })
```

##Some: 
O some retorna o true se um dos itens da expressão for verdadeiro.
Utilização: 

```js
    var some = brasil.some(function (item) {
        return item === 'Ceará';
    })
```

##Map: 
O retorno do map deve ser definido, pois ele retorna exatamente o que for especificado.
Utilização: 

```js
 var map = newBrasil.map(function(item, index) {
        return {
           id: item.id ++,
           estado: item.estado += ' pertence ao Brasil',
        };

       // ou return item;
        
    }) 
```

##filter: 
O filter retorna o item!
Utilização: 

```js
array.filer(function(item, index){
    return item;
})
```

# Aula 14

## Reduce
Retorna o valor acumulado mais o valor atual
Quando utilizado com números realiza o cálculo matemático conforme a expressão passada e com texto, concatena.
```js
var arr = [1,2,3,4,5];
var reduce = arr.reduce(function(acc, atual, index, array){
    return acc + atual;
}, 0);

console.log(reduce)

/* 
O valor do retorno é 15...
Forma que é feito o cálculo
1 -> 0 + 1 = 1
2 -> 1 + 2 = 3
3 -> 3 + 3 = 6
4 -> 6 + 4 = 10
5 -> 10 + 5 = 15
*/
```

## ReduceRight
Retorna o valor acumulado mais o valor atual, porém começa da direita para a esquerda. O que pode fazer toda a diferença se for utilizado para realizar cálculos matemáticos.
```js
var arr = [1,2,3,4,5];
var reduce = arr.reduceRight(function(acc, atual, index, array){
    return acc + atual;
}, 0);
```

## IndexOf

Procura se um valor existe no index de uma array

```js
var arr[1,2,3,4,5];
console.log(arr.indexOf(3))
// retorna o número 2 que é o index do número 3. quando index não existe, retorna -1
// Pode ser inicializado a partir de um um idex especifico.

console.log(arr.indexOf(3, 4))

```

Sempre que o retorno for " >= 0 " o item existe no array.

## lastIndexOf

É a mesma ideia do IndexOf, porém começa do último item do array. 

OBS.: Não inverte a posição de indexação dos intens no array.

