
function oddOrEvenNumbersCount(numbers) {

    var oddCount = 0;
    var eventCount = 0;

    numbers.forEach((number) => {
        (number % 2 === 0) ? eventCount++ : oddCount++;
    });

    var finalResult = 'Odd Numbers count is: '+ oddCount +' Even Numbers count is: '+ eventCount;
    document.getElementById('result').innerHTML = finalResult;
}


oddOrEvenNumbersCount([2, 1, 8, 7, 11, 6, 3, 18]);