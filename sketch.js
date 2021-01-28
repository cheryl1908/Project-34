var dog,happyDog,foodS,foodStock,database;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dogHap=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(200,200)
  dog.addImage(dogImg);
  dog.scale=0.1;
  
  database =firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHap);
}
}
function draw() {  
  background(46,139,87);
  drawSprites();

}
function readStock(){
  foodS=database.val;
}
function writeStock(){
  database.ref('/').update({
    Food:x
  })
}