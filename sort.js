// Sort function in JS
// Ternary statement is if, then
// condition ? expr1 : expr2 
function dynamicSort(property) {
  return function(a, b) {
    // if a[prop] < b[prop] then -1, else if a[prop] > b[prop] then 1, else 0
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result;
  }
}

var employees = [{
  name: "Joe",
  id: 1,
  food: 'orange'
}, {
  name: "Adam",
  id: 2,
  food: 'peanut butter'
}, {
  name: "Melissa",
  id: 3,
  food: 'salad'
}, {
  name: "Meghan",
  id: 4,
  food: 'hot dogs'
}];

console.log(employees);

console.log('Sorted by name:');
console.log(employees.sort(dynamicSort('name')));

console.log('Sorted by fudz:');
console.log(employees.sort(dynamicSort('food')));
