var bath1,bath2,brush,drik1,drink2,eat1,eat2,gym1,gym2,gym11,gym12,iss,move,move1,sleep;
var bathImg1,bathImg2,brushImg,drinkImg1,drinkImg2,eatImg1,eatImg2,gymImg1,gymImg2,gymImg11,gymImg12,issImg,moveImg,moveImg2,sleepImg;



function preload()
bath= loadImg("bath1.png","bath2.png");
brush=loadImg("brush");
drink=loadImg("drink1.png","drink2.png");
eat=loadImg("eat1.png","eat2.png");
gym=loadImg("gym1.png","gym2.png","gym11.png","gym12.png");
iss=loadImg("iss.png")

function setup() {
  createCanvas(400, 400);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
}

function draw() {
  background("iss.png");
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.y=350
    astronaut.velocityX=9
    astronaut.velocityY=9
  }
  drawSprites()
}


