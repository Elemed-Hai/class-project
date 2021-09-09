
var canvasWidth = 400;
var canvasHeight = canvasWidth;

var gridSize = 50;
var sizePerCell = canvasWidth / gridSize;

var grid = new Array(gridSize);

let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(canvasWidth, canvasHeight);
      p.background(127);

      for(let i = 0; i < gridSize; i++)
      {
        grid[i] = new Array(gridSize);
        for(let j = 0; j < gridSize; j++)
        {
          grid[i][j] = new Cell(i, j, sizePerCell);
          if(p.random(1) > 0.5) grid[i][j].isOpen = true;
        }
      }

      p.noStroke();
    }

    p.draw = function() {
      p.background(0);
      p.fill(0, 160, 160);
      console.log("aa");
      for(let i = 0; i < gridSize; i++)
      {
        for(let j = 0; j < gridSize; j++)
        {
          grid[i][j].DrawSelf();
        }
      }

    }
  };
new p5(sketch, 'exampleContainer');

console.log("test");
/*
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  for(let i = 0; i < gridSize; i++)
  {
    grid[i] = new Array(gridSize);
    for(let j = 0; j < gridSize; j++)
    {
      grid[i][j] = new Cell(i, j, sizePerCell);
      if(random() > 0.5) grid[i][j].isOpen = true;
    }
  }

  fill(0, 160, 160);
  noStroke();
}

function draw() {
  background(0);

  for(let i = 0; i < gridSize; i++)
  {
    for(let j = 0; j < gridSize; j++)
    {
      grid[i][j].DrawSelf();
    }
  }
}
//*/
