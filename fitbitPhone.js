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
  // var resultA;
  // var resultB;
  //
  // funA(function funAResult(result){
  //   resultA = result;
  //   if (resultA && resultB) {
  //     return callback(resultA, resultB);
  //   }
  // });
  //
  // funB(function funBResult(result) {
  //   resultB = result;
  //   if (resultA && resultB) {
  //     return callback(resultA, resultB);
  //   }
  // });

}

join(doResult1, doResult2, getTotal);


// First one
var FITBIT = window.FITBIT || {};

FITBIT.example = (function() {

    var password = "emordnilap",
        reversePassword = function() {
            return password.split("").reverse().join("");
        };

    return {
        username: "Sylvan LaRue",
        // getPassword: function() {
        // 	return password;
        // },
        // reversePassword: function() {
        // 	return password.split("").reverse().join("");
        // },
        showUsername: function() {
            alert("step one");
        },
        log: function(msg) {
            var consoleDiv = document.getElementById("output");
            consoleDiv.innerHTML = msg;
        }
    };

} ());

// FITBIT.example.password = 'notRightPassword';
// FITBIT.example.log(FITBIT.example.reversePassword());
