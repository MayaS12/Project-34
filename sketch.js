const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, rope1;
var bob2, rope2;
var bob3, rope3;
var bob4, rope4;
var bob5, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1080, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(220,200);
	rope1 = new Rope(bob1.body, {x: 200, y: 100});

	bob2 = new Bob(380,360);
	rope2 = new Rope(bob2.body, {x: 360, y: 100});

	bob3 = new Bob(540,520);
	rope3 = new Rope(bob3.body, {x: 520, y: 100});

	bob4 = new Bob(700,680);
	rope4 = new Rope(bob4.body, {x: 680, y: 100});

	bob5 = new Bob(860,840);
	rope5 = new Rope(bob5.body, {x: 840, y: 100});

	Engine.run(engine);
  
}


function draw() {
  background(0);
 
  bob1.display();
 rope1.display();

 bob2.display();
 rope2.display();

 bob3.display();
 rope3.display();

 bob4.display();
 rope4.display();

 bob5.display();
 rope5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY});
}