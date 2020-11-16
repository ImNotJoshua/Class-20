var movingObject;

var fixedObject;

function setup() {
 createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  movingObject = createSprite(200,200,50,100);
  movingObject.shapeColor = "red";

  fixedObject = createSprite(350,250,100,50);
  fixedObject.shapeColor = "green"
}

function draw() {
  background(155,169,156);  

  movingObject.y = mouseY;
  movingObject.x = mouseX;

  if(movingObject.x-fixedObject.x < fixedObject.width/2 + movingObject.width/2 && fixedObject.x-movingObject.x < movingObject.width/2 + fixedObject.width/2 && movingObject.y-fixedObject.y < movingObject.height/2 + fixedObject.height/2 && fixedObject.y-movingObject.y < fixedObject.height/2 + movingObject.height/2){

    movingObject.shapeColor = "yellow";
  }

  drawSprites();
}