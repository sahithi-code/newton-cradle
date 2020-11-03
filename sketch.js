
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;

var bobObject1,thread,roof
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


var bd=30
var spx=200;
var spy=250;

bobObject1=new paper(spx-bd*2,spy,bd)
//bobObject2=new paper(170,250,30)
//bobObject3 = new paper(200,250,30)
//bobObject4=new paper(230,250,30)
//bobObject5=new paper(260,250,30)

roof = new Ground(200,150,150,20)
 
  
//thread = new rope(bobObject1.body,roof.body,-bd*2,0)

rope1= new rope(bobObject1.body,roof.body,-bd*2, 0)





Engine.run(engine);
 
//rope1 = new rope(roof,bobObject1)	//
}


function draw() {
  rectMode(CENTER);
  background(179,190,181);
bobObject1.display();
//bobObject2.display();
//bobObject3.display();
//bobObject4.display();
//bobObject5.display();


  roof.display();
  //thread.display();
  
   //strokeWeight(3)
  // line(bobObject1.position.x,bobObject1.position.y,rope.position.x,rope.position.y)

  drawSprites();}
 
*/


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;



var bob1,bob2,bob3,bob4
var roof
var rope1, rope2, rope3, rope4
var bobObject1,bobObject2, bobObject3, bobObject4
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof= new Ground(200,200,150,20)

	var bobDiameter=30		
	

	//Create the Bodies Here.
	startBobPositionX=200;
	startBobPositionY=500;
  bobObject1=new paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  //                    200-30*2=140,500,30

  bobObject2=new paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//                      200-30=170,500,
bobObject3=new paper(startBobPositionX,startBobPositionY,bobDiameter);
bobObject4=new paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bobObject5=new paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

//	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
//	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
//	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  rope1= new rope(bobObject1.body,roof.body,-bobDiameter*2, 0)
  rope2= new rope(bobObject2.body,roof.body,-bobDiameter, 0)
  rope3= new rope(bobObject3.body,roof.body,0, 0)
  rope4= new rope(bobObject4.body,roof.body,bobDiameter, 0)
  rope5= new rope(bobObject5.body,roof.body,bobDiameter*2, 0)

	//rope2= new Rope(bobObject2.body,ground.body,-bobDiameter*1, 0)
//	rope3= new Rope(bobObject3.body,ground.body,0,0)
	//rope4= new Rope(bobObject4.body,ground.body,bobDiameter*1,0)
	//rope5= new Rope(bobObject5.body,ground.body,bobDiameter*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
 // bobObject2.display()
 // bobObject3.display()
 // bobObject4.display()
 // bobObject5.display()
	
	roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	
	  }

}






