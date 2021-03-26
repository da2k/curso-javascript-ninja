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

    let name = 'Gilmara';

    // MINHA SOLUCAO   
    // console.log(name);
    // name = name.split('');
    // // console.log(name);
    // name.forEach(function(item, index){
    //     let posicao = index + 1;

    //     console.log('"' + item + '"' + ' é a ' + posicao  + 'ª letra do meu nome."');
        
    // });



    console.log( 'As letras do seu nome:' );
    // OUTRA MANEIRA - CORRIGIDA PELO FERNANDO
    // Foi usado um loop para trabalhar com a String, ao inves de passar a String para array.

    for(var i = 0, len = name.length;  i < len; i++ ){

        console.log('"' + name.charAt(i) +'"'+ ' é a ' + (i + 1)+ 'ª letra do meu nome."');
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
    let fullName = 'gilmara-pereira-pimentel';
    
    // MINHA SOLUCAO - ABAIXO SOLUCAO DO PROFESSOR 

    /*fullName = fullName.split('-');
    fullName = fullName.map(function(item){

        let initialCapital = (item.charAt(0).toUpperCase());
        
        item = initialCapital + item.slice(1);  
        return item;

    });

    console.log(fullName.join(' '));*/

    console.log( '\nNome convertido à partir de um slug:' );
    // ?

    console.log(fullName);
    
    var newFullName =  '';
    newFullName = fullName.split('-').map(function(name){

        var upper = name.charAt(0).toUpperCase();
        return upper + name.slice(1);

    }).join(' ');

    console.log(newFullName);

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */

    // MINHA SOLUCAO -  FEITA COM SPLICE
    
    /*let friends = ['Pedro','Guilherme', 'Rafael', 'Matheus', 'Marina'];
    
    let lastIndexOfFriends = friends.length - 1;
    
    let lastItem = friends.splice(lastIndexOfFriends);
    
    console.log(friends.join(', ') + ' e ' + lastItem + ' são meus amigos.');*/

    console.log( '\nMeus amigos:' );
    //ABAIXO SOLUCAO DO PROFESSOR( FEITA COM REDUCE, colocando o index no parametro da funcao)
    // ?
    // ANOTE QUE NO REDUCE, POSSO PASSAR O 'index' 
    //no parametro da funcao - antes estavaos usando (acumulado, atual, array)
    var friends = ['Pedro','Guilherme', 'Mariana', 'Rafael', 'Matheus', 'Marina'];
    
    var phrase = friends.reduce(function(acumulado, atual, index){
            var lastItem = friends.length - 1 ;
            
            var separator = lastItem === index ? ' e ' : ', ';
            return acumulado + separator + atual;
    }).concat(' são meus amigos.')

    console.log(phrase);
    
    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    // ?
    let roberto = 'Roberto';

    // MINHA SOLUCAO - FICOU MUITO COMPLEXO 
    // console.log(roberto.split('').reverse().join('').replace('o', 'a').split('').reverse().join(''));

    // CORRECAO DO FERNANDO - Bem simples - com o replace(), voce pode substituir uma letra ou
    // um trecho de uma string; No caso de Roberto, substituimos 'to'  por 'ta'

    console.log(roberto.replace('to', 'ta'));

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    // ?
    let fernando = 'fernando';
    
    // MINHA SOLUCAO
    //console.log(fernando.substring(3));
    // SOLUCAO Fernando
    console.log(fernando.substring(8,3));
    // Fernando
    // 01234567 - No caso, temos posicoes de 0 a 7 .
    // Apesar que o 'o' esta na posicao '7' e preciso passar '8', para que o 
    // 'o' seja impresso.

   
    // Outra maneira corrigida pelo professor

    console.log(fernando.slice(fernando.lastIndexOf('nando')));

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
    // ?
    let myName = 'gilmara';
    // console.log(myName);

    // MINHA SOLUCAO
    // myName = myName.split('');

    // myName = myName.map(function(item, index){

    //     return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();  
    

    // }).join('')

    // console.log(myName);

    //SOLUCAO DO PROFESSOR
    // NAO TRANSFORMOU A STRING EM ARRAY  - ja fez o loop direto

    console.log(myName);

    var array = [];

    for( var i= 0, len = myName.length; i < len; i++){

       array.push(i % 2 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase());
    }

    console.log(array.join(''));
    })();
