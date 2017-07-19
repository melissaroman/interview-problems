// these two functions are not returning anything but just passing along a result to a callback
function doResult1(callback) {
  $.ajax({
    url: 'http://brlewis.com/demo/random.html?1',
    success: function(result) {
      $('p').append('First: ' + result + '. ');
      callback(result);
    }
  });
}

function doResult2(callback) {
  $.ajax({
    url: 'http://brlewis.com/demo/random.html?2',
    success: function(result) {
      $('p').append('Second: ' + result + '. ');
      callback(result);
    }
  });
}

function getTotal(a, b) {
  $('p').append('Total: ' + (a + b));
}

// funA and funB are functions that take one
// argument, which is a callback called with
// an asynchronously-derived result.
// Once funA and funB have run, pass their
// return values as arguments to callback.
function join(funA, funB, callback) {
  let resultA;
  let resultB;

  // es6 await/async
  // let [resultA, resultB] = await Promise.all([funA(result), funB(result)]);
  // callback(resultA, resultB);


  // get the funA callback result and set it to resultA, then check to see if both funA and funB have resolved
  funA((result) => {
    resultA = result;
    runCallback();
  });

  // get the funB callback result and set it to resultB, then check to see if both funA and funB have resolved
  funB((result) => {
    resultB = result;
    runCallback();
  });

  // once both funA and funB have resolved, pass the results to the callback (getTotal)
  function runCallback() {
    if (resultA && resultB) {
      callback(resultA, resultB);
    }
  };
}

join(doResult1, doResult2, getTotal);


// First one
var FITBIT = {};

FITBIT.example = (function() {

    let password = "emordnilap";

    function reversePassword() {
      return password.split("").reverse().join("");
    };

    return {
      username: "Sylvan LaRue",
      // es5
      // password: password,
      // getPassword() {
      //   return password;
      // },
      // setPassword(newPassword) {
      //   password = newPassword;
      // },

      // es6
      // password: password,
      get password() {
        return password;
      },
      set password(newPassword) {
        password = newPassword;
        console.log('setting new password');
      },
      showUsername() {
        alert("step one");
      },
      log(msg) {
        // let consoleDiv = document.getElementById("output");
        // consoleDiv.innerHTML = msg;
        console.log(msg);
      }
    };

} ());

console.log(FITBIT.example);
FITBIT.example.password = "hello";
FITBIT.example.log(FITBIT.example.password);
// FITBIT.example.log(FITBIT.example.getPassword());
// FITBIT.example.log(FITBIT.example.setPassword('hjbjhb'));
// FITBIT.example.log(FITBIT.example.getPassword());
