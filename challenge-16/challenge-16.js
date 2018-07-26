/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
(function() {

    'use strict';
    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    var name = 'Guilherme';
    var name = name.split('').map(function(cur, index) {
        return cur + ' é a ' + (index + 1) + 'ª letra do meu nome.';
    });
    name = name.join('\n');
    console.log(name);


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
    var fullName = 'guilherme-melo';

    function slug2string(slug) {
        var stringFromSlug = slug.split('-');
        stringFromSlug = stringFromSlug.map(function(cur) {
            return cur.charAt(0).toUpperCase() + cur.substring(1);
        });
        stringFromSlug = stringFromSlug.join(' ');
        return stringFromSlug;
    }

    console.log('\nNome convertido à partir de um slug:');
    console.log(slug2string(fullName));
    // ?

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    console.log('\nMeus amigos:');
    // ?
    var amigos = ['Carlos', 'Christiano', 'Clarisse', 'Aldo', 'Eduardo', 'Caetano'];
    var amigos1 = amigos.slice(0, -1);
    amigos1 = amigos1.join(', ');
    amigos = amigos1.concat(' e ' + amigos[amigos.length - 1] + ' são meus amigos.');
    console.log(amigos);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log('\nEra "Roberto", agora é:');
    var rob = 'Roberto';
    rob = rob.slice(0, -1) + rob.slice(-1).replace('o', 'a');

    console.log(rob);


    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log('\nParte de uma string:');
    // ?
    console.log('Fernando'.substring('Fernando'.lastIndexOf('nando')));

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    var myName = 'Guilherme';
    console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
    var mixedCase = function(name) {
            name = name.split('');
            var counter = 0;
            while (counter < name.length) {
                counter % 2 === 0 ? name[counter] = name[counter].toUpperCase() : name[counter] = name[counter].toLowerCase();
                counter++;
            }
            return name.join('');
        }
        // ?
    console.log(mixedCase(myName));

})()
