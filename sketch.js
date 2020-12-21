const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,stone,ground;
var launch;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,820,10);
	boy = new Boy(100,400,200,200);
	tree = new Tree(600,400,400,600);
	stone = new Stone(80,400,30,30);
	launch = new SlingShot(stone.body,{x:110,y:480})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  boy.display();
  tree.display();
  stone.display();
  
 
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
}
function mouseReleased() {
   SlingShot.fly();
  }



