// const arr1 = [1,2.3,"test", true, { name : "Rad" }, [1,"txt"]];
// const arr2 = [null, undefined, 123, "Hello"]

// let arr3 = arr1.concat(arr2,"element");// (11) [1, 2.3, "test", true, {…}, Array(2), null, undefined, 123, "Hello", "element"]

// arr3 = [...arr1, ...arr2];

//Arrays with numbers only
const arr1 = [1,2,3.77,2];
const arr2 = [7,1,8,3];

const arr3 = arr1.concat(arr2);
// arr3 = [...arr1, ...arr2];

//roz. 1
// let sum = 0;
// arr3.forEach(el => {
//     sum += el;
// })

// console.log(`Suma wszystkich elementów tablicy to: ${sum}`)

//roz. 2
const result =  arr3.reduce((prev,next) => {
    return prev + next;
})

console.log(`Suma wszystkich elementów tablicy to: ${result}`)