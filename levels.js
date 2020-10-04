import Brick from './brick.js';


 function buildLevel(game, level) {
    let bricks = [];
  
    level.forEach((row, rowIndex) => {
      
      row.forEach((brick, brickIndex) => {
        if (brick === 1) {
          let position = {
            x: 80 * brickIndex,
            y: 60 + 40 * rowIndex
          };
          bricks.push(new Brick(game, position));
        }
      });
    });
  
    return bricks;
  }





 const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0]
]

export {buildLevel, level1};