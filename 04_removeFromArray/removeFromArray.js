const removeFromArray = function(arr, ...args) {
    args.forEach(function(arg) {
        let index = arr.indexOf(arg);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arg);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

