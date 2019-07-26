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



let cpf = '054731815-35'
let digitos = cpf.split('')

let sum = 0;
let cont = 10;

for(let i=0;i<9;i++){
    sum += digitos[i]*cont;
    cont--;
}

if(sum%11<2) pdigit = 0
if(sum%11>=2) pdigit = 11 - sum%11 

digitos[9] = pdigit;


sum = 0;
cont = 11;

for(let i=0;i<10;i++){
    sum += digitos[i]*cont;
    cont--;
}
if(sum%11<2) sdigit = 0
if(sum%11>=2) sdigit = 11 - sum%11

validCPF = digitos;
validCPF[9] = '-'
validCPF[10] = pdigit
validCPF[11] = sdigit
validCPFex = validCPF.join('')

console.log(pdigit);
console.log(sdigit);
console.log(digitos)
console.log(validCPF)
console.log(validCPFex)