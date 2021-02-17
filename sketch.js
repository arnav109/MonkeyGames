
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0;
var ground;
var background,backgroundImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage= loadImage("jungle.jpg");
 
}



function setup() {
 
  background=createSprite(0,0,400,400);
  background.addImage(backgroundImage);
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);

  bananaGroup=createGroup();
  obstacleGroup=createGroup(); 
}


function draw() {

  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  } 
   monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2; 
    }
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  

  
   
 
 if(bananaGroup.isTouching(monkey))
   {
     bananaGroup.destroyEach();
     score=score+2;
   }
    

   drawSprites();
  
stroke("blue");
  textSize(20);  
  fill("blue");
  text("Score: "+score,180,60);
  
 
  switch( score){
  
    case 10:monkey.scale=0.12;
      break;
     case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default:break;    
       
  }
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale=0.09;
  
}

function bananas(){
 if(World.frameCount%80===0) {
  var banana=createSprite(400,200,20,20);
   banana.scale=0.1;
   banana.addImage( bananaImage)
  
banana.y=Math.round(random(50,340)) ;
banana.velocityX=-7;
banana.setlifetime=100;
   
bananaGroup.add(banana) ;  
   
   
   
 }
  
}
function obstacles(){
if(World.frameCount%300===0){
obstacle=createSprite(400,200,20,20)   
obstacle.addImage( obstaceImage)  ;
obstacle.y=325; 
obstacle.velocityX=-8;   
obstacle.setLeftime=50;
obstacle.scale=0.2;
  
 obstacleGroup.add(obstacle);
   
   }  
  
}
}