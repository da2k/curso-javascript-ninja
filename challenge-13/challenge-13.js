(function(){
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    let arr = [1,2,3,4,5];
    console.log( 'O array em formato de string é:', arr.join() );


    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    let sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná'];
    let sudeste = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espírito Santo'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    let brasil = sul.concat(sudeste);
    console.log( '\nAlguns Estados do Brasil:', brasil );


    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    brasil.unshift(['Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins']);
    console.log( '\nMais estados adicionados:', brasil );

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    let primeiroEstado = brasil[0].shift();
    console.log( '\nEstado removido:', primeiroEstado );

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    let newSul = brasil[1].slice(0, 6);

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
    let nordeste = ['Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia'];

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
    brasil = brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:', newSudeste );
    // ?

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:', brasil );


    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
   let newBrasil = [];
    brasil.forEach((item, index) => {
      return newBrasil.push({id: index, estado: item});
    })

    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:', newBrasil );
    // ?

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    let every = brasil.every((item) => {
      return item.length > 7;
    })
    console.log(every ? 'Sim, todos os estados tem mais de 7 letras' : 'Não');

    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    let some = brasil.some((item) => {
        return item == 'Ceará';
    })
    console.log(`O Ceará ${some} incluído`);

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    let map = newBrasil.map((item, index) => {
        return {
          id: item.id++,
          estado: item.estado + ' Pertence ao Brasil'
        }
    })

    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:', map );


    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    let filter = map.filter((item) => item.id % 2 == 0)

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:', filter );
    // ?
})()
