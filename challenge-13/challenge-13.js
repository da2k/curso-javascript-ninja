(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    array = [1,2,3,4,5];
    console.log( 'O array em formato de string é:' );
    // ?
    console.log(array.join(", "));
    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    // ?
    sul = ['parana','santa catarina','rio grande do sul'];
    sudeste = ['sao paulo','rio de janeiro','espirito santo','minas gerais'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    brasil = ['alagoas','parana','espirito santo'];
    console.log( '\nAlguns Estados do Brasil:' );
    // ?
    console.log(brasil.concat('pernambuco','bahia'));
    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    brasil.push("ceara");
    brasil.push("rio grande do norte");
    brasil.push("sergipe");
    console.log( '\nMais estados adicionados:' );
    // ?
    console.log(brasil);

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    // ?
    brasil.shift();
    console.log(brasil);
    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    // ?
    newSul = [];
    for(var i in brasil){
        for(var j in sul){
            if(sul[j] === brasil[i]){
                newSul.push(sul[j]);
            }
        }
    };
    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:' );
    // ?
    console.log(newSul);
    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    // ?
    console.log(brasil)
    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    // ?
    nordeste = ['bahia','sergipe','alagoas','pernambuco','paraiba','rio grande do norte','ceara','maranhao','piaui']
    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:' );
    // ?
    console.log(nordeste);
    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    // ?
    newSudeste = [];
    for(var i in brasil){
        for(var j in sudeste){
            if(sudeste[j] === brasil[i]){
                newSudeste.push(sudeste[j]);
                brasil.splice(j-1,1);
            }
        }
    };
    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    // ?
    for(var i in brasil){
        for(var j in nordeste ){
            if(!brasil.includes(nordeste[j])){
                brasil.push(nordeste[j]);
            }
        }
    }
    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:' );
    // ?
    console.log(newSudeste);
    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:' );
    // ?
    console.log(brasil);
    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    // ?    
    newBrasil = [];

    brasil.forEach(function(item, index, brasil) {
        newBrasil.push({
            id:index,
            estado:brasil[index]
        });
    });
    
    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil: ', newBrasil );
    // ?

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    // ?
    let maisde7 = brasil.every(function(item){
        return item.length > 7;
    })
    console.log(maisde7 ? 'Sim, todos os estados tem mais de 7 letras!':'Nem todos os estados tem mais de 7 letras!');
    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    // ?
    let ceara = false;
    for (let index = 0; index < brasil.length; index++) {
        if(brasil[index] === 'ceara') ceara = true;
    }
    //outra forma de se fazer
    /*
        var some = brasil.some(function(item){
            return item === 'ceara';
        });
    */

    console.log(ceara ? 'Ceará está incluído!':'Ceará não foi incluído :(');
    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    // ?
    map = brasil.map(function(item,index,brasil){
        return {
            id:(newBrasil[index].id+1),
            estado:newBrasil[index].estado+' pertence ao Brasil.'
        };
    });



    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:', map );
    // ?

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    // ?
    var filter = brasil.filter(function(item,index,brasil){
        return map[index].id % 2 === 0; 
    });
    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:', filter );
    // ?

}());
