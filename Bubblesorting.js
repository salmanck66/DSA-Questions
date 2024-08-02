let arr = [1, 3, 5, 1, 5, 7, 4, 3, 9,1];

const bubbleSort = (arr) => {
  let swapped;
   let n =arr.length

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--
  } while (swapped);
  return arr;
};
console.log(bubbleSort([1, 2, 5, 2, 1, 1, 4, 67, 1]));

/// 1 > 3 false 
///3>5 false
//5>
