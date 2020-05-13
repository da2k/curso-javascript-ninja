(function(){
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */
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
    console.log( 'As letras do seu nome:' );
    //
    let name = 'Alexandre';
    let splittedName = name.split('');
    splittedName.forEach((item,index)=>{
        console.log(`${item} é a ${index +1}ª letra do meu nome.`);
    })

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
    //
    let fullName = 'alexandre-clemente-pinheiro';
    function capitalizeSlug(name){
        if(typeof name!== 'string'){
            return '';
        }
        let split = name.split('-');
        let capitalizedName = split.reduce((acc,value)=>{
            return acc + value.charAt(0).toUpperCase() + value.slice(1) + ' ';
        },'');
        return capitalizedName;
               
    }
    let correctFullName = capitalizeSlug(fullName);
    console.log(correctFullName);
    console.log('Nome original em slug: ', fullName);

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
    //
    let names = ['Alex','Raul','Gil','Diana','Lisa'];

    let nameString = names.join(', ');
    let lastCommaPosition = nameString.lastIndexOf(',');
    let lastString = nameString.slice(lastCommaPosition).replace(',','e');
    
    let newNameString = nameString.substring(0,lastCommaPosition).concat(' '+lastString);

    console.log(newNameString);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    //
    let originalName = 'Roberto';
    let changeName = originalName.substring(0,originalName.length-1).concat('a');
    console.log(changeName)

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    //
    console.log('Fernando'.slice(-5));

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
    //
    let myName = 'MelQuIZEdeQue';
    function upperLowerFunction(myName){
        let isFirstWordInUpperCase = myName.charAt(0) === myName.charAt(0).toUpperCase()
        let split = myName.split('');
         
        let newName = split.map((item,index)=>{

            if(index%2 === 0){
                return isFirstWordInUpperCase ? item.toUpperCase() : item.toLowerCase();
            }else{
                return isFirstWordInUpperCase ? item.toLowerCase() : item.toUpperCase();
            }
        }).join('');
        return newName;
    }

    console.log(upperLowerFunction(myName));//MeLqUiZeDeQuE
})()
