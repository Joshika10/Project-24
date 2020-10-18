
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1=createSprite(460,665,20,70);
	box1.shapeColor="white";
	box2=createSprite(560,660,20,65);
	box2.shapeColor="white";
    box3=createSprite(520,690,100,20);
	box3.shapeColor="white";

	paper = new Paper(100,100,50);
	ground = new Ground(600,height,1200,20)


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

}

