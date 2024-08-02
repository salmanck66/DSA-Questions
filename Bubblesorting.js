let arr = [1, 3, 5, 1, 5, 7, 4, 3, 9];

const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
console.log(bubbleSort([1, 2, 5, 2, 1, 1, 4, 67, 1]));
