function stringMerge(word1, word2, letter) {
    let indexOfLetter1 = word1.indexOf(letter);
    let indexOfLetter2 = word2.indexOf(letter);

    const mergeWord1 = word1.slice(0,indexOfLetter1);
    const mergeWord2 = word2.slice(indexOfLetter2);

    return mergeWord1 + mergeWord2;
}


console.log(stringMerge("wonderful", "people", "e"));