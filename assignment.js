// // feetToMile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    if(mile < 0){
        return "distance cannot be negative";
    }
    return mile;
}
var result = feetToMile(1000);
console.log(result);


// // woodCalculator
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


//brickCalculator
function brickCalculator(depth) {
    var brick = 0;
    if (depth <= 10) {
        brick1 = depth * 15 * 1000;
    } 
    else if (depth <= 20) {
        brick2 = depth * 12 * 1000;
    }
    else {
        brick3 = depth * 10 * 1000;
}
    return brick;
}
var count = brickCalculator(40);
console.log(count);


// tinyFriend
function tinyFriend(tiny){
    var min = tiny[0];
    for(var i = 0; i < tiny.length; i++){
        var element = tiny[i];
        if(element > min){
            element = min;
        }
    }
    return min;
}
var minName = tinyFriend(['Siam', 'Sakin', 'Sajjat']);
console.log(minName);