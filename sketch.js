var fixedRect, movingRect;
var gameObject1, gameObject2;
var speed,weight
var d;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(1000,190, 50, 80);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;
  movingRect = createSprite(35, 190,50,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  speed  = random(55,190);
  weight = random(400,1500);

  movingRect.velocityX = speed;
  console.log(movingRect.velocityX);

  
  
}

function draw() {
  background("white");  

  

 if( movingRect.isTouching(fixedRect)){
   fixedRect.weight = random(400,1500);
   movingRect.velocityX = 0;
 } 

 

if(d <= 80){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(d >= 81 && d <= 180){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

}

if(d > 180){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}

d = (speed * weight *speed*0.5)/22500



 
  drawSprites();
}


