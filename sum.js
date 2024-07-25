(function () {
    myApp.sum = function (arr) {
        return myApp.reduce(arr, myUtil.add);
    }
})();