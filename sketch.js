
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var stone, hammer, ground, rubber, sand, sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, iron;


function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(10, 10);
	stone = new Stone(600, 200, 120, 120);
	rubber = new Rubber(400, 200);
	sand = new Sand(200, 500);
	sand1 = new Sand(200, 500);
	sand2 = new Sand(200, 500);
	sand3 = new Sand(200, 500);
	sand4 = new Sand(200, 500);
	sand5 = new Sand(200, 500);
	sand6 = new Sand(200, 500);
	sand7 = new Sand(200, 500);
	sand8 = new Sand(200, 500);
	sand9 = new Sand(200, 500);
	iron = new Iron(800, 500, 80, 50);
	ground = new Ground(600, 550, 1250, 10);

}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  Engine.update(engine);

hammer.display();
stone.display();
rubber.display();
sand.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
sand7.display();
sand8.display();
sand9.display();
iron.display();
ground.display();

}



