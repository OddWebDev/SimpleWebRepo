const reverseArray = function (array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);
  return reversedArray;
};

const reverseArrayInPlace = function (array) {
  for (let i = 0; i < array.length; i++) {
    array.push(array[i]);
    array.shift();
  }
};

let arraya = [1, 2, 3, 4];
reverseArrayInPlace(arraya);
console.log(arraya);
