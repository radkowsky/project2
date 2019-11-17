const arr = [1,1,0,0,1];

function binaryToDeciam(arr) {
    let potega = arr.length-1;
    let result = 0;
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        if(potega === 0){
            temp = 1;
            result+=temp;
            return result
        }
        if(arr[i] == 1){
            temp = Math.pow(2,potega);
            result +=temp;
    }
    potega--;

}
}

const result = binaryToDeciam(arr);//25