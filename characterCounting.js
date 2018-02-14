function countLetters(str) {

    var letterCount = {};

    for (var i = 0; i < str.length; i++) {
        var eachLetter = str[i];
        if (eachLetter !== " ") {
            if (letterCount[eachLetter] === undefined) {
                letterCount[eachLetter] = 0;
            }
            letterCount[eachLetter] += 1;
        }
    }
    return letterCount;
}

console.log(countLetters("lighthouse in the house"));

