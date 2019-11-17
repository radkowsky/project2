const input = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

function newMember(array) {
    const members = input.map(el => {
        if(el[0] >= 55 && el[1] > 7){
            return "Senior"
        }
        else {
            return "Open"
        }
    })

    return members;

}

const membersList = newMember(input)