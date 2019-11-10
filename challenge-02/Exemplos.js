function manipularValores(arg1, arg2, arg3) {
    var result ;
    if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        result = "Preencha todos os valores corretamente!" ;
    } else {
        result = (arg1 * arg2 * arg3) + 2 ;
    }
    return result ;
}

manipularValores(1, 1, 1) ;

function manipularSomatorias(arg1, arg2, arg3) {
    var result ;
    if (arg1 !== undefined && arg2 === undefined && arg3 === undefined) {
        result = arg1 ;
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 === undefined) {
        result = arg1 + arg2 ;
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        result = (arg1 + arg2) / arg3 ;
    } else if (arg1 === undefined && arg2 === undefined && arg3 === undefined) {
        result = false ;
    } else {
        result = null ;
    }
    return result ;
}
