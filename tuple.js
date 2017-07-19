"use strict";

class Tuple {
  constructor(str) {
    var workingStr = "",
        workingArr,
        finalArr = [],
        opener = "(",
        numSeparater = ",",
        closer = ")";

    for (let i=0; i<str.length; i++) {
      var val = str[i];
      // if current value is open parens, start the working array
      if (val === opener) {
        workingArr = [];
      }
      // if current value is a comma, push the working string into the working array and clear the working string
      else if (val === numSeparater) {
        workingArr.push(workingStr);
        workingStr = "";
      }
      // if value is a closing parens, push the working string into the array, push the working array into the final array,
      // clear the working array and working string, skip the comma between groups
      else if (val === closer) {
        workingArr.push(workingStr);
        finalArr.push(workingArr);
        workingArr = [];
        workingStr = "",
        i++;
      }
      else {
        workingStr += val;
      }
    }
    return finalArr;
  }

  multiply(idx) {
    var length = finalArr.length,
        result = 1;
    for (let i = 0; i < length; i++) {
      let workingNum = finalArr[i][idx];
      if (workingNum === undefined) {
        continue;
      }
      result *= (workingNum);
    }
    return result;
  }
}

var testTuple = new Tuple("(2, 3, 10), (1, 0), (2, 7, 2, 9)");
console.log(testTuple);
console.log(testTuple.multiply());

// function multiply(idx) {
//   var finalArr = [[ '2', ' 3', ' 10' ],
//                   [ ' 1', ' 0' ],
//                   [ ' 2', ' 7', ' 2', ' 9' ]],
//       length = finalArr.length,
//       result = 1;
//   for (let i = 0; i < length; i++) {
//     let workingNum = finalArr[i][idx];
//     if (workingNum === undefined) {
//       continue;
//     }
//     result *= (workingNum);
//     console.log(finalArr[i][idx]);
//   }
//   console.log(result);
// }

// multiply(5);

// if (finalArr[i].length < idx) {
//   workingNum = 1;
// }

// Pretty prints JSON:
// console.log(JSON.stringify(obj, null, 2));
// console.log(obj);
// console.log(JSON.parse('{ "posts": {"blog": [2, 3, 5]} }'));
