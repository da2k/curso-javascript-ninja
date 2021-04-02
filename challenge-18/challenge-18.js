    (function(){
        
    'use strict';

    /*        
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    //
    
        
     Essa FOI MINHA SOLUCAO, POREM COM O (/\D/g) resolve o problema, conforme
    a solucao do professor
       
    // function cleanCPF(cpf){ 

        let unformattedCpf;

        unformattedCpf = cpf.replace(/(\d+)[\s?.-](\d+)[\s?.-](\d+)[(\s?)-x][-\s]?\s?(\d+)/g, function(total, d1,d2, d3,d4){

            return d1 + d2 + d3 + d4;
        })
        return unformattedCpf;
        
     };   

    let cpf1 = cleanCPF('049-214 3421-1');
    let cpf2 = cleanCPF('210.458.522-05');
    let cpf3 = cleanCPF('735 500 794 - 22');
    let cpf4 = cleanCPF('101.123-131x32');
    // ?
    
    console.log ('unformatted Cpf:', cpf1);
    console.log ('unformatted Cpf:', cpf2);
    console.log ('unformatted Cpf:', cpf3);
    console.log ('unformatted Cpf:', cpf4);
    
    */ 
    
    
    function cleanCPF(cpf){

        return cpf.replace(/\D/g, '');
     }
    

    let cpf1 = '049-214 3421-1';
    let cpf2 = '210.458.522-05';
    let cpf3 = '735 500 794 - 22';
    let cpf4 = '101.123-131x32';

    let cpfArray = [];
    cpfArray.push(cpf1, cpf2, cpf3,cpf4);
    
    let unformattedCpf = cpfArray.map(function(item){

        return cleanCPF(item);
    });

    console.log(unformattedCpf.join(', '));

    /*Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    console.log( '\nFormatando CPFs corretamente:' );
    // ?
    
    // Minha SOLUCAO
    // let formattedCpf = unformattedCpf.map(function(item){

    //     return item.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    // });

    // console.log(formattedCpf.join(', '));
     
    
    // O professor usou a expressao regular acima com o forEach - Encadeou o retorno da funcao cleanCpf com o replace
    // Mostrou outra solucao usando a funcao de CallBack no replace (apesar de ficar mais verboso, da certo tambem);

        cpfArray.forEach(function(item){

            console.log(cleanCPF(item).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
                
                function(regex,  arg1, arg2, arg3, arg4){
                    // senao colocar a regex no parametro, a regex sera impressa no console.log tambem

                    return arg1 + '.'+ arg2 + '.'+ arg3 + '-' + arg4;

                }
            ));

        });

    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */

    let text = "Os meses de janeiro, junho e julho começam com a letra j."


    console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
    // ?
    
    //MINHA SOLUCAO
    console.log(text.match(/j\w{3}o/g));
    //SOLUCAO DO PROFESSOR:
    console.log(text.match(/ju[nl]ho/g)); // A lista [] vai verificar n ou l  - A lista representa somente 1 caractere
    console.log(text.match(/ju(n|l)ho/g));  // O parentese serve para agrupar e capturar, neste caso estamos agrupando
    console.log(text.match(/junho|julho/g));

    //IMPORTANTE: Dentro de lista  caracteres especiais sao automaticamente escapados, ou seja dentro da lista caracteres especiais 
    //sao considerados caracteres LITERAIS

    //Ex no mesmo texto 
    text = "Os meses de janeiro, ju|ho e ju$ho começam com a letra j.";
    console.log(text.match((/ju[$|]ho/g)));
    // ) ["ju|ho", "ju$ho"]


    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    console.log( '\nMatch com a abertura de uma tag HTML:' );
    // ?
    let html = "<div><section><blockquote>Texto <img /></blockquote></section></div>";
    console.log(html.match(/<\w+>/g));


    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    
    console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):');
    let emptyTag = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"

    console.log(emptyTag.match(/<\w+><\/\w+>/g));
    // ?

    /*
    Vamos complicar um pouco agora :D

    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.

    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    console.log( '\nFazer replace dos textos das tags:' );
    // ?

   let textExample =  "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";
    
   //fazendo com esta RegExp da certo tambem (/<(\w+)>([^<]+)<\/\w+>/g ) - O professor usou ela
   //SOLUCAO DO PROFESSOR: - Ficou bem mais simples
   
//    console.log(textExample.replace(/<(\w+)>([^<]+)<\/\w+>/g, '<$1>O texto dentro da tag "<$1>" é "$2"</$1>\n' ));
   
// Tambem daria para fazer pegando toda a tag   
   // (<(\w+)>)([^<]+)(<\/\w+>) :  aqui tem 4 capturas
   // (<(\w+)>):  1 da tag inteira , 1 da tag (h1)

   console.log(textExample.replace(/(<(\w+)>)([^<]+)(<\/\w+>)/g, '$1O texto dentro da tag "$2" é "$3"$4\n' )); 
   
   // MINHA SOLUCAO
   // Da maneira que fiz abaixo, usei a funcao de callback e criei um objeto trocando o texto
//    textExample.replace(/<(\w+)>([^<]+)/g, function(regex, group1, group2){

//             let insideText = {

//                 h1: 'Novo Titulo',
//                 p: 'Novo paragrafo',
//                 footer: 'Novo'
//             }

//             console.log('\n<'+group1+'>O texto dentro da tag ' + '"'+ group1 +'"' + ' é '  +'"'+ insideText[group1]+'"'+ '</'+group1+'>');
//            //\n aqui e para quebrar linha
//     });
  

    })();  

    