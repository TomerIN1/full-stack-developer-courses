function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + ' ' + myNoun + ' ' + myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks('cat','big','ran','quickly'));
console.log(wordBlanks('bike','slow','flew','slowly'));

