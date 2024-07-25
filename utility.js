define([], function () {
    console.log("loading utility.js inside define");
    return {
        log: function (message) {
            console.log(message);
        },
    }
});
console.log("loading utility.js");
// Once all dependencies are loaded, the AMD loader will execute the modules in the order of their dependencies. This means that a module is executed only after all its dependencies have been loaded and executed.