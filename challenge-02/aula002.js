// Operadores Logicos
// && (and)

var x = 3;
var y = 7;

x === 3; //true
y === 5; //false

x === 3 && y === 7; //true (ambos são verdadeiros)
x === 3 && y === 5; //false (um deles é falso)

// || (or)

x === 2 || y === 7; //true (pelo menos um é verdadeiro)

// ! (inverte o valor)

! x === 3; //false (ele testa se o x não é 3, retorna false porque é verdadeiro)
// mas utilizamos teste através do !==

// Operadores Unários
// + converte string em numero 
// concatenar strings

var nome = 'fernando';
var sobrenome = 'daciuk';

var nomeCompleto = nome + ' ' + sobrenome;
var nomeCompleto1 = `${nome} ${sobrenome}`;

console.log(nomeCompleto);
console.log(nomeCompleto1);

// estrutura lexica: conjunto de regras que definem a escrita da linguagem
// case sensitive: diferencia letras maiusculas de minusculas
var animal = 'cachorro';
var Animal = 'coelho'; // animal !== de Animal

console.log(animal);
console.log(Animal);

// identificadores: nomear variavel e funcao
// podem inciar com _ ou $, letras de a a z, letras de A a Z
// podem conter numeros, mas nao inciar
// podem conter qualquer caractere Unicode, mas nao se deve utilizar, para facilitar manutencao

// palavras reservadas: nao se pode utilizar de jeito nenhum

// COMO ATUALIZAR REPOSITÓRIO:

// git clone endereco-ssh-do-repositorio
// git branch: mostra as branchs criadas
// git remote add upstream endereco-ssh-do-repositorio: upstream repositorio remoto
// git fetch upstream: puxar todas as atualizações do repositorio remoto
// git merge upstream/master: atualiza as modificações

// criar branch:
// git checkout -b nome-da-branch
// git checkout nome-da-branch: mudar de branch




