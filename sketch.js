var Dog,DogImg,happyDog,foodStock,foods;
var feed , addFood
var fedTime,lastFed;
var foodObj;

function preload(){
  DogImg=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  foodObj = new Food();

  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the Dog");
  feed.positiion(700,95);
  feed.mousePressed(feedDog);
  
  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);


}

function draw() {
  background(46,139,87);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  fill(255);
  if (lastFed >=12){
    text("Last Feed : " + lastFed %12 + " PM " , 350,30);
  }else if (lastFed==0){
    text("Last Feed : 12 AM ",350,30);
  }else{
    text ("Last Feed :"+lastFed + "AM",350,30);
  }
  
  foodObj.display();
  drawSprites();
}

function readStock(data){
foods = data.val();
foodObj.updateFoodStock(foods);
}

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock(-1))
  database.re('/').update({
    Food: foodObj.getFoodStock().
    FeedTime=hour()
  })
  }

  function addFoods(){
    foods ++;
    dtabase.ref('/').update({
   Food:foods
   })
  }

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
