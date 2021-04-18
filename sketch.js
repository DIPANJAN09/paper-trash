
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,595,width,20);
	paper = new Paper(150,580);
	dustbinObj=new dustbin(1100,580);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper.display();
  dustbinObj.display();
}
function keyPressed(){

if(keyCode===(UP_ARROW)){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:290,y:-385});
}
}
