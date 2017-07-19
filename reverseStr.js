// ## Question 0.1

// Reverse a string.

// ```js
// reverse('hello'); // olleh
// ```

function reverseStr(str) {
  let arr = str.split('');
  let length = arr.length;
  let midpoint = Math.floor(length / 2);
  let temp;

  for (let i=0; i<=midpoint; i++) {
    temp = arr[i];
    arr[i] = arr[length - (i+1)];
    arr[length - (i+1)] = temp;
  }

  let result = arr.join('');
  return result;
}

// Do a solution like this first! Then optimize
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

console.log(reverseStr('hello'), 'olleh');
console.log(reverseStr('Howdy'), 'ydwoH');
console.log(reverseStr('Hi there!'), '!ereht iH');
