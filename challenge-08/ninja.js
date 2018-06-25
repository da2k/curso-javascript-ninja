var car = {
    color: 'yellow'
};

function getCarColor(mycar){
    return mycar.color;
}

console.log( getCarColor(car)  );


function showOtherFunction(func) {
    return func();
}

function returnedFunction() {
    return 'Returned function';
}

console.log( showOtherFunction(returnedFunction) );