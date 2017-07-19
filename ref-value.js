// Pass by value is passing just the value of the primitive (only primitives are passed by values)
function passByValue(value) {
  value += ' pen';
  console.log(value);
}

var value = 'apple';

passByValue(value); // => apple pen
console.log(value); // => apple

// Pass by reference is passing a reference of the actual thing so will change the main thing
function passByRef(obj) {
  obj.cat = 'kitty';
  console.log(obj);
}

var obj = {
  dog: 'puppy',
  cat: 'meow'
};

passByRef(obj); // => cat: kitty
console.log(obj); // => cat: kitty

// Using `new` with primitive constructors
var str = 'apple';
var str2 = 'apple';
var str3 = new String('apple');

console.log(str == str2); // => true
console.log(str === str2); // => true

console.log(str == str3); // => true
console.log(str === str3); // => false
