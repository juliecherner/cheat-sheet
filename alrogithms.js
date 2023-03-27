//Sorting

//Bubble sort: for relatively sorted list
//Moving larger numbers to right side
function bubbleSort() {
  let noSwap;
  for (const i = array.length; i > -1; i--) {
    noSwap = true;
    for (const j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
}

function swap(array, j) {
  const temp = array[j];
  array[j] = array[j + 1];
  array[j + 1] = temp;
}

//Selection sort: for updating data
//Finding minimum number in array and putting in the begining

function selectionSort(array) {
  for (const i = 0; i < array.length; i++) {
    let lowest = i;
    for (const j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      const temp = arr[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}

//Insertion sort: for relatively sorted list
//Current number is inserted in right (previous index) place while interating
function insertionSort(array) {
  for (const i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (const j = i - 1; j > -1 && array[j] > currentVal; j--) {
      arr[j + 1] = array[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//Merge sort / time complexity o(n log n), space: o(n)
//array is splitted to 0 or 1 element and merged (sorted while merging)

function mergeSortRecursion(unsortedArray) {
  if (unsortedArray.length <= 1) return unsortedArray;

  const midPoint = Math.floor(unsortedArray.length / 2);
  const leftArr = unsortedArray.slice(0, midPoint);
  const rightArr = unsortedArray.slice(midPoint);

  return mergeTwoArrays(
    mergeSortRecursion(leftArr),
    mergeSortRecursion(rightArr)
  );
}

function mergeTwoArrays(leftArr, rightArr) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArray.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  if (leftArr[leftIndex]) {
    var unaddedElements = leftArr.slice(leftIndex);
    resultArray.push(...unaddedElements);
  } else {
    var unaddedElements = rightArr.slice(rightIndex);
    resultArray.push(...unaddedElements);
  }

  return resultArray;
}
// quick sort
//(finding right index for element and swapping smaller elements to left and going final swap the first element and element with needed index) + recursion

function partition(arr, start, end){
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start; 
  for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
      }
  }
  
  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
  return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
      return;
  }
  
  // Returns pivotIndex
  let index = partition(arr, start, end);
  
  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}