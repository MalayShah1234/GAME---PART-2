var zombieGroup;


function preload(){

shooterimage = loadImage("assets/shooter_2.png")
shooterShooting = loadImage("assets/shooter_3.png")
bgImage = loadImage("assets/bg.jpeg")
zombieImage = loadImage("assets/zombie.png")
heart1Image = loadImage("assets/heart_1.png")
heart2Image = loadImage("assets/heart_2.png")
heart3Image = loadImage("assets/heart_3.png")
}




function setup(){
    var canvas = createCanvas(windowWidth , windowHeight);
    //engine = Engine.create();
    //world = engine.world;
    bg = createSprite(width/2,height/2,50,50)
    bg.addImage(bgImage)
    shooter = createSprite(100,450,30,30)
    shooter.addImage(shooterimage)
    shooter.scale = 0.5
     zombieGroup = new Group()
   shooter.setCollider("rectangle",0,0,270,500)

 heart1 = createSprite(750,40,50,50)
 heart1.addImage(heart1Image)
heart1.visible = false;
heart1.scale = 0.3



 heart2 = createSprite(750,40,50,50)
 heart2.addImage(heart2Image)
 heart2.scale = 0.3
 heart2.visible = false;


 heart3 = createSprite(width - 150,40,50,50)
heart3.scale = 0.3
 heart3.addImage(heart3Image)
heart3.scale = 0.3




}

function draw(){
    background(0);
  //  Engine.update(engine);
   
  SpanZombies()

  if(keyDown("UP_ARROW")){
      shooter.y = shooter.y - 20;
  }
  
  if(keyDown("DOWN_ARROW")){
      shooter.y = shooter.y + 20;
  }
  
  if(keyDown("RIGHT_ARROW")){
      shooter.x = shooter.x + 20;
  }
  
  if(keyDown("LEFT_ARROW")){
      shooter.x = shooter.x - 20;
  }

  if(keyWentDown("SPACE")){
      shooter.addImage(shooterShooting)
  }
   
 else if(keyWentUp("SPACE")){
     shooter.addImage(shooterimage)
 }

if(zombieGroup.isTouching(shooter)){
    zombieGroup.destroyEach();
}




  drawSprites()
    
}


function SpanZombies(){
    if(frameCount%200 === 0){
        zombie = createSprite(random( 400, 700 ),random(100 , 500 ), 20 , 20)
        zombie.addImage(zombieImage)
        zombie.velocityX = -2
       zombie.scale = 0.25
       zombie.lifetime = 500
       zombie.setCollider("rectangle",0,0,400,1000)
       zombieGroup.add(zombie)
    
   
    }
}