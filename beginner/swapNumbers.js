
function swapNumbers(a, b) {

    var result = 'Currently a = ' + a + ' b = ' + b;

    var temp;
    temp = a;
    a = b;
    b = temp;

    // <br> is for new line.
    result += ' <br> After swapping a = ' + a + ' b = ' + b;

    document.getElementById('result').innerHTML = result;
}


swapNumbers(10, 30);