// Write a function that determines which function is a mirror number. i.e. 12321 would return true

function isMirrorNumber(num) {
  let numString = num.toString();
  let length = numString.length;
  let midpoint = Math.floor(length/2);

  if (length === 1) return true;

  for (let i = 0; i<midpoint; i++) {
    let current = numString[i];
    let reverseCurrent = numString[length - 1 - i];

    if (current != reverseCurrent) return false;
  }
  return true;
}

console.log(isMirrorNumber(12321), true);
console.log(isMirrorNumber(72455427), true);
console.log(isMirrorNumber(1231), false);
console.log(isMirrorNumber(23), false);
console.log(isMirrorNumber(2), true);


// Given an array of numbers (assume the array has three or more values, and they are indeed numbers), return an index,
// if one exists, where the sums of the elements on either side of that index are equal.
// eg. [2, 3, 4, 4, 1] given the function this array should return index 2 (element with value 4)
// because the sums on either side are equal (2 + 3 = 4 + 1).

function arrCheck(arr) {
  let length = arr.length;
  let sum = 0;
  let sum1 = 0;
  let sum2 = 0;

  for (i=0; i<length; i++) {
    sum += arr[i];
  }
  for (i=1; i<length-1; i++) {
    // sum left values
    sum1 += arr[i-1];
    // sum right values
    sum2 = sum - arr[i] - sum1;
    if (sum1 === sum2) {
      return i;
    }
  }
}

console.log(arrCheck([2, 3, 4, 4, 1]), true);
console.log(arrCheck([1, 1, 2, 3, 4, 4, 1, 2]), true);
console.log(arrCheck([1, 1, 2, 3, 4, 4, 1]), false);
console.log(arrCheck([0, 2, 4]), false);






// What is a compositing layer in relation to CSS3?
// background-image: url(first-image.png), url(second-image.png);
// background-color: orange;
// background-blend-mode: screen, multiply;
// The second-image.png background will blend with the background color using the multiply mode,
// and then the first-image.png background will blend with the second image and the background color
// using the screen blend mode. (Reminder: the first background image in the list is the one on top,
// and the ones following it are beneath it.)
// There are 16 blend modes available in CSS: normal (which is the default blend mode and means that no blending is applied),
// multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue,
// saturation, color and luminosity.
