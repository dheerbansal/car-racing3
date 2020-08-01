var fixedRect, movingRect;
var gameObject1, gameObject2;
var speed,weight
var d;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(1000,190, 50, 80);
  fixedRect.shapeColor = "grey";
  //fixedRect.debug = true;
  movingRect = createSprite(35, 190,35,35);
  movingRect.shapeColor = "white";
  //movingRect.debug = false;
  speed  = random(55,90);
  weight = random(400,1500);

  movingRect.velocityX = speed;
 // console.log(movingRect.velocityX);

  
  
}

function draw() {
  background("white");  

  

 if( movingRect.isTouching(fixedRect)){
   fixedRect.weight = random(400,1500);
   movingRect.velocityX = 0;
 } 

 
 d = (speed * weight *speed*0.5)/22500

if(d < 100){
  movingRect.shapeColor = "green";
  
}

if(d >= 100 && d < 180){
  movingRect.shapeColor = "yellow";
  

}

if(d > 180){
  movingRect.shapeColor = "red";
  

}





 
  drawSprites();
}


