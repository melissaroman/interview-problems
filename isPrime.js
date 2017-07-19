function isPrime(num) {
  for(var i = 2; i < num; i++) {
    // it has a divisor
    if(num % i === 0) return false;
  }
  return num !== 1;
}

console.log(isPrime(3), true);
console.log(isPrime(17), true);
console.log(isPrime(21), false);
console.log(isPrime(27), false);
console.log(isPrime(29), true);

// reverse a linked list
// var reverseLinkedList = function(linkedlist) {
//   var node = linkedlist;
//   var previous = null;
//
//   while(node) {
//     // save next or you lose it!!!
//     var save = node.next;
//     // reverse pointer
//     node.next = previous;
//     // increment previous to current node
//     previous = node;
//     // increment node to next node or null at end of list
//     node = save;
//   }
//   return previous;   // Change the list head !!!
// }
// linkedlist = reverseLinkedList(linkedlist);
