function soma(a,b){ return a + b}
console.log(soma(2, 7));

var add = soma(10, 20);

console.log(add);

var novalue;

function addvalue(x){
  novalue = x
  return 'O novo valor da variavel agora é: '+ novalue +''
}

console.log(addvalue(10));

function myfunction(a, b, c){
  if(a == undefined | b == undefined | c == undefined){
    return ' Preencha todos os valores corretamente!'
  }
  return a * b * c + 2
}

console.log(myfunction(1, 2, 3));

function otherfunction(a, b, c){
  if (a == undefined && b == undefined && c == undefined) {
    return false
  }else if(b == undefined && c == undefined) {
    return a
  }else if(c == undefined){
    return a + b
  }else if(a != undefined && b != undefined & c != undefined){
    return (a + b) / c
  }else {
    return null
  }
}

console.log(otherfunction());
