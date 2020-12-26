var db;
var dog, happyDog, food, foodStock;
var dogImg, dogImg1;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  db = firebase.database();
  foodStack = db.ref("Food");
  foodStack.on("value", readStock);
}

function setup() {
  createCanvas(500, 500);
  
  
}


function draw() {  
  background(rgb(46, 139, 87));
  if(keyWentDown(UP_ARROW))
  {
      writeStock(food);
      dog.addImage(dogImg1);
  }

  drawSprites();

  textSize(20);
  stroke("white");
  fill("white");
  text("Food Remaining: " + food, 20, 200);
  

}
function readStock(data)
{
      food = data.val();
}

function writeStock(x)
{
  if(food >=0)
  {    
  db.ref("/").update({
        Food:x-1
      })
    }
}
