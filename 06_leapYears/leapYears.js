const leapYears = function (year) {

    if (year % 4 === 0 && stillLeap(year)) return true;
    return false;

};

function stillLeap(year) {
    if (year % 100 !== 0) return true;
    if (year % 400 === 0) return true;
    return false;
}

// Do not edit below this line
module.exports = leapYears;
