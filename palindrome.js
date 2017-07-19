// Takes a string and determine if the letters are palindromable
// See if a string can be Palindrome-ified
// 'abab' => true ('abba', 'baab', for example)
// 'tcp' => false
// 'bgb' => true

function palindromable(str) {
  // all pairs and then one character can be 0 or 1
  var reformattedStr = str.trim().toLowerCase();
  let charactersSeen = new Set();
  let length = reformattedStr.length;

  for (let i = 0; i < length; i++) {
    let char = reformattedStr[i];
    if (charactersSeen.has(char)) {
      charactersSeen.delete(char);
    } else {
      charactersSeen.add(char);
    }
  }
  return charactersSeen.size < 2;
}


console.log(palindromable('abba'), true);
console.log(palindromable('ababa'), true);
console.log(palindromable('abcde'), false);
console.log(palindromable('AbBa'), true);
console.log(palindromable('AaBbCcD'), true);




// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.```
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]```
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

// function isKeyboardRow(arr) {
//   let row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
//   let row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
//   let row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
//
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     for (let j=0; j<i.length; j++) {
//       // if row1[i[j]]
//       if () {
//
//       }
//     }
//   }
// }
//
// console.log(isKeyboardRow(["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"])
