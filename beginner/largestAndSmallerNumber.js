
function findLargest(numbers) {
    var max = 0
    numbers.forEach((number) => {
        if(number > max) {
            max = number;
        }
    })
    return 'Largest number is: ' + max;
}


function findSmallest(numbers) {

    var min;
    numbers.forEach((number) => {
        if(number < min  || min === undefined) {
            min = number;
        }
    })
    return 'Largest number is: ' + min;
}



var numbers = [33, 32, 51, 12, 39, 66, 42];
var finalResult;

finalResult = findLargest(numbers);
finalResult += '<br>';
finalResult += findSmallest(numbers);
document.getElementById('result').innerHTML = finalResult;



