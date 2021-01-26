var engine;
var world;
var board, striker, coin;
var topWall;
var leftWall;
var rightWall;
var bottomWall;
var game, gameState;
var coinsArray;

function setup() {
  createCanvas(innerWidth,innerHeight);
  engine = Matter.Engine.create();
  world = engine.world;
  world.gravity.scale = 0;
  // board = Matter.Bodies.rectangle(innerWidth / 2, innerHeight / 2, innerHeight * 9/10, innerHeight * 9/10, {isStatic: true});
  
  topWall = Matter.Bodies.rectangle(innerWidth / 2, innerHeight * 1/10, innerHeight * 8/10, 20, { isStatic: true });
  leftWall = Matter.Bodies.rectangle(innerWidth / 2 - (innerHeight * 4/10), innerHeight / 2, 20, innerHeight * 8/10, { isStatic: true });
  rightWall = Matter.Bodies.rectangle(innerWidth / 2 + (innerHeight * 4/10), innerHeight / 2, 20, innerHeight * 8/10, { isStatic: true });
  bottomWall = Matter.Bodies.rectangle(innerWidth / 2, innerHeight * 9/10, innerHeight * 8/10, 20, { isStatic: true });

  Matter.World.add(world, [topWall, leftWall, rightWall, bottomWall]);

  game = new Game();
  striker = new Striker();
  gameState = "turn1";
  coinsArray = []
  for (var i = 0; i < 9; i++){
    coinsArray.push(new Coin("Khaki"))
  }

  coinsArray.push(new Coin("Red"))

  for (var i = 0; i < 9; i++){
    coinsArray.push(new Coin("Black"))
  }

  coinsArray[0].body.position.x = innerWidth/2 - 12;
  coinsArray[0].body.position.y = innerHeight/2 - 12;
}

function draw() {
  Matter.Engine.update(engine);
  background("Burlywood");
  rectMode(CENTER);
  fill("saddleBrown");
  rect(topWall.position.x, topWall.position.y, innerHeight * 8/10, 20);
  rect(leftWall.position.x, leftWall.position.y, 20, innerHeight * 8/10);
  rect(rightWall.position.x, rightWall.position.y, 20, innerHeight * 8/10);
  rect(bottomWall.position.x, bottomWall.position.y, innerHeight * 8/10, 20);

  striker.display();

  for (var i = 0; i < coinsArray.length; i++){
    coinsArray[i].display();
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    // Matter.Body.setStatic(striker, false);
    Matter.Body.applyForce(striker.body, striker.body.position,
      {
        x: (striker.arrow.x - striker.body.position.x) / 100,
        y: (striker.arrow.y - striker.body.position.y) /100,
    });

    console.log(striker.arrow.x - striker.body.position.x);
    console.log(striker.arrow.y - striker.body.position.y);

    // Matter.Body.setStatic(striker, true);
  }
}

function mouseClicked(event){
  striker.arrow.x = event.x;
  striker.arrow.y = event.y;
}