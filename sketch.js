var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 160; k <=190; k = k + 190) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var k = 240; k <=290; k = k + 290) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 320; k <=390; k = k + 390) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 400; k <=450; k = k + 450) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 480; k <=570; k = k + 570) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 560; k <=570; k = k + 570) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 640; k <=650; k = k + 650) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 720; k <=730; k = k + 730) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 800; k <=810; k = k + 810) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-70; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 70; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var f = 0; f < particles.length; f++) {
    particles[f].display();
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10),10,10));
  }
}