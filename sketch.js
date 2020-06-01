const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 65;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  
	fill("red");
    bobObject1 = new Bob(267,490,65);
    bobObject2 = new Bob(332,490,65);
    bobObject3 = new Bob(397,490,65);
    bobObject4 = new Bob(462,490,65);
    bobObject5 = new Bob(527,490,65);

	fill("black");
    roof = new Roof(389,180,420,25);
    rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2+8,0);
    rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2+74,0);
    rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2+136,0);
    rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2+199,0);
    rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2+262,0);
}


function draw() {
  background(193,193,193);
  Engine.update(engine);	
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyDown(UP_ARROW)){
    bobObject1.launch();
  }
}



