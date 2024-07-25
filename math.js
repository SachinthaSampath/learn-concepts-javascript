console.log("loading math.js");
define([], function () {
    console.log("loading math.js inside define");
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
    }
});