var bg,bgImage;
var Score;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacelImage = loadImage("obstacle.png");
  bgImage=loadImage("jungle.jpg");
 
}



function setup() {
 // createCanvas(2000, 1000);
  bg = createSprite(300,100);  
  bg.addImage("jungle.jpg",bgImage);
  bg.scale=1
  monkey = createSprite(80, 250, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  banana = createSprite(150,100);  
  banana.addImage("banana.png",bananaImage);
  banana.scale=0.1
  Score=0
   obstacle = createSprite(400,150);  
  
  obstacle.scale=0.
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
FoodGroup = createGroup();
obstacleGroup = createGroup();

  
}


function draw() {
  background("black");
      
  text("Score",Score,100,50)
  stroke("black");
  textSize(20);
  fill("black");
  
  
  bg.velocityX=-7
  banana.velocityX=-7
   
 if (bg.x < 0){
      bg.x = bg.width/2;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
     //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
      
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();  
    monkey.scale= monkey.scale + 0.2;
  }
      if(monkey.isTouching(obstacleGroup)){        
      monkey.scale=(0.10)  
  }
  
    spawnFood();
    spawnObstacles();

  
  
spawnFood();
  spawnObstacles();
  drawSprites();

}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.scale=0.4
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
  
  
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,150,10,20);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacelImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}








