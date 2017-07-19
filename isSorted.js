// isSorted (array of numbers) return true or false if it's sorted

function isSorted(arr) {
  // loop thru array determine if each is > previous, if not, return false
  let length = arr.length;
  let ascending;
  let descending;

  for (let i=0; i<length; i++) {
    let current = arr[i];
    let previous = arr[i-1];
    if (current > previous) {
      ascending = true;
      break;
    } else if (current < previous) {
      descending = true;
      break;
    }
  }

  if (ascending || descending) {
    for (let i=0; i<length; i++) {
      let current = arr[i];
      let previous = arr[i-1];
      if ((ascending && current < previous) || (descending && current > previous)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isSorted([1, 3, 5, 7, 9]), true);
console.log(isSorted([4, 2, 8, 1]), false);
console.log(isSorted([10, 6, 4, 3, 2]), true);
console.log(isSorted([6, 6, 4, 3, 2, 1]), true);
console.log(isSorted([4, 4, 4, 4]), true);
