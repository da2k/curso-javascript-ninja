(function (win, doc) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  /* Reivsão dos conteúdos vistos, separados por aulas(semanas)*/

  /*
  aula 01
  - variaveis e tipos de dados
  - operadores artiméticos
  - operadores de igualdade e relacionais
  - funções
  */
  console.log('Aula 01');
      console.log('- variaveis e tipos de dados');
          var varTypes = 'Variáveis podem ser: numbers, strings, boolean, undefined, functions, objects, arrays';
          console.log(varTypes);
      console.log('- operadores artiméticos');
          var sum = 2+4;
          var minus = 152-45;
          var mult = 30*45;
          var divid = 99/3;
          var mod = 10%2;
          console.log('Os operadores realizam cáculos como\n soma, var sum = 2+4 = '+sum+
                      '\n subtração, var minus = 152-45 = ' +minus+
                      '\n multiplicação, var mult = 30*45 = '+mult+
                      '\n divisão, var divid = 99/3 = '+divid+
                      '\n resto inteiro de uma divisão, var mod = 10%2 = '+mod)
      console.log('- operadores de igualdade e relacionais');
          console.log('Usados para comparar e relacionar:\n == para verificar valor igual \n === para verificar valor e tipo igual \n != verificar se é difrente\n > maior que \n < menor que \n >= maior ou igual \n <= menor ou igual');
          console.log('Exemplos: 1 > 2 = '+(1 > 2)+' | 1 < 2 = '+(1 < 2)+' | 10 > 10 = '+(10 > 10)+' | 10 >= 10 ='+(10 >= 10));
      console.log('- funções');
          console.log('executar tudo o que se deseja. Pode ser literal ou de callback, se for um paramêtro que não será repetido.\n Exemplo: function makeSum(){ return 10 + 5; } , o resultado será = ', makeSum() );
          function makeSum(){ return 10 + 5; }

  /*
  aula 02
  - Operadores Lógicos
  - Operadores Unários
  - Estrutura Léxica
  - Instruções condicionais - IF
  */
  console.log('\nAula 02');
      console.log('- Operadores Lógicos');
          console.log('Lógico E - &&, neste caso para a condição ser verdadeira todos os resultados precisam ser true \n Lógico OU - ||, um pelo menos um resultado dever ser verdadeiro \n Lógico NÃO - !, neste caso a se condição for verdadeira será false e vice-versa ');
      console.log('- Operadores Unários');
          console.log('Quando se tem um valor só. Operadores + e -. Se o + vier antes de um valor, vai tentar converter em número e - vai fazer a mesma coisa e inverter o valor. \n ++ e -- incrementa ou decrementa, pode vir antes ou depois do valor, e isso vai defirnir se é pré ou pós.');
      console.log('- Estrutura Léxica');
          console.log('Qual modo para escrever na linguagem, nível mais baixo. Como case sensitive, comentários, literais, identificadores, palavras reservadas, etc.');
      console.log('- Instruções condicionais - IF');
          console.log('Primeira instrução condicional. Se o valor do IF for true, ele deve executar determinada ação.');
          console.log('Exemplo: if(2>1){console.log(\'Dois é maior que um\')} :');
          if(2>1){console.log('Dois é maior que um.')}
  /*
  aula 03
  - Tipos de dados e objetos
  - Métodos de objeto
  */
  console.log('\nAula 03');
      console.log('- Tipos de dados e objetos');
          console.log('2 tipos: Primitivos (number, string, boolean, null e undefined) e de objetos.\n Tudo o que não for primitivo, ou seja, todo o restante é objeto.');
      console.log('- Métodos de objeto');
          console.log('É quando atribui uma função para a propriedade de um objeto.');
  /*
  aula 04
  - Truthy e Falsy
  - Condicional Ternário
  - Escopo de variáveis e funções
  */
  console.log('\nAula 04');
      console.log('- Truthy e Falsy');
          console.log('Todo valor que convertido pra boolean é true é um truthy e todo que é negativo é um falsy.\n Falsy: undefined, null, NaN, 0, -0, \' \' ou " ". Outra forma de testar é usando !! na frente do valor. ');
      console.log('- Condicional Ternário');
          console.log('Forma resumida do if. Exemplo 1>2 ? \'mostra se for verdadeiro\' : \'mostra se for falso\' ');
              console.log(1 > 2 ? 'mostra se for verdadeiro' : 'mostra se for falso');
      console.log('- Escopo de variáveis e funções');
          console.log('Variáveis globais e locais. Vantagens e desvantagens de cada uma. \n Global, vantagem que está disponível no código todo, desvantgem, gasto de memória e problema de variáveis com mesmo nome. \n Local: o contrário vantagem gasta menos memória e menos erro de duplicidade, porém funciona apenas na função que está.');

  /*
  aula 05
  - Retorno de funções com arrays e objetos
  - Parâmetros de Funções como arrays e objetos
  */
  console.log('\nAula 05');
      console.log('- Retorno de funções com arrays e objetos');
          console.log('Além dos tipos primitivos, pode rertornar arrays e objetos. \n Obs: Só pode ter um retorno por função. \n Esses valores podem ser acessados.\n Pode criar um escopo dentro de uma função e usá-la para acessar em outros locais, como se fosse global.');
      console.log('- Parâmetros de Funções como arrays e objetos');
          console.log('Passando arrays e objetos como parâmetros de funções e podendo acessar propriedades deles direto na função e exibindo no retorno.');

  /*
  aula 06
  - Operador vírgula e estrutura condicional switch
  - Estrutura de repetição While
  */
  console.log('\nAula 06');
      console.log('- Operador vírgula e estrutura condicional switch');
          console.log('Separa valores e permite que mais de uma variáel seja atribuída por linha e o mesmo no returno de funções.');
      console.log('- Estrutura de repetição Switch');
          console.log('Recebe parâmetro que aciona Cases, necessário usar break ou return nos cases, para não executar tudo.\n Termina com default, caso nenhum case seja atendido')
      console.log('- Estrutura de repetição While');
          console.log('Enquanto a expressão do while for verdadeira ele executa o que estiver dentro. Quando for falsa, ele sai e continua o código. \n  Cuidado para não cair num looping infinito.')

  /*
  aula 07
  - O operador módulo
  - Arrays - a propriedade length
  - Arrays - método "push()" e Loop "for"
  */
  console.log('\nAula 07');
      console.log('- O operador módulo');
          console.log('Operador % que retorna o resto inteiro da divisão.\n Pode ser usado, por exemplo, para trazer números pares ou impares.');
      console.log('- Arrays - a propriedade length');
          console.log('Retorna o tamanho do array, quantos elementos ele possui.');
      console.log('- Arrays - método "push()" e Loop "for"');
          console.log('Método Push adciona item no final do Array.');
          console.log('Loop FOR, tem uma variável inicial, uma condição e o que deve fazer ao final (expressão final).\n Ex: for (var i = 0, i < 10, i++) {executa o que estiver aqui}');

  /*
  aula 08
  - A importância de nomear funções
  - Introdução à Functional Programming
  */
  console.log('\nAula 08');
      console.log('- A importância de nomear funções');
          console.log('Para ficar claro o que a função faz e também para ficar fácil chamá-la quando necessário, facilitar o debug e permite a invocação dela por outras funções ou variáveis, sem nomear não é possível.');
      console.log('- Introdução à Functional Programming');
          console.log('Forma de programar baseado em funções. No JS funções tem tratamento de 1º classe, o que você faz com objetos você pode fazer com funções');

  /*
  aula 09
  - Escopo de funções
  - hoisting
  - IIFE - Immediately-Invoked Function Expression
  */

  console.log('\nAula 09');
      console.log('- Escopo de funções');
          console.log('Pode ter função dentro de função, escopo da principal vale para as internas, mas das internas não valem para a principal.');
      console.log('- hoisting');
          console.log('hoisting = elevação, em tradução por alguns especialistas. Sempre que tem uma função literal, mesmo que você chame depois, o JS move pra cima.');
      console.log('- IIFE - Immediately-Invoked Function Expression');
          console.log('Encapsular todo o código (cria uma expressão) para ficar numa função auto executável, mantendo assim as variáveis locais evitando erros de memória e incompatibilidade com outros códigos.');

  /*
  aula 10
  - Wrapper Objects
  - typeof
  */
  console.log('\nAula 10');
      console.log('- Wrapper Objects');
          console.log('Valores primitivos não são obejtos, porém tem propriedades.\n Wrappers: construtores. Criam novos objetos com NEW, e sem convertem o objeto. Construtores são obejtos, então eles tem propriedades e passam para os valores primitivos.');
      console.log('- typeof');
          console.log('Teste os tipos de arquivos. Tem bug, NULL e Array retorna como objeto. Ideal usar somente com valores primitivos(string, number e boolean).');
  /*
  aula 11
  - Laços (Loops)
  - Saltos
  */
  console.log('\nAula 11');
      console.log('- Laços (Loops)');
          console.log('Falado anteriormente While e For./n Do/while, quase igual ao while, mas é sempre executado na primeira vez, só então checa a condição.\n For in, serve para percorrer propriedades do obejto. Ele é mais lento. Pode ser usado pra checar se tem a propriedade no obejto. ');
          console.log('Exemplo: var car = {brand:"VW", model: "Gol", year: 2013}\n for(var prop in car) {console.log(prop)}');
          var car = {brand:"VW", model: "Gol", year: 2013};
          for(var prop in car) {console.log(prop)}
          console.log('Pra checar se existe: console.log("brand" in car)?','brand' in car );
      console.log('- Saltos');
          console.log('Statemenst em JS usados para pular partes: return, break, continue, ');

  /*
  aula 12
  - Criação de objetos
  - Criação de objetos - Object.create
  - Métodos de objeto
  - Arrays - Métodos
  */
  console.log('\nAula 12');
      console.log('- Criação de objetos');
          console.log('Objetos são mutáveis e manipulados por referência.\n Criando: Literais, como construtor(new), com object.create.\n Objetos tem prototype.');
      console.log('- Criação de objetos - Object.create');
          console.log('Herança. Quando cria um objeto com create, ele herda tudo do objeto principal. Se o principal for alterado, ele também, agora se ele for alterado, a propriedade que for alterada perda a herança e fica só com ele.\n obj.hasOwnProperty("x") para saber se X é do obejto mesmo.');
      console.log('- Métodos de objeto');
          console.log('Object.keys - retorna um Array com as propriedades do objeto');
          console.log('Object.isPrototypeOf(otherObj) - para saber o objeto foi herdado pelo otherObj.');
          console.log('JSON.stringify(obj) - transformar objeto em string');
          console.log('JSON.parse(str) - transformar string em objeto');
      console.log('- Arrays - Métodos');
          console.log('Push() adciona itens ao final do Array e Pop() remove itens do final.');
          console.log('Join() - para juntar itens do array em uma string. Se não passar parâmetro, será sempre separado por vírgulas.');
          console.log('Reverse() - inverter indice dos itens do Array. Efeito colateral: Altera o array principal');
          console.log('Sort() - ordena o Array em ordem alfabética. Efeito colateral: Altera o array principal');

  /*
  aula 13
  - Arrays - toString, concat, unshift e shift
  - slice e splice
  - forEach, every, some
  - map, filter
  */
  console.log('\nAula 13');
      console.log('- Arrays - toString, concat, unshift e shift');
          console.log('toString() - pega todos os itens do Array, transforma em string separando por vírgula, igual faz o Join(), mas aqui não tem parâmetro.');
          console.log('concat() - faz a concatenação do Array com o que for passado por parâmetro, sem alterar o array principal.');
          console.log('unshift() - adciona um item no início do array.');
          console.log('shift() - remove um item no início do array. ');
      console.log('- slice e splice');
          console.log('slice(indiceOndeComeça, ateQueIndiceDeveIr) - retorna pedaço do Array que a gente selecionar. Não modifica Array principal.');
          console.log('splice() - modifica Array principal! Pode ser usado tanto pra adcionar, quanto remover itens.');
          console.log('  se passar somente um parâmetro, ex:arr.splice(3), ele vai remover do indice 3 em diante');
          console.log('  para remover um trecho, splice(indiceComeça, QuantosElementosRemove), ex: arr.splice(1,3), vai remover do indice 1, 3 elementos.');
          console.log('  para adcionar: arr.splice(1, 0, "a", "b", "c") - a partir do indice 1, não remove nada e adciona "a","b" e "c"');
      console.log('- forEach, every, some');
      console.log('forEach() - funciona quase como o loop for, porém de uma forma mais elegante.\n Recebe uma função por paramêtro e esta pode receber até três: item, index e o próprio array.');
          console.log('Exemplo: var arr = ["a","b","c","d","e","f]\n arr.forEach(function(item, index, array){\n console.log(item, index,array);\n})');
          var arrxpto1 = ['a','b','c','d','e','f']
          arrxpto1.forEach(function(item, index, array){
              console.log(item, index, array);
          })
      console.log('- every() - Recebe uma função por paramêtro e esta pode receber o item do array.Sempre retorna true ou false. Percorre então todo o Array para ver se a condição da função for atendida por TODOS os itens, caso positivo retorna true, senão, false.');
          console.log('Exemplo: var arrxpto2 = [1,2,3,4,5,6,7]; \n var every = arrxpto2.every(function(item){\n return item <5;\n});\n console.log(every);');
          var arrxpto2 = [1,2,3,4,5,6,7];
          var every = arrxpto2.every(function(item){
              console.log(item);
              return item < 5;
          });
          console.log(every, 'retornou falso, pois nem todos os itens do array são menores que cinco - tem o próprio 5 (onde ele parou), 6 e 7');
      console.log('- some() - praticamente o mesmo funcionamento do every, porém aqui se um elemento atender à condição ele traz o resultado true e já para a checagem nele.\n Utilizando o mesmo array e função acima e só trocando every por some veja o resultado.');
          var some = arrxpto2.some(function(item){
              console.log(item);
              return item < 5;
          });
          console.log(some, '1 é menor que 5, então é true e parou aí.');
      console.log('- map, filter');
      console.log('map() - recebe função por paramêtro. Vai percorrer todo o array, por todos os itens, porém vai retornar um novo arry com os valores que forem retornados.\n Recebe por parâmetros item, index e array.\n Praticamente mesma funcionalidade do ForEach, mas já gera um novo array.');
          console.log('Exemplo usando o mesmo array xpto2 de cima: var arrayFromMap = arrxpto2.map(function(item){\n return item*2;\n});');
          var arrayFromMap = arrxpto2.map(function(item){
              return item*2;
          });
          console.log(arrayFromMap, 'recebeu todos os valores do array xpto2 multiplicando por 2.');
          console.log('usar map quando se quer um novo Array e ForEach quando precisa apenas utilizar os itens, sem gerar um novo array.');
      console.log('filter() - também recebe função com os paramêtros item, index, array; vai gerar um novo array somente com resutaldo dos filtros colocados na função.');
          console.log('Exemplo usando o mesmo arrays dos anteriores: var arrayFromFilter = arrxpto2.filter(function(item){\n return item % 2 === 0;\n});');
          var arrayFromFilter = arrxpto2.filter(function(item){
              return item % 2 === 0;
          });
          console.log(arrayFromFilter, 'criou o novo array apenas com os números pares.');

  /*
  aula 14
  - reduce() e reduceRight()
  - indexOf(), lastIndexOf() e isArray()
  */
  console.log('\nAula 14');
      console.log('- reduce() e reduceRight()');
      console.log('reduce() - ele reduz o Array. Não modifica o array principal, retorna um valor reduzindo todos os itens do array no valor da redução.\n Recebe uma função também com paramêtros: valorAcumulado, valorAtual, indice e Array.');
          console.log('Exemplo: var arrxpto3 = [1,2,3,4,5];\n var arrayReduced = arrxpto3.reduce(function(acum, actual){\n return acum + actual;\n},0); ');
          var arrxpto3 = [1,2,3,4,5];
          var arrayReduced = arrxpto3.reduce(function(acum, actual){
              return acum + actual;
          },0);
          console.log(arrayReduced);
          console.log('Ele passou por todo o array somando o valor acumluado (que no caso passamos 0 ao final da função) com o valor atual. Ou seja:\n0+1\n1+2\n3+3\n6+4\n10+5');
      console.log('reduceRight() - praticamente igual ao reduce mas começa com os valores da direita pra esquerda, ou seja do final pro começo.');
      console.log('- indexOf(), lastIndexOf() e isArray()');
      console.log('indexOf() - procura se um valor existe no indice do array. E retorna o indice do valor. Se não existir ele retornar -1.\n Tem um segundo paramêtro, que se passar, diz a partir de qual indice deve inicar a busca. No caso do nosso array, se colocar indice 2, vai procuar nos indices 2 , 3 e 4');
          console.log('No exemplo abaixo, criei array com nomes e verifquei por um deles.');
          var arrayNomes = ['Fabio', 'Ale', 'Mauro', 'Pati', 'Nick'];
          console.log(arrayNomes.indexOf('Ale'), 'ele encontrou e retornou o indice do nome.');
      console.log('lastIndexOf() - faz o mesmo do indexOf, mas começa a procurar do final pro início. A difernça principal está no segundo paramêtro, ele inicia a partir do indice colocado, mas ele vai pra esquerda. Ou seja, se colocar inidce 2, ele vai procurar no indices, 2, 1 e 0.');
      console.log('isArray() - ele diz se o elemento passado por paramêtro é um Array ou não. Usar isso por conta do erro do typeof que dize que array é objeto.');
          console.log('Exemplo: console.log(Array.isArray(arrayNomes));', Array.isArray(arrayNomes));

  /*
  aula 15
  - JS no browser
  - O objeto this
  - Objeto arguments
  */
  console.log('\nAula 15');
      console.log('- JS no browser');
          console.log('Instruções de como adcionar script no html.');
      console.log('- O objeto this');
          console.log('this - Em método de objetos: referência ao objeto; Em funções, pode ter 2 valores: referência ao objeto global (Windows no browser), referenciado ao objeto instanciado.');
      console.log('- Objeto arguments');
          console.log('arguments - ele é um objeto, array-like, parece array, funciona como array, mas não é array.\n Dentro uma função o arguments são todos os argumentos passados para a função.');
          console.log('Exemplo: function myFuncArg(arg1, arg2, arg3){\n return arguments;\n}');
          console.log('console.log(myFuncArg(\'texto\', 999, true));');
          function myFuncArg(arg1, arg2, arg3){
            return arguments;
          }
          console.log(myFuncArg('texto', 999, true));

  /*
  aula 16
  - use strict - Criação de variáveis sem o "var"
  - use strict - uso do with e global this === undefined
  - use strict - o operador delete, objetos e funções
  - Objeto String
  */
  console.log('\nAula 16');
      console.log('- use strict - Criação de variáveis sem o "var"');
          console.log('use strict; -  Entrou na ecma script 5. Corrigie algumas coisas que o javascript permite mas que não devem ser utilizadas.\n Ex: Quando não utiliza a palavra var cria uma variável global, o use strict não permite isso.');
      console.log('- use strict - uso do with e global this === undefined');
          console.log('Não permite uso do with - serve pra diminuir o tamanho de um objeto.\n Cria um escopo para objetos com muitos níveis.');
          console.log('O this no escopo local use strict é tratado como undefined e não como widow.');
      console.log('- use strict - o operador delete, objetos e funções');
          console.log('delete - retorna erro se não puder apagar. Por exemplo: tentar apagar uma variável.');
          console.log('obejtos - dentro do use strict as propriedades devem ter nomes diferentes.');
          console.log('funções - argumentos devem ter nomes diferentes.');
      console.log('- Objeto String');
          console.log('Praticamente só tem uma propriedade própria: .length - que conta o número de caracteres.');
          console.log('Métodos: charA(indice)t - diz qual é a letra do indice passado no paramêtro.');
          console.log('.concat(str1, str2, ..., strN) - funciona exatamente como o concat do array.');
          console.log('.indexOf(string [,start]) - mesmo uso do indexof do array.');
          console.log('.lastIndexOf(string [,start]) - mesmo uso do lastindexof do array.');
          console.log('.replace(string, newString) - método que troca o texto passado por outro.');
          console.log('.slice(start [,end]) - mesmo uso arrays');
          console.log('.split([separador] [,limit]) - quebra a string e retorna um Array');
          console.log('substring(start [,end]) - basicamente faz o mesmo que o slice. Diferença que se inverter os números, se o primeiro for maior, ele inverte e pega de trás pra frente.');
          console.log('.toLowerCase() - converte para caixa baixa');
          console.log('.toUpperrCase() - converte para caixa alta');

  /*
  aula 17
  - Regex
  */
  console.log('\nAula 17');
      console.log('Regex - expressões regulares. Permite buscas avançadas sobre strings e manipular os resultados.');
      console.log('Para testes usar: regex101.com');
      console.log('É um tipo primitivo e é inserido dentro de duas barras /RegExp/. Existem paramêtros como /g, para buscas globais. /m, para multilinha, /i para ignorar o case.');
      console.log('Dá pra criar um objeto Regex para deixar a expressão em variável e com isso ser concatenada com outras coisas.');
      console.log('Trabalha com os métods de string. Como .match, para ver se encontrou algo da regex, .replace, para substituir o texto, .test (não é método de string é do regexp) que retorna true se a expressão der match no texto.');
      console.log('Na busca usar | para dizer OU. Usar / para escapar caracter especial.');
      console.log('[] lista - pelo menos um caracter que estiver dentro. ');
      console.log('() lista - grupo, caputra. ');
      console.log('\\w - para caracteres alfanúmericos, \\d para números ');
      console.log('função replace pode receber segundo paramêtro de função com (capturaTotal, letra1, letra2)');

  /*
  aula 18
  - Continuação de Regex
  - Regex - Negação
  - Regex - Repetidores
  */
  console.log('\nAula 18');
      console.log('- Continuação de Regex');
          console.log('\\s - espaço em branco, \\n - quebra de linha, \\t - tabulação');
          console.log('. - qualquer caracter menos quebra de linha');
      console.log('- Regex - Negação');
          console.log('[^abc] - qualquer item menos com esses da lista');
          console.log('\\W - qualquer caracter MENOS alfanúmericos');
          console.log('\\D - qualquer caracter MENOS números');
          console.log('\\S - qualquer MENOS espaços em brancos');
      console.log('- Regex - Repetidores');
          console.log('{n.M} - intervalor item anterior ao menos N vezes e no máximo M vezes.');
          console.log('{n,} - intervalo aberto, N vezes ou mais, sem limite.');
          console.log('{n} - item atenrior exatamente N vezes.');
          console.log('? - opcional, pode ter ou não na sequência.');
          console.log('+ - uma ou mais ocorrências.');
          console.log('* - zero ou mais ocorrências do item anterior');

  /*
  aula 19
  - Conhecendo outros símbolos usados na Regex
  - Métodos de string onde podemos usar regex
  -  O objeto RegExp()
  */
  console.log('\nAula 19');
      console.log('- Conhecendo outros símbolos usados na Regex');
          console.log('^ - início de string, tem que estar fora de uma lista');
          console.log('$ - fim de string. Colocado no final da regex normalmente');
          console.log('? - repetição não gulosa, utilizado logo após um repetidor');
          console.log('(?:) - somente agrupamento, sem capturar');
          console.log('\\1, \\2 - referência dentro da regex - faz a primeira captura e o \\1 vai ser igual a ela.');
      console.log('- Métodos de string onde podemos usar regex');
          console.log('.match(regexp)');
          console.log('.replace(regexp, string)');
          console.log('.split(regexp)');
          console.log('.search(regexp)');
      console.log('-  O objeto RegExp()');
          console.log('Construtor RegExp() - usa string para declarar a regexp, sem as barras de início e fim, e se for usar barras no meio, como \\d, é necessário escapar elas.');
          console.log('Métodos de Regexp:');
          console.log('   .test(string) - testa para ver sem a expressão, se tiver retorna true.');
          console.log('   .exec(string) - faz o match a cada vez que é executado, na primeira vez pela ref. 1, na seugnda ref, 2 e assim por diante.');

  /*
  aula 20
  - JS no browser - Selecionar elementos do DOM
  - JS no browser - parte 2
  - JS no browser - parte 3 - Selecionando elementos do DOM
  - JS no browser - parte 4 - Formulários e eventos
  */
  console.log('\nAula 20');
      console.log('- JS no browser - Selecionar elementos do DOM');
          console.log('Passar paramêtros para IIFE, window e document, A ideia é que você possa passar parâmetros para a IIFE que são globais na sua aplicação, para acessá-los de forma local, dentro da IIFE.');
      console.log('- JS no browser - parte 2');
          console.log('Métodos window: alert, prompt e confirm. ');
          console.log('Document - representa o documento, o HTML');
          console.log('Possibilidade de selecionar objetos pelo ID, pela classe, pela tag, pelo nome - utilizando o document.');
      console.log('- JS no browser - parte 3 - Selecionando elementos do DOM');
          console.log('Continuação da explicação dos getElementsBy');
          console.log('querySelector() e querySelectorAll() - eles fazem a seleção a partir de uma estrutura CSS');
      console.log('- JS no browser - parte 4 - Formulários e eventos');
          console.log('.value - pega valores de inputs');
          console.log('.addEventListener() - adciona eventos às propriedades, exemplo click, submit.');

  /*
  aula 21
  - Sync vs async
  - setTimeout
  - setTimeout vs setInterval
  */
  console.log('\nAula 21');
      console.log('- Sync vs async');
          console.log('Sync - código lido e executado na ordem em que foi escrito, um após o outro. Async, é lido, mas só é executado quando é chamado, event loop.');
      console.log('- setTimeout');
          console.log('Ajuda a fazer eventos async, utilizado como temporizador.');
          console.log('setTimeout(function() {}, 1000); - 0 1000 é milisegundos, ou seja, 1 minuto.');
          console.log('setInterval() - praticamente o mesmo do timeout, mas executa a função a cada X tempo definido no intervalo, diferente do timeout que só é uma vez.');
          console.log('Dá pra fazer o mesmo com o setTimeout, usando uma função que é chamada dentro dela mesma.');
      console.log('- setTimeout vs setInterval');
          console.log('diferença básica, setTimeout executa apenas uma vez o setInterval executa várias vezes, até que alguma coisa o pare.');
          console.log('O setInterval manda o comando várias vezes, é pode ser chamado mesmo após ser cancelado, se já for enviado ao event Loop. O mesmo não ocorre com o setTimeout recursivo.');

  /*
  aula 22
  - Propriedades e métodos de funções
  - Prototype
  - Array-like, editorconfig
  */
  console.log('\nAula 22');
      console.log('- Propriedades e métodos de funções');
          console.log('.name - retornar nome d função.');
          console.log('.length - conta quantidade de paramêtros que a função pode receber.');
          console.log('.toString() - convert a função toda em string');
          console.log('.call() - invoca a função');
          console.log('.call(this) - posso passar o this para a função, se for um construtor por exmeplo');
          console.log('.call(this, arg1, arg2, ..., argN) - consegue também passar paramêtros.');
          console.log('.aplly(this, [arg1, arg2, ..., argN]), quase igual ao call, mas aceita array ou array-like nos argumentos.');
      console.log('- Prototype');
          console.log('todas as propriedades do objeto principal que herdamos quando criamos novos objetos do mesmo tipo.');
          console.log('é possível incluir novas propriedades via prototype.');
      console.log('- Array-like, editorconfig');
          console.log('Com o prototype podemos, por exemplo, acessar os métodos dos Arrays nos itens arrays-like.');
          console.log('Para fazer isso devemos usar Array.prototype junto o .call() ou o .aplly()');
          console.log('editorconfig - usado para configurar os programas de edição de texto de código e assim');

  /*
  aula 23
  - Debug
  */
  console.log('\nAula 23');
      console.log('- Debug');
          console.log('Mostra como usar o debug no navegador, utilizando os itens do inspecionador e também com a palavra debbuger no código - tomar muito cuidado para não esquecer ela.');
          console.log('ideal fazer sempre testes com terchos de códigos pequenos, pois caso tenha erro fica mais fácil de achar.');

  /*
  aula 24
  - Modularização de código
  */
  console.log('\nAula 24');
      console.log('- Modularização de código');
          console.log('Forma de organização e de programar. Tentar sempre agrupar variaveis, funções, chamadas, tornando o código limpo e fácil de enteder para qualquer pessoa que o lê.');

  /*
  aula 25
  - Scripts e eventos inline
  - Eventos
  - Mais eventos por elemento
  */
  console.log('\nAula 25');
      console.log('- Scripts e eventos inline');
          console.log('Apenas para conhecimento, não é uma boa partica e preferencialmente não devemos nunca usar isso, dificulta suporte, atualizações e tudo mais.');
      console.log('- Eventos');
          console.log('Para que serve o false no final dos paramêtros do addEventListener - o false é o padrão, começa a ler de baixo pra cima - do úlitmo elemento(filho) para o primeiro(pai). Se colocar true ele vai ler ao contrário.');
      console.log('- Mais eventos por elemento');
          console.log('como o addEventListener é um método é possível adcionar mais de um evento para o mesmo elemento.');
          console.log('.removeEventListener() - para remover eventos de um elemento.');
          console.log('evento input - no html5 tem esse evento, que recebe quando começar a digitar e mostra no console.');
          console.log('Outros eventos: keyup, keydown, change');

})(window, document);
