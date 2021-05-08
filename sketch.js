
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Crumpledpaper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    Crumpledpaper=new paper(200,650,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  Crumpledpaper.display()
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(Crumpledpaper.body,Crumpledpaper.body.position,{x:100,y:-125})		
	}
}