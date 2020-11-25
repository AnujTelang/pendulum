
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bar 

var ball1
var ball2 
var ball3
var ball4
var ball5 
var string1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

// all even numbers are at the righgt of ball1 and all odd numbers are at the right of ball1 
// ball1 is the ball in the middle.
ball1= new Ball(400,600,50);
// ball2 is in the right side of ball1.
ball2= new Ball(450,600,50);
//ball3 is in the left side of ball1 which is in the middle.
ball3= new Ball(350,600,50);
//right side of ball2 .
ball4= new Ball(500,600,50);
//left side of ball3
ball5= new Ball(300,600,50);
//bar holding the balls with a rope.
bar = new Bar(400,200,400,20);
// the sting that holds the balls togther,string one hold ball1.
string1= new String(ball1.body,{x:400, y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  bar.display();
  string1.display();
  drawSprites();
 
}



