// feetToMile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    if(mile < 0){
        return "distance cannot be negative";
    }
    return mile;
}
var result = feetToMile(1000);
console.log(result);


// woodCalculator
function woodCalculator(chare, table, bed){
    var chareCount = chare * 1;
    var tableCount = table * 2;
    var bedCount = bed * 5;
    var totalWood = chareCount + tableCount + bedCount;
    if(totalWood < 0){
        return "wood cannot be negative";
    }
    return totalWood;
}
var woodResult = woodCalculator(2, 5, 2);
console.log(woodResult);


// brickCalculator


// tinyFriend
function tinyFriend(numbers){
    var largest = numbers[0];
    for(var i = 0; i<numbers.length; i++){
        var currentNumber = numbers[i];
        if(currentNumber > largest){
            largest = currentNumber;
        }
    }
    return largest;
}
var largestNumber = tinyFriend([12,23,323,432]);
consolee.log(largestNumber);
