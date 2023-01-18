(function(){
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
var array = [1,2,3,4,5,6,7,8];
array.join( ' ' );
'1 2 3 4 5 6 7 8'
[1,2,3,4,5,6,7,8].toString();
'1,2,3,4,5,6,7,8'  

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
var sul= ['Parana','Rio Grande do Sul','Santa Catarina'];
var sudeste = ['Minas Geras','São Paulo','Rio de Janeiro', 'Espirito Santo'];  

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
var brasil = sul.concat(sudeste);
brasil
['Parana,Rio Grande do Sul,Santa CatarinaMinas Geras,São Paulo,Rio de Janeiro,Espirito Santo']
/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
brasil.unshift('Bahia','Goias','Distrito Federal');
4
(4) ['Bahia', 'Goias', 'Distrito Federal', 'Parana,Rio Grande do Sul,Santa CatarinaMinas Geras,São Paulo,Rio de Janeiro,Espirito Santo']
/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
brasil.shift(0);
'Bahia'
brasil
(3) ['Goias', 'Distrito Federal', 'Parana,Rio Grande do Sul,Santa CatarinaMinas Geras,São Paulo,Rio de Janeiro,Espirito Santo']

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var Newsul = brasil.slice(0,3);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
(3) ['Parana', 'Rio Grande do Sul', 'Santa Catarina']

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
brasil
(7) ['Parana', 'Rio Grande do Sul', 'Santa Catarina', 'Minas Geras', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Ceara','Alagoas','Sergipe','Rio grande do norte','Bahia','Maranhão','Paraiba','Pernambuco','Piaui'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
(9) ['Ceara', 'Alagoas', 'Sergipe', 'Rio grande do norte', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piaui']

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
var newSudeste = brasil.splice(3,4);
  

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
brasil=brasil.concat(nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
newSudeste
(4) ['Minas Geras', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
brasil
(12) ['Parana', 'Rio Grande do Sul', 'Santa Catarina', 'Ceara', 'Alagoas', 'Sergipe', 'Rio grande do norte', 'Bahia', 'Maranhão', 'Paraiba', 'Pernambuco', 'Piaui']
/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
var newBrasil=[];
brasil.forEach(function(item,index){newBrasil.push({id:index,estado:item});});  

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
newBrasil
(12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{id: 0, estado: 'Parana'}
1
: 
{id: 1, estado: 'Rio Grande do Sul'}
2
: 
{id: 2, estado: 'Santa Catarina'}
3
: 
{id: 3, estado: 'Ceara'}
4
: 
{id: 4, estado: 'Alagoas'}
5
: 
{id: 5, estado: 'Sergipe'}
6
: 
{id: 6, estado: 'Rio grande do norte'}
7
: 
{id: 7, estado: 'Bahia'}
8
: 
{id: 8, estado: 'Maranhão'}
9
: 
{id: 9, estado: 'Paraiba'}
10
: 
{id: 10, estado: 'Pernambuco'}
11
: 
{id: 11, estado: 'Piaui'}

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
var every = brasil.every(function(item){
return item.length > 7;
});
console.log( every ? 'Sim, todos os estados tem mais de 7 letras!' : 'Nem todos os estados tem mais de 7 letras! ');
Nem todos os estados tem mais de 7 letras! 

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
var some = brasil.some(function(item){
return item === 'Ceara';
});
console.log ( some ? 'Ceará está incluído!' : 'Ceará não foi incluído :(');
Ceará está incluído!

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newBrasil.map(function(item,index){
item.id++;
item.estado += 'Pertence ao Brasil';
});

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
newBrasil
(12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{id: 1, estado: 'ParanaPertence ao Brasil'}
1
: 
{id: 2, estado: 'Rio Grande do SulPertence ao Brasil'}
2
: 
{id: 3, estado: 'Santa CatarinaPertence ao Brasil'}
3
: 
{id: 4, estado: 'CearaPertence ao Brasil'}
4
: 
{id: 5, estado: 'AlagoasPertence ao Brasil'}
5
: 
{id: 6, estado: 'SergipePertence ao Brasil'}
6
: 
{id: 7, estado: 'Rio grande do nortePertence ao Brasil'}
7
: 
{id: 8, estado: 'BahiaPertence ao Brasil'}
8
: 
{id: 9, estado: 'MaranhãoPertence ao Brasil'}
9
: 
{id: 10, estado: 'ParaibaPertence ao Brasil'}
10
: 
{id: 11, estado: 'PernambucoPertence ao Brasil'}
11
: 
{id: 12, estado: 'PiauiPertence ao Brasil'}

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
var filter = map.filter(function(item,index){ return item.id % 2 === 0;});
})();
