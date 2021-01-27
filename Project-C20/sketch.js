var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 60, 50);
  wall = createSprite(1200,200,60,200);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background("black"); 
  
  wall.shapeColor = "grey";
  car.shapeColor = "white";

  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX=0;
    
    var defor=0.5*weight*speed*speed/22500;

    if(defor>180){
      car.shapeColor = "red";
    }

    if(defor<180 && defor>100){
      car.shapeColor = "yellow";
    }

    if(defor<180){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}