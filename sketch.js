var bullet,wall,thickness;
var speed,weight;
var deformation;

function preload(){

}

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80"
 
  deformation = (weight*speed*speed)/(thickness*thickness*thickness*2)

}

function draw() {
  background("pink");  

  console.log(deformation)

bullet.velocityX = speed;

textSize(50);
fill ("blue");

if (bullet.isTouching(wall)){
 
if (deformation<20){

  bullet.shapeColor =("white");
  wall.shapeColor =("lime")
  
} else if(deformation > 20){

  bullet.shapeColor = ("white");
  wall.shapeColor = ("red")

}
  bullet.velocityX = 0;
}

  drawSprites();
}