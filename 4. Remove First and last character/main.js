// const input = document.querySelector("input");

// input.addEventListener("change", function() {

//     if(input.value.trim().length <= 2) {
//         alert("podaj dłuzszy ciąg znaków");
//         input.value = "";
//         return
//     }
//     else {
//         let cut = input.value.slice(1,input.value.length-1);
//     }

// })

function cutFirstAndLastLetter(string){
    if(string.trim().length <= 2) {
        alert("podaj dłuzszy ciąg znaków");
        return null
    }
    else {
        return cuttedTxt = string.slice(1,string.length-1);
    }
}

const someCuttedTxt = cutFirstAndLastLetter("lolo")