
var canvasWidth = 400;
var canvasHeight = canvasWidth;

var gridSize = 50;
var sizePerCell = canvasWidth / gridSize;

var grid = new Array(gridSize);

let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(canvasWidth, canvasHeight);
      p.background(0);
    }
  };
new p5(sketch, 'container');

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
