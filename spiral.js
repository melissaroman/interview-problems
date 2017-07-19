const WIDTH = 5;
const HEIGHT = 5;
var INPUT = [];

// The nested for loop below prints out a grid of numbers of arbitrary size.
//       x
//     1,2,3
//  y  4,5,6
//     7,8,9
for (let x=0;x<WIDTH;x++) {
  INPUT.push([]);
  for (let y=0;y<HEIGHT;y++) INPUT[x][y] = y*WIDTH + x+1
}

// 0=right
// 1=down
// 2=left
// 3=up
var dir = 0;
var moves = 0;
var point = { x: 0, y: 0};
var moveCount = {
  x: WIDTH,
  y: HEIGHT-1
};

do {
  console.log(INPUT[point.x][point.y]);


  if ((dir === 0 || dir === 2) && moves === moveCount.x-1){
    moveCount.x--;
    dir = (dir + 1) % 4;
    moves = 0;
  }

  else if ((dir === 1 || dir === 3) && moves === moveCount.y-1){
    moveCount.y--;
    dir = (dir + 1) % 4;
    moves = 0;
  }

  else moves++;

  switch (dir){
    // Going right
    case 0: point.x++; break;
    // Going Down
    case 1: point.y++; break;
    // Going Left
    case 2: point.x--; break;
    // Going Up
    case 3: point.y--; break;
  }

} while (moveCount.x && moveCount.y);

  console.log(INPUT[point.x][point.y]);

