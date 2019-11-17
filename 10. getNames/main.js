var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
  ]

function printName(data) {
    const arrNames = [];
    data.forEach(el => {
        arrNames.push(el.name)
    })

    return arrNames;
}

const names = printName(data);//["Joe", "Bill", "Kate"]