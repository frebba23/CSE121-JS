const myArray = [12, 35, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function(item, index)) {
    if (item === luckyNumber) {
        luckyIndex = index;
    }
};