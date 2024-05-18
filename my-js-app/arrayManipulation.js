const readlineSync = require('readline-sync');

//task 1
function processArray() {
    let arr = readlineSync.prompt();
    arr = arr.split(',').map(Number)

    let processedArray = arr.map(num => num % 2 === 0 ? num * num : num * 3);
    return processedArray;

}
console.log('Enter an array of numbers separated by commas: ');
let processedArray = processArray();

console.log(processedArray);


//task 2
function formatArrayStrings() {
    let arrStr = readlineSync.prompt();
    arrStr = arrStr.split(',');

    let formatArray = [];

    for (let i = 0; i < arrStr.length; i++) {
        if (processedArray[i] % 2 === 0) {
            formatArray.push(arrStr[i].toUpperCase())
        }
        else {
            formatArray.push(arrStr[i].toLowerCase())
        }

    }
    return formatArray;
}

console.log('Enter an array of strings separated by commas: ');
console.log(formatArrayStrings(processedArray));

