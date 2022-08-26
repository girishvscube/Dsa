function MaximumNum(array) {
  var max = array[0];
  var secondMax = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] < max && array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  return [max, secondMax];
}

let array = [100,1, 5, 6, 8, 10, 12, 10, 25, 22,30];
let res = MaximumNum(array);
console.log(res);

//Time complexity O(n)