const reverseString = function(string) {
    // let str = string
    // let strtoarray = str.split("")
    // let reversearray= strtoarray.reverse()
    // let arraytostr= reversearray.toString();
    // let newstr = arraytostr.replace(/,/g, '');
    return string.split('').reverse().join('')
};



// Do not edit below this line
module.exports = reverseString;
