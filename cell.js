
class Cell
{
  constructor(newX, newY, newWidth)
  {
    this.x = newX;
    this.y = newY;
    this.width = newWidth;
    this.parent = null;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.isOpen = false;

  }

  DrawSelf()
  {
    if(this.isOpen)
      rect(this.x * this.width, this.y * this.width, this.width, this.width);
  }
}
