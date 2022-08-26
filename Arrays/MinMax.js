function minMax(array) {
  let max = MaximumNum(array);
  let min = MinimumNum(array);
  return [max, min];
}

function MaximumNum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function MinimumNum(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

let array = [10, 20, 54, 35, 25, 18, 1, 99];
let res = minMax(array);
console.log(res);

//time complexity o(n)+o(n) = 2n = o(n)
