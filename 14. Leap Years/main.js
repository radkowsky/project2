function isLeapYear(year) {
    if(!(year % 4 && year % 400)) {
        console.log(`Rok ${year} jest rokiem przestępnym`)
    }
    else {
        console.log(`Rok ${year} nie jest rokiem przestępnym`)
    }

    return true;
}

console.log(isLeapYear(2080))