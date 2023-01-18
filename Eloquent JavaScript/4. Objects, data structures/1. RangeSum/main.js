function range(start, end, jump) {
  if (!jump || jump == 0) jump = 1;
  let array = [];

  if (jump > 0) {
    for (let i = start; i <= end; i += jump) {
      array.push(i);
    }
    return array;
  }

  //if jump < 0
  for (let i = start; i >= end; i += jump) {
    array.push(i);
  }
  return array;
}

const sum = function (array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) suma += array[i];
  return suma;
};

console.log(range(10, 1, -2));
