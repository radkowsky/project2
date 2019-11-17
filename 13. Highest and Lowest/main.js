function highAndLow(digits) {
    const arrDigits = digits.split(" ");
    const min = Math.min(...arrDigits);
    const max = Math.max(...arrDigits);

    const stringDigits = `${max} ${min}`

    return stringDigits


}


console.log(highAndLow("1 3 6 2 6 11"))
