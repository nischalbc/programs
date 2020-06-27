

//  Function declaration
function sumOfAllNumbers(numbers) {
    var result = 0;
    numbers.forEach((number) => {
        result += number;
    });
    document.getElementById('result').innerHTML = 'Sum of numbers is: ' + result;
}

//  Function call
sumOfAllNumbers([1, 3, 9, 17]);