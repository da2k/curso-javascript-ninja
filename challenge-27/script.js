

// console.log(Object.prototype.toString.call(arguments))

let ar = [1,2,3,5,9]

let ar2 = ar.map((item)=>{
    return item*2
})

console.log(ar, ar2)


let escreve = () => {
    console.log('Escrevi')
    return 'Escrevi'
}


console.log(escreve().toString())