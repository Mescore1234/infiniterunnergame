var PLAY = 1;
var END = 0;
var gameState = PLAY;
var car, carimage
var road, roadcopy,roadcopy2,roadcopy3, invisibleGround, roadImage, roadcopyImage,roadcopy2Image,roadcopy3Image;
var obstaclegroup
var  obstacle1,obstacle1image, obstacle2,obstacle2image
var obstacle3,obstacle3image, obstacle4,obstacle4image, obstacle5,obstacle5image, obstacle6,obstacle6image;
var obstacle
var score;
var highscore=0


function preload(){
  carimage = loadImage("maincar.png");
  roadImage = loadImage("roadbackground.png");
  roadcopyImage = loadImage("roadbackgroundcopy.png")
  roadcopy2Image = loadImage("roadbackgroundcopy2.png")
  roadcopy3Image = loadImage("roadbackgroundcopy3.png")
  obstacle1image = loadImage("aquacar.png");
  obstacle2image = loadImage("bluecar.png");
  obstacle3image = loadImage("greencar.png");
  obstacle4image = loadImage("purplecar.png");
  obstacle5image = loadImage("yellowcar.png");
  obstacle6image = loadImage("tire.png");
  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  road = createSprite(0,300,1200, 400);
  road.scale=2
  road.addImage(roadImage);
 
  roadcopy = createSprite(500,300,1200, 400)
  roadcopy.scale=2
  roadcopy.addImage(roadcopyImage);
 
  roadcopy2 = createSprite(1000,300,1200, 400)
  roadcopy2.scale=2
  roadcopy2.addImage(roadcopy2Image);

  roadcopy3 = createSprite(1500,300,1200, 400)
  roadcopy3.scale=2
  roadcopy3.addImage(roadcopy3Image);
  
  car = createSprite(600,300,100,40);
  car.scale = 0.2;
  car.addImage(carimage)
  car.debug=true
  car.setCollider("rectangle",0,0,500,200)


  obstacle6 = createSprite(600,500,100,40);
  obstacle6.scale = 0.23;
  obstacle6.addImage(obstacle6image)

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  road.velocityX = -4
    roadcopy.velocityX = -4
    roadcopy2.velocityX = -4
    roadcopy3.velocityX = -4
  

  obstaclegroup = new Group();
  
  
  
  
  
  
  score = 0;
  
}
function draw (){
  background("grey")
  
  
  


  if(keyDown(UP_ARROW)&&car.y>220) {
    car.y+=-3
  }
  if(keyDown(DOWN_ARROW)&&car.y<380) {
    car.y+=3
  }
  if(keyDown(LEFT_ARROW)&&car.x>40) {
    car.x+=-3
  }
  if(keyDown(RIGHT_ARROW)&&car.x<1100) {
    car.x+=3
  }
  if(gameState===PLAY){
      score = score + Math.round(frameCount/60);
      fill("black")

      if (road.x <-100){
      road.x = 1500
    }
    if (roadcopy.x <-100){
      roadcopy.x = 1500
    }
    if (roadcopy2.x <-100){
      roadcopy2.x = 1500
    }
    if (roadcopy3.x <-100){
      roadcopy3.x = 1500
    }
    
    
    spawncars()
    
    if(car.isTouching(obstaclegroup)){
      gameState=END
    }
  }
  if(gameState===END){
    obstaclegroup.destroyEach()
    obstacle.destroy()
    car.destroy()
    road.velocityX=0
    roadcopy.velocityX=0
    roadcopy2.velocityX=0
    roadcopy3.velocityX=0
    obstacle6.destroy()
  }
  
 
  drawSprites()
 if(gameState==END){
  textSize(100)
  fill("red")
  text("GAME OVER ",width/2-300,height/2+50);
  
 }
 textSize(30)
 text("Score: "+ score,width-300,height-500);

}

function spawncars(){
  if(frameCount%60==0){
    obstacle = createSprite(random(0,width-300),random(0,height),100,40);
  obstacle.scale = 0.35;
  obstacle.velocityX=2
  obstacle.debug=true
  obstacle.setCollider("rectangle",0,0,300,100)

  var rand=Math.round(random(0,5))
  switch(rand){
    case 1:obstacle.addImage(obstacle1image)
    break;
    case 2:obstacle.addImage(obstacle2image)
    break;
    case 3:obstacle.addImage(obstacle3image)
    break;
    case 4:obstacle.addImage(obstacle4image)
    break;
    case 5:obstacle.addImage(obstacle5image)
    break;
  }
  obstaclegroup.add(obstacle)
  }
}