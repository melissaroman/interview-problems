// apple => eppla
// friend => freind

// function reverseVowel(str) {
//   var formattedStr = str.toLowerCase();
//   var arr = formattedStr.split('');
//   let length = arr.length;
//   let vowels = [];
//   for (let i=0; i<length; i++) {
//     let currentChar = arr[i];
//     if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
//       vowels[i] = currentChar;
//     } else {
//       vowels[i] = '';
//     }
//   }
//   console.log(vowels);
//   vowels.reverse();
//   for (let j=0; j<vowels.length; j++) {
//     if (vowels[j] !== '') {
//       arr[j] = vowels[j];
//     }
//   }
//
//   return arr.join('');
// }

// console.log(reverseVowel('apple'), 'eppla');
// console.log(reverseVowel('friend'), 'freind');
// console.log(reverseVowel('adom'), 'odam');

var reverseVowels = function(s) {

    var newString='';
    var char = [];
    var pos = [];
    var c = 0;
    var n = 0;
    let length = s.length;

    for (let i=0; i<length; i++){
      if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') {
        char[c]=s[i];
        pos[c]=i;
        c += 1;
      }
    }

    char.reverse();

    for (let i=0; i<length; i++ ){
      if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') {
        newString += char[n];
        n += 1;
      } else {
        newString += s[i];
      }
    }

   return newString;
};

console.log(reverseVowels('apple'), 'eppla');
console.log(reverseVowels('friend'), 'freind');
console.log(reverseVowels('adom'), 'odam');
