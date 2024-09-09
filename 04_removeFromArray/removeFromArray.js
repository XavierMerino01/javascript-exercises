const removeFromArray = function (numArray, ...restArgs) {
    let j = 0;

    while (j < numArray.length) {
        if (restArgs.length > 1) {
            for (let i = 0; i <= restArgs.length; i++) {
                if (restArgs[i] === numArray[j]) {
                    numArray.splice(j, 1);
                    j--;
                    break;
                    if (numArray.length === 0) return numArray;
                }
            }
        } else {
            if (numArray[j] === restArgs[0]) {
                numArray.splice(j, 1);
                j--;
            }
        }

        j++;
    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;


//const removeFromArray = function (array, ...args) {
//    // create a new empty array
//    const newArray = [];
//    // use forEach to go through the array
//    array.forEach((item) => {
//        // push every element into the new array
//        // UNLESS it is included in the function arguments
//        // so we create a new array with every item, except those that should be removed
//        if (!args.includes(item)) {
//            newArray.push(item);
//        }
//    });
//    // and return that array
//    return newArray;
//};
