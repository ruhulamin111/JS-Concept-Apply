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
