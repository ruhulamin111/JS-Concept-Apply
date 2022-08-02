// function inch to feet 
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var amountInch = 2682;
var feetResult = inchToFeet(amountInch);
console.log(feetResult);

// function kilometers to miles 
function kilometersToMiles(kilometers) {
    var miles = kilometers / 1.60;
    return miles;
}
var amountKilometers = 1352;
var milesResult = kilometersToMiles(amountKilometers);
console.log(milesResult);

// even number function 
function evenNumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var bikeNumebr = 3652;
var bikeResult = evenNumber(bikeNumebr);
console.log(bikeResult);

// odd number fucntion 
function oddNumber(number) {
    if (number % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
var carNumebr = 361;
var carResult = oddNumber(carNumebr);
console.log(carResult);

// leap year function 
function leapYear(years) {
    if (years / 400 == 0) {
        return true;
    }
    else if (years / 100 != 0) {
        return false;
    }
    else if (years / 4 == 0) {
        return true;
    }
    else {
        return false
    }
}
var chooseYear = 2021;
var leapYearResult = leapYear(chooseYear);
console.log(leapYearResult);

// factiorial 
var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// factiorial function
function factiorialValue(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var factiorialNumber = 7;
var factiorialResult = factiorialValue(factiorialNumber);
console.log(factiorialResult);

// factiorial function
function factiorialReverseValue(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
var factiorialNumber2 = 6;
var factiorialResult2 = factiorialReverseValue(factiorialNumber2);
console.log(factiorialResult2);

// vowel check 
function vowelCheck(input) {
    var letter = input.toLowerCase();
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        console.log(letter, 'is a vowel')
    }
    else {
        console.log(letter, 'is not a vowel')
    }
    return letter;
}
var alphabet = 'F'
var vowelResult = vowelCheck(alphabet);
console.log(vowelResult);

// odd number check 
for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// namta function 
function namta(input) {
    var number = input;
    for (var i = 1; i <= 10; i++) {
        var reuslt = i * number;
        var resultTable = i + '*' + number + '=' + reuslt;
        console.log(resultTable);
    }
    return reuslt;
}
var numberTest = 8;
var numberResult = namta(numberTest);
console.log(numberResult);

