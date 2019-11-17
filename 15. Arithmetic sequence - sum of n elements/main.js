function arithmetic_sequence_sum(a,r,n){
    let sum = 0;


    for(let i = 0; i < n; i++){
        if(i === 0){
            sum = a;
            // console.log(`iteracja ${i}, wartość sum = ${sum}`)
        }
        else {
            // console.log(`iteracja ${i}`);
            sum += (a + r*i)
            // console.log(`wartość sum = ${sum} po iteracji ${i}`)
        }
    }

    return sum;
}

console.log(arithmetic_sequence_sum(2, 3, 5) )