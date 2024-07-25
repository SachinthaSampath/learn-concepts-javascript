// main.js
// define(['sum'], function (sum) {
//     var values = [1, 2, 4, 5, 6, 7, 8, 9];
//     var answer = sum(values)
//     document.getElementById("answer").innerHTML = answer;
// })


define(['math', 'utility'], function (math, utility) {
    var result = math.add(1, 2);
    utility.log("The result is: " + result);

    var result = math.subtract(1, 2);
    utility.log("The result is: " + result);
})