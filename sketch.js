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

}
function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    console.log("insideIf")
    writeStock(foodS);
    dog.addImage(dogHap);
  }

  drawSprites();
  fill(255,255,254);
   stroke("black"); 
   text("Food remaining : "+foodS,170,200); 
   textSize(13); 
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  
  })
}