let isTruthy = (a) => {

  return a ? true : false;
  
}
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(''));