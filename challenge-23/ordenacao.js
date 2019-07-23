
let array = [0,8,3,2,1]
let aux


for(let i =0;i<4;i++){
    for(let j=i+1;j<5;j++){
        if(array[i]>array[j]){
            aux = array[j]
            array[j] = array[i]
            array[i] = aux;
        }
    }
}



console.log(array)