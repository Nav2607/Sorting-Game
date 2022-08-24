var bin, binImage;
var LOAD=0;
var PLAY=1;
var END=2;
var gameState=0;
var compost, apple, bananapeel, egg, leaves, fish;
var recyling, bottle, can, paper, newspaper, cardboard;
var garbage, spoon, mask, straw, bag, cup;
var item, itemList;
var bgImage;
var score =0;
var life=3;
//preload all the sprites
function preload() {
  binImage = loadImage("images/rbin.png");
  bgImage = loadImage("images/bg.jpg");
  apple = loadImage("images/apple.png");
  bananapeel = loadImage("images/bananapeel.png");
  egg = loadImage("images/egg.png");
  leaves = loadImage("images/leaves.png");
  fish = loadImage("images/fish.png");
  bottle = loadImage("images/bottle.png");
  can = loadImage("images/can.png");
  paper = loadImage("images/paper.png");
  newspaper = loadImage("images/newspaper.png")
  cardboard = loadImage("images/cardboardbox.png");
  spoon = loadImage("images/spoon.png");
  mask = loadImage("images/mask.png");
  straw = loadImage("images/straw.png");
  bag = loadImage("images/bag.png");
  cup = loadImage("images/coffeecup.png");
  milk = loadImage("images/milk.png");
  glassbottle = loadImage("images/glassbottle.png");
  plastic_cup = loadImage("images/plastic-cup.png");

}
function setup() {
  createCanvas(1000, 550);
  //Create bin sprite
  bin=createSprite(500,489);
  bin.addImage(binImage);
  bin.scale = 0.2
  bin.setCollider("rectangle",0,0,820,480)
  //bin.debug = true;
  bin.visible= false;
  
  recycleGroup = new Group();
  enemyGroup = new Group();

  if(gameState===LOAD){
    form=new Form();
    form.display();
  }
}

function draw() {
  background(bgImage);
  //console.log(gameState)
 
  if(gameState === PLAY){
    form.hid();
    recycle();
    Enemy();
    
    bin.position.x = mouseX
    bin.visible = true;

    if(mouseX > 917){
      bin.position.x=917;
    }

    if(mouseX < 80){
      bin.position.x=80;
    }

    if(recycleGroup.isTouching(bin)){
      recycleGroup.destroyEach();
      score=score+1
    }

    textSize(45);
    textFont('fantasy');
    fill('orange');
    text('Score: ' + score,225,50);
    text('Life: '+ life, 650,50)
  }

  if(bin.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    life=life-1;
  }

  if(life===0){
    gameState = END;
  }

  if(gameState === END){
    recycleGroup.destroyEach();
    enemyGroup.destroyEach();

    recycleItem.velocityX = 0;
    enemyitem.velocityX = 0;
    bin.visible= false;
    textFont('fantasy');
    textSize(100);
    fill('orange');
    text('Score: ' + score,327,280);
    form.resetbutton();
  }
  drawSprites();
}

function recycle(){
  if(World.frameCount%80===0){
    recycleItem=createSprite(50,20,20,20);
    recycleItem.scale=0.2;
    //recycleItem.debug=true;
    var select_recycle = Math.round(random(1,9));
    //console.log(select_recycle);
    if (select_recycle== 1) {
      recycleItem.addImage(can);
    } 
    else if (select_recycle == 2) {
      recycleItem.addImage(bottle);
    }
    else if (select_recycle == 3) {
      recycleItem.addImage(paper);
    }
    else if (select_recycle == 4) {
      recycleItem.addImage(newspaper);
    }
    else if(select_recycle == 5){
      recycleItem.addImage(bag)
    }
    else if(select_recycle == 6){
      recycleItem.addImage(milk)
    }
    else if(select_recycle == 7){
      recycleItem.addImage(glassbottle)
    }
    else if(select_recycle == 8){
      recycleItem.addImage(plastic_cup)
    }
    else {
      recycleItem.addImage(cardboard);
    }
    recycleItem.x=Math.round(random(50,950));
    recycleItem.velocityY=7;
    recycleItem.setLifetime=100;

    recycleGroup.add(recycleItem);
  }
}

function Enemy(){
  if(World.frameCount%70-score===0){
    enemyitem=createSprite(50,20,20,20);
    enemyitem.scale=0.2;
    var select_enemy = Math.round(random(1,9));
   // console.log(select_enemy);
    if (select_enemy== 1) {
      enemyitem.addImage(mask);
    } 
    else if (select_enemy== 2) {
      enemyitem.addImage(bananapeel);
    } 
    else if (select_enemy== 3) {
      enemyitem.addImage(egg);
    }
    else if (select_enemy== 4) { 
      enemyitem.addImage(leaves);
    } 
    else if (select_enemy== 5) {
      enemyitem.addImage(fish);
    } 
    else if (select_enemy== 6) {
      enemyitem.addImage(spoon);
    } 
    else if (select_enemy== 7) { 
      enemyitem.addImage(straw);
    } 
    else if (select_enemy== 8) {
      enemyitem.addImage(cup);
    }  
    else {
      enemyitem.addImage(apple);
    } 
  enemyitem.x=Math.round(random(50,950));
  enemyitem.velocityY=7;
  enemyitem.setLifetime=50;

  enemyGroup.add(enemyitem);
 }
}