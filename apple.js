// 7-segment clock digits (logic, whiteboard)
// 1) What time will show the least number of segments? (111)
// 2) What time will show the most number of segments? (1008)
// 3) How would you go about figuring out what times would be the biggest delta (whiteboard thru the logic)?

// Key press (ember)
// Secret code keypress: up up, down down, left right, left right, a b

// Tree of X's (whiteboard)
// Write a function, given a number of rows, and print out a tree with that number of rows of X's (spaces in the front too)

// function makeTree(numRows) {
//   let x = 'X';
//   let space = ' ';
//   for (let i=1; i<=numRows; i++) {
//     // X's n + (n - 1) each new row
//     console.log(space.repeat(numRows - i) + (x.repeat(2*i - 1)));
//   }
// }
// console.log(makeTree(4));
// console.log(makeTree(9));

// makeTree(4) =>
//     X
//    X X
//   X X X
// X X X X X

// fib: formula is x.repeat(2i-3)


// JSON data return (whiteboard)
// What should the json look like to show this page (user's subscriptions)
// user: {
//   subscriptions: {
//     name: 'HBO',
//     subType: 'monthly',
//     image: url,
//     renewable: boolean,
//     expireDate: 'August 4, 2017'
//   }
// }

// English -> piglatin (whiteboard)
// Given a sentence in english, return the sentence in piglatin
// Piglatin rules:
// 1) If a word starts with a vowel, add 'yay' to the word (apple => appleyay)
// 2) If a word starts with a consonent, move the consonents to the end and then add 'ay' (glove => oveglay)

function makePiglatin(sentence) {
  let wordsArr = sentence.split(' ');
  let length = wordsArr.length;
  let vowels = /[aeiouy]/gi;

  for (let i=0; i<length; i++) {
    let currentWord = wordsArr[i];
    let firstChar = currentWord[0];
    // currentWord.match(vowels) => array of vowels in word
    // vowels[0] => the first vowel in the array/word
    // currentWord.indexOf(the first vowel in the word) => index of the first vowel
    let vowelIdx = currentWord.indexOf(currentWord.match(vowels)[0]);
    // is there a regex to find the index of it's match so don't have to do above?
    // string.split accepts a regex - length of first value in array would be index of first vowel

    if (vowelIdx === 0) {
      wordsArr[i] = currentWord + 'yay';
    } else {
      wordsArr[i] = currentWord.substring(vowelIdx) + currentWord.substring(0, vowelIdx) + 'ay';
    }
  }
  return wordsArr.join(' ');
}
//
console.log(makePiglatin('hello my name is smith apple'), 'ellohay ymay amenay isyay ithsmay ppleayay');

// Vanilla JS attaching elements to a page, update button
