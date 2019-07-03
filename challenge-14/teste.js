


                                        //reduce   array.reduce(function(acumulado, atual, indice, array){}, 0)
                                        //reduceRight percorre o vetor no sentido contrário
                                        
let arr = [1,2,3,4,6,8,10]

let reduce = arr.reduce(function(acum, atual){

    return acum + atual
}, 2)


console.log("Array: "+arr)
console.log("Reduce: "+reduce)
