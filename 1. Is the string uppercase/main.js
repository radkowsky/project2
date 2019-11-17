const input = document.querySelector("input");
const btnCheck = document.querySelector("button");
let isTxtUpper = false;

//Rozwiązanie 1
// input.addEventListener("change", function() {
//     const txt = this.value;
//     const txtUpperCase = txt.toUpperCase();
//     let isTxtUpper = (txt === txtUpperCase) ? true : false;

//     if(isTxtUpper) console.log(`Podany przez Ciebie tekst: "${txt}" jest napisany wielkimi literami`)
//     else console.log(`Podany przez Ciebie tekst: "${txt}" nie jest napisany wielkimi literami`)
// })

//Rozwiązanie 2
btnCheck.addEventListener("click", function() {
    const txt = input.value;
    if(!txt.trim()) {
        console.log(txt)
        alert("Wpisz jakiś tekst");
        return;
    }

    for(let i = 0; i < txt.length ; i++){
        if (txt.charAt(i) === txt.charAt(i).toUpperCase()) {
            console.log(txt)
            isTxtUpper = true;
        }
        else {
            console.log(`Podany przez Ciebie tekst nie jest napisany dużymi literami`)
            return isTxtUpper = false;

        }
    }
    isTxtUpper = isTxtUpper ? console.log(`Podany przez Ciebie tekst jest napisany dużymi literami`) : false;
})