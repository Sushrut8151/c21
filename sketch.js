var movRect , fixRect
var block1,block2,block3;
var wall,wall2;


function setup() {

  createCanvas(800,400);
 movRect =  createSprite(200, 50, 40, 80);
 movRect.shapeColor = "green";

 fixRect =  createSprite (200, 100, 80,40);
 fixRect.shapeColor = "red";

 block1 =  createSprite (100, 100, 60,20);
 block1.shapeColor = "brown";

 block2 =  createSprite (150, 250, 60,20);
 block2.shapeColor = "brown";
 block2.velocityX = 3;

 block3 =  createSprite (350, 300, 80,40);
 block3.shapeColor = "brown";

 wall = createSprite (650,250,10,100);
 wall.shapeColor = "black";

 wall2 = createSprite(50 , 250 , 10 , 100);
 wall2.shapeColor = "black";
 

}

function draw() {
  background("white"); 
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  

   console.log(movRect.x-block1.x); 
   //collision 

if(isTouching(block1,movRect))
{
  block1.shapeColor = "red";
  movRect.shapeColor = "purple"; 
}
else 
{
  block1.shapeColor = "pink"; 
  movRect.shapeColor = "red";

}

/*if(isTouching(block2,movRect))
{
  block2.shapeColor = "red";
  movRect.shapeColor = "purple"; 
}
else 
{
  block2.shapeColor = "pink"; 
  movRect.shapeColor = "red";

}

if(isTouching(block3,movRect))
{
  block3.shapeColor = "red";
  movRect.shapeColor = "purple"; 
}
else 
{
  block3.shapeColor = "pink"; 
  movRect.shapeColor = "red";

}*/
  
 if (collide(wall,block2))
 {
  block2.shapeColor = "yellow";
  wall.shapeColor = "purple"; 
  block2.velocityX = -block2.velocityX ; 
 }

 if (collide(wall2,block2))
 {
  block2.shapeColor = "blue";
  wall2.shapeColor = "red"; 
  block2.velocityX = -block2.velocityX ; 
 }

  drawSprites();
}
