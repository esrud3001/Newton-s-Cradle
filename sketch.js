
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope, rope1, rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof = new Ground(400,100,600,20);
     bobObject1 = new Ball(200,350,50);
     bobObject2 = new Ball(300,400,50);
    //  bobObject3 = new Ball(400,550,100);
    //  bobObject4 = new Ball(500,550,100);
    //  bobObject5 = new Ball(600,550,100);

    rope1= new Rope(bobObject1.body,roof.body, -200,0);
   rope2= new Rope(bobObject2.body,roof.body, -100,0);
  //   rope3= new Rope(bobObject3.body,{x:400, y:100}, 0.04,300);
  //   rope4= new Rope(bobObject4.body,{x:500, y:100}, 0.04,300);
  //   rope5= new Rope(bobObject5.body,{x:600, y:100}, 0.04,300);
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  // bobObject3.display();
  // bobObject4.display();
  // bobObject5.display();
   rope1.display();
 rope2.display();
  // rope3.display();
  // rope4.display();
  // rope5.display();

  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW){
     Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100, y:-150});
    
    
}
  
  
}

