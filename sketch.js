var tom, jerry;


function preload() {
    //load the images here
    normalCatImage = loadImage("images/cat1.png");
    catImage = loadImage("images/cat2.png","images/cat3.png")
    happyCatImage = loadImage("images/cat4.png");
    normalMouseImage = loadImage("images/mouse1.png")
    mouseImage = loadImage("images/mouse2.png","images/mouse3.png");
    happyMouseImage = loadImage("images/mouse4.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,700);
    tom.addImage("resting",normalCatImage);
    tom.addImage("walking",catImage);
    tom.addImage("happy",happyCatImage);
    tom.scale = 0.15

    jerry = createSprite(400,700);
    jerry.addImage("normal",normalMouseImage);
    jerry.addImage("teasing",mouseImage);
    jerry.addImage("happy",happyMouseImage);
    jerry.scale = 0.1
}

function draw() {

    background(gardenImage);

    if(keyDown("space")){
        jerry.changeImage("teasing",mouseImage);
     }
 
    if(keyDown("left")){
         tom.changeImage("walking",catImage);
         tom.velocityX = -2;
         tom.scale = 0.2;
    }
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width - jerry.width)/2){
        tom.changeAnimaton("happy",happyCatImage);
        tom.velocityX = 0;
    }

    drawSprites();
        
}