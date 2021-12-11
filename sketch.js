var box1
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(150,30,200,80,2.5,3)
  
}

function draw() 
{
  background(220);
  box1.show()
  box1.moveup()
}

