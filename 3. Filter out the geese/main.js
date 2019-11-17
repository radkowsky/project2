const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// console.log(geese.includes("African"))

const arr = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];


function gooseFilter(array) {
     geese.map(el => {
        if(array.includes(el)){
            array.splice(array.indexOf(el),1);
            console.log(array);
        }
    })
    return array

}



const solution = gooseFilter(arr)