
function reverseString(str) {

    var reversedStringValue = '';

    var finalResult = 'Actual value is ' + str;
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        reversedStringValue += str[i];
    }

    finalResult += ' <br> Reversed value is ' + reversedStringValue;
    document.getElementById('result').innerHTML = finalResult;
}


reverseString('Hello World');