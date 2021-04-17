
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function preload() {
	paperImage = loadImage("paper.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

  paper = createSprite(100,630)
	paper.addImage(paperImage)
	paper.scale = 0.5
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if(keyCode === UP_ARROW) {
	  paper.y = paper.y - 3
  }
  if(keyCode === RIGHT_ARROW) {
	paper.x = paper.x + 3
}
if(keyCode === DOWN_ARROW) {
	paper.y = paper.y + 3
}

  groundObject.display();
  dustbinObj.display();
	paper.display();
}

