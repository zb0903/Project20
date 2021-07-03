var tom, jerry;


function preload() {
    //load the images here
    normalCatImage = loadAnimation("images/cat1.png");
    catImage = loadAnimation("images/cat2.png","images/cat3.png")
    happyCatImage = loadAnimation("images/cat4.png")
    normalMouseImage = loadAnimation("images/mouse1.png");
    mouseImage = loadAnimation("images/mouse2.png","images/mouse3.png");
    happyMouseImage = loadAnimation("images/mouse4.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,700);
    tom.addAnimation("resting",normalCatImage);
    tom.addAnimation("walking",catImage);
    tom.addAnimation("happy",happyCatImage);
    tom.scale = 0.15

    jerry = createSprite(400,700);
    jerry.addAnimation("normal",normalMouseImage);
    jerry.addAnimation("teasing",mouseImage);
    jerry.addAnimation("happy",happyMouseImage);
    jerry.scale = 0.1
}

function draw() {

    background(gardenImage);

 
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width - jerry.width)/2){
        tom.changeAnimation("happy",happyCatImage);
        jerry.changeAnimation("happy",happyMouseImage)
        tom.velocityX = 0;
    }

    drawSprites();
        
}
function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -4;
        tom.changeAnimation("walking",catImage);
        tom.scale = 0.2;
        jerry.frameDelay = 25;
        jerry.changeAnimation("teasing",mouseImage);
    }

}