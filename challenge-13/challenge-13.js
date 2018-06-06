(function(){

/*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    let arr = [1,2,3,4,5];
    console.log( 'O array em formato de string é:', arr.toString() );
    // ?

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    let sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
    let sudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    let brasil = sul.concat(sudeste);
    console.log( '\nAlguns Estados do Brasil:', brasil );
    // ?

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    brasil.unshift('Acre', 'Amapá', 'Amazonas');
    console.log( '\nMais estados adicionados:', brasil );

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    let primeiroEstado = brasil.shift();
    console.log( '\nEstado removido:', primeiroEstado );

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    let newSul = brasil.slice(2, 5);

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:', newSul );
    // ?

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:', brasil );
    // ?

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    let nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Piauí', 'Pernambuco', 'Rio Grande do Norte', 'Sergipe'];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:', nordeste );
    // ?

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    let newSudeste = brasil.splice(5);

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:', newSudeste );
    // ?

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:', brasil );
    // ?

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    let newArray = [];
    brasil.forEach((item, idx) => newArray.push({id: idx, estado: item}));
    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:', newArray );
    // ?

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    
    let temSeteLetras = brasil.every((item) => item.length > 7);
    if(temSeteLetras) {
        console.log( '\nTodos os estados de `brasil` tem mais de 7 letras' );
    } else {
        console.log( '\nNem todos os estados de `brasil` tem mais de 7 letras' );
    }
    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    let hasCeara = brasil.some((item) => item === 'Ceará');
    if(hasCeara) {
        console.log( 'Ceará está incluído!' );
    } else {
        console.log( 'Ceará não foi incluído :(' );
    }
    // ?

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    let map = newArray.map((item) => {
	    return {id: item.id + 1, estado:`${item.estado} prtence ao Brasil`};
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
    let filter = map.filter((item) => {
        return item.id % 2 === 0;
    });

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:', filter );
    // ?
})();