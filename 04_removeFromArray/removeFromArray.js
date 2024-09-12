const removeFromArray = function(array, ...args) {
    // let newArray = [];

    // array.forEach((items) => {
    //     if (!args.includes(items)) {
    //         newArray.push(items);
    //     }
    // });

    // return newArray;

    // second solution is
    return array.filter(val => !args.includes(val))
};


// Do not edit below this line
module.exports = removeFromArray;
