const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var flake = [];
var boy1, boy2;

function preload() {
  bgImg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;
  
  boy1 = new Boy1(150,300);
  boy2 = new Boy2(800,600);
}

function draw() {
  background(bgImg);  


  Engine.update(engine);

  if(frameCount % 10 === 0) {
    flake.push(new Flake(random(0,1000), 0));
   }

  for (var l = 0; l < flake.length; l++) {
    flake[l].display();
    console.log(flake.length);
    if(flake[l].x > 550){
      flake[l].remove();
    }
  }

  boy1.display();
  boy2.display();

}
