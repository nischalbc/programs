
function fibonacciSeries() {

    var a = 0;
    var b = 1;
    var numberOfElements = 10;
    var finalResult = 'Fibonacci series is: '+ a + ' ' + b;

    for (let i = 2; i < numberOfElements; i++) {
        var sum = a + b;
        finalResult += ' ' + sum;
        a = b;
        b = sum;
    }

    document.getElementById('result').innerHTML = finalResult;

}


fibonacciSeries();