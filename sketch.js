var rectangle1, rectangle2

function setup() {
  createCanvas(800,400);
 rectangle1 = createSprite(400, 200, 50, 50);
 
 rectangle2 = createSprite(300, 100, 50, 50);
}

function draw() {
 rectangle1.x = mouseX;
 rectangle1.y = mouseY;
  background(0);
  if(rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2
  && rectangle2.x - rectangle1.x < rectangle1.width/2 + rectangle2.width/2
  && rectangle1.y - rectangle2.y < rectangle1.height/2 + rectangle2.height/2
  && rectangle2.y - rectangle1.y < rectangle1.height/2 + rectangle2.height/2 ){
    rectangle1.shapeColor = "red";
    rectangle2.shapeColor = "red";
  } else {
    rectangle1.shapeColor = "grey";
    rectangle2.shapeColor = "grey";
  }
  drawSprites();
}