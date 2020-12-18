var fixedRect, movingRect;

function setup() {
  createCanvas(600,800);

  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "orange";
  fixedRect.velocityY = 4;

  movingRect = createSprite(300, 600, 80, 50);
  movingRect.shapeColor = "orange";
  movingRect.velocityY = -3;
}

function draw() {
  background("lightblue");  

   if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
    }

  drawSprites();
}
