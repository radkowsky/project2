function mostDigits(array) {
    let count = 0;
    array.forEach(el => {
        const string = el.toString();
        // console.log(typeof string);
        count = string.length > count.toString().length ? el : count;
        console.log(count);
    })
    return count;
}


const result = mostDigits([11111,7777777,582754652154657464]);