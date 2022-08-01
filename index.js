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
var factiorialNumber = 9;
var factiorialResult = factiorialValue(factiorialNumber);
console.log(factiorialResult);

