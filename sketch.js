//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImage, dog2Image;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogimg.png");
  dog2Image = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  dog = createSprite(displayWidth/2,displayHeight/2,10,10);
  dog.addImage(dogImage);
  
}


function draw() {  

  background(46, 139, 87);
  dog.display();
  drawSprites();
  //add styles here

}



