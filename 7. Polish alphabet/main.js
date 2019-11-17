const diacriticsLetters = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"]

function withoutPolishLetters(string) {
    const arr = string.split("");
    let txt = '';
    // console.log(arr);
    diacriticsLetters.map(el => {
        // console.log(el);
        if(arr.includes(el)){
            switch(el) {
                case "ą":
                    arr[arr.indexOf(el)] = "a";
                    break;
                case "ć":
                    arr[arr.indexOf(el)] = "c";
                    break;
                case "ę":
                    arr[arr.indexOf(el)] = "e";
                    break;
                case "ł":
                    arr[arr.indexOf(el)] = "l";
                    break;
                case "ń":
                    arr[arr.indexOf(el)] = "n";
                    break;
                case "ó":
                    arr[arr.indexOf(el)] = "o";
                    break;
                case "ś":
                     arr[arr.indexOf(el)] = "s";
                     break;
                case "ź":
                     arr[arr.indexOf(el)] = "z";
                     break;
                case "ż":
                    arr[arr.indexOf(el)] = "z";
                    break;
            }
        }
    })
    return arr.join("")
}

const txt = withoutPolishLetters("Rądekć")//"Radekc"
