var sea ,ship, ship_animation;
function preload(){
ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(10,150,20,20)
sea.addImage("Image", seaImage)
sea.velocityX = -5;
sea.x = sea.width/2;
sea.scale = 0.3

ship = createSprite(150, 170, 20, 50)
  ship.addAnimation("animation",ship_animation)
  ship.scale = 0.3
}

function draw() {
  background("blue");
    

    if(sea.x<0){
      sea.x = sea.width/2;
    }
    drawSprites();
}
