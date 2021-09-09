
var canvasWidth = 400;
var canvasHeight = canvasWidth;

var gridSize = 20;
var sizePerCell = canvasWidth / gridSize;

let sketch = function(p) {
    let grid = new Array(gridSize);
    p.setup = function(){
      p.createCanvas(canvasWidth, canvasHeight);
      p.background(0);

      for(let i = 0; i < gridSize; i++)
      {
        grid[i] = new Array(gridSize);
        for(let j = 0; j < gridSize; j++)
        {
          grid[i][j] = new Cell(i, j, sizePerCell);
          if(p.random(1) > 0.5) grid[i][j].isOpen = true;
        }
      }

      p.fill(0, 160, 160);
      p.noStroke();
    }

    p.draw = function() {
      p.background(0);

      for(let i = 0; i < gridSize; i++)
      {
        for(let j = 0; j < gridSize; j++)
        {
          grid[i][j].DrawSelf(p);
        }
      }
    }
  };
new p5(sketch, 'exampleContainer');

console.log("test");
