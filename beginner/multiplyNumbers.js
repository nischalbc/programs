
//  Function declaration
function multiplyNumbers(multiplcand, multiplier) {

    var result = 0;
    for (let i = 0; i < multiplier; i++) {
        result += multiplcand;
    }

    var finalResult = 'Product of ' + multiplcand + ' * ' + multiplier + ' is: ' + result;
    document.getElementById('result').innerHTML = finalResult;
}

//  Function call
multiplyNumbers(7, 4);