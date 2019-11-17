const numbers = [1,5,2,7,3,76,15];

function sortNumbers(array) {
    numbers.sort((a,b) => {
        return a-b
    })

    return numbers
}

const sortedNumbers = sortNumbers(numbers);


