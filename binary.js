function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

var root = new BinaryTreeNode(5);
root.insertLeft(3).insertLeft(2).insertLeft(1);
root.insertRight(7).insertLeft(10);

// returns sum of left and right trees, sum with initial node
function sumTreeNodes(node) {
  if (node === null) { return 0; }
  return node.value + sumTreeNodes(node.left) + sumTreeNodes(node.right);
}

// Another way returns sum of left and right trees, sum with initial node
// function sumTreeNodes(node) {
//   var left=0, right=0;
//   if (node.left){
//     left = sumTreeNodes(node.left);
//   }
//   if (node.right) {
//     right = sumTreeNodes(node.right);
//   }
//   return node.value + left + right;
// }

// returns the deepest leaf for any given node
function deepestLeaf(node, counter=0) {
  var leafValueLeft = counter;
  var leafValueRight = counter;

  if (node.left) {
    leafValueLeft = deepestLeaf(node.left, counter + 1);
  }

  if (node.right) {
    leafValueRight = deepestLeaf(node.right, counter + 1);
  }

  return leafValueLeft > leafValueRight ? leafValueLeft : leafValueRight;
}

// returns the shallowest leaf for any given node
function shallowestLeaf(node, counter=0) {
  var leafValueLeft = counter;
  var leafValueRight = counter;

  if (node.left) {
    leafValueLeft = shallowestLeaf(node.left, counter + 1);
  }

  if (node.right) {
    leafValueRight = shallowestLeaf(node.right, counter + 1);
  }

  return leafValueLeft < leafValueRight ? leafValueLeft : leafValueRight;
}


function checkIfSuperBalanced(node) {
  return (deepestLeaf(node) - shallowestLeaf(node)) < 2;
}

// Adam's really efficient solution:
// var findDepth = function findDepth(node, extremes={ min: Infinity, max: 0 }, depth=0) {
//
//   if (!node.left && !node.right) {
//     if (extremes.min > depth) extremes.min = depth;
//     if (extremes.max < depth) extremes.max = depth;
//   }
//
//   node.left && findDepth(node.left, extremes, depth+1);
//   node.right && findDepth(node.right, extremes, depth+1);
//
//   return extremes;
// }
//
// function isSuperBalanced(root) {
//   var res = findDepth(root);
//   return res.max - res.min <= 1;
// }


// console.log(sumTreeNodes(root));
console.log(deepestLeaf(root));
console.log(shallowestLeaf(root));
