(function(){ 
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log( 'O array em formato de string é:' );
    // ?
    let array = [200, 'Gilmara', 'Pimentel', 55];

    console.log(array.toString());
    
    //tambem poderia ter feito o  direto  como abaixo 
    console.log([1,2,3,4,5,].toString()); 
    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    // ?

    let sul = [ 'Parana', 'Santa Catarina', 'Rio Grande do Sul'];
    let sudeste = [
            'Sao Paulo', 
            'Minas Gerais', 
            'Espirito Santo', 
            'Rio de Janeiro'
];


    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    // ?
    let brasil = sul.concat(sudeste);

    console.log(brasil);
    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log( '\nMais estados adicionados:' );
    // ?
    console.log(brasil.unshift('Amazonas', 'Para', 'Rondonia')); // mostra o numero de item no array apos a adicao(retorna o length do array)
    console.log(brasil);
    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    // ?
    console.log(brasil.shift());
    // console.log(brasil);
    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    // ?
    let newSul = brasil.slice(2,5);


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
    console.log(brasil);
    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    // ?
    let nordeste = [
            'Maranhao', 
            'Piaui', 
            'Ceara', 
            'Rio Grande do Norte', 
            'Paraiba', 
            'Pernambuco', 
            'Alagoas', 
            'Sergipe', 
            'Bahia'
    ]; 
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
    let newSudeste = brasil.splice(5, 4);
    // let newSudeste = brasil.splice(5);Tambem poderia ter passado somente o 5, vai comecar do 5 ate o final

    
    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    // ?
    brasil = brasil.concat(nordeste); // O concat nao tem efeito colateral, portanto atribuimos a propria variavel brasil
    // se a gente nao atribuisse ao brasil essa concatenacao iria ficar perdida, sem uso
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
    let newBrasil = [];
        brasil.forEach(function(item, index){
            
            newBrasil.push({ id: index, estado: item });
            return newBrasil;

        });
    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:' );
    // ?
    console.log(newBrasil);
    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */

    let statesBiggerThanSeven = brasil.every(function(item){
    
        return (item.length > 7);  
    })


    console.log(statesBiggerThanSeven ? "Sim, todos os estados tem mais de 7 letras!" : "Nem todos os estados tem mais de 7 letras!");


    // function sendAnswer(){

    // if(statesBiggerThanSeven === true) {
    //     return "Sim, todos os estados tem mais de 7 letras!"
    // }else {
    //     return "Nem todos os estados tem mais de 7 letras!"
    // }

    // }

    // console.log('Retorno =>>',sendAnswer());

    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    // ?
    console.log(statesBiggerThanSeven);
    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */

    let Ceara = brasil.some(function(item){

        
        return item === 'Ceara';

    })


    console.log(Ceara ? "Ceará está incluído!":"Ceará não foi incluído :(" );
    // function ceara(){

    //     if(Ceara) return "Ceará está incluído!"
        
    //     return "Ceará não foi incluído :("
    // }

    // console.log('Resultado =>>',ceara());

    console.log( '\nCeará está incluído em `brasil`?' );
    // ?
    console.log(Ceara);
    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    // ?
    // 1 Solucao - retornando o objeto;

    // let country = newBrasil.map(function(item){

    //     return item = {
            
    //         id: item.id + 1,
    //         estado: item.estado + ' pertence ao Brasil'
    //     };
    // })

    //Outra forma de fazer

    let country = newBrasil.map(function(item, index){
    
           item.id = index + 1; // item.id++  e outra maneira de fazer
           item.estado += ' pertence ao Brasil'; // receber a concatenacao aqui, o '+' vem na frente;

           return item;
        
    })

    // console.log('Retorno de country', country)
    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    // ?
    console.log(country);
    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    // ?
    let filter = country.filter(function(item){

        return (item.id % 2 === 0);
    });
    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    // ?
    console.log(filter);


})();