(function(){
'use strict';
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
console.log( 'As letras do seu nome:' );
var name = 'Herick';
for( var letra = 0; letra < name.length; letra++) {
    console.log(name.charAt(letra) + ' é a ' + (letra + 1) + 'ª letra do meu nome.');
}

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log( '\nNome convertido à partir de um slug:' );
var fullName = 'herick-allain-soares-cunha';
var fixSlug = function fixSlug(slug) {
    var fixedSlug = slug.split('-').map( function(item){
        return item.charAt(0).toUpperCase() + item.slice(1);
    }).join(' ');
    return fixedSlug;
}

console.log(fullName);
console.log(fixSlug(fullName));

/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log( '\nMeus amigos:' );
var arrNome = ['João', 'Maria', 'Roberto', 'Pedro', 'Marcos'];
/*   var concatenar = function concatenar(array) {
        var fixedNames = array.map( function(item, index, array) {
            if( index <= (array.length -3)) {return item + ', ';}
            else if ( index === (array.length -2)) {return item + ' e ';}
            else if ( index === (array.length -1)) {return item;}

        });
        var joinedNames = fixedNames.join('');
        return joinedNames
    }
*/

// outra forma
var concatenar = arrNome.reduce( function(acumulado, atual, index) {
    var separator = arrNome.length -1 === index ? ' e ' : ', ';
    return acumulado + separator + atual;
});


var frase = concatenar.concat(' são meus amigos.')
console.log(frase);
/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log( '\nEra "Roberto", agora é:' );
console.log(frase.replace('Roberto', 'Roberta'));

/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
console.log( '\nParte de uma string:' );
console.log('fernando'.substring(8, 3));

/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
var myName = 'herICK';
var intercalar = function intercalar( string ) {
    string = string.toLowerCase();
    for(var letra = 0; letra <= string.length; letra += 2) {
        var low = string.charAt(letra);
        var up = low.toUpperCase();
        string = string.replace(low, up);
    }
    return string;
}

console.log(intercalar(myName));















})();
