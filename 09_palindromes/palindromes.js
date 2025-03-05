const palindromes = function (string) {
    const revisedString = string.toLowerCase().replace(/[^0-9a-z]/g, "");

    const array = revisedString.split(""); //forward string
    const forwardArray = revisedString.split(""); //also forward string
    const reverseArray = array.reverse(); //backwards string

    const forwardString = forwardArray.toString();
    const reverseString = reverseArray.toString();
    return (forwardString === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
