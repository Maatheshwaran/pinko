const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos = [];
var divisions = [];
var divisitionHeight = 300;


function setup(){
    var canvas = createCanvas(800,1200);
    engine = Engine.create();
    world = engine.world;

    for(var j = 40; j<=width; j=j+50){
      plinkos.push(new Plinkos(j,75));
    }
  
    for(var j = 15;j<=width-10; j=j+50){
      plinkos.push(new Plinkos(j,175));
    }
  
     
    

    ground = new Ground(600,1180,1600,20);
    division1 = new Divisition(10,1000,5,400);
    division2 = new Divisition(180,1000,5,400);
    division3 = new Divisition(350,1000,5,400);
    division4 = new Divisition(500,1000,5,400);
    division5 = new Divisition(650,1000,5,400);
    division6 = new Divisition(790,1000,5,400);

     
}

function draw() {
  background(0); 

  Engine.update(engine);
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  } 

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10));
  }
 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
 

  drawSprites();
}