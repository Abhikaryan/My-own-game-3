var player
var shooterimage, shootingimage
var backgroundimage
var zombieimage

var gameState = "Initial"


function preload(){
  shooterimage = loadAnimation("assets/shooter_1.png", "assets/shooter_2.png");
  shootingimage = loadImage ("assets/shooter_3.png");
  backgroundimage = loadImage("assets/bg.jpeg");
  zombieimage = loadImage("assets/zombie1.png");
}

function setup() {
  createCanvas(600, 350);
  player = createSprite(300, 310, 20,80)
  player.addAnimation("shooter", shooterimage)
  player.scale = 0.2;

  zombiesGroup = createGroup();
}

function draw() {
  background(backgroundimage);
  drawSprites();
  //text ("Press space to start!", 200,50);

  if(gameState == "Initial"){
    fill ("red")
    textSize(25)
    text ("Press space to start!", 200,50)
    if(keyDown("space")){
      gameState = "Play"
    }
  }

  if(gameState == "Play"){
    if (keyDown("right") && player.x<350){
      player.x = player.x + 5
    }
    if (keyDown("left") && player.x>225){
      player.x = player.x - 5
    }
    if (keyDown("up") && player.y>100){
      player.y = player.y - 5
    }
    if (keyDown("down") && player.y<380){
      player.y = player.y + 5
    }
    if (keyDown("space")){
      player.addImage(shootingimage);
    }
    zombieSpawn(Math.round(random(50,200)));
    //zombieSpawn(Math.round(random(100,200)));

  }

  if(gameState == "End"){

  }

 

  
}

function zombieSpawn(y){
  if (frameCount % 100 === 0) {
    var zombie = createSprite(Math.round(random(400,600)),y,20,50);
    zombie.addImage(zombieimage);
    zombie.scale = 0.05
    zombie.velocityX = -1
    zombie.velocityY = 1.5
  
    zombiesGroup.add(zombie) 
}
}
