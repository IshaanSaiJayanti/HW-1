var cat,mouse;
var cat1, catAnimation, cat2;
var mouse1, mouseAnimation, mouse2;
var garden, backImg;


function preload(){

    backImg = loadImage("garden.png");

    cat1 = loadImage("cat1.png");
    catAnimation = loadAnimation("cat2.png","cat3.png");
    cat2 = loadImage("cat4.png");

    mouse1 = loadImage("mouse1.png");
    mouseAnimation = loadAnimation("mouse2.png","mouse3.png");
    mouse2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(250,250);
    garden.addImage(backImg);

    cat = createSprite(460,490,40,40);
    cat.addImage(cat1);
    cat.scale = 0.1;

    mouse = createSprite(150,490,40,40);
    mouse.addImage(mouse1);
    mouse.scale = 0.1;

}

function draw() {

    background(255);


    keyPressed();

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        

        cat.addAnimation("catRunning",catAnimation);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning",mouseAnimation);
        mouse.changeAnimation("mouseRunning");
        
    }

    text(mouseX + ',' + mouseY,10,45);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;

     

        cat.addAnimation("catLastImage",cat2);
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage",mouse2);
        mouse.changeAnimation("mouseLastImage");

    }

}
