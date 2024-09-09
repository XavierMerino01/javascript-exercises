const sumAll = function (first, last) {

    if (first < 0 || last < 0) return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";

    let sum = 0;

    let larger, smaller;

    if (first > last) {
        larger = first;
        smaller = last;
    }
    else
    {
        larger = last;
        smaller = first;
    }


    for (let i = smaller; i <= larger; i++) {

        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
